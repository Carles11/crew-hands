
import Job from './jobModel'

// import { crudControllers } from '../../.././utils/crud'
// import { Logo } from './logo.js'

// export default crudControllers(Logo)

export const list = async (req, res, next) => {
  try {
    const jobs = await Job.find({})
    return res.status(201).json({ success: true, data: jobs })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const create = async (req, res) => {

  console.log("req", req.body)
  try {
    const response = await Job.create(req.body)
      console.log("res", response)
    const jobs = await Job.find({})
    return res.status(201).json({ success: true, data: jobs })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, data: err })
  }
}

export const update = async (req, res) => {
 try {
        console.log("REQBODY", req.body)

    const updateJob = Object.assign(req.job, req.body)
     console.log("REQBODY", updateJob)
    await updateJob.save()
    const jobs = await Job.find({})
    return res.status(200).json({ success: true, data: jobs })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const jobById = async (req, res, next, id) => {
  console.log("REQBODY", req.body)
  try {
    req.job = await Job.findById(id)
    console.log("jobFindById request", req.job)
    if(!req.job){
          return res.status(404).json({ success: false, data: "bitch job" })

    }
    next()
  } catch (err) {
    return res.status(404).json({ success: false, data: err })
  }
}
export const remove = async (req, res) => {
  try {
    const request = await Job.deleteOne({"_id": req.job._id}).exec()
    console.log("jobRemove TRY", request)
    const jobs = await Job.find({})
    return res.status(200).json({ success: true, data: jobs })
  } catch (error) {
    console.log("jobRemove ERROR", error)
    return res.status(500).json({ success: false, data: error })

  }
};

export const read = async (req, res) => {
  try{
      console.log("requested job", req.job)
      return res.status(200).json({ success: true, data: req.job})
  }catch(error){
        return res.status(401).json({ success: false, data: error })
  }
}