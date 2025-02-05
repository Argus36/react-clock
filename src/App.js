import moment from "moment";
import  "moment-timezone";
import { useState, useEffect } from "react";

function App() {

  const [date, setDate] = useState(moment().format("dddd DD MMMM YYYY"));
  const [hour, setHour] = useState(Number(moment().format("HH")));
  const [minute, setMinute] = useState(Number(moment().format("mm")));
  const [second, setSecond] = useState(Number(moment().format("ss")));

  let timeZone = moment.tz.guess();
  moment.tz.setDefault(timeZone);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format("dddd DD MMMM YYYY"));
      setSecond(Number(moment().format("ss")));
      setMinute(Number(moment().format("mm")));
      setHour(Number(moment().format("HH")));
    }, 250);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="clock">
          <div className="block">
            <div className="dot"></div>
            <div style={{transform: `translate(-47.5%, -105%) rotate(${hour * 30 + (minute / 100 * 50)}deg)`}} className="big-arrow"></div>
            <div style={{transform: `translate(-47.5%, -165%) rotate(${minute * 6  + (second / 100 * 10)}deg)`}} className="middle-arrow"></div>
            <div style={{transform: `translate(-50%, -234%) rotate(${second * 6}deg)`}} className="little-arrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;