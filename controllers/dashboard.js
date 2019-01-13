export default function(req, res) {
  res.render('dashboard', { title: 'dashboard', email: req.user.email })
}
