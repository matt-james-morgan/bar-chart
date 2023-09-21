let graphData = {
    color: [],
    barLabelColor: [],
    barLabelName: []
}

$("#chart-name-submit").click((e)=>{
    graphData.title = $("#graph-title").val();
    graphData.titleColor = $("#title-color").val();
    graphData.titleSize = $("#graph-title-size").val();
    if(!graphData.title){
        e.preventDefault();
        alert('Please fill out form');
    }else{
        e.preventDefault();
        $("#chart-name-div").hide();
        $("#enter-data").show();
    } 
})

const assignBarColor = () =>{
    const ul = document.createElement('ul');

    graphData.data.map((x, i)=>{
        
    })
}


$("#data-submit").click((e)=>{
    graphData.data = $("#data").val();
    if(!graphData.data){
        e.preventDefault();
        alert('Please fill out form');
    }else{
        e.preventDefault();
        $("#enter-data").hide();
        $("#assign-bar-color").show();
    } 
})




















