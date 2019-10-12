'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorSchema extends Schema {
  up () {
    this.create('autor', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('autor')
  }
}

module.exports = AutorSchema
