import React from 'react'
import SortBar from './SortBar'
function CardComponent({bot,onHandleClick,onHandleDelete}) {

    
    
  return (
  
    <div className=' grid grid-cols-4 gap-5 bg-lime-600  mb-6 columns-4'>
        <div onClick={ () => onHandleClick(bot)} >
       <div className='bg-stone-200 '>
     
          <img src={bot.avatar_url} alt='bot' />
          <div className="px-6 py-4 ">
              <div className="font-bold text-xl mb-3">{bot.name}</div>
              <p className="text-gray-700 text-base truncate">
                <b>Catchphrase: </b>{bot.catchphrase}
              </p>
              <p><b>Botname: </b>{bot.name}</p>
              <p><b>Health: </b>{bot.health}</p>
              <p><b>Damage: </b>{bot.damage}</p>
              <p><b>Armor: </b>{bot.armor}</p>
              <p><b>Bot Class: </b>{bot.bot_class}</p>
                <p >   Update : {bot.updated_at}  </p> 
                
             </div>
             <button onClick={ () =>  onHandleDelete(bot)}>X</button>
         </div>
          
           </div>
          
        </div>
        
       
       
  )
}

export default CardComponent