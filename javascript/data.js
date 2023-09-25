let graphData = {
    color: [],
    barLabelColor: [],
    barLabelName: [],
    barColor: [],
    barName: []
}

const checkDataForString = (data) => {
    return data.some(isNaN);
}

const assignData =  (callback) => {
    let validInput = false;
    while(!validInput){
        
            data = $("#data").val().replace(/\s/g, '').split(',').map((x) => {
                return parseInt(x);
            });
            if(checkDataForString(data)){
                console.log(data);
                alert('Please fill out form');
                return;
            }else{
                graphData.data = data;
                validInput = true;
                callback();
            }
        
    }
    
}

const drawBarGraph = (graphData, element) => {
    const sortedData = graphData.data.sort();
    if(sortedData[sortedData.length-1] <= 10){
        $("#y-axis").html(sortedData[graphData.data.length-1]);
    }else if(sortedData[sortedData.length-1] <= 900){
        $("#y-axis").html(Math.round(sortedData[graphData.data.length-1]/100)*100);
    }
    
    
}

//on click event to assign values to Graph Data object 
$("#chart-name-submit").click((e) => {
    graphData.title = $("#graph-title").val();
    graphData.titleColor = $("#title-color").val();
    graphData.titleSize = $("#graph-title-size").val();
    if (!graphData.title) {//catches error if user hasn't filled out form
        e.preventDefault();
        alert('Please fill out form');
    } else {
        e.preventDefault(); //displays next section
        $("#chart-name-div").hide();
        $("#enter-data").show();
    }
});

const generateBarColorInput = () => {
    const div = document.createElement('div');
    const input = document.createElement('input');
    input.type = "submit";
    input.id = "bar-color-submit";
    graphData.data.map((x, i) => {//mapping each piece of data to generate new color option for each bar
        const label = document.createElement('label');
        const barColor = document.createElement('input');
        const barName = document.createElement('input');
        label.innerHTML = 'Bar ' + (i + 1);
        barName.type = "text";
        barName.placeholder = "Bar Name";
        barName.id = "bar-name-" + i;
        barColor.type = 'color';
        barColor.id = "bar-color-" + i;
        div.append(label, barName, barColor);
    });

  
   
    $("#assign-bar-color").append(div);
    $('#assign-bar-color').append(input)
};


$("#data-submit").click( (e) => {
    
    assignData(()=>{
        e.preventDefault();
        $("#enter-data").hide();
        generateBarColorInput();
        $("#assign-bar-color").show();
        
    });
});


 $(document).on("click", "#bar-color-submit", (e) => {
    
    for (let i = 0; i < graphData.data.length; i++) {
        if (!$('#bar-name-' + i).val()) {
            e.preventDefault();
            alert('Please fill out form');
            break;
        } else {
            graphData.barColor.push($('#bar-color-' + i).val());
            graphData.barName.push($('#bar-name-' + i).val());
            $("#assign-bar-color").hide();
            $("#assign-gap").show();
        }
    }
 });

 $("#gap-submit").click(()=>{
    if(!$("#gap-input").val()){
        e.preventDefault();
        alert('Please select option');
    }else{
        graphData.barGap = $("#gap-input").val();
        $("#assign-gap").hide();
        drawBarGraph(graphData, $("#graph"));
    }
 })