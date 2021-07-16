'use-strict'

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


const pro = new Promise((resolve,reject) => {
    
     
    setTimeout(() => {
      let arr = [1,2,3,4,5]
      resolve(arr)
      reject('iam not getting data')
    }, 2000)

})
const pro4 = new Promise((resolve,reject) => {
    
     
    setTimeout(() => {
      let arr = [6,7,8,9,10]
      resolve(arr)
      reject('iam not getting data')
    }, 3000)

})
// excutor
const pro5 = new Promise((resolve,reject) => {
    
     
    setTimeout(() => {
      let arr = [11,12,13,14,15]
      resolve(arr)
      reject('iam not getting data')
    }, 4000)

})

const pro1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let obj = {
                name: "ramesh",
                age: 24
            }
            resolve(`${obj.name} ${obj.age}`)
            reject('there is no data availble')
        }, 5000)
        
       

    })
}
const pro2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let obj1 = {
                name: "pramish",
                age: 23
            }
            resolve(`${obj1.name} ${obj1.age}`)
            reject('there is no data availble')
        }, 6000)
        
       

    })
}
const pro3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let obj3 = {
                name: "santosh",
                age: 23
            }
            resolve(`${obj3.name} ${obj3.age}`)
            reject('there is no data availble')
        }, 7000)
        
       

    })
}


// pro
// .then((res) => {
//     console.log(res) 
//     return pro1()
// })
// .then((rj) => {
//     console.log(rj)
//     return pro2()
// })
// .then((pramish) => {
//     console.log(pramish)
//     return pro3()
// })
// .then((santosh) => {
//     console.log(santosh)
//     return pro4
// })
// .then((four) => {
//     console.log(four)
//     return pro5
// })
// .then((five) => {
//     console.log(five)
    
// })


// .catch((err) => {console.log(err)})

// Promise.all([pro,pro4,pro5,pro1(),pro2(),pro3()]).then((res) => {console.log(res)})

// pro.then((res) => {console.log(res)})
// pro4.then((res) => {console.log(res)})
// pro5.then((res) => {console.log(res)})
// pro1().then((res) => {console.log(res)})
// pro2().then((res) => {console.log(res)})
// pro3().then((res) => {console.log(res)})



//async/await

// const fun = async() => {
//     const one = await pro
//     console.log(one)
//     const four = await pro4
//     console.log(four)
//     const five = await pro5
//     console.log(five)
//     const dudhmam = await pro1()
//     console.log(dudhmam)
//     const two = await pro2()
//     console.log(two)
//     const three = await pro3()
//     console.log(three)
  
   
// }

  
// fun()


//synchronous/asynchronous

// const hello = () => {
//     console.log('hello is staring')
//     hello1()
//     console.log('hello is ending')
// }
 
// const hello1 = () => {
//     setTimeout(() => {
//         console.log('hello1 is staring')
//     }, 3000)
// }

// hello()

// const hello2 = async() => {
//     // const axios = require('axios').default
//     // fetch('https://jsonplaceholder.typicode.com/posts', {
//     //     method: 'GET'
//     // }).then((response) => {
//     //     console.log(response.data)
//     // })
//     // axios.get('https://jsonplaceholder.typicode.com/posts')
//     // .then((response) => {console.log(response)})
    
//     try {
//         let arr = await fetch('https://jsonplaceholder.typicode.com/posts', {
//             method: 'GET'
//         })
//         console.log(arr)
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// hello2()





//higher order function

// const hello = (name) => {
//     if(name === 'ramesh') {
//     return function (age) {
//             // let age = 24
//             console.log(`${name} ${age}`)
//         }
//     }
//     if(name === 'pramish') {
//     return function (age) {
//             // let age = 23
//             console.log(`${name} ${age}`)
//         }
//     }
//     if(name === 'santosh') {
//     return function (age) {
//             // let age = 23
//             console.log(`${name} ${age}`)
//         }
//     }
// }   

// // hello('ramesh')()
// const hel = hello('ramesh')
// hel(24)


// variable and function hoisting
// for variable keeping all the initialized variables top of the js files or top of where the variable is called.
 // hoisting normally means that taking every function() and keeping then after the that particular function has been initialized.
 // hoisting works only for normal functions eg;- function hello() {}, doesn't work for arrow functions or functions that are initialized in variable.

 helper()

function helper() {
    console.log('hello')
}

// upper function call () is brougt back to down to by js with the help of hoisting.
//eg;- after hoising or during compiled helper() is brougt back to line 252 or down by js automatically.
