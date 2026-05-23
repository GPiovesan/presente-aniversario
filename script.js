document.addEventListener('DOMContentLoaded', () => {
    const giftBox = document.getElementById('gift-box');
    const instruction = document.getElementById('instruction');
    const revealArea = document.getElementById('reveal-area');
    const bgMusic = document.getElementById('bg-music');
    const nextBtn = document.getElementById('next-page-btn');

    giftBox.addEventListener('click', () => {
        // 1. Hide gift and instruction
        giftBox.style.display = 'none';
        instruction.style.display = 'none';

        // 2. Play music
        bgMusic.play().catch(error => {
            console.log("Autoplay bloqueado pelo navegador. A música começará após a interação.");
        });

        // 3. Reveal photo and text
        revealArea.classList.remove('hidden');
        revealArea.style.opacity = '1';

        // 4. After 5 seconds, show the button
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
            nextBtn.style.display = 'block';
            setTimeout(() => {
                nextBtn.style.opacity = '1';
                nextBtn.style.transition = 'opacity 1s';
            }, 10);
        }, 5000);
    });

    nextBtn.addEventListener('click', () => {
        window.location.href = 'presente.html';
    });
});
