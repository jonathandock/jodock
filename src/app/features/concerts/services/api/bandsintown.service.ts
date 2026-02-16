import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BandsInTownService {
  public http = inject(HttpClient);

  public concerts = signal<any>(null);

  public loadConcerts(): any {
    console.log('load concert');
    this.http
      .get(`${environment.bandsInTown.endpoint}/events/?app_id=${environment.bandsInTown.apiKey}`)
      .pipe(tap((res) => console.log(res)))
      .subscribe();
  }
}
