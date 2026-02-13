import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { NewsletterData } from '../../models/forms.models';
import { environment } from '../../../../../environments/environment';
import { BrevoContact, BrevoContactAttributes } from '../../models/brevo.models';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class BrevoApi {
  public http = inject(HttpClient);

  /**
   * Create new contact in Brevo database
   * @param contact
   * @returns
   */
  public createContact(contact: NewsletterData): Observable<any> {
    console.log(this.formatCreateContactParams(contact));
    return this.http
      .post(`${environment.brevo.endpoint}/contacts`, this.formatCreateContactParams(contact))
      .pipe(
        tap((res) => {
          console.log(res);
        }),
      );
  }

  /**
   * Format contact object for brevo api
   * @param contact
   * @returns
   */
  private formatCreateContactParams(contact: NewsletterData): BrevoContact {
    return {
      listIds: [2],
      email: contact.email,
      attributes: {
        PRENOM: contact.firstName,
        NOM: contact.lastName,
      },
    };
  }
}
