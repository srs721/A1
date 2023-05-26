import Products from './components/Products/Products'
import NavBar from './components/Nav/NavBar'
import Footer from './components/Footer/Footer'
import { AppBar } from '@mui/material';


function App() {
  return (

    <>

   <NavBar style={{ background: '#84ACCE' }} />
    <Products />
    <Footer />

    </>  );
}

export default App;
