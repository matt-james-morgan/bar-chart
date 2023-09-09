const userData = {
    data: [],
    element: 0,
    spacing: 0,
    axis: 0,
    options:{
        barColor: 0,
        labelColor: 0,
        fontSize: '',
        fontColor: ''
    }
}





const checkDataForString = (data) =>{
    return !data.some(isNaN);
}

const assignData = () =>{
    let data = $("#data").val().replace(/\s/g,'').split(',').map((x) =>{
        return parseInt(x);
    });
    try {
        if (!checkDataForString(data)) {
            throw new Error('Non-numeric values found in data');
        }
        
    } catch (error) {
        throw new Error('Error');
    }
    userData.data = data;
}

$("#submit").click(()=>{
    assignData();
});


    $('#color-menu').click(() => {
        $('#dropdown').css("display","block");
      
    });

