import { User } from '../models'

export default async function(req, res) {
  let user = await User.findOne({ email: req.body.email })
  if (!user)
    return res.render('register', {
      type: 'login',
      error: 'invalid email or password'
    })

  const validPassword = await user.validPassword(req.body.password)
  if (!validPassword)
    return res.render('register', {
      type: 'login',
      error: 'invalid email or password'
    })

  const token = user.genToken()

  return res
    .cookie('Authorization', token)
    .render('dashboard', { email: user.email, title: 'dashboard' })
}
