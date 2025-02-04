document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('video-container').classList.remove('hidden');
    createHearts();
});

document.getElementById('no-button').addEventListener('mouseover', function() {
    moveButton();
});

document.getElementById('no-button').addEventListener('click', function() {
    alert("Oh no! Maybe next time!");
});

function moveButton() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');

    let x, y;
    let overlapping = true;

    while (overlapping) {
        x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        y = Math.random() * (window.innerHeight - noButton.offsetHeight);
        
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;

        const noRect = noButton.getBoundingClientRect();
        const yesRect = yesButton.getBoundingClientRect();

        if (
            noRect.left >= yesRect.right || 
            noRect.right <= yesRect.left || 
            noRect.top >= yesRect.bottom || 
            noRect.bottom <= yesRect.top
        ) {
            overlapping = false;
        }
    }
}

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}
