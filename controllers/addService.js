export default function(req, res) {
  res.render('serviceForm', {
    title: 'new service',
    email: req.user.email,
    id: req.params.id,
    serviceID: '',
    error: '',
    type: 'add',
    service: {}
  })
}
