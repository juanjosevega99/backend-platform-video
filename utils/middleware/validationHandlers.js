function validate() {
  return false;
}

function validationHandler(shcema, check = 'body') {
  return function (req, res, next) {
    const error = validate(req[check], schema);

    error ? next(new Error(error)) : next();
  };
}

module.exports = validationHandler;
