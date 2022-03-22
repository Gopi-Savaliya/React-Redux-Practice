import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { ActionCreator } from './state/index'

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();
  const { depositeMoney, withdrawMoney } = bindActionCreators(ActionCreator, dispatch);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositeMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
