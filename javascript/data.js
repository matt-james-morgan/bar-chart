let graphData = {
    color: [],
    barLabelColor: [],
    barLabelName: [],
    barColor: [],
    barName: []
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
});

const generateBarColorInput = () =>{
    const div = document.createElement('div');

    graphData.data.map((x, i)=>{//mapping each piece of data to generate new color option for each bar
        const label = document.createElement('label');
        const barColor = document.createElement('input');
        const barName = document.createElement('input');
        label.innerHTML = 'Bar ' + (i+1);
        barName.type = "text";
        barName.placeholder = "Bar Name";
        barName.id = "bar-name-" + i;
        barColor.type = 'color';
        barColor.id = "bar-color-"+i;
        div.append(label, barName, barColor);
    });

    $("#assign-bar-color").append(div);
};


$("#data-submit").click((e)=>{
    graphData.data = $("#data").val();
    console.log(graphData.data)
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
});

$("#bar-color-submit").click((e)=>{
    for(let i = 0; i < graphData.data.length; i++){
        if(!$('#bar-name-'+i).val()){
            e.preventDefault();
            alert('Please fill out form');
            break;
        }else{
            graphData.barColor.push($('#bar-color-'+i).val());
            graphData.barName.push($('#bar-name-'+i).val());
            console.log(graphData.barName);
        }  
    }
});