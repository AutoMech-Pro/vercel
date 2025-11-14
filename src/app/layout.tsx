import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | Christian Espinosa - Automation Engineer',
    default: 'Christian Espinosa - Automation & Control Systems Engineer | Professional Portfolio',
  },
  description: 'Professional Automation & Control Systems Engineer specializing in SCADA/DCS/HMI integration for mission-critical operations. Proven results in MTTR reduction and TCO optimization.',
  keywords: [
    'automation engineer',
    'control systems',
    'SCADA',
    'DCS', 
    'HMI',
    'Wonderware',
    'System Platform',
    'control systems integration',
    'industrial automation'
  ],
  openGraph: {
    type: 'website',
    title: 'Christian Espinosa - Automation & Control Systems Engineer Portfolio',
    description: 'Specializing in SCADA/DCS/HMI integration for mission-critical operations with proven quantifiable results.',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630/0A0A0A/007BFF?text=Automation+Engineer',
        width: 1200,
        height: 630,
        alt: 'Christian Espinosa - Automation Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian Espinosa - Automation & Control Systems Engineer',
    description: 'Professional Automation & Control Systems Engineer specializing in SCADA/DCS/HMI integration.',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'google81feb69fa975fad5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#007BFF" />
      </head>
      <body 
        className="bg-background-page text-text-primary font-body antialiased"
      >
        <div id="root">
          {children}
        </div>
        
        {/* NoScript fallback for accessibility */}
        <noscript>
          <title>Christian Espinosa - Automation Engineer</title>
        </noscript>
        
        {/* NoScript fallback for accessibility */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Custom cursor functionality
              (function() {
                const cursor = document.createElement('div');
                cursor.className = 'custom-cursor';
                document.body.appendChild(cursor);
                
                document.addEventListener('mousemove', (e) => {
                  cursor.style.left = e.clientX + 'px';
                  cursor.style.top = e.clientY + 'px';
                });
                
                // Cursor hover effects
                const hoverElements = document.querySelectorAll('a, button, [role="button"]');
                hoverElements.forEach(el => {
                  el.addEventListener('mouseenter', () => cursor.classList.add('custom-cursor-hover'));
                  el.addEventListener('mouseleave', () => cursor.classList.remove('custom-cursor-hover'));
                });
              })();
              
              // Lazy load main script
              window.addEventListener('DOMContentLoaded', () => {
                const mainScript = document.createElement('script');
                mainScript.src = '/js/script-min.js';
                mainScript.defer = true;
                document.head.appendChild(mainScript);
              });
            `
          }}
        />
      </body>
    </html>
  )
}
