import { Component } from '@angular/core';
import {ButtonDirective} from "primeng/button";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-primeng-card',
  standalone: true,
  imports: [ButtonDirective, CardModule],
  templateUrl: './primeng-card.component.html',
  styleUrl: './primeng-card.component.css'
})
export class PrimengCardComponent {

}
