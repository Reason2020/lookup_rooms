import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants'
import { AntDesign } from '@expo/vector-icons';

const RoomCard = ({ roomDetails, screenHeight, screenWidth }) => {
  return (
    // card container
    <View style={[styles.cardContainer, {width: screenWidth * 0.85, height: screenHeight * 0.6}]}>
        {/* bg Image container */}
        <View style={{width: screenWidth * 0.85, height: screenHeight * 0.45, borderRadius: 15, overflow: 'hidden'}}>
            <ImageBackground source={{uri: roomDetails.images[0]}} resizeMode='cover' style={[styles.image]}>
                {/* properties container */}
                <View style={styles.propertiesContainer}>
                    {/* property field */}
                    <View style={styles.propertyField}>
                        <Text style={styles.textStyle}>{roomDetails.bedrooms} bedrooms</Text>
                    </View>
                    <View style={styles.propertyField}>
                        <Text style={styles.textStyle}>{roomDetails.beds} beds</Text>
                    </View>
                    <View style={styles.propertyField}>
                        <Text style={styles.textStyle}>{roomDetails.bathrooms} baths</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
        {/* Room Info */}
        <View style={{padding: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.titleText} numberOfLines={1}>{roomDetails.name}</Text>    
            </View>
            <Text style={styles.priceText}>${roomDetails.price.rate}/night</Text>
            {/* star rating container */}
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 3}}>
                <AntDesign name="star" size={20} color={colors.yellow}/>
                <Text style={styles.textStyle}>{roomDetails.rating}</Text>
            </View>
        </View>
    </View>
  )
}

export default RoomCard

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        borderWidth: 0.2,
        borderColor: colors.black,
        borderRadius: 5,
    },
    image: {
        flex: 1,
        borderRadius: 15,
        justifyContent: 'flex-end',
        paddingBottom: 10
    },
    propertiesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    propertyField: {
        backgroundColor: colors.white,
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 15
    },
    textStyle: {
        color: colors.black
    },
    titleText: {
        color: colors.black,
        fontSize: 25,
        fontWeight: '900'
    },
    priceText: {
        color: colors.black,
        fontSize: 24,
        fontWeight: '900'
    }
})