const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware');
const appointmentrouter = require("./routes/appointmentRoutes");
const appointmentRequestrouter = require("./routes/appointmentRequestsRoute");
const appointmentAttendencerouter = require("./routes/appointmentAttendenceRoute");
const patientRouter = require("./routes/patientRoutes");
const prescriptionRouter = require("./routes/prescriptionRoutes");
const drugRouter = require("./routes/drugsRouter");
const reportgenerate_router = require("./routes/reportGenrateRoutes");
const router = require("./routes/doctorRoutes");
const memberRouter = require("./routes/memberRoutes");
const memberAttendenceRouter = require("./routes/memberAttendenceRouter");
const inventoryRouter = require("./routes/inventoryRoutes");
const supplierRouter = require("./routes/supplierRoutes");
const reportRouter = require("./routes/reportRoutes");
//Middleware
app.use(cors());
app.use(express.json());
app.use("/patients", patientRouter);
app.use("/prescriptions", prescriptionRouter);
app.use("/appointments", appointmentrouter);
app.use("/requests", appointmentRequestrouter);
app.use("/attendence", appointmentAttendencerouter);
app.use("/drugs",drugRouter);
app.use("/reportsGenerate",reportgenerate_router); 
app.use("/clinics", require("./routes/clinicRoutes"));
app.use("/doctors", router);
app.use("/members", memberRouter);
app.use("/memberattendence", memberAttendenceRouter)
app.use("/items", inventoryRouter);
app.use("/suppliers", supplierRouter);
app.use("/reports",reportRouter)
app.use(errorHandler)
mongoose.set('strictQuery', false);


      //login

      // const express = require("express");
     // const app = express();
      const session = require("express-session");
      //const mongoose = require("mongoose");
      const memberSchema = require("./model/Member");
      const doctorSchema = require("./model/Doctor")
      const bcrypt = require("bcryptjs");

// connect to MongoDB
// mongoose.connect("mongodb://localhost:5000/myapp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// configure session middleware
app.use(
  session({
    secret: "my secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 3600000, // cookie will expire after 1 hour
    },
  })
);


//Member login endpoint
app.post("/login", async (req, res) => {
  const {username, password} = req.body;

  // find user by email
  const user = await memberSchema.findOne({ username:username });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // compare password hash
  if (password !== user.password) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // set the user session variable
  req.session.user = user;

  // return a success message
  res.json({ status: "login successful" });
});


//Doctor Login
app.post("/doclogin", async (req, res) => {
  const { username, password } = req.body;

  // find user by email
  const user = await doctorSchema.findOne({ email:username });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  // set the user session variable
  req.session.user = user;

  // return a success message
  res.json({ status: "login successful" });
});


mongoose.connect("mongodb+srv://IntelligentSonics:Nf61k2ZUVGQlJtjH@clinic-management-clust.siikg8s.mongodb.net/ClinicDB?retryWrites=true&w=majority"
).then(()=>console.log("Connected to Database")
).then(()=>{
    app.listen(5000);
}).catch((err)=>console.log(err));