import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 32,
        alignSelf: 'center',
        width: 184,
        height: 51,
        top: 50,
        color: '#050049',
    },

    action: {
        flexDirection: 'row',
        alignSelf: 'center',
        top: 60,
    },

    buttonRegister: {
        zIndex: 1,
        width: 296,
        height: 56.47,
        top: 420,
        alignSelf: 'center',
        borderRadius: 100,
        backgroundColor: '#429BEC',
      },

      registerText:{
        textAlign: 'center',
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold',
        paddingTop: 16,
      },

      input: {
        height: 40,
        width: 320,
        left: 20,
        top: 150,
        margin: 12,
        paddingLeft: 10,
        borderBottomColor: '#CBD4E1',
        borderBottomWidth: 2,
      },
    })