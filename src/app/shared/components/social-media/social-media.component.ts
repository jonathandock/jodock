import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-social-media',
  imports: [NgOptimizedImage],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css',
})
export class SocialMediaComponent {
  public config = input<'full' | 'music' | 'social'>('full');
  public position = input<'fixed' | 'relative'>('relative');

  public socialMedia = environment.socialMedia;
  public musicLinks = environment.musicLinks;
}
