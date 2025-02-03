import moment from "moment";
import  "moment-timezone";
import { useState, useEffect } from "react";




function App() {

  let numbers = {
    num1 : [
      {val : "1", part : "part1"}, {val : "2", part : "part2"}, {val : "3", part : "part3"}, {val : "4", part : "part4"}, {val : "5", part : "part5"}, {val : "6", part : "part6"}
    ],
    num2 : [
      {val : "7", part : "part7"}, {val : "8", part : "part8"}, {val : "9", part : "part9"}, {val : "10", part : "part10"}, {val : "11", part : "part11"}, {val : "12", part : "part12"}
    ]
  }

  const [date, setDate] = useState(moment().format("dddd DD MMMM YYYY"));
  const [hour, setHour] = useState(Number(moment().format("HH")));
  const [minute, setMinute] = useState(Number(moment().format("mm")));
  const [second, setSecond] = useState(Number(moment().format("ss")));

  let timeZone = moment.tz.guess();
  moment.tz.setDefault(timeZone);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().format("dddd DD MMMM YYYY"));
      setHour(Number(moment().format("HH")));
      setMinute(Number(moment().format("mm")));
      setSecond(Number(moment().format("ss")));
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
            <div style={{transform: `translate(0%, -95%) rotate(${hour * 30}deg)`}} className="big-arrow"></div>
            <div style={{transform: `translate(0%, -152.5%) rotate(${minute * 6}deg)`}} className="middle-arrow"></div>
            <div style={{transform: `translate(10%, -230%) rotate(${second * 6}deg)`}} className="little-arrow"></div>
            <div className="numbers">
              {numbers.num1.map((num) =>
                <p className={num.part}>{num.val}</p>
              )}
              {numbers.num2.map((num) =>
                <p className={num.part}>{num.val}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default App;