import { Title } from "@solidjs/meta";

export default function Demo() {
  return (
    <main>
      <Title>Demo</Title>

      <section class="w-full px-8 text-gray-700 bg-white">
        <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div class="relative flex flex-col md:flex-row">
            <a
              href="#_"
              class="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span class="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                tails
                <span class="text-indigo-600" data-primary="indigo-600">
                  .
                </span>
              </span>
            </a>
            <nav class="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="#_"
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#_"
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Features
              </a>
              <a
                href="#_"
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="#_"
                class="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Blog
              </a>
            </nav>
          </div>
          <div class="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="#"
              class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900"
            >
              Sign in
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              data-rounded="rounded-md"
              data-primary="indigo-600"
            >
              Sign up
            </a>
          </div>
        </div>
      </section>
      <section class="px-2 py-32 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Beautiful Pages to</span>
                  <span
                    class="block text-indigo-600 xl:inline"
                    data-primary="indigo-600"
                  >
                    Tell Your Story!
                  </span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to build beautiful websites that convey
                  your message and tell your story.
                </p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="#_"
                    class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto"
                    data-primary="indigo-600"
                    data-rounded="rounded-md"
                  >
                    Try It Free
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  <a
                    href="#_"
                    class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                    data-rounded="rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div
                class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl"
                data-rounded="rounded-xl"
                data-rounded-max="rounded-full"
              >
                <img src="https://cdn.devdojo.com/images/november2020/hero-image.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="h-auto bg-white">
        <div class="max-w-7xl mx-auto py-16 px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
          <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            subtitle text
          </h2>
          <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Build your next great idea
          </p>
          <p class="max-w-3xl mt-5 mx-auto text-xl text-gray-500">
            Are you ready to start building the next great idea. You can start
            off by using our design components to help tell you story and
            showcase your great idea.
          </p>
        </div>
      </section>
      <section class="w-full py-16 overflow-hidden bg-white relative">
        <div class="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-64 left-0 top-0"></div>
        <div class="w-1/2 h-full bg-gray-50 md:block hidden absolute transform -translate-x-24 -skew-x-[30deg] -skew-x-12 left-0 top-0"></div>
        <div class="max-w-6xl relative mx-auto flex sm:px-0 px-10 flex-col items-start sm:items-center justify-center">
          <svg
            class="w-10 h-10 mb-5"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M128.08 0c7.231.013 14.343.624 21.256 1.78V76.3l52.831-52.696a128.425 128.425 0 0 1 16.34 13.789 128.468 128.468 0 0 1 13.84 16.312L179.513 106.4h74.715A127.58 127.58 0 0 1 256 127.587v.173c0 7.226-.613 14.306-1.772 21.2H179.5l52.847 52.682a129.615 129.615 0 0 1-13.824 16.312h-.015a128.254 128.254 0 0 1-16.326 13.789l-52.846-52.696v74.52a130.321 130.321 0 0 1-21.243 1.781h-.186a130.26 130.26 0 0 1-21.23-1.78v-74.52l-52.831 52.695a128.401 128.401 0 0 1-30.18-30.1L76.5 148.96H1.785A126.984 126.984 0 0 1 0 127.72v-.371c.012-1.875.135-4.166.311-6.536l.055-.713c.522-6.671 1.419-13.7 1.419-13.7H76.5L23.666 53.705a126.265 126.265 0 0 1 13.81-16.286l.026-.026a127.746 127.746 0 0 1 16.344-13.789L106.677 76.3V1.78A130.278 130.278 0 0 1 127.933 0h.147Zm-.013 95.76h-.122c-9.509 0-18.616 1.74-27.034 4.902a76.662 76.662 0 0 0-4.915 26.952v.12a76.383 76.383 0 0 0 4.927 26.951 76.608 76.608 0 0 0 27.022 4.902h.122c9.51 0 18.617-1.74 27.022-4.902a76.146 76.146 0 0 0 4.915-26.952v-.12c0-9.484-1.747-18.57-4.915-26.951a76.614 76.614 0 0 0-27.022-4.902Z"
              fill="#FF4A00"
            ></path>
          </svg>
          <h2 class="text-gray-900 text-3xl font-bold font-serif">
            Connect to 1,000+ apps.
          </h2>
          <p class="text-gray-600 text-lg text-left sm:text-center max-w-lg mt-5">
            We have built integrations to work seemlessly with Zapier referred
            to as Zaps. This means that you can connect our app with thousands
            of other popular third-party services 🙌
          </p>
          <a
            href="#_"
            class="text-indigo-500 font-bold text-lg mt-5 flex items-center group"
          >
            <span>Learn More</span>
            <svg
              class="w-5 h-5 group-hover:ml-1 transition-all ease-out duration-200"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <div class="flex flex-wrap justify-start sm:grid sm:grid-cols-4 md:grid-cols-7 gap-6 mt-8">
            <div class="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50.667 50.667"
              >
                <path
                  d="M25.333 50.667c13.992 0 25.334-11.343 25.334-25.334S39.325 0 25.333 0 0 11.342 0 25.333s11.342 25.334 25.333 25.334z"
                  fill="#2196f3"
                ></path>
                <path
                  clip-rule="evenodd"
                  d="M14.866 32.574h16.755V20.288a3.35 3.35 0 0 0-3.351-3.351H11.515v12.286a3.35 3.35 0 0 0 3.351 3.351zm18.988-4.467 6.702 4.467V16.937l-6.701 4.468z"
                  fill="#fff"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div class="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-10 h-10"
                viewBox="0 0 122.8 122.8"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
              >
                <g>
                  <g>
                    <path
                      fill="#E01E5A"
                      d="M25.8,77.6c0,7.1-5.8,12.9-12.9,12.9S0,84.7,0,77.6c0-7.1,5.8-12.9,12.9-12.9h12.9V77.6z"
                    ></path>
                    <path
                      fill="#E01E5A"
                      d="M32.3,77.6c0-7.1,5.8-12.9,12.9-12.9s12.9,5.8,12.9,12.9v32.3c0,7.1-5.8,12.9-12.9,12.9s-12.9-5.8-12.9-12.9 C32.3,109.9,32.3,77.6,32.3,77.6z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#36C5F0"
                      d="M45.2,25.8c-7.1,0-12.9-5.8-12.9-12.9S38.1,0,45.2,0s12.9,5.8,12.9,12.9v12.9H45.2z"
                    ></path>
                    <path
                      fill="#36C5F0"
                      d="M45.2,32.3c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H12.9C5.8,58.1,0,52.3,0,45.2s5.8-12.9,12.9-12.9 C12.9,32.3,45.2,32.3,45.2,32.3z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#2EB67D"
                      d="M97,45.2c0-7.1,5.8-12.9,12.9-12.9c7.1,0,12.9,5.8,12.9,12.9s-5.8,12.9-12.9,12.9H97V45.2z"
                    ></path>
                    <path
                      fill="#2EB67D"
                      d="M90.5,45.2c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V12.9C64.7,5.8,70.5,0,77.6,0 c7.1,0,12.9,5.8,12.9,12.9V45.2z"
                    ></path>
                  </g>
                  <g>
                    <path
                      fill="#ECB22E"
                      d="M77.6,97c7.1,0,12.9,5.8,12.9,12.9c0,7.1-5.8,12.9-12.9,12.9c-7.1,0-12.9-5.8-12.9-12.9V97H77.6z"
                    ></path>
                    <path
                      fill="#ECB22E"
                      d="M77.6,90.5c-7.1,0-12.9-5.8-12.9-12.9c0-7.1,5.8-12.9,12.9-12.9h32.3c7.1,0,12.9,5.8,12.9,12.9 c0,7.1-5.8,12.9-12.9,12.9H77.6z"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            <div class="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-12 h-12"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0.5 0.5 999 699.242"
              >
                <path
                  fill="#00A1E0"
                  d="M416.224 76.763c32.219-33.57 77.074-54.391 126.682-54.391 65.946 0 123.48 36.772 154.12 91.361 26.626-11.896 56.098-18.514 87.106-18.514 118.94 0 215.368 97.268 215.368 217.247 0 119.993-96.428 217.261-215.368 217.261a213.735 213.735 0 0 1-42.422-4.227c-26.981 48.128-78.397 80.646-137.412 80.646-24.705 0-48.072-5.706-68.877-15.853-27.352 64.337-91.077 109.448-165.348 109.448-77.344 0-143.261-48.939-168.563-117.574-11.057 2.348-22.513 3.572-34.268 3.572C75.155 585.74.5 510.317.5 417.262c0-62.359 33.542-116.807 83.378-145.937-10.26-23.608-15.967-49.665-15.967-77.06C67.911 87.25 154.79.5 261.948.5c62.914 0 118.827 29.913 154.276 76.263"
                ></path>
                <path
                  fill="#FFF"
                  d="M145.196 363.11c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.707 3.444 10.189 5.407 19.81 6.986 29.871 6.986 20.492 0 33.214-10.9 33.214-28.447v-.341c0-16.224-14.358-22.115-27.835-26.37l-1.75-.569c-10.161-3.302-18.927-6.147-18.927-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.042 6.66 0 0 1.978 1.281 2.704-.64.398-1.025 3.814-10.218 4.17-11.214.384-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.049.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.358 5.635 18.358 12.58v.342c0 6.347-5.521 11.071-14.43 11.071-3.458 0-14.487-.071-26.398-7.6-1.438-.84-2.277-1.451-3.387-2.12-.583-.37-2.049-1.011-2.689.925l-4.045 11.215zm299.998 0c-.626 1.637.228 1.979.427 2.263 1.878 1.366 3.786 2.349 5.706 3.444 10.189 5.407 19.811 6.986 29.871 6.986 20.492 0 33.215-10.9 33.215-28.447v-.341c0-16.224-14.359-22.115-27.836-26.37l-1.75-.569c-10.161-3.302-18.928-6.147-18.928-12.836v-.355c0-5.721 5.123-9.934 13.064-9.934 8.823 0 19.297 2.932 26.043 6.66 0 0 1.978 1.281 2.703-.64.398-1.025 3.814-10.218 4.17-11.214.385-1.082-.299-1.879-.996-2.306-7.699-4.682-18.344-7.884-29.358-7.884l-2.05.014c-18.756 0-31.848 11.328-31.848 27.565v.342c0 17.119 14.444 22.669 27.978 26.54l2.177.669c9.862 3.031 18.373 5.635 18.373 12.58v.342c0 6.347-5.536 11.071-14.445 11.071-3.457 0-14.486-.071-26.397-7.6-1.438-.84-2.291-1.423-3.372-2.12-.371-.242-2.107-.911-2.705.925l-4.042 11.215zm204.801-34.37c0 9.919-1.85 17.731-5.493 23.253-3.601 5.465-9.051 8.126-16.649 8.126-7.613 0-13.035-2.647-16.579-8.126-3.587-5.507-5.407-13.334-5.407-23.253 0-9.904 1.82-17.703 5.407-23.168 3.544-5.407 8.966-8.04 16.579-8.04 7.599 0 13.049 2.633 16.664 8.04 3.629 5.464 5.478 13.263 5.478 23.168m17.106-18.386c-1.68-5.679-4.298-10.688-7.784-14.857-3.487-4.184-7.898-7.542-13.136-9.99-5.223-2.433-11.398-3.671-18.328-3.671-6.945 0-13.121 1.238-18.344 3.671-5.237 2.448-9.648 5.807-13.149 9.99-3.472 4.184-6.091 9.193-7.784 14.857-1.665 5.649-2.505 11.825-2.505 18.386s.84 12.751 2.505 18.386c1.693 5.664 4.298 10.674 7.799 14.857 3.486 4.184 7.912 7.528 13.135 9.904 5.236 2.377 11.398 3.586 18.344 3.586 6.93 0 13.092-1.209 18.328-3.586 5.223-2.376 9.648-5.721 13.136-9.904 3.486-4.17 6.104-9.179 7.784-14.857 1.68-5.649 2.519-11.84 2.519-18.386s-.841-12.737-2.52-18.386m140.467 47.116c-.569-1.665-2.177-1.039-2.177-1.039-2.49.954-5.138 1.836-7.955 2.277-2.861.44-6.006.669-9.379.669-8.281 0-14.856-2.462-19.566-7.329-4.725-4.867-7.372-12.736-7.344-23.381.029-9.691 2.362-16.978 6.561-22.527 4.17-5.521 10.517-8.354 18.984-8.354 7.059 0 12.438.811 18.072 2.59 0 0 1.352.583 1.992-1.181 1.494-4.156 2.604-7.13 4.198-11.698.456-1.295-.654-1.85-1.053-2.007-2.22-.868-7.457-2.276-11.413-2.874-3.7-.569-8.026-.868-12.836-.868-7.188 0-13.591 1.224-19.069 3.672-5.465 2.433-10.104 5.791-13.775 9.976-3.672 4.184-6.461 9.192-8.325 14.856-1.85 5.649-2.789 11.854-2.789 18.415 0 14.188 3.828 25.657 11.385 34.054 7.57 8.425 18.941 12.708 33.77 12.708 8.766 0 17.76-1.778 24.221-4.326 0 0 1.238-.598.697-2.034l-4.199-11.599zm29.929-38.232c.811-5.507 2.334-10.09 4.682-13.661 3.544-5.422 8.951-8.396 16.551-8.396s12.623 2.988 16.223 8.396c2.391 3.571 3.43 8.354 3.843 13.661h-41.299zm57.592-12.111c-1.451-5.479-5.052-11.015-7.414-13.548-3.729-4.013-7.371-6.816-10.986-8.382-4.725-2.021-10.389-3.358-16.593-3.358-7.229 0-13.79 1.21-19.112 3.714-5.336 2.505-9.818 5.921-13.334 10.176-3.516 4.24-6.162 9.292-7.842 15.027-1.693 5.707-2.547 11.926-2.547 18.485 0 6.675.883 12.894 2.633 18.486 1.765 5.636 4.582 10.602 8.396 14.714 3.799 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.894 3.416 21.019 3.401 16.722-.057 25.53-3.785 29.159-5.792.641-.355 1.253-.981.483-2.774l-3.785-10.603c-.568-1.579-2.177-.996-2.177-.996-4.142 1.537-10.032 4.298-23.766 4.27-8.979-.014-15.64-2.661-19.81-6.803-4.283-4.24-6.375-10.474-6.745-19.268l57.905.057s1.522-.028 1.68-1.509c.057-.624 1.993-11.895-1.722-24.945m-521.327 12.111c.825-5.507 2.334-10.09 4.682-13.661 3.543-5.422 8.951-8.396 16.55-8.396s12.623 2.988 16.237 8.396c2.376 3.571 3.415 8.354 3.828 13.661h-41.297zm57.577-12.111c-1.451-5.479-5.037-11.015-7.399-13.548-3.729-4.013-7.372-6.816-10.986-8.382-4.725-2.021-10.388-3.358-16.593-3.358-7.215 0-13.79 1.21-19.112 3.714-5.336 2.505-9.819 5.921-13.334 10.176-3.515 4.24-6.162 9.292-7.841 15.027-1.679 5.707-2.547 11.926-2.547 18.485 0 6.675.882 12.894 2.633 18.486 1.765 5.636 4.583 10.602 8.396 14.714 3.8 4.142 8.695 7.387 14.558 9.648 5.821 2.249 12.893 3.416 21.019 3.401 16.721-.057 25.53-3.785 29.159-5.792.641-.355 1.252-.981.484-2.774l-3.771-10.603c-.584-1.579-2.191-.996-2.191-.996-4.141 1.537-10.019 4.298-23.78 4.27-8.965-.014-15.625-2.661-19.795-6.803-4.284-4.24-6.375-10.474-6.746-19.268l57.905.057s1.522-.028 1.679-1.509c.055-.624 1.99-11.895-1.738-24.945m-182.738 50.026c-2.263-1.808-2.576-2.263-3.344-3.43-1.139-1.779-1.722-4.312-1.722-7.528 0-5.095 1.679-8.752 5.166-11.214-.042.015 4.981-4.34 16.792-4.184 8.296.114 15.71 1.338 15.71 1.338v26.327h.014s-7.357 1.579-15.639 2.077c-11.783.712-17.02-3.4-16.977-3.386m23.039-40.686c-2.348-.171-5.394-.271-9.037-.271-4.966 0-9.762.626-14.259 1.836-4.525 1.209-8.595 3.103-12.096 5.606a27.927 27.927 0 0 0-8.396 9.549c-2.049 3.814-3.088 8.311-3.088 13.349 0 5.123.882 9.577 2.647 13.221 1.765 3.657 4.312 6.702 7.556 9.051 3.216 2.348 7.187 4.069 11.797 5.108 4.54 1.039 9.691 1.565 15.327 1.565 5.934 0 11.854-.483 17.589-1.466 5.678-.968 12.651-2.377 14.586-2.817a146.25 146.25 0 0 0 4.056-1.039c1.438-.355 1.324-1.893 1.324-1.893l-.029-52.952c0-11.613-3.102-20.223-9.207-25.559-6.077-5.322-15.028-8.013-26.597-8.013-4.341 0-11.328.599-15.512 1.438 0 0-12.651 2.448-17.86 6.518 0 0-1.138.712-.512 2.306l4.099 11.015c.512 1.423 1.893.939 1.893.939s.441-.171.954-.47c11.143-6.062 25.231-5.877 25.231-5.877 6.262 0 11.072 1.252 14.316 3.742 3.159 2.419 4.767 6.076 4.767 13.789v2.448a209.677 209.677 0 0 0-9.549-1.123m467.029-29.836c.44-1.31-.484-1.936-.869-2.078-.981-.384-5.905-1.423-9.705-1.665-7.271-.441-11.312.783-14.928 2.405-3.586 1.622-7.57 4.24-9.791 7.215v-7.044c0-.982-.697-1.765-1.665-1.765h-14.843c-.967 0-1.664.782-1.664 1.765v86.366c0 .968.797 1.765 1.764 1.765h15.213a1.76 1.76 0 0 0 1.75-1.765v-43.147c0-5.792.641-11.569 1.922-15.198 1.252-3.587 2.96-6.461 5.066-8.525 2.12-2.049 4.525-3.486 7.158-4.297 2.689-.826 5.663-1.096 7.77-1.096 3.031 0 6.361.782 6.361.782 1.109.128 1.736-.555 2.105-1.565.997-2.647 3.815-10.574 4.356-12.153"
                ></path>
                <path
                  fill="#FFF"
                  d="M595.874 246.603c-1.85-.569-3.529-.954-5.721-1.366-2.221-.398-4.867-.598-7.869-.598-10.475 0-18.729 2.96-24.52 8.794-5.764 5.807-9.678 14.644-11.642 26.271l-.712 3.913h-13.148s-1.594-.057-1.936 1.68l-2.148 12.053c-.157 1.139.342 1.864 1.878 1.864h12.794l-12.979 72.463c-1.011 5.835-2.178 10.631-3.473 14.273-1.267 3.587-2.504 6.276-4.041 8.24-1.48 1.879-2.875 3.273-5.295 4.084-1.992.669-4.297.982-6.816.982-1.395 0-3.258-.229-4.639-.513-1.366-.271-2.092-.569-3.131-1.011 0 0-1.494-.568-2.092.926-.47 1.238-3.885 10.615-4.298 11.769-.398 1.152.171 2.049.896 2.319 1.708.598 2.974.996 5.294 1.551 3.217.755 5.934.797 8.481.797 5.322 0 10.189-.754 14.217-2.205 4.042-1.466 7.57-4.014 10.701-7.457 3.373-3.729 5.493-7.628 7.515-12.964 2.006-5.266 3.729-11.812 5.094-19.439l13.05-73.815h19.069s1.607.057 1.936-1.693l2.162-12.039c.143-1.152-.341-1.864-1.893-1.864h-18.514c.1-.412.939-6.931 3.06-13.063.911-2.604 2.618-4.725 4.056-6.177 1.424-1.423 3.06-2.433 4.854-3.017 1.835-.598 3.928-.882 6.219-.882 1.736 0 3.457.199 4.752.469 1.793.385 2.49.584 2.961.727 1.893.569 2.148.014 2.519-.896l4.426-12.153c.455-1.312-.669-1.867-1.067-2.023m-258.68 125.231c0 .968-.697 1.751-1.665 1.751h-15.355c-.968 0-1.651-.783-1.651-1.751v-123.58c0-.967.683-1.75 1.651-1.75h15.355c.968 0 1.665.783 1.665 1.75v123.58z"
                ></path>
              </svg>
            </div>
            <div class="h-20 w-20 bg-white rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.002 512.002"
                style="enable-background:new 0 0 512.002 512.002"
              >
                <path
                  style="fill:#73a1fb"
                  d="M500.398 94.784a194.219 194.219 0 0 1-24.763 9.023 109.468 109.468 0 0 0 22.287-39.193 8.258 8.258 0 0 0-12.078-9.619c-17.945 10.643-37.305 18.292-57.605 22.764-20.449-19.981-48.222-31.353-76.934-31.353-60.606 0-109.913 49.306-109.913 109.91 0 4.773.302 9.52.9 14.201-75.206-6.603-145.124-43.568-193.136-102.463a8.259 8.259 0 0 0-13.537 1.061c-9.738 16.709-14.886 35.82-14.886 55.265 0 26.484 9.455 51.611 26.158 71.246a93.118 93.118 0 0 1-14.711-6.568 8.26 8.26 0 0 0-12.267 7.03c-.012.487-.012.974-.012 1.468 0 39.531 21.276 75.122 53.805 94.52a94.762 94.762 0 0 1-8.362-1.214 8.254 8.254 0 0 0-7.731 2.638 8.25 8.25 0 0 0-1.681 7.994c12.04 37.591 43.039 65.24 80.514 73.67-31.082 19.468-66.626 29.665-103.939 29.665-7.786 0-15.616-.457-23.279-1.364A8.258 8.258 0 0 0 3.8 418.617c47.935 30.735 103.361 46.98 160.284 46.98 111.903 0 181.907-52.769 220.926-97.037 48.657-55.199 76.562-128.261 76.562-200.451 0-3.016-.046-6.061-.139-9.097 19.197-14.463 35.724-31.967 49.173-52.085a8.256 8.256 0 0 0-.545-9.906 8.245 8.245 0 0 0-9.663-2.237z"
                ></path>
              </svg>
            </div>
            <div class="h-20 w-20 bg-white sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2442.4 2237"
              >
                <path
                  d="M50.4 1628.6 862.5 221.9l703.7 406.3-812 1406.7-703.8-406.3z"
                  style="fill:#fbbc04"
                ></path>
                <path
                  d="M2385.1 1623.7 1572.5 216.5C1467.6 18.1 1221.8-57.7 1023.4 47.2S749.3 397.9 854.1 596.3c4.6 8.7 9.5 17.2 14.7 25.6l812.6 1407.2c109.6 195.8 357.2 265.7 553 156.1s265.7-357.2 156.1-553c-1.8-3.2-3.6-6.3-5.4-9.4v.9z"
                  style="fill:#4285f4"
                ></path>
                <circle
                  cx="406.3"
                  cy="1828.6"
                  r="406.3"
                  style="fill:#34a853"
                ></circle>
              </svg>
            </div>
            <div class="h-20 w-20 bg-white sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-10 h-10 fill-current text-blue-500"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.438 30.113h4.606v-4.6H5.438zm-3.851-8.45v3.85h3.85v-3.85zm29.138-10.607c-1.438-4.637-5.15-8.331-9.788-9.787C10.306-2.05.499 5.856.499 15.994h5.988c0-6.362 6.312-11.281 13.006-8.856a8.968 8.968 0 0 1 5.363 5.356c2.444 6.688-2.481 12.988-8.837 13v.019H16v5.988c10.163 0 18.05-9.8 14.725-20.444zM16.019 25.494v-5.956h-5.975v5.975H16v-.019z"></path>
              </svg>
            </div>
            <div class="h-20 w-20 bg-white sm:translate-x-12 md:translate-x-0 rounded-2xl hover:scale-125 transition-all ease-out cursor-pointer duration-200 border border-gray-200 flex items-center justify-center">
              <svg
                class="w-10 h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 434.016 434.016"
                style="enable-background:new 0 0 434.016 434.016"
              >
                <path
                  style="fill:#69b4e5"
                  d="M416.049 52.27c-10.508-11.324-25.72-17.356-45.207-17.928-55.02-1.774-93.932 27.496-115.651 86.986a8.833 8.833 0 0 0 1.814 9.041 8.78 8.78 0 0 0 8.812 2.534c6.246-1.718 12.44-2.588 18.412-2.588 8.018 0 18.689 1.474 24.001 8.497 4.077 5.39 4.632 13.472 1.649 24.02-2.518 8.899-15.476 32.721-31.515 57.929-19.539 30.712-30.333 44.48-33.445 44.48-10.31 0-47.565-165.194-48.589-168.817-10.686-37.86-16.05-56.864-50.798-56.864-26.483 0-85.551 48.362-134.051 90.495-2.983 2.591-5.495 4.774-7.44 6.436a11.525 11.525 0 0 0-1.607 15.849l9.038 11.644a11.517 11.517 0 0 0 15.812 2.331l.497-.354c15.691-11.163 30.514-21.706 41.704-22.284 12.16-.597 22.711 18.4 35.29 63.605 23.957 87.803 60.355 192.468 97.709 192.468 39.036 0 85.605-33.091 145.802-111.429 54.482-70.902 83.655-127.135 85.529-168.048 1.407-30.901-4.57-53.78-17.766-68.003z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section class="relative w-full bg-white">
        <div class="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-white"></div>
        <div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
          <h1 class="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-5xl xl:text-6xl sm:mb-3">
            <a href="#_">The Project Blog</a>
          </h1>
          <p class="text-lg font-medium text-gray-500 sm:text-2xl">
            Designs and layouts to help you with your app.
          </p>
          <div class="flex grid h-full grid-cols-12 gap-10 pb-10 mt-8 sm:mt-16">
            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
              <a
                href="#_"
                class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                style="background-image:url('https://cdn.devdojo.com/images/may2021/quench-satisfying.jpg')"
              ></a>
              <div class="relative z-20 w-full h-auto py-8 text-white bg-purple-500 border-t-0 border-yellow-200 px-7">
                <a
                  href="#_"
                  class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-purple-500 bg-white"
                >
                  Resources
                </a>
                <h2 class="mb-5 text-5xl font-bold">
                  <a href="#_" class="">
                    Refreshing Designs
                  </a>
                </h2>
                <p class="mb-2 text-lg font-normal text-purple-100 opacity-100">
                  Quench satisfying designs to help you stir up emotion and tell
                  a story.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group md:col-span-6 xl:col-span-4">
              <a
                href="#_"
                class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                style="background-image:url('https://cdn.devdojo.com/images/may2021/orange.jpg')"
              ></a>
              <div class="relative z-20 w-full h-auto py-8 text-white bg-blue-400 border-t-0 border-yellow-200 px-7">
                <a
                  href="#_"
                  class="inline-block text-xs font-semibold absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-blue-500 bg-white"
                >
                  Lifestyle
                </a>
                <h2 class="mb-5 text-5xl font-bold">
                  <a href="#_">Healthier Lifestyle</a>
                </h2>
                <p class="mb-2 text-lg font-normal text-blue-100 opacity-100">
                  Living a healthier lifestyle will help with your productivity
                  and your mind-set.
                </p>
              </div>
            </div>
            <div class="relative flex flex-col items-start justify-end h-full col-span-12 overflow-hidden rounded-xl group sm:col-span-12 xl:col-span-4 sm:flex-row xl:flex-col">
              <a
                href="#_"
                class="block w-full transition duration-300 ease-in-out transform bg-center bg-cover h-96 hover:scale-110"
                style="background-image:url('https://cdn.devdojo.com/images/may2021/gbc.jpg')"
              ></a>
              <div class="relative z-20 flex flex-col items-start justify-center w-full h-auto py-8 text-white bg-yellow-400 border-t-0 border-yellow-200 sm:h-full xl:h-auto px-7">
                <a
                  href="#_"
                  class="inline-block text-xs font-semibold absolute sm:mb-5 xl:mb-0 sm:relative xl:absolute top-0 -mt-3.5 rounded-full px-4 py-2 uppercase text-yellow-400 bg-white"
                >
                  Entertainment
                </a>
                <h2 class="mb-5 text-5xl font-bold">
                  <a href="#_">Gaming Evolution</a>
                </h2>
                <p class="mb-2 text-lg font-normal opacity-100 text-yellow-50">
                  Learn about the evolution of gaming and how it started a
                  revolution.
                </p>
              </div>
            </div>
            <div class="grid grid-cols-12 col-span-12 gap-7">
              <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <a
                  href="#_"
                  class="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    class="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/workstation.jpg"
                  />
                </a>
                <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div class="bg-indigo-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Inspiration</span>
                  </div>
                  <h2 class="text-base font-bold sm:text-lg md:text-xl">
                    <a href="#_" class="">
                      Best Workstations of the Year
                    </a>
                  </h2>
                  <p class="mt-2 text-sm text-gray-500">
                    Check out these inspiring workstations to get ideas on how
                    to level-up your workstation.
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <a
                  href="#_"
                  class="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    class="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/snacks.jpg"
                  />
                </a>
                <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div class="bg-red-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Food</span>
                  </div>
                  <h2 class="text-base font-bold sm:text-lg md:text-xl">
                    <a href="#_" class="">
                      Eating for Productivity
                    </a>
                  </h2>
                  <p class="mt-2 text-sm text-gray-500">
                    Learn how to be more disciplined in your diet and how you
                    can eat to maximize productivity.
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
                <a
                  href="#_"
                  class="block transition duration-200 ease-out transform hover:scale-110"
                >
                  <img
                    class="object-cover w-full shadow-sm max-h-56"
                    src="https://cdn.devdojo.com/images/may2021/book-design.jpg"
                  />
                </a>
                <div class="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
                  <div class="bg-purple-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
                    <span>Resources</span>
                  </div>
                  <h2 class="text-base font-bold sm:text-lg md:text-xl">
                    <a href="#_">A Design Mind-set</a>
                  </h2>
                  <p class="mt-2 text-sm text-gray-500">
                    What does it mean to have a design mind-set? Learn how to
                    improve your eye for design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
        <div class="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
          <div class="flex flex-col items-center lg:flex-row">
            <div class="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p
                class="mb-2 text-base font-medium tracking-tight text-indigo-500 uppercase"
                data-primary="indigo-500"
              >
                Our customers love our product
              </p>
              <h2 class="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p class="my-6 text-lg text-gray-600">
                Don't just take our word for it, read from our extensive list of
                case studies and customer testimonials.
              </p>
              <a
                href="#_"
                class="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                data-primary="indigo-600"
                data-rounded="rounded-md"
              >
                View Case Studies
              </a>
            </div>
            <div class="w-full lg:w-1/2">
              <blockquote
                class="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
                <div class="flex flex-col pr-8">
                  <div class="relative pl-12">
                    <svg
                      class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      data-primary="indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      Awesome product! And the customer service is exceptionally
                      well.
                    </p>
                  </div>
                  <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    Jane Cooper
                    <span class="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
                <img
                  class="flex-shrink-0 w-20 h-20 bg-gray-300 rounded-full xl:w-24 xl:h-24"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
              <blockquote
                class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
                <div class="flex flex-col pr-10">
                  <div class="relative pl-12">
                    <svg
                      class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      data-primary="indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      I can't express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>
                  <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    John Doe
                    <span class="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
              <blockquote
                class="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
                <div class="flex flex-col pr-10">
                  <div class="relative pl-12">
                    <svg
                      class="absolute left-0 w-10 h-10 text-indigo-500 fill-current"
                      data-primary="indigo-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z"></path>
                    </svg>
                    <p class="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      I can't express enough, how amazing this service has been
                      for my company.
                    </p>
                  </div>
                  <h3 class="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
                    John Smith
                    <span class="mt-1 text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                  <p class="mt-1 text-sm leading-5 text-gray-500 truncate"></p>
                </div>
                <img
                  class="flex-shrink-0 w-24 h-24 bg-gray-300 rounded-full"
                  src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rrb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;aauto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                  alt=""
                />
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-700 bg-white body-font">
        <div class="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
          <a
            href="#_"
            class="text-xl font-black leading-none text-gray-900 select-none logo"
          >
            tails<span class="text-indigo-600">.</span>
          </a>
          <p class="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            © 2021 Tails - Tailwindcss Page Builder
          </p>
          <span class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Facebook</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Instagram</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Twitter</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">GitHub</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">Dribbble</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}