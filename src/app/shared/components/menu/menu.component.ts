import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, SocialMediaComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
