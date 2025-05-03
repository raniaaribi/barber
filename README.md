# Hair Salon Website

## Overview
This project is a responsive website for a hair salon, designed to showcase services, special offers, team members, and contact information. The website is built using HTML, CSS, and JavaScript, with a modern and elegant design tailored for a haircare and styling business.

## Features
- **Header Section**: Includes a navigation bar with links to Home, Services, Features, Teams, Contact, and Price sections, along with a hero section promoting the salon's services.
- **Services Section**: Displays four key services (Precision Haircuts, Color & Highlights, Deep Conditioning, Styling & Blowouts) in a two-column layout with images and descriptions.
- **Offers Section**: Highlights six special deals (Classic Haircut, Hair Coloring, Hair Treatment, Keratin Smoothing, Hair Spa, Hair Styling) in a three-column layout with pricing and icons.
- **Teams Section**: Showcases four team members in a four-column layout with images and social media links.
- **Contact Section**: Features a contact form and a Google Maps embed for the salon's location in a two-column layout.
- **Footer**: Contains social media links and a copyright notice.

## Technologies Used
- **HTML5**: For the website's structure.
- **CSS3**: For styling, with an external stylesheet (`css/style.css`).
- **JavaScript**: For interactivity, included via `js/script.js`.
- **Font Awesome**: For icons used in navigation, offers, and social media links.
- **Google Fonts**: Uses Open Sans and Quicksand fonts for typography.
- **Google Maps API**: Embeds a map for the salon's location.

## File Structure
- `index.html`: The main HTML file containing the website's structure.
- `css/style.css`: Custom CSS for styling the website.
- `js/script.js`: JavaScript for interactive features (e.g., menu toggle).
- `images/`: Directory containing images for services (`pic-1.jpg` to `pic-4.jpg`) and team members (`expert1.jpg` to `expert4.jpg`).

## Setup Instructions
1. **Clone or Download**: Clone the repository or download the project files.
2. **Open `index.html`**: Open the `index.html` file in a web browser to view the website.
3. **Ensure Internet Connection**: The website requires an internet connection to load external resources (Google Fonts, Font Awesome, and Google Maps).
4. **Customize**: Modify `css/style.css` for styling, `js/script.js` for interactivity, and update images in the `images/` directory as needed.

## Dependencies
- **Google Fonts**: Open Sans and Quicksand fonts are loaded via CDN.
- **Font Awesome**: Version 4.7.0 is included via CDN for icons.
- **Google Maps Embed**: Uses an iframe to embed the salon's location.

## Notes
- The website is responsive, with a mobile-friendly menu toggle implemented via the Font Awesome bars icon.
- The contact form is a static template and requires backend integration for functionality.
- Placeholder images (`pic-1.jpg` to `pic-4.jpg`, `expert1.jpg` to `expert4.jpg`) should be replaced with actual salon images.
- The Google Maps iframe points to a specific location (Ziad Beauty Lounge). Update the `src` attribute to match the salon's actual address.

## Future Improvements
- Add backend integration for the contact form to handle submissions.
- Implement dynamic pricing updates in the Offers section.
- Enhance accessibility with ARIA attributes and keyboard navigation.
- Optimize images for faster loading.

## License
© Your Site Name, All Rights Reserved.
