// conenction
let socket = io();

socket.emit('conect');

function Style(){

	let Containner = document.getElementById("output").childElementCount;
	
	// for(let i=0; i<Containner; i++){
	
		// if(document.getElementById(UserAdmin)){
			
		// document.getElementsByClassName(UserAdmin)[i].style.cssText = 'background-color:green; color:white; padding:10px;';
		
		// }
		
		// if(document.getElementById(UserJoinRoom)){
			
		// document.getElementsByClassName(UserJoinRoom)[i].style.cssText = 'background-color:grey; color:white; padding:10px;';
			
		
			
		// }
	
	// }
}

socket.on("connect", () => {
  // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  
  idSend=socket.id;
  
});

socket.on("disconnect", () => {
  // console.log(socket.id); // undefined
   // console.log(socket.connected); // false
});


AddUser.addEventListener('click',function(){
	
			UserAdmin = useradd.value; 
			// Pass = passuser.value;		 
			TitleUser.innerHTML = UserAdmin;

			socket.emit('addUser',UserAdmin);
		
			sectionAdduser.style.display="none";
			selectChat.style.display="block";
			
			
});

socket.on("ListRooms",(Rooms) => {

		CreateDivUserJoin(Rooms,"SectionUser");
		
});


btnSend.addEventListener('click',function(){
	
			socket.emit("Message",messageInput.value,UserAdmin,idSend,idRecived,UserAdmin);
			messageInput.value="";
			Style();
			
});

messageInput.addEventListener('keypress', function(){
	
		    socket.emit("typing",UserAdmin);
			
});

back.addEventListener('click',function(){	

			socket.emit("Leave",socket.id);	
			selectChat.style.display="block";
			sectionChat.style.display="none";
			
});

socket.on('typing', function(data) {
			output2.innerHTML = `<p ><em>${data} is typing a message...</em></p>`
});

socket.on('MessageRecived',function(User,Sms,Recived){
			output2.innerHTML = " ";
			new Messages(User,Sms,"output",Recived);
});

function Messages(user,sms,obj,Recived){
		if(Recived==UserAdmin){
					let p = document.createElement('p');
					p.id=Recived;
					// p.className="SMS"+" "+Recived;	
					p.className="sms active";	
						document.getElementById(obj).appendChild(p);					
					/***texto de la descripcion***/	
					var node = document.createTextNode(user+":"+sms);
					p.appendChild(node);
		
			
			
		}else{
					let p = document.createElement('p');
					p.id=Recived;
					// p.className="SMS"+" "+Recived;	
					p.className="sms";	
						document.getElementById(obj).appendChild(p);					
					/***texto de la descripcion***/	
					var node = document.createTextNode(user+":"+sms);
					p.appendChild(node);
		
			
			
		}

		// Style();
}

let NumberUser=0;

function CreateDivUserJoin(info,obj){
	
	var cell = document.getElementById('SectionUser');

			if(cell.hasChildNodes()){
					while (cell.childNodes.length >= 1){
							cell.removeChild( cell.firstChild );
								}//while
					}	
	
	info.forEach((element, index) => {
			
		let div = document.createElement('div');
		div.id="Areajoin";
		div.className="Areajoin";
		document.getElementById(obj).appendChild(div);
		
		let p = document.createElement('p');
			// p.id="Title-Article";
			p.className="Send";	
			document.getElementsByClassName('Areajoin')[index].appendChild(p);
						
		/***texto de la descripcion***/	
		var node = document.createTextNode(element.NameUser+" | "+element.Socketid);
			p.appendChild(node);

		let button = document.createElement('button');
			button.id="Join";
			button.innerHTML="Join";
			button.onclick = function(){
			
				// socket.emit("Join",element,UserAdmin);
				
				selectChat.style.display = "none";
				sectionChat.style.display = "block";
				
				UserJoinRoom = element.NameUser;
				idRecived = element.Socketid;
				
				TitleUser2.innerHTML = UserAdmin;
				TitleUser3.innerHTML = UserJoinRoom;
			
		}

		document.getElementsByClassName('Areajoin')[index].appendChild(button);
			
	
	})
	
}


