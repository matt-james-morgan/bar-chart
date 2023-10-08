let graphData = {
    barLabelColor: [],
    barLabelName: [],
    barColor: [],
    barName: [],
    data: [],

}



$("#addBar").click((e)=>{
  e.preventDefault();
  const container = document.createElement("div")
  container.setAttribute("class", "bar-input");

  const label1 = document.createElement("label");
        label1.textContent = "Bar Value";

        // Create input element for data
        const input1 = document.createElement("input");
        input1.setAttribute("type", "number");
        input1.setAttribute("min", "1");
        input1.setAttribute("max", "100");
        input1.setAttribute("placeholder", "1");
        input1.setAttribute("class", 'user-data');
        input1.required = true;

        const disclaimer = document.createElement("p");
        disclaimer.append(document.createElement('em').innerHTML = "*Bar values are in percentage")

        // Create paragraph element for "Enter Bar Name"


        // Create input element for bar name with min and max attributes
        const input2 = document.createElement("input");
        input2.setAttribute("type", "text");
        input2.setAttribute("placeholder", "Enter Bar Label");

        const colorDiv = document.createElement("div");
        colorDiv.setAttribute("class","color-selector");
        const input3 = document.createElement("input");
        input3.setAttribute("type", "color");
        input3.setAttribute("class", "color-input")
        const barColor = document.createElement('label');
        barColor.innerHTML = 'Bar Color:';
        colorDiv.append(barColor);
        colorDiv.append(input3)

        const fontColorDiv = document.createElement("div");
        const input4 = document.createElement("input");
        input4.setAttribute("type", "color");
        input4.setAttribute("class", "color-input");
        const barFontColor = document.createElement("label");
        barFontColor.innerHTML = "Bar Font Color:";

        fontColorDiv.append(barFontColor);
        fontColorDiv.append(input4);


        // Get the container element and append the generated elements to it
        const div = $("#form");

        container.appendChild(label1);
        container.appendChild(input1);
        container.appendChild(disclaimer)

        container.appendChild(input2);
        container.appendChild(colorDiv);
        container.appendChild(fontColorDiv);
        div.append(container);
})

const drawBarGraph = (data, options, element) => {
  $('nav').hide();
  $("#graph").css("display","grid");
  const finalGraph = document.getElementById(element);
  if(options.direction === '2'){
    $("#y-axis").hide();
    $("#x-axis").css("display", "flex");
    $("x-axis").css("")
    $("#graph").css("grid-template-rows","1fr 1fr 1fr");
    $("#graph").css("grid-template-columns","1fr");
    $("#x-axis").css("flex-direction", "row");
    $("#final-graph").css("grid-row-start", "3")
    for(let i = 0; i < data.length; i++){
      const bar = document.createElement('div');
      const label = document.createElement('p');
      label.innerHTML = options.barLabelName[i];
      bar.style.width = data[i] + "%";
      bar.style.backgroundColor = options.barColor[i];
      bar.style.display = "flex";
      bar.style.justifyContent = 'center';
      bar.append(label);
      finalGraph.append(bar);

    }
  }else{
    for(let i = 0; i < data.length; i++){
      const bar = document.createElement('div');
      const label = document.createElement('p');
      label.innerHTML = options.barLabelName[i];
      bar.style.height = data[i] + "%";
      bar.style.backgroundColor = options.barColor[i];
      bar.style.display = "flex";
      bar.style.justifyContent = 'center';
      bar.append(label);
      finalGraph.append(bar);

    }
  }

  const graphTitle = document.createElement("h2");
  graphTitle.innerHTML = options.graphTitle;
  graphTitle.style.fontSize = options.graphTitleSize+"px";
  graphTitle.style.color = options.titleColor;
  $("#graph").prepend(graphTitle);



  finalGraph.style.gap = options.barGap + "%";

}

$("#form").on("click", "#submit", (e)=>{
  e.preventDefault();
  const bars = $(".bar-input");
  bars.each(function(){
    if($(this).find("input[type=number]").val() > 100){
      alert('val cant be more than 100');
    }else{
      graphData.data.push($(this).find("input[type='number']").val());
      console.log(graphData.data);
      console.log(bars)
    }

     graphData.barLabelName.push($(this).find("input[type='text']").val());
     graphData.barColor.push($(this).find("input[type=color]").eq(0).val());
     graphData.barLabelColor.push($(this).find("input[type=color]").eq(1).val());
  })
  graphData.graphTitle = $("#graph-title").val();
  graphData.titleColor = $("#title-color").val();
  graphData.graphTitleSize = $("#graph-title-size").val();
  graphData.barGap = $("#gap-input").val();
  graphData.direction = $("#direction").val();



      drawBarGraph(graphData.data,graphData, 'final-graph');


})


