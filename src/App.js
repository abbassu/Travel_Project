import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/nav';
import { BrowserRouter,Route,Routes ,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Layout from './component/layout/layout';
import About from './component/about/about';
import Service from './component/service/service';
import Contact from './component/contact/contact';
import Signup from './component/signup/signup';
import Home from './component/home/home';
import Signin from './component/signin/signin';

function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>

      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>


    </Route>
  )
)

  return (

    <div className="App">
        <RouterProvider router={router}/>
    </div>

  );
}

export default App;
