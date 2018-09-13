function f(x,y,...rest){
    return `Sum: ${x+y} \n${rest.map((value,index) => 
        `rest value ${index} is a ${value.constructor.name}`).join("\n")}`    
  }

  export default f;