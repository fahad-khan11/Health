import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ 
  className = "w-[100px] md:w-[120px]", 
  isDark = false 
}: { 
  className?: string;
  isDark?: boolean;
}) {
  return (
    <Link href="/" className={`flex flex-col items-center justify-center ${className} hover:opacity-90 transition-opacity`}>
      <Image 
        src="/logo.png" 
        alt="RCM HUB Medical Billing" 
        width={300}
        height={300}
        className="w-full h-auto object-contain"
        priority
      />
    </Link>
  );
}
