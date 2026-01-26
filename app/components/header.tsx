export function Header() {
  return (
    <nav className="bg-primary fixed w-full z-20 top-0 start-0 border-b border-default shadow-2xs">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./logo.png" className="h-10" alt="Savings Calculator" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-zinc-100">
            Savings Calculator
          </span>
        </a>
      </div>
    </nav>
  );
}
