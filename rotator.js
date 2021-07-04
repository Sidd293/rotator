class rotator{
    constructor(obj,inertia,velocity){
      this.obj = obj;
      this.inertia = inertia;
      this.velocity = velocity;
      this.deg = 20;
     
    }
    rotate()
    { console.log(this.obj)
    var  vat = this; 
    var gat = this
    this.obj.addEventListener("mousedown", function(){
      let that = this;
    var vel =  vat.velocity
     console.log(gat)
      console.log(that.obj);
        setInterval(
        function(){
      if(vel>0)
     { vat.deg =vat.deg +vel;
      vel =vel -vat.inertia;} 
  console.log(vat.inertia);
      that.style.transform = `rotate(${vat.deg}deg)`
        }
        ,20
      )
    })
    
    
    }
    
    
    
    
    
    }
