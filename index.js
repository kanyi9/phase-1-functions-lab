// Code your solution in this file!
function distanceFromHqInBlocks(streetNo) {
   const distance = Math.abs(streetNo - 42) //returns the number of blocks given a value
    return distance;
}

function distanceFromHqInFeet(streetNo) {
    const blocks = distanceFromHqInBlocks(streetNo);
    return blocks*264;
}

function distanceTravelledInFeet(start, destination) {
    const blocksTravelled= Math.abs(destination - start);
    return blocksTravelled* 264;
  }

  function calculatesFarePrice(start, destination) {
    const distanceInFeet= distanceTravelledInFeet(start, destination)
    if (distanceInFeet<400){
        return 0;
    }else if (distanceInFeet<2000){
        return (0.02 *(distanceInFeet-400));

    }else if(distanceInFeet>2000 && distanceInFeet<2500){
        return 25
    }else{
        return "cannot travel that far"}
        
    }
    
  

     
    