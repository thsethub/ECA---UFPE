import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform, Alert } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SingIn() {
    const navigation = useNavigation();

    const onPressButton = () => {
        Alert.alert(
          'Solicitação',
          'A solicitação foi feita com sucesso!',
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: false }
        );
      };

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <View style={styles.containerHeader}>
                <Animatable.View animation="fadeInDown" delay={500}>
                    <Text style={styles.buttonText}>Solicitar Acesso</Text>
                </Animatable.View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <Text style={styles.title}>Nome completo</Text>
                    <TextInput
                        placeholder="Digite seu nome..."
                        style={styles.input}
                    />

                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email..."
                        style={styles.input}
                    />
                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha..."
                        style={styles.input}
                    />
                    <Text style={styles.title}>Comfirmar Senha</Text>
                    <TextInput
                        placeholder="Comfirme sua senha..."
                        style={styles.input}
                    />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={onPressButton}
                    >
                        <Text style={styles.buttonText}>Solicitar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSing}
                        onPress={() => navigation.navigate('SingIn')}
                    >
                        <Text style={styles.textSing}>Já possui acesso? Acesse</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </ScrollView>
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
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    containerHeader: {
        marginTop: '10%',
        marginBottom: '10%',
        display: 'flex',
        alignItems: 'center'
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    containerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 0,
        paddingStart: '10%',
        paddingEnd: '5%',
        paddingVertical: '20%',
    },
    title: {
        fontSize: 18,
        display: 'flex',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.61)',
        alignSelf: 'flex-start',
        paddingLeft: '5%'
    },
    input: {
        width: 334,
        height: 64,
        backgroundColor: '#FFF',
        borderRadius: 4,
        paddingHorizontal: 15,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 45,
        shadowColor: '#000',
        shadowOpacity: 0.50,
        shadowRadius: 4,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        elevation: 4, // Elevação para sombra no Android
    },
    button: {
        backgroundColor: '#12499F',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 100,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 35,
        borderBottomRightRadius: 35
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center'
    },
    registerText: {
        color: '#a1a1a1'
    },
    logo1: {
        width: 371.17,
        height: 141
    },
    buttonSing: {
        position: 'absolute',
        bottom: 20,
        width: '100%',
        alignItems: 'center',
    },
    textSing: {
        color: '#12499F',
        fontWeight: 'bold',
    }
});