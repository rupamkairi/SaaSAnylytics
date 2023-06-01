import Env from '@ioc:Adonis/Core/Env'
import { drizzle, PostgresJsDatabase } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { users } from './schema'
// import { drizzle } from 'drizzle-orm/neon-serverless'
// import { Pool } from '@neondatabase/serverless'

const client = postgres(Env.get('NEON_DBURI'), { ssl: 'require' })
const drizzleClient: PostgresJsDatabase = drizzle(client)

// const pool = new Pool({
//   connectionString:
//     'postgresql://rupamkairi:7Pr0mFMuABHQ@ep-sparkling-butterfly-551336-pooler.ap-southeast-1.aws.neon.tech/neondb',
// })
// const db = drizzle(pool)

export default drizzleClient
