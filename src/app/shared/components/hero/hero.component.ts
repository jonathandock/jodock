import { NgOptimizedImage } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public logo = input<string>('');
  public backgroundImage = input<string>('');
  public hasContent = input<boolean>(false);
  public fullscreen = input<boolean>(false);
}
