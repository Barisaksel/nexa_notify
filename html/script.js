
// script.js
function showNotification(type, title, message, duration = 5000) {
    if (typeIcon(type) == '') {
        console.log("Wrong Export");
        return;
    }
    const notificationContainer = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    
    const iconContainer = document.createElement('div');
    iconContainer.classList.add('icon-container');
    const icon = document.createElement('div');
    icon.classList.add('icon');
    icon.innerHTML = typeIcon(type);
    iconContainer.appendChild(icon);
    

    const progressCircle = document.createElement('div');
    progressCircle.classList.add('progress-circle');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "50%");
    circle.setAttribute("cy", "50%");
    circle.setAttribute("r", "16");
    svg.appendChild(circle);
    progressCircle.appendChild(svg);
    iconContainer.appendChild(progressCircle);
    
    const details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = `
        <div class="title">${title}</div>
        <div class="info">${message}</div>
    `;
    
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');
    const progress = document.createElement('div');
    progress.classList.add('progress');
    progress.style.animationDuration = `${duration}ms`;
    progressBar.appendChild(progress);
    
    notification.appendChild(iconContainer);
    notification.appendChild(details);
    notification.appendChild(progressBar);
    
    notificationContainer.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, duration);
    
    circle.style.transition = `stroke-dashoffset ${duration}ms linear`;
    setTimeout(() => {
        circle.style.strokeDashoffset = 100;
    }, 10);
    var sound = new Audio('notify.mp3');
    sound.volume = 0.8;
    sound.play();
}

function typeIcon(type) {
    switch(type) {
        case 'success': return '✔️';
        case 'error': return '❌';
        case 'info': return 'ℹ️';
        default: return '';
    }
}

window.addEventListener('message', function(event) {
    const data = event.data;
    if (data.action === 'showNotification') {
        showNotification(data.type, data.title, data.message, data.duration);
    }
});