'use strict'

class TestController {
    async hello({ request, response }) {
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
}

module.exports = TestController
