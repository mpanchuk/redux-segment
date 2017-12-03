function getGroupProperties () {
  return [ 'groupId', 'traits', 'options' ]
}

function validateGroupFields (fields: Object) {
  if (!fields.groupId) return new Error('missing groupId field for EventTypes.alias')

  return null
}

function extractFields (obj: Object, keys: Array) {
  return keys.map(key => key === 'traits' ? obj[key] || {} : obj[key])
}

function extractGroupFields (fields: Object) {
  const props = getGroupProperties(fields)

  const err = validateGroupFields(fields)
  if (err) return err

  return extractFields(fields, props)
}

export {
  extractGroupFields
}
