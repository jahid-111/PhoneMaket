console.log("app.js is ACTIVE FILE")




    const loadPhones = async(searchText,dataLimit) => {

            const url =  ` https://openapi.programming-hero.com/api/phones?search=${searchText}`
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data)
            displayPhone(data.data, dataLimit)
    }
    // loadPhones()


    // ===========================================  API TO ARRAY
    const displayPhone = (phones ,dataLimit) => {
        const phoneContainer = document.querySelector(".phoneContainer")
        phoneContainer.textContent = '';
        
        // FIRST PAGE CLICK TO SHOW ALL 
        const pageMore = document.getElementById("pageMore");
        if( dataLimit && phones.length > 10){
            phones =  phones.slice(0,10);
            pageMore.classList.remove('d-none')
        } else{
            pageMore.classList.add('d-none')
        }

        //  Search Match
        if(phones.length === 0) {
            NoPhoneFound.classList.remove("d-none")
        }else{
            NoPhoneFound.classList.add("d-none")
        }
        // PHONE DISPLAY 
        phones.forEach(phone => {
            console.log(phone)
            const phoneDiv = document.createElement("div")
            phoneDiv.classList.add("col")
            phoneDiv.innerHTML = `
            <div class="card rounded">
            <img src="${phone.image}" class="card-img-top p-3" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">
            This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
            </div>
            </div>
            `;
            phoneContainer.appendChild(phoneDiv);
        });    
        toggleLoader(false)    
    }
    
    
    // =========================================== MORE FIND (All product) FROM API
    const allProduct = (dataLimit) =>{
        toggleLoader(true)
        const inputSearch = document.getElementById('inputSearch');
        const inputSearchValue = inputSearch.value;
        loadPhones(inputSearchValue,dataLimit)
    }

    // ===========================================  FIND FROM API
    document.getElementById('searchBtn').addEventListener('click', function(){
        allProduct(10)
    })
    
    
    // ===========================================  LOADING UNTILL LOAD FROM API
    const toggleLoader = isLoading => {
        const loader = document.getElementById('loader')
        console.log(loader)
        if(isLoading){
            loader.classList.remove("d-none")
        }else{         
            loader.classList.add("d-none")
        }
    }
    
    
    // ===========================================  CLICK AND GET MORE(10+) DATA 
    document.getElementById('showAll').addEventListener("click", function(){
        allProduct()
    })


















