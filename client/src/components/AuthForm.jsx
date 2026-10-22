import { useState } from 'react'
import { authClient } from '../lib/authClient'

const AuthForm = ({ onDone }) => {
  const [mode, setMode] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    let result
    if (mode === 'signup') {
      result = await authClient.signUp.email({ name, email, password })
    } else {
      result = await authClient.signIn.email({ email, password })
    }

    if (result.error) {
      setError(result.error.message)
    } else {
      onDone()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 border-[3px] border-ink bg-white p-5 shadow-[5px_5px_0_#575757]">
      <h2 className="font-display text-xl font-bold">
        {mode === 'signup' ? 'CREATE ACCOUNT' : 'SIGN IN'}
      </h2>

      {mode === 'signup' && (
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          className="border-2 border-ink px-3 py-2 text-sm"
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
        className="border-2 border-ink px-3 py-2 text-sm"
      />

      <input
        type="password"
        placeholder="Password (min 8 characters)"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        minLength={8}
        className="border-2 border-ink px-3 py-2 text-sm"
      />

      {error && <p className="text-xs font-bold text-orange">{error}</p>}

      <button type="submit" className="bg-ink py-2.5 text-[11px] font-extrabold tracking-[0.08em] text-white hover:bg-orange">
        {mode === 'signup' ? 'SIGN UP' : 'SIGN IN'}
      </button>

      <button
        type="button"
        onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
        className="text-xs underline"
      >
        {mode === 'signup' ? 'Have an account? Sign in' : 'New here? Create an account'}
      </button>
    </form>
  )
}

export default AuthForm