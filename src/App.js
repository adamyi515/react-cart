import './App.css';

// Components
import Navbar from './layouts/navbar/navbar.component';
import Cart from './components/cart/cart.component';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart />
    </div>
  );
}

export default App;
