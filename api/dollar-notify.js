
const axios = require('axios');

module.exports =async (req, res) => {

            let responseDollar;
            let responseDollarYesterday;


            let Day = new Date().getDate()
            let month = new Date().getMonth() + 1
            let year = new Date().getFullYear()


          const vigenciadesde =  await axios.get(`https://www.datos.gov.co/resource/ceyp-9c7c.json?vigenciahasta=${year}-${month}-${Day}T00:00:00.000`).then(response => {

                responseDollar = response.data
                               
                let vigenciadianterior = new Date(response.data[0].vigenciadesde).getDate() - 1 

                return vigenciadianterior
            });

            
            await axios.get(`https://www.datos.gov.co/resource/ceyp-9c7c.json?vigenciahasta=${year}-${month}-${vigenciadesde}T00:00:00.000`).then(response => {
             
                responseDollarYesterday = response.data
                               
              

            });

            let dolarHoy = responseDollar[0].valor
            let dolarAyer = responseDollarYesterday[0].valor

            if(dolarHoy < dolarAyer){

                await axios.get(`https://api.telegram.org/${process.env.TELEGRAM_HASH}/sendMessage?chat_id=${process.env.CHANNEL_ID}&text=El Dolar hoy esta mas barato que la utlima tarifa vigente.



                
                Intenta pagar tus tarjetas :): 
                
                

                    -- Dolar Hoy ${dolarHoy} $USD. 
                    -- Ultima tarifa vigente: ${dolarAyer} $USD`
                
                
                ).then(resp => {
    
               
                    res.send(
                        { messageTelegram: resp.data, responseDollar: responseDollar, responseDollarYesterday:responseDollarYesterday}
                    )
                });


            }{


                             
                await axios.get(`https://api.telegram.org/${process.env.TELEGRAM_HASH}/sendMessage?chat_id=${process.env.CHANNEL_ID}&text=El Dolar hoy esta mas costoso que la utlima tarifa vigente.
                
                

                
                NO es un buen dia para pagar tus tarjetas: :(
                

                   

                 

                    -- Dolar Hoy:  ${dolarHoy} $USD.
                    -- Ultima tarifa vigente:  ${dolarAyer} $USD`
                
                 
                ).then(resp => {
               
                    res.send(
                        {messageTelegram: resp.data, responseDollar: responseDollar, responseDollarYesterday:responseDollarYesterday}
                    )
                });
            }

         

}