const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatMessages = document.getElementById('chatMessages');
const chatList = document.getElementById('chatList');
const newChatBtn = document.getElementById('newChatBtn');

let chatCount = 1;

function appendMessage(role, text) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', role);
  messageElement.textContent = text;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  appendMessage('user', text);
  userInput.value = "";

  setTimeout(() => {
    simulateReply(text);
  }, 1000);
}

function simulateReply(userText) {
  // Replace this part with any logic or static responses
  const fakeResponses = [
    "Interesting, tell me more!",
    "Why do you think that is?",
    "I'm here to help. Ask me anything!",
    `You said: "${userText}". That's cool!`,
    "Can you elaborate on that?"
  ];

  const response = fakeResponses[Math.floor(Math.random() * fakeResponses.length)];
  appendMessage('assistant', response);
}

function createNewChat() {
  const chatItem = document.createElement('li');
  chatItem.textContent = `Chat ${chatCount++}`;
  chatList.appendChild(chatItem);
  chatMessages.innerHTML = '';
}

sendBtn.addEventListener('click', handleUserMessage);
userInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    handleUserMessage();
  }
});

newChatBtn.addEventListener('click', createNewChat);