var rect= require('./rectangle');

function rectangle(l,b){
    console.log("solving for rectangle l ="+l +" and b ="+ b);
    rect(l,b,(err,recta)=>{
        if(err){
            console.log("ERROR "+err.message);
        }
        else{
            console.log("Perimeter is "+recta.perimeter());
            console.log("ARea is "+recta.area());
        }
    });
    console.log("THIS line is at the end but still executing first because of time interval ");
}

rectangle(5,6);
rectangle(10,12);
rectangle(0,-2);
rectangle(2,4);