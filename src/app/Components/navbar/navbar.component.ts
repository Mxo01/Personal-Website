import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toHome() {
    document.getElementById('home')!.scrollIntoView({ behavior: 'smooth' });
  }

  toSkills() {
    document.getElementById('skills')!.scrollIntoView({ behavior: 'smooth' });
  }

  toProjects() {
    document.getElementById('projects')!.scrollIntoView({ behavior: 'smooth' });
  }

  toContacts() {
    document.getElementById('contacts')!.scrollIntoView({ behavior: 'smooth' });
  }
}
