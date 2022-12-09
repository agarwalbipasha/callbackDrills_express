const express = require("express");
const router = express.Router();
const data = require("../data.json");

router.get("/", (req, res) => {
  res.send(data);
});

router.get("/:id", (req, res) => {
  let result = data.employees.filter(
    (employee) => employee.id == req.params.id
  );
  result =
    result.length > 0 ? result : `Employee ID ${req.params.id} not found`;
  res.send(result);
});

module.exports = router;
