const Joi = require("joi");
const pattern =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

function signUpValidation(user) {
  const schema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(pattern).min(8).required(),
    confirmpassword: Joi.string().regex(pattern).min(8).required(),
  });
  return schema.validate(user);
}

module.exports = signUpValidation;
