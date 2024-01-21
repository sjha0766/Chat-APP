const socket = io('https://chat-app-dusky-three.vercel.app');

const appendMessage = (message, msgType) => {
  const ul = document.querySelector('.list-group');
  const li = document.createElement('li');
  if(msgType === 'sender'){
    li.className = 'list-group-item list-group-item-success align-right';
  }else{
    li.className = 'list-group-item list-group-item-primery align-left';
  }
  li.appendChild(document.createTextNode(message));
  ul.appendChild(li);
}

function sendMessage() {
  const messageInput = document.getElementById('textInput');
  const message = messageInput.value;
  if (message === '') return;
  socket.emit('chat message', message);
  appendMessage(message, 'sender');
  messageInput.value = '';
  const chatWindow = document.querySelector('.display-msg');
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

socket.on('chat message', (msg) => {
  appendMessage(msg, 'receiver');
  const chatWindow = document.querySelector('.display-msg');
  chatWindow.scrollTop = chatWindow.scrollHeight;
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});

const sendButton = document.getElementsByClassName('send-button')[0];

sendButton.addEventListener('click', (event) => {
  event.preventDefault();
  sendMessage();
});

