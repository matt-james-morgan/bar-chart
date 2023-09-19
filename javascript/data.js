let userData = {
    color: [],
    barLabelColor: [],
    barLabelName: []
}


const barColorOptions = {
    name: 'barColorOptions',
    placeholderName: 'bar',
    dropDown: ["blue", "red", "green"]
};

const labelColorOptions = {
    name: 'labelColorOptions',
    placeholderName: 'bar label',
    dropDown: ['orange', 'black', 'white']
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

const genreateDropdownMenu = (numOfBars, options) => {
   
    const div = document.createElement('div');
    
    
    for (let i = 0; i < numOfBars.length; i++) {
        const inputDiv = document.createElement('div');
        inputDiv.id =  "labelDiv-"+ i;
        
        const count = document.createElement('p');
        count.innerHTML = (i + 1);

        const ul = document.createElement('ul');
        ul.style.display = 'none';
        ul.id = options.name + '-' + i;

        const button = document.createElement('button');
        button.onclick = function () {
            $("#" + options.name + '-' + i).toggle();
        }

        const input = document.createElement('input');
        input.placeholder = "enter "+ options.placeholderName + " color";
        inputDiv.append(input);
        if(options.name === 'labelColorOptions'){
            const labelName = document.createElement("input");
            labelName.id = "labelName" + i; 
            labelName.placeholder = "enter label name";
            inputDiv.append(labelName);
        }
        
        for (let val of options.dropDown) {//generates the dropdown menu options
            const li = document.createElement('li');
            li.innerHTML = val;
            Object.assign(li, {
                onclick: function () {
                    input.value = val; //assigns the input field to the val
                }
            })
            ul.appendChild(li);
        }

        div.append(count);
        div.append(inputDiv);
        div.append(button);
        div.append(ul);
    }

    return div;

}



const assignColor = () => {

    $('#enter-data').hide();
    $('#submit').hide();


    const colorDiv = genreateDropdownMenu(userData.data, barColorOptions);
   

    $('#assign-color').append(colorDiv);

    const button = document.createElement("button");

    button.innerHTML = ("Submit");

    Object.assign(button, {
        id: 'submit-color',
        value: "submit",
        onclick: function () {
            for (let i = 0; i < userData.data.length; i++) {
                userData.color.push($("#user-input-" + i).val())
            }
            assignLabels();
        }
    });

    $('#assign-color').append(button);
}

const assignLabels = () => {

    $("#assign-color").hide();


    const labelDiv = genreateDropdownMenu(userData.data, labelColorOptions);

    $('#assign-label').append(labelDiv);





    const button = document.createElement("button");

    button.innerHTML = ("Submit");

    Object.assign(button, {
        id: 'submit-label',
        value: "submit",
        onclick: function () {
            for (let i = 0; i < userData.data.length; i++) {
                userData.barLabelColor.push($("#user-input-" + i).val())
                userData.barLabelName.push($("#labelName"+i).val());
            }
            console.log(userData);
        }
    });

    
    $('#assign-label').append(button);
}




$("#submit").click(() => {
    assignData();
    assignColor();
    console.log(userData);
});








