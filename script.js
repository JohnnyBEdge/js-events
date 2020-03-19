console.log("Welcome to Javascript Events");

const family = document.getElementById('family');
const nsfw = document.getElementById('nsfw');
const water = document.getElementById('water');
const tupperware = document.getElementById('tupperware');
const my_input = document.getElementById('my_input');
const response = document.getElementById('response');

const btnClicked = (event) => {
    console.log(event.target.id)

    // response.innerHTML = my_input.value;

    switch(event.target.id){
        case 'family':
            response.innerHTML = 'Edited for Family Friendly Places';
            my_input.value = '';
            break;
        case 'nsfw':
            response.innerHTML = 'This is not safe for work';
            my_input.value = '';
            break;
        case 'water':
            response.innerHTML = "Don't forget to drink water";
            my_input.value = '';
            break;
        case 'tupperware':
            response.innerHTML = 'Your tupperware is full';
            my_input.value = '';
            break;
    }
};

family.addEventListener('click', btnClicked);
nsfw.addEventListener('click', btnClicked);
water.addEventListener('click', btnClicked);
tupperware.addEventListener('click', btnClicked);
