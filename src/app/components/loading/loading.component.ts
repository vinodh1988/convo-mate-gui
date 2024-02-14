import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {
  dots=""
  current=1;

  dotit(){
     for(let x=1;x<=this.current;x++){
      this.dots+=" . "
     }
     this.current+=1;
     if(this.current=6)
      this.current=1;
    alert(this.dots)
    
  }

  ngOnInit(){
     this.dots=""
     setInterval(()=>{
      this.dots=""
      for(let x=1;x<=this.current;x++){
        this.dots+=" . "
       }
       this.current+=1;
       if(this.current==6){
        this.current=1;
     
       }
     },1000);
  }
}
