// src/app/components/header/header.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar color="primary">
      <span>Auth App</span>
      <span class="spacer"></span>
      <ng-container *ngIf="isLoggedIn; else loggedOut">
        <button mat-button routerLink="/profile">Profile</button>
        <button mat-button (click)="logout()">Logout</button>
      </ng-container>
      <ng-template #loggedOut>
        <button mat-button routerLink="/login">Login</button>
        <button mat-button routerLink="/register">Register</button>
      </ng-template>
    </mat-toolbar>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
  `]
})
export class HeaderComponent implements OnInit {
  currentUser: User | null = null;
  isLoggedIn = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.isLoggedIn = !!user;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}