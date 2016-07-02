import JWT from 'jsonwebtoken';

function jwtValidate(options) {
  return async function validate(ctx, next) {
    if (ctx && ctx.header && ctx.header.authorization) {
      const authComponents = ctx.header.authorization.split(' ');
      if (authComponents.length === 2 && authComponents[0] === 'Bearer') {
        ctx.passport = {
          user: await JWT.verify(authComponents[1], options.secret, options.jwtOpts)
        };
      }
    }
    return next();
  };
}
module.exports = jwtValidate;
