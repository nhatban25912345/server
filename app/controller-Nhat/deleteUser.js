const StaffInformation = require("../models/staffInformation")

module.exports = (req,res) => {
    var id = req.query.deleteUser;
    StaffInformation.findByIdAndDelete(id, (err,member) => {
        if (err){
          console.log("Lỗi tìm kiếm, đối tượng tìm kiếm không tồn tại!");
          res.render("userInformation");
        }
        console.log("aaaa");
        res.redirect('/admin/user-information');
        return console.log("deleted");
    })
}