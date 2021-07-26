import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import headerImage from '../../assets/headerLogo.png'

const Separator = () => (
    <View style={styles.separator} />
);

export default function initTrip() {
    const navigation = useNavigation();

    function navigateToaddTrip() {
        navigation.navigate('addTrip');
    }

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Você não tem viagens ativas</Text>
        </View>
        <Text style={styles.description}>Clique no botão abaixo e inicie agora mesmo a sua viagem
                        </Text>
                        <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateToaddTrip}>
                    <Text style={styles.actionTrip}>Iniciar Viagem</Text>
                </TouchableOpacity>
            </View>
            </View>
    );
}