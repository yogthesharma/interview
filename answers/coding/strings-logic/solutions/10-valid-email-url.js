function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidUrl(url) {
  return /^https?:\/\/[^\s/$.?#].[^\s]*$/i.test(url);
}

module.exports = { isValidEmail, isValidUrl };
