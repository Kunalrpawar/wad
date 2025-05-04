import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = {
    name: '',
    email: '',
    password: ''
  };
  error: string = '';
  isLoading: boolean = false;
  success: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    this.error = '';
    this.success = false;

    try {
      this.authService.register(this.user).subscribe({
        next: () => {
          this.isLoading = false;
          this.success = true;
          // Clear form
          this.user = {
            name: '',
            email: '',
            password: ''
          };
          // Redirect to login after 2 seconds
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
        },
        error: (error) => {
          this.isLoading = false;
          this.error = error.message || 'Registration failed. Please try again.';
        }
      });
    } catch (error) {
      this.isLoading = false;
      this.error = 'An error occurred during registration';
    }
  }
}
