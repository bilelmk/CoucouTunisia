const bcrypt = require("bcrypt");
const Admin = require("../models/admin.model");

const init = async () => {
    const fs = require('fs');
    const admins = JSON.parse(fs.readFileSync('init/admins.json', 'utf8'));
    addAdmins(admins.admins) ;
}

const addAdmins = async (array) => {
    for(element of array) {
        let admin = await Admin.findOne({where: { username: element.username}} )
        if(!admin) {
            await bcrypt.hash(element.password, 10).then( async hash =>  {
                element.password = hash
                element.active = true
                await Admin.create(element)
                    .then(result => console.log("Ok"))
                    .catch(err => console.log(err));
            })
        } else {
            console.log("admin exist")
        }
    }
}

module.exports = init
