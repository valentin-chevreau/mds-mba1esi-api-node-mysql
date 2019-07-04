// modules import
const express = require("express")
const bodyParser = require("body-parser")
const memberController = require("./controllers/MemberController")

// db instance connection
require("./config/db")

// initialize express
const app = express()

const port = 8890
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// --- API ENDPOINTS ---

// to list all members
app
  .route("/members")
  .get(memberController.listMembers)

// to create a new member  
app
  .route("/member/create")
  .post(memberController.createNewMember)

app
  .route("/member/:id")
  // to display content member 
  .get(memberController.displayMember)
  // to update content member
  .put(memberController.updateMember)

// to delete member  
app
  .route("/member/delete/:id")  
  .delete(memberController.deleteMember);

// displaying a message when server is running
app.listen(port, () => {
  console.log(`Server is running on locahost:${port}`)
})
