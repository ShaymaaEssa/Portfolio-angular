import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-decoration',
  imports: [],
  templateUrl: './decoration.component.html',
  styleUrl: './decoration.component.css'
})
export class DecorationComponent {
  @Input() isWhite:boolean = true;
}
