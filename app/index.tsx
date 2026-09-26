

import { Text, View } from "react-native";
import { myStyles } from "@/styles/main";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function HomeScreen() {
  const navigator = useRouter();

  useEffect (() => {
    const timer = setTimeout (() => {
      navigator.replace ("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style = { myStyles.splash}>
      <Text style = { myStyles.splashText}> Techcrush Mobile </Text>
      </View>


















  );
}