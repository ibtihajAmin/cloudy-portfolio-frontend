export default function About() {
  return (
    <div name="about" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h3 className="text-5xl font-bold">
            Trusted by Software Engineers Around The World
          </h3>
          <p className="text-3xl py-6 text-gray-500">
            You can’t optimize what you can’t see. Discover unused workloads,
            get recommendations on how best to improve, auto power on/off
            resources, and set quotas to ensure cost compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-indigo-600 font-bold">100 %</p>
            <p className="text-gray-600 mt-2">Completion</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-indigo-600 font-bold">24/7</p>
            <p className="text-gray-600 mt-2">Delivery</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-6xl text-indigo-600 font-bold">150K</p>
            <p className="text-gray-600 mt-2">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
}
