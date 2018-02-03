//create objects
var atticus = { name: "Atticus", employeeNumber: "2405", annualSalary: "47000", reviewRating: 3 };
var jem = { name: "Jem", employeeNumber: "62347", annualSalary: "63500", reviewRating: 4 };
var boo = { name: "Boo", employeeNumber: "11435", annualSalary: "54000", reviewRating: 3 };
var scout = { name: "Scout", employeeNumber: "6243", annualSalary: "74750", reviewRating: 5 };
var robert = { name: "Robert", employeeNumber: "26835", annualSalary: "66000", reviewRating: 1 };
var mayella = { name: "Mayella", employeeNumber: "89068", annualSalary: "35000", reviewRating: 2 };
//employee array
var employees = [ atticus, jem, boo, scout, robert, mayella ];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
function calculateBonusFor(employee){
  console.log('in calculate bonus for:',employee);
  //create a local variable that will not be needed outside of this function
  var bonusPercentage = 0;
  //add our conditional statements below
  //review employee ratings
  if(employee.reviewRating <= 2){
    console.log('in review rating <= 2 for a bonus of 0%');
    bonusPercentage = 0;
  }//end 1 and 2 ratings
  else{
    if(employee.reviewRating == 3){
      console.log('review rating 3 for a bonus of 4%');
      bonusPercentage = 4;
    }//end rating 3
    else if(employee.reviewRating == 4){
      console.log('review rating 4 for a bonus of 6%');
      bonusPercentage = 6;
    }//end rating 4
    else if(employee.reviewRating == 5){
      console.log('review rating 5 for a bonus of 10%');
      bonusPercentage = 10;
    }//end rating 5
    if(bonusPercentage < 0.0){
      console.log('bonus percentage is 0 or less, setting to 0');
      bonusPercentage = 0;
    }//end 0% min bonus
    else if(bonusPercentage > 13){
      console.log('bonus percentage is greater than 13, setting to 13');
      bonusPercentage = 13;
    }//end 13% max bonus
    if(employee.employeeNumber.length == 4){
      console.log('employee has been here for over 15 years (based on employeeNumber), adding on 5%');
      bonusPercentage += 5;
    }//end +5% for 15 years of service
    else if (Number(employee.annualSalary > 65000)){
      console.log('employee makes more then 65k, deducting 1%');
      bonusPercentage -= 1;
    }//end salary > 65k
  }//end calculateBonusFor
  //this is where we build out the employee objects
  return{
    name:employee.name,
    bonusPercentage:bonusPercentage+'%',
    totalCompensation:Number(employee.annualSalary)*(Number(bonusPercentage)/100)+Number(employee.annualSalary),
    totalBonus:Math.round(Number(bonusPercentage/100)*employee.annualSalary)//added Math.round to get to the nearest $
  };
}

function calculateAllBonuses(){
  console.log('in calc all bonuses');
  $('#employeesOut').empty();//clearing this before we start the loop
  //loop through employees
  for (var i = 0; i < employees.length; i++) {
    var calculatedEmployee = calculateBonusFor(employees[i]);
    var stringToAppend = '<li><strong>' + calculatedEmployee.name + ':'
    stringToAppend += ' $' + calculatedEmployee.totalCompensation + '</strong>';
    stringToAppend += ' (' + calculatedEmployee.bonusPercentage + ', ' + calculatedEmployee.totalBonus
     + ')</li>';
    $( '#employeesOut' ).append( stringToAppend );
  }//this ends the for loop
}//this ends the calcuate all bonuses

$(document).ready(function(){
  $('#calculateButton').on('click',function(){
    console.log('in calcuatedEmployee on click');
    calculateAllBonuses();
  });//end calculateEmployee
});//end doc ready
