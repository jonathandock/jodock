import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section',
  imports: [],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css',
})
export class SectionComponent {
  public contrast = input<'none' | 'dark' | 'light'>('none');
  public fullscreen = input<boolean>(false);
  public alignContent = input<'top' | 'bottom' | 'center'>('top');
  public backgroundImg = input<string>('');
}
