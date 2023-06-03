import axios from 'axios'
import Header from './Components/Header';

axios.defaults.withCredentials = true;
function App() {
  return (
    <Header />
  );
}

export default App;