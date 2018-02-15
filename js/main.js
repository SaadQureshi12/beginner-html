function print(){
    console.log("hello" +arguments[0]);
    document.write(person.id + "" + person.name)
        }
    
      function mult(a,b){
          
         var c=a*b;
      
    console.log("the multiplication of two no" + c);
    
      }
        function add(e,f)
            {
           var d=e+f;
    console.log("the addition of two no" + d);
            }
    
    function sub()
    {
        h=arguments[0];
        i=arguments[1];
        j=arguments[2];
        
        var g=h-i-j;
    console.log("the substraction of two no" + g);
    }
    var person={ id:1, name:"saad"};
    