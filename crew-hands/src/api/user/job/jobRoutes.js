import { Router } from 'express'
import * as ctrl from "./jobController"

const router = Router()

router
  .route('/')
  .get(ctrl.list)
  .post(ctrl.create)

router
  .route('/:jobId')
  .get(ctrl.jobById)
  .put(ctrl.update)

export default router