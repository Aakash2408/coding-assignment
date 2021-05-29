import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import { Provider } from 'react-redux';
import configureStore from '././components/Redux/store/store';
const store = configureStore();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Main />
       </Provider>
    </div>
  );
}

export default App;
