import { User } from '../models'

export default async function(req, res) {
  let user = await User.findOne({ email: req.body.email })
  if (user)
    return res.render('register', {
      type: 'register',
      error: 'email is already exist'
    })

  user = await User.create({ ...req.body })
  const token = user.genToken()

  return res.cookie('Authorization', token).redirect('/')
}
