# **Project Title: Blockchain Hub**

---

## **Overview**  
**What is your app?**  
GDChain is a full-stack, mobile-first blockchain hub app with a variety of features:
- **Real-time News Feed**: Fetches cryptocurrency-related news from multiple external APIs.
- **User Authentication**: Secure login and sign-up process with personalized user accounts and profiles.
- **Favourite Coins**: Users can select and track their top cryptocurrency assets.
- **Real-time Price Monitoring**: Visualize cryptocurrency prices and trends with interactive charts.
- **Market Insights**: Users can monitor the top gainers and losers in the stock market.
- **NFTs Overview**: Displays a list of NFTs, with links to OpenSea for purchases and blockchain explorers for transaction histories.
- **Trading Functionality**: Allows users to trade cryptocurrencies directly within the app.

---

## **Problem Space**  
**Why is your app needed?**  
Most cryptocurrency trading platforms have a lengthy process and are difficult for users to navigate. The current platforms are hard to use and often fail to provide easy access for users. **GDChain** solves these issues by providing a simple-to-use, mobile-friendly platform for crypto and stock trading.

---

## **User Profile**  
**Who will use your app? How will they use it?**  
- **Target Users**: Younger generations and anyone involved in trading stocks and cryptocurrencies.
- **Usage**: Users will use the app for easy and efficient trading of crypto and stocks, tracking news and price trends, and managing their crypto portfolios.

**Special Considerations**:
- Simple user interface
- Secure login and user account management
- Real-time market data and trading capabilities

---

## **Features**  
Here are the main functionalities that will be implemented:

- **User Info Database**: A database to capture and store user information.
- **Crypto & Stock Trading**: Real-time trading capabilities for cryptocurrency and stocks.
- **Real-time News Feed**: Fetch real-time crypto-related news from APIs.
- **User Feedback**: A form where users can submit their concerns or feedback.

---

## **Implementation Tech Stack**  
Here is the list of technologies that will be used:

- **Frontend**: React, React Router DOM, Sass, and Chart.js for dynamic data visualization.
- **Backend**: Node.js, Express.js, MySQL, JWT authentication.
- **Development Tools**: GitHub, Figma, Jira, External APIs.

---

## **External Sources of Data**  
Here are the external APIs used in the app:

1. **Polygon API**:  
   - **Market Status**: Fetch market opening and closing times, holidays, and real-time news.  
     **Endpoint**: `https://api.polygon.io/v1/marketstatus/now?apiKey=FW1L_lPWu8lU3u1txdnAl3XJojOGCth7`

2. **CoinGecko API**:  
   - Fetches specific crypto-ticker data and market information.

3. **Alphavantage API**:  
   - Fetches stock market data, including trading info and trends.

---

## **Sitemap**  
The following pages will be part of the app:

- **Crypto Trading Page**: For crypto market and trading functionalities.
- **Stock Trading Page**: For stock market and trading functionalities.
- **NFT Marketplace**: For exploring and purchasing NFTs.
- **Sign-up Page**: For creating a new user account.
- **Login Page**: For existing users to log in.
- **User Onboarding Page**: For user onboarding and initial setup.
- **Profile Page**: Customized to each user, displaying their portfolio and preferences.

---

## **Mockups**  
You can create visuals of your app's screens using tools like Figma, or you can sketch them by hand.

---

## **Data**  
**Describe your data and the relationships between the data points**.  
You can create diagrams or write out the relationships. The core relationships involve user data, trading data (cryptos/stocks), real-time news, and transaction histories.

---

## **Endpoints**  
Here are just a few of the the API endpoints that will be implemented on the server, the actual project is using many API endpoints from Coingeco, Polygon, and Alphavantage"

### **Some API Endpoints (I am using many API endpoints, its just endpoints from polygon":**

1. **Market Status** (Market Opening & Closing Times)  
   **GET** `https://api.polygon.io/v1/marketstatus/now?apiKey=<YourAPIKey>`

2. **Market Holidays** (Upcoming Market Holidays)  
   **GET** `https://api.polygon.io/v1/marketstatus/upcoming?apiKey=<YourAPIKey>`

3. **Ticker News** (Real-time News on Tickers)  
   **GET** `https://api.polygon.io/v2/reference/news?limit=30&apiKey=<YourAPIKey>`

4. **Crypto Tickers** (Base URL for all crypto-related tickers)  
   **GET** `https://api.polygon.io/v3/reference/tickers?active=true&limit=300&apiKey=<YourAPIKey>`

5. **Crypto Market Data** (High, Low, Data Points for Daily Market)  
   **GET** Various endpoints to fetch daily aggregates and historical crypto market data.

---

## **Roadmap**  
Here is a high-level scope for the project, broken down into tasks and timeframes:

### **Phase 1: Back-end Development**
- **Task**: Set up the back-end using Node.js and Express.js.
- **Subtasks**:
  - Create API endpoints for fetching market data.
  - Implement user authentication with JWT.
  - Set up a MySQL database for storing user info and transaction history.
  - Test API responses and error handling.

### **Phase 2: Front-end Development**
- **Task**: Build the front-end with React and integrate with the back-end.
- **Subtasks**:
  - Design and implement UI for the home, trading, and profile pages.
  - Integrate with the Polygon, CoinGecko, and Alphavantage APIs for live data.
  - Implement features like charts, news feed, and user authentication.

### **Phase 3: Testing and Deployment**
- **Task**: Finalize the app and deploy it.
- **Subtasks**:
  - Conduct testing (unit tests, integration tests, and user acceptance testing).
  - Deploy the app to a hosting platform (e.g., Heroku, AWS).
  - Ensure mobile responsiveness and accessibility.

---

## **Future Implementations**  
These are some additional features to consider after completing the MVP:

- **Blockchain Integration**: Set up a blockchain network within the app and enable smart contracts for trading.
- **Advanced Trading Features**: Implement advanced trading capabilities (e.g., margin trading, stop-loss).
- **ZK-Rollups**: Implement ZK-Rollups for scalability and faster transaction processing.
- **Game Creation**: A feature where users can create and play blockchain-based games.
- **Blockchain Education**: Provide a library of top blockchain books, videos, and resources.
- Adding Deposit button to connect user wallets to the app, so they can connect to their banks and deposit funds" 

**Technologies to be used in future implementions**:  
- **Languages**: Rust, Web3.js.

---

## **Roadmap (Sprint Plan)**  
### **Sprint 1: Back-end & Database Setup**
- **Week 1**: 
  - Set up server and API endpoints.
  - Implement JWT authentication and user management.
  - Set up MySQL database for user info.
  
### **Sprint 2: Front-end Development & API Integration**
- **Week 2**:
  - Implement the front-end using React.
  - Integrate Polygon, CoinGecko, and Alphavantage APIs for real-time data.
  - Design key pages (Profile, Trading, and NFT Marketplace).

---

## **Final Notes**  
The MVP will include crypto trading, stock top gainers, losers, and marketdata, and an NFT marketplace, along with essential features such as user authentication and real-time news. Advanced features like blockchain integration, depositing funds into the app, and smart contracts will be explored later if time permits.

---

