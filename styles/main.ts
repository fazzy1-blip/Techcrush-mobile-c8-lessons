import { StyleSheet } from "react-native";

export const myStyles = StyleSheet.create ({
  input : {
    borderColor : "green",
    borderWidth : 3,
    padding : 10,
    borderRadius : 15,
    margin : 5,
    color : '#ffffff',
  },
  card : {
    padding :10,
    margin : 10,
    borderRadius : 15,
    backgroundColor : "#051d41",

  },
  text : {
   color : "#ffffff",
  },
  label : {
    color : "#ffffff",
    marginBottom : 5,
    marginLeft : 15
  },
  button : {
    color : "#001933",
    backgroundColor : "#cceeff",
  },
  splash : {
    backgroundColor : "#22743f",
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    height : "100%",
    width : "100%",
  },
  splashText : {
    color : "#fbf9f9",
    fontSize : 34,
    fontWeight : "bold",
  },
}
)