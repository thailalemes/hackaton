import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 10,
    },
    backgroundImage:{
        flex: -20,
        resizeMode: 'cover',
        width: '100%',
        left: 1,
        height: '87%',
        backgroundColor: '#84B201',
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
        fontSize: 40,
        width: 222,
        height: 101,
        left: 100,
        top: 438,
        fontWeight: 'bold',
        color: '#415703',
    },

    description: {
        top: 452,
        left: 70,
        color: '#64748B',
        fontSize: 16,
        textAlign: 'center',
        width: 261,
        height: 48,
    },

    actions: {
        flexDirection: 'row',
        alignSelf: 'center',
        top: -40,
    },

    actionLogin: {
        width: 174.24,
        height: 56.47,
        left: 50,
        borderRadius: 100,
        backgroundColor: '#84B201',
        textAlign: 'center',
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold',
        paddingTop: 16,
        overflow: 'visible',
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
           color: '#000',
           paddingTop: 16,
           paddingLeft: 60,
       }, 

      separator: {
        marginVertical: 8,
      },
});