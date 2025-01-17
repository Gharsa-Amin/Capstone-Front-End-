Project Title Blockchain Hub

Overview What is your app? Give a brief description in a couple of sentences. 
I developed **GDChain**, a full-stack, mobile-first blockchain hub app with a variety of features:

1. **Real-time News Feed**: Fetches cryptocurrency-related news from multiple external APIs.
2. **User Authentication**: Secure login and sign-up process with personalized user accounts and profiles.
3. **Favourite Coins**: Users can select and track their top cryptocurrency assets.
4. **Real-time Price Monitoring**: Visualize cryptocurrency prices and trends with interactive charts.
5. **Market Insights**: Users can monitor the top gainers and losers in the stock market.
6. **NFTs Overview**: Displays a list of NFTs, with links to OpenSea for purchases and blockchain explorers for transaction histories.
7. **Trading Functionality**: Allows users to trade cryptocurrencies directly within the app.

The project utilizes the following technologies: 
- **Frontend**: React, React Router DOM, Sass, and Chart.js for dynamic data visualization 
- **Backend**: Node.js, Express.js, MySQL, JWT authentication 
- **Development Tools**: GitHub, Figma, Jira, External APIs 



Problem Space Why is your app needed? Give any background information around any pain points or other reasons. It is an app where people can trade any crypto assets. I think crypto-trading platforms mostly have a lenghty process, the users cannot access the apps, its very hard to use. This app will solve that issue, due to its simple to use nature.

User Profile Who will use your app? How will they use it? Add any special considerations that your app must take into account. Younger generations, anyone who is trading stocks and crypto.

Features List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe how these features are implemented, only what needs to be implemented.

A database to capture user-info A crypto+stock trading capabilities real time news getting from API, a Form to submit their concerns 

Implementation Tech Stack List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

React, Node.js, Express, and mySQL APIs 

List any external sources of data that will be used in your app. 1: I will be using the Polygon API (https://api.polygon.io/v1/marketstatus/now?apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7) which will give me data about all the markets (crypto, stocks, etc); their opening and closing hours, general holiday off days, real time news about the latest 100 news events happening, a list of all the crypto-related top coins and their tickers and getting the high, low and other dataPoints of the cryptomarket on each given day.

2: I will also use the Coingeco to get data about the specific crypto-tickers, and its market information:

3. I will user Alphavantage API too. 

Sitemap List the pages of your app with brief descriptions. You can show this visually, or write it out. 


I will have three main products: One for crypto trading, one for stock trading and one for NFT marketplace. Each product has its own page. I will also have a signup page, a login page, a useronbaording page, and profile page. The profile page is customized to the user.  

Mockups Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma.

Data Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.

Endpoints List endpoints that your server will implement, including HTTP methods, parameters, and example responses. //more info on making API calls to Polygon: https://github.com/polygon-io/client-js

//Getting the API data about different markets and their operating hours: //Get Request to this endPoint: Giving data about the different markets and their opening and closing hours... under "Market Status" const URL = "https://api.polygon.io/v1/marketstatus/now?apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Get endPoint for when the markets are closed: under "Market Holidays"; const secondURL = "https://api.polygon.io/v1/marketstatus/upcoming?apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Real time news Data about the recent tickers available under "Ticker News"; const thirdURL = "https://api.polygon.io/v2/reference/news?limit=30&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Base URL for all crypto-related tickers: const FourthURL = "https://api.polygon.io/v3/reference/tickers?active=true&limit=300&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Technical Indicators: Simple Moving Average (SMA); its limited for individual stocks, can i get a list of all the stocks and their SMAs? const FifthURL = "https://api.polygon.io/v1/indicators/sma/AAPL?timespan=day&adjusted=true&window=50&series_type=close&order=desc&limit=10&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Can get Data about the Aggregates (Bars) for each stock... const sixthURL = "https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-02-10?adjusted=true&sort=asc&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Can get Data about the Grouped Daily bars for each stock... const SeventhURL = "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7";

//Get the high, low and other dataPoints of the StockMarket on each given day: const EightURL = "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7"; URL = https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${coinId}&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5 Const URL: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad" const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5" 3.

Roadmap Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.

Creating the back-end, Creating endpoints for the API, and testing it. Working on creating the database Creating the front-end Future Implementations Your project will be marked based on what you committed to in the above document. Here, you can list any additional features you may complete after the MVP of your application is built, or if you have extra time before the Capstone due date. I am hoping to have a blockchain up and running on the app, and have smart contracts coded for this app during the capstone. I don't want to over-commit, depending on the workload, I will see if I can execute everything in this short timeframe.

A smart contract advanced trading executions A ZK-roll-up a spot where people can create their own games. 5.a server hosting the top blockchain resources for educational purposes, of top books and educational youtube channels. Rust and web3.js
