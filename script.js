

async function ambilData(phones){
    let apiPhones = `https://api-mobilespecs.azharimm.site/v2/brands/${phones}`;
    await fetch(apiPhones)
	    .then(response => response.json())
        .then(response => {
            let card = null;
            console.log(response.data.phones.length);
            document.getElementById(`hasil`).innerHTML = '';
            for(let i = 0; i < response.data.phones.length; i++){
                const image = document.createElement(`img`);
                const namaProduk = document.createElement('p')
                
                image.src = response.data.phones[i].image;
                namaProduk.innerText = response.data.phones[i].phone_name;
                

                //console.log(image);
                
                document.getElementById(`hasil`).append(image, namaProduk);    
            }
            
        })
	    .catch(err => console.error(err));
};

document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById(`hasil`).addEventListener('change', () => {
        
    });
    ambilData(document.getElementById(`brand`).value);
    
});

