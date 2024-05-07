import React, { useState } from 'react';
import YourBotArmy from './YourBotArmy';
import CardComponent from '../components/CardComponent';


function BotCollection({ data, onHandleDelete }) {
  const [clickBot, setClickBot] = useState([]);

  function handleClick(bot) {
    if (!clickBot.find(clickedBot => clickedBot.id === bot.id)) {
      setClickBot(prevClickBot => [...prevClickBot, bot]);
    }
  }

  return (
    <div className='bg-slate-500 p-5  column-4'>
      <YourBotArmy onSet={setClickBot} onHandleDelete={handleClick} clickBot={clickBot} />
      <h2>List of Bots</h2>
      <div className='columns-4'>
        {data.map(bot => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-5 mb-0.5" key={bot.id} onClick={() => handleClick(bot)}>
            <img
              className="w-full"
              src={bot.avatar_url}
              alt={bot.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{bot.name}</div>
              <p className="text-gray-700 text-base truncate">
                <b>Catchphrase: </b>{bot.catchphrase}
              </p>
              <p><b>Botname: </b>{bot.name}</p>
              <p><b>Health: </b>{bot.health}</p>
              <p><b>Damage: </b>{bot.damage}</p>
              <p><b>Armor: </b>{bot.armor}</p>
              <p><b>Bot Class: </b>{bot.bot_class}</p>
              <button onClick={ () =>  onHandleDelete(bot)}>X</button>
            </div>
          </div>
        
        ))}
      </div>
    </div>
  );
}

export default BotCollection;