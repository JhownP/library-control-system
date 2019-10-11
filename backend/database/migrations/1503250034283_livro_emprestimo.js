'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroEmprestimoSchema extends Schema {
  up () {
    this.create('livro-emprestimo', (table) => {
      table.increments()
      table.integer('emprestimo_id').unsigned().references('id').inTable('emprestimo')
      table.integer('livro_id').unsigned().references('id').inTable('livro')
      table.timestamps()
    })
  }

  down () {
    this.drop('livro-emprestimo')
  }
}

module.exports = LivroEmprestimoSchema
