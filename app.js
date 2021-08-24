const express = require('express');
const path = require('path');
const app = express();
const socket = require('socket.io');

// settings
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

// listen the server
const server = app.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});

/**Socket**/
const io = socket(server);
// console.log(io);
let Users = [];

//iniciar coneccion a socket
io.on('connection',(socket) => {
	
	
	console.log('socket connection opened:', socket.id);
		
		const addUser=(NameUser,Socketid)=>{
				Users.push({NameUser,Socketid});
				// console.log(Users);			
		}
		

		const removeUser = (socketId) => {
			  // Users = Users.filter((id => user.socketId !== socketId);
			
					Users.forEach((element,index)=>{
						
						// console.log("obj "+index,element);
						
						if(element.Socketid==socketId){
							
							// console.log("remover",element.Socketid);
							Users.splice(index, 1);
						}
						
					});
			};
	
		socket.on('connect', function(data){
				if(Users.length>0){
					socket.emit('ListRooms',Users);
				}
		});	
	
		socket.on('addUser',function(username){

				addUser(username,socket.id);

				if(Users.length>0){
					socket.broadcast.emit('ListRooms',Users);
				}

		});

	//mensages
    //obtienene la informacion del chat
	  
	  socket.on('Message',function(Sms,UserAdmin,idsend,idrecived,slug){
		
				io.to(idrecived).to(idsend).emit('MessageRecived',UserAdmin,Sms,slug);

		 
		 
	
	  });

    //obtienene la informacion del chat 
	  socket.on('typing',function(user){
		 
			socket.broadcast.to(socket.room).emit('typing',user);
		
	  });
  
	//detectar desconeccion
	  socket.on('Leave',() => {
				  
				   removeUser(socket.id);
				   socket.emit('ListRooms',Users);
	  });

	  socket.on('disconnect',() => {
				  
				   removeUser(socket.id);
				   socket.emit('ListRooms',Users);
				   // console.log(Users);
	  });

});

	



	// https://github.com/safak/youtube/blob/chat-app/socket/index.js
	
	// console.log('socket connection opened:', socket.id);
	

				// console.log("Number-Rooms",socket.rooms.size);
				// console.log(socket.rooms);

	// socket.leave('room1');
	// // // socket.broadcast.to('room1').emit('function', 'data1', 'data2');

// https://ichi.pro/es/cree-una-sala-de-chat-con-node-js-y-socket-io-250569453838381
// https://es.stackoverflow.com/questions/304403/mostrar-las-rooms-en-socket-io

// informacion
// https://socket.io/docs/v4/namespaces/
// /historial de eventos

//funcion de escucha constante
// socket.on ( "detalles" , ( ... args ) => { // ... });

//funcion de escucha una sola ves
// socket.once ( "detalles" , ( ... args ) => { // ... });

// elimina el oyente de la matris de oyentes
// socket.off ( "detalles" , oyente);

// elimina todos los oyentes o los del eventName especificado .
	// para un evento específico
	 // socket.removeAllListeners ( "detalles" ); 
	// para todos los eventos
	 // socket.removeAllListeners ();

// Agrega un oyente que se activará cuando se emita cualquier evento
	// socket.onAny ( ( eventName, ... args ) => { // ... });
  
 // Agrega un oyente que se activará cuando se emita cualquier evento.
  // El oyente se agrega al comienzo de la matriz de oyentes
	// socket.prependAny ( ( eventName, ... args ) => { // ... });
 
 // Elimina todos los oyentes catch-all, o el oyente dado. 
// const listener = ( eventName, ... args ) => { console .log (eventName, args); }
 

// socket.onAny (oyente);

// // y luego ...
 // socket.offAny (oyente);

// // o todos los oyentes
// Transmitir a clientlocal
  // io.local.emit ( "hola" , "mundo" );
  
  // enviar a todos menos al que emite
  // socket.broadcast.emit('chat:typing', data);
  
  
    
  // socket.join('sala1');
	// io.to('sala1').emit('someevent',"de la sala1");
  
  
		// console.log('socket connection opened:', socket.id);
		
		// socket.emit("hello", "Hola te has Connectado");
		
		// socket.volatile.emit ("hello", "podría o no ser recibido mesaje volatil" );
		
		// io.local.emit("hola","mensaje local");
		