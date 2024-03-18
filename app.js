

// Question 1

// var StudentNames = []



// Question 2

// var StudentsNames = [{}]



// Question 3

// var StringsArray = ['one','two','three']             



// Question 4

// var NumbersArray = [1,2,3]   



// Question 5

// var BooleanArray = [true, false, undefined]



// Question 6

// var MixedArray = ['one',1 , true]



// Question 7

// var EduQualifications = ['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD']

// document.write(` <h1>Qualifications:<h1/> 
// <br> 1. ${EduQualifications[0]} 
// <br> 2. ${EduQualifications[1]} 
// <br> 3. ${EduQualifications[2]} 
// <br> 4. ${EduQualifications[3]}
// <br> 5. ${EduQualifications[4]}
// <br> 6. ${EduQualifications[5]}
// <br> 7. ${EduQualifications[6]}
// <br> 8. ${EduQualifications[7]}`)



// Question 8

// var Studentsname = ['sameer','salal','sajid']
// var StudentsMarks = [400,390,276]
// var TotalMarks = [500]

// document.write (`Score Of Sameer is ${StudentsMarks[0]}. Percentage: ${StudentsMarks[0]/TotalMarks*100}%
// <br> Score Of Salal is ${StudentsMarks[1]}. Percentage: ${StudentsMarks[1]/TotalMarks*100}%
// <br> Score Of Sajid is ${StudentsMarks[2]}. Percentage: ${StudentsMarks[2]/TotalMarks*100}%`)



// Question 9

// var ColorNames = [`color1,color2,color3`]
// document.write (ColorNames)

             // A
// ColorNames.unshift(prompt('Add any Color to the begining'))
// document.write (ColorNames)


             // b
// ColorNames.push(prompt('Add any Color to the end'))
// document.write (ColorNames)


             // c
// ColorNames.unshift(prompt('Add any Color to the begining'))
// ColorNames.unshift(prompt('Add another Color to the begining'))
// document.write (ColorNames)


            // d

// var ColorNames = [`color1,color2,color3`];
// ColorNames.shift();
// document.write(ColorNames);

//             // e 
// ColorNames.pop()
// document.write (ColorNames)

// ColorNames.unshift(prompt('Add any Color to the begining'))
// document.write (ColorNames)
// ColorNames.unshift(prompt('Add any Color to the begining'))
// document.write (ColorNames)










// Question 10

// var Scoresofstudents  = [300,232,477,90]
// document.write(`Score Of Students:${Scoresofstudents}`)

// Scoresofstudents.sort((x,y) => x-y) 
// document.write(`<br></br> Score of students: ${Scoresofstudents}`)




// Question 11

// var cities = ['karachi','Multan','islamabad','Turbat','Gawadar']

// document.write(`<h1>cities list:<h1/>  ${cities} 
// <br> <h1>Selected Cities List:<h1/> ${cities.splice(2,2)} `)