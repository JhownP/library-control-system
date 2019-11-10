'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

const baseUrl = '/api/v1/unip/biblioteca/';
const description = 'API Desenvolvida para aplicação web e mobile - Biblioteca';

Route.get('/', async ({response}) => response.redirect(baseUrl));

Route.get(baseUrl, ({ request }) => {
  return { mensagem: description}
});

// AUTHORIZATION & REGISTER
Route.post(`${baseUrl}register`, 'AuthController.register');
Route.post(`${baseUrl}authenticate`, 'AuthController.authenticate');
Route.get(`${baseUrl}hello`, 'TestController.hello');

// CRUD LIVROS
Route.get(`${baseUrl}livros`, 'LivroController.index').middleware(['auth']);
Route.get(`${baseUrl}livro/:id`, 'LivroController.show').middleware(['auth']);
Route.post(`${baseUrl}livro`, 'LivroController.store').middleware(['auth']);
Route.patch(`${baseUrl}livro/:id`, 'LivroController.update').middleware(['auth']);
Route.delete(`${baseUrl}livro/:id`, 'LivroController.delete').middleware(['auth']);

// CRUD AUTORES
Route.get(`${baseUrl}autores`, 'AutorController.index').middleware(['auth']);
Route.get(`${baseUrl}autor/:id`, 'AutorController.show').middleware(['auth']);
Route.post(`${baseUrl}autor`, 'AutorController.store').middleware(['auth']);
Route.patch(`${baseUrl}autor/:id`, 'AutorController.update').middleware(['auth']);
Route.delete(`${baseUrl}autor/:id`, 'AutorController.delete').middleware(['auth']);

// CRUD EMPRESTIMOS
Route.get(`${baseUrl}emprestimos`, 'EmprestimoController.index').middleware(['auth']);
Route.get(`${baseUrl}emprestimo/:id`, 'EmprestimoController.show').middleware(['auth']);
Route.post(`${baseUrl}emprestimo`, 'EmprestimoController.store').middleware(['auth']);
Route.patch(`${baseUrl}emprestimo/:id`, 'EmprestimoController.update').middleware(['auth']);
Route.delete(`${baseUrl}emprestimo/:id`, 'EmprestimoController.delete').middleware(['auth']);

// CRUD USUARIOS
Route.get(`${baseUrl}usuarios`, 'UserController.index').middleware(['auth']);
Route.get(`${baseUrl}usuario/:id`, 'UserController.show').middleware(['auth']);
Route.post(`${baseUrl}usuario`, 'UserController.store').middleware(['auth']);
Route.patch(`${baseUrl}usuario/:id`, 'UserController.update').middleware(['auth']);
Route.delete(`${baseUrl}usuario/:id`, 'UserController.delete').middleware(['auth']);


// CONSULTAS ADICIONAIS
Route.get(`${baseUrl}usuario-livro/:id`, 'ConsultaController.usuarioWithLivros').middleware(['auth'])
Route.get(`${baseUrl}autor-livro/:id`, 'ConsultaController.autorWithLivros').middleware(['auth'])
Route.get(`${baseUrl}emprestimo-livro`, 'ConsultaController.emprestimoWithLivros').middleware(['auth']);
Route.get(`${baseUrl}total`, 'ConsultaController.total').middleware(['auth']);