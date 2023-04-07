import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Preload from 'pages/Preload';
import StackDefault from 'pages/Stacks';

import { RootStackParamList } from 'types/Navigation';

const MainStack = createNativeStackNavigator<RootStackParamList>();

const DefaultStack = () => (
  <MainStack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
      statusBarStyle: 'dark',
      statusBarColor: '#F2F2F2',
      animation: 'slide_from_right'
    }}
  >
    <MainStack.Screen name="Preload" component={Preload} />
    <MainStack.Screen name="StackDefault" component={StackDefault} />
  </MainStack.Navigator>
);

export default DefaultStack;
