import { Component } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-transyform',
  templateUrl: './transyform.component.html',
  styleUrls: ['./transyform.component.css']
})
export class TransyformComponent {
 language:string=""
 languages:string[]=["Hindi","Kannada","Marathi","Bengali","Telugu","Tamil"]
 context:string=""
 current:string="nothingyet"
 show:boolean=false
 tcurrent:string="nothingyet"
 tabIndex:number=0
 constructor(private ts:TranslateService){}

  doApiCall() {
            this.current= "loading"
            this.show = false
            this.ts.getConversation(this.context).subscribe({
              next: (data:any)=> {
                 this.current = data.conversation
                 this.show = true
                 console.log(data.conversation.split("\n\n"));
              },
              error: ()=> {
                 this.current = "Not able to generate conversation"
                 this.show = false
              }
            })
  }

  doTranslateCall() {
    this.tcurrent= "loading"
    this.show = true
    this.tabIndex =  1
    this.ts.getTranslation(this.language,this.current).subscribe({
      next: (data:any)=> {
         this.tcurrent = data.conversation
         this.show = true
         console.log(data.conversation.split("\n\n"));
      },
      error: ()=> {
         this.tcurrent = "Not able to generate translation"
         this.show = true
      }
    })
}
}
