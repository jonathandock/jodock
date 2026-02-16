import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { NewsletterData } from '../../models/forms.models';
import { environment } from '../../../../../environments/environment';
import { CreateContact, ErrorModel } from '@getbrevo/brevo';
import { BrevoApiError, BrevoApiResult, BrevoApiSuccess } from '../../models/brevo.models';

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
  public createContact(contact: NewsletterData): Observable<BrevoApiResult<BrevoApiSuccess>> {
    console.log(this.formatCreateContactParams(contact));
    return this.http
      .post<BrevoApiSuccess>(
        `${environment.brevo.endpoint}/contacts`,
        this.formatCreateContactParams(contact),
      )
      .pipe(
        map((data) => ({
          success: true,
          data,
        })),
        catchError((err: HttpErrorResponse) =>
          of({
            success: false,
            error: 'error',
          }),
        ),
      );
  }

  /**
   * Format contact object for brevo api
   * @param contact
   * @returns
   */
  private formatCreateContactParams(contact: NewsletterData): CreateContact {
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
