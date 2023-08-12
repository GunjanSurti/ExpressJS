function apiKey(req, res, next) {
  const api_key = "123456";
  console.log(req.query.api); // this will log 'api' which is entered in url
  const userApiKey = req.query.api;

  if (userApiKey && userApiKey === api_key) {
    next();
  } else {
    res.json({ message: "Not Allowed!" });
  }

  //   http://localhost:3000/en/api/products?api=1364643516431654  this is request form Chrome
  //   { api: '1364643516431654' }
}
module.exports = apiKey;

//   next();
// this will call next middleware
// necessary to call or our request will hang
// we get req.body when we do post request
// but we need wuery string so we do req.query
// there can be many middleware btw req and res
