import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { CompositeNavigationProp } from '@react-navigation/native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

//General Stack Types
export type RootStackParamList = {
  //Hight Order
  StackDefault: undefined;
  Preload: undefined;
  Login: undefined;
  Register: undefined;
  ChooseProperty: undefined;
  DrawerMain: undefined;
};

//Default Stack Types
type StackScreenRouteProp = RouteProp<
  RootStackParamList,
  'Preload' | 'Login' | 'Register' | 'ChooseProperty' | 'DrawerMain' | 'StackDefault'
>;

type StackScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'Login' | 'Register' | 'ChooseProperty' | 'StackDefault'>,
  BottomTabNavigationProp<RootStackParamList>
>;

export type StackRoute = StackScreenRouteProp;
export type StackNavigation = StackScreenNavigationProp;
