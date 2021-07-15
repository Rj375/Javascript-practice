'use strict'
// import hello from './new'
let newData = document.getElementById('users')


let firstname = document.getElementById('firstname')
let lastname = document.getElementById('lastname')
let email = document.getElementById('email')
let age = document.getElementById('age')
let contact = document.getElementById('contact')
let address = document.getElementById('address')


// let newUser = document.getElementById('newUser')
// let newPass = document.getElementById('newPass')
let text = document.getElementById('txt')
let text1 = document.getElementById('txt1')
let text2 = document.getElementById('txt2')
let text3 = document.getElementById('txt3')
let text4 = document.getElementById('txt4')

let arr = []

let txt = ""
// handleChange = () => {
//     var a = document.getElementById('username').value
    
//     var b = document.getElementById('password').value
     
//     x = a 
//     y = b
   
    
   
// }
// let a = 'hello iam ramesh'
// let b = 5

// console.log(a.replace("hello", "no hello"))
// let newTableRowUser = document.createElement('tr')

// let newFirstName = document.createElement('td')
//     let newLastName = document.createElement('td')
//     let newEmail = document.createElement('td')
//     let newAge = document.createElement('td')
//     let newContact = document.createElement('td')
//     let newAddress = document.createElement('td')
    


const handleSubmit = () => {
  var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  
   if(
     firstname.value === "" ||
     lastname.value === "" ||
     email.value === "" ||
     age.value === "" ||
     contact.value === "" ||
     address.value === "" 
   ) {
    text.innerText = "All the Fields are Mandatory"
    return setTimeout(() => {
      text.innerText = ""
    }, 2000)
     
   }
  
   if(firstname.value.length < 3 || lastname.value.length <  3 ) {
    text1.innerText = "First Name and Last Name must be at least 3 characters"

  return setTimeout(() => {
      text1.innerText = ""
    }, 2000)

   }
   if(!email.value.match(reg)) {
      text2.innerText = "Email must cotaint @ and ."

    return setTimeout(() => {
        text2.innerText = ""
      }, 2000)
   }
   if(age.value < 18 || age.value > 80) {
      text3.innerText = "Age must be between 18 and 80"

    return setTimeout(() => {
        text3.innerText = ""
      }, 2000)
   }
   if(contact.value.length < 10 || contact.value.length > 10) {
    text4.innerText = "Contact Number must be 10"

  return setTimeout(() => {
      text4.innerText = ""
    }, 2000)
   }
  //  else {

     var items = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      age: age.value,
      contact: contact.value,
      address: address.value,
    
    }
    
     arr.push(items)
    
     
   
     var jso = JSON.stringify(arr)
      localStorage.setItem('user', jso)
  
     
     
    //  arr = JSON.parse(localStorage.getItem('user'))
     
  
    //  console.log(...arr)
     
      // Creating new <tr></tr> tag
      // let newTableRowUser = document.createElement('tr')
      // let newTableRowPass = document.createElement('tr')
  
        // Creating new <td></td> tag
      //  newFirstName = document.createElement('td')
      //  newLastName = document.createElement('td')
      //  newEmail = document.createElement('td')
      //  newAge = document.createElement('td')
      //  newContact = document.createElement('td')
      //  newAddress = document.createElement('td')
      
  
       // Setting tr tag inside tbody
      // newData.appendChild(newTableRowUser)
      // newData.appendChild(newTableRowPass)
  
      // setting td tag inside tr 
      // newTableRowUser.appendChild(newFirstName)
      // newTableRowUser.appendChild(newLastName)
      // newTableRowUser.appendChild(newEmail)
      // newTableRowUser.appendChild(newAge)
      // newTableRowUser.appendChild(newContact)
      // newTableRowUser.appendChild(newAddress)
  
      // arr.map((row, i) => {
      //   // setting value of input field inside td tag
      // newFirstName.innerText = row.firstname
      // newLastName.innerText = row.lastname
      // newEmail.innerText = row.email
      // newAge.innerText = row.age
      // newContact.innerText = row.contact
      // newAddress.innerText = row.address
      
      // })
      
      // loadMe(getItem)
      
      firstname.value = ""
      lastname.value = ""
      email.value = ""
      age.value = ""
      contact.value = ""
      address.value = ""
  
   }
   
   
    // loadMe()
    
// }

// window.onload = loadMe = (getItem) => {
//   console.log(getItem)
// }

