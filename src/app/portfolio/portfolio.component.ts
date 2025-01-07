import { Component } from '@angular/core';
import { DecorationComponent } from "../decoration/decoration.component";
import strict from 'assert/strict';

@Component({
  selector: 'app-portfolio',
  imports: [DecorationComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgSrc:String = '';
  isFocusLayerDisplayed:boolean = false;

  displayFocusLayer(index:number):void{
      this.isFocusLayerDisplayed = true;
      this.imgSrc = `/images/${index}.png`
  }
  closeFocusLayer(): void {
    this.isFocusLayerDisplayed = false;
  }

}
