var Post = require("../model/post");

//create and save new user
exports.store = (req,res) => {
    //validate request
    if(!req.body) {
        res.status(400).send({message: "content cannot be empty!!!"});
        return;
    }
    //new post
    const post = new Post({
        date: req.body.date,
        body: req.body.body 
    })
    //save user in the database
    post.save(post)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while creating"}))
}

// retrive and return all posts
exports.find = (req, res) => {
    Post.find()
    .then(post => res.send(post))
    .catch(err => res.status(500).send({message: err.message || "Some error occurred while finding"}));
}

exports.show = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
    .then(post => res.send(post))
    .catch(err => res.status(500).send({message: "Error occurred in updating the post"}))
}

// update posts by id
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({message: "You need to fill all fields"});
    }
    const id = req.params.id;
    Post.findByIdAndUpdate(id, req.body)
    .then(post => {
        if(!post) {
            res.status(404).send({message: `You requested ${id} is not found`});
        } else {
            res.send(post);
        }
    })
    .catch(err => res.status(500).send({message: "Error occurred in updating the post"}));
}

exports.delete = (req,res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
    .then(post => {
        if(!post) {
            res.status(404).send({message: `${id} is no longer exist`});
        } else {
            res.send({message: "post deleted successfully"});
        }
    })
    .catch(err => res.status(500).send({message: "Cannot delete "+id}));
}

