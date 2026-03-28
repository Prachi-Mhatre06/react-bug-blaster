export default function Ticket({ ticket }) {
    const priorityClass = {
        '1': 'priority-low',
        '2': 'priority-medium',
        '3': 'priority-high',
    };
  return (
    <div className="ticket-item">
      <div className={`priority-dot ${priorityClass[ticket.priority]}`}></div>

      <h3>{ticket.title}</h3>
      <p>{ticket.description}</p>
    </div>
  );
}