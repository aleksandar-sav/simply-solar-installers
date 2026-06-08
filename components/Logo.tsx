import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Simply Solar Installers home"
      className="inline-flex items-center"
    >
      <Image
        src="/logo.png"
        alt="Simply Solar Installers"
        width={400}
        height={400}
        className="h-16 w-auto sm:h-20"
        priority
      />
    </Link>
  );
}
