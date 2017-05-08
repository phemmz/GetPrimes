function getPrime(n) {
  var i = 0;
  var num = 0;
  var primeNumber = [];
  if(typeof(n)==="string"){
    return "invalid input"
  }
  else if(n<0){
    return "invalid input"
  }
  else{
    for (i=1; i<=n; i++) {
      var counter = 0;
      for (num = i; num>=1; num--) {
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