import { StyleSheet, View } from 'react-native';
import Boton from './button';
import MyTitleCompoent from './Tittle';

export default function App() {
  return (
    <View style={styles.container}>
      <MyTitleCompoent info={"Hola presiona el boton"}/>
      <Boton titulo={"presioname" } onPress={"gracias ;D"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
