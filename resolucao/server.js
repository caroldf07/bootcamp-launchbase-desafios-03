const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const items = require('../resolucao/data')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    noCache: false
})

server.get("/", (req,res) => {
    return res.render("about")
})

server.get("/bootcamps", (req,res) => {
    return res.render("bootcamps", { cursos: items})
})

server.get("/courses/:id", (req,res) => {
    const id = req.params.id
    const curso = items.find(function(curso){
        return curso.id == id
        
        if(!curso.id){
            return res.render ("not-found")
        }   
    })
    return res.render("courses", { curso })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  })

server.listen(5000)