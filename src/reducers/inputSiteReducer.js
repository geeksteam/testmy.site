export default function(state = {}, action) {
    switch (action.type) {
        case "CHANGE_INPUT":
            return {...state, website: action.payload};
        default:
            return state;
    }
        
}