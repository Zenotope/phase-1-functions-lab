// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    if (someValue >= 42){
        return someValue - 42;
    }
    else {
        return 42 - someValue;
    }
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
    let distanceTravelled = start - destination
    if (distanceTravelled>= 0){
        return (start - destination) * 264;
    }
    if (distanceTravelled < 0){
        return (destination - start) * 264;
    }
    
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0;
    }
    if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02;
    }
    if (distance > 2000 && distance < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}