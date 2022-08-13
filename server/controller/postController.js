const axios = require("axios");


exports.index = (req,res) => {
    console.log(process.env.APP_URL);
    axios.get(process.env.APP_URL + "/api/posts")
    .then(result => res.render('index', {posts: result.data}))
    .catch(err => res.send(err));
}

exports.create = (req, res) => {
    res.render("create");
}

exports.edit = (req, res) => {
    const id = req.params.id;
    axios.get(process.env.APP_URL + "/api/posts/"+id)
    .then(data => {
        res.render("edit", {post: data.data});
    })
    .catch(err => {
        res.send("your have errors" + err);
    })
}