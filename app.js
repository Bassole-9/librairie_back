import express from "express"
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from "dotenv"
import { connecterDb } from "./db/db.js"
import userRouter from "./routes/user.js"
config()

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

// app.use("/appeluser/user",userRouter)
// app.use("/appeluser/article",articleRouter)

app.use("/api/users", userRouter)

connecterDb().then(()=>{
    app.listen(3000,()=>{
        console.log("server en marche");
    })

}).catch((error)=>{
console.log(error.message);
})