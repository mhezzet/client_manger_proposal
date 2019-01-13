import jwt from 'jsonwebtoken'
import config from 'config'

export default function(req, res, next) {
  const cookie = req.cookies['Authorization']
  if (!cookie) return res.redirect('/register')

  try {
    const decoded = jwt.verify(cookie, config.get('JWT_SECRET'))
    req.user = decoded
  } catch {
    return res.redirect('/register')
  }

  next()
}
