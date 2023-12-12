import { StatusBar } from "react-native";
import {ThemeProvider} from 'styled-components';
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import theme from "@theme/index";
import { Routes } from "@routes/index";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {!fontsLoaded ? <></> : (
       <SafeAreaView style={{flex: 1}}>
          <Routes />
       </SafeAreaView>
      ) }
    </ThemeProvider>
  );
}