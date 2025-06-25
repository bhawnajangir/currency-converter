import React,{useState} from "react";
import Country,{ currencyData }from "./Country";
import  CountryToCurrency  from './CountryToCurrency';

export default function Card(props){
 const [selectedKey, setSelectedKey] = useState("AF"); // default country
 const [selectedKey2, setSelectedKey2] = useState("AF"); 
 const [amount, setAmount] = useState(1);
const [convertedResult, setConvertedResult] = useState("");

  const handleKeyChange = (key) => {
    console.log("handlekeuchange called",key)
    setSelectedKey(key); // this will come from Country.js
  };
  const handleKeyChange2 = (key) => {
    setSelectedKey2(key); // this will come from Country.js
  };



  
const changeCRR = async () => {
  console.log("change crr called")
  const fromCurrency = CountryToCurrency[selectedKey];
  console.log(fromCurrency)
  const toCurrency = CountryToCurrency[selectedKey2];
  console.log(toCurrency)

  if (!fromCurrency || !toCurrency || !amount) {
    alert("Please select valid countries and enter amount");
    return;
  }

  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

  const response = await fetch(url);
  const data = await response.json();

  const rate = data[fromCurrency][toCurrency];
  console.log(rate)
  if (!rate) {
    setConvertedResult("Rate not available.");
    return;
  }

  const converted = amount * rate;
  setConvertedResult(`${amount} ${fromCurrency.toUpperCase()} = ${converted.toFixed(2)} ${toCurrency.toUpperCase()}`);
};



    return(
      <>

     <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card" style={{width: '18rem'}}>


  <div className="card-body">

    <h5 className="card-title">{props.title}</h5>
    <div className="card-text">
      <p className="text-start"  >enter amount</p>
    <div className="input-group mb-3">
        <input type="text" value={amount}className="form-control" aria-label="Dollar amount (with dot and two decimal places)" onChange={(e) => setAmount(e.target.value)}/>
    </div>
< div className="drop d-flex">  
<div className="from">   
  <div class="select-container">
              <img src={`https://flagsapi.com/${selectedKey}/flat/64.png`} alt="image"/>
              <Country onSelectKey={handleKeyChange}/>
   </div>
   </div>
<i className="fa-solid fa-right-left me-2 my-4"></i>
<div className="to">   
  <div class="select-container">
              <img src={`https://flagsapi.com/${selectedKey2}/flat/64.png`} alt="image"/>
              <Country onSelectKey={handleKeyChange2}/>
   </div>
   </div>

   
      
</div>
<div className="output my-4"><p>{convertedResult ? convertedResult : "1 AFN = 1.00 AFN"}</p></div>
    </div>
    <a onClick={changeCRR} className="btn btn-sucess">Get Exchange Rate</a>
  </div>
</div>
     </div>
     </>
    )
}