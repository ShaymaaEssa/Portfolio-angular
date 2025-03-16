import { Component } from '@angular/core';
import { DecorationComponent } from "../decoration/decoration.component";
import strict from 'assert/strict';

interface IProjects {

  id: number,
  projectTitle: string,
  img:string,
  desc:string,
  github:string,
  liveDemo:string,
  skills:string[]
};

@Component({
  selector: 'app-portfolio',
  imports: [DecorationComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  
  projects:IProjects[] = [
  //   {
  //     id:0,
  //     projectTitle:"My Portfolio",
  //     img:"/images/portfolio.png",
  //     desc:"This portfolio website is entirely developed by me using the Angular framework. It showcases my information, projects, and skills in a clean, responsive, and interactive design, highlighting my expertise in frontend development.",
  //     github:"https://github.com/ShaymaaEssa/Portfolio-angular",
  //     liveDemo:"https://github.com/ShaymaaEssa/Portfolio-angular",
  //     skills:["Angular", "TypeScript", "Bootstrap 5.3", "CSS", "HTML" ]
  // }, 
  {
    id:0,
    projectTitle:"ByteCart",
    img:"/images/bytecart.png",
    desc:"ByteCart is a feature-rich e-commerce web application built with Angular for a dynamic and responsive user experience. It utilizes Tailwind CSS for a sleek and modern UI, ensuring seamless design across all devices. The app integrates RESTful APIs for real-time product management, user authentication, and secure transactions. ByteCart supports payment gateways, an intuitive shopping cart, and offers users access to all their orders and a wishlist for better shopping management. Optimized for performance and scalability, it provides a fast and engaging shopping experience.",
    github:"https://github.com/ShaymaaEssa/E-commerceApp",
    liveDemo:"https://e-commerce-app-self-psi.vercel.app/",
    skills:["Angular", "TypeScript", "Tailwind", "API" ]
},
    {
      id:1,
      projectTitle:"SunnySky",
      img:"/images/sunnysky.jpeg",
      desc:"A responsive weather web application that displays the current temperature and forecast weather within 3 days based on the user's location and allows searching for any city's weather, featuring a colorful and dynamic design.",
      github:"https://github.com/ShaymaaEssa/SunnySkyApp",
      liveDemo:"https://shaymaaessa.github.io/SunnySkyApp/",
      skills:["Html", "CSS", "JS", "API", "Bootstrap 5.3"]
  }, 
  {
    id:2,
    projectTitle:"QuizApp",
    img:"/images/quizApp.png",
    desc:"A dynamic quiz web application that allows users to customize their experience by selecting from a variety of topics, choosing their preferred difficulty level, and specifying the number of questions. The app presents the selected questions interactively and displays the user's results at the end, providing an engaging and personalized learning experience.",
    github:"https://github.com/ShaymaaEssa/QuizApp",
    liveDemo:"https://shaymaaessa.github.io/QuizApp/",
    skills:["Html", "CSS", "JS", "API", "Bootstrap 5.3"]
},
{
  id:3,
  projectTitle:"Login System",
  img:"/images/loginsystem.png",
  desc:"A secure login system application featuring login and sign-up pages, along with a simple home page. The application enables users to register and log in with robust validations, ensuring all required criteria are met. It uses regex for precise input validation and displays clear error messages for any failed verifications, providing a seamless and user-friendly experience.",
  github:"https://github.com/ShaymaaEssa/LoginSystem",
  liveDemo:"https://shaymaaessa.github.io/LoginSystem/",
  skills:["Html", "CSS", "JS", "Bootstrap 5.3"]
}, 
{
  id:4,
  projectTitle:"Ideas",
  img:"/images/ideas.png",
  desc:"Ideas is a simple web application where you can save your thoughts, ideas, tasks you have do, ...etc",
  github:"https://github.com/ShaymaaEssa/Ideas",
  liveDemo:"https://shaymaaessa.github.io/Ideas/",
  skills:["Html", "CSS", "JS",  "Bootstrap 5.3"]
}, 
{
  id:5,
  projectTitle:"MoonlightQuotes",
  img:"/images/quotes.png",
  desc:"Simple responsive web application to generate a random Qutoes from bookes everytime you open",
  github:"https://github.com/ShaymaaEssa/MoonlightQuotes",
  liveDemo:"https://shaymaaessa.github.io/MoonlightQuotes/",
  skills:["Html", "CSS", "JS",  "Bootstrap 5.3"]
},
{
  id:6,
  projectTitle:"Mealify",
  img:"/images/mealify.png",
  desc:"Mealify is a sleek and responsive website showcasing chefs, menus, and more. It highlights my expertise in developing web designs with full responsiveness, demonstrating my ability to create visually appealing and functional websites tailored to any concept or requirement.",
  github:"https://github.com/ShaymaaEssa/Mealify",
  liveDemo:"https://shaymaaessa.github.io/Mealify/",
  skills:["Html", "CSS",  "Bootstrap 5.3"]
}
]
  imgSrc:String = '';
  isFocusLayerDisplayed:boolean = false;

  clickedIndex:number =0;
  setClickedIndex(id:number){
    this.clickedIndex = id;
  }
  displayFocusLayer(index:number):void{
      this.isFocusLayerDisplayed = true;
      this.imgSrc = `/images/${index}.png`
  }
  closeFocusLayer(): void {
    this.isFocusLayerDisplayed = false;
  }

}
