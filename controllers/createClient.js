import { Client } from '../models'

export default async function(req, res) {
  let isValidDate = Date.parse(req.body.contractStartDate)
  if (!!!isValidDate)
    return res.render('clientForm', {
      title: 'new client',
      email: req.user.email,
      type: 'add',
      error: 'Contract Start Date is not a valid date',
      data: { ...req.body }
    })

  isValidDate = Date.parse(req.body.contractEndDate)
  if (!!!isValidDate)
    return res.render('clientForm', {
      title: 'new client',
      email: req.user.email,
      type: 'add',
      error: 'Contract End Date is not a valid date',
      data: { ...req.body }
    })

  await Client.create({ ...req.body })
  res.redirect('/')
}
