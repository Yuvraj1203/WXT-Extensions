import { useState } from 'react';
import Input from './Inputs/Input';
import Swap from './Header/Swap';
import Curjson from './API/Curjson'
import Button from './Inputs/Button';


function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = Curjson[from];
  const mainOptions = Object.keys(Curjson);
  const options = Object.keys(currencyInfo);

  const swapping = () => {
    setTo(from);
    setFrom(to);
    setAmount(convertedAmount);
    convertedAmount(amount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }
  console.log(convertedAmount)
  return (
    <form className='grid place-items-center'
    onSubmit={(e)=>{e.preventDefault()}}
    >
      <Input legend='from'
      amount={amount}
      currencyOption={mainOptions}
      onCurrencyChange={(currency)=>{
        setFrom(currency) 
      }}
      selectCurrency={from}
      onAmountChange={(amount)=>{
        setAmount(amount)
      }}
      />
      <Swap clickMe={swapping}/>
      <Input legend='to'
            amount={convertedAmount}
            currencyOption={options}
            onCurrencyChange={(currency)=>{
              setTo(currency)
            }}
            selectCurrency={to}

      />
      <Button clickBtnMe={convert} btnText={`Convert ${from} to ${to}`} />
    </form>
  );
}

export default App;
