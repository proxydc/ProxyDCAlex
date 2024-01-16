const { Router } = require("express");
const controller = require("./controller");
const router =  Router();
router.post("/", controller.getAuthentification);
router.get("/", controller.getAccounts);
router.post("/add", controller.addAccount);
router.get("/:id", controller.getAccountById);
router.put("/:id", controller.updateAccount);
router.delete("/:id", controller.deleteAccountById);

module.exports = router;