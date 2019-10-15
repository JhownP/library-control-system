'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Swagger Information
  | Please use Swagger 2 Spesification Docs
  | https://swagger.io/docs/specification/2-0/basic-structure/
  |--------------------------------------------------------------------------
  */

  enable: true,
  specUrl: '/swagger.json',

  options: {
    swaggerDefinition: {
      info: {
        title: '📚 UNIP Biblioteca - Documentação',
        version: '0.0.1',
      },
  
      basePath: '/api/v1/unip/biblioteca/',

      // Example security definitions.
      securityDefinitions: {
        ApiKey: {
          description: 'Token',
          name: 'Authorization'
        },

        // OAuth2 configuration
        OAuth2: {
          authorizationUrl: 'https://library-control-system.herokuapp.com/api/v1/unip/biblioteca/authorization',
          tokenUrl: 'https://library-control-system.herokuapp.com/api/v1/unip/biblioteca/token',

          // define your scopes here
          // remove read, write and admin if not necessary
          scopes: {
            read: 'Todos os Usuários podem ler e acessar as URLs da API',
            write: 'Somente Usuários autenticados podem gravar no banco de dados informações',
            admin: 'Somente administradores poderam acessar as informações de outros Usúarios que foram gravadas'
          }
        },
      }
    },

    // Path to the API docs
    // Sample usage
    // apis: [
    //    'docs/**/*.yml',    // load recursive all .yml file in docs directory
    //    'docs/**/*.js',     // load recursive all .js file in docs directory
    // ]
    apis: [
      'app/**/*.js',
      'start/routes.js'
    ]
  }
}