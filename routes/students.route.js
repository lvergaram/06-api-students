import { Router } from "express";
import 
{ 
    getAllController,
    getOneController,
    getOneByRutController,
    createController,
    updateController,
    removeController
 } 
 from "../controllers/students.controller.js";

const router = Router()

router.get("/" , getAllController)
router.get("/:id" , getOneController)
router.get("/rut/:rut" , getOneByRutController)
router.post("/" , createController)
router.put("/:id" , updateController)
router.delete("/:id" , removeController)

export default router
