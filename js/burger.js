const button = document.getElementById('burger_button');
const burger_menu = document.getElementById('nav_phone');
const exit_button = document.getElementById('exit_button')

button.addEventListener('click', () => {
    burger_menu.classList.add('active_burger'); // Убрана точка перед именем класса
});

exit_button.addEventListener('click', () => {
    burger_menu.classList.remove('active_burger')
})