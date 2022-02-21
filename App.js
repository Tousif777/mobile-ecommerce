import React from "react";
import Layout from "./pages/Layout";
import { UserProvider } from "./state/user";

export default function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}
