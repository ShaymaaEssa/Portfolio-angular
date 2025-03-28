import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConatctComponent } from './conatct/conatct.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { notDeepStrictEqual } from 'assert';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:HomeComponent, title:"Sh-Home"},
    {path:"about", component:AboutComponent, title:"Sh-About"},
    {path:"portfolio", component:PortfolioComponent, title:"Sh-Portfolio"},
    {path:"contact", component:ConatctComponent, title:"Sh-Contact"},
    {path:"**", component:NotFoundComponent, title:"NotFound"}
];
