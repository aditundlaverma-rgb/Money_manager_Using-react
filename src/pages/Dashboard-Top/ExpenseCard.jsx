import React from 'react'

const ExpenseCard = ({expense}) => {
  return (
    <div>
         <div className=' flex border-2 flex-col w-50px py-5 float-left  px-12  h-45 rounded-2xl bg-red-200 '>
            <h3 className='text-xl font-bold flex py-5  '>Expense</h3>
            <h4 className='flex justify-center items-center py-5'> ₹{expense}</h4>
        </div>
    </div>
  )
}

export default ExpenseCard