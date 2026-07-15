import './App.css'
import Lottery from './Lottery'
import Ticket from './Ticket'
import TicketNum from './TicketNum'
import ToDO from './ToDo'

function App() {
    let winCondition=(arr)=>{
      return arr[0]==arr[arr.length-1]
    }
  return (
   <>
      <Lottery n={3} winCondition={winCondition}/>
   </>
  )
}

export default App
