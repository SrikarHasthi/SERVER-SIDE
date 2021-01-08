module.exports = (l,b,callback) => {
    if(l<=0||b<=0){
        setTimeout(()=>{
            callback(new Error("Rectangle dimensions should be greater than 0"),null)
        },2000)
    }
    else{
        setTimeout(()=>{
            callback(null,{
                perimeter:()=> (2*(l+b)),
                area:function (){
                    (l*b)
                } 
            })
        },2000)
    }
};
