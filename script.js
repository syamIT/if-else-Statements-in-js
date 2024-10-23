// ________________________________________________________________
// 1. Income Tax Calculation Based on Income Slabs
// Problem:
// Write a program to calculate income tax based on the following slabs:

// Income <= 2,50,000: No tax

// Income > 2,50,000 and <= 5,00,000: 5% of the amount exceeding 2,50,000

// Income > 5,00,000 and <= 10,00,000: 12,500 + 20% of the amount exceeding 5,00,000

// Income > 10,00,000: 1,12,500 + 30% of the amount exceeding 10,00,000

// Requirements:

// Input: A variable representing income

// Output: Total tax payable





let income = +prompt("Enter Income : ");
if(income <= 250000){
    console.log("No Tax");
}
else if(income > 250000 && income <= 500000){
    exceed = income - 250000
    console.log("Exceed amount : ",exceed);
    tax_paid = (1/20)*exceed;
    console.log("total tax payable",tax_paid);
}
else if(income > 500000 && income <= 1000000){
    exceed = income - 500000
    console.log("Exceed amount",exceed);
    tax_paid = (1/5*exceed) + 12500;
    console.log("total tax payable",tax_paid);
}

else if(income > 1000000){
    exceed = income - 1000000
    console.log("Exceed amount",exceed);
    tax_paid = ((3/10)*exceed) + 112500
    console.log(tax_paid);
}







// ____________________________________________________________________
// 2.Shipping Cost Based on Weight and Destination

// Problem:
// Write a program that calculates the shipping cost for a parcel based on its weight and destination:

// Weight <= 1kg:

// Local: 5rs

// National: 8rs

// International: 15rs

// Weight > 1kg and <= 5kg:

// Local: 10rs

// National: 15rs

// International: 30rs

// Weight > 5kg and <= 10kg:

// Local: 20rs

// National: 25rs

// International: 50rs

// Weight > 10kg:

// Local: 30rs

// National: 35rs

// International: 70rs


// Requirements:

// Input: Two variables for weight and destination

// Output: The total shipping cost




let weight = parseInt(prompt("Enter weight : "));
let dest = prompt("Enter dest : ").toLowerCase();
if(weight <= 1){
let res = (dest == "local") ? "Total shipping cost : 5rs" : (dest == "national") ? "Total shipping cost : 8rs" : (dest == "international") ? "Total shipping cost : 15rs" : "Invalid destination";
console.log(res);
}

else if(weight > 1 && weight <= 5){
    // let res = (dest == "local") ? "Total shipping cost : 10rs" : (dest == "national") ? "Total shipping cost : 15rs" : (dest == "international") ? "Total shipping cost : 30rs" : "Invalid Destination";
    let res1 = (dest == "local") ? "Total shipping cost : 10rs" : (dest == "national") ? "Total shipping cost : 15rs" : (dest == "international") ? "Total shipping cost : 30rs" : "Invalid destination";
    console.log(res1);
}

else if(weight > 5 && weight <=10){
    let res = (dest == "local") ? "Total shipping cost : 20rs" : (dest == "national") ? "Total shipping cost : 25rs" : (dest == "international") ? "Total shipping cost : 50rs" : "Invalid Destination"

    console.log(res);
}
else if(weight > 10){
    let res = (dest == "local") ? "Total shipping cost : 30rs" :(dest == "national") ? "Total shipping cost : 35rs" : (dest == "international") ? "Total shipping cost : 70rs" : "Invalid Destination";
    console.log(res);
}






// ________________________________________________________________________
// 3 Electricity Bill Calculation Based on Usage

// Problem:
// Write a program to calculate the electricity bill based on the number of units consumed:

// Units <= 100: 1rs per unit

// Units > 100 and <= 300: 1rs per unit for the first 100 units + 1.5rs per unit for the next 200 units

// Units > 300: 1rs per unit for the first 100 units + 1.5rs per unit for the next 200 units + 2rs per unit beyond 300

// Requirements:

// Input: A variable representing the number of units consumed

// Output: Total electricity bill amount






let units = Number(prompt("Enter units : "));
if(units <=100){
    console.log("Total electricity bill amount : ",units * 1);
}
else if(units > 100 && units <= 300){
    console.log("Total electricity bill amount : ",(100 * 1)+ ((units - 100)*1.5));
}
else if(units > 300){
    console.log("Total electricity bill amount : ",(100*1) + ((units - 100)*1.5) + ((units - 300)*2))
}
