let graphData = {
    barLabelColor: [],
    barLabelName: [],
    barColor: [],
    barName: [],
    data: [],

}

const regen = () => {
  const bars = document.querySelectorAll("#final-graph > div");
  const resetInputDiv = document.querySelectorAll(".bar-input");
  const resetUserDataInput = document.querySelectorAll(".user-data");
  const resetBarColors = document.querySelectorAll(".color-input");
  $("#graph-title").val($("#graph-title").attr("placeholder"));
  $("#gap-input").val($("#gap-input").attr("placeholder"));
  $('input[type=text]').val($('input[type=text]').attr("placeholder"));
  $('#direction').val()
  $("#title-color").val("#000000");
  $('#graph-title-size').val('8');
  $("#graph > h2").remove();
  resetBarColors.forEach(colorInput => {
    colorInput.value = "#000000";
  });

  resetUserDataInput[0].value = resetUserDataInput[0].ariaPlaceholder;
  for(let i=0; i < bars.length; i++){
    bars[i].remove();
  }
  for(let i=1; i < resetInputDiv.length; i++){
    resetInputDiv[i].remove();
  }

  graphData.barColor = [];
  graphData.barLabelColor = [];
  graphData.data = [];
  graphData.barName = [];
  graphData.barLabelName = [];
  graphData.graphTitle =  '';
  graphData.graphTitleSize = '';
  graphData.titleColor = '';
  graphData.direction = '';
  graphData.barGap = '';

  $("nav").show();
  $("#graph").hide();
  $("#regen-button").remove();

}

$("#addBar").click((e)=>{
  e.preventDefault();
  const container = document.createElement("div")
  container.setAttribute("class", "bar-input");



        // Create input element for data
        const input1 = document.createElement("input");
        input1.setAttribute("type", "number");
        input1.setAttribute("min", "1");
        input1.setAttribute("max", "100");
        input1.setAttribute("placeholder", "Enter Bar Value");
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
  const regenButton = document.createElement("button");
  regenButton.id = 'regen-button';
  regenButton.innerHTML = "Regenrate";
  $('header').on("click", "#regen-button", (e)=>{
    e.preventDefault()
   regen();
  });
  $("header").append(regenButton);
  if(options.direction === '2'){
    finalGraph.style.display = 'grid';

    $("#y-axis").hide();
    $("#x-axis").css("display", "flex");
    $("#graph").css("grid-template-rows","auto auto 1fr");
    $("#graph").css("grid-template-columns","1fr");
    $("#x-axis").css("flex-direction", "row");
    $("#final-graph").css("grid-row-start", "3")
    for(let i = 0; i < data.length; i++){
      const bar = document.createElement('div');
      const label = document.createElement('p');
      label.classList.add("h-graph-p-tag");
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
      bar.style.alignItems = "flex-start"
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

$("#submit").click((e)=>{
  e.preventDefault();
  let isValid = true;
  const bars = $(".bar-input");
  bars.each(function(){

    if($(this).find("input[type=number]").val() > 100 || !$(this).find("input[type='number']").val() || $(this).find("input[type=number]").val() <= 0){
      alert('Bar Value has to be between 1-100');
      isValid = false;
    }else{
      graphData.data.push($(this).find("input[type='number']").val());
      console.log(graphData.data);
      console.log(bars)
    }

    if(isValid){
      graphData.barLabelName.push($(this).find("input[type='text']").val());
      graphData.barColor.push($(this).find("input[type=color]").eq(0).val());
      graphData.barLabelColor.push($(this).find("input[type=color]").eq(1).val());
    }

  });

  if(isValid){

    graphData.graphTitle = $("#graph-title").val();
    graphData.graphTitleSize = $("#graph-title-size").val();
    graphData.titleColor = $("#title-color").val();
    graphData.direction = $("#direction").val();
    graphData.barGap = $("#gap-input").val();

    drawBarGraph(graphData.data,graphData, 'final-graph');
  }


})


