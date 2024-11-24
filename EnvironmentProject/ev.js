const ecodates = document.querySelector('#pad');
ecodates.innerHTML = 'ECODATES';

const buu = document.getElementById('buu');
buu.innerHTML = 'Get Started';
buu.style.marginLeft = 'auto';

ecodates.style.color = 'white';
ecodates.style.fontSize = '2rem';
ecodates.style.fontWeight = 'bold';
ecodates.style.marginRight = '120px';

function showWelcomeMessage() {
    const welcomeMessage = document.getElementById('welcome-message');
    const message = "Welcome to EcoDates!";
    const words = message.split(" ");
    let index = 0;

    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.position = 'absolute';
    welcomeMessage.style.top = '30%';
    welcomeMessage.style.fontSize = '4rem';
    welcomeMessage.style.left = '50%';
    welcomeMessage.style.transform = 'translate(-50%, -50%)';
    welcomeMessage.style.display = 'block';
    welcomeMessage.style.height = '100px';
    welcomeMessage.style.overflow = 'hidden';
    welcomeMessage.style.lineHeight = '6rem';
    welcomeMessage.textContent = '';

    const interval = setInterval(() => {
        if (index < words.length) {
            welcomeMessage.textContent += words[index] + " ";
            index++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                welcomeMessage.textContent = ''; 
            }, 3000); 
        }
    }, 1000);
}

setTimeout(showWelcomeMessage, 2000);
