import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;

    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      if (this.isMenuOpen) {
        hamburger.classList.add('open');
      } else {
        hamburger.classList.remove('open');
      }
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }
}
