import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GoogleSpacesService {
  constructor(private readonly httpService: HttpService) {}

  webhook(msg: string): Observable<AxiosResponse<any>> {
    try{
      const data = JSON.stringify({
        'text': msg,
      });
  
      return this.httpService.post(process.env.WEBHOOK, data, {
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      }).pipe(
        map((axiosResponse: AxiosResponse) => {
          return axiosResponse.data;
        }),
     );
    }
    catch(error) {
      console.error(error);
    }
  }
}
