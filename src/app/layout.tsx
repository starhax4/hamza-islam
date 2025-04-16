import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import PageTransition from "./components/PageTransition";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Hamza Islam | AI & Full Stack Developer",
  description: "AI-focused Full Stack Developer portfolio of Hamza Islam",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script>
        window.addEventListener("load", function () {
          const TRACKING_ENDPOINT = "https://heatmap-beta.vercel.app/api/collect";
          const WEBSITE_ID = "67ff5fbce82051eee9744208";

          console.log("[Heatmap] Tracking script loaded");

          let sessionId = generateSessionId();
          let clicks = [];
          let scrollDepths = [];
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let documentHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
          );

          console.log("[Heatmap] Session initialized:", sessionId);

          document.addEventListener("click", function (e) {
            const clickData = {
              x: e.pageX,
              y: e.pageY,
              timestamp: Date.now(),
            };
            clicks.push(clickData);
            console.log("[Heatmap] Click recorded:", clickData);
          });

          let maxScrollDepth = 0;
          document.addEventListener("scroll", function () {
            const scrollTop =
              window.pageYOffset || document.documentElement.scrollTop;
            const scrollDepth = Math.min(
              100,
              Math.round((scrollTop / (documentHeight - viewportHeight)) * 100)
            );

            if (scrollDepth > maxScrollDepth) {
              maxScrollDepth = scrollDepth;
              const depthData = {
                depth: scrollDepth,
                timestamp: Date.now(),
              };
              scrollDepths.push(depthData);
              console.log("[Heatmap] New scroll depth recorded:", depthData);
            }
          });

          window.addEventListener("beforeunload", function () {
            console.log("[Heatmap] Page is unloading, sending final data...");
            sendData();
          });

          setInterval(function () {
            console.log(
              "[Heatmap] Interval triggered, preparing to send data..."
            );
            sendData();
          }, 30000);

          function sendData() {
            if (clicks.length === 0 && scrollDepths.length === 0) {
              console.log("[Heatmap] No new data to send.");
              return;
            }

            const data = {
              websiteId: WEBSITE_ID,
              sessionId: sessionId,
              url: window.location.href,
              title: document.title,
              viewport: {
                width: viewportWidth,
                height: viewportHeight,
              },
              documentHeight: documentHeight,
              clicks: [...clicks],
              scrollDepths: [...scrollDepths],
              userAgent: navigator.userAgent,
              timestamp: Date.now(),
            };

            console.log("[Heatmap] Sending data to server:", data);

            if (navigator.sendBeacon) {
              const success = navigator.sendBeacon(
                TRACKING_ENDPOINT,
                JSON.stringify(data)
              );
              console.log("[Heatmap] sendBeacon result:", success);
            } else {
              fetch(TRACKING_ENDPOINT, {
                method: "POST",
                body: JSON.stringify(data),
                keepalive: true,
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) =>
                  console.log("[Heatmap] Data sent, status:", response.status)
                )
                .catch((err) =>
                  console.error("[Heatmap] Error sending data:", err)
                );
            }

            clicks = [];
            scrollDepths = [];
          }

          function generateSessionId() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (c) {
                const r = (Math.random() * 16) | 0;
                const v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
              }
            );
          }
        });
    </script>
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
