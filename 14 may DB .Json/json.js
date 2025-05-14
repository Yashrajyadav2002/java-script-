[
    {
        "id":1,
        "name":"jhon"
    },
    
    {
        "id":2,
        "name":"yash"
    },
]

// object to JSON string

const user = {
    name : "yash",
    id :1,
    age:22,
};
console.log(user);

const data = JSON.stringify(user);
console.log(data);

// JSON to object
const updates = JSON.parse(data);
console.log(updates);

// task objects
