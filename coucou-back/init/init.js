const bcrypt = require("bcrypt");
const Admin = require("../models/admin.model");
const Permission = require("../models/permission.model")
const Role = require("../models/role.model")

const init = async () => {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('init/init.json', 'utf8'));
    await addPermissions(data.permissions) ;
    await addRole(data.role) ;
    await addAdmin(data.admin) ;
}

const addPermissions = async (array) => {
    for(element of array) {
        await Permission.create(element)
            .then(result => console.log("Ok"))
            .catch(err => console.log(err));
    }
}

const addRole = async (element) => {
    await Role.create(element)
        .then(result => {
            console.log("Ok")
            result.addPermission()
        })
        .catch(err => console.log(err));
}

const addAdmin = async (element) => {
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

module.exports = init
