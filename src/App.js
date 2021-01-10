import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import ExchangePage from './ExchangePage/ExchangePage'
import LeftWidget from './Widgets/Left_Widgets/LeftWidget.js'
import Header from './Header/Header'
import Login from './Login/Login'
import PromotionPage from './PromotionPage/PromotionPage'
import PricePage from './PricePage/PricePage'
import MiddleWidget from "./Widgets/Middle_Widgets/Middle_Widget";
import MiddleFeed from "./Widgets/Middle_Widgets/MiddleFeed.js";
import RightWidget from './Widgets/Right_Widgets/RightWidget';
import WalletPage from './WalletPage/Wallet'
import PricePageFeedInfo from './PricePage/PricePageFeedInfo'







function App() {


  const user = 'tawkir';


  return (
    <div className="app">
      <div className="app__header">
        <Header profilrPic="https://avatars1.githubusercontent.com/u/73068865?s=120&v=4" />
      </div>
      {!user ? (
        <Login />
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/app">
              <div className="app__body">
                <div className="left__widget">
                <LeftWidget RightWidgetMessage="Send Cryto to an Email Address" />
        </div>
        <div className="middle__widgets">
          <MiddleWidget />
          <div className="feeds">
          <MiddleFeed
              currencyName="Bitcoin"
              currencyShortName="BTC"
              currencyPic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/2000px-BTC_Logo.svg.png"
              time="12h"
              ratePoint="18,245.4"
              currencyIcon="$"
              topRate={true}
              ratePercent="+2.73"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Ethereum"
              currencyShortName="ETH"
              currencyPic="https://www.pngitem.com/pimgs/m/124-1245793_ethereum-eth-icon-ethereum-png-transparent-png.png"
              time="12h"
              ratePoint="8,357"
              currencyIcon="$"
              topRate={true}
              ratePercent="+223.8"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Tokenbox"
              currencyShortName="TBX"
              currencyPic="https://cryptologos.cc/logos/tokenbox-tbx-logo.png"
              time="12h"
              ratePoint="0.36533"
              currencyIcon="$"
              topRate={true}
              ratePercent="+0.8"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Steem"
              currencyShortName="STM"
              currencyPic="https://www.kindpng.com/picc/m/18-186648_steemit-steem-dollars-hd-png-download.png"
              time="12h"
              ratePoint="10.65467"
              currencyIcon="$"
              topRate={false}
              ratePercent="-34.8"
              lowRate={true}
            />
                        <MiddleFeed
              currencyName="Ripple"
              currencyShortName="XRP"
              currencyPic="https://www.kindpng.com/picc/m/127-1279698_ripple-coin-xrp-png-transparent-png.png"
              time="12h"
              ratePoint="12,357"
              currencyIcon="$"
              topRate={true}
              ratePercent="+23.8"
              lowRate={false}
            />
                        <MiddleFeed
              currencyName="Ubex"
              currencyShortName="UBW"
              currencyPic="https://assets.coingecko.com/coins/images/4163/large/ubex.png?1547039421"
              time="12h"
              ratePoint="0.357"
              currencyIcon="$"
              topRate={false}
              ratePercent="-33.8"
              lowRate={true}
            />
          </div>
        </div>
        <div className="right__widgets">
          <RightWidget userBalance='1.276383' balanceCurrency='BTC' userBalanceToUsd='11,083.465'/>
        </div>
      </div>
                </Route>
                
                <Route path='/exchange'>
                    <ExchangePage />
                </Route>

                <Route path='/price'>
                    <PricePage />
                </Route>

                <Route path='/wallet'>
                    <WalletPage />
                </Route>
                <Route path='/pricepagefeedinfo'>
                  <PricePageFeedInfo />
                </Route>
                <Route path='/promotionpage'>
                  <PromotionPage />
                </Route>

            </Switch>
          </Router>
        </>
      )}    
 
    </div>
  );
}

export default App;
