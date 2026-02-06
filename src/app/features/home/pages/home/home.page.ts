import { Component } from '@angular/core';
import { HeroComponent } from '../../../../shared/components/hero/hero.component';
import { SocialMediaComponent } from '../../../../app/shared/components/social-media/social-media.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SocialMediaComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}
