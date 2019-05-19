
import { Router } from 'express'

import supplier from './supplier/supplierRoutes.js'
import logo from './logo/logoRoutes.js'
import job from './job/jobRoutes.js'
// import hands from './user/hand/handRoutes'
// import clients from './user/supplier/client/clientRoutes'
// import images from './user/hand/image/imageRoutes'
// import documents from './document/documentRoutes'

const router = Router()

router.use('/supplier', supplier)
router.use('/logo', logo)
router.use('/job', job)
// router.use('/users', hands)
// router.use('/clients'), clients)
// router.use('/images', images)
// router.use('/documents', documents)


export default router
