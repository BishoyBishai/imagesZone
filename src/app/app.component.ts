import { Component } from "@angular/core";
import {
  RouteConfigLoadStart,
  RouteConfigLoadEnd,
  Router,
} from "@angular/router";
import { Event as RouterEvent } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isShowingRouteLoadIndicator: boolean;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    this.router.events.subscribe(
      (event: RouterEvent): void => {
        if (event instanceof RouteConfigLoadStart) {
          this.isShowingRouteLoadIndicator = true;
        } else if (event instanceof RouteConfigLoadEnd) {
          this.isShowingRouteLoadIndicator = false;
        }
      },
    );
  }
}
