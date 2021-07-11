const socket = io('/') // This means your client will always be connected to your server, locally or on Heroku.

const chatBox = document.getElementById('chatBox')
const messageEl = document.getElementById('message')
const user = document.getElementById('user')
const date = new Date() // Date implementation

socket.on('newMessage', data => {
    addMessage(data, false)
})

//format the time as a string
const getTime = () => {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, '0');
    const min = date.getMinutes().toString().padStart(2, '0');
    return `${hour}:${min}`;
  };

// Post message to board
const postMessage = () => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
     const message = messageEl.value.trim();
     const from = user.value;
     const time = getTime();
     const data = { message, from, time };
   
     socket.emit('message', data);
     addMessage(data, true);
     messageEl.value = '';
}

// Add message from any user to chatbox, determine if added
// by current user.
const addMessage = (data = {}, user = false) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
     chatBox.innerHTML += `
    <li class="message${user ? ' uMessage' : ''}">
        ${data.from} @${data.time}: ${data.message}
    </li>
    `;
 };