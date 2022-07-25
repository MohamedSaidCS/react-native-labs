import {Image, TouchableOpacity} from "react-native";
import { Text, View, StyleSheet, Pressable } from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Button from "./Button";
import CARS_DATA from "../CARS_DATA";
const CarCard = ({car}) => {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  return (
 
    <View style={{
      margin: 10,
      padding: 10,
      borderRadius: 20,
      borderWidth: 2,
    }}>
      <View style={{
        flexDirection: 'row',
        zIndex: 2,
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 10,
        left: 10,
        padding: 10,
        alignItems: 'flex-start',
      }}>

      <Image source={{uri: car.brand}} style={{width: 40, height: 40}} />
        <View style={{
          backgroundColor: 'green',
          paddingVertical: 3,
          paddingHorizontal: 10,
          borderRadius: 5,
        }}>
          <Text style={{color: 'white',}}>{car.model}</Text>
        </View>
      </View>
      <Image source={{uri: car.image}} style={{width: '100%', height: 200, marginBottom: 5,}} />
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{car.name}</Text>
      <Button onPress={() => navigation.navigate("CarDetails", {car})} text={'View Details'}  />
      <Button 
      color="#007AFF"
      style={styles.button} backgroundColor={'red'} onPress={()=>{CARS_DATA.pop(car)}}  text={'Delete'}/>
      
    </View>
  );
};
export default CarCard;
