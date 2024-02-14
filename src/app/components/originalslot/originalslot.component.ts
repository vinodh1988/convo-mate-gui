import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-originalslot',
  templateUrl: './originalslot.component.html',
  styleUrls: ['./originalslot.component.css']
})
export class OriginalslotComponent {
  loading=false
  conversation=false
  nothingyet=true
  notable=false
  convodata:string=""
  
  @Input() info:string=""
  convoset:string[]=[]
  ngOnChanges() {
    this.loading=false
    this.conversation=false
    this.nothingyet=false
    this.notable=false
    
     if(this.info=="nothingyet")
        this.nothingyet =true
     else if(this.info=="loading")
        this.loading=true;
     else if(this.info=="Not able to generate conversation")
         this.notable=true
     else 
         {
          this.conversation=true
          this.convodata = this.info
          this.convoset = this.convodata.split("\n\n");
         }
  }

}
