import * as express from "express";
/**
 * @param {import('probot').Probot} app
 */
export default (app, { getRouter }) => {
    app.on("issues.opened", async (context) => {
        app.log.info('.................................issue opened..............'+context);
      });
      app.on("issues.closed", async (context) => {
        app.log.info('.................................issue closed..............'+context);
      });
    // Get an express router to expose new HTTP endpoints
    const router = getRouter("/RallyAppTest");
  
    // Use any middleware
    router.use(express.static("public"));
  
    // Add a new route
    router.get("/hello-world", (req, res) => {
      res.send("Hello World");
    });
  };