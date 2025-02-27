import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  @Output() loadIframe = new EventEmitter<void>();

  onButtonClick() {
    this.loadIframe.emit();
  }
}