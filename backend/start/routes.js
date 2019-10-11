'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Redireciona a URL base / para a URL /api/v1/unip/biblioteca/
Route.get('/', async ({response}) => response.redirect('/api/v1/unip/biblioteca/'));

Route.get('/api/v1/unip/biblioteca/', () => {
  return { greeting: 'Hello world in JSON' }
})
