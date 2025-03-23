
import pool from './connection';
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
    const hashedPassword = await hashPassword(password);
    const userId = uuidv4();
    const createdAt = new Date().toISOString();
    
    const [result] = await pool.execute(
      'INSERT INTO users (id, name, email, password, created_at) VALUES (?, ?, ?, ?, ?)',
      [userId, name, email, hashedPassword, createdAt]
    );
    
    return {
      id: userId,
      name,
      email,
      password: hashedPassword, // In a real app, don't return the password
      createdAt
    };
  } catch (error) {
    console.error('Error creating user in MySQL:', error);
    throw new Error('Failed to create user');
  }
};

// Get user by email
export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    
    const users = rows as User[];
    return users.length > 0 ? users[0] : null;
  } catch (error) {
    console.error('Error getting user by email from MySQL:', error);
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
    console.error('Error validating credentials in MySQL:', error);
    throw new Error('Failed to validate credentials');
  }
};
