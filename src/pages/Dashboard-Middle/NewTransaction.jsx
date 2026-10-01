import React, { useState } from 'react'
 


const NewTransaction = ({addTransaction}) => {
  
const [form, setform] = useState({
  title:"",
  amount:"",
  category:"Food",
  type:"Expense",
  date:"",

})


 
     const handleSubmit=(e)=>{
      e.preventDefault();
      addTransaction(form)
    setform({
    title: "",
    amount: "",
    category: "Food",
    type: "Expense",
    date: "",
  })
     }
    
  return (
    <div>
         <div className='flex flex-col p-5 '>
        <h4 className='px-4 py-2 text-xl font-bold'>Add New Transaction</h4>
        <form className='flex bg-gray-100 gap-2 py-5 px-5 justify-center flex-col border-2'
        onSubmit={handleSubmit}>
           <label className='' >Title:</label>
           <input className="border-2 px-3 " type="text" placeholder='e.g:Lunch,Salary,Uber' value={form.title}
           onChange={(e)=>{
            setform({
              ...form,
              title:e.target.value})
           }}
         />
           <label >Amount:</label>
           <input className="border-2 px-3"type="text" value={form.amount}
            onChange={(e)=>{
            setform({
              ...form,
              amount:e.target.value})
           }}/>
           <label>Category:</label>
          <select className="border-2 px-3" name="" id="" value={form.category}
           onChange={(e)=>{
            setform({
              ...form,
              category:e.target.value})
           }}>
             <option value="Food">Food</option>
            <option value="Travel">Travel</option>
             <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
               <option value="Hobby">Hobby</option>
               <option value="Work">Work</option>
          </select>
         <label >Type:</label>
         <select className="border-2 px-3" value={form.type}
          onChange={(e)=>{
            setform({
              ...form,
              type:e.target.value})
           }}>
            <option value="Expense">Expense</option>
             <option value="Savings">Savings</option>
              <option value="Income">Income</option>
         </select>
         <label >Date:</label>
         <input className="border-2 px-3" type="date"value={form.date}
          onChange={(e)=>{
            setform({
              ...form,
              date:e.target.value})
           }}/>

         <button className='border-2 bg-green-300 py-1 active:scale-95'>+Add New Transaction</button>
         
        </form>
    </div>
    </div>
  )
}

export default NewTransaction