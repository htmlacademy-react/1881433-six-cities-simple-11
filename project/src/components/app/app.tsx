import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../const/const';
import PrivateRoute from '../private-route/private-route';
import WelcomeScreen from '../../pages/welcome-screen/welcome-screen';
import PropertyNotLoggedScreen from '../../pages/property-not-logged-screen/property-not-logged-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import MainEmptyScreen from '../../pages/login-screen/login-screen';
import ErrorScreen from '../../pages/error-screen/error-screen';

type AppProps = {
  amountOrders: number;
}

function App({ amountOrders }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<WelcomeScreen amountOrders={amountOrders} />}
        />
        <Route
          path={AppRoute.NoLogged}
          element={<PropertyNotLoggedScreen />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginScreen />}
        />
        <Route
          path={AppRoute.Room}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <PropertyScreen />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Empty}
          element={<MainEmptyScreen />}
        />
        <Route
          path="*"
          element={<ErrorScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
