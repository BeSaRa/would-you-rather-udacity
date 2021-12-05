import {DISMISS_MESSAGE, DISPLAY_MESSAGE} from "../actions/message";

export function message(state = null, action) {
    switch (action.type) {
        case DISPLAY_MESSAGE:
            return action.payload;
        case DISMISS_MESSAGE:
            return null
        default:
            return state;
    }
}
