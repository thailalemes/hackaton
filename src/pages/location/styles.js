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

    title: {
        fontSize: 32,
        width: 220,
        height: 80,
        top: 100,
        fontWeight: 'bold',
        color: '#050049',
        alignSelf: 'center',
    },


    description: { 
        top: 150,
        left: 90,
        color: '#64748B',
        fontSize: 16,
        alignItems: 'center',
        width: 231,
        height: 48,
    },

    actions: {
        zIndex: -1,
        flexDirection: 'row',
        alignSelf: 'center',
        top: 200,
    },

    actionTrip:{
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
});