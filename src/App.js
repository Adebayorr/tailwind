import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import RootLayout from './Layout/RootLayout';
// import Home from './Home';
import Events from './Events';
import Homepage from './Homepage';

function App() {

  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path='/events' element={<Events />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
