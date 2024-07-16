import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="showReturnRequest" />
      <Stack.Screen name="createReturnRequest" />
      <Stack.Screen name="addItem" />
      <Stack.Screen name="listItem" />
    </Stack>
  );
};
export default Layout;
