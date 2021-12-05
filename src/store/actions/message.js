export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const DISMISS_MESSAGE = 'DISMISS_MESSAGE';


function displayMessage(message) {
    return {
        type: DISPLAY_MESSAGE, payload: message
    }
}

export function dismissMessage() {
    return {
        type: DISMISS_MESSAGE
    }
}

export function successMessage(message, timer = 3000) {
    return displayMessage({text: message, class: 'alert-success', timer})
}

export function errorMessage(message, timer = 3000) {
    return displayMessage({text: message, class: 'danger-success', timer})
}
