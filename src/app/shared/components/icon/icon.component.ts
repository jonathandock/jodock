import { Component, input } from '@angular/core';
import { IconsEnum } from './icon.models';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css',
})
export class IconComponent {
  public icon = input<IconsEnum>();
  public color = input<string>();
  public fill = input<'solid' | 'clear'>('clear');
  public size = input<'small' | 'default' | 'large'>('default');
  public shape = input<'rounded' | 'circle' | 'default'>('default');
}
