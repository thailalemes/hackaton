import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import headerImage from '../../assets/headerLogo.png'

const Separator = () => (
    <View style={styles.separator} />
);

export default function Choose() {

    const [visivel,setVisivel]=useState(false)

    return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image source={headerImage} style={styles.headerImage}/>
            <Text style={styles.title}>Você quer se cadastrar como Transportador ou Fretador?</Text>
        </View>
            <Separator />
                <Modal 
                animationType={'slide'}
                style={styles.modal1}
                visible={visivel}
                transparent={true}
                title='modal1'>
                    <View>
                    <Text style={styles.alert1}>Você tem certeza que quer se cadastrar como Transportador?</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#29ae19'}]}>
                        <Text>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FF0000'}]}>
                        <Text>Não</Text>
                    </TouchableOpacity>
                </Modal>
                <Modal 
                style={styles.modal2}
                visible={visivel}>
                    <View>
                    <Text style={styles.alert2}>Você tem certeza que quer se cadastrar como Fretador?</Text>
                    </View>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#29ae19'}]}>
                        <Text>Sim</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, { backgroundColor: '#FF0000'}]}>
                        <Text>Não</Text>
                    </TouchableOpacity>
                </Modal>
                <View style={styles.actions}>
                                <TouchableOpacity 
                                    style={styles.action} 
                                    onPress={() => {modal1.setVisivel(true)}}>
                                    <Text style={styles.actionTrans}>Transportador</Text>
                                </TouchableOpacity>
                                    <TouchableOpacity 
                                        style={styles.action} 
                                        onPress={() => {modal2.setVisivel(true)}}>
                                        <Text style={styles.actionTax}>Fretador</Text>
                                    </TouchableOpacity>
                </View>
        </View>
    );
}