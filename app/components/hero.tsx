export default function Hero() {
  return (
    <div className="relative bg-black text-white">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16"></div>
            <h1 className="mt-24 text-4xl  racking-tight text-white sm:mt-10 sm:text-6xl">
              Cafe Doppio
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-100">
              Sip. Savor. Repeat. Treat yourself to the perfect blend of coffee
              and croissants. Your daily dose of joy starts here.
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <img
            className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src="https://lh3.googleusercontent.com/p/AF1QipOWdIHVbmQqafU_DKMypTp_DAd8yzcbaTNrCr9S=s1360-w1360-h1020"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
