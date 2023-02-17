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

import Route from '@ioc:Adonis/Core/Route'
import UserModel from 'App/Models/UserModel'
import Hash from '@ioc:Adonis/Core/Hash'

Route.group(() => {
  
  Route.get('/', async () => {
    return { hello: 'world' }
  })

  Route.post('/login', async ({ auth, request, response }) => {
    const email = request.input('email')
    const password = request.input('password')  

    console.log(email);
    console.log(password);
    
    // Lookup user manually
    const user = await UserModel
    .query()
    .where('Login', email)
    .firstOrFail()

    if (!(await Hash.verify(user.password, password))) {
      return response.unauthorized('Invalid credentials')
    }
  
    // Generate token
    const token = await auth.use('api').generate(user)

    response.type('application/json')
    response.header('Access-Control-Allow-Origin', false)
    response.location('http://localhost:4200')
   

    return token;
  
  })
  

  Route.resource('/register', 'UsersController').apiOnly()

  Route.group(() => {
    Route.post('/documentos', 'DocumentosController')
  }).middleware('auth')
  

}).prefix('/api')
