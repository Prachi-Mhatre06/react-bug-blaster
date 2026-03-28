import "./App.css";
import "./styles.css";
import TicketForm from "./components/TicketForm";
import { useReducer } from "react";
import ticketReducer from "./reducers/ticketReducer";
import TicketList from "./components/TicketList";

function App() {
  const [tickets, dispatch] = useReducer(ticketReducer, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} />
        {tickets.length > 0 && (
          <TicketList tickets={tickets} dispatch={dispatch} />
        )}
      </div>
    </div>
  );
}

export default App;
