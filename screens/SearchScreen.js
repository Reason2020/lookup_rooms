import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants';

const SearchScreen = ({ navigation, route }) => {
    const [ cityName, setCityName ] = useState('');
    const { setCity } = route.params;
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar />
        <View style={styles.innerWrapper}>
            <Pressable onPress={() => navigation.pop()}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <TextInput 
                onChangeText={setCityName}
                value={cityName}
                placeholder='Search for city'
                style={styles.inputField}
            />
            <Pressable 
                style={styles.btn}
                onPress={() => {
                    setCity(cityName);
                    navigation.navigate('Home')
                }}
            >
                <Text style={styles.btnText}>Search</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerWrapper: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    inputField: {
        flexGrow: 2,
        borderWidth: 0.4,
        borderColor: colors.black,
        borderRadius: 15,
        padding: 5
    },
    btn: {
        padding: 5,
        backgroundColor: colors.darkBlue,
        borderRadius: 5
    },
    btnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.white
    }
})