import { StyleSheet, Text, View, SafeAreaView, ImageBackground, Image, Pressable, StatusBar, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants';

const RoomDetailScreen = ({ navigation, route }) => {
  const { name, bathrooms, bedrooms, beds, city, images, rating, price } = route.params.roomDetails;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      {/* ImageBackground container */}
      <View style={styles.imageBackgroundContainer}>
        <ImageBackground source={{uri: images[0]}} style={styles.imageBackgroundStyle}>
          <Pressable onPress={() => navigation.pop()}>
            <AntDesign name="arrowleft" size={24} color="#fff" style={styles.backIcon} />
          </Pressable>
        </ImageBackground>
      </View>

      {/* DetailsContainer */}
      <View style={styles.mainDetail}>
        <Text style={styles.titleText}>{name}</Text>
        {/* rating container */}
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={20} color={colors.yellow}/>
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>

      {/* characteristics container */}
      <View style={styles.characteristicsContainer}>
          <Text style={styles.characteristicsText}>{bedrooms} bedrooms</Text>
          <Text style={styles.characteristicsText}>{beds} beds</Text>
          <Text style={styles.characteristicsText}>{bathrooms} baths</Text>
      </View>

      {/* price container */}
      <View style={styles.priceContainer}>
          <Text style={styles.rateText}>${price.rate}</Text>
          <Text style={styles.perUnitText}>/night</Text>
      </View>
    </SafeAreaView>

  )
}

export default RoomDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 5
  },
  imageBackgroundContainer: {
    width: Dimensions.get('screen').width * 0.95,
    height: Dimensions.get('screen').height * 0.7,
    overflow: 'hidden',
    borderRadius: 8,
  },
  imageBackgroundStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  titleText: {
    fontSize: 20,
    fontWeight: colors.black,
    fontWeight: '600'
  },
  backIcon: {
    marginLeft: 5
  },
  mainDetail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    padding: 5
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 1.5
  },
  ratingText: {
    fontWeight: 'bold'
  },
  characteristicsContainer: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    paddingHorizontal: 15,
    marginVertical: 5
  },
  characteristicsText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colors.darkBlue
  },
  priceContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'baseline',
    padding: 5
  },
  rateText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black
  },
  perUnitText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black
  },
  imageStyle: {
    width: '50%',
    height: Dimensions.get('screen').height * 0.4,
    resizeMode: 'contain'
  }
})