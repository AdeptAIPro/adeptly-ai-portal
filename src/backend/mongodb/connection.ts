
import { MongoClient, Db } from 'mongodb';
import { mongoConfig } from './config';

// Connection variable
let client: MongoClient | null = null;
let db: Db | null = null;

// Connect to MongoDB
export const connectToMongoDB = async (): Promise<Db> => {
  if (db) return db;
  
  try {
    client = new MongoClient(mongoConfig.uri);
    await client.connect();
    console.log('Connected to MongoDB successfully');
    
    db = client.db(mongoConfig.dbName);
    return db;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    throw error;
  }
};

// Close the MongoDB connection
export const closeConnection = async (): Promise<void> => {
  if (client) {
    await client.close();
    client = null;
    db = null;
    console.log('MongoDB connection closed');
  }
};

// Test the connection
export const testConnection = async (): Promise<boolean> => {
  try {
    const database = await connectToMongoDB();
    // Try to access a collection to verify connection
    await database.collection('users').findOne({});
    return true;
  } catch (error) {
    console.error('MongoDB connection test failed:', error);
    return false;
  }
};

// Export functions
export default { connectToMongoDB, closeConnection, testConnection };
