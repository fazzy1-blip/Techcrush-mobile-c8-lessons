import { SpecialInput } from "@/components/ui/special-Input";
import { myStyles } from "@/styles/main";
import { Text, View } from "react-native";

export default function Register (){
    return (
       
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

                 <Text style = {myStyles.text}> This is register </Text>
                 <Text style = {myStyles.text}> This is register </Text>
                 <Text style = {myStyles.text}> This is register </Text>
                 <Text style = {myStyles.text}> This is register </Text>
                    </View>
                
          
    )
}  