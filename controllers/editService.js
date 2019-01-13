import { Service } from '../models'

export default async function(req, res) {
  const service = await Service.findOne({ _id: req.params.id })

  res.render('serviceForm', {
    title: `update service ${service.title}`,
    email: req.user.email,
    id: req.params.id,
    serviceID: service._id,
    error: '',
    type: 'update',
    service
  })
}
