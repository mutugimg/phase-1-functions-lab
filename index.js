// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance>=42){
    return distance-42
    }
    else {return 42-distance}
   } 
function distanceFromHqInFeet(distance){
   return distanceFromHqInBlocks(distance)*264
}
function distanceTravelledInFeet(block1,block2){
    if (block2>=block1){
    return (block2-block1)*264}
    else {return (block1-block2)*264}
}

function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination)
    if (distance <= 400){
        return 0
    }
    else if (distance >=400 && distance<=2000){
        return(distance-400)*0.02
    }
    else if (distance >2000 && distance<=2500){
        return 25
    }
    else if (distance>2500){
        return "cannot travel that far"
    }
    }