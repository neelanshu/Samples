import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Adal4Service, Adal4HTTPService } from 'adal-angular4';
import { environment } from '../../../environments/environment';
import { Employee, IEmployee } from './models';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable()
export class EmployeeService {

    tokenNew: string;

    constructor( private httpNew: Http, private adal4Service: Adal4Service)
    {

    }
  //   public getEmployees(): Observable<Array<IEmployee>>
  //   {
  //     this.adal4Service.acquireToken('f6fb1cd5-83a0-49e8-a65c-32f6cd2d487c').subscribe(p =>
  //     {
  //     this.tokenNew = p;
  //     console.log('Acquired token = ' + this.tokenNew);
  //     },
  //     (error => {
  //       console.log(error);
  //     }));

  //     const  headersNew = new  Headers({ 'Content-Type': 'application/json' });
  //     headersNew.append('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNTUWRoSTFjS3ZoUUVEU0p4RTJnR1lzNDBRMCIsImtpZCI6IlNTUWRoSTFjS3ZoUUVEU0p4RTJnR1lzNDBRMCJ9.eyJhdWQiOiI5NTU1Njc4ZS0zZTcwLTQzYzctODFmYy03ODAxODg2MjRhM2QiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC83ZjBiNDRkMi0wNGY4LTQ2NzItYmY1ZC00Njc2Nzk2NDY4YTMvIiwiaWF0IjoxNTE5OTAzMjQ5LCJuYmYiOjE1MTk5MDMyNDksImV4cCI6MTUxOTkwNzE0OSwiYW1yIjpbInB3ZCJdLCJmYW1pbHlfbmFtZSI6IlNoYXJtYSIsImdpdmVuX25hbWUiOiJOZWVsYW5zaHUiLCJpcGFkZHIiOiIzMS41Mi4xMzkuMTUwIiwibmFtZSI6Ik5lZWxhbnNodSBTaGFybWEiLCJub25jZSI6IjE3NjcyNDMwZWQ2NzQ1ZWI4YzBhN2MyYTRmN2ZkNGM1XzIwMTgwMzAxMTEzMDQ3Iiwib2lkIjoiNjA5YjVhNGUtY2ZkNS00YWUxLThkY2UtZWZhZWI1Mjk0ZTA5Iiwic3ViIjoiM2hGQkZYZ0FSSVJDODczbF9qMm5xb251SjdtaEc4TUhpcjNFMkhxWmpnZyIsInRpZCI6IjdmMGI0NGQyLTA0ZjgtNDY3Mi1iZjVkLTQ2NzY3OTY0NjhhMyIsInVuaXF1ZV9uYW1lIjoibmVlbGFuc2h1LnNoYXJtYUBhbGxlbm92ZXJ5Lm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6Im5lZWxhbnNodS5zaGFybWFAYWxsZW5vdmVyeS5vbm1pY3Jvc29mdC5jb20iLCJ1dGkiOiJNZExCR2RSbzNVVzZ4QXlNY1dzRkFBIiwidmVyIjoiMS4wIn0.bPUTFWe74toWEvoyVyiy0V6bDBMeTyEhSeqrbw7ngLNLzfe0Jbhvrsp9iXl8ll6EryF2nkMQA-O3MsyqYsr_FDod70BjvUr_Lr_JZtgSR8dtWkXfMEJT4gG6I4q3ThumQUJ4KnCcwX_tHqcA_F6mFiOqNKRupSOK_9lNVnUKcP9a_0xANtL6cvwiB2uWTCQa4XS7fTP0W_f1lirhYhvcuwPmjypptNNkHhEch0N1gdwoOk91wyE8gJA_H34_ytWibVZpuzJcosOYSC8mW2qqrlS9mmlbmtMuKdr1_2xCsVaIF1noIEKjNPwe8BBrqDkOCz7TewezRp_0FaMVf7HrlQ');
  //     const options = new RequestOptions();
  //     options.headers = headersNew;

  //     return this.http.get(`${environment.apiUrl}arbstatus/all`, options)
  //       .map(response => {
  //         const tmp = <IEmployee[]>response.json();
  //         console.log(tmp);
  //                 return tmp.map(e => new Employee(e));
  //       });
  // }

  public getEmployees(): Observable<Array<IEmployee>>
    {

      this.adal4Service.acquireToken('9555678e-3e70-43c7-81fc-780188624a3d').subscribe(p =>
      {
      this.tokenNew = p;
      console.log('Acquired token = ' + this.tokenNew);
      },
      (error => {
        console.log(error);
      }));

      const  headersNew = new  Headers({ 'Content-Type': 'application/json' });
      headersNew.append('Authorization', 'Bearer ' + this.tokenNew);
      const options = new RequestOptions();
      options.headers = headersNew;

      return this.httpNew.get(`${environment.apiUrl}/submission/all`,options)
        .map(response => {
          const tmp = <IEmployee[]>response.json();
          console.log(tmp);
                  return tmp.map(e => new Employee(e));
        });
  }
}
