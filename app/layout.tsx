import "./globals.css";
import Header from "./Header";
import Main from "./Main";

export const metadata = {
  title: "GPT先生 by monoDuki LLC",
  description:
    "ChatGPT APIを使ったチャットアプリです。一緒におしゃべりが出来ます。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body className="min-h-screen bg-purple-500 md:bg-gray-100">
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
