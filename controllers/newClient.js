export default function(req, res) {
  res.render('clientForm', {
    title: 'new client',
    email: req.user.email,
    type: 'add',
    error: '',
    data: {
      title: '',
      description: '',
      contactPhone: '',
      contractStartDate: '',
      contractEndDate: ''
    }
  })
}
