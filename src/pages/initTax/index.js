import React, {useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import headerImage from '../../assets/headerLogo.png'

const Separator = () => (
    <View style={styles.separator} />
);

export default function initTax() {
    const navigation = useNavigation();

    function navigateToWelcome() {
        navigation.navigate('Welcome');
    }

    return(
        <View />
    );
}