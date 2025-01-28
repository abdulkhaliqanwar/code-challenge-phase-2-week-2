import { useState, useEffect } from 'react'
import BotCollection from './components/BotCollection'
import YourBotArmy from './components/YourBotArmy'

function App() {
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])

  // Fetch bots from API
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(r => r.json())
      .then(data => setBots(data))
  }, [])

  // Add to army if not already enlisted
  const addToArmy = (bot) => {
    if (!army.some(b => b.id === bot.id)) {
      setArmy([...army, bot])
    }
  }

  // Release from army 
  const releaseFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id))
  }

  // Delete bot permanently
  const dischargeBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(b => b.id !== botId))
        setArmy(army.filter(b => b.id !== botId))
      })
  }

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={releaseFromArmy} onDischarge={dischargeBot} />
      <BotCollection bots={bots} onAddToArmy={addToArmy} army={army} />
    </div>
  )
}

export default App