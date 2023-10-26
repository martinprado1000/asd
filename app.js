const express = require("express")
const productsRouter = require("./routers/productsRouters")
const cors = require("cors")
const connectionFn = require("./connectionDB")
connectionFn("mongodb+srv://martinprado1000:petete2000@cluster0.kbl1ng2.mongodb.net/basePlantilla?retryWrites=true&w=majority")

const app = express();

app.use(express.json())
app.use(express(express.urlencoded({extended:true})))
app.use(cors())

app.use("/api",productsRouter)

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server on port ${PORT}`);
})