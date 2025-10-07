"use client";
import LocationsDesktop from "@/app/components/LocationDesktop";
import Whatweoffer from '@/app/components/Whatweoffer'

export default function Location() {
  return (
    <>
      <div className="hidden md:block">
        <LocationsDesktop />
      </div>
      <div className="block md:hidden">
      <Whatweoffer/>
      </div>
    </>
  );
}
