
const axios = require('axios');

module.exports = () => {


   const  helloWorld = ()=>{
        console.log("Hola Mundo")
    }
         
   
   
    setImmediate(()=>{
        helloWorld()
    },5000)
    // setInterval(()=>{
           
        //     axios.get('https://api.telegram.org/bot5509477086:AAElj-pA5Zg9KGT9AcrV--uPwK-OxF6peUg/sendMessage?chat_id=-802012750&text=Ejecutando Intervalo').then(resp => {
    
        //         console.log(resp.data);
        //     });
        // },5000)

  
    
}