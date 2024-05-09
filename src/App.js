import BotCollection from './components/BotCollection';
import { useState, useEffect } from 'react';
import SortBar from './components/SortBar';

function App() {
  const [input, setInput] = useState([]);

  function handleDelete(bot) {
    fetch("https://bot-server-lx36.onrender.com/bots/${bot.id}", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => {
        setInput(prevInput => prevInput.filter(item => item.id !== bot.id));
      })
      .catch(error => console.error('Error deleting bot:', error));
  }

  useEffect(() => {
    fetch("https://bot-server-lx36.onrender.com/bots")
      .then(res => res.json())
      .then(data => setInput(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const sortBots = (sortBy) => {
    const sorted = [...input].sort((a, b) => b[sortBy] - a[sortBy]);
    setInput(sorted);
  };

  const filterByClass = (botClass) => {
    const filtered = input.filter(bot => !botClass || bot.bot_class === botClass);
    setInput(filtered);
  };

  if (!input) return <h1>Loading</h1>;

  return (
    <div className='column-4'>
      <h1 className="text-center font-mono ... text-xl font-bold ">The Army Collection</h1>
      <SortBar sortBots={sortBots} filterByClass={filterByClass} />
      <BotCollection onHandleDelete={handleDelete} data={input} />
    </div>
  );
}

export default App;