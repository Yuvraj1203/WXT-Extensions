import React from 'react'

interface hereObjTs {
  clickMe: any;
}

const Swap: React.FC<hereObjTs>= ({clickMe}) => {
  return (
    <div onClick={clickMe} className='text-white relative bg-[#fefbea] h-[4rem] w-[5rem] rounded mt-[16px] cursor-pointer '>
        	<span style={{borderWidth:'5px 5px 0 0',transform: 'rotate(-45deg)'}} className='absolute border-black p-2 left-[10px] top-[40%] '></span>
            <span style={{borderWidth:'5px 5px 0 0',transform: 'rotate(135deg)'}} className='absolute border-black p-2 right-[10px] bottom-[40%] '></span>
    </div>
  )
}

export default Swap