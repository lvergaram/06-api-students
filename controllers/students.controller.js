import { Student } from "../models/student.model.js"

export const getAllController = async(req,res)=> {
    const students = await Student.findAll()
    console.log(students)
    res.send(JSON.stringify(students))

}

export const getOneController =  async(req,res)=> {
    const {id} = req.params
    const student = await Student.findById(id)
    console.log(student)
    res.json(student)

}

export const getOneByRutController =  async(req,res)=> {
    const {rut} = req.params
    const student = await Student.findByRut(rut)
    console.log(student)
    res.json(student)
}


export const createController = async(req,res)=>{
    try {
        const {nombre,rut,curso,nivel} = req.body
        const student = await Student.create({nombre,rut,curso,nivel})
        res.json(student)
    } catch (error) {
        res.status(400).send("no se pudo crear")
        console.log(error)
    }
}

export const updateController = async(req,res)=>{
    try {
        const {id} = req.params
        const {nombre,rut,curso,nivel} = req.body
        const newStudent = await Student.update({id,nombre,rut,curso,nivel})
        res.json(newStudent)
    } catch (error) {
        res.status(400).send("no se pudo actualizar")
        console.log(error)
    }
}

export const removeController = async(req,res)=>{
    try {
        const {id} = req.params
        const student = await Student.remove(id)
        res.json(student)
    } catch (error) {
        res.status(400).send("no se pudo eliminar")
        console.log(error)
    }
} 