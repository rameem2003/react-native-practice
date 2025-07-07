import { Redirect, Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  const isAuthenticated = true; // Replace with actual login state logic
  if (!isAuthenticated) return <Redirect href="/Sign-up" />;

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" />
    </Tabs>
  );
};

export default _layout;
