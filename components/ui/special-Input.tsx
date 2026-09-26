import { myStyles } from "@/styles/main"
import { Text, TextInput, View } from "react-native"


type SpecialInputProps = {
    placeholder?: string;
    placeholderTextColor? : string;
    label? : string;
}

export const SpecialInput = ({
     placeholder = "type here", 
     placeholderTextColor = "yellow",
     label}:
     SpecialInputProps) => {
    return (
     <View style = {{marginBottom : 10}}>
        <Text style = {myStyles.label}> {label} 
        </Text>

         <TextInput    
        placeholderTextColor={ placeholderTextColor} 
        style = {myStyles.input} 
        placeholder = {placeholder}/>
     </View>
    );
};