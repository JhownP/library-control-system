'use strict'

const Emprestimo = use('App/Models/Emprestimo');

class EmprestimoController {
    async index({ request, response }) {
        const offset = request.input('offset')
        const limit = request.input('limit')

        const emprestimo = await Emprestimo
            .query()
            .with('livro')
            .with('user')
            .paginate(offset, limit)

        response.send({
            'code': 200,
            'status': 'success',
            'data': emprestimo
        })
    }

    async show({ params, response }) {
        const emprestimo = await Emprestimo.findOrFail(params.id)

        response.send({
            'code': 200,
            'status': 'success',
            'data': emprestimo
        })
    }

    async store({ request, response }) {
        const all = request.all();
        const emprestimo = new Emprestimo();
        emprestimo.fill(all);
        await emprestimo.save();

        response.send({
            'code': 201,
            'status': 'success',
            'data': emprestimo
        })
    }

    async update({ params, request, response }) {
        const id = params.id;
        const all = request.all();
        const emprestimo = await Emprestimo.query()
            .where('id', id).update(all)

        response.send({
            'code': 200,
            'status': 'success',
            'data': emprestimo
        });
    }

    async delete({ params, response }) {
        const emprestimo = await Emprestimo.findOrFail(params.id);
        await emprestimo.livro().detach();
        await emprestimo.user().detach();
        await emprestimo.delete();

        response.send({
            'code': 200,
            'status': 'success',
            'data': emprestimo
        });
    }
}

module.exports = EmprestimoController
