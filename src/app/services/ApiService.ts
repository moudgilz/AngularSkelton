import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';
import { IResult } from './iresult';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  public getTrip(fromDt, toDate) {
    // return this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=9bce8c2c59be422f81fe1adb6ba7b304');
    return this.httpClient.get("http://localhost:7071/api/Function1?from=" + fromDt + "&to=" + toDate + "");
  }

  public postTrip(dataModel) {
    const uri = 'http://localhost:7071/api/Function2';
    const requestType = 'POST';
    const formData = new FormData(); // Currently empty
    formData.append('model', JSON.stringify(dataModel));

    const token = null; //
    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer ${token}`);
    headers.append('Accept', 'application/json');
    const req = new HttpRequest<any>(
      requestType,
      uri,
      formData,
      {
        headers: headers,
        responseType: 'json',
      });
    return this.httpClient.request<any>(req).pipe(
      filter(_r => _r instanceof HttpResponse),
      map((_r) => {
        return _r as HttpResponse<IResult | any>;
      }),
    );
  }
}