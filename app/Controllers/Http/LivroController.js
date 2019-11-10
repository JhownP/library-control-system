'use strict'

const Livro = use('App/Models/Livro');

class LivroController {
    async index({ request, response }) {
        const offset = request.input('offset')
        const limit = request.input('limit')

        const livros = await Livro
            .query()
            .with('autor')
            .paginate(offset, limit)

        response.send({
            'code': 200,
            'status': 'success',
            'data': livros
        })
    }

    async show({ params, response }) {
        const livro = await Livro.findOrFail(params.id)

        response.send({
            'code': 200,
            'status': 'success',
            'data': livro
        })
    }

    async store({ request, response }) {
        const all = request.all();
        const livro = new Livro();
        livro.fill(all);
        await livro.save();

        response.send({
            'code': 201,
            'status': 'success',
            'data': livro
        })
    }

    async update({ params, request, response }) {
        const id = params.id;
        const all = request.all();
        const livro = await Livro.query()
            .where('id', id).update(all)

        response.send({
            'code': 200,
            'status': 'success',
            'data': livro
        });
    }

    async delete({ params, response }) {
        const livro = await Livro.findOrFail(params.id);
        await livro.autor().detach();
        await livro.emprestimo().detach();
        await livro.delete();

        response.send({
            'code': 200,
            'status': 'success',
            'data': livro
        });
    }
}

module.exports = LivroController
