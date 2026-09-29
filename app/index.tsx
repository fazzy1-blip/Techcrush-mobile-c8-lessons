

import { Text, View } from "react-native";
import { myStyles } from "@/styles/main";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";

export default function HomeScreen() {
  const router = useRouter();

  useEffect (() => {
    const timer = setTimeout (() => {
      router.replace ("/login");
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);





  return (
    <View style = { myStyles.splash}>
      <Text style = { myStyles.splashText}> Techcrush Mobile </Text>
      </View>






  );
}