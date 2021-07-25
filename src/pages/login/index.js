import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Separator = () => (
    <View style={styles.separator} />
);


export default function Login() {
    const navigation = useNavigation();

    function navigateToinitTrip() {
        navigation.navigate('initTrip');
    }

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Login</Text>
            </View>
        <View style={styles.body}>
                    <TextInput
                    style={styles.input}
                    value={number}
                    placeholder="CPF"
                    autoCorrect={false}
                    onChangeNumber={onChangeNumber}
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    autoCompleteType="password"
                    onChangeText={onChangeText}
                    placeholder="Senha"
                    autoCapitalize="none"
                    textContentType="password"
                    secureTextEntry={true}
                />
                <Separator />
                    <TouchableOpacity 
                    style={styles.forgotPassword} 
                    onPress={() => {}}
                    >
                    <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                    </View>
             <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={navigateToinitTrip}>
                    <Text style={styles.actionLogin}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}