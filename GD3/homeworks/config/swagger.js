const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const verifyToken = require('./verifyToken');
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Homework NodeJs',
      description: 'làm bài tập với nodejs',
      version: '1.0.0',

    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  
  // looks for configuration in specified directories
  apis: ['./routes/*.js'],
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerDocs(app, port) {
  
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}
module.exports = swaggerDocs;

