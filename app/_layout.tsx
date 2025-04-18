// filepath: app/_layout.js
import './globals.css';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
<Stack>
  <Stack.Screen name="index" options={{ title: "Overview" }} />
</Stack>
  );
}