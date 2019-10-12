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

const baseUrl = '/api/v1/unip/biblioteca/';
const description = 'API Desenvolvida para aplicação web e mobile - Biblioteca';

Route.get('/', async ({response}) => response.redirect(baseUrl));

Route.get(baseUrl, ({ request }) => {
  return { mensagem: description}
});

Route.post(baseUrl + 'register', 'AuthController.register');
Route.post(baseUrl + 'authenticate', 'AuthController.authenticate');