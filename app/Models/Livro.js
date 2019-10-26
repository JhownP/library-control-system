'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Livro extends Model {

    autor() {
        return this.belongsToMany('App/Models/Autor').withTimestamps();
    }

    emprestimo() {
        return this.belongsToMany('App/Models/Emprestimo').withTimestamps();
    }
    
}

module.exports = Livro
