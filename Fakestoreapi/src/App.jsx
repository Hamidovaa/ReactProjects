import { Route } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Myrouter from './routes/Myrouter';


function App() {
  return (
<>
<Header/>
<Myrouter/>
<Footer/>

</>
   );
}

export default App;
