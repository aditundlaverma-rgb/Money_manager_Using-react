import React, { useState } from 'react'

const RecentTransaction = ({transactions}) => {
  const [rows, setrows] = useState([
    { id:1,name:"Row1"},
    { id:2,name:"Row2"},
    { id:3,name:"Row3"},
    { id:4,name:"Row4"},
    { id:5,name:"Row5"},
  ]
   
  )
  const Delete=(id)=>{setrows(prevrows => prevrows.filter(row=>row.id!==id));

  }
  return (
    <div className='bg-gray-100 p-8 rounded-2xl'>
        <h4 className='text-xl font-bold px-34 py-4'>Recent Transactions</h4>
      <div className='flex justify-between  items-center flex-col border-2 rounded-2xl ml-30'>
          <table >
           <thead>
             <tr key={rows.id}>
                 <td  className="text-left px-17 py-2">Date</td>
              <td  className="text-left px-17 py-2">Title</td>
                <td  className="text-left px-17  py-2">Category</td>
                <td  className="text-left px-17 py-2">Type</td>
                <td  className="text-left px-17 py-2">Amount</td>
                <td  className="text-left px-17 py-2">Action</td>
            </tr>
           </thead>
           <tbody>
             {transactions.map((transaction, index) => (
      <tr key={index}>
        <td >{transaction.date}</td>
        <td > {transaction.title}</td>
        <td >{transaction.category}</td>
        <td >{transaction.type}</td>
        <td  >₹{transaction.amount}</td>

        <td>
          <button  className='bg-blue-200 px-3 ml-2 mb-2 active:scale-95' >Edit</button>
          <button className='bg-red-200 px-3 ml-2 mb-2 active:scale-95' onClick={()=>Delete(rows.id)} >Delete</button>
        </td>
      </tr>
    ))}
           </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentTransaction