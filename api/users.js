
module.exports = (req, res) => {
    if (req.method  === "GET"){

        setTimeout((index)=>{
            res.json([
                {name:"manuel", location: "bogota", index: `${index}` }
            ])
        },100)

        
    }else{
        const {name, location} = req.body;

        res.send({status: "User created", name, location})
    }

    
}