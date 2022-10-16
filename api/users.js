
const axios = require('axios');

module.exports = (req, res) => {

    const helloWord = ()=>{
            axios.get('https://api.telegram.org/bot5509477086:AAElj-pA5Zg9KGT9AcrV--uPwK-OxF6peUg/sendMessage?chat_id=-802012750&text=Ejecutando Intervalo nuevo desde vercel').then(resp => {
    
                console.log(resp.data);
            });
    }

    helloWord()

    setInterval(()=>{
        helloWord()
    },5000)

    if (req.method  === "GET"){
         
   
        res.send(
            {name:"manuel 3", location: "bogota" , message: resp.data}
        )
    }else{
        const {name, location} = req.body;

        res.send({status: "User created", name, location})
    }

    
}