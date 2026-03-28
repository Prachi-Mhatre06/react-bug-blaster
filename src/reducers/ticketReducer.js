export default function ticketReducer(state, action) {
    switch (action.type) {
        case 'ADD_TICKET':
            return [...state, action.payload];
        default:
            return state;
    }
}