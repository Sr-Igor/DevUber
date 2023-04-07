//Navigation
import { StackActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

//React
import { useEffect } from 'react';

//Redux
import { useAppSelector, useAppDispatch } from 'hooks/redux-hook';
import { setToken, setUser } from 'store/reducers/user/actions';

const PreloadScreen = () => {
  const user: any = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    verifyToken();
  }, []);

  const verifyToken = async () => {
    navigation.dispatch(StackActions.replace('StackDefault'));
  };

  return null;
};

export default PreloadScreen;
