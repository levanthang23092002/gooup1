const id_name = document.getElementById('username');
const id_room = document.getElementById('room');
const btn_join = document.getElementById('btn_join');
const id_message= document.getElementById('id_message');
const btn_submit = document.getElementById('btn_send');
const ul_message =document.getElementById('ul_message');


const socket = io.connect('');
socket.on("connect", (data)=>{
    console.log("đã kết nối server");
})

btn_join.addEventListener('click',()=>{
   
    const room = id_room.value;
    socket.emit("join", room)
    alert("bạn đã tham gia room: "+ room);
})
btn_submit.addEventListener('click',()=>{
   const name = id_name.value;
    const message = id_message.value;
    socket.emit("message", name +": "+message)
})
socket.on('thread', (data) => {
   
    const text = data.split(':');
   
    const li = document.createElement("li");
    const a = document.createElement("a");
    const textNode = document.createTextNode(text[0]+":  ");
    const messageNode = document.createTextNode(text[1]);
    
    a.classList.add("sent-name");
    a.appendChild(textNode);
    li.appendChild(a);
    li.appendChild(messageNode);
    
    ul_message.appendChild(li);
    ul_message.value =""
});

