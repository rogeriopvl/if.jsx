module.exports = function If (condition) {
  return function (children) {
    if (condition) {
      return children
    }
  }
}
