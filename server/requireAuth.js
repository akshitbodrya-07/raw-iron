import { fromNodeHeaders } from 'better-auth/node'
import { auth } from './auth.js'

const requireAuth = async (req, res, next) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  })

  if (!session) {
    return res.status(401).json({ error: 'Please sign in first' })
  }

  req.user = session.user
  next()
}

export default requireAuth