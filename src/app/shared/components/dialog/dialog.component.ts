import { Component, input } from '@angular/core';

@Component({
  selector: 'app-dialog',
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css',
})
export class DialogComponent {
  public dialogId = input<string>('');
  public dialogButtonText = input<string>('');
}
