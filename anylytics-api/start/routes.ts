/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import { HttpContext } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'
import { allUsers } from '../providers/Drizzle/index'

Route.get('/', async () => {
  return { hello: 'world' }
})

// psql 'postgresql://rupamkairi:7Pr0mFMuABHQ@ep-sparkling-butterfly-551336.ap-southeast-1.aws.neon.tech/neondb'
// psql 'postgresql://rupamkairi:7Pr0mFMuABHQ@ep-sparkling-butterfly-551336-pooler.ap-southeast-1.aws.neon.tech/neondb'

Route.get('/db', async ({ response }: HttpContext) => {
  const users = await allUsers()
  return response.json(users)
})

Route.get('/soketi', async ({ response }: HttpContext) => {
  return { client: 'soketi' }
})

Route.get('/pusher', async ({ response }: HttpContext) => {
  return { client: 'pusher' }
})

Route.get('/ably', async ({ response }: HttpContext) => {
  return { client: 'ably' }
})

Route.get('/pubnub', async ({ response }: HttpContext) => {
  return { client: 'pubnub' }
})
