import './App.css';
import 'antd/dist/antd.css';
import Main from './components/main';
import { Provider } from 'react-redux';
import configureStore from '../src/components/redux/store/store';
const store = configureStore();

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
