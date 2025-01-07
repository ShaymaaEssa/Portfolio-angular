import { Component } from '@angular/core';
import { FooterSection1Component } from "../footer-section1/footer-section1.component";
import { FooterSection2Component } from "../footer-section2/footer-section2.component";

@Component({
  selector: 'app-footer',
  imports: [FooterSection1Component, FooterSection2Component],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
