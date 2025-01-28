import BotArmyCard from './BotArmyCard'

const YourBotArmy = ({ army, onRelease, onDischarge }) => {
  return (
    <div className="your-army">
      <h2>Your Bot Army</h2>
      <div className="army-grid">
        {army.map(bot => (
          <BotArmyCard
            key={bot.id}
            bot={bot}
            onRelease={onRelease}
            onDischarge={onDischarge}
          />
        ))}
      </div>
    </div>
  )
}

export default YourBotArmy