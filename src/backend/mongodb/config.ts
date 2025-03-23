
// MongoDB Configuration
export const mongoConfig = {
  uri: import.meta.env.VITE_MONGO_URI || 'mongodb://localhost:27017',
  dbName: import.meta.env.VITE_MONGO_DB_NAME || 'adept_ai_db',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
};
