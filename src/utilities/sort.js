export default function sortTickets(tickets, sortPreference) {
  if (sortPreference === "High to Low") {
    return [...tickets].sort((a, b) => b.priority - a.priority);
  } else {
    return [...tickets].sort((a, b) => a.priority - b.priority);
  }
}
