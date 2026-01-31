import type { Route } from "./+types/withdrawal";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Montly Withdrawal Calculator" },
    { name: "description", content: "Welcome to montly savings calculator!" },
  ];
}

export default function Withdrawal() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl sm:text-5xl font-semibold text-zinc-800">
        Coming Soon
      </h1>
    </div>
  );
}
