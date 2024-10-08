# ConnectBush

A simple Linktree clone for collating Social Media Links and displaying offers.

## Live Demo: https://connectbush.onrender.com

## Features

- Built with VueJs and Vite
- Hosted via Render
- CSS handled by Tailwind
- Background Animation by Vanta, Loading Spinner by Epic Spinners
- LinkTree API integration

## Screenshots

<img src="./public/screenshots/desktopScreen.png" width="70%"/>

## Getting Started

### Installation

1. Clone the repository
2. Install dependencies: `pnpm install` (or use your fav package manager)
3. Start the development server: `pnpm run dev` and have fun

### Configuration

The application uses environment variables for configuration. You can set them in a `.env` file in the root of the project.

Please plug in your own credentials as follows, and your data should appear in your version of the app

| Variable                   | Description      | Default |
| -------------------------- | ---------------- | ------- |
| `VUE_APP_AIRTABLE_BASE_ID` | Airtable base ID | -       |
| `VUE_APP_AIRTABLE_API_KEY` | Airtable API key | -       |

## Roadmap

- [ ] Implment Auth for other users, to plug in their airtable details
- [ ] Make options for inserting social media links

## Contributing

Contributions are welcome! Please open an issue or pull request to get started.

## License

This project is licensed under the MIT License. See the [LICENSE] file for more information.
