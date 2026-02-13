import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

export function brevoInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  if (/brevo/.test(req.url)) {
    const reqWithApiKey = req.clone({
      headers: req.headers.set('api-key', environment.brevo.apiKey),
    });
    return next(reqWithApiKey);
  }

  return next(req);
}
