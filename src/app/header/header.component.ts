import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header {
  @Output() pageChanged: EventEmitter<string> = new EventEmitter();
  collapsed = true;

  navigationOnClick(component: string) {
    this.pageChanged.emit(component);
  }
}
