const app = require("./app");
const dotenv = require("dotenv");

//config

dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.port,()=>{
    console.log(`Server is working on http://localhost:${process.evn.PORT}`)
})