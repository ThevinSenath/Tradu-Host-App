import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, SideMenuComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public iframeUrl: SafeResourceUrl | undefined;
  public showIframe = false;

  constructor(private _sanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit() {
  }

  public loadIframe() {
    const url = "https://tradu-qa.globaltradingnetwork.com/shared-remote-resources/initiate-sso/initiate-sso.html";
    this.iframeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    this.showIframe = true;
  }
}