
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState, getAuthState, login, signup, logout, initAuth } from '@/services/authService';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<User>;
  signup: (name: string, email: string, password: string) => Promise<User>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({ user: null, isAuthenticated: false });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize auth state
    initAuth();
    const currentState = getAuthState();
    setAuthState(currentState);
    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string) => {
    try {
      const user = await login(email, password);
      setAuthState({ user, isAuthenticated: true });
      navigate('/dashboard');
      return user;
    } catch (error) {
      throw error;
    }
  };

  const handleSignup = async (name: string, email: string, password: string) => {
    try {
      const user = await signup(name, email, password);
      setAuthState({ user, isAuthenticated: true });
      navigate('/dashboard');
      return user;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = () => {
    logout();
    setAuthState({ user: null, isAuthenticated: false });
    navigate('/');
  };

  const value = {
    user: authState.user,
    isAuthenticated: authState.isAuthenticated,
    login: handleLogin,
    signup: handleSignup,
    logout: handleLogout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
