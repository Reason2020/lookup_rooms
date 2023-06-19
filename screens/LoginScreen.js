import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Dimensions, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../constants';

const ValidationSchema = Yup.object().shape({
    username: Yup.string()
        .min(8, 'Must be more than 8 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address.')
        .required('Required'),
    password: Yup.string()
        .min(8, 'Must be more than 8 characters')
        .required('Required')
});

const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text style={{
            fontSize: 30,
            fontWeight: '900',
            marginBottom: 20
        }}>Welcome to Rooms!</Text>
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: ''
            }}
            validationSchema={ValidationSchema}
            onSubmit={values => navigation.navigate('Home', {
                itemId: 1,
                username: values.username
            })}
            style={styles.formContainer}
        >
            {({
                values,
                handleSubmit,
                touched,
                errors,
                isValid,
                handleChange
            }) => (
                // form container
                <View style={styles.formElementsContainer}>
                    <TextInput
                        value={values.username}
                        style={styles.inputField}
                        onChangeText={handleChange('username')}
                        placeholder='Username'
                        placeholderTextColor='#788a94'
                    />
                    {/* if error */}
                    {touched.username && errors.username && (
                        <Text style={styles.errorText}>{errors.username}</Text>
                    )}
                    <TextInput
                        value={values.email}
                        style={styles.inputField}
                        onChangeText={handleChange('email')}
                        placeholder='Email address'
                        placeholderTextColor='#788a94'
                    />
                    {touched.email && errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    )}
                    <TextInput
                        value={values.password}
                        style={styles.inputField}
                        onChangeText={handleChange('password')}
                        placeholder='Password'
                        placeholderTextColor='#788a94'
                    />
                    {touched.password && errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    )}

                    {/* login Button */}
                    <Pressable onPress={() => isValid && handleSubmit()} style={styles.loginBtn}>
                        <Text style={{color: '#fff', fontWeight: '800'}}>Log In</Text>
                    </Pressable>
                    
                </View>
            )}
        </Formik>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('screen').height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formContainer: {
        flex: 1,
    },
    inputField: {
        backgroundColor: '#344755',
        color: '#fff',
        width: Dimensions.get('screen').width * 0.9,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5
    },
    formElementsContainer: {
        gap: 10
    },
    loginBtn: {
        backgroundColor: colors.darkBlue,
        width: Dimensions.get('screen').width * 0.9,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center'
    },
    errorText: {
        fontSize: 11,
        fontWeight: '900',
        color: 'red'
    }
})