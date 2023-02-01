import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { AHCalc } from "./AuctionHouseCalc";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Johanscomponent></Johanscomponent>
      </header>
    </div>
  );
}

export default App;

function Johanscomponent({}) {
  let [nItems, setnItems] = useState(4410);
  let [totalTT, settotalTT] = useState(4.41);
  let [markupLP, setmarkupLP] = useState(103.0);
  let [markupHP, setmarkupHP] = useState(115.0);
  let [AHData, setAHData] = useState([]);

  //let AHData = AHCalc(nItems, totalTT, markupLP, markupHP);
  // space - &nbsp;
  return (
    <div>
      <table>
        <tr>
          <td align="right">Number of items -</td>
          <td>
            <input
              type="text"
              value={nItems}
              onChange={(event) => {
                setnItems(parseInt(event.target.value));
              }}
            />
          </td>
        </tr>
        <tr>
          <td align="right">Total TT Value -</td>
          <td>
            <input
              type="text"
              value={totalTT}
              onChange={(event) => {
                settotalTT(parseFloat(event.target.value));
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Lowest markup % -</td>
          <td>
            <input
              type="text"
              value={markupLP}
              onChange={(event) => {
                setmarkupLP(parseFloat(event.target.value));
              }}
            />
          </td>
        </tr>
        <tr>
          <td>Highest markup % -</td>
          <td>
            <input
              type="text"
              value={markupHP}
              onChange={(event) => {
                setmarkupHP(parseFloat(event.target.value));
              }}
            />
          </td>
        </tr>
      </table>
      <input
        type={"button"}
        value="Calculate"
        onClick={(event) => {
          setAHData(AHCalc(nItems, totalTT, markupLP, markupHP));
        }}
      ></input>
      <br></br>
      <table border={1}>
        <th># Items</th>
        <th>Sell Amount</th>
        <th>Markup</th>
        <th>PED Profit</th>
        {AHData.map((element) => {
          return (
            <>
              <tr>
                <td>{element.nItems}</td>
                <td>{element.SellAmount}</td>
                <td>{element.Markup}</td>
                <td>{element.PEDProfit}</td>
              </tr>
            </>
          );

          //(nItems, totalTT, markupLP, markupHP)
        })}
      </table>
    </div>
  );
}

//$nItems = Read-Host -Prompt 'Total number of items'
//$totalTT = Read-Host -Prompt 'Total TT Value'
//$markupLP = Read-Host -Prompt 'Lowest Markup %'
//$markupHP = Read-Host -Prompt 'Highest Markup %'
