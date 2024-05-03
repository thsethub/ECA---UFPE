import { React } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';

import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function SingIn() {
    const navigation = useNavigation();
    

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
            <View style={styles.containerHeader}>
                <Animatable.View animation="fadeInDown" delay={500}>
                    <Image style={styles.logo1} source={require('../imgs/Logo_Eca_Vetor.png')}></Image>
                </Animatable.View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
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

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Ambientes')}
                    >
                        <Text style={styles.buttonText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonSing}
                        onPress={() => navigation.navigate('SingUp')}
                    >
                        <Text style={styles.textSing}>Não Possui acesso? Solicite</Text>
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
        marginTop: '15%',
        marginBottom: '15%',
        display: 'flex',
        alignItems: 'center',
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
        fontFamily: 'AnonymousPro_700Bold',
        top: 15,
        right: 10,
        display: 'flex',
        color: 'rgba(0, 0, 0, 0.61)',
        alignSelf: 'flex-start',
        paddingLeft: '5%'
    },
    input: {
        width: 334,
        height: 64,
        right: 10,
        top: 15,
        fontFamily: 'AnonymousPro_400Regular',
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
        elevation: 4,
    },
    button: {
        backgroundColor: '#12499F',
        width: '100%',
        right: 10,
        top: 15,
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
        fontFamily: 'AnonymousPro_700Bold',
        paddingVertical: 3
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
        fontFamily: 'AnonymousPro_700Bold',
    }
});