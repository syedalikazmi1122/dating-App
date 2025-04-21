"use client"

import { useState, useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { AdminStackNavigator } from "./admin-stack"
import { MainStackNavigator } from "./navigation"
import { AuthStackNavigator } from "./auth-stack"
import useAuthStore from "./zustand/authstore";
const Stack = createStackNavigator()

export default function Navigation() {
const isLoggedIn = useAuthStore(state => state.isAuthenticated);
console.log(isLoggedIn)
  // const [isLogged, setIsLoggedIn] = useState()
  const [userRole, setUserRole] = useState("user") 

  useEffect(() => {
    // Check login status and user role from async storage or API
    // For example:
    // checkLoginStatus().then(status => setIsLoggedIn(status));
    // getUserRole().then(role => setUserRole(role));
  }, [])

  return (!isLoggedIn ? <AuthStackNavigator /> : userRole === "admin" ? <AdminStackNavigator /> : <MainStackNavigator />)
}

