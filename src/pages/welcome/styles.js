import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    backgroundImage:{
        flex: -20,
        resizeMode: 'cover',
        width: '100%',
        left: 1,
        height: '80%'
    },

    body: {
    },

    title: {
        fontSize: 40,
        width: 222,
        height: 101,
        left: 40,
        top: 438,
    },

    titleBold: {
        fontWeight: 'bold',
        color: '#429BEC',
    },

    description: {
        top: 452,
        left: 40,
        color: '#64748B',
        fontSize: 16,
        textAlign: 'left',
        width: 261,
        height: 48,
    },

    actions: {
        zIndex: -1,
        flexDirection: 'row',
        alignSelf: 'center',
        top: 60,
    },

    actionRegistry:{
        backgroundColor: '#F6F8FC',
           width: 250,
           left: -40,
           height: 56.47,
           borderRadius: 100,
           fontSize: 16,
           textAlign: 'center',
           fontWeight: 'bold',
           paddingTop: 16,
           paddingLeft: 60,
       }, 

    actionLogin: {
        width: 174.24,
        height: 56.47,
        left: 50,
        borderRadius: 100,
        backgroundColor: '#429BEC',
        textAlign: 'center',
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold',
        paddingTop: 16,
        overflow: 'visible',
      },

      separator: {
        marginVertical: 8,
      },
});