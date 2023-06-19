import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, ScrollView, Dimensions, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { fetchRoomsByLocation } from '../api/apiCall';
import { colors } from '../constants';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import RoomCard from '../components/RoomCard';

const { height, width } = Dimensions.get('screen');

const HomeScreen = ({ navigation }) => {
    const [ rooms, setRooms ] = useState([]);
    
    useEffect(() => {
        getRoomDetails();
    }, []);

    //get data from the api call
    const getRoomDetails = async () => {
        const data = await fetchRoomsByLocation('Paris');
        // console.log(data.results);
        if (data && data.results) setRooms(data.results);
    }

    console.log('Height: ' + height);
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false} contentContainerStyle={{alignItems: 'center'}}>
            {/* header */}
            <View style={styles.headerContainer}>
                <Image 
                    source={require('../assets/ROOMS.png')}
                    style={styles.logoStyle}
                />
                {/* Add search later */}
                <Pressable onPress={() => alert('Add Search Functionality')}>
                    <FontAwesome name="search" size={24} color="black" />
                </Pressable>
            </View>

            <View style={styles.introContainer}>
                {/* we can change name based on login later */}
                <Text style={styles.textStyle}>Hi there, Reason!</Text>
                <MaterialCommunityIcons name="hand-wave" size={24} color={colors.yellow} />
            </View>

            {/* may change the location */}
            <Text style={styles.textStyle}>Available Rooms in Paris!</Text>

            {/* Room Cards Listed */}
            <FlatList 
                data={rooms}
                renderItem={({item}) => (<Pressable onPress={() => navigation.navigate('RoomDetail')}>
                    <RoomCard roomDetails={item} screenHeight={height} screenWidth={width}/>
                </Pressable>)}
                keyExtractor={(item) => item.id}
                
            />
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 5
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    logoStyle: {
        height: height * 0.05,
        width: width * 0.3,
        resizeMode: 'contain'
    },
    textStyle: {
        fontSize: 24,
        fontWeight: '800'
    },
    introContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2
    }
})