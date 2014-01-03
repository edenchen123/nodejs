var posts = [
    {
        "id": "1",
        "title": "Lorem ipsum",
        "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id": "2",
        "title": "Sed egestas",
        "text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
];

exports.posts=function(req,res){
    res.json(posts);
};

exports.getPost = function(req,res){
    var id = req.params.id;
    if(id){
        var post = {};
        posts.forEach(function(p,i){
            if(p.id == id){
                res.json(p);
            }
        });
    }else{
        res.json(false);
    }
};
