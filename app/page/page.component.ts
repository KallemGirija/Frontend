import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  isSidebarOpen=false;
  toggleSidebar(){
    this.isSidebarOpen=!this.isSidebarOpen;
  }
  public isMenuOpen: boolean = false;
  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; 
  }
}

  const darkModeToggle = document.getElementById('darkModeToggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('change', (event) => {
        const isChecked = (event.target as HTMLInputElement).checked;
        if (isChecked) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
  

    
  
  
} 
  

  


