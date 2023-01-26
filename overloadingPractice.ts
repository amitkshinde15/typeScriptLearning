// function overload(value : string[]);
// function overload(value : number[]);

// function overload(value){
//     if(Array.isArray(value)){
//                 value.map((element,index)=>{
//                 if(typeof element === 'string'){
//                     console.log(`"${element.trim()}"`);                    
//                 }  
//             else if(typeof element === 'number'){
//                 if(index%2 == 0){
//                     console.log(Math.sqrt(element)); 
//                 }
//                 else{
//                     console.log(Math.pow(element,3));     
//                 }
//             }           
//         });
//     }
// }
// overload(["Amit ","Sachin "]);
// overload([5,3,4,8,3,6,8,12,200]);

function overLoad1(value: number);
function overLoad1(value: string, value1?:string);
function overLoad1(value: string[]);
function overLoad1(value: number[]);


function overLoad1(value:any, value1?:any){
    if(value && typeof value==='number'){
        console.log(Math.pow(value,2)/Math.sqrt(value));
    }else if(value && typeof value==='string'){
        console.log(value.trim(), value1.trim());
    }
    else if(Array.isArray(value)){
         value.map((currentVal,index)=>{
                if(typeof currentVal === 'string'){
                    console.log(`"${currentVal.trim()}"`)
                }else if(typeof currentVal ==='number'){
                    if(index%2==0){
                        console.log(Math.sqrt(currentVal))
                    }else{
                        console.log(Math.pow(currentVal,3))
                    }                        
                }
            });
         }
}
overLoad1(3)  // print square root of 3
overLoad1(" Hitesh ", "Hello ") // trim name
overLoad1(["Apple "," Mango", " banana "])  // Unable to find output
overLoad1([3, 4, 5, 6, 7, 9, 23, 43, 33])   

