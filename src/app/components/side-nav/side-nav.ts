import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MatIconModule } from '@angular/material/icon';


@Component({
  imports: [RouterModule, MatIconModule],
  selector: "app-side-nav",
  styleUrl: "./side-nav.scss",
  templateUrl: "./side-nav.html",
})
export class SideNav {
  
  titles = [
    {icon: 'home',title: "Home", route: "/home"},
    {icon: 'calendar_today', title: "Calendar", route: "/calendar"},
    {icon: 'settings', title: "Settings", route: "/settings"},
  ]
}