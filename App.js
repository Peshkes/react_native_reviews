import {StyleSheet, View} from 'react-native';
import Home from "./screens/home";

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
