const BASE_URL = "http://localhost:8080/api/departments";
export async function getDepartments(){
    const res = await fetch(BASE_URL);
    return res.json();
}
//post
export async function addDepartment(department){
    const res = await fetch(BASE_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"}, // telling backend we are sending json type
        body: JSON.stringify(department), // convert js objecct into json string for http body
    });
    return res.json();
}

//put
export async function updateDepartment(id,department){
    const res = await fetch (`${BASE_URL}/${id}`,{
        method: "PUT",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(department),
    });
    return res.json();
}

//Delete
export async function deleteDepartment(id){
    await fetch(`${BASE_URL}/${id}`,{
        method:"DELETE",
    });
}

