const openChatButton = document.getElementById('open-chat');
const closeChatButton = document.getElementById('close-chat');
const chatContainer = document.getElementById('chat-container');

function send(){
    console.log("Message sent");
    document.getElementById("message-input").innerHTML="";
}
openChatButton.addEventListener('click', () => {
    chatContainer.style.left = '0';
});

closeChatButton.addEventListener('click', () => {
    chatContainer.style.left = '-300px';
});
