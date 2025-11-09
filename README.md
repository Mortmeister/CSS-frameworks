# CSS Frameworks Project

A modern web application built with Bootstrap 5 and custom SCSS, featuring a social media-style interface with authentication, feed, and profile pages.

## 🚀 Features

- **Responsive Design**: Built with Bootstrap 5
- **Custom SCSS Architecture**: Modular SCSS structure with variables, mixins, and components
- **Social Media Interface**: Feed page with posts, user profiles, and interactive elements

## 📸 Data & Assets

- **Mock Data**: Users are populated with mock data for design purposes
- **Images & Avatars**: All images and user avatars are sourced from [Unsplash](https://unsplash.com)

## 🛠️ Technologies

- **Bootstrap 5.3.8**: CSS framework for responsive design
- **Bootstrap Icons 1.13.1**: Icon library
- **Sass 1.93.3**: CSS preprocessor for SCSS compilation

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd css_frameworks
```

2. Install dependencies:

```bash
npm install
```

## 🎨 SCSS Architecture

### Variables (`_variables.scss`)

Centralized variable definitions for:

- **Colors**: Primary, secondary, accent, danger, and text colors
- **Backgrounds**: Gradient definitions
- **Typography**: Font families, sizes, and weights
- **Spacing & Layout**: Spacers, border radius
- **Avatar Sizes**: Standardized avatar dimensions

### Mixins (`_mixins.scss`)

Reusable mixins for common patterns:

- `button-variant($bg-color)`: Creates button variants with hover/active states
- `button-focus($focus-color)`: Standardized focus/active outline styles
- `avatar-size($size)`: Sets avatar width and height with object-fit
- `object-cover`: Applies object-fit: cover
- `transition($property, $duration, $timing)`: Standardized transitions
- `hover-scale($scale)`: Hover scale effect with transition

### Components

- **Buttons** (`_buttons.scss`): Custom button styles extending Bootstrap
- **Cards** (`_card.scss`): Card component styles
- **Layout** (`_layout.scss`): Layout utilities

## 🏃 Development

### Build CSS

Compile SCSS to CSS:

```bash
npm run build
```

### Watch Mode

Automatically recompile SCSS on file changes:

```bash
npm run watch
```

## 👤 Morten Lillehaug

Created as part of a CSS frameworks learning project.
