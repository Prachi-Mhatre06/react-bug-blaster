import Ticket from "./Ticket";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </div>
  );
}
