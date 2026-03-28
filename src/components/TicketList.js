import Ticket from "./Ticket";

export default function TicketList({ tickets }) {
  return (
    <div className="ticket-list">
      <h2>Tickets</h2>
        {tickets.map((ticket, index) => (
          <Ticket key={index} ticket={ticket} />
        ))}
    </div>
  );
}