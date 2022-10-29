const router = require("express").Router();
const indexController = require("./controllers/index.controller");
const employeeController = require("./controllers/employee.controller");
const compensationController = require("./controllers/compensation.controller");

router.route("/").get(indexController.render);

router.route("/api/employee").get(employeeController.get);
router.route("/api/employee").post(employeeController.post);

router.route("/api/compensation").get(compensationController.get);
router.route("/api/compensation/:id").put(compensationController.put);

module.exports = router;
