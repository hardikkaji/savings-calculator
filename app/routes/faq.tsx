import { useIntl } from "react-intl";
import { messages } from "~/components/messages";
import { ChevronDown } from "lucide-react";
import type { Route } from "./+types/faq";

const faqSections = [
  {
    titleId: "faq.section.savings",
    items: [
      {
        questionId: "faq.q1.question",
        answerId: "faq.q1.answer",
      },
      {
        questionId: "faq.q2.question",
        answerId: "faq.q2.answer",
      },
      {
        questionId: "faq.q3.question",
        answerId: "faq.q3.answer",
      },
      {
        questionId: "faq.q4.question",
        answerId: "faq.q4.answer",
      },
    ],
  },
  {
    titleId: "faq.section.withdrawal",
    items: [
      {
        questionId: "faq.q6.question",
        answerId: "faq.q6.answer",
      },
      {
        questionId: "faq.q7.question",
        answerId: "faq.q7.answer",
      },
      {
        questionId: "faq.q8.question",
        answerId: "faq.q8.answer",
      },
    ],
  },
  {
    titleId: "faq.section.general",
    items: [
      {
        questionId: "faq.q5.question",
        answerId: "faq.q5.answer",
      },
    ],
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Savings Calculator FAQ" },
    { name: "description", content: "Frequently asked questions" },
  ];
}

export default function FAQ() {
  const intl = useIntl();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-800 mb-6">
        {intl.formatMessage(messages.faqTitle)}
      </h1>
      <div className="space-y-8">
        {faqSections.map((section) => (
          <section key={section.titleId} className="space-y-3">
            <h2 className="text-xl font-semibold text-zinc-800">
              {intl.formatMessage({ id: section.titleId })}
            </h2>
            {section.items.map((item) => (
              <details
                key={item.questionId}
                className="group rounded-lg border border-zinc-200 bg-white/60 px-4 py-3 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-zinc-800">
                  <span>{intl.formatMessage({ id: item.questionId })}</span>
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="mt-3 text-sm leading-6 text-zinc-600">
                  {intl.formatMessage({ id: item.answerId })}
                </div>
              </details>
            ))}
          </section>
        ))}
      </div>
      <p className="mt-6 text-sm text-zinc-500">
        {intl.formatMessage(messages.faqFooter)}
      </p>
    </div>
  );
}
