let graphData = {
    barLabelColor: [],
    barLabelName: [],
    barColor: [],
    barName: [],
    data: []
}

let barCountId = 1;

$("#addBar").click(()=>{
  const container = document.createElement("div")
  container.setAttribute("class", "bar-input");
  barCountId++;
  const paragraph1 = document.createElement("p");
        paragraph1.textContent = "Enter Bar Value";

        // Create input element for data
        const input1 = document.createElement("input");
        input1.setAttribute("type", "number");
        input1.setAttribute("min", "1");
        input1.setAttribute("max", "100");
        input1.setAttribute("placeholder", "data");





        // Create paragraph element for "Enter Bar Name"
        const paragraph2 = document.createElement("p");
        paragraph2.textContent = "Enter Bar Name and Color";

        // Create input element for bar name with min and max attributes
        const input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("placeholder", "Bar Label");
        const input3 = document.createElement("input");
        input3.setAttribute("type", "color");

        const paragraph3 = document.createElement("p");
        paragraph2.textContent = "Enter Bar Label Color";
        const input4 = document.createElement("input");
        input4.setAttribute("type", "color");


        // Get the container element and append the generated elements to it
        const div = document.getElementById("enter-data");
        container.appendChild(paragraph1);
        container.appendChild(input1);
        container.appendChild(paragraph2);
        container.appendChild(input2);
        container.appendChild(input3);
        container.appendChild(paragraph3);
        container.appendChild(input4);
        div.append(container);
})

$("nav").on("click", "#submit", ()=>{
  const bars = $(".bar-input");
  bars.each(function(){
     graphData.data.push($(this).find("input[type='number']").val());
     graphData.barLabelName.push($(this).find("input[type='text']").val());
     graphData.barColor.push($(this).find("input[type=color]").eq(0).val());
     graphData.barLabelColor.push($(this).find("input[type=color]").eq(1).val());
  })
  graphData.graphTitle = $("#graph-title").val();
  graphData.titleColor = $("#title-color").val();
  graphData.graphTitleSize = $("#graph-title-size").val();
  console.log(graphData);
})


/*
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
        for(let val of sortedData){
          $("#y-axis").append(document.createElement("div").innerHTML = val);
        }
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
*/
