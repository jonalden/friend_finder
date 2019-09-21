const express = require("express");
const path = require("path");

const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let friendArr = [
    {
        name: "Jon Alden",
        photo: "wdjdhjshda.jpg",
        scores: [2, 3, 5, 1, 4]
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/app/public/home.html"));
})

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/app/public/survey.html"));
})

app.get("/api/friends", function (req, res) {
    return res.json(friendArr);
})

app.post("/api/friends", function (req, res) {
    let newFriend = req.body;
    console.log(newFriend);

    friendArr.push(newFriend);

    res.json(newFriend);

})

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});