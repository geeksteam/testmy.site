export default function(state = [], action) {
    switch (action.type) {
        case "ADD_RESPONSE":
            // let obj = {...state};
            // obj.responses.push(action.payload);
            // return obj;
            // return {...state, status: action.payload};
            return action.payload;
        default:
            return state;
    }
}