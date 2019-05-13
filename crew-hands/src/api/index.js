
import { Router } from 'express'

import user from './user'
// import hands from './user/hand/handRoutes'
// import jobs from './job/jobRoutes'
// import clients from './user/supplier/client/clientRoutes'
// import logos from './user/suppliers/logo/logoRoutes'
// import images from './user/hand/image/imageRoutes'
// import documents from './document/documentRoutes'

const router = Router()

router.use('/user', user)
// router.use('/users', hands)
// router.use('/jobs'), jobs)
// router.use('/clients'), clients)
// router.use('/logos'), logos)
// router.use('/images', images)
// router.use('/documents', documents)


export default router
