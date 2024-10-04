import './App.css'
import Barnav from './components/Barnav'
import {Outlet} from 'react-router-dom'


function App() {

  return (
    <div>
      <Barnav/>
      <div className='mt-[50px]'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default App
