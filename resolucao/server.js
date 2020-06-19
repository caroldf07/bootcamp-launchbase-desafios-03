const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
    express: server
})



server.get("/", (req,res) => {
    return res.render("about")
})

server.get("/bootcamps", (req,res) => {
    return res.render("bootcamps")
})

server.listen(5000)