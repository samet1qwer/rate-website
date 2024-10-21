const miktar=document.getElementById("input")
const birim1=document.getElementById("birim1")
const birim2=document.getElementById("birim2")
const sonuç=document.getElementById("sonuç")



function runEventListener() 
{
    miktar.addEventListener("input",exchange)   
}
function exchange() 
{
    let girilenMiktar=Number(miktar.value.trim())
    let paraBirimi=birim1.value
    let paraBirimi2=birim2.value

    fetch(`https://api.currencyapi.com/v3/latest?apikey=fca_live_3lKq1jnAsMAeOS3EP9yJ0lI283VwBeh8dbf9OO4l&base_currency=${paraBirimi}`)
    .then((response)=>response.json())
    .then((result)=>{
        // console.log(result.data[paraBirimi2].value)
        const value= result.data[paraBirimi2].value*girilenMiktar
        // console.log(value)
        sonuç.value=value
    })
    .catch((err)=>console.log(err))
}
runEventListener()