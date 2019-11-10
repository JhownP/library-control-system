'use strict'

const User = use('App/Models/User');

class UserController {
    async index({ request, response }) {
        const offset = request.input('offset')
        const limit = request.input('limit')

        const users = await User
            .query()
            .paginate(offset, limit)

        response.send({
            'code': 200,
            'status': 'success',
            'data': users
        })
    }

    async show({ params, response }) {
        const user = await User.findOrFail(params.id);

        response.send({
            'code': 200,
            'status': 'success',
            'data': user
        })
    }

    async store({ request, response }) {
        const all = request.all();
        const user = new User();
        user.fill(all);
        await user.save();

        response.send({
            'code': 201,
            'status': 'success',
            'data': user
        })
    }

    async update({ params, request, response }) {
        const id = params.id;
        const all = request.all();
        const user = await User.query()
            .where('id', id).update(all)

        response.send({
            'code': 200,
            'status': 'success',
            'data': user
        });
    }

    async delete({ params, response }) {
        const user = await User.findOrFail(params.id);
        await user.delete();

        response.send({
            'code': 200,
            'status': 'success',
            'data': user
        });
    }
}

module.exports = UserController
