import { pgTable, serial, text } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name'),
})
export const Users = typeof users

const schema = { users }
export default schema
