import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../../assets/telaLogin.png';
import retBackground from '../../assets/retBackground.png';

import styles from './styles';

const Separator = () => (
    <View style={styles.separator} />
);

export default function Welcome() {
    const navigation = useNavigation();

    function navigateToLogin() {
        navigation.navigate('Login');
    }

    function navigateToRegistry() {
        navigation.navigate('Registry');
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
            <View style={styles.body}>
                <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                        <Text style={styles.titleBold}>Bem vindo!</Text>
                        <Text style={styles.description}>is simply dummy text of the printing and typesetting industry. Lorem
                        </Text>
                    </ImageBackground>
                </View>
                <Separator />
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={navigateToLogin}>
                            <Text style={styles.actionLogin}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={navigateToRegistry}>
                            <Text style={styles.actionRegistry}>Cadastro</Text>
                        </TouchableOpacity>
                    </View> 
        </View>
    );
}