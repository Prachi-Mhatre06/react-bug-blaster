export default function ticketReducer(state, action) {
  switch (action.type) {
    case "ADD_TICKET":
      return [...state, action.payload];
    case "DELETE_TICKET":
      return state.filter((ticket) => ticket.id !== action.payload);
    default:
      return state;
  }
}
