import HomeScreen from "./screens/HomeFragment";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MovieFragment from "./screens/MovieFragment";
import PersonFragment from "./screens/PersonFragment";
import SearchFragment from "./screens/SearchFragment";


const Stack = createNativeStackNavigator()


export default function AppNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options = {{headerShown : false}} component={HomeScreen}/>
                <Stack.Screen name="Movie" options={{headerShown : false}} component={MovieFragment}/>
                <Stack.Screen name="Person" options={{headerShown:false}} component={PersonFragment} />
                <Stack.Screen name="Search" options={{headerShown:false}} component={SearchFragment} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}