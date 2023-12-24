/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Feature() {
  return (
    <div className="bg-emerald-800 text-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center"></div>

          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                <img
                  src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/23504/coffee-with-croissant-clipart-xl.png"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg"></div>
              <ul className="text-center text-2xl font-serif">
                <li className="pb-8 font-semibold">Working hours:</li>
                <li>Monday: 8:00 AM - 5:00 PM</li>
                <li>Tuesday: 8:00 AM - 5:00 PM</li>
                <li>Wednesday: 8:00 AM - 5:00 PM</li>
                <li>Thursday: 8:00 AM - 5:00 PM</li>
                <li>Friday: 8:00 AM - 5:00 PM</li>
                <li>Saturday: 9:00 AM - 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className="h-20 w-full bg-black"></div>
    </div>
  );
}
