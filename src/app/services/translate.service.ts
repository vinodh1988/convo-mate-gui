import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http:HttpClient) { }

  getConversation(context:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://localhost:5000/api/conversation",{context:context},httpOptions)

  }

  getTranslation(language:any,convotext:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post("http://localhost:5000/api/translated",
    {language:language, text: convotext},httpOptions)

  }
}
