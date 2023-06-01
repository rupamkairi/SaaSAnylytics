import { pgTable, serial, text } from 'drizzle-orm/pg-core'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
// import { drizzle } from 'drizzle-orm/neon-serverless'
// import { Pool } from '@neondatabase/serverless'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
})

const client = postgres(
  'postgresql://rupamkairi:7Pr0mFMuABHQ@ep-sparkling-butterfly-551336.ap-southeast-1.aws.neon.tech/neondb?options=endpoint%3Dep-sparkling-butterfly-551336',
  { ssl: 'require' }
)
const db = drizzle(client)

// const pool = new Pool({
//   connectionString:
//     'postgresql://rupamkairi:7Pr0mFMuABHQ@ep-sparkling-butterfly-551336-pooler.ap-southeast-1.aws.neon.tech/neondb',
// })
// const db = drizzle(pool)

export async function allUsers() {
  // const result = await db.select().from(users)
  const result = await db.select().from(users)
  return result
}