// var items = {
//   firstname: firstname.value,
//   lastname: lastname.value,
//   email: email.value,
//   age: age.value,
//   contact: contact.value,
//   address: address.value,

// }
// console.log(items)
// var jso = JSON.stringify(items)
 
// localStorage.setItem("user", jso)

// var get = JSON.parse(localStorage.getItem("user"))

// console.log(get)

// const lol = () => {
//   let arr = [{name: "name", age: 24}, {name: "lol", age: 23}, {name: "name", age: 22}]
 
  

//   // for (let i = 0; i < arr.length; i++) {
//   //    console.log(arr[i])
//   // }

//   // arr.map((row, i) => {
//   //     console.log()
//   // })
  
//   arr.forEach((row, i) =>{
//     console.log(row.name === "name" ? true : false)
//   })
//   var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
//   var str = "bijuli@gmail.com"

//   // var reg = new RegExp("/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/", 'i')
//    console.log(str.match(reg) ? true : false)

   
// }

// lol()

const loadMe = () => {
  //  hello()
     arr = JSON.parse(localStorage.getItem('user'))
     
     
     // setting td tag inside tr 
    
     arr.map((row, i) => {
      
      let newTableRowUser = document.createElement('tr')
      newData.appendChild(newTableRowUser)
    // newData.appendChild(newTableRowPass)
   

      let newFirstName = document.createElement('td')
        let newLastName = document.createElement('td')
        let newEmail = document.createElement('td')
        let newAge = document.createElement('td')
        let newContact = document.createElement('td')
        let newAddress = document.createElement('td')
        
    
    

    newFirstName.innerText = row.firstname
    newLastName.innerText = row.lastname
    newEmail.innerText = row.email
    newAge.innerText = row.age
    newContact.innerText = row.contact
    newAddress.innerText = row.address
    
    newTableRowUser.appendChild(newFirstName)
    newTableRowUser.appendChild(newLastName)
    newTableRowUser.appendChild(newEmail)
    newTableRowUser.appendChild(newAge)
    newTableRowUser.appendChild(newContact)
    newTableRowUser.appendChild(newAddress)
    })
     
}

window.onload = loadMe()

var arr1 = [{name: "ramesh", age: 24},{name: "lol", age: 20}]
 
var itm = {
  name: "ramesh",
  age: 23
}

// // iterable
// for(let item of arr1) {
//   console.log(item.name, item.age)
// }

// // emuration

// for(let item in itm) {
//   console.log(item == "name" ? true : false)
// }


// pass by value (primitive)
// var a = 5
// var b = a
 
// b = 10
//  console.log(a)
//  console.log(b)



// pass by reference (non-primitive type)
 
//  var ar1 = [1,2,3]  
//  var ar2 = ar1

//  ar2 = ar1.concat(4,5,6)
 
 

// console.log(ar1)
// console.log(ar2)



// Es6

// spread operator (...)
// var num = [1,2,3]
//  console.log(num)
//  console.log(...num)

// const jpt = () => {
//    console.log(a+b+c+d+e)
// }

// jpt(...num)

//  var ar1 = [1,2,3]  
 
//  var ar3 = [9,10]
//  var ar2 = [...ar1,4,5,6,7,8,...ar3,11,12]
  
//  console.log(ar1)
//  console.log(ar2)
//  console.log(ar3)

// rest parameter (...)
// var arr6 = ['a','b','c']

// const jpt = (...arr6) => {
//   var total = 0
//    for(let num1 of arr6) {
//      total += num1
//    }
//    console.log(total)
// }

// jpt(...num)

// destructuring

// var obj = {
//   name2: "ramesh",
//   age1: 24,
//   obj1: {
//     name3: 'bijuli',
//     age3: 23
//   }

// }

// var {name2, age1, obj1: {name3, age3}} = obj
// console.log(name2, age1)

// console.log(name3, age3)

//lexical scoping and closure
//  var aa = 5
// const lex = (cc) => {
//     var bb = 10
//     const lex1 = () => {
//       console.log(aa + bb + cc)
//     }
//    return lex1
    
// }


// const le = lex(5)

// le()

// promises

// fullied 
// pending
// reject

// const pro = new Promise((resolve,reject) => {
    
     
//     setTimeout(() => {
//       let arr = [1,2,3,4,5]
//       //resolve(arr)
//       reject('iam not getting data')
//     }, 2000)

// })

// pro.then((res) => {console.log(res)})
