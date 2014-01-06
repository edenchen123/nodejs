var primaryLog = [{
    "level":"INFO",
    "timestamp":"2014-01-06T02:14:46.938Z",
    "message":"127.0.0.1 - - AAAAAAAAAAAAAAAVBBBBB"
},
    {
        "level":"INFO",
        "timestamp":"2014-01-06T02:14:46.938Z",
        "message":"127.0.0.1 - - BBBBBBBBBBBBBBBBBBBBBAAAAAA"
    },
    {
        "level":"INFO",
        "timestamp":"2014-01-06T02:14:46.938Z",
        "message":"127.0.0.1 - - CCCCCCCCCCCCCCCCCCCCCCCCCCBBBBBBBBBBBBBBB"
    },{
        "level":"INFO",
        "timestamp":"2014-01-06T02:14:46.938Z",
        "message":"127.0.0.1 - - DDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEE"
    },
    {
        "level":"INFO",
        "timestamp":"2014-01-06T02:14:46.938Z",
        "message":"127.0.0.1 - - FFFFFFFFFFFFFFFFFFFFFFFEEEEEEEEEEEEEEEEEEE"
    }];

exports.getLog=function(req,res){
    var type = req.params.type;
    res.json(primaryLog);
};
