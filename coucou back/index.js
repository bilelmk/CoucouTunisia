const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/database-config");
const path = require("path");

const restaurantRoutes = require("./routes/restaurant.route");
const clientRoutes = require("./routes/client.route");
const adminRoutes = require("./routes/admin.route");
const messagingRoutes = require("./routes/messaging.route");
const permissionRoutes = require("./routes/permission.route");
const roleRoutes = require("./routes/role.route");

const init = require("./init/init");

const app = express();

 sequelize
    .sync()
  .then(res => {
       console.log(res);
     })
   .catch(err => {
        console.log(err);
    });

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
// app.use('/',(req,res)=> res.send('hhhhhh'))
// app.use("/", express.static(path.join(__dirname, "public/app")));
app.use("/api/images", express.static(path.join(__dirname, "upload")));

app.use("/api/messaging", messagingRoutes) ;
app.use("/api/clients", clientRoutes) ;
app.use("/api/restaurants", restaurantRoutes) ;
app.use("/api/admins", adminRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/roles", roleRoutes);

init() ;

// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "react app", "index.html"));
// });

module.exports = app;
