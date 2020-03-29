export function authServerMessage(error) {
    let errorMessage;

    switch (error.status) {
        case 401:
            errorMessage = 'Неверный Email или пароль';
            break;
        case 500:
            errorMessage = 'Ошибка на сервере, попробуйте позже';
            break;
        default:
            errorMessage = 'Неизвестная ошибка, попробуйте позже';
    }

    return errorMessage;
}
