🌳 Bittree Clone

A Bittree clone built with Next.js, designed to create and share a personalized landing page containing all your important links in one place — similar to Linktree.

✨ Features

🔗 Create a customizable profile page with multiple links

🎨 Simple and responsive UI

⚡ Built with Next.js 13 (App Router) for fast rendering

📦 MongoDB integration for storing user handles and links

🔒 Prevents duplicate handles (unique usernames)

📱 Mobile-friendly design

🛠️ Tech Stack

Frontend: Next.js, React, Tailwind CSS

Backend: Next.js API routes

Database: MongoDB (via mongodb / mongoose)

🚀 Getting Started
1. Clone the repo
git clone https://github.com/your-username/bittree-clone.git
cd bittree-clone

2. Install dependencies
npm install

3. Set up environment variables

Create a .env.local file in the root directory and add:

MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_SITE_URL=http://localhost:3000

4. Run the development server
npm run dev


Now open http://localhost:3000
 🚀

📸 Screenshots

(Add some screenshots here if you have them for better presentation)

📂 Project Structure
/bittree-clone
  ├── app/                # Next.js App Router pages
  ├── components/         # Reusable UI components
  ├── lib/                # Database connection (MongoDB)
  ├── public/             # Static assets
  ├── .env.local          # Environment variables
  └── ...

🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

📜 License

This project is licensed under the MIT License.
