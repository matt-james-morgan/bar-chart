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


const assignData = (data, options, element) =>{
    userData.data = data;
    Object.keys(userData.options).forEach(function(key){
        userData.options[key] = options[key];
    });
}

$("#enterData").click(function(data, options, element){
    assignData(data,options, element);
})

