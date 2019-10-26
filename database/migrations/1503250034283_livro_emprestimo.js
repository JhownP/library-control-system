'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroEmprestimoSchema extends Schema {
  up () {
    this.create('emprestimo_livro', (table) => {
      table.increments()
      table.integer('emprestimo_id').unsigned().references('id').inTable('emprestimos')
      table.integer('livro_id').unsigned().references('id').inTable('livros')
      table.timestamps()
    })
  }

  down () {
    this.drop('emprestimo_livro')
  }
}

module.exports = LivroEmprestimoSchema
