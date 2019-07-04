import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from '../app/HomePage/HomePage';
import DetailsPage from '../app/DetailsPage/DetailsPage';

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Details: DetailsPage,
  },
);

export const Router = createAppContainer(AppNavigator);
