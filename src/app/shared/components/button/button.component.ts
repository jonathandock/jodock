import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, contentChild, input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  public color = input<string>();
  public command = input<string>();
  public commandFor = input<string>();
  public disabled = input<boolean>(false);
  public type = input<"submit" | "reset" |"button">("button");
  public fill = input<'solid' | 'outline' | 'clear'>('solid');
  public size = input<'small' | 'default' | 'large'>('default');
  public shape = input<'rounded' | 'circle' | 'default'>('default');

  public cssClasses = computed<string>(() => {
    let classes = `color-${this.color()} ${this.fill()} size-${this.size()} shape-${this.shape()}`;
    switch (this.size()) {
      case 'small':
        classes += ' px-4 py-2';
        break;

      default:
        classes += ' px-6 py-2';
        break;
    }

    return classes;
  });
}
