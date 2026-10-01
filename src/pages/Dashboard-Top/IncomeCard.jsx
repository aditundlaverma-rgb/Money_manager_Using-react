import React from 'react'

const IncomeCard = ({income}) => {
  return (
    <div>
        <div className=' flex border-2 flex-col w-50px py-5 float-left  px-12  h-45 rounded-2xl bg-blue-200 '>
            <h3 className='flex items-center text-xl font-bold py-5'>Total Income</h3>
            <h4 className='flex justify-center items-center py-5'> ₹{income}</h4>
        </div>
    </div>
  )
}

export default IncomeCard