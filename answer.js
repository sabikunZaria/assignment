//Question 1
function describeValue(value) {
    const type = typeof value;
    const truthiness = value ? "truthy" : "falsy";
    return `${type} | ${truthiness}`;
}

console.log(describeValue("0"));  
console.log(describeValue(NaN));  
console.log(describeValue(null));  
console.log(describeValue(25));  
console.log(describeValue("hello"));  

//Question 2
function getDaytype(day) {
    switch (day.toLowerCase()) {
        case "friday":
        case "saturday":
            return "Weekend";

        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";    
        default:
            return "Invalid Day";
    }
}

console.log(getDaytype("Monday"));
console.log(getDaytype("Friday"));
console.log(getDaytype("Bandarban"));
console.log(getDaytype("friday"));

//Question 3
function validateUsername(username) {
    if (username.length < 4 ) {
        return "Too short";
    }
     else if (username.includes (" ")) {
        return "No spaces allowed";
    }
    else if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    else {
        return "Available";
    }
}
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("Admin_Rahim"));

//Question 4
function getCngFare(distance, isNight=false, waitingMinutes=0) {
    let fare =50;
    if (distance >= 2) {
        fare += (distance - 2) * 15;
    }
    const waitingFare = waitingMinutes * 2;
    let totalfare = fare + waitingFare;

    if (isNight) {
        totalfare = totalfare * 1.2;
    }
    return totalfare;
}
console.log(getCngFare(2));
console.log(getCngFare(1));
console.log(getCngFare(5));
console.log(getCngFare(10));
console.log(getCngFare(5,true));
console.log(getCngFare(5,true,10));

//Question 5

const getChaseVerdict = (target, scored, ballsLeft)=> {
    const runsNeeded = (target - scored);

    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }
    const requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict;

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } 
    else if (requiredRate <= 12) {
        verdict = "Tough";
    }
    else {
        verdict = "Almost Impossible";
    }
     
        return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));

