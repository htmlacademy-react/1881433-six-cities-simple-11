import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';

type AppProps = {
  amountOrders: number;
}

function App({amountOrders}:AppProps): JSX.Element {
  return <WelcomeScreen amountOrders = {amountOrders}/>;
}

export default App;
