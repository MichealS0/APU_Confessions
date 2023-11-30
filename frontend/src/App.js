import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ViewConfessions from './pages/confessions';
import AddConfession from './pages/add';
import UpdateConfession from './pages/update';

function App() {
  return (
    <div>
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
