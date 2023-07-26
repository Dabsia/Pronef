import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font'

import Home from './screens/Home/Home';
import Details from './screens/Details/Details';

const App = () => {

  // const [loaded] = useFonts({
  //   InterBold: require('./assets/fonts/Inter-Bold.ttf'),
  //   InterSemiBold: require('./assets/fonts/Inter-SemiBold.tff'),
  //   InterMedium: require('./assets/fonts/Inter-Medium.tff'),
  //   InterRegular: require('./assets/fonts/Inter-Regular.tff'),
  //   InterLight: require('./assets/fonts/Inter-Bold.tff')
  // })


  const Stack = createNativeStackNavigator()

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent'
    }
  }



  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}
        initialRouteName='Home'
      >
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App