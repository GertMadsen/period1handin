let fName = "Kurt", lName = "Wonnegut";
console.log(`First: ${fName}, Last: ${lName}`);

[fName, lName] = [lName, fName];
console.log(`First: ${fName}, Last: ${lName}`);

function getPerson(){
    return {
      firstName: "Kurt",
      lastName: "Wonnegut",
      gender : "Male",
      email: "kurt@wonnegut.dk",
      phone: "12345",
    }
  }

  let {lastName, phone} = getPerson();  
  console.log(`Lastname: ${lastName}, Phone: ${phone}`)