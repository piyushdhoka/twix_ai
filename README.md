# TwixAi

## 📖 Introduction

Meet TwixAi: Your ultimate AI-powered tweet-refining assistant. Whether you're aiming for casual charm, sharp wit, or serious impact, TwixAi transforms your thoughts into scroll-stopping tweets. Correct, format, and perfect your tone effortlessly—your voice, amplified.

## 🛠️ Technologies Used

- Next.js
- TypeScript
- Prisma
- PostgreSQL
# TwixAi

TwixAi is an AI-powered tweet refinement tool that helps you polish, correct, and enhance your tweets for maximum impact and engagement. Powered by Google Gemini and built with Next.js, TwixAi makes your social media voice clear, concise, and compelling.

## 🚀 Features

- Refine tweets for clarity, engagement, and tone
- AI-powered suggestions and corrections
- Supports multiple moods/styles (professional, casual, witty, etc.)
- User authentication (NextAuth)
- Usage tracking and credit system
- Responsive, modern UI

## 🛠️ Technologies Used

- Next.js
- TypeScript
- Prisma
- PostgreSQL
- Google Gemini API
- NextAuth
- Tailwind CSS

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/piyushdhoka/twixai.git
cd twixai
```

Install dependencies:

```bash
npm install
```

## ⚙️ Configuration

Create a `.env` file in the root folder. Example:

```env
DATABASE_URL=your_postgres_url
GEMINI_API_KEY=your_gemini_api_key
SYSTEM_PROMPT=You are an expert social media assistant. Your job is to refine, correct, and enhance tweets for clarity, engagement, and impact. Always keep the user's original intent and tone, but make the tweet more appealing and effective. Avoid offensive or inappropriate content.
AI_MODEL=gemini-1.5-flash
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
```

## 📝 Usage

1. Start the development server:
	```bash
	npm run dev
	```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Sign in, enter your tweet, select a mood, and let TwixAi refine it!

## 👤 Credits

Project maintained by [Piyush Dhoka](https://www.linkedin.com/in/piyushdhoka27) ([GitHub](https://github.com/piyushdhoka))

## 📄 License

This project is licensed under the MIT License.
## 🤝 Contribution Guide
I hearty welcome contributions! Please follow these steps:
- Fork the repository.
- Create a new branch `(git checkout -b feature-branch-name)`.
- Make your changes and commit them `(git commit -m "Add feature description")`.
- Push your changes `(git push origin feature-branch-name)`.
Create a Pull Request.

***
Thank you for checking out this project! Feel free to open an issue if you have any questions or suggestions.