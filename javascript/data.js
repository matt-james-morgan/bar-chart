let graphData = {
    color: [],
    barLabelColor: [],
    barLabelName: []
}

const checkDataForString = (data) => {
    return !data.some(isNaN);
}

const assignData = () => {
    let data = $("#data").val().replace(/\s/g, '').split(',').map((x) => {
        return parseInt(x);
    });
    try {
        if (!checkDataForString(data)) {
            throw new Error('Non-numeric values found in data');
        }
    } catch (error) {
        throw new Error('Error');
    }
    graphData.data = data;
}

//on click event to assign values to Graph Data object 
$("#chart-name-submit").click((e)=>{
    graphData.title = $("#graph-title").val();
    graphData.titleColor = $("#title-color").val();
    graphData.titleSize = $("#graph-title-size").val();
    if(!graphData.title){//catches error if user hasn't filled out form
        e.preventDefault();
        alert('Please fill out form');
    }else{
        e.preventDefault(); //displays next section
        $("#chart-name-div").hide();
        $("#enter-data").show();
    } 
})

const generateBarColorInput = () =>{
    const div = document.createElement('div');

    graphData.data.map((x, i)=>{//mapping each piece of data to generate new color option for each bar
        const label = document.createElement('label');
        const input = document.createElement('input');
        label.innerHTML = 'Bar ' + (i+1);
        input.type = 'color';
        div.append(label, input);
    });

    $("#assign-bar-color").append(div);
}


$("#data-submit").click((e)=>{
    graphData.data = $("#data").val();
    if(!graphData.data){
        e.preventDefault();
        alert('Please fill out form');
    }else{
        e.preventDefault();
        $("#enter-data").hide();
        assignData();
        generateBarColorInput();
        $("#assign-bar-color").show();
    } 
})




















