# Ethereum Block Explorer

Blockexplorers give us the ability to view lots of different information about the blockchain including data about:
  * the blockchain network itself
  * blocks in the blockchain
  * transactions in a block
  * accounts
  * getting details for individual transactions
  * getting user balance
  * NFT methods
  * and many other things

  This project uses the AlchemySDK's core package (instead of Ethereum JSON-RPC API and the ethers.js library) giving us the ability to query the Ethereum blockchain and make transactions. The AlchemySDK's core package 
  wraps almost all of the `ethers.js` provider functionality.

  In this project we chose to use React for a front-end.
  
## Getting Started
Clone this project to pull down some basic starter code.

After that cd into the base directory of the project and run `npm install` to download all the project dependencies.

## 1. Create a unique Alchemy API key

If you have not already done so, create a unique Alchemy API Mainnet key
for your project as [described here](https://docs.alchemy.com/reference/api-overview?a=eth-bootcamp).

## 2. Add your API key to as an environment variable for the project

Create an empty `.env` file in the base directory of this project.

Add the following line to the `.env` file replacing `YOUR_ALCHEMY_API_KEY` with your api key.

```sh
REACT_APP_ALCHEMY_API_KEY=YOUR_ALCHEMY_API_KEY
```

Do not remove the `REACT_APP_` prefix. React uses that to import env variables.

## 3. Start the webserver

`npm start`

Running the command above will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The webpage will automatically reload when you make code changes.



