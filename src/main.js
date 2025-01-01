import { ChatBot } from './utils/chatbot.js';
import { createMessage, scrollToBottom } from './utils/ui.js';
const chatbot = new ChatBot();
const messagesContainer = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function handleUserMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    messagesContainer.appendChild(createMessage(message, true));
    userInput.value = '';
    scrollToBottom(messagesContainer);
    //bot ka response 
    setTimeout(() => {
        const response = chatbot.getResponse(message);
        messagesContainer.appendChild(createMessage(response, false));
        scrollToBottom(messagesContainer);
    }, 500);
}
sendButton.addEventListener('click', handleUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});
messagesContainer.appendChild(
    createMessage("Hello! I'm a chatbot. How can I help you today?", false)
);
