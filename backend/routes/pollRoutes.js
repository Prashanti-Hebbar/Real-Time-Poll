const express = require("express");
const router = express.Router();
const Poll = require("../models/Poll");

// Create a new poll
router.post("/", async (req, res) => {
  try {
    const { question, options } = req.body;
    if (!question || options.length < 2) {
      return res.status(400).json({ message: "Invalid Poll" });
    }

    const poll = new Poll({
      question,
      options: options.map((opt) => ({ text: opt })),
    });

    await poll.save();

    res.json({ pollId: poll._id });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get poll details

router.get("/:id", async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);

    if (!poll) {
      return res.status(404).json({ message: "Poll not found" });
    }

    res.json(poll);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Vote on a poll (with fairness mechanisms)
router.post("/:id/vote", async (req,res)=>{
    try {
        const { optionIndex, voterId } = req.body;
        const poll = await Poll.findById(req.params.id);

        if(!poll) {
            return res.status(404).json({ message: "Poll not found" });
        }

        if (
  optionIndex === undefined ||
  optionIndex < 0 ||
  optionIndex >= poll.options.length
) {
  return res.status(400).json({ message: "Invalid option selected" });
}

        const ip =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

        // Fairness mechanism 1: VoterId restriction
        if (poll.voters.includes(voterId)){
            return res.status(403).json({ message: "Already votes (ID)"});
        }

        // Fairness mechanism 2: IP address restriction
        if (poll.ipAddresses.includes(ip)){
            return res.status(403).json({ message: "Already voted (IP)"});
        }

        poll.options[optionIndex].votes += 1;
        poll.voters.push(voterId);
        poll.ipAddresses.push(ip);

        await poll.save();

        // Real-time update
        const io = req.app.get("io");
        io.to(req.params.id).emit("updateResults", poll);

        res.json(poll);

    } catch (error) {
        console.error("Vote Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;