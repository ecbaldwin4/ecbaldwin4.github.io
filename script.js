document.getElementById('yes-button').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('video-container').classList.remove('hidden');
    createHearts();
});

document.getElementById('no-button').addEventListener('click', function() {
    alert("Oh no! Maybe next time!");
});

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
