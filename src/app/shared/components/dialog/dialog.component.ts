import { Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dialog',
  imports: [ButtonComponent],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  public dialogId = input<string>('');
  public dialogButtonText = input<string>('');
}
