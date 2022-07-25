import {Text, TouchableOpacity, View} from "react-native";

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{paddingVertical: 20, justifyContent: 'center', alignItems: 'center',margin:10 ,backgroundColor: 'green'}}>
        <Text style={{color: 'white'}}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default Button;
