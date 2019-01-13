export default function(req, res) {
  res.clearCookie('Authorization').redirect('/register')
}
