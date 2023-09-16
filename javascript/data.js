
const uuidv4 = require("uuid/v4");

let userData = {
    color:[],
    barLabel:[]
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

const genreateDropdownMenu = () =>{

}



const assignColor = () => {
    const colorOptions = ["blue", "red", "green"];

    $('#enter-data').hide();
    $('#submit').hide();

    for (let i = 0; i < userData.data.length; i++) {
        const colorDiv = document.createElement('div');
        const input = document.createElement('input');
        const count = document.createElement('p');
        count.innerHTML = (i + 1);
        const dropdown = document.createElement('button');
        const ul = document.createElement('ul');

        Object.assign(ul,{
            id:"color-drop-" + i,
            class: 'dropdown-items'
        })
        for (let val of colorOptions) {
            var li = document.createElement('li'); // Create <li> element
            li.innerHTML = val; // Set its innerHTML to the color
            Object.assign(li,{
                onclick: function(){
                    input.value = val;
                }
            })
            ul.appendChild(li); // Append it to the <ul>
        }

        

        Object.assign(dropdown, {
            id: "dropdown-" + i,
            onclick: function () {
                $("#color-drop-"+i).toggle();
            }
        });

        
        Object.assign(input, {
            placeholder: "enter color",
            id: i
        });

        ul.style.display = 'none'
        colorDiv.append(count);
        colorDiv.append(input);
        colorDiv.append(dropdown);
        colorDiv.append(ul);
        
        $('#assign-color').append(colorDiv);
    }

    const button = document.createElement("button");

    button.innerHTML = ("Submit");

    Object.assign(button, {
        id: 'submit-color',
        value: "submit",
        onclick: function () {
            for (let i = 0; i < userData.data.length; i++) {
                userData.color.push($("#" + i).val());
            }
            console.log(userData);
        }
    });

    $('#assign-color').append(button);
}

const assignLabels = () =>{

    assignColor.hide();
    const labelDiv = document.createElement('div');
    const labelColor = document.createElement('input');
    const inputBarLabelName = document.createElement('input');
        Object.assign(inputBarLabelName,{
            placeholder: 'Enter Bar Name',
            id: 'barLabel' + i
    });

    for(let i =0; i< userData.data.length; i++){

    }


}

$("#submit").click(() => {
    console.log('hey')
    assignData();
    assignColor();
    assignLabels();
    console.log(userData);
});








