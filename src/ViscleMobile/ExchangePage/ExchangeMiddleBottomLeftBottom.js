import { Button } from "@material-ui/core";
import React from "react";
import "./ExchangeMiddleBottomLeftBottom.css";
import ExchangeMiddleBottomLeftBottom_bodyFeed from "./ExchangeMiddleBottomLeftBottom_bodyFeed";

function ExchangeMiddleBottomLeftBottom() {
  const [activity, setActivity] = React.useState("Market Trades");
  const handleChange1 = () => {
    setActivity((activity.replace.h3 = "Market Trades"));
  };
  const handleChange2 = () => {
    setActivity((activity.replace.h3 = "My Trades"));
  };
  const handleChange3 = () => {
    setActivity((activity.replace.h3 = "Open Orders"));
  };
  const handleChange4 = () => {
    setActivity((activity.replace.h3 = "Favorite"));
  };

  return (
    <div className="exchangemiddlebottomleftbottom">
      <div className="ExchangeMiddleBottomLeftBottom_buttons">
        <div className="top">
          <Button
            className="ExchangeMiddleBottomLeftBottom_button"
            type="submit"
            onClick={handleChange1}
            value={"Market Trades"}
          >
            Market Trades
          </Button>
          <Button
            className="ExchangeMiddleBottomLeftBottom_button"
            type="submit"
            onClick={handleChange2}
            value={"My Trades"}
          >
            My Trades
          </Button>
          <Button
            className="ExchangeMiddleBottomLeftBottom_button"
            type="submit"
            onClick={handleChange3}
            value={"Open Oredrs"}
          >
            Open Orders
          </Button>
          <Button
            className="ExchangeMiddleBottomLeftBottom_button"
            type="submit"
            onClick={handleChange4}
            value={"Favorite"}
          >
            Favorite
          </Button>
          <h3>{activity}</h3>
        </div>
        <div className="ExchangeMiddleBottomLeftBottom_body">
          <div className="ExchangeMiddleBottomLeftBottom_body-top">
            <div className="middlebottomleftbottom_bodyHead">
              <p className="table__name">Time</p>
            </div>
            <div className="middlebottomleftbottom_bodyHead">
              <p className="table__name">Price(USDT)</p>
            </div>
            <div className="middlebottomleftbottom_bodyHead">
              <p className="table__name">Amount(BTC)</p>
            </div>
            <div className="middlebottomleftbottom_bodyHead">
              <p className="table__name">Total (USDT)</p>
            </div>
          </div>
          <div className="ExchangeMiddleBottomLeftBottom_body-main">
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='297388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='292888.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='933688.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='539388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='293778.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='297388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='837388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
            <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='297388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
                       <ExchangeMiddleBottomLeftBottom_bodyFeed
              lowRate={true}
              time="12:36:27"
              price='539388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
                        <ExchangeMiddleBottomLeftBottom_bodyFeed
              topRate={true}
              time="12:36:27"
              price='837388.2398'
              amount="62354672.3654"
              total="35782873982"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExchangeMiddleBottomLeftBottom;
