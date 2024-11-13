import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Aerologic',
      summary: 'Aerologic" is an educational software developed in Unity and C# by FF Studios during my Professional Practice I, focusing on wind energy education through interactive turbine simulations.',
      description: 'Aerologic is an educational software developed in Unity and C# by FF Studios as part of my Professional Practice I, aimed at teaching the principles of wind energy through interactive turbine simulations. This software seeks to raise awareness about renewable energy, especially wind energy, by providing users with an immersive educational experience that allows them to understand the energy generation process from wind capture to electricity production. The design of Aerologic incorporates several features that enhance the learning experience. These include the ability to customize environmental conditions, such as wind speed and terrain type, allowing users to observe how these factors impact energy generation. Gamification elements, such as challenges and rewards, have also been added to encourage active engagement and commitment to learning. These features not only improve information retention but also transform learning into an interactive and engaging experience. For the development of Aerologic, agile methodologies were employed, enabling a dynamic process of improvement and adjustment to ensure that the software met the educational objectives. The implementation of advanced programming practices and graphic design optimized both the functionality and usability of the simulator, offering an intuitive and appealing interface that facilitates user interaction. Overall, Aerologic fulfills the purpose of creating a high-impact educational tool that promotes knowledge and understanding of wind energy, contributing to greater awareness of the importance of renewable energy in protecting the environment.',
      projectLink: '',
      pictures: ["../../assets/Aerologic2.png", "../../assets/Aerologic3.png"]
    },
    {
      id: 2,
      name: 'Unearth The Unknown',
      summary: 'Unearth The Unknown is a horror-mystery video game developed in Unity with C# as part of a six-day game jam.This project blends suspense and intrigue, offering players a chilling experience as they explore eerie environments and uncover hidden secrets.',
      description: ' Unearth The Unknown is a horror-mystery video game developed in Unity with C# over a six-day game jam, created in collaboration with university classmates and a 3D modeler. The story follows a protagonist who arrives in a haunting town to meet his friends at the cemetery. After a strange incident where he falls into an open grave, he wakes up back at the train station as if nothing happened. Confused and determined to find his friends, he returns to the cemetery only to find it deserted and filled with an oppressive atmosphere.The game invites players to explore the lurking mystery and terror, confronting the blurred lines between reality and illusion as they search for clues to uncover the fate of the protagonist’s friends',
      projectLink: 'https://itch.io/jam/beginners-jam-halloween-2024/rate/3075602',
      pictures: ["../../assets/utu1.png", "../../assets/UTU2.png", "../../assets/AnimationsUTU.png"]
    },
    {
      id: 3,
      name: 'Project 78',
      summary: 'Project 78 is a first-person shooter and survival game developed with Unity and C#. It places the player in the role of our protagonist, known as "Subject 78." The story unfolds in a world affected by the outbreak of an unknown, highly contagious virus...',
      description: ' Project 78 is a first-person shooter and survival game developed with Unity and C#, with GitHub used for version control. It places the player in the role of our protagonist, known as "Subject 78." The story unfolds in a world affected by the outbreak of an unknown, highly contagious virus. As the player progresses, they will uncover secrets behind this story by finding documents and notes scattered throughout the environment.',
      projectLink: 'https://github.com/barbaracalderon/teamtrack',
      pictures: ["../../assets/project78.png"]
    },
    {
      id: 4,
      name: 'HackMaster',
      summary: 'Hackmaster connects skill providers with learners and simplifies hackathon management, offering secure payments and streamlined organization for a better user experience.',
      description: 'Hackmaster is a platform designed to bridge the gap between skill providers in various trades and hobbies and clients eager to learn. It enables experts to list their services while allowing learners to efficiently find and hire them, addressing access and organization challenges in informal education. Additionally, Hackmaster streamlines hackathon management by simplifying registration, project tracking, participant communication, and payment coordination. With secure online payment integration, it ensures a smooth and reliable experience for both organizers and participants.',
      projectLink: 'https://github.com/barbaracalderon/angular-portfolio-app',
      pictures: [""]
    }

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('S.Aliante | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
