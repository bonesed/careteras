document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.gym-cards');
    const prevBtn = document.querySelector('.scroll-button.prev');
    const nextBtn = document.querySelector('.scroll-button.next');

    if (container && prevBtn && nextBtn) {
        const scrollAmount = 320; // カード幅 + gap

        nextBtn.addEventListener('click', () => {
            container.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        const updateButtonVisibility = () => {
            prevBtn.style.opacity = container.scrollLeft <= 0 ? '0' : '1';
            nextBtn.style.opacity = 
                container.scrollLeft >= (container.scrollWidth - container.clientWidth - 10) 
                    ? '0' : '1';
        };

        updateButtonVisibility();
        container.addEventListener('scroll', updateButtonVisibility);
    }
});