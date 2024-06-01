import React from 'react'
interface textBtn {
    btnText :string;
    clickBtnMe:any
}
const Button:React.FC<textBtn> = ({btnText,clickBtnMe}) => {
  return (
    <button
    onClick={clickBtnMe}
    type='submit' className='text-blue font-bold relative bg-[#fefbea] h-[4rem] w-[5rem] rounded mt-[16px] cursor-pointer '>{btnText}</button>
  )
}

export default Button