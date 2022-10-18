
const axios = require('axios');

module.exports =async (req, res) => {

            let responseDollar;



            await axios.get(`https://www.datos.gov.co/resource/ceyp-9c7c.json?vigenciahasta=2022-10-18T00:00:00.000`).then(response => {
                responseDollar = response.data
               
            });


            await axios.get(`https://api.telegram.org/${process.env.TELEGRAM_HASH}/sendMessage?chat_id=${process.env.CHANNEL_ID}&text=Pruebas desde vercel y github`).then(resp => {
    
                console.log(resp.data);

                res.send(
                    {name:"Manuel Romero", location: "bogota" , message: resp.data, responseDollar: responseDollar}
                )
            });

}