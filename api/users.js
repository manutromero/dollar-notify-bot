
const axios = require('axios');

module.exports = (req, res) => {

    if (req.method  === "GET"){

        setInterval(()=>{
            res.send(
                {name:"manuel", location: "bogota" }
            )
            axios.get('https://api.telegram.org/bot5509477086:AAElj-pA5Zg9KGT9AcrV--uPwK-OxF6peUg/sendMessage?chat_id=-802012750&text=Ejecutando Intervalo desde server').then(resp => {

                console.log(resp.data);
            });
        },5000)


    }else{
        const {name, location} = req.body;

        res.send({status: "User created", name, location})
    }

    
}