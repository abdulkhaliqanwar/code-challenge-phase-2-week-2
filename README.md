###Bot Battlr

##Overview

Bot Battlr is a React application where users can browse and enlist bots into their army. It demonstrates key React concepts like components, props, state, events, and data fetching.

##Features

#core Features

View a list of all available bots in the BotCollection component.

Click on a bot to enlist it into YourBotArmy (each bot can only be enlisted once).

Release a bot from the army by clicking on it, removing it from YourBotArmy.

Permanently delete a bot using the red "x" button, which removes it from both the frontend and backend.


##Installation & Setup

#Prerequisites

Ensure you have the following installed:

Node.js & npm

JSON Server

Setup Instructions

Clone the repository:

git clone <repository-url>
cd bot-battlr

Install dependencies:

npm install

Start the JSON server:

json-server --watch db.json --port 8001

Run the React application:

npm start

API Endpoints

Fetching Bots

GET /bots

Returns an array of bot objects.

Deleting a Bot

DELETE /bots/:id

Removes a bot permanently.

Tech Stack

React.js (Functional Components, Hooks)

JSON Server (Mock Backend)

CSS (for styling)

File Structure

/src
├── components
│   ├── BotCard.js
│   ├── BotCollection.js
│   ├── BotArmyCard.js
│   ├── YourBotArmy.js
│
├── App.js
├── index.css
├── db.json (mock database)

How It Works

BotCollection fetches bots from the API and displays them.

Clicking a bot adds it to YourBotArmy.

Clicking a bot in YourBotArmy releases it.

Clicking the red "x" permanently deletes a bot from both frontend and backend.

Author

Developed by  Abdulkhaliq Anwar for Moringa School's Phase 2 Code Challenge.

License

MIT License

