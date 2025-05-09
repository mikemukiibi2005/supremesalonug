import { defineConfig } from 'drizzle-kit';

if (!process.env.DATABASE_URL) process.env.DATABASE_URL="";

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dbCredentials: { url: process.env.DATABASE_URL },
	verbose: true,
	strict: true,
	dialect: 'postgresql'
});
