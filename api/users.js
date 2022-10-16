
const axios = require('axios');

module.exports = (req, res) => {

    const helloWord = async ()=>{
            await axios.get('https://api.telegram.org/bot5509477086:AAElj-pA5Zg9KGT9AcrV--uPwK-OxF6peUg/sendMessage?chat_id=-802012750&text=Este mensaje se dejara como prueba y se enviara cada hora').then(resp => {
    
                console.log(resp.data);

                res.send(
                    {name:"Manuel Romero", location: "bogota" , message: resp.data}
                )
            });
    }

    helloWord()

    setInterval(()=>{
        helloWord()
    },3600000)
}