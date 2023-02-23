import Dashboard from './components/home/Dashboard';
import store from './state/store';
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={ store }>
      <Dashboard />
    </Provider>
  );
}

export default App;
