const helpers = {};

helpers.chain = async (self, _functions) => {
  let result = null;
  for (let i = 0; i < _functions.length; i++) {
    const func = _functions[i];
    result = self ? await self[func]() : await func();
  }
  return result;
};
module.exports = helpers;
