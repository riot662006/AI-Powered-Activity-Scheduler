import { useState } from 'react';

import Task from '@/lib/Task';

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [duration, setDuration] = useState<number>(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState<string>(''); // Store date as a string for input field

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = new Task(
      title,
      priority,
      duration,
      category,
      false,
      description,
      deadline ? new Date(deadline) : undefined
    );
    onAddTask(newTask); // Add task through the parent callback
    clearForm(); // Reset form fields after submission
  };

  const clearForm = () => {
    setTitle('');
    setPriority('medium');
    setDuration(0);
    setCategory('');
    setDescription('');
    setDeadline('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value as 'high' | 'medium' | 'low')}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <div>
        <label>Duration (mins):</label>
        <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} required />
      </div>
      <div>
        <label>Category:</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Deadline:</label>
        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </div>
      <button type="submit">Add Task</button>
      <button className="ml-16" type="button" onClick={clearForm}>Clear Form</button>
    </form>
  );
};

export default AddTask;
