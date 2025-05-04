import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  lastLogin: Date = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // For demo purposes, we'll create a mock user
    this.user = {
      id: '1',
      name: 'Kunal Ramesh Pawar',
      email: 'kunal.pawar@example.com',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date()
    };
  }

  logout() {
    this.authService.logout();
  }
}
