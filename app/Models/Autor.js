'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Autor extends Model {

    livro() {
        return this.belongsToMany('App/Models/Livro').withTimestamps();
    }
    
}

module.exports = Autor
