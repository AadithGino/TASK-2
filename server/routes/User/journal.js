const express = require("express");
const router = express.Router();
const journal = require("../../controller/journalController")

// add book
router.route("/add-journal").post(journal.addJournal)

//get books
router.route("/get-journals").get(journal.getJournals)

//graph
router.route("/graph-journal").get(journal.getGraph)


module.exports = router;
