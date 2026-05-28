async function reza() 
{
    let res = await fetch("./weather.json")
    let data = await res.json()
        data.forEach(item => 
        {
            
            document.querySelector(".location").textContent = item.location
            document.querySelector(".country").textContent = item.country
            document.querySelector(".tempeature").textContent = item.tempeature

        });
    
}
reza()