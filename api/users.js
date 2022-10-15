
module.exports = (req, res) => {
    if (req.method  === "GET"){
        res.json([
            {name:"manuel", location: "bogota"}
        ])
    }else{
        const {name, location} = req.body;

        res.send({status: "User created", name, location})
    }
}