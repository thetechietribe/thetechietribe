import "./globals.css";

export const metadata = {
  title: "Techietribe",
  description: "Your Digital Partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          flex: "1 1 auto",
          backgroundColor: "#ffffff",
        }}
      >
        <main>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "0",
            }}
          >
            {/* <DrawerAppBar /> */}
            {children}
            {/* <Footer /> */}
          </div>
        </main>
      </body>
    </html>
  );
}
