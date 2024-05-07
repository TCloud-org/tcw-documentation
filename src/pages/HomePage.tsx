import { Container } from "../layoutComponents/Container";

export const HomePage = () => {
  return (
    <Container>
      <main className="flex-auto">
        <article className="flex h-full flex-col pb-10 pt-16">
          <div className="flex-auto prose dark:prose-invert [html_:where(&amp;>*)]:mx-auto [html_:where(&amp;>*)]:max-w-2xl [html_:where(&amp;>*)]:lg:mx-[calc(50%-min(50%,theme(maxWidth.lg)))] [html_:where(&amp;>*)]:lg:max-w-3xl">
            <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
              <div className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                  >
                    <defs>
                      <pattern
                        id=":S1:"
                        width="72"
                        height="56"
                        patternUnits="userSpaceOnUse"
                        x="-12"
                        y="4"
                      >
                        <path d="M.5 56V.5H72" fill="none"></path>
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      stroke-width="0"
                      fill="url(#:S1:)"
                    ></rect>
                    <svg x="-12" y="4" className="overflow-visible">
                      <rect
                        stroke-width="0"
                        width="73"
                        height="57"
                        x="288"
                        y="168"
                      ></rect>
                      <rect
                        stroke-width="0"
                        width="73"
                        height="57"
                        x="144"
                        y="56"
                      ></rect>
                      <rect
                        stroke-width="0"
                        width="73"
                        height="57"
                        x="504"
                        y="168"
                      ></rect>
                      <rect
                        stroke-width="0"
                        width="73"
                        height="57"
                        x="720"
                        y="336"
                      ></rect>
                    </svg>
                  </svg>
                </div>
                <svg
                  viewBox="0 0 1113 440"
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden"
                >
                  <path d="M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"></path>
                </svg>
              </div>
            </div>
            <h1>API Documentation</h1>
            <p className="lead">
              Use the Protocol API to access contacts, conversations, group
              messages, and more and seamlessly integrate your product into the
              workflows of dozens of devoted Protocol users.
            </p>
            <div className="not-prose mb-16 mt-6 flex gap-3">
              <a
                className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-1 dark:ring-inset dark:ring-emerald-400/20 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-300 dark:hover:ring-emerald-300"
                href="/quickstart"
              >
                Quickstart
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 -mr-1"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                  ></path>
                </svg>
              </a>
              <a
                className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white"
                href="/sdks"
              >
                Explore SDKs
              </a>
            </div>
            <h2 className="scroll-mt-24" id="getting-started">
              Getting started
            </h2>
            <p className="lead">
              To get started, create a new application in your{" "}
              <a href="#">developer settings</a>, then read about how to make
              requests for the resources you need to access using our HTTP APIs
              or dedicated client SDKs. When your integration is ready to go
              live, publish it to our <a href="#">integrations directory</a> to
              reach the Protocol community.
            </p>
            <div className="not-prose">
              <a
                className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                href="/sdks"
              >
                Get your API key
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                  ></path>
                </svg>
              </a>
            </div>
            <div className="my-16 xl:max-w-none">
              <h2 className="scroll-mt-24" id="guides">
                <a
                  className="group text-inherit no-underline hover:text-inherit"
                  href="#guides"
                >
                  <div className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]">
                    <div className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600">
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke-linecap="round"
                        aria-hidden="true"
                        className="h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"
                      >
                        <path d="m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"></path>
                      </svg>
                    </div>
                  </div>
                  Guides
                </a>
              </h2>
              <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Authentication
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Learn how to authenticate your API requests.
                  </p>
                  <p className="mt-4">
                    <a
                      className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                      href="/authentication"
                    >
                      Read more
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Pagination
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Understand how to work with paginated responses.
                  </p>
                  <p className="mt-4">
                    <a
                      className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                      href="/pagination"
                    >
                      Read more
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Errors
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Read about the different types of errors returned by the
                    API.
                  </p>
                  <p className="mt-4">
                    <a
                      className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                      href="/errors"
                    >
                      Read more
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                    Webhooks
                  </h3>
                  <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Learn how to programmatically configure webhooks for your
                    app.
                  </p>
                  <p className="mt-4">
                    <a
                      className="inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                      href="/webhooks"
                    >
                      Read more
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 relative top-px -mr-1"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="my-16 xl:max-w-none">
              <h2 className="scroll-mt-24" id="resources">
                <a
                  className="group text-inherit no-underline hover:text-inherit"
                  href="#resources"
                >
                  Resources
                </a>
              </h2>
              <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
                <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
                      >
                        <defs>
                          <pattern
                            id=":r5r:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="16"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r5r:)"
                        ></rect>
                        <svg x="50%" y="16" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="0"
                            y="56"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="72"
                            y="168"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
                      >
                        <defs>
                          <pattern
                            id=":r5s:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="16"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r5s:)"
                        ></rect>
                        <svg x="50%" y="16" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="0"
                            y="56"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="72"
                            y="168"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
                  <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                      >
                        <path
                          stroke-width="0"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
                        ></path>
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
                        ></path>
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                      <a href="/contacts">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Contacts
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Learn about the contact model and how to create, retrieve,
                      update, delete, and list contacts.
                    </p>
                  </div>
                </div>
                <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
                      >
                        <defs>
                          <pattern
                            id=":r5t:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="-6"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r5t:)"
                        ></rect>
                        <svg x="50%" y="-6" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="-72"
                            y="112"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="72"
                            y="168"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
                      >
                        <defs>
                          <pattern
                            id=":r5u:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="-6"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r5u:)"
                        ></rect>
                        <svg x="50%" y="-6" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="-72"
                            y="112"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="72"
                            y="168"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
                  <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"
                        ></path>
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 8.5h5M8.5 11.5h3"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                      <a href="/conversations">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Conversations
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Learn about the conversation model and how to create,
                      retrieve, update, delete, and list conversations.
                    </p>
                  </div>
                </div>
                <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
                      >
                        <defs>
                          <pattern
                            id=":r5v:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="32"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r5v:)"
                        ></rect>
                        <svg x="50%" y="32" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="0"
                            y="112"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="72"
                            y="224"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
                      >
                        <defs>
                          <pattern
                            id=":r60:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="32"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r60:)"
                        ></rect>
                        <svg x="50%" y="32" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="0"
                            y="112"
                          ></rect>
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="72"
                            y="224"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
                  <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                      <a href="/messages">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Messages
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Learn about the message model and how to create, retrieve,
                      update, delete, and list messages.
                    </p>
                  </div>
                </div>
                <div className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5">
                  <div className="pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
                      >
                        <defs>
                          <pattern
                            id=":r61:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="22"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r61:)"
                        ></rect>
                        <svg x="50%" y="22" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="0"
                            y="56"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                    <div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
                      style={{
                        maskImage:
                          "radial-gradient(180px at 0px 0px, white, transparent)",
                      }}
                    >
                      <svg
                        aria-hidden="true"
                        className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
                      >
                        <defs>
                          <pattern
                            id=":r62:"
                            width="72"
                            height="56"
                            patternUnits="userSpaceOnUse"
                            x="50%"
                            y="22"
                          >
                            <path d="M.5 56V.5H72" fill="none"></path>
                          </pattern>
                        </defs>
                        <rect
                          width="100%"
                          height="100%"
                          stroke-width="0"
                          fill="url(#:r62:)"
                        ></rect>
                        <svg x="50%" y="22" className="overflow-visible">
                          <rect
                            stroke-width="0"
                            width="73"
                            height="57"
                            x="0"
                            y="56"
                          ></rect>
                        </svg>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"></div>
                  <div className="relative rounded-2xl px-4 pb-4 pt-16">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
                      >
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
                        ></path>
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
                      <a href="/groups">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Groups
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      Learn about the group model and how to create, retrieve,
                      update, delete, and list groups.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
            <div className="relative h-8">
              <form className="absolute inset-0 flex items-center justify-center gap-6 md:justify-start">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Was this page helpful?
                </p>
                <div className="group grid h-8 grid-cols-[1fr,1px,1fr] overflow-hidden rounded-full border border-zinc-900/10 dark:border-white/10">
                  <button
                    type="submit"
                    className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                    data-response="yes"
                  >
                    Yes
                  </button>
                  <div className="bg-zinc-900/10 dark:bg-white/10"></div>
                  <button
                    type="submit"
                    className="px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-white"
                    data-response="no"
                  >
                    No
                  </button>
                </div>
              </form>
            </div>
          </footer>
        </article>
      </main>
    </Container>
  );
};
