
module.exports = (req, res) => {
    if (req.method  === "GET"){

        setTimeout(()=>{
            res.send(
                {name:"manuel", location: "bogota", index: `${candles}` }
            )
        },100)

        function updateCandles() {
            candles += 1;
            // recursive function, keep updating every second
            setTimeout(updateCandles, 1000);
        }
        updateCandles();
    }else{
        const {name, location} = req.body;

        res.send({status: "User created", name, location})
    }

    
}