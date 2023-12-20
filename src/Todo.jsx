// export default function Todo ({task, isDone}){
//     return(
// <li>Task: {task}</li>
//     )
// }


//conditional rendering way: 1
// export default function Todo ({task, isDone}){
// if(isDone === true){
//     return <li>Finished: {task}</li>
// }else{
//     return <li>Work on: {task}</li>
// }

// }

///another way conditional rendering: 2

// export default function Todo ({task, isDone}){
//     if(isDone){
//         return <li>Finish: {task}</li>
//     }
//         return <li>Work on: {task}</li>
    
//     }



//Conditional Rendering option: 3 (ternery operator)
// export default function Todo ({task, isDone}){
//     return(
// <li>{isDone? 'Finished': 'Work on'} {task}</li>
//     )
// }


// //conditional rendering : 4 &&
// export default function Todo ({task, isDone}){
//     return(
// <li>Task: {task} {isDone &&':Done'}</li>
//     )
// }



//conditional rendering : 5  ||
// export default function Todo ({task, isDone}){
//     return(
// <li>Task: {task} {isDone ||':Do it'}</li>  // jodi sotto na hoi
//     )
// }



// conditional rendering: 6

export default function Todo ({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finish: {task}</li>
    }else{
        listItem = <li>Work on: {task}</li>

    }
       return listItem
    
    }