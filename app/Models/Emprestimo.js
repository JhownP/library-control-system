'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Emprestimo extends Model {

    livro() {
        return this.belongsToMany('App/Models/Livro').withTimestamps();
    }

    user() {
        return this.belongsTo('App/Models/User');
    }

}

module.exports = Emprestimo
