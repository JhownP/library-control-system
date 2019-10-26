'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorSchema extends Schema {
  up () {
    this.create('autors', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('autors')
  }
}

module.exports = AutorSchema
