function getPrime(n) {
  var i = 0;
  var num = 0;
  //create an empty array
  var primeNumber = [];
  //check if the argument supplied is a string
  if(typeof(n)==="string"){
    return "invalid input"
  }
  //check if the argument supplied is a negative value
  else if(n<0){
    return "invalid input"
  }
  else{
    for (i=1; i<=n; i++) {
      //initialize counter to 0
      var counter = 0;
      for (num = i; num>=1; num--) {
        //if i remainder num is equal to 0, increment counter
        if(i%num===0) {
          counter = counter + 1;
        }
      }
      if(counter==2) {
        primeNumber.push(i);
      }
    
    }
    console.log(primeNumber);
  }
}