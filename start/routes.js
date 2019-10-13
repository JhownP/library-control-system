'use strict'
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