document.querySelectorAll('.info input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', () => {
        document.querySelectorAll('.info .content').forEach(container => {
            container.style.display = 'none';
        });
        if (radio.checked) {
            radio.nextElementSibling.nextElementSibling.style.display = 'block';
        }
    });
});
