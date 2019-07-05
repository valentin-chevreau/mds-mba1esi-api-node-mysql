const Member = require("../models/Member")
const connection = require("../config/db")

// what to do to list all the members registred
exports.listMembers = function(req, res) {
  Member.listAllMembers(function(err, member) {
    if (err) {
      res.status(500).send(err)
    }
    res.status(200).json(member)
  })
}

// what to do to list to create a new member
exports.createNewMember = (req, res) => {
  const query = `INSERT INTO persons (nom, prenom, telephone) VALUES (?, ?, ?)`
  const payload = req.body
  connection.query(query, [payload.nom, payload.prenom, payload.telephone], (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json( { message: "Member successfully created", results })
  })
}

// what to do to display content of a specific member
exports.displayMember = (req, res) => {
  const query = `SELECT * FROM persons WHERE id = ?`
  const id = req.params.id
  
  connection.query(query, [id], (error, results) => {
    if (error) { 
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
}

// what to do to update content of a specific member
exports.updateMember = (req, res) => {

  let query = 'UPDATE persons SET '
  const id = req.params.id
  const body = req.body

  Object.entries(body).forEach((value, index) => {
      if (Object.entries(body).length === index + 1) {
          query += `${value[0]} = '${value[1]}'`;
      } else {
          query += `${value[0]} = '${value[1]}',`;
      }
  })

  query += 'WHERE id = ?'

  connection.query(query, [id], (error, results) => {
    if (error) { 
      res.status(500).send(error)
    }
    res.status(200).json(results)
  })
  console.log(query)
}

// what to do to delete content of a specific member
exports.deleteMember = (req, res) => {
  const query = `DELETE FROM persons WHERE id = ?`
  const id = req.params.id

  connection.query(query, [id], (error, results) => {
    if (error) {
      res.status(500).send(error)
    }
    res.status(200).json( { message: "Member successfully deleted", results })
  })
}
