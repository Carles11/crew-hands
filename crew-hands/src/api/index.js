
import { Router } from 'express'

import User from './user'


const router = Router()

router.use('/user', User)
// router.use('/users', hands)
// router.use('/jobs'), jobs)
// router.use('/clients'), clients)
// router.use('/logos'), logos)
// router.use('/images', images)
// router.use('/documents', documents)


export default router
