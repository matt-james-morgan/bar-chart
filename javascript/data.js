


let userData = {
    color:[],
    barLabel:[]
}


const barColorOptions = {
    name: 'barColorOptions',
    dropDown:["blue", "red", "green"]
};

const labelColorOptions = {
    name: 'labelColorOptions',
    dropDown: ['orange,black,white']
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

const genreateDropdownMenu = (options) =>{
    const div = document.createElement('div');
    for(let i = 0; i<options.;i++){
        const count = document.createElement('p');
        count.innerHTML = (i + 1);
        const ul = document.createElement('ul');
        const button = document.createElement('button');
        const input = document.createElement('input');

        Object.assign(input, {
            placeholder: "enter color",
            id: options.name + '-' + i
        });

        

        Object.assign(button,{
            onclick: function(){
            $(options.name + '-' + i).toggle(); 
            }
        })//gives function to each dropdown menu button and targets corresponding ul

        for(let val of options.dropDown){//generates the dropdown menu options
            const li = document.createElement('li');
            li.innerHTML = val; 
            Object.assign(li, {
                onclick: function(){
                    input.value = val; //assigns the input field to the val
                }
            })
            ul.appendChild(li);
        }
        ul.style.display = 'none'
        div.append(count);
        div.append(input);
        div.append(dropdown);
        div.append(ul);
    }
    
   return div;
    
}



const assignColor = () => {
    

    $('#enter-data').hide();
    $('#submit').hide();

    for (let i = 0; i < userData.data.length; i++) {
        
        
        
        const colorDiv = genreateDropdownMenu()
        

        
        
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








