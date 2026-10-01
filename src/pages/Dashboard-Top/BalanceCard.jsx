import React from 'react'

const BalanceCard = ({balance}) => {
  return (
    <div >
        <div className=' flex border-2 flex-col w-50px py-5 float-left  px-12  h-45 rounded-2xl bg-emerald-300 '>
            <h3 className='text-xl font-bold flex py-5  '>Balance</h3>
            <h4 className='flex justify-center items-center py-5'> ₹{balance}</h4>
        </div>
    </div>
  )
}

export default BalanceCard