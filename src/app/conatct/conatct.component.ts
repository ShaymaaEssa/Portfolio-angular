import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { DecorationComponent } from "../decoration/decoration.component";


@Component({
  selector: 'app-conatct',
  imports: [DecorationComponent, FormsModule],
  templateUrl: './conatct.component.html',
  styleUrl: './conatct.component.css'
})
export class ConatctComponent {

  labelDisplayed:boolean = false;
  userNameValue :string = '';
  userAgeValue:string = '';
  userEmailValue:string='';
  userPasswordValue:string='';


}
