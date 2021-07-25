import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import headerImage from '../../assets/headerLogo.png'

const Separator = () => (
    <View style={styles.separator} />
);

export default function Choose() {
    const navigation = useNavigation();

    function navigateToWelcome() {
        navigation.navigate('Welcome');
    }

    function navigateToInitTrip() {
        navigation.navigate('initTrip');
    }

    function navigateToInitTax() {
        navigation.navigate('initTax');
    }

    function navigateToWelcome() {
        navigation.navigate('Welcome');
    }

    const [visivel,setVisivel]=useState(false)

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={headerImage} style={styles.headerImage}/>
            <Text style={styles.title}>Você quer se cadastrar como Transportador ou Fretador?</Text>
        </View>
            <Separator />
                <Modal 
                style={styles.modal1}
                visible={visivel}
                title='modal1'>
                    <View>
                    <Text style={styles.alert1}>Você tem certeza que quer se cadastrar como Transportador?</Text>
                    </View>
                    <Button
                    style={styles.button1}
                    title="Sim"
                    onPress={navigateToInitTrip} />
                    <Button 
                    title="Não"
                    onPress={navigateToWelcome} />
                </Modal>
                <Modal 
                style={styles.modal2}
                visible={false}
                transparent={true}>
                    <View>
                    <Text style={styles.alert2}>Você tem certeza que quer se cadastrar como Fretador?</Text>
                    </View>
                    <Button 
                    style={styles.button2}
                    title="Sim"
                    onPress={navigateToInitTax} />
                    <Button 
                    title="Não"
                    onPress={navigateToWelcome} />
                </Modal>
                <View style={styles.actions}>
                                <TouchableOpacity 
                                    style={styles.action} 
                                    onPress={() => {setVisivel(true)}}>
                                    <Text style={styles.actionTrans}>Transportador</Text>
                                </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={styles.action} 
                                        onPress={() => {setVisivel(true)}}>
                                        <Text style={styles.actionTax}>Fretador</Text>
                                    </TouchableOpacity>
                </View>
        </View>
    );
}