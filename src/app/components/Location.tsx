"use client";
import LocationsDesktop from "@/app/components/LocationDesktop";
import LocationsMobile from "@/app/components/LocationMobile";

export default function Location() {
  return (
    <>
      <div className="hidden md:block">
        <LocationsDesktop />
      </div>
      <div className="block md:hidden">
        <LocationsMobile />
      </div>
    </>
  );
}
