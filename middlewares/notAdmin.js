export default function(req, res, next) {
  if (req.cookies['Authorization']) return res.redirect('/dashboard')
  next()
}
