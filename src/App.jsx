import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var [c, setC] = React.useState(0);
  var [x, setX] = React.useState(100);
  var trf = useRef();
  // setInterval(()=>{
  //     setC(c+1)
  //     //render aina prathisaari oka kotha set interval malli malli create avuthuu untundi, ade problem ikkada
  // },1000)
  useEffect(() => {
    trf.current = setInterval(() => {
      console.log("setInterval is called");
      setC((prev) => {
        return prev + 1;
      });
      //setInterval call avutune untundi prathi second ki okasari, but count 0 or 1 daggarikochaaka aagipoddi,
      //endukante bayata c value 0 ga thiskoni danini 1 chesi aaguthundi anthe, ee useEffect lopala unna inner function outer function nundi c=0 ni thiskontundi
      //aa c value maratledu
      //first lo unna initial value 0 thiskoni, daaniki 1 add chesthundi anthe
      //latest c value ni techukovatledu
      //ilanti situations lo setter functions lo callback ni vaaduthaam
      //deeni valana updated c value or state value vasthundi
      //old values ni pick cheskoni new values ivvaali ante, callback functions ni vaadaali setter functions lo
      //old setIntervals ni clear cheyyaali eppatikappudu lekapothe, setIntervals create avuthuu untaayi multiple times, component update ayinappudallaa, or component lo emannaa changes chesinappudallaa
      //component ni unmount cheyyali, once we r done with it
      //setInterval, clearInterval okate function lo pettukovadam valla matrame, tf anedi dorikindi. ade bayata ekkado vaadunte dorikedi kaadu
      //timer ni stop cheyyalante there is only one way, i.e.,clearInterval
      //global variable vaadinaa, timer clear avvatledu
      //but ilaa chesinaa clear avvatledu timer, anduke reference variable vaadaali.
      //useRef dwaara oka reference variable create cheskoni, daanini manam apply cheskontaam
      //Setter function lo callback function eppudu vaadathaam: manam edainaa timers vaatini vaadinappudu, oka timertho state variable update chesinappudu, old values undipothaayi, edi eppatikappudu update avvadu, alaa eppatikappudu timer tho update cheyyalante callback function tho cheyyochu ani cheppachu
      //useRef anedi text boxes ni refer cheyyadaaniki vaadathaam, inkaa timers ni reference cheskodaaniki kuda vaadathaaru
    }, 1000);
    return () => {
      //clearInterval(tf);
      clearInterval(trf.current);
    };
  }, []);
  function stopPlease() {
    console.log("timer called off");
    clearInterval(trf.current);
  }
  console.log(c);
  return (
    <div className="App">
      <h1>Counter:{c}</h1>
      <button
        class="btn btn-info p-2 m-2"
        onClick={() => {
          stopPlease();
        }}
      >
        Stop the timer
      </button>
      <h1>X value is something:{x}</h1>
    </div>
  );
}

export default App;
