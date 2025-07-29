# ConvAI Landing Page

A premium, dark-themed landing page for ConvAI - a next-generation AI meeting assistant that transforms how teams capture, organize, and understand their conversations.

## 🌟 Features

- **Modern Dark Theme**: Premium black and white design with subtle gradients
- **Interactive Hero Section**: Compelling tagline with animated call-to-action
- **Feedback Collection**: Modal form with Firebase integration for user feedback
- **Real-time Visitor Counter**: Live visitor tracking with Firebase
- **Visual Product Demos**: Interactive mockups showcasing AI meeting features
- **Responsive Design**: Optimized for all devices and screen sizes
- **Premium Animations**: Smooth transitions and micro-interactions

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Firebase** for data storage and analytics
- **Lucide React** for icons
- **Framer Motion** for animations

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd convai-landing
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up Firebase:
   - Create a Firebase project at https://console.firebase.google.com
   - Enable Firestore Database
   - Create a `.env.local` file with your Firebase config:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎨 Design Features

### Color Scheme
- **Primary**: Black (#000000)
- **Text**: White (#FFFFFF) 
- **Accent**: Gray variants for depth
- **Highlights**: Blue gradients for interactive elements

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Weight Range**: 300-700
- **Responsive scaling**: 6xl-8xl for headlines

### Components

#### Hero Section
- Large gradient text headlines
- Animated feature highlights
- Dual CTA buttons (primary/secondary)
- Scroll indicator

#### Feedback Modal
- Glass morphism effect
- Multi-step form with validation
- Firebase integration for data storage
- Success state with auto-close

#### Visual Sections
- Mock video call interfaces
- Meeting summary dashboards
- AI chat interactions
- Real-time transcription demos

#### Visitor Counter
- Fixed position bottom-right
- Real-time Firebase updates
- Fallback to local counter

## 🔧 Customization

### Tailwind Configuration
The `tailwind.config.js` includes custom:
- Font families (Inter, Satoshi)
- Animation keyframes
- Extended color palette
- Custom component classes

### Firebase Collections
- `feedback`: User form submissions
- `analytics/visitors`: Visitor count tracking

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

The app can be deployed to:
- **Vercel**: `npm run build` + Vercel CLI
- **Netlify**: Direct GitHub integration
- **Firebase Hosting**: `firebase deploy`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ for better meetings by the ConvAI team.
