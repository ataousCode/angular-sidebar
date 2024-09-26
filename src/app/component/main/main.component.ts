import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  @Input() isLeftSidebarCollapsed!: boolean;
  @Input() screenWidth!: number;

  get sizeClass(): string {
    if (this.isLeftSidebarCollapsed) {
      return '';
    }
    return this.screenWidth > 768 ? 'body-trimmed' : 'body-md-screen'
  }

}
