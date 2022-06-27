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
const reservationRoutes = require("./routes/reservation.route");
const couponRoutes = require("./routes/coupon.route");
const mailRoutes = require("./routes/mail.route");
const menuRoutes = require("./routes/menu.route");
// const roomRoutes = require("./routes/room.route");
const planningRoutes = require("./routes/planning.route");


const cron = require("./crons/cron");
const init = require("./init/init");
const app = express();

sequelize.sync().then(res => {
   console.log(res);
 })
 .catch(err => {
    console.log(err);
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'upload')))

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

cron.runCrons() ;

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "coucou-backoffice", "index.html"));
});

app.use("/api/images", express.static(path.join(__dirname, "upload")));
app.use("/api/messaging", messagingRoutes) ;
app.use("/api/clients", clientRoutes) ;
app.use("/api/restaurants", restaurantRoutes) ;
app.use("/api/admins", adminRoutes);
app.use("/api/permissions", permissionRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/reservations" , reservationRoutes);
app.use("/api/coupons" , couponRoutes);
app.use("/api/mails" , mailRoutes)
app.use("/api/menus" , menuRoutes)
app.use("/api/planning" , planningRoutes)
// app.use("/api/rooms" , roomRoutes)
app.use('/',(req,res)=> res.send('hhhhhh'))
// init() ;

module.exports = app;
