//var weekNum = prompt("Enter the number of the day")
var weekNumberstoWords=Number (prompt("Please enter the day number"));
//var weekday=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var day;
switch (weekNumberstoWords){
    case 1:
        day ="Monday";
        break;
        
    case 2:
        day = "Tuesday";
        break;

    case 3:
        day ="Wednesday";
        break;
    
    case 4:
        day ="Thurday";
        break;

    case 5:
        day ="Friday";
        break;

    case 6:
        day ="Saturday";
        break;
    
    case 7:
        day ="Sunday"

}

document.write(day)