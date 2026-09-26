
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor : 'login',
}

export default function RootLayout() {
  return(<>
  <Stack> 
  <Stack.Screen name = "index" options = {{ headerShown : false }} />
  <Stack.Screen name = "(tabs)" options = {{ headerShown : false }}/>
  <Stack.Screen name = "login" options = {{ headerShown : true}}/>
  <Stack.Screen name = "modal" options = {{ presentation : 'modal', title : 'Modal' }}/>
  </Stack>
  <StatusBar style = "auto"/>
  </>
);
} 