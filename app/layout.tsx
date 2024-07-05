import Navbar from '../components/Navbar'
import {Roboto} from 'next/font/google'
import React from "react";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

const roboto = Roboto({
    weight: ['300', '400', '500'],
    style: ['italic', 'normal'],
    subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
