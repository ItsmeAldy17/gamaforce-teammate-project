import Image from "next/image";
/* eslint-disable @next/next/no-img-element */

export default function TooSmall() {
  return (
    <section className="min-[640px]:hidden w-full bg-neutral-100 min-h-screen flex flex-col items-center justify-center px-[10px]">
      <div className="w-full min-h-full bg-neutral-100 -z-[3] absolute" />
      <Image
        src="/img/GarisTemplate.png"
        alt="background image"
        loading ="lazy"
        fill
      />

      <p className="text-neutral-700 font-semibold text-[36px] text-justify text-align-last-center">
        OOPS!
      </p>
      <p className="text-neutral-700 font-medium text-[16px] text-justify text-align-last-center">
        Your screen is too small. Please use another device with bigger screen
        size or use landscape mode.
      </p>
    </section>
  );
}
