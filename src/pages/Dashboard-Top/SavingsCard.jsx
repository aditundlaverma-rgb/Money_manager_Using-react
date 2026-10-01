import React from 'react'

const SavingsCard = ({savings}) => {
  return (
    <div>
         <div className=' flex flex-col border-2 w-50px py-5 float-left  px-12  h-45 rounded-2xl bg-purple-200 '>
            <h3 className='text-xl font-bold flex py-5  '>Savings</h3>
            <h4 className='flex justify-center items-center py-5'> ₹{savings}</h4>
        </div>
    </div>
  )
}

export default SavingsCard