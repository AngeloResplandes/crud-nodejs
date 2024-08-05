const express = require('express')

const server = express()

server.use(express.json())

const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube']

// CRUD --> Create, Read, Update, Delete

// Retorna um curso (Get)
server.get('/cursos/:index', (req, res) => {
  const { index } = req.params
  return res.json(cursos[index])
})

// Retorna todos os cursos (Get)
server.get('/cursos', (req, res) => {
  return res.json(cursos)
})

// Criar um novo curso (Post)
server.post('/cursos', (req, res) => {
  const { name } = req.body
  cursos.push(name)
  return res.json(cursos)
})

// Atualizar um curso (Put)
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params
  const { name } = req.body
  cursos[index] = name
  return res.json(cursos)
})

// Deletar curso (Delete)
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params
  cursos.splice(index, 1)
  return res.json({ message: 'O curso foi deletado' })
})

server.listen(3000)