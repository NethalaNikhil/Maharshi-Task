const BASE_URL = "http://localhost:8080/api/employees"; // backend api

//get
export async function getEmployees(){
    const res = await fetch(BASE_URL);
    return res.json();
}

//post
export async function addEmployeer(employee){
    const res = await fetch(BASE_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"}, // telling backend we are sending json type
        body: JSON.stringify(employee), // convert js objecct into json string for http body
    });
    return res.json();
}

//put
export async function updateEmployee(id,employee){
    const res = await fetch (`${BASE_URL}/${id}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(employee),
    });
    return res.json();
}

//DELETE
export async function deleteEmployee(id){
    await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE",
    });
}



