'use strict'

/*
|--------------------------------------------------------------------------
| LivroSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class LivroSeeder {
  async run () {
    const user = await Factory
      .model('App/Models/User')
      .createMany(5)

    for (let index = 0; index < 10; index++) {

      const autor = await Factory
        .model('App/Models/Autor')
        .create()

      const livro = await Factory
        .model('App/Models/Livro')
        .make()

      const emprestimo = await Factory
        .model('App/Models/Emprestimo')
        .create()

      await autor.livro().save(livro)
      await livro.emprestimo().save(emprestimo)
    }
  }
}

module.exports = LivroSeeder
