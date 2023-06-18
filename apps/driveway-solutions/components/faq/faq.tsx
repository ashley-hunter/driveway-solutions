/* eslint-disable-next-line */
export interface FaqProps {}

export function Faq(props: FaqProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <span className="text-brand-700 mb-4 block text-base font-semibold">About Us</span>
        <h2 className="mb-8 text-[32px] font-bold tracking-tight text-gray-900 dark:text-white sm:text-[40px] lg:text-[36px] xl:text-[40px]">
          Frequently asked questions
        </h2>
        <div className="grid  border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16">
          <div>
            <FaqSection
              title='What does "lifetime access" exactly mean?'
              content="The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well."
            />
            <FaqSection
              title='What does "lifetime access" exactly mean?'
              content="The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well."
            />
          </div>
          <div>
            <FaqSection
              title='What does "lifetime access" exactly mean?'
              content="The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well."
            />
            <FaqSection
              title='What does "lifetime access" exactly mean?'
              content="The free updates that will be provided is based on the roadmap that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionMark() {
  return (
    <svg
      className="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}

export default Faq;

function FaqSection({ title, content }: { title: string; content: string }) {
  return (
    <div className="mb-10">
      <h3 className="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white">
        <QuestionMark />
        {title}
      </h3>
      <p className="text-gray-500">{content}</p>
    </div>
  );
}
