import { Router } from 'express'
import * as ctrl from "./supplierController"

const router = Router()

router
  .route('/')
  .get(ctrl.list)
  .post(ctrl.create)

router
  .route('/:supplierId')
  .get(ctrl.supplierById)
  .put(ctrl.update)
export default router