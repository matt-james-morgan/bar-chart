const userData = {
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
    userData.data = data;
}



const assignColor = () => {
    $('#enter-data').hide();
    userData.color = [];
    $('#submit').hide();
    for(let i = 0; i<userData.data.length; i++){
        const input = document.createElement('input');
        const count = document.createElement('p');
        count.innerHTML=(i+1);
        input.setAttribute('placeholder', 'enter color');
        input.setAttribute("id", i);
        $("#assign-color").append(count);
        $("#assign-color").append(input);
    }
    const button = document.createElement("button");
    button.innerHTML = ("Submit");
    Object.assign(button, {
        id: 'submit-color',
        value: "submit",
        onclick: function(){
            for(let i =0; i < userData.data.length; i++){
                userData.color.push($("#" + i).val());
            }
        }
    });
    $('#assign-color').append(button);
}


$("#submit").click(() => {
    console.log('hey')
    assignData();
    assignColor();
    console.log(userData);
});

$("#submit").click(() => {
    console.log('hey')
    assignData();
    assignColor();
    console.log(userData);
});






