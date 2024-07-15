import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {MenuItem, PrimeTemplate} from "primeng/api";
import {TabMenuModule} from "primeng/tabmenu";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterLink,
    PrimeTemplate,
    TabMenuModule
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {
  items: MenuItem[] | undefined;
  private router = inject(Router);

  ngOnInit() {
    this.items = [
      {label: 'PrimeNG Panels', route: '/tabmenu'}
    ]
  }
}
