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
    
