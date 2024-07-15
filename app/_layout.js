import { Stack } from 'expo-router';
import ShowReturnRequests from '../components/showReturnRequests/showReturnRequest';

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
    </Stack>
  );
};
export default Layout;
