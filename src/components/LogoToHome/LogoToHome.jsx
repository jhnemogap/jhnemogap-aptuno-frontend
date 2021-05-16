import Link from "next/link";

export function LogoToHome() {
  return (
    <Link href="/">
      <a>
        <img src="/aptuno_logo.svg" alt="Logo aptuno" />
      </a>
    </Link>
  );
}
