import { Service } from '../models'

export default async function(req, res) {
  const service = await Service.findOneAndUpdate(
    { _id: req.params.id },
    { ...req.body }
  )

  res.redirect(`/client/${service.client}`)
}
