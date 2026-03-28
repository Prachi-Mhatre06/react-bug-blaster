import { useState } from 'react';

export default function TicketForm({ dispatch }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('1');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_TICKET',
      payload: {
        title,
        description,
        priority,
      },
    });
    clearForm();
  };

  const clearForm = () => {
    setTitle('');
    setDescription('');
    setPriority('1');
  };

  const priorityOptions = {
    '1': 'Low',
    '2': 'Medium',
    '3': 'High',
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="bugTitle">Title:</label>
        <input
          className="form-input"
          id="bugTitle"
          name="bugTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bugDescription">Description:</label>
        <textarea
          className="form-input"
          id="bugDescription"
          name="bugDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <fieldset className="priority-fieldset">
        <legend>Priority</legend>
          {Object.entries(priorityOptions).map(([value, label]) => (
            <label key={value} className="priority-label">
              <input
                type="checkbox"
                checked={priority === value}
                className="priority-input"
                id={`bugPriority-${value}`}
                name="bugPriority"
                value={value}
                onChange={(e) => setPriority(e.target.value)}
              />
              {label}
            </label>
          ))}
        </fieldset>
      </div>
      <button type="submit" className="button">
        Submit
      </button>
    </form>
    );
}