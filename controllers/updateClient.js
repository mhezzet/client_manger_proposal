import { Client } from '../models'

export default async function(req, res) {
  let isValidDate = Date.parse(req.body.contractStartDate)
  if (!!!isValidDate)
    return res.render('clientForm', {
      id: req.params.id,
      title: 'update client',
      email: req.user.email,
      type: 'update',
      error: 'Contract Start Date is not a valid date',
      data: { ...req.body }
    })

  isValidDate = Date.parse(req.body.contractEndDate)
  if (!!!isValidDate)
    return res.render('clientForm', {
      id: req.params.id,
      title: 'update client',
      email: req.user.email,
      type: 'update',
      error: 'Contract End Date is not a valid date',
      data: { ...req.body }
    })

  await Client.findByIdAndUpdate({ _id: req.params.id }, { ...req.body })
  res.redirect('/')
}
