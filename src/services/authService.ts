
import users from '../data/users.json';
import { toast } from '@/hooks/use-toast';

// Define user types
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Initialize auth state
let authState: AuthState = {
  user: null,
  isAuthenticated: false
};

// Get current auth state
export const getAuthState = (): AuthState => {
  // Check localStorage first
  const storedUser = localStorage.getItem('currentUser');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    authState = {
      user,
      isAuthenticated: true
    };
  }
  return authState;
};

// Login function
export const login = (email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    // Find user by email
    const user = users.find(u => u.email === email);
    
    if (!user) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        variant: "destructive"
      });
      reject(new Error('Invalid email or password'));
      return;
    }
    
    // Check password
    if (user.password !== password) {
      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        variant: "destructive"
      });
      reject(new Error('Invalid email or password'));
      return;
    }
    
    // Set auth state
    authState = {
      user,
      isAuthenticated: true
    };
    
    // Store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });
    
    resolve(user);
  });
};

// Signup function
export const signup = (name: string, email: string, password: string): Promise<User> => {
  return new Promise((resolve, reject) => {
    // Check if email is already taken
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      toast({
        title: "Signup Failed",
        description: "Email is already registered",
        variant: "destructive"
      });
      reject(new Error('Email is already registered'));
      return;
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      password,
      createdAt: new Date().toISOString()
    };
    
    // Add to users array
    users.push(newUser);
    
    // Save to "file" (in a real app, this would write to the file)
    // For this demo, we'll just update localStorage
    localStorage.setItem('users', JSON.stringify(users));
    
    // Log in the new user
    authState = {
      user: newUser,
      isAuthenticated: true
    };
    
    // Store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    toast({
      title: "Signup Successful",
      description: "Your account has been created!",
    });
    
    resolve(newUser);
  });
};

// Logout function
export const logout = (): void => {
  // Clear auth state
  authState = {
    user: null,
    isAuthenticated: false
  };
  
  // Remove from localStorage
  localStorage.removeItem('currentUser');
  
  toast({
    title: "Logged Out",
    description: "You have been logged out",
  });
};

// Auth state initialization
export const initAuth = (): void => {
  // Load users from localStorage if available
  const storedUsers = localStorage.getItem('users');
  if (!storedUsers) {
    // Initialize with empty array if not found
    localStorage.setItem('users', JSON.stringify([]));
  }
  
  // Check if user is already logged in
  getAuthState();
};
