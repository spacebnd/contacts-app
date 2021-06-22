export const CONTACT_CARD_FIELDS = [
  {
    model: 'name',
    icon: 'mdi-account',
    fieldType: 'text-field',
  },
  {
    model: 'phone',
    icon: 'mdi-phone',
    fieldType: 'text-field',
  },
  {
    model: 'birthday',
    icon: 'mdi-calendar-today',
    fieldType: 'date-picker',
  },
  {
    model: 'email',
    icon: 'mdi-email',
    fieldType: 'text-field',
  },
  {
    model: 'company',
    icon: 'mdi-briefcase',
    fieldType: 'text-field',
  },
  {
    model: 'notes',
    icon: 'mdi-pencil',
    fieldType: 'text-area',
  },
]

export const THEMES = {
  light: {
    primary: '#14b64a',
    secondary: '#176a93',
    accent: '#c9ab0e',
    error: '#e50c0c',
  },
  dark: {
    primary: '#3b423d',
    secondary: '#032739',
    accent: '#473d07',
    error: '#3b0d0d',
  },
}
