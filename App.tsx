import { Groups } from './src/screens/Groups';
import { ThemeProvider } from 'styled-components';
import themes from './src/themes';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
  useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={themes}>
      <Groups />
    </ThemeProvider>
  );
}
