# Angular Authentication App

A modern authentication application built with Angular that includes user registration, login, and profile management features.

## Features

- User Registration
- User Login
- Profile Management
- Protected Routes
- Modern UI Design
- Responsive Layout

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 16 or higher)
- npm (Node Package Manager)
- Angular CLI (version 19 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd auth-app
```

2. Install dependencies:
```bash
npm install
```

## Development Server

Run the development server:
```bash
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any of the source files.

## Project Structure

```
auth-app/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── profile/
│   │   ├── services/
│   │   ├── models/
│   │   ├── guards/
│   │   └── app.routes.ts
│   ├── assets/
│   └── environments/
├── angular.json
├── package.json
└── tsconfig.json
```

## Key Components

- `LoginComponent`: Handles user authentication
- `RegisterComponent`: Manages new user registration
- `ProfileComponent`: Displays user information and profile management
- `AuthService`: Manages authentication state and API calls
- `AuthGuard`: Protects routes that require authentication

## Styling

The application uses SCSS for styling with a modern, clean design. Key features include:
- Responsive layout
- Modern color scheme
- Clean typography
- Interactive elements
- Consistent spacing

## API Integration

The application is designed to work with a backend API. For development purposes, you can use the mock data provided in the components.

## Building for Production

To build the application for production:
```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Testing

Run unit tests:
```bash
ng test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email kunal.pawar@example.com or open an issue in the repository.

## Acknowledgments

- Angular Team
- All contributors who have helped shape this project
