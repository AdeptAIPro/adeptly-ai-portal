
import { connectToMongoDB } from './connection';
import { User } from '@/services/authService';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcryptjs';

// Helper for hashing passwords
const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

// Create a new user
export const createUser = async (name: string, email: string, password: string): Promise<User> => {
  try {
    const db = await connectToMongoDB();
    const usersCollection = db.collection('users');
    
    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists with this email');
    }
    
    const hashedPassword = await hashPassword(password);
    const userId = uuidv4();
    const createdAt = new Date().toISOString();
    
    const newUser: User = {
      id: userId,
      name,
      email,
      password: hashedPassword,
      createdAt
    };
    
    await usersCollection.insertOne(newUser);
    
    return newUser;
  } catch (error) {
    console.error('Error creating user in MongoDB:', error);
    throw new Error('Failed to create user');
  }
};

// Get user by email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const db = await connectToMongoDB();
    const usersCollection = db.collection('users');
    
    const user = await usersCollection.findOne({ email }) as User | null;
    return user;
  } catch (error) {
    console.error('Error getting user by email from MongoDB:', error);
    throw new Error('Failed to get user');
  }
};

// Validate user credentials
export const validateCredentials = async (email: string, password: string): Promise<User | null> => {
  try {
    const user = await getUserByEmail(email);
    
    if (!user) {
      return null;
    }
    
    const isValid = await bcrypt.compare(password, user.password);
    
    return isValid ? user : null;
  } catch (error) {
    console.error('Error validating credentials in MongoDB:', error);
    throw new Error('Failed to validate credentials');
  }
};
