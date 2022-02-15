const express = require("express")
const db = require('../data/db-config')
const shippersRouter = require("./shippers/shippers-router")

const server = express()

server.use(express.json())

server.use("/api/shippers", shippersRouter)

server.get("/", async (req, res) => {
  // let result = await db('Employees').where({'employeeid': 3})
  // let result = await db('Employees').insert({birthdate: '1999-01-01', firstname})
  // console.log(result)

  res.status(200).json({ api: "up" })
})

module.exports = server
