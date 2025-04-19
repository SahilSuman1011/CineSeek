// filepath: app/_layout.js
import './globals.css';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
<Stack>
  <Stack.Screen
   name="(tabs)" 
   options={{headerShown: false }} />
  <Stack.Screen
   name="movie/[id]"
   options={{ headerShown: false }}
   />
</Stack>
  );
}