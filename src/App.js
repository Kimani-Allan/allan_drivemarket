// import logo from './logo.svg';
import './App.css';
import GetProductComponent from './components/GetProductComponent';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import NavbarComponent from './components/NavbarComponent';
import AddProductComponent from './components/AddProductComponent';
import MakePaymentComponent from './components/MakePaymentComponent';

function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <NavbarComponent />
        <header className="App-header">
          <h1>DriveMarket</h1>
        </header>
      </div>
      <Routes>

        <Route path='/signin' element={<SignInComponent />} />
        <Route path='/signup' element={<SignUpComponent />} />
        <Route path='/' element={<GetProductComponent />} />
        <Route path='/addproduct' element={<AddProductComponent />} />
        <Route path='/makepayment' element={<MakePaymentComponent/>} />



      </Routes>


    </BrowserRouter>

  );
}

export default App;
