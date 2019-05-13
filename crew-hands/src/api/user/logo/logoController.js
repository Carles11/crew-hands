
import Logo from './logoModel'

// import { crudControllers } from '../../.././utils/crud'
// import { Logo } from './logo.js'

// export default crudControllers(Logo)

export const list = async (req, res, next) => {
  try {
    const logos = await Logo.find({})
    return res.status(201).json({ success: true, data: logos })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const create = async (req, res) => {
  console.log(req.body)
  try {
    const newLogo = await new Logo(req.body)
    await newLogo.save()
    //await setMail(newLogo)
    const Logos = await Logo.find({})
    return res.status(201).json({ success: true, data: Logos })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, data: err })
  }
}
export const update = async (req, res) => {
  try {
    const updateLogo = Object.assign(req.logo, req.body)
    await updateLogo.save()
    const logos = await Logo.find({})
    return res.status(200).json({ success: true, data: logos })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const remove = async (req, res) => {
  try {
    const logoToRemove = req.logo
    await logoToRemove.remove()
    const logos = await Logo.find({})
    return res.status(200).json({ success: true, data: logos })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const logoById = async (req, res, next, id) => {
  try {
    req.logos = await Logo.findById(id)
    next()
  } catch (err) {
    return res.status(404).json({ success: false, data: err })
  }
}