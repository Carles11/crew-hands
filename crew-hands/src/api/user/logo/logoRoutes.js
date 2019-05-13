import { Router } from 'express'
import * as ctrl from "./logoController"

const router = Router()

router
  .route('/')
  .get(ctrl.list)
  .post(ctrl.create)

export default router