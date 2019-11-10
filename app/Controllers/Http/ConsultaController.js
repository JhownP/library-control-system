'use strict'

const User = use('App/Models/User');
const Autor = use('App/Models/Autor');
const Emprestimo = use('App/Models/Emprestimo');
const Livro = use('App/Models/Livro');

class ConsultaController {
    async usuarioWithLivros({ params, response }) {
        const id = params.id

        const usuario = await User
            .query()
            .with('emprestimo')
            .where('id', id)
            .fetch()


        response.send({
            'code': 200,
            'status': 'success',
            'data': usuario
        })
    }

    async autorWithLivros({ params, response }) {
        const id = params.id

        const autor = await Autor
            .query()
            .with('livro')
            .where('id', id)
            .fetch()

        response.send({
            'code': 200,
            'status': 'success',
            'data': autor
        })
    }

    async emprestimoWithLivros({ response }) {
        const emprestimo = await Emprestimo
            .query()
            .with('livro')
            .with('user')
            .fetch()

        response.send({
            'code': 200,
            'status': 'success',
            'data': emprestimo
        })
    }

    async total({ response }) {
        const userCount = await User.getCount();
        const livroCount = await Livro.getCount();
        const autorCount = await Autor.getCount();

        response.send({
            'code': 200,
            'status': 'success',
            'data': {
                'count_usuario': userCount,
                'count_livro': livroCount,
                'count_autor': autorCount,
            }
        })
    }
}

module.exports = ConsultaController
