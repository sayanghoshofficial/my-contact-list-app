export const fetchContactData = () =>{
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = [];
    fetch(url)
    .then((response) => response.json())
    .then((contact)=> data.push(contact));

    return data;
}