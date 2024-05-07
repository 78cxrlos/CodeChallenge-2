import React from 'react';
import CardComponent from './CardComponent';

function YourBotArmy({ clickBot, onSet, onHandleDelete }) {
  
  function handleClickAndDelete(data) {
    
    let filtered = clickBot.filter(bot => bot.id !== data.id);
    onSet(filtered);

    // Handle any other actions, e.g., displaying bot details
    // You can implement this according to your application's logic
    console.log('Displaying details of bot:', data);
  }
  
  let mappedOver = clickBot.map(data => (
    <CardComponent 
      onHandleDelete={onHandleDelete}  
      key={data.id} 
      onHandleClick={() => handleClickAndDelete(data)}  
      bot={data} 
    />
  ));

  return (
    <div >
      {clickBot.length === 0 ? <p className="text-center font-mono ... text-xl font-bold">Click on the bot image to add into the army</p> : mappedOver} 
    </div>
  );
}

export default YourBotArmy;