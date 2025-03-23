
// MySQL Configuration
export const mysqlConfig = {
  host: import.meta.env.VITE_MYSQL_HOST || 'localhost',
  port: Number(import.meta.env.VITE_MYSQL_PORT) || 3306,
  user: import.meta.env.VITE_MYSQL_USER || 'root',
  password: import.meta.env.VITE_MYSQL_PASSWORD || '',
  database: import.meta.env.VITE_MYSQL_DATABASE || 'adept_ai_db'
};
