import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signin = () => {
  return (
    <SafeAreaView className=" h-full w-full rounded-[30px] bg-white px-[30px] relative top-[-90px] pt-[84px]">
      <TextInput
        className=" w-full border-b-[1px] border-[#878787] mb-10 font-quicksand-semibold text-[18px]"
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        className=" w-full border-b-[1px] border-[#878787] mb-10 font-quicksand-semibold text-[18px]"
        placeholder="Password"
        secureTextEntry={true}
      />

      <TouchableOpacity
        onPress={() => router.replace("/")}
        className=" bg-primary p-[14px] rounded-full text-center"
      >
        <Text className=" text-center text-white text-base font-quicksand-bold">
          Login
        </Text>
      </TouchableOpacity>

      <View className=" mt-10 flex-row justify-center items-center">
        <Text className=" text-[#878787] text-balance font-quicksand-medium">
          Don’t have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/Sign-up")}>
          <Text className=" text-primary font-quicksand-bold text-base ml-1">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signin;
