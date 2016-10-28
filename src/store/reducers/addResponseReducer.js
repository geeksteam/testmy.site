export default function(state = {}, action) {
	switch (action.type) {
		case "ADD_RESPONSE":
			return {...state, ...action.payload};
		default:
			return state;
	}
}
