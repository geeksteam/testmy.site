export default function(state = {}, action) {
    switch (action.type) {
        case "BUTTON_CLICK":
            return {...state, buttonStatus: action.payload};
        default:
            return state;
    }
}