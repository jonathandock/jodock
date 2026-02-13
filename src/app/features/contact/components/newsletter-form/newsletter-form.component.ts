import { Component, inject, signal } from '@angular/core';
import { form, FormField, required, email, submit } from '@angular/forms/signals';
import { NewsletterData } from '../../models/forms.models';
import { lastValueFrom } from 'rxjs';
import { BrevoApi } from '../../services/brevo/brevo-api';

@Component({
  selector: 'app-newsletter-form',
  imports: [FormField],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.css',
})
export class NewsletterFormComponent {
  public brevoApi = inject(BrevoApi);
  public newsletterFormModel = signal<NewsletterData>({
    firstName: '',
    lastName: '',
    email: '',
  });

  public newsletterForm = form(this.newsletterFormModel, (schemaPath) => {
    required(schemaPath.firstName, { message: 'Le prénom est requis' });
    required(schemaPath.email, { message: "L'adresse email est requise" });
    email(schemaPath.email, { message: 'Merci de renseigner une adresse email valide' });
  });

  public onSubmit(event: Event): void {
    // prevent page to reload
    event.preventDefault();
    const formData = this.newsletterFormModel();
    submit(this.newsletterForm, async () => {
      const result = await lastValueFrom(this.brevoApi.createContact(formData));
      console.log('result', result);
    });
    console.log(formData);
  }
}
