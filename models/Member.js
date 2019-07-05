var sql = require('../config/db.js')

//User object constructor
var Member = function(member){
    this.id = member.id
    this.nom = member.nom
    this.prenom = member.prenom
    this.telephone = member.telephone
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
})   
}
module.exports = Member
