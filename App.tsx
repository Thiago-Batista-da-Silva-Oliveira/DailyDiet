import { StatusBar, Text } from "react-native";
import {ThemeProvider} from 'styled-components';
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import theme from "@theme/index";

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
        <>
         <Text>Hello</Text>
        </>
      ) }
    </ThemeProvider>
  );
}