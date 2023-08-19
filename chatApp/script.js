

document.addEventListener('DOMContentLoaded', function() {
  const chatInput = document.querySelector('.chat-input textarea');
  const sendButton = document.querySelector('.send-button');
  const chatMessages = document.querySelector('.chat-messages');
  const toggleIcon = document.getElementById('toggleIcon');
  const marketplaceItems = document.querySelector('.marketplace');

  let isMarketplaceEnabled = false;

  toggleIcon.addEventListener('click', function() {
    isMarketplaceEnabled = !isMarketplaceEnabled;

    if (isMarketplaceEnabled) {
      toggleIcon.classList.add('active');
      enableMarketplace();
    } else {
      toggleIcon.classList.remove('active');
      disableMarketplace();
    }
  });

  function enableMarketplace() {
    marketplaceItems.style.display = 'block';
  }

  function disableMarketplace() {
    marketplaceItems.style.display = 'none';
  }

  sendButton.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message) {
      sendMessage('You', message);
      chatInput.value = '';
    }
  });

  function displayChatMessage(user, message) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', user === 'You' ? 'sent' : 'received');
    messageDiv.innerHTML = `
      <p>${message}</p>
    `;
    chatMessages.appendChild(messageDiv);
  }

  function sendMessage(user, message) {
    displayChatMessage(user, message);
  }
});
