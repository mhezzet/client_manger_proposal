import { Service } from '../models'

export default async function(req, res) {
  const service = await Service.findOneAndRemove({ _id: req.params.id })
  res.redirect(`/client/${service.client}`)
}
