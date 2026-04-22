import { Component, computed, inject } from '@angular/core';
import { HeroComponent } from '../../../../shared/components/hero/hero.component';
import { SocialMediaComponent } from '../../../../shared/components/social-media/social-media.component';
import { NewsletterFormComponent } from '../../../contact/components/newsletter-form/newsletter-form.component';
import { SectionComponent } from '../../../../shared/components/section/section.component';
import { DialogComponent } from '../../../../shared/components/dialog/dialog.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { IconsEnum } from '../../../../shared/components/icon/icon.models';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { MusicService } from '../../../music/services/music.service';
import { NewReleaseComponent } from '../../../music/components/new-release/new-release.component';
import { NgOptimizedImage } from '@angular/common';
import { LogoComponent } from '../../../../shared/components/logo/logo.component';
import { TitleComponent } from '../../../../shared/components/title/title.component';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SocialMediaComponent,
    NewsletterFormComponent,
    SectionComponent,
    DialogComponent,
    IconComponent,
    ButtonComponent,
    NewReleaseComponent,
    NgOptimizedImage,
    LogoComponent,
    TitleComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  host: {
    class: 'page',
  },
})
export class HomePage {
  public musicService = inject(MusicService);

  public featuredSong = computed(() => this.musicService.getFeaturedSong());

  public IconEnum = IconsEnum;
}
