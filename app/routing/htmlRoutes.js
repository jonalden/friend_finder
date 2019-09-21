
app.post("/survey", function(req, res) {

})

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../../app/public/home.html"));
})