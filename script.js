/*getGrade: This function takes in a number parameter (0 to 100). It returns the corresponding letter grade using the scale: A=90+, B=80+, C=70+, D=60+, F=below 60. Call the function with different numbers and log the results. (Note: there should be no console.log inside the function.) */

// function getGrade(grade){
//     if(grade >= 90){
//         return "A";
//     } else if(grade >= 80){
//         return "B";
//     } else if(grade >= 70){
//         return "C";
//     }else if(grade >= 60){
//         return "D";
//     }else return "F";
// }

//  arrow function

// const getGrade = (grade) => {
//     if(grade >= 90){
//         return "A";
//     } else if(grade >= 80){
//         return "B";
//     } else if(grade >= 70){
//         return "C";
//     }else if(grade >= 60){
//         return "D";
//     }else return "F";
// }

/*
prioritize: This function has two parameters, urgent and important, both boolean. It returns the priority according to this rule: urgent & important → 1, important not urgent → 2, urgent not important → 3, neither urgent nor important → 4.
*/

// function prioritize(urgent, important){
//     if(urgent && important){
//         return 1;
//     } else if(important && !urgent){
//         return 2;
//     } else if(urgent && !important){
//         return 3;
//     } else return 4;
// }

/*
calculatePay: This function has two parameters, wage and hours, both numbers. It calculates and returns a person's weekly pay based on the extended challenge from JavaScript Lab 1.
*/

//let hours;
//let wage;
//let totalPaycheck =0;
//wage = prompt("What is the wage?");
//hours = prompt("How many hours did you work?");
// function calculatePay(wage, hours){
//     if(hours > 40){
//         let overtimeHours = hours - 40;
//         let overtimeWage = (wage * 1.5) * overtimeHours;
//         totalPaycheck = overtimeWage + (wage * (hours-overtimeHours))
//          return `The total paycheck is: $${totalPaycheck} with $${overtimeWage} of overtime pay`;
//     } else{
//     totalPaycheck = wage * hours;
//     return `The total paycheck is: $${totalPaycheck}`;
//     }

    // let count = 0;
    // let sum = 0;
    // while(sum < 1000000){
    //     count++;
    //     sum += totalPaycheck;
    // }
    // console.log(`It would take ${count} weeks to earn $1,000,000`);
    
//}

/*
printSquare: This function has a parameter for width. It logs a square shape to the
console based on the width parameter. For example, given width 3, it would log:
###
###
###
*/
// let buildingBlock = [];
// let count = 0;
// function printSquare(width){
//     while(count < width){
//     for(let i=0; i<width; i++){
//         buildingBlock[i] = "#";
        
//     }//console.log(buildingBlock.toString().replaceAll(",", " "));
//     buildingBlock = buildingBlock.toString();
//     //console.log(buildingBlock.length);
//         // for(let i=1; i<buildingBlock.length; i++){
//         // if(buildingBlock.charAt(i) === ','){
//         //     buildingBlock.charAt(i).replace(',', ' ')
//         // }
//     //}
//     console.log(buildingBlock);
//     count++;
// }

// }
            // Solution to above, had to use a string... much simpler...
// let buildingBlock = "";
// let count = 0;

// function printSquare(width){
//     while(count < width){
//         for(let i =0; i<width; i++){
//             buildingBlock += "#";   
//         }
//         count++;
//         console.log(buildingBlock)
//         buildingBlock = "";
//     }
// }

//         // Pyramid version
// let pyramidBlock = "";

// function printPyramid(width){
//     for(let i = 0; i<width; i++){
//         pyramidBlock += "#";
//         console.log(pyramidBlock);
//     }
// }



// /* take 2 points representing x and y coordinates f top left and bottom right. log the area and length of the perimeter of the rectangle    A =lw and P = 2(l + w)

// LogRectInfo(topLeft, bottomRight){   SOLVED IN ANOTHER FILE

// }
// */


// function longestName(name1, name2, name3){
//     if(name1.length > name2.length && name1.length > name3.length){
//         console.log(`${name1} has the longest name.`)
//     } else if (name2.length > name1.length && name2.length > name3.length){
//         console.log(`${name2} has the longest name.`)
//     } else if (name3.length > name1.length && name3.length > name2.length){
//         console.log(`${name1} has the longest name.`)
//     } else if(name1.length === name2.length && name3.length < name1.length){
//         console.log(`${name1} and ${name2} tie for the longest name`)
//     } else if(name2.length === name3.length && name1.length < name2.length){
//         console.log(`${name2} and ${name3} tie for the longest name`)
//     } else if(name1.lengt === name3.lengt && name2.length < name1.length){
//         console.log(`${name1} and ${name3} tie for the longest name`)
//     } else {
//         console.log(`All three names, ${name1}, ${name2}, and ${name3} are the same length`);
//     }
// }

// function stringTo10(word){
//     console.log(`${word} has ${word.length} charcters`)
//     if(word.length < 10){
//         let spacesToAdd = 10 - word.length;
//         for(let i = 0; i<spacesToAdd; i++){
//             word = " " + word
//         }
//         console.log(`Now ${word} has ${word.length} characters.`);
//     }
// }

// getAreaOfCircle = (radius) => Math.PI * (radius ** 2);

// getCircumferenceOfCircle = (radius) => 2 * Math.PI * radius;

// getAreaOfSquare = (side) => side ** 2;

// getAreaOfTriangle = (base, height) => (height * base) / 2



// 1 DIMENSIONAL CHARACTER MOVING GAME
// {
//     let direction = 0;
//     let location = 0;
// function moveForward(distance){
//     if(direction % 2 === 0){
//         location += distance;
//     } else {
//         location -= distance;
//     }
    
// }
// function moveBackwards(distance){
//     if(direction % 2 === 0){
//         location -= distance;
//     } else {
//         location += distance;
//     }
// }
// function turnAround(){
//     direction++;
// }
// function printLocation(){
//     console.log(location);
// }

// }

// 2 DIMENTIONAL MOVING GAME


    let position = [0,0];
    let direction = 360;
    let rotate = 90;

    function moveForward(distance){
        if(direction === 360 || direction === 0){
            position.splice(0, 1, parseInt(distance + position[0])) 
        } else if(direction === 180){
            position[0] = distance - position;
        }
        else if(direction === 270){
                position[1] = distance + position;
        } else if(direction === 90){
            position[1] = distance + position;
        }
    }
    function moveBackward(distance){
        if(direction === 360 || direction === 0){
        position[0] = distance - position;
        } else if(direction === 180){
            position[0] === distance + position;
        }
    }
    function turnLeft(){
        direction = direction - rotate;
        if(direction < 0){
            direction = 270;
        }
    }
    function turnRight(){
        direction = direction + rotate;
        if(direction > 360){
            direction = 90;
        }
    }
    function printLocation(){
        console.log(`${position[0]} North ${position[1]} East`);
    }

