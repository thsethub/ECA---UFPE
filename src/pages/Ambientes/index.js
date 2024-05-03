import Paho from "paho-mqtt";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';

import * as Animatable from 'react-native-animatable'
// import { useNavigation } from '@react-navigation/native'


export default function Ambientes() {

    const [client, setClient] = useState(null);
    const [connected, setConnected] = useState(false);
    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    // const navigation = useNavigation();

    useEffect(() => {
        const mqttClient = new Paho.Client(
            "192.168.15.174",
            Number(1884),
            `id_ufpe-${parseInt(Math.random() * 100)}`
        );

        mqttClient.onMessageArrived = onMessage;

        mqttClient.connect({
            onSuccess: () => {
                console.log("Conectado!");
                mqttClient.subscribe("clp1");
                mqttClient.subscribe("circuitos");
                mqttClient.subscribe("salaRedes");
                setConnected(true);
                setClient(mqttClient);
            },
            onFailure: () => {
                console.log("Falha ao conectar!");
            }
        });

        return () => {
            mqttClient.disconnect();
        };
    }, []);

    function onMessage(message) {
        if (message.destinationName === "clp1") {
            setValue(message.payloadString);
        }
        if (message.destinationName === "circuitos") {
            setValue1(message.payloadString);
        }
        if (message.destinationName === "salaRedes") {
            setValue2(message.payloadString);
        }
    }

    function msgClp1() {
        if (connected) {
            const message = new Paho.Message("mensagemSalaClp1");
            message.destinationName = "clp1";
            client.send(message);
        }
    }

    function msgCircutitos() {
        if (connected) {
            const message1 = new Paho.Message("mensagemSalaCircuitos");
            message1.destinationName = "circuitos"
            client.send(message1);
        }
    }
    function msgSalaRedes() {
        if (connected) {
            const message2 = new Paho.Message("mensagemSalaRedes");
            message2.destinationName = "salaRedes"
            client.send(message2);
        }
    }
    

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <View style={styles.containerHeader}>
                <Animatable.View animation="fadeInDown" delay={500}>
                    <Image style={styles.logo1} source={require('../imgs/Logo_Eca_Vetor.png')}></Image>
                </Animatable.View>
            </View>

                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.text}>CLP 1: {value}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={msgClp1}
                        >
                            <Text style={styles.buttonText}>Laboratório de CLP 1</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Text style={styles.text}>Circuitos: {value1}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={msgCircutitos}
                        >
                            <Text style={styles.buttonText}>Laboratório de Circuitos</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.text}>Sala de Redes: {value2}</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={msgSalaRedes}
                        >
                            <Text style={styles.buttonText}>Sala de Redes</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
        </KeyboardAvoidingView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#12499F',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerHeader: {
        marginTop: '15%',
        marginBottom: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
        width: 400,
        height: 531,
        backgroundColor: '#FFF',
        borderRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    button: {
        backgroundColor: '#12499F',
        width: 334,
        height: 54,
        top: '100%',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 0,
        borderBottomLeftRadius:35,
        borderBottomRightRadius: 35
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'AnonymousPro_700Bold'
    },
    logo1: {
        width: 371.17,
        height: 141
    },
    text: {
        fontSize: 18,
        display: 'flex',
        fontFamily: 'AnonymousPro_700Bold',
        color: 'rgba(0, 0, 0, 0.61)',
        alignSelf: 'flex-start',
        paddingLeft: '5%',
        top: '100%',
    },
    scrollView: {
        width: '100%',
    },
});