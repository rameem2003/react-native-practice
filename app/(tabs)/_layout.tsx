import { images } from "@/constant";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const _layout = () => {
  // const isAuthenticated = true; // Replace with actual login state logic
  // if (!isAuthenticated) return <Redirect href="/Sign-up" />;

  const TabIcon = ({ title, icon, focused }: any) => (
    <View className="tab-icon flex-1 flex-col items-center justify-center">
      <Image
        source={icon}
        className="size-7"
        resizeMode="contain"
        tintColor={focused ? "#FE8C00" : "#5D5F6D"}
      />
      <Text
        className={`text-sm font-quicksand-semibold text-center  ${focused ? "text-primary" : "text-gray-200"}`}
      >
        {title}
      </Text>
    </View>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal: 20,
          height: 80,
          position: "absolute",
          bottom: 40,
          backgroundColor: "white",
          shadowColor: "#1a1a1a",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Home" icon={images.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Search" icon={images.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Profile" icon={images.person} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ focused }) => (
            <TabIcon title="Cart" icon={images.bag} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
