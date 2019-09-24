const friendsArr = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friendsArr);
    })

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        let newScores = newFriend.scores;
        console.log("new", newScores);

        let userDistance = 0;
        let lowestIndex;
        let lowestDistance;
        console.log(friendsArr);

        for (let i = 0; i < friendsArr.length; i++) {
            let allUserScores = friendsArr[i].scores;

            console.log("all", allUserScores);
            userDistance = 0;

            for (let j = 0; j < allUserScores.length; j++) {
                let distance = Math.abs(newScores[j] - allUserScores[j]);
                userDistance += distance;
            }
            console.log(userDistance);

            if (!lowestDistance && lowestDistance !== 0) {
                lowestDistance = userDistance;
                lowestIndex = Number(i);
            }
            else if (userDistance < lowestDistance) {
                lowestDistance = userDistance;
                lowestIndex = Number(i);
            }
        }

        let closestFriend = friendsArr[lowestIndex];
        friendsArr.push(newFriend);
        res.json(closestFriend);
        console.log("closest match", closestFriend);



    })
}