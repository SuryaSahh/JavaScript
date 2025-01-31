// singleton  => using constructor
const user=new Object() // {} => singleton object
const user2={} // {} => non-singleton object

user2.id="123abc"
user2.name="surya"
user2.isLoggedIn = false
console.log(user2)

const user3={ //object
    email:"suryasah09@gmail.com",
    fullname :{  //object
        userfullname : {   //object
            fname : "surya",
            lname :"sah"
        }
    }
}
console.log(user3.fullname.userfullname)

// ***********combine objects*********
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

// Corrected merging methods:
const obj3 = { ...obj1, ...obj2 };  // Using spread operator (Best)
const obj4 = Object.assign({}, obj1, obj2);  // Using Object.assign()
const obj5 = { ...obj1, ...obj2 };  // Spread operator (Same as obj3)

console.log("obj3:", obj3);
console.log("obj4:", obj4);
console.log("obj5:", obj5);

// Storing all keys, values, and entries in an array
console.log("Keys:", Object.keys(obj5)); // [ '1', '2', '3', '4' ]
console.log("Values:", Object.values(obj5)); // [ 'a', 'b', 'c', 'd' ]
console.log("Entries:", Object.entries(obj5)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// Check if the property exists
console.log(obj5.hasOwnProperty("4")); // true


// ***************Destructuring of Objects*********
const course = {
    cname: "js",
    price: 999,
    cInstructure: "surya"
};

// Normal Access
console.log(course.cInstructure);

// Destructuring
const { cInstructure } = course;
console.log(cInstructure);

// Destructuring with alias
const { cInstructure: inst } = course;
console.log(inst);

// *****Like in React - Props Destructuring*******
const navbar = ({ company }) => {
    console.log(`Company: ${company}`);
};

// Correct function call
navbar({ company: "surya" });
