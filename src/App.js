import moment from "moment";
import  "moment-timezone";
import { useState, useEffect } from "react";

function App() {

  const [date, setDate] = useState(moment().format("dddd DD MMMM YYYY"));
  const [hour, setHour] = useState(Number(moment().format("HH")));
  const [minute, setMinute] = useState(Number(moment().format("mm")));
  const [second, setSecond] = useState(Number(moment().format("ss")));
  const [randomBool, setRandomBool] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);


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

  function getRandomNumber(num1) {
      if (randomBool === false) {
          setRandomNumber(Math.round(Math.random() * 100));
          setRandomBool(!randomBool);
      }
      console.log(randomNumber);
      if (randomNumber <= 8) {
        if (num1 === undefined) {
          return (
            {background: `url(/react-clock/Img/сайт.png)`}
          );
        }else {
          if (randomNumber <= 2) {
            return (
              {background: `url(/react-clock/Img/wooden-texture-brown-1.jpg)`}
            );
          }
          if (2 < randomNumber && randomNumber <= 4) {
            return (
              {background: `url(/react-clock/Img/wooden-texture-brown.jpg)`}
            );
          }
          if (4 < randomNumber && randomNumber <= 6) {
            return (
              {background: `url(/react-clock/Img/wooden-texture-white.jpg)`}
            );
          }
          if (6 < randomNumber && randomNumber <= 8) {
            return (
              {background: `url(/react-clock/Img/wooden-texture-yellow.jpg)`}
            );
          }
        }
      }else {
        if (num1 === undefined) {
          return (
            {background: `rgb(56, 56, 56)`}
          );
        }else {
          return (
            {background: `rgb(211, 211, 211)`}
          );
        }
      }
  }

  return (
    <div style={getRandomNumber()} className="App">
      <div style={getRandomNumber(true)} className="container">
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