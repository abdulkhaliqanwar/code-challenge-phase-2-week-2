const BotArmyCard = ({ bot, onRelease, onDischarge }) => {
    const handleDischarge = (e) => {
      e.stopPropagation()
      onDischarge(bot.id)
    }
  
    return (
      <div className="army-card" onClick={() => onRelease(bot)}>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <button className="discharge-btn" onClick={handleDischarge}>
          x 
        </button>
      </div>
    )
  }
  
  export default BotArmyCard ;