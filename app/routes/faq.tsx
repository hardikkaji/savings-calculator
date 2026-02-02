import { useIntl } from "react-intl";
import { messages } from "~/components/messages";
import { ChevronDown } from "lucide-react";
import type { Route } from "./+types/faq";
import { useCurrencyFormatter } from "~/hooks/useCurrencyFormatter";

interface TableProps {
  intl: ReturnType<typeof useIntl>;
}

function SavingsExampleTable({ intl }: TableProps) {
  const { format } = useCurrencyFormatter();
  
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-zinc-100 border border-zinc-200">
            <th className="px-3 py-2 text-left font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.table.month" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.savings.table.startingBalance" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.savings.table.contribution" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.savings.table.interest" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.savings.table.endingBalance" })}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-zinc-200">
            <td className="px-3 py-2 text-zinc-600">1</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(10000)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(500)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(70)}</td>
            <td className="px-3 py-2 text-right font-semibold text-zinc-800">
              {format(10570)}
            </td>
          </tr>
          <tr className="border border-zinc-200 bg-zinc-50">
            <td className="px-3 py-2 text-zinc-600">2</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(10570)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(500)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(74)}</td>
            <td className="px-3 py-2 text-right font-semibold text-zinc-800">
              {format(11144)}
            </td>
          </tr>
          <tr className="border border-zinc-200">
            <td className="px-3 py-2 text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
          </tr>
          <tr className="border border-zinc-200 bg-green-50">
            <td className="px-3 py-2 font-semibold text-zinc-800">12</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(15866)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(500)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(106)}</td>
            <td className="px-3 py-2 text-right font-semibold text-green-700">
              {format(16596)}
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-zinc-500 mt-2">
        {intl.formatMessage({ id: "faq.savings.table.summary" })}
      </p>
    </div>
  );
}

function WithdrawalExampleTable({ intl }: TableProps) {
  const { format } = useCurrencyFormatter();
  
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-zinc-100 border border-zinc-200">
            <th className="px-3 py-2 text-left font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.table.month" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({
                id: "faq.withdrawal.table.startingBalance",
              })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.withdrawal.table.withdrawal" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.withdrawal.table.interest" })}
            </th>
            <th className="px-3 py-2 text-right font-semibold text-zinc-700">
              {intl.formatMessage({ id: "faq.withdrawal.table.endingBalance" })}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-zinc-200">
            <td className="px-3 py-2 text-zinc-600">1</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(100000)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(2000)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(490)}</td>
            <td className="px-3 py-2 text-right font-semibold text-zinc-800">
              {format(98490)}
            </td>
          </tr>
          <tr className="border border-zinc-200 bg-zinc-50">
            <td className="px-3 py-2 text-zinc-600">2</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(98490)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(2000)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(483)}</td>
            <td className="px-3 py-2 text-right font-semibold text-zinc-800">
              {format(96973)}
            </td>
          </tr>
          <tr className="border border-zinc-200">
            <td className="px-3 py-2 text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
            <td className="px-3 py-2 text-right text-zinc-500">...</td>
          </tr>
          <tr className="border border-zinc-200 bg-blue-50">
            <td className="px-3 py-2 font-semibold text-zinc-800">12</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(79422)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(2000)}</td>
            <td className="px-3 py-2 text-right text-zinc-600">{format(390)}</td>
            <td className="px-3 py-2 text-right font-semibold text-blue-700">
              {format(77812)}
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xs text-zinc-500 mt-2">
        {intl.formatMessage({ id: "faq.withdrawal.table.summary" })}
      </p>
    </div>
  );
}

const faqSections = [
  {
    titleId: "faq.section.savings",
    items: [
      {
        questionId: "faq.q1.question",
        answerId: "faq.q1.answer",
        component: SavingsExampleTable,
      },
      { questionId: "faq.q2.question", answerId: "faq.q2.answer" },
      { questionId: "faq.q3.question", answerId: "faq.q3.answer" },
      { questionId: "faq.q4.question", answerId: "faq.q4.answer" },
    ],
  },
  {
    titleId: "faq.section.withdrawal",
    items: [
      {
        questionId: "faq.q6.question",
        answerId: "faq.q6.answer",
        component: WithdrawalExampleTable,
      },
      { questionId: "faq.q7.question", answerId: "faq.q7.answer" },
      { questionId: "faq.q8.question", answerId: "faq.q8.answer" },
    ],
  },
  {
    titleId: "faq.section.general",
    items: [{ questionId: "faq.q5.question", answerId: "faq.q5.answer" }],
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
                  {item.component && <item.component intl={intl} />}
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
