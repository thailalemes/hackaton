import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Separator = () => (
    <View style={styles.separator} />
);

export default function Registry() {
    const navigation = useNavigation();

    function navigateToChoose() {
        navigation.navigate('Choose');
    }

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Cadastro</Text>
        </View>
                    <View style={styles.body}>
                                <TextInput
                                style={styles.input}
                                value={text}
                                placeholder="Nome"
                                autoCorrect={false}
                                onChangeText={onChangeText}
                                keyboardType="default"
                                />
                                <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="CPF"
                                onChangeNumber={onChangeNumber}
                                keyboardType="numeric"
                            />
                             <TextInput
                                style={styles.input}
                                value={text}
                                placeholder="E-mail"
                                autoCorrect={false}
                                onChangeText={onChangeText}
                                keyboardType="email-address"
                            />
                             <TextInput
                                style={styles.input}
                                value={number}
                                placeholder="Telefone"
                                onChangeNumber={onChangeNumber}
                                keyboardType="phone-pad"
                            />
                             <TextInput
                                style={styles.input}
                                value={text}
                                placeholder="Endereço"
                                autoCorrect={false}
                                onChangeText={onChangeText}
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
                            <TextInput
                                style={styles.input}
                                autoCompleteType="password"
                                autoCapitalize="none"
                                onChangeText={onChangeText}
                                textContentType="password"
                                placeholder="Confirmar Senha"
                                secureTextEntry={true}
                            />
                </View>
                <Separator />
                        <View style={styles.actions}>
                            <TouchableOpacity style={styles.buttonRegister} onPress={navigateToChoose}>
                                <Text style={styles.registerText}>Cadastro</Text>
                            </TouchableOpacity>
                        </View>
    </View>
    );
}