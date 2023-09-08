const userData = {
    options:{
        spacing: 0,
        axis: 0,
        barColor: 0,
        labelColor: 0,
        fontSize: '',
        fontColor: ''
    },
    data: [],
    element: 0
}


// const assignData = () =>{
//     userData.data = data;
//     Object.keys(userData.options).forEach(function(key){
//         userData.options[key] = $("#"+key).val();
//     });
// }

const assignData = () =>{
    let word = "data"
    let test = $("#data").val();
    console.log(test);
}
$("#submit").click(assignData());

