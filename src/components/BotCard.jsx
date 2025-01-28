const BotCard = ({ bot, onAddToArmy, isEnlisted }) => {
    return (
      <div className={`bot-card ${isEnlisted ? 'enlisted' : ''}`}>
  
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>{bot.catchphrase}</p>
  
        {/* View Details and Enlist buttons */}
        <button onClick={() => onAddToArmy(bot)}>Enlist Bot</button>
      </div>
    )
  }
  
  export default BotCard;
  