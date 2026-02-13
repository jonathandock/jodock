import { Component } from '@angular/core';
import { HeroComponent } from '../../../../shared/components/hero/hero.component';
import { SocialMediaComponent } from '../../../../shared/components/social-media/social-media.component';
import { NewsletterFormComponent } from "../../../contact/components/newsletter-form/newsletter-form.component";
import { SectionComponent } from "../../../../shared/components/section/section.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, SocialMediaComponent, NewsletterFormComponent, SectionComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}
