const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sequelize = require("./util/database-config");

const restaurantRoutes = require("./routes/restaurant.route");
const clientRoutes = require("./routes/client.route");
const adminRoutes = require("./routes/admin.route");
const messagingRoutes = require("./routes/messaging.route");

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

// app.use("/", express.static(path.join(__dirname, "public/app")));
// app.use("/data", express.static(path.join(__dirname, "public/images")));
app.use("/messaging", messagingRoutes) ;
app.use("/clients", clientRoutes) ;
app.use("/restaurants", restaurantRoutes) ;
app.use("/admins", adminRoutes);


// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "react app", "index.html"));
// });

module.exports = app;
