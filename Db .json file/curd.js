let FatchData=async()=>{
    let url ='http://localhost:3000/carrent'
    let res = await fetch(url,{method:"GET"})

    let data = await res.json()

    let show= document.querySelector("#display");
    data.map((e)=>(
        show.innerHTML+=
        `<tr>
           <td>${e.name}</td>
           <td>${e.age}</td>
           <td>${e.adharno}</td>
           <td>${e.checkin}</td>
           <td>${e.checkout}</td>
           <td>${e.city}</td>
           <td>${e.mobileno}</td>
           <td> <button onclick="del('${e.id}')">delete</button></td>
        </tr>`
    )

    
)}



FatchData();