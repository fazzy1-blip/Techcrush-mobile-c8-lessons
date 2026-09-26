import { SpecialInput } from "@/components/ui/special-Input";
import { myStyles } from "@/styles/main";
import { View, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login (){
    return (
       <SafeAreaProvider>
        <SafeAreaView>
                 <View style = {myStyles.card}>
                      <SpecialInput 
                      label = "Enter Surname" 
                      placeholder="Surname"/>

                       <SpecialInput 
                       label = "Enter Firstname" 
                       placeholder="Firstname"/>

                        <SpecialInput 
                        label = "Enter Email" 
                        placeholder="Email"/>
                        
                         <SpecialInput 
                         label = "Enter Password" 
                         placeholder="password"/>
                
                    <Text style = {myStyles.text}> This is login</Text>
                    <Text style = {myStyles.text}> This is login</Text>
                    <Text style = {myStyles.text}> This is login</Text>
                    <Text style = {myStyles.text}> This is login</Text> 
                    </View>
      </SafeAreaView>
       </SafeAreaProvider>          
          
    )
}  