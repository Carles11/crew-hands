
import Supplier from './supplierModel'

// import { crudControllers } from '../../.././utils/crud'
// import { Supplier } from './supplierModel.js'

// export default crudControllers(Supplier)

export const list = async (req, res, next) => {
  try {
    const suppliers = await Supplier.find({})
    return res.status(201).json({ success: true, data: suppliers })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const create = async (req, res) => {
  console.log(req.body)
  try {
    const newSupplier = await new Supplier(req.body)
    await newSupplier.save()
    //await setMail(newSupplier)
    const suppliers = await Supplier.find({})
    return res.status(201).json({ success: true, data: suppliers })
  } catch (err) {
    console.log(err)
    return res.status(500).json({ success: false, data: err })
  }
}

export const supplierById = async (req, res, next, id) => {
  try {
    req.supplier = await Supplier.findById(id)
    next()
  } catch (err) {
    return res.status(404).json({ success: false, data: err })
  }
}

export const update = async (req, res) => {
  try {
    const updateSupplier = Object.assign(req.supplier, req.body)
    await updateSupplier.save()
    const suppliers = await Supplier.find({})
    return res.status(200).json({ success: true, data: suppliers })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}

export const remove = async (req, res) => {
  try {
    const supplierToRemove = req.supplier
    await supplierToRemove.remove()
    const suppliers = await Supplier.find({})
    return res.status(200).json({ success: true, data: suppliers })
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}
