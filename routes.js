module.exports = {
  "get": {
    "/hello": require("./controllers/helloController").getAction
  },

    "post": {
        "/hello": require("./controllers/helloController").postAction
    }
};
