import 'dotenv/config'
import express from 'express'
import { Student } from './models/student.model.js'
import router from './routes/students.route.js'

const app = express()
const PORT = process.env.PORT || 3000

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.use("/students", router)




/*
app.get("/students/:id" , async(req,res)=> {
    const {id} = req.params
    const student = await Student.findById(id)
    console.log(student)
    res.json(student)

})

app.get("/students/rut/:rut" , async(req,res)=> {
    const {rut} = req.params
    const student = await Student.findByRut(rut)
    console.log(student)
    res.json(student)

})

app.post("/create", async(req,res)=>{
    try {
        const {nombre,rut,curso,nivel} = req.body
        const student = await Student.create({nombre,rut,curso,nivel})
        res.json(student)
    } catch (error) {
        res.status(400).send("no se pudo crear")
        console.log(error)
    }
})

app.put("/update/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const {nombre,rut,curso,nivel} = req.body
        const newStudent = await Student.update({id,nombre,rut,curso,nivel})
        res.json(newStudent)
    } catch (error) {
        res.status(400).send("no se pudo actualizar")
        console.log(error)
    }
})

app.delete("/delete/:id", async(req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.remove(id)
        res.json(student)
    } catch (error) {
        res.status(400).send("no se pudo eliminar")
        console.log(error)
    }
} )
*/

app.listen(PORT, console.log(`listen on port ${PORT}`))



