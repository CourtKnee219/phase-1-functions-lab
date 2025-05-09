// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    //returns the number of blocks given a value
    const headQuarters = 42;
    return Math.abs(distance - headQuarters);
}

function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(distance);
    //call the distanceFromHqInBlocks from inside the distanceFromHqInFeet function,
    //passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    //the return value of distanceFromHqInBlocks can be used to calculate feet
    const headQuarters = 42;
    return Math.abs((distance - headQuarters) * 264);
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet travelled
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const feetPrice = Math.abs((destination - start) * 264)
    if(feetPrice < 400) {
        return 0;
    } else if(feetPrice > 400 && feetPrice <= 2000) {
        return 2.56;
    } else if(feetPrice > 2000 && feetPrice <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}