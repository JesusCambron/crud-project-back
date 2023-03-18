export const isString = (value) => {
  if (typeof value !== 'string' || !string instanceof String) return false
  return true
}

export const isEmpty = (value) => {
  value = value.trim();
  if (value === "") return true;
  return false;
}

export const isMaxLength = (max, value) => {
  if (value.length <= max) return true;
  return false
}

export const isMinLength = (min, value) => {
  if (value.length >= min) return true;
  return false
}

export const isMinMaxLength = (min, max, value) => {
  if (isMaxLength(max, value) && isMinLength(min, value)) return true;
  return false
}

