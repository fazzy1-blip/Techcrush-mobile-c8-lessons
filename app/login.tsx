import { SpecialInput } from "@/components/ui/special-Input";
import { myStyles } from "@/styles/main";
import { Button } from "expo-router/build/react-navigation";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from 'expo-router'; 

export default function Login (){
    const router = useRouter ();

    const handleLogin = () => {
        router.push("/(tabs)/profile");
    }

    return (
       <SafeAreaProvider>
        <SafeAreaView style = { myStyles.container}>
                 <View style = {myStyles.card}>

                        <SpecialInput 
                        label = "Enter Email" 
                        placeholder="Email"/>
                        
                         <SpecialInput 
                         label = "Enter Password" 
                         placeholder="password"/>
                
                     <Button onPressIn={handleLogin} style = { myStyles.button}>Login</Button>

        </View>
      </SafeAreaView>
       </SafeAreaProvider>          
          
    )
}  