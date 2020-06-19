const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const items = require('../resolucao/data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})



server.get("/", (req,res) => {
    return res.render("about")
})

server.get("/bootcamps", (req,res) => {
    return res.render("bootcamps", { cursos: items})
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5000)