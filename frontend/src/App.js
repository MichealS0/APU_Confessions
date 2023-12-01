import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ViewConfessions from './pages/confessions';
import AddConfession from './pages/add';
import UpdateConfession from './pages/update';

function App() {
  return (
    <div className='p-1'>
      <div className='flex justify-evenly gap-4 text-center max-w-fit mx-auto p-1 rounded-md shadow-md bg-yellow-300'>
        <h1 className='px-2'>APU Confessions</h1>
        <ul className='flex justify-between gap-3'>
          <li className='cursor-pointer duration-150 hover:bg-white hover:px-3'><p className=' px-2 rounded-lg duration-100'>Feed</p></li>
          <li className='cursor-pointer duration-150 hover:bg-white hover:px-3'><a className='px-2 rounded-lg duration-100' href='/add' >Create</a></li>
          <li className='cursor-pointer duration-150 hover:bg-white hover:px-3'><p className='px-2 rounded-lg duration-100'>About</p></li>
        </ul>
        <button className='px-4'>Github</button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ViewConfessions />}/>
          <Route path='/add' element={<AddConfession />} />
          <Route path='/update' element={<UpdateConfession />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
