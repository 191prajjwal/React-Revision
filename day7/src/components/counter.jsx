import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './Redux/actions'
export default function counter() {
  const count=useSelector((state)=>state.count)
  const dispatch=useDispatch()

  return (
    <>
    <h1>Count:{count}</h1>
    <button onClick={()=>dispatch(increment())}>Increment</button>
    <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}
