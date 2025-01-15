import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public iframeUrl: SafeResourceUrl | undefined;
  public showIframe = false;
  public routerSubscription: any;

  constructor(private _sanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit() {
  }

  public loadIframe() {
    const url = "https://tradu-qa.globaltradingnetwork.com/initiate-sso";
    this.iframeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(url);
    this.showIframe = true;
  }

  // public openPopUp() {
  //   const YOUR_REDIRECT_URI = "http://localhost:4200/";
  //   const authUrl = "https://tradu-qa.globaltradingnetwork.com/initiate-sso";
  //   const popup = window.open(authUrl, "authPopup", "width=500,height=700");

  //   const interval = setInterval(() => {
  //       try {
  //           if (popup && popup.closed) {
  //               clearInterval(interval);
  //               console.log("");
  //           }

  //           if (popup && popup.location.href.startsWith(YOUR_REDIRECT_URI)) {
  //               console.log("Pop up Details----------------------------------", popup.location.href);
  //               popup.close();
  //               clearInterval(interval);

  //               const urlParams = new URLSearchParams(popup.location.search);
  //               const authorizationCode = urlParams.get("code");
  //               if (!authorizationCode) {
  //                 console.error("Authorization Code not found");
  //                 return;
  //               }
  //               console.log("Authorization Code:", authorizationCode);

  //               this.loadIframe(authorizationCode);

  //           }
  //       } catch (error) {
  //         console.log("Error", error);
  //           // Ignore cross-origin errors until redirected to the same origin
  //       }
  //   }, 500);
  // }
}