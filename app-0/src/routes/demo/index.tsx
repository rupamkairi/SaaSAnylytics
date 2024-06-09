import { createEffect } from "solid-js";
import { Title } from "solid-start";
import { register } from "~/packages/anylytics";

export default function Demo() {
  createEffect(() => {
    if (true) {
      register();
    }
  }, []);

  createEffect(() => {
    if (window) {
      window.history.replaceState({}, "", "/demo");
    }
  }, []);

  return (
    <div>
      <Title>Demo | Anylytics</Title>
      <div class="font-body  h-full font-body antialiased text-[#000000] bg-[#fcfcfc] dark:text-[#ffffff] dark:bg-[#031022]">
        <div class="bg-gray-900">
          <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="relative flex items-center justify-between">
              <div class="flex items-center">
                <a class="inline-flex items-center mr-8" href="">
                  <span class="text-2xl text-white">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 640 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M192 384h192c53 0 96-43 96-96h32c70.6 0 128-57.4 128-128S582.6 32 512 32H120c-13.3 0-24 10.7-24 24v232c0 53 43 96 96 96zM512 96c35.3 0 64 28.7 64 64s-28.7 64-64 64h-32V96h32zm47.7 384H48.3c-47.6 0-61-64-36-64h583.3c25 0 11.8 64-35.9 64z"></path>
                      </svg>
                    </div>
                  </span>
                  <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                    chai.
                  </span>
                </a>
                <ul class="items-center hidden space-x-8 lg:flex">
                  <li class="">
                    <a
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      href=""
                    >
                      Product
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      href=""
                    >
                      Features
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      href=""
                    >
                      Pricing
                    </a>
                  </li>
                  <li class="">
                    <a
                      class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                      href=""
                    >
                      About us
                    </a>
                  </li>
                </ul>
              </div>
              <ul class="items-center hidden space-x-8 lg:flex">
                <li class="">
                  <a
                    class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-violet"
                    href=""
                  >
                    Sign in
                  </a>
                </li>
                <li class="">
                  <a
                    class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 shadow-md focus:shadow-outline focus:outline-none bg-violet-500 rounded-global"
                    href=""
                  >
                    {" "}
                    Sign up{" "}
                  </a>
                </li>
              </ul>
              <div class="lg:hidden">
                <button
                  id="ngaBrp"
                  class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                >
                  <span class="w-5 text-white">
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div class="frame-content"></div>
        </div>
        <section class="">
          <div class="px-4 py-32 mx-auto lg:items-center lg:flex lg:max-w-7xl">
            <div class="max-w-xl mx-auto text-center">
              <h1 class="text-4xl font-extrabold text-slate-900 dark:text-slate-100 lg:text-5xl">
                <p class="">Let us find your</p>
                <p class="bg-gradient-to-r from-violet-500 to-green-500 bg-clip-text text-transparent">
                  Forever Home.
                </p>
              </h1>
              <p class="mt-4 sm:leading-relaxed sm:text-xl lg:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div class="flex flex-wrap justify-center gap-4 mt-8">
                <a
                  class="block w-full px-12 py-3 text-sm font-medium text-white rounded-global shadow active:bg-red-500 bg-violet-500 hover:bg-violet-700 focus:outline-none focus:ring sm:w-auto"
                  href="/get-started"
                >
                  Get Started
                </a>
                <a
                  class="block w-full px-12 py-3 text-sm font-medium text-violet-500 rounded-global shadow active:text-red-500 border-violet border hover:text-violet-700 focus:outline-none focus:ring dark:text-white sm:w-auto"
                  href="/about"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        <div class="py-6">
          <div class="container mx-auto px-4">
            <div class="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 class="text-black text-3xl text-center font-bold dark:text-white sm:text-4xl">
                Enter your heading here
              </h1>
              <p class="text-center text-lg mt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
        </div>
        <section class="">
          <div class="grid grid-cols-1 gap-y-8 gap-x-16 max-w-screen-xl px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 2xl:max-w-7xl 2xl:mx-auto">
            <div class="max-w-lg px-4 mx-auto text-center lg:text-left lg:mx-0 lg:px-0">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </h2>
              <p class="mt-4 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                doloremque qui fugiat illum? Nam possimus vero id quibusdam
                repudiandae debitis exercitationem dolorem dolorum!&nbsp;
              </p>
              <a
                class="flex px-5 py-3 mt-8 font-medium rounded-global bg-violet-500 text-white items-center justify-between w-56 mx-auto lg:mx-0"
                href=""
              >
                Get started today
                <span class="order-last">
                  <div style="font-size:inherit;color:inherit;padding:2px">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
                    </svg>
                  </div>
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <a
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-global dark:bg-gray-900 dark:border-gray-900"
                href=""
              >
                <div class="inline-block rounded-global bg-slate-100 p-2 dark:bg-black">
                  <span class="text-violet-500 text-2xl">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M255.9 120.9l9.1-15.7c5.6-9.8 18.1-13.1 27.9-7.5 9.8 5.6 13.1 18.1 7.5 27.9l-87.5 151.5h63.3c20.5 0 32 24.1 23.1 40.8H113.8c-11.3 0-20.4-9.1-20.4-20.4 0-11.3 9.1-20.4 20.4-20.4h52l66.6-115.4-20.8-36.1c-5.6-9.8-2.3-22.2 7.5-27.9 9.8-5.6 22.2-2.3 27.9 7.5l8.9 15.7zm-78.7 218l-19.6 34c-5.6 9.8-18.1 13.1-27.9 7.5-9.8-5.6-13.1-18.1-7.5-27.9l14.6-25.2c16.4-5.1 29.8-1.2 40.4 11.6zm168.9-61.7h53.1c11.3 0 20.4 9.1 20.4 20.4 0 11.3-9.1 20.4-20.4 20.4h-29.5l19.9 34.5c5.6 9.8 2.3 22.2-7.5 27.9-9.8 5.6-22.2 2.3-27.9-7.5-33.5-58.1-58.7-101.6-75.4-130.6-17.1-29.5-4.9-59.1 7.2-69.1 13.4 23 33.4 57.7 60.1 104zM256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
                <h6 class="mt-2 font-medium text-gray-900 dark:text-gray-300">
                  Dropbox
                </h6>
                <p class="hidden mt-1 text-sm sm:block">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
              <a
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-global dark:bg-gray-900 dark:border-gray-900"
                href=""
              >
                <div class="inline-block rounded-global p-2 bg-slate-100 dark:bg-black">
                  <span class="text-violet-500 text-2xl">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 377.4l43 74.3A51.35 51.35 0 0 0 90.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.38 51.38 0 0 0 290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
                <h6 class="mt-2 font-medium text-gray-900 dark:text-gray-300">
                  Discourse
                </h6>
                <p class="hidden mt-1 text-sm sm:block">
                  Duis aute irure dolor in reprehen
                </p>
              </a>
              <a
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-global dark:bg-gray-900 dark:border-gray-900"
                href=""
              >
                <div class="inline-block rounded-global p-2 bg-slate-100 dark:bg-black">
                  <span class="text-violet-500 text-2xl">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
                <h6 class="mt-2 font-medium text-gray-900 dark:text-gray-300">
                  Github
                </h6>
                <p class="hidden mt-1 text-sm sm:block">
                  Excepteur sint occaecat cupidatat
                </p>
              </a>
              <a
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-global dark:bg-gray-900 dark:border-gray-900"
                href=""
              >
                <div class="inline-block rounded-global p-2 bg-slate-100 dark:bg-black">
                  <span class="text-violet-500 text-2xl">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
                <h6 class="mt-2 font-medium text-gray-900 dark:text-gray-300">
                  Accountant
                </h6>
                <p class="hidden mt-1 text-sm sm:block">
                  The passage is attributed to an&nbsp; typesetter
                </p>
              </a>
              <a
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-global dark:bg-gray-900 dark:border-gray-900"
                href=""
              >
                <div class="inline-block rounded-global p-2 bg-slate-100 dark:bg-black">
                  <span class="text-violet-500 text-2xl">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
                <h6 class="mt-2 font-medium text-gray-900 dark:text-gray-300">
                  Medium
                </h6>
                <p class="hidden mt-1 text-sm sm:block">
                  Ut enim ad minim veniam&nbsp;nostrud
                </p>
              </a>
              <a
                class="block p-4 bg-white border border-gray-100 shadow-sm rounded-global dark:bg-gray-900 dark:border-gray-900"
                href=""
              >
                <div class="inline-block rounded-global p-2 bg-slate-100 dark:bg-black">
                  <span class="text-violet-500 text-2xl">
                    <div style="font-size:inherit;color:inherit;padding:2px">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 448 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
                <h6 class="mt-2 font-medium text-gray-900 dark:text-gray-300">
                  Slack
                </h6>
                <p class="hidden mt-1 text-sm sm:block">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </a>
            </div>
          </div>
        </section>
        <div class="py-10">
          <div class="container mx-auto px-4">
            <div class="md:w-5/6 md:mx-auto md:max-w-2xl">
              <h1 class="text-black text-3xl text-center font-bold dark:text-white sm:text-4xl">
                Blog
              </h1>
              <p class="text-center text-lg mt-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
            <div class="">
              <div class="relative">
                <img
                  class="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                  alt="No alt"
                  src="https://images.unsplash.com/photo-1637404230552-5ac6d76cb3a0?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div class="absolute right-3 left-3 bottom-3">
                  <span class="bg-violet-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                    Trending
                  </span>
                  <div class="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-3"
                        alt="No alt"
                        src="https://picsum.photos/500/300"
                      />
                      <p class="uppercase text-sm">John Doe</p>
                    </div>
                    <h1 class="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                      The best free stock photos, royalty free images&nbsp;
                    </h1>
                    <a class="flex items-center gap-x-1.5" href="">
                      Read more
                      <span class="order-last">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="relative">
                <img
                  class="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                  alt="No alt"
                  src="https://images.unsplash.com/photo-1562774439-23ae4c68ad6d?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div class="absolute right-3 left-3 bottom-3">
                  <span class="bg-violet-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                    Trending
                  </span>
                  <div class="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-3"
                        alt="No alt"
                        src="https://picsum.photos/500/300"
                      />
                      <p class="uppercase text-sm">John Doe</p>
                    </div>
                    <h1 class="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                      The best free stock photos, royalty free images&nbsp;
                    </h1>
                    <a class="flex items-center gap-x-1.5" href="">
                      Read more
                      <span class="order-last">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="relative">
                <img
                  class="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                  alt="No alt"
                  src="https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div class="absolute right-3 left-3 bottom-3">
                  <span class="bg-violet-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                    Trending
                  </span>
                  <div class="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-3"
                        alt="No alt"
                        src="https://picsum.photos/500/300"
                      />
                      <p class="uppercase text-sm">John Doe</p>
                    </div>
                    <h1 class="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                      The best free stock photos, royalty free images&nbsp;
                    </h1>
                    <a class="flex items-center gap-x-1.5" href="">
                      Read more
                      <span class="order-last">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="relative">
                <img
                  class="w-full rounded-global h-[500px] bg-gray-100 pt-5 xl:object-top xl:object-contain"
                  alt="No alt"
                  src="https://images.unsplash.com/photo-1602335422296-6c6346ee71f8?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                />
                <div class="absolute right-3 left-3 bottom-3">
                  <span class="bg-violet-500 text-white tracking-wide text-sm uppercase px-2 py-1 rounded-md">
                    Trending
                  </span>
                  <div class="left-3 bottom-3 right-3 bg-white p-4 mt-3 rounded-global dark:bg-black">
                    <div class="flex items-center">
                      <img
                        class="w-10 h-10 rounded-full mr-3"
                        alt="No alt"
                        src="https://picsum.photos/500/300"
                      />
                      <p class="uppercase text-sm">John Doe</p>
                    </div>
                    <h1 class="text-xl font-semibold text-black mb-4 mt-2 dark:text-white 2xl:text-2xl">
                      The best free stock photos, royalty free images&nbsp;
                    </h1>
                    <a class="flex items-center gap-x-1.5" href="">
                      Read more
                      <span class="order-last">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 256 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path>
                          </svg>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-lg px-4 md:px-8 mx-auto">
            <div class="mb-10 md:mb-16">
              <h2 class="text-gray-800 font-bold text-center mb-4 text-2xl md:mb-6 lg:text-3xl">
                Choose a Bundle
              </h2>
              <p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated.
              </p>
            </div>
            <div class="flex flex-wrap justify-center items-center gap-4 sm:gap-0">
              <div class="w-full bg-gray-800 p-6 rounded-global sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3">
                <div class="mb-4">
                  <h3 class="text-gray-100 text-2xl sm:text-3xl font-semibold">
                    Basic Bundle
                  </h3>
                  <p class="text-gray-300">Ebook</p>
                </div>
                <div class="space-x-2 mb-4">
                  <span class="text-gray-100 text-4xl font-bold">$29</span>
                  <span class="text-gray-300 text-2xl line-through">$49</span>
                </div>
                <ul class="text-gray-300 space-y-2 mb-6">
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Ebook</span>
                  </li>
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Multiple examples</span>
                  </li>
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Basic support</span>
                  </li>
                </ul>
                <a
                  class="block bg-gray-500 hover:bg-gray-600 focus-visible:ring ring-indigo-300 text-gray-100 active:text-gray-300 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global md:text-base"
                  href=""
                >
                  Get the Basic Bundle
                </a>
              </div>
              <div class="w-full bg-gradient-to-tr shadow-xl p-6 to-violet-500 from-violet-300 rounded-global sm:w-1/2 sm:p-8">
                <div class="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
                  <div class="">
                    <h3 class="text-white text-2xl sm:text-3xl font-semibold">
                      Pro Bundle
                    </h3>
                    <p class="text-indigo-100">Ebook + Video course</p>
                  </div>
                  <span class="inline-block order-first lg:order-none bg-indigo-200 bg-opacity-50 text-white text-xs font-semibold tracking-wider uppercase rounded-full px-3 py-1">
                    Best value
                  </span>
                </div>
                <div class="space-x-2 mb-4">
                  <span class="text-white text-4xl font-bold">$49</span>
                  <span class="text-indigo-100 text-2xl line-through">$89</span>
                </div>
                <ul class="text-indigo-100 space-y-2 mb-6">
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Ebook</span>
                  </li>
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Video course</span>
                  </li>
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Multiple examples</span>
                  </li>
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Work sheets</span>
                  </li>
                  <li class="flex items-center gap-1.5">
                    <span class="w-5 h-5 shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <span class="">Premium support</span>
                  </li>
                </ul>
                <a
                  class="block hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 text-sm font-semibold text-center outline-none transition duration-100 px-8 py-3 rounded-global bg-white text-violet md:text-base"
                  href=""
                >
                  Get the Pro Bundle
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-12">
          <div class="flex flex-col lg:items-center lg:flex-row xl:max-w-6xl xl:mx-auto">
            <div class="flex items-center mb-6 lg:w-1/2 lg:mb-0">
              <div class="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-blue-100 dark:bg-violet-500 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
                <span class="text-violet-500 dark:text-white">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    class="w-10 h-10 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M260.353,254.878,131.538,33.1a2.208,2.208,0,0,0-3.829.009L.3,254.887A2.234,2.234,0,0,0,.3,257.122L129.116,478.9a2.208,2.208,0,0,0,3.83-.009L260.358,257.113A2.239,2.239,0,0,0,260.353,254.878Zm39.078-25.713a2.19,2.19,0,0,0,1.9,1.111h66.509a2.226,2.226,0,0,0,1.9-3.341L259.115,33.111a2.187,2.187,0,0,0-1.9-1.111H190.707a2.226,2.226,0,0,0-1.9,3.341ZM511.7,254.886,384.9,33.112A2.2,2.2,0,0,0,382.99,32h-66.6a2.226,2.226,0,0,0-1.906,3.34L440.652,256,314.481,476.66a2.226,2.226,0,0,0,1.906,3.34h66.6a2.2,2.2,0,0,0,1.906-1.112L511.7,257.114A2.243,2.243,0,0,0,511.7,254.886ZM366.016,284.917H299.508a2.187,2.187,0,0,0-1.9,1.111l-108.8,190.631a2.226,2.226,0,0,0,1.9,3.341h66.509a2.187,2.187,0,0,0,1.9-1.111l108.8-190.631A2.226,2.226,0,0,0,366.016,284.917Z"></path>
                  </svg>
                </span>
              </div>
              <div class="">
                <p class="md:mb-1 md:text-lg">Global Count</p>
                <h3 class="text-4xl font-extrabold text-slate-900 dark:text-slate-100 sm:text-5xl">
                  103,12,435
                </h3>
              </div>
            </div>
            <div class="lg:w-1/2">
              <p class="">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque rem aperiam, eaque ipsa quae. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <section class="text-gray-600 body-font -900 bg-violet-500 md:block">
          <div class="text-center py-10 px-4 bg-violet-500 md:w-10/12 md:mx-auto lg:w-2/3">
            <h1 class="flex-grow text-2xl font-medium title-font text-center text-white">
              Slow-carb next level shoindxgoitch ethical authentic, scenester
              sriracha forage.
            </h1>
            <div class="mt-5 xl:text-center xl:mt-6">
              <a
                class="bg-white inline-block px-6 py-3 rounded-global xl:p-3 xl:text-lg xl:font-medium xl:text-current"
                href=""
              >
                Try Chai Builder
              </a>
            </div>
          </div>
        </section>
        <footer class="">
          <div class="py-6 bg-violet-500">
            <div class="px-4 mx-auto max-w-7xl md:px-8">
              <div class="flex flex-col md:flex-row justify-between items-center gap-2">
                <div class="text-center md:text-left mb-3 md:mb-0">
                  <span class="text-gray-100 font-bold uppercase tracking-widest">
                    Newsletter
                  </span>
                  <p class="text-indigo-200">Subscribe to our newsletter</p>
                </div>
                <form class="w-full md:max-w-md flex gap-2">
                  <input class="w-full flex-1 text-white border border-white focus:ring rounded outline-none transition duration-100 px-3 py-2 bg-violet-400 ring-violet-300" />
                  <button
                    id="cttrjC"
                    class="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 active:text-indigo-600 text-sm font-semibold text-center rounded outline-none transition duration-100 px-8 py-2 text-violet md:text-base"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="pt-12 lg:pt-16">
            <div class="px-4 mx-auto max-w-7xl md:px-8">
              <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">
                <div class="col-span-full lg:col-span-2">
                  <div class="lg:-mt-2 mb-4">
                    <a
                      class="inline-flex items-center text-black-800 text-xl md:text-2xl font-bold gap-2"
                      href=""
                    >
                      <span class="w-5 h-auto text-indigo-500">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M179.2 230.4l102.4 102.4-102.4 102.4L0 256 179.2 76.8l44.8 44.8-25.6 25.6-19.2-19.2-128 128 128 128 51.5-51.5-77.1-76.5 25.6-25.6zM332.8 76.8L230.4 179.2l102.4 102.4 25.6-25.6-77.1-76.5 51.5-51.5 128 128-128 128-19.2-19.2-25.6 25.6 44.8 44.8L512 256 332.8 76.8z"></path>
                          </svg>
                        </div>
                      </span>
                      <span class=""> Chai Builder</span>
                    </a>
                  </div>
                  <p class="text-gray-500 sm:pr-8 mb-6">
                    Filler text is dummy text which has no meaning however looks
                    very similar to real text
                  </p>
                  <div class="flex gap-4">
                    <a
                      class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      href=""
                    >
                      <span class="w-5 h-5">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 496 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm-70.7 372c-68.8 0-124-55.5-124-124s55.2-124 124-124c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1s34.2 78.1 77.2 78.1c32.6 0 64.9-19.1 70.1-53.3h-70.1v-42.6h116.9c1.3 6.8 1.9 13.6 1.9 20.7 0 70.8-47.5 121.2-118.8 121.2zm230.2-106.2v35.5H372v-35.5h-35.5v-35.5H372v-35.5h35.5v35.5h35.2v35.5h-35.2z"></path>
                          </svg>
                        </div>
                      </span>
                    </a>
                    <a
                      class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      href=""
                    >
                      <span class="w-5 h-5">
                        <svg
                          class="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      href=""
                    >
                      <span class="w-5 h-5">
                        <svg
                          class="w-5 h-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      class="text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100"
                      href=""
                    >
                      <span class="w-5 h-5">
                        <div style="font-size:inherit;color:inherit;padding:2px">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 448 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
                          </svg>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div class="">
                  <div class="text-gray-800 font-bold tracking-widest uppercase mb-4">
                    Products
                  </div>
                  <nav class="flex flex-col gap-4">
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Overview
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Solutions
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Pricing
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Customers
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="">
                  <div class="text-gray-800 font-bold tracking-widest uppercase mb-4">
                    Company
                  </div>
                  <nav class="flex flex-col gap-4">
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        About
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Investor Relations
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Jobs
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Press
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Blog
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="">
                  <div class="text-gray-800 font-bold tracking-widest uppercase mb-4">
                    Support
                  </div>
                  <nav class="flex flex-col gap-4">
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Contact
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Documentation
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Chat
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        FAQ
                      </a>
                    </div>
                  </nav>
                </div>
                <div class="">
                  <div class="text-gray-800 font-bold tracking-widest uppercase mb-4">
                    Legal
                  </div>
                  <nav class="flex flex-col gap-4">
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Terms of Service
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div class="">
                      <a
                        class="text-gray-500 hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                        href=""
                      >
                        Cookie settings
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="text-gray-400 text-sm text-center border-t py-8">
                © 2021 - Present Chai Builder. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
        T
      </div>
    </div>
  );
}
