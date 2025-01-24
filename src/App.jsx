import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(25); 
  const [second, setSecond] = useState(0); 
  const [start, setStart] = useState(false); 
  let [minut,setminut]=useState(0)

  useEffect(() => {
    let interval;
    if (start) {
      interval = setInterval(() => {
        setSecond((second) => {
          if (second === 0) {
            setTime((a) => (a > 0 ? a - 1 : 0));
            return 59;
          } else {
            return second - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval); 
    }
    return () => clearInterval(interval); 
  }, [start]);

  function btn() {
    setStart((prevStart) => !prevStart); 
  }
  function reset() {
    setSecond(0)
    setTime(minut)
  }
  function editminut() {
    setTime(minut)
  }
  return (
    <div className="container">
      <p className="time">
        {time} : {second.toString().padStart(2, "0")}
      </p>
      <div className="flex">
        <button onClick={btn}>{start ? "STOP" : "START"}</button>
        <button onClick={reset}>reset</button>
      </div>
      <p>Edit data</p>
      <div className="edit">
        <input
          type="text"
          placeholder="minutti kiriting"
          onChange={(e) => {
            setminut(e.target.value);
          }}
        />
        <button onClick={editminut}>save</button>
      </div>
    </div>
  );
}

export default App;
