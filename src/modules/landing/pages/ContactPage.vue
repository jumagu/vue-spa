<template>
  <section class="w-full h-full text-gray-600 relative">
    <div class="absolute inset-0 bg-gray-300">
      <iframe
        title="map"
        width="100%"
        height="100%"
        style="border: 0"
        loading="lazy"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d22952.03029183502!2d-0.09119762983622244!3d51.50905059332119!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sco!4v1727587546480!5m2!1sen!2sco"
      ></iframe>
    </div>
    <div class="container px-5 py-24 mx-auto flex">
      <div
        class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
      >
        <h2 class="text-gray-900 text-2xl mb-1 font-semibold">Talk to our Sales team.</h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Discuss your requirements, learn about custom pricing, or request a demonstration.
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
          <textarea
            id="message"
            name="message"
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Button
        </button>
        <p class="text-xs text-gray-500 mt-3">
          By submitting this, I confirm that I have read and understood the
          <RouterLink to="" class="text-black font-semibold">Privacy Policy</RouterLink>.
        </p>
      </div>
    </div>
  </section>
</template>
