const express = require('express')

module.exports = function(server){
    // API Routes
    const router = express.Router()
    server.use('/api' , router)

    // Todo Routers
    const todoService = require('../api/todos/todoService')
    todoService.register(router , '/todos')

}