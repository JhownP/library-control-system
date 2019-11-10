'use strict'

const Autor = use('App/Models/Autor');

class AutorController {

    async index({ request, response }) {
        const offset = request.input('offset')
        const limit = request.input('limit')

        const autor = await Autor
            .query()
            .with('livro')
            .paginate(offset, limit)

        response.send({
            'code': 200,
            'status': 'success',
            'data': autor
        })
    }

    async show({ params, response }) {
        const autor = await Autor.findOrFail(params.id)

        response.send({
            'code': 200,
            'status': 'success',
            'data': autor
        })
    }

    async store({ request, response }) {
        const all = request.all();
        const autor = new Autor();
        autor.fill(all);
        await autor.save();

        response.send({
            'code': 201,
            'status': 'success',
            'data': autor
        })
    }

    async update({ params, request, response }) {
        const id = params.id;
        const all = request.all();
        const autor = await Autor.query()
            .where('id', id).update(all)

        response.send({
            'code': 200,
            'status': 'success',
            'data': autor
        });
    }

    async delete({ params, response }) {
        const autor = await Autor.findOrFail(params.id);
        await autor.livro().detach();
        await autor.delete();

        response.send({
            'code': 200,
            'status': 'success',
            'data': autor
        });
    }
}

module.exports = AutorController
