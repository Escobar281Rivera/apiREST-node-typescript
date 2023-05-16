import { Router } from "express";
import RolesController from "../controllers/roles.controller";
import rolValidate from "../validators/rol.validate";

const router = Router()
const rol = RolesController

router.get('/', rol.listRoles)
router.post('/', rolValidate ,rol.createRoles)
router.get('/:id', rol.byIdRol)
router.put('/:id', rol.updateRol)
router.delete('/:id', rol.deleteRol)


export default router


