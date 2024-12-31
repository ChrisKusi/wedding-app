# Wedding Reception QR Code Attendance App

## Overview

This project is a web-based QR Code scanning application designed specifically for wedding receptions. The app allows you to manage attendee check-ins by scanning QR codes assigned to guests. It includes a seamless user interface, efficient scanning functionality, and features to ensure a smooth check-in process for your special day.

---

## Features

### 1. **Splash Screen**
- Displays a welcoming splash screen featuring the couple’s names and an optional image.
- Elegant animations to set the tone for the wedding reception.

### 2. **QR Code Scanner**
- Scans QR codes assigned to attendees (codes: `001` to `150`).
- Automatically validates and registers guests.
- Prevents duplicate scanning with success and error modals.
- Uses the device’s back camera for scanning.

### 3. **Attendance Tracking**
- Displays a list of all successfully scanned attendees on the **Attendees Page**.
- Numbered attendee list (e.g., "Attendee Code: 001").
- Scrollable list designed to handle up to 150 guests.

### 4. **Data Management**
- All scanned codes are stored locally in the browser using `localStorage`.
- A "Clear Scanned Data" button allows organizers to reset the list for a fresh start on the event day.

### 5. **Responsive Design**
- Fully responsive and mobile-friendly.
- Styled using Emerald Green and Burnt Orange to align with the wedding theme.
- Background images with semi-transparent overlays create an elegant experience.

### 6. **User-Friendly UI**
- Header and footer styled with key elements:
  - Header: Includes a logo, couple’s names, and navigation icons.
  - Footer: Displays a catchy hashtag (e.g., `#BecomingTheFrempongs - Together Forever`).

---

## Technologies Used

- **Frontend**: React (with TypeScript)
- **Styling**: Tailwind CSS and custom CSS
- **QR Code Scanning**: `react-qr-scanner`
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Data Storage**: Browser `localStorage`
- **Hosting**: Vercel

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- Yarn (preferred package manager)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wedding-app.git
   cd wedding-app
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

5. Build the app for production:
   ```bash
   yarn build
   ```

6. Deploy to Vercel or any hosting platform of your choice.

---

## Project Structure

```plaintext
src/
├── components/
│   ├── Footer.tsx          # Footer component
│   ├── Header.tsx          # Header component with navigation
│   ├── SplashScreen.tsx    # Splash screen for the app
├── pages/
│   ├── QRScannerPage.tsx   # Main page for QR code scanning
│   ├── AttendeesPage.tsx   # Page displaying scanned attendees
├── styles/
│   ├── index.css           # Global CSS styles
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.html              # HTML template
```

---

## How to Use

1. **Launch the App**:
   - Upon loading, a splash screen with animations and the couple’s details will appear.

2. **Scan QR Codes**:
   - Navigate to the QR scanner page.
   - Click "Activate Camera" to start the back camera for scanning.
   - Scan attendee QR codes (valid codes: `001` to `150`).
   - Success and error modals provide immediate feedback.

3. **View Attendees**:
   - Navigate to the "Attendees" page by clicking the people icon in the header.
   - View the list of scanned attendees with their codes.

4. **Clear Data**:
   - Use the "Clear Scanned Data" button on the Attendees Page to reset the scanned data.

---

## Deployment

This project is hosted on Vercel. You can access it via:
[https://wedding-app-alpha.vercel.app/](https://wedding-app-alpha.vercel.app/)

To deploy updates:
1. Commit your changes:
   ```bash
   git add .
   git commit -m "Update app"
   ```

2. Push to the main branch:
   ```bash
   git push origin main
   ```

3. Vercel will automatically rebuild and deploy your changes.

---

## Future Enhancements

- **Database Integration**:
  - Replace `localStorage` with a real-time database to sync attendees across devices.
- **Admin Panel**:
  - Add a dashboard for event organizers to monitor attendance in real time.
- **Export Data**:
  - Provide an option to export the attendee list as a CSV or Excel file.
- **Multi-Language Support**:
  - Add support for multiple languages to cater to diverse audiences.

---

## Contributors

- **Christian Kusi** - Lead Developer


---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- Special thanks to the couple, **Louis & Magdalene**, for the opportunity to develop this app.
- Inspired by the need for seamless and modern wedding attendance management.
