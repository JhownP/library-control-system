'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/Livro', async (faker) => {
    return {
        title: faker.word(),
        quantity: faker.integer({ min: 2, max: 2000 }),
        photo: faker.hash({ length: 25 }) + '.jpg'
    }
});

Factory.blueprint('App/Models/Autor', async (faker) => {
    return {
        name: faker.name()
    }
});

Factory.blueprint('App/Models/Emprestimo', async (faker) => {
    return {
        user_id: faker.integer({ min: 1, max: 3 }),
        date_start: faker.date(),
        date_end: faker.date(),
        date_devolution: faker.date(),
    }
});


Factory.blueprint('App/Models/User', async (faker) => {
    return {
        username: faker.name(),
        email: faker.email(),
        password: Hash.make(faker.word()),
        phone: faker.phone(),
    }
});
