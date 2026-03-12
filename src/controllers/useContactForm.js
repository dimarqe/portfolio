import { useState } from 'react'

// Replace YOUR_FORM_ID with your Formspree form ID after signing up at formspree.io
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

export function useContactForm() {
  const [fields, setFields]   = useState({ name: '', email: '', message: '' })
  const [errors, setErrors]   = useState({})
  const [status, setStatus]   = useState('idle') // idle | loading | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function validate() {
    const errs = {}
    if (!fields.name.trim())    errs.name    = 'Name is required'
    if (!fields.email.trim())   errs.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email))
                                errs.email   = 'Enter a valid email address'
    if (!fields.message.trim()) errs.message = 'Message is required'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(fields),
      })
      if (res.ok) {
        setStatus('success')
        setFields({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return { fields, errors, status, handleChange, handleSubmit }
}
