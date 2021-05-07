/*the first line is the api get that will get generated when you login into the cricApi system*/
const Api_Key ="StAnVQxry7SI4RxBA2VWnhwgKSk2"

export const getMatches =() =>{
    const url =` https://cricapi.com/api/matches?apikey=${Api_Key}`;
/*you can also use axios but here I used fetch*/
    return  fetch(url)
            .then((response)=> response.json())
            .catch((error)=>console.log("ERROR :",error))
            
}

export const getMatchDetails=(id)=>{
    const url = ` https://cricapi.com/api/cricketScore?apikey=${Api_Key}&unique_id=${id}`;

    return  fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log("ERROR :", error))
}
