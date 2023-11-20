import { Component } from "@angular/core";

@Component({
	selector: "app-navbar",
	templateUrl: "./navbar.component.html",
	styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent {
	toHome() {
		document.getElementById("home")!.scrollIntoView(true);
	}

	toSkills() {
		document.getElementById("skills")!.scrollIntoView(true);
	}

	toProjects() {
		document.getElementById("projects")!.scrollIntoView(true);
	}

	toContacts() {
		document.getElementById("contacts")!.scrollIntoView(true);
	}
}
