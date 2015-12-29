function validateTrackFields(fields: Object, actionType: string) {
  if (typeof actionType !== 'string' && !fields.event) {
    return new Error('missing event field for EventTypes.track');
  }

  return null;
}

function getTrackProperties() {
  return [ 'event', 'properties' ];
}

function extractFields(obj: Object, keys: Array, actionType: string) {
  return keys.map(key => key === 'event' ? obj[key] || actionType : obj[key]);
}

function extractTrackFields(fields: Object, actionType: string) {
  const props = getTrackProperties(fields);

  const err = validateTrackFields(fields, actionType);
  if (err) throw err;

  return extractFields(fields, props, actionType);
}


export {
  extractTrackFields,
};