import { Service } from '../models'

export default async function(req, res) {
  await Service.create({ ...req.body, client: req.params.id })
  res.redirect(`/client/${req.params.id}`)
}
