/* eslint-disable-next-line */
export interface TestimonialProps {}

export function Testimonial(props: TestimonialProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:py-16 lg:px-6">
        <figure className="mx-auto max-w-screen-md">
          <svg
            className="mx-auto mb-3 h-12 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-2xl font-medium text-gray-900 dark:text-white">
              &quot;I recently had my driveway re-tarmacked by the team at Driveway Solutions NI and
              I could not be happier with the result. The work was completed quickly and
              efficiently, and the final product exceeded my expectations. I would highly recommend
              this company to anyone looking to upgrade their driveway. &quot;
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
              <div className="pl-3 text-base leading-relaxed text-gray-500">Lisburn</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default Testimonial;
