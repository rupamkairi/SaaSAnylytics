declare module '@ioc:Adonis/Drizzle' {
  import { PostgresJsDatabase } from 'drizzle-orm/postgres-js'

  const db: PostgresJsDatabase
  export default db
}
