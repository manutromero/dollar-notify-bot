
const axios = require('axios');

module.exports = (req, res) => {

    const helloWord = async ()=>{
            await axios.get('https://api.telegram.org/bot5509477086:AAElj-pA5Zg9KGT9AcrV--uPwK-OxF6peUg/sendMessage?chat_id=-802012750&text=Se envia cada 10 minutos').then(resp => {
    
                console.log(resp.data);

                res.send(
                    {name:"manuel 3", location: "bogota" , message: resp.data}
                )
            });
    }

    helloWord()

    setInterval(()=>{
        helloWord()
    },600000)


    
}