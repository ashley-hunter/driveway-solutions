import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export interface NavbarLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavbarLink({ href, children }: NavbarLinkProps) {
  const router = useRouter();

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'md:hover:text-brand-700 block rounded py-2 pl-3 pr-4 text-sm text-gray-700 md:border-0 md:p-0 md:hover:bg-transparent',
          {
            'text-brand-700': router.pathname === href,
          },
        )}
      >
        {children}
      </Link>
    </li>
  );
}

export default NavbarLink;
