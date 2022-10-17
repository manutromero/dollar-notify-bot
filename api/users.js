
const axios = require('axios');

module.exports =async (req, res) => {

            await axios.get(`https://api.telegram.org/${process.env.TELEGRAM_HASH}/sendMessage?chat_id=${process.env.CHANNEL_ID}&text=Este mensaje se dejara como prueba y se enviara cada hora`).then(resp => {
    
                console.log(resp.data);

                res.send(
                    {name:"Manuel Romero", location: "bogota" , message: resp.data}
                )
            });
    

}