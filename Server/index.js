import express from "express"
import {Evaluate} from "./Logic.js"
import cors from "cors"
const port = 3000;
const app = express();


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/sum/:numO/:numT/:op", (req, res)=>{
    const num1 = Number(req.params.numO)
    const num2 = Number(req.params.numT)
    const op = req.params.op

    const ans = Evaluate(num1, num2, op)
    res.json({"ans":ans})
})

app.listen(port, ()=>{
    console.log(`App is live on http:localhost:${port}`)
})