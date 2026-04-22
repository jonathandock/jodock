import { Component, input } from '@angular/core';
import { Song } from '../../models/music.models';
import { NgOptimizedImage } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { IconComponent } from '../../../../shared/components/icon/icon.component';
import { IconsEnum } from '../../../../shared/components/icon/icon.models';

@Component({
  selector: 'app-new-release',
  imports: [NgOptimizedImage, ButtonComponent, IconComponent],
  templateUrl: './new-release.component.html',
  styleUrl: './new-release.component.css',
})
export class NewReleaseComponent {
  public song = input.required<Song>();

  public IconEnum = IconsEnum;

  public open(url: string): void {
    window.open(url, '_blank');
  }
}
