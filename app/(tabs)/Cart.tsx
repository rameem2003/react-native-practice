import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl text-primary font-quicksand-semibold text-center">
        Cart Page
      </Text>
    </SafeAreaView>
  );
};

export default Cart;
