const store = require("../utils/store.js");

const windowSize = 60 * 1000;
const maxReq = 5;

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!store.has(ip)) {
    store.set(ip, {
      count: 1,
      startTime: currentTime,
    });
    console.log(store);
    next();
  }

  const requestData = store.get(ip);

  if (currentTime - requestData.startTime < windowSize) {
    requestData.count += 1;
    console.log(store)
    if (requestData.count > maxReq) {
      res.status(429).json({
        message: "Too many requests. Please try again later.",
      });
    }
  } else {
    store.delete(ip);
    // reset window
    console.log(store);
    requestData.count=1;
    requestData.startTime=currentTime;
    next();
  }

  store.set(ip,requestData);
  next();
}

module.exports=rateLimiter;