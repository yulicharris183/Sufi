import logo from './logo.svg';
import './App.css';
import { Home } from './Components/home';
import { Header } from './Components/header';
import { useState } from 'react';
import { FirstForm } from './Components/firstForm'

function App() {
  const [show, setShow] = useState(0)

  return (
    <div>
      <Header />
      {show === 0 && <Home setShow={setShow} />}
      {show === 1 && <FirstForm />}
    </div>
  );
}
export default App;
