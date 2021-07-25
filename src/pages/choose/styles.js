import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        alignSelf: 'center',
        marginTop: 100,
    },

    headerImage:{
        alignSelf: 'center',
    },

    title: {
        fontSize: 28,
        width: 308,
        height: 101,
        top: 100,
        fontWeight: 'bold',
        color: '#050049',
        alignSelf: 'center',
    },

    titleBold: {
        fontWeight: 'bold',
        color: '#429BEC',
    },

   actions: {
        zIndex: -1,
        flexDirection: 'column',
        alignSelf: 'center',
        top: 300,
    },

    modal1: {
        width: 295,
        height: 272,
        left: 40,
        top: 282,
        backgroundColor: '#ffff',
        borderRadius: 20,
    },

    modal2: {
        width: 295,
        height: 272,
        left: 40,
        top: 282,
        backgroundColor: '#ffff',
        borderRadius: 20,
    },

    button1:{
        backgroundColor: '#29ae19',
    },

    button2:{
        backgroundColor: '#29ae19',
    },

    actionTrans:{
            backgroundColor: '#429BEC',           
            width: 300,
           height: 56.47,
           borderRadius: 100,
           color: '#ffff',
           fontSize: 16,
           textAlign: 'center',
           fontWeight: 'bold',
           paddingTop: 16,
           marginBottom: 16,
       }, 

    actionTax: {
        width: 300,
        height: 56.47,
        borderRadius: 100,
        backgroundColor: '#429BEC',
        textAlign: 'center',
        fontSize: 16,
        color: '#ffff',
        fontWeight: 'bold',
        paddingTop: 16,
      },

      separator: {
        marginVertical: 8,
      },
});