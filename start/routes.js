'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const baseUrl = '/api/v1/unip/biblioteca/';
const description = 'API Desenvolvida para aplicação web e mobile - Biblioteca';

Route.get('/', async ({response}) => response.redirect(baseUrl));

Route.get(baseUrl, ({ request }) => {
  return { mensagem: description}
});

Route.post(`${baseUrl}register`, 'AuthController.register');
Route.post(`${baseUrl}authenticate`, 'AuthController.authenticate');
Route.get(`${baseUrl}hello`, 'TestController.hello');

// CRUD LIVROS
Route.get(`${baseUrl}livros`, 'LivroController.index');
Route.get(`${baseUrl}livro/:id`, 'LivroController.show');
Route.post(`${baseUrl}livro`, 'LivroController.store');
Route.patch(`${baseUrl}livro/:id`, 'LivroController.update');
Route.delete(`${baseUrl}livro/:id`, 'LivroController.delete');

// CRUD AUTORES
Route.get(`${baseUrl}autores`, 'AutorController.index');
Route.get(`${baseUrl}autor/:id`, 'AutorController.show');
Route.post(`${baseUrl}autor`, 'AutorController.store');
Route.patch(`${baseUrl}autor/:id`, 'AutorController.update');
Route.delete(`${baseUrl}autor/:id`, 'AutorController.delete');

// CRUD EMPRESTIMOS
Route.get(`${baseUrl}emprestimos`, 'EmprestimoController.index');
Route.get(`${baseUrl}emprestimo/:id`, 'EmprestimoController.show');
Route.post(`${baseUrl}emprestimo`, 'EmprestimoController.store');
Route.patch(`${baseUrl}emprestimo/:id`, 'EmprestimoController.update');
Route.delete(`${baseUrl}emprestimo/:id`, 'EmprestimoController.delete');

// CRUD USUARIOS
Route.get(`${baseUrl}usuarios`, 'UserController.index');
Route.get(`${baseUrl}usuario/:id`, 'UserController.show');
Route.post(`${baseUrl}usuario`, 'UserController.store');
Route.patch(`${baseUrl}usuario/:id`, 'UserController.update');
Route.delete(`${baseUrl}usuario/:id`, 'UserController.delete');

