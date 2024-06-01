import React,{useId, useState} from 'react'

interface InputProps {
    legend: string;
    amount:number;
    onAmountChange:any;
    onCurrencyChange:any;
    selectCurrency: string;
    currencyOption:any;
    // onCurrencyChange: (currency: string) => void;
  }

const Input: React.FC<InputProps> = ({ legend,amount,  selectCurrency,onCurrencyChange,onAmountChange,currencyOption=[] }) => {
    const [optionVal, setOptionVal] = React.useState<any>({});
    const unwantedId = useId(); //just for exploring
    const [currencyOpt,setCurrencyOpt] = useState(selectCurrency);

    // const handleClick = () =>{
    //     console.log(optionVal)
    // }

  return (
    <fieldset className='p-4 text-white border-2 border-white rounded'>
        <legend className='text-xl'>{legend}</legend>
        <div className='bg-white p-2.5 rounded'>
            <input
            id={unwantedId}
            value={amount}
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
            placeholder='put value here...' type='number' className='outline-none text-black' />
            <select
            value={selectCurrency}
            onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
            className='text-black outline-none'>
              {currencyOption.map((currVal:string) => {
                return (
                  <option key={currVal} value={currVal}
                  >
                    {currVal}
                  </option>
                )
              })}
            </select>
        </div>
    </fieldset>
  )
}

export default Input