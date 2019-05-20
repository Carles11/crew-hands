
import Job from './jobModel'
import fs from 'fs'

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

  console.log("response", req.body)
  try {
    const newJob = await new Job(req.body)
    await newJob.save()
    //await setMail(newJob)
    const jobs = await Job.find({})
    return res.status(201).json({ success: true, data: jobs })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, data: err })
  }
}
export const update = async (req, res) => {
  try {
    const updateJob = Object.assign(req.job, req.body)
    await updateJob.save()
    const jobs = await Job.find({})
    return res.status(200).json({ success: true, data: jobs })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const remove = async (req, res, id) => {

  Job.deleteOne({
    _id: JSON.stringify(id)
  }, function (err, job) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Job gelöscht'
    });
  });
}
export const jobById = async (req, res, next, id) => {
  try {
    req.job = await Job.findById(id)
    console.log("jobById request", req.job)
    next()
  } catch (err) {
    return res.status(404).json({ success: false, data: err })
  }
}