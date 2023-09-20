import './App.css'
import PriceOoptions from './PriceOptions/PriceOoptions'
import LineChart from './component/LineChart/LineChart'
import Navbar from './component/Navbar/Navbar'
import Phones from './component/Phones/Phones'
// import DaisyNav from './component/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl bg-red-300'>React + vite</h1>
      <PriceOoptions></PriceOoptions>
      <LineChart></LineChart>
      <Phones></Phones>
      
    </>
  )
}

export default App
