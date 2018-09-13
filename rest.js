function f(x,y,...rest){
    return `Sum: ${x+y} \n${rest.map((value,index) => 
        `rest value ${index} is a ${value.constructor.name}`).join("\n")}`    
  }
  
  //console.log(f(5,2,true,2,"hello World",[1,2,3],new Date(),{}));

  var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
  var restParams = [ ...rest ];
  console.log(restParams);
  //console.log(f(5,2,...restParams));  

  var chars = [... f(5,2,...restParams)];
  //console.log(chars);
