// Переменная для хранения имени пользователя
let userFirstName = '';

const DemoApp = {
    init() {
        // Инициализация Telegram WebApp
        Telegram.WebApp.init();

        // Проверяем, есть ли у нас данные о пользователе
        if (DemoApp.initDataUnsafe.receiver) {
            userFirstName = DemoApp.initDataUnsafe.receiver.first_name;
            DemoApp.updateUserName(userFirstName);
        } else {
            // Если данных нет, показываем предупреждение
            DemoApp.showAlert('User data not available.');
        }
    },
    updateUserName(firstName) {
        // Обновляем текст на странице с именем пользователя
        const userNameElement = document.getElementById('user_first_name');
        userNameElement.textContent = firstName;
    },
    showAlert(message) {
        // Показываем предупреждение с сообщением
        alert(message);
    }
};

// Инициализация DemoApp при загрузке страницы
document.addEventListener('DOMContentLoaded', function () {
    DemoApp.init();
});
