import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementbyAmount } from '../Redux/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counterSlice.count)
  const [amount,setAmount]=useState(0)
  const handleIncrement=()=>{
    if(amount>0){
      dispatch(incrementbyAmount(+amount))
      setAmount("")
    }
    else{
      alert("enter valid amonut")
    }
  }
  return (
    <div className='text-center bg-light container p-5 my-5 container w-50 shadow-lg'>
      <h1 className='text-danger bg-light'>{count}</h1>
      <div className='text-center bg-light d-flex justify-content-evenly'>
        <button onClick={() => dispatch(increment())} className='btn btn-success mt-5' type='button'>INCREMENT</button>
        <button onClick={() => dispatch(decrement())} className='btn btn-danger ms-2 mt-5'>DECREMENT</button>
        <button onClick={() => dispatch(reset())} className='btn btn-info ms-2 mt-5'>RESET</button>
      </div>
      <div className='text-center bg-light container p-5 my-5 container w-50 shadow-lg'>
        <input onChange={e=>setAmount(e.target.value)} value={amount||""} type="text" className='form-control bg-dark ' placeholder='enter the amount to be incremented' />
        <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment by Amount</button>
      </div>
    </div>
  )
}

export default Counter