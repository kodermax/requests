let Url = {};
Url.encodeQueryData = (data) => {
  var ret = [];
  for (var d in data) {
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }
  return ret.join('&');
};

module.exports = Url;
