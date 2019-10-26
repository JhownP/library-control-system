'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmprestimoSchema extends Schema {
  up () {
    this.create('emprestimos', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.date('date_start').notNullable()
      table.date('date_end').notNullable()
      table.date('date_devolution').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('emprestimos')
  }
}

module.exports = EmprestimoSchema
