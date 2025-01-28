import BotCard from './BotCard'

const BotCollection = ({ bots, onAddToArmy, army }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bots-grid">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onAddToArmy={onAddToArmy}
            isEnlisted={army.some(b => b.id === bot.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default BotCollection ;