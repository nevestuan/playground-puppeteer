const { sgCarMart } = require("../services");

/*
 * call other imported services, or same service but different functions here if you need to
 */
const login = async (req, res, next) => {
  console.log("controller");
  try {
    await sgCarMart.login();
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  login
};
