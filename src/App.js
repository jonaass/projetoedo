import './App.css'; 
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <h1>Páginas</h1>

     <Link to='/landingpage'>landingpage</Link>
     <Link to='/login'> login</Link>
     <Link to='/menu'>menu do login</Link>
     <Link to='/cosultarpedido'>cosultar pedido</Link>
     <Link to='/agendarpedido'>agendar pedido</Link>
     

     
    </div>
  )
}

export default App;
