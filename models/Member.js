var sql = require('../config/db.js')

//User object constructor
var Member = function(member){
    this.id = member.id
    this.nom = member.nom
    this.prenom = member.prenom
    this.telephone = member.telephone
};

Member.createMember = function (newMember, result) {    
  sql.query("INSERT INTO persons set ?", newMember, function (err, res) {
    if(err) {
      console.log("error: ", err)
      result(err, null)
    }
    else{
      console.log(res.insertId)
      result(null, res.insertId)
    }
  });           
};

Member.listAllMembers = function (result) {
  sql.query("SELECT * from persons", function (err, res) {
    if(err) {
      console.log("error: ", err)
      result(null, err)
    }
    else{
      console.log('members : ', res)

      result(null, res)
    }
});   
};

Member.getUserById = function (id, result) {
  sql.query("SELECT nom, prenom from persons where id = ? ", [id], function (err, res) {             
    if(err) {
      console.log("error: ", err)
      result(err, null)
    }
    else{
      result(null, res)
    }
  })
}

Member.updateById = function(id, user, result){
  sql.query("UPDATE users SET persons = ? WHERE id = ?", [user.user, id], function (err, res) {
    if(err) {
      console.log("error: ", err)
      result(null, err)
    }
    else{   
      result(null, res)
    }
  })
}

Member.deleteMember = function(id, result){
  sql.query("DELETE FROM persons WHERE id = ?", [id], function (err, res) {
    if(err) {
      console.log("error: ", err)
      result(null, err)
    }
    else{
      result(null, res)
    }
  })
}

module.exports = Member
