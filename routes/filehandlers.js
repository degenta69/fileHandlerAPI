var express = require("express");
const deleteFile = require("../middlewares/deleteFile");
const copyFileReq = require("../middlewares/copyFile");
const createFile = require("../middlewares/createFile");
const moveFile = require("../middlewares/moveFile");
const readFileReq = require("../middlewares/readFile");
const renameFile = require("../middlewares/renameFile");
const writeFile = require("../middlewares/writeFile");
var router = express.Router();

/* GET home page. */
router.get("/copy", copyFileReq);
router.get("/create", createFile);
router.get("/delete", deleteFile);
router.get("/move", moveFile);
router.get("/read", readFileReq);
router.get("/rename", renameFile);
router.get("/write", writeFile);

module.exports = router;
