
import Supplier from './supplierModel'

export const list = async (req, res, next) => {
  try {
    const suppliers = await Supplier.find({})
    return res.status(201).json({ success: true, data: suppliers})
  } catch (err) {
    return res.status(500).json({ success: false, data: err })
  }
}