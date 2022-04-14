//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
function moreAboutHome(address, distanceFromTown, hasNeighbours){
    return typeof(address)+typeof(distanceFromTown)+typeof(hasNeighbours);
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
function moreAboutKaren(parents, noOfSiblings, isNuclearFamily){
    if(typeof(parents)==="string" && typeof(noOfSiblings)==="number" && typeof(isNuclearFamily)==="boolean")
        return true;
    return false;
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
function doesFriendExist(ageInText, ageInNumber){
    if(isNaN(ageInText))
        return ageInText;
    if(isNaN(ageInNumber))
        return ageInNumber;
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
function sweetTooth(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel){
        if(typeof(totalNoOfSweets)!=="number" || typeof(sweetsConsumedByKaren)!=="number" || typeof(sweetsConsumedInNMeters)!=="number" || typeof(metersToTravel)!=="number")
            return `No sweets for Karen's friend`;
        if(totalNoOfSweets===0 && sweetsConsumedByKaren===0 &&  sweetsConsumedInNMeters===0 && metersToTravel===0)
            return 0;
        if(totalNoOfSweets===(sweetsConsumedByKaren+(sweetsConsumedInNMeters*metersToTravel)))
           return 0;
    }

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
function convertToCelsius(fahrenheit){
    return (typeof(fahrenheit)!=='number')?"Technical Error!":(fahrenheit-32)/1.8;
}

//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
function aDifficultChoice(choice){
    if(choice===1)
        return `Take her daughter to a doctor`;
    else if(choice===-1)
        return `Break down and give up all hope`;
    else if(choice===undefined)
        return `Wasn't able to decide`;
    else 
        return `Refused to do anything for Karen`;
}

//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
function consoleKaren(strategies){
    var res = ""
    for(var i=0; i<strategies.length; i++){
        res += strategies[i] + " ";
    }
    return res.length;
}