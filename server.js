
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoute from "./route/authRoute.js"
import connectDB from "./config/Db.js";

dotenv.config();
const app = express();
connectDB();


const corsOptions = {
  origin: [
    "http://localhost:3001",
    "http://localhost:3000",
  
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(express.json({ limit: "100mb" })); // Adjust size as needed
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(cors(corsOptions));
// app.options("*", cors(corsOptions)); // Preflight for all routes

// app.use((err, req, res, next) => {

//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   next(err);
// });

// Routes

app.use("/api/", authRoute);


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));