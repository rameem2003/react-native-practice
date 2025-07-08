import { images } from "@/constant";
import { Slot } from "expo-router";
import {
  Dimensions,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function _Layout() {
  // const isAuthenticated = true; // Replace with actual login state logic
  // if (!isAuthenticated) return <Redirect href="/" />;
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          className=" bg-white h-full "
          keyboardShouldPersistTaps="handled"
        >
          <View
            className="w-full relative"
            style={{ height: Dimensions.get("screen").height / 2.25 }}
          >
            <ImageBackground
              source={images.loginGraphic}
              className="size-full"
              resizeMode="stretch"
            />
            <Image
              source={images.logo}
              className="self-center size-48 absolute -bottom-1 z-10"
            />
          </View>
          <Slot />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
