import './App.css'
import PriceOoptions from './PriceOptions/PriceOoptions'
import Navbar from './component/Navbar/Navbar'
// import DaisyNav from './component/DaisyNav/DaisyNav'

function App() {

  return (
    <>
      <Navbar></Navbar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-4xl bg-red-300'>React + vite</h1>
      <PriceOoptions></PriceOoptions>
      
    </>
  )
}

export default App
