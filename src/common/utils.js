import { CONTACT_CARD_FIELDS } from './constants.js'
import defaultUserLogo from '../assets/images/default-user-logo.png'

export const generateEmptyContactTemplate = () => {
  const template = {}
  CONTACT_CARD_FIELDS.forEach((field) => {
    template[field.model] = ''
  })

  template.photo = defaultUserLogo

  return template
}

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      resolve(reader.result)
    }
    reader.readAsDataURL(file)
  })
}
