# QuickAI
[![Ask DeepWiki](https://devin.ai/assets/askdeepwiki.png)](https://deepwiki.com/himanshux88/QuickAI)

QuickAI is a comprehensive full-stack application designed to empower users with a suite of AI-powered content creation tools. Built with a modern tech stack including React, Node.js, and Express, it integrates with Google's Gemini for text generation, ClipDrop and Cloudinary for image manipulation, and Clerk for seamless user authentication and subscription management.

## Features

-   📝 **AI Article Writer**: Generate high-quality, engaging articles on any topic, with control over the content length (short, medium, or long).
-   ✍️ **Blog Title Generator**: Create catchy, optimized titles for your blog posts based on keywords and categories.
-   🖼️ **AI Image Generation**: Create stunning visuals from text prompts using the ClipDrop API. Users can choose from various styles like Realistic, Anime, and more.
-   ✨ **Background & Object Removal**: Effortlessly remove backgrounds or specific objects from your images, powered by Cloudinary's AI transformations.
-   📄 **AI Resume Reviewer**: Upload your resume in PDF format and receive constructive feedback on its strengths, weaknesses, and areas for improvement.
-   🤝 **Community Feed**: Share your generated images with the community, and browse and like creations from other users.
-   🔐 **Authentication & Subscriptions**: Secure user management and subscription plans (Free/Premium) handled by Clerk.
-   📊 **User Dashboard**: View all your past creations, including articles, images, and resume reviews, in a personal dashboard.

## Tech Stack

### Frontend
- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Authentication**: Clerk React
- **Icons**: Lucide React
- **API Communication**: Axios

### Backend
- **Framework**: Node.js, Express.js
- **Database**: Neon (Serverless Postgres)
- **AI Text Generation**: Google Gemini Pro
- **Image Generation**: ClipDrop API
- **Image Storage & Transformation**: Cloudinary
- **Authentication**: Clerk Express
- **File Handling**: Multer (for image/PDF uploads)

## Environment Variables
To run this project, you will need to create `.env` files in both the `client` and `server` directories.

#### `server/.env`
```
# Neon Database Connection String
DATABASE_URL="your_neon_db_connection_string"

# Clerk Authentication Keys
CLERK_SECRET_KEY="your_clerk_secret_key"
CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"

# AI & Image Service API Keys
GEMINI_API_KEY="your_google_gemini_api_key"
CLIPDROP_API="your_clipdrop_api_key"

# Cloudinary Credentials
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# Server Port
PORT=3000
```

#### `client/.env`
```
# Vite Environment Variables
VITE_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
VITE_BACKEND_URL="your_backend_url"
```

## Setup and Installation

Follow these steps to get the application running on your local machine.

#### 1. Clone the repository
```bash
git clone https://github.com/himanshux88/QuickAI.git
cd QuickAI
```

#### 2. Setup the Backend
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Create a .env file and add the required environment variables (see above)
# You can copy the .env.example if available

# Start the server
npm start
```

#### 3. Setup the Frontend
```bash
# Open a new terminal and navigate to the client directory
cd client

# Install dependencies
npm install

# Create a .env file and add the required environment variables (see above)

# Start the development server
npm run dev
```
The application should now be running. The client will be available at `http://localhost:5173` (or another port specified by Vite) and the server at `http://localhost:3000`.

## API Endpoints

The server exposes the following REST API endpoints:

| Method | Endpoint                        | Description                                     | Auth Required |
|--------|---------------------------------|-------------------------------------------------|---------------|
| `POST` | `/api/ai/generate-article`        | Generates a text article based on a prompt.     | Yes           |
| `POST` | `/api/ai/generate-blog-title`     | Generates blog titles from a keyword.           | Yes           |
| `POST` | `/api/ai/generate-image`          | Creates an image from a text prompt.            | Yes, Premium  |
| `POST` | `/api/ai/remove-image-background` | Removes the background from an uploaded image.  | Yes, Premium  |
| `POST` | `/api/ai/remove-image-object`     | Removes a specified object from an image.       | Yes, Premium  |
| `POST` | `/api/ai/resume-review`           | Reviews an uploaded PDF resume.                 | Yes, Premium  |
| `GET`  | `/api/user/get-user-creations`    | Fetches all creations for the logged-in user.   | Yes           |
| `GET`  | `/api/user/get-published-creations`| Fetches all published creations for the community.| Yes           |
| `POST` | `/api/user/toggle-like-creation`  | Likes or unlikes a creation.                    | Yes           |
