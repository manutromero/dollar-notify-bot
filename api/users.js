
module.exports = (req, res) => {


    if (req.method  === "GET"){

        setTimeout(()=>{
            res.send(
                {name:"manuel", location: "bogota", index: `${candles}` }
            )
        },1000)


    }else{
        const {name, location} = req.body;

        res.send({status: "User created", name, location})
    }

    
}