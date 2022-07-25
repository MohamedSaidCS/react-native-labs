import {ActivityIndicator, View} from "react-native";

const Loader = () => {
  return (

    <View style={{flex: 4, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green'}}>
      <ActivityIndicator size={"large"}  style={{backgroundColor: 'green'}}/>
    </View>
  )
}
export default Loader;
