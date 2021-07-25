import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight + 20,
    },
    header:{
        marginTop: 10,
        marginLeft: 10,
    },

    title: {
        fontSize: 32,
        width: 300,
        height: 60,
        top: 50,
        fontWeight: 'bold',
        color: '#050049',
        alignSelf: 'center',
    },

    destiny:{
        width: 129,
        height: 24,
        left: 20,
        top: 105,
        alignItems: 'center',
        color: '#050049',
        fontWeight: 'bold',
        fontSize: 16,
    },

    weight:{
        width: 200,
        height: 24,
        left: 20,
        top: 180,
        alignItems: 'center',
        color: '#050049',
        fontWeight: 'bold',
        fontSize: 16,
    },

    type:{
        width: 129,
        height: 24,
        left: 20,
        top: 250,
        alignItems: 'center',
        color: '#050049',
        fontWeight: 'bold',
        fontSize: 16,
    },


    input1: {
        width: 335,
        left: 20,
        top: 141,
        backgroundColor: '#F6F8FC',
        borderRadius: 10,
        paddingLeft: 10,
      },

      input2: {
        height: 60,
        width: 335,
        left: 20,
        margin: 12,
        backgroundColor: '#F6F8FC',
        borderRadius: 10,
        paddingLeft: 10,
      },

      input3: {
        height: 60,
        width: 335,
        left: 20,
        margin: 12,
        backgroundColor: '#F6F8FC',
        borderRadius: 10,
        paddingLeft: 10,
      },

      actions: {
        zIndex: -1,
        flexDirection: 'row',
        alignSelf: 'center',
        top: 500,
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
})
