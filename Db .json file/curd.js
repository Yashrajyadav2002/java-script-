let FatchData=async()=>{
    let url ='http://localhost:3000/carrent'
    let res = await fetch(url,{method:"GET"})

    let data = await res.json()

    DataShow(data)
}


let search= async()=>{
    let searchinp = document.querySelector("#searchinp").value.toLowerCase()

    let url = 'http://localhost:3000/carrent'

    let res= await fetch(url)
    let data= await res.json()

    let FilterData= data.filter((e)=>{
        return e.name.toLowerCase().includes(searchinp)
    })
    DataShow(FilterData)

}
    let DataShow=(data)=>{
    let show= document.querySelector("#display");
    show.innerHTML=""
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
// let confirm=(id)=>{

//     Swal.fire({

//         title:"Are you sure",
//         text:"You wont't be able to revert this",
//         icon:"Warning",
//         shwcancelButton: true,
//         confirmButtonColor:"#3005d6",
//         cancelButtonColor:"#d33",
//         confirmbuttonText:"yes,delete it!"
//     }).than((result)=>{
//         if(result.isconfirmed){
//             Del(id)
//             Swal.fire({
//                 title: "Deleted",
//                 text: "Your faile has been deteted",
//                 icon: "Success"
//             });
//         }
//     });
// }

let del=(id)=>{
    fetch(`http://localhost:3000/carrent/${id}`,{method:"DELETE"})
}

FatchData();

// let ins=()=>{

//     let name=document.querySelector("name").value
//     let age=document.querySelector("age").value
//     let mobile=document.querySelector("mobile").value
//     let adhar=document.querySelector("adhar").value
//     let checkin=document.querySelector("checkin").value
//     let checkout=document.querySelector("checkout").value
//     let city=document.querySelector("city").value
//     let people=document.querySelector("people").value


//     let url='http://localhost:3000/carrent'

//     fetch(url ,{
//         method:"POST",
//         headers:{
//             "content-type":"application/json"
//         },

//         body: JSON.stringify(
//             {
//                name:name,
//                age:age,
//                mobile:mobile,
//                adhar:adhar,
//                checkin:checkin,
//                checkout:checkout,
//                city:city,
//                people:people,

//             }

//         )
//     })


//     location.href="index.html"
//     return false

// };



