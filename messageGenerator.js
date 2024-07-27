function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random()* arr.length);
    return arr[randomIndex];
}
function generateMessage(){
    const greetings = ["hello","hi","hey",'yo','Wasup'];
    const actions = ["you are awesome", "keep going","you can do it"];
    const signOffs = ["best regards", "sincerely","Cheers","take care"];

    const greeting = getRandomElement(greetings);
    const action = getRandomElement(actions);
    const signOff = getRandomElement(signOffs);

    return `${greeting}! just wanted to say ${action} ${signOff}`;
}
console.log(generateMessage);