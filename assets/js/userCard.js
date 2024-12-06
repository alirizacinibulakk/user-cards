const userCards = document.querySelector(".userCard-container");


async function init(){
    const userDatas = await fetch("https://dummyjson.com/users")
    .then(res => res.json())
    for (const user of userDatas.users) {
        userCards.innerHTML += 
        `
        <ul class= "user-cards">
            <li class= "user-img"><img src="${user.image}" alt=""></li>
            <li class= "user-name">${user.username} | ${user.firstName} ${user.lastName}</li>
            <li><strong>Age: </strong>${user.age}</li>
            <li><strong>Mail: </strong>${user.email}</li>
            <li><strong>Phone: </strong>${user.phone}</li>
            <li><strong>Company name: </strong>${user.company.name} -- ${user.company.department}</li>
            <li><strong>Adress: </strong>${user.address.address} -- ${user.address.city} / ${user.address.state}</li>
        </ul>
        `
    }
}

init();