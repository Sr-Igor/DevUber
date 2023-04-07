//Styles
import * as S from './styled';

//React
import { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

//Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux-hook';
import { setLogin } from 'store/reducers/user/actions';

//Components
// import DefaultButton from 'components/Button';
import * as Animatable from 'react-native-animatable';
// import { InputText } from 'components/InputText';

//Services

//Types
import { StackNavigation } from 'types/Navigation';
import { Text, TouchableHighlight } from 'react-native';
import { InputText } from 'components/InputText';
import DefaultButton from 'components/DefaultButton';

//Validation

export type UserSignIn = {
  email: string;
  password: string;
};

const Starter = () => {
  const navigation = useNavigation<StackNavigation>();
  const dispatch = useAppDispatch();

  const auth: any = useAppSelector((state) => state.profile);

  //Form States

  const [userForm, setUserForm] = useState({
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [fieldsError, setFieldsError] = useState<UserSignIn>();
  const [requestError, setRequestError] = useState<string>('');

  const showNotification = () => {
    Toast.show({
      type: 'error',
      text1: 'Erro',
      text2: 'CPF ou senha inválidos'
    });
  };

  useEffect(() => {
    if (auth.token) {
      navigation.navigate('ChooseProperty');
    }
  }, [auth]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  const handleChangeText = (field: keyof UserSignIn) => {
    return (text: string) => {
      setUserForm((prevState) => ({ ...prevState, [field]: text }));
    };
  };

  return (
    <S.Container>
      <S.TiltedArea>
        <S.TitleBold>DEV</S.TitleBold>
        <Animatable.View
          animation="slideInRight"
          iterationCount={'infinite'}
          direction="alternate-reverse"
        >
          <S.TitleAnimated>UBER</S.TitleAnimated>
        </Animatable.View>
      </S.TiltedArea>
      <S.LoginArea>
        <InputText
          label="Email"
          placeholder="Insira seu email"
          keyboardType="email-address"
          value={userForm.email}
          onChangeText={handleChangeText('email')}
        />
        <InputText
          label="Senha"
          placeholder="Insira sua senha"
          secureTextEntry
          value={userForm.password}
          onChangeText={handleChangeText('password')}
        />

        <DefaultButton label="Entrar" loading />
      </S.LoginArea>
    </S.Container>
  );
};

export default Starter;
