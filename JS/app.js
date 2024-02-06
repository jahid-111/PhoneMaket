console.log("app.js is ACTIVE FILE")




    const loadPhones = async(searchText) => {

            const url =  ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            displayPhone(data.data)

    }
    // loadPhones()



    const displayPhone = phones => {
        const phoneContainer = document.querySelector(".phoneContainer")
        // console.log(phoneContainer)
        phoneContainer.textContent = ''

        phones =  phones.slice(0,2);

        if(phones.length === 0) {
            NoPhoneFound.classList.remove("d-none")
        }else{
            NoPhoneFound.classList.add("d-none")
        }


        phones.forEach(phone => {
            console.log(phone)
            const phoneDiv = document.createElement("div")
            phoneDiv.classList.add("col")
            phoneDiv.innerHTML = `
                <div class="card rounded">
                    <img src="${phone.image}" class="card-img-top p-3" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">$${phone.phone_name}</h5>
                        <p class="card-text">
                            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                    </div>
                </div>
            `;

            phoneContainer.appendChild(phoneDiv);
        });        
    }



    document.getElementById('searchBtn').addEventListener('click', function(){

        const inputSearch = document.getElementById('inputSearch');
        const inputSearchValue = inputSearch.value;

        // console.log(inputSearchValue)

        loadPhones(inputSearchValue)


    })





