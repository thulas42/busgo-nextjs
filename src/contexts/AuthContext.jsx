"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { 
  registerUser, 
  signInUser, 
  signOutUser, 
  resetPassword,
  getUserProfile,
  updateUserProfile
} from '../services/userService';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        try {
          const profile = await getUserProfile(user.uid);
          setUserProfile(profile);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setUserProfile(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Register a new user
  const register = async (email, password, name) => {
    return registerUser(email, password, name);
  };

  // Sign in
  const login = async (email, password) => {
    return signInUser(email, password);
  };

  // Sign out
  const logout = async () => {
    return signOutUser();
  };

  // Reset password
  const forgotPassword = async (email) => {
    return resetPassword(email);
  };

  // Update profile
  const updateProfile = async (userId, profileData) => {
    await updateUserProfile(userId, profileData);
    setUserProfile({
      ...userProfile,
      ...profileData
    });
  };

  const value = {
    currentUser,
    userProfile,
    register,
    login,
    logout,
    forgotPassword,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
} 