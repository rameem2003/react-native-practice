import { images } from "@/constant";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl text-blue-600 font-bold text-center">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Image source={images.pizzaOne} />
    </View>
  );
}
