//area de Agregar usuario 
let useradd = document.getElementById('useradd');
let passuser = document.getElementById('passuser');
let AddUser = document.getElementById('btn-AddUser');

//area de seleccion de chat
//area de chat
let output = document.getElementById('output');
let output2 = document.getElementById('output2');
let messageInput = document.getElementById('messageInput');
let btnSend = document.getElementById('send');
let back = document.getElementById('back');

//extras
let SectionUser = document.getElementById('SectionUser');
let JoinUser = document.getElementById('JoinUser');

//**Areas de trabajo***//
let sectionAdduser = document.getElementById('sectionAdduser');
let selectChat = document.getElementById('selectChat');
let sectionChat = document.getElementById('sectionChat');

//titulos
let TitleUser = document.getElementById('TitleUser');
let TitleUser2 = document.getElementById('TitleUser2');
let TitleUser3 = document.getElementById('TitleUser3');
//*****//
//Add New User

let UserAdmin="";
let idSend="";
let idRecived="";
let UserJoinRoom="";


const Users=[
	{name:"luis"},
	{name:"Ciela"}
]
// console.log(Users[0].name);

// console.log(Users.forEach((element,index)=>{
	
	// console.log(index+")",element.name);
	
	
	
// }));