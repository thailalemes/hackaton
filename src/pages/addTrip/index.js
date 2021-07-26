import React, {useState} from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import headerImage from '../../assets/headerLogo.png'

const Separator = () => (
    <View style={styles.separator} />
);

export default function addTrip() {
    const navigation = useNavigation();

    function navigateToinitTrip() {
        navigation.navigate('initTrip');
    }

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={navigateToinitTrip}>
                <Feather name="arrow-left" size={32} color="#050049" />
                </TouchableOpacity>

                <Text style={styles.title}>Adicionar Viagem</Text>
            </View>

        <View style={styles.body}>
            <Text style={styles.destiny}>Adicionar destino
                        <TextInput
                                    style={styles.input}
                                    value={text}
                                    placeholder="Adicione o destino"
                                    onChangeText={onChangeText}
                                />
                            </Text>
                             <Text style={styles.weight}>Peso Máximo do caminhão
                        <TextInput
                                    style={styles.input}
                                    value={text}
                                    placeholder="Ex.: 2000kg"
                                    onChangeNumber={onChangeNumber}
                                />
                            </Text>
                            <Text style={styles.type}>Tipo do caminhão
                        <TextInput
                                    style={styles.input}
                                    value={text}
                                    placeholder="Digite aqui o tipo do caminhão"
                                    onChangeNumber={onChangeNumber}
                                />
                            </Text>
                        </View>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={() => {}}>
                        <Text style={styles.actionTrip}>Publicar Viagem</Text>
                    </TouchableOpacity>
            </View>
            </View>
    );
}

