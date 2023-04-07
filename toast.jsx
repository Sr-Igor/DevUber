// App.jsx
import { Text, View } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import Icon from 'react-native-vector-icons/FontAwesome';

/*
  1. Create the config
*/
export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
        fontWeight: '400',
        color: 'white'
      }}
      text2Style={{
        fontSize: 15,
        fontWeight: '400',
        color: 'white'
      }}
      style={{
        borderLeftColor: 'transparent',
        backgroundColor: '#d32f2f',
        width: '100%',
        margin: 0,
        padding: 0,
        borderRadius: 0,
        top: 0,
        marginTop: -20,
        alignItems: 'center'
      }}
      renderLeadingIcon={() => (
        <View
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Icon name="times-circle-o" size={25} color="white" />
        </View>
      )}
      contentContainerProps={{
        style: {
          padding: 0,
          margin: 0,
          borderRadius: 0,
          width: '100%'
        }
      }}
    />
  )
};
