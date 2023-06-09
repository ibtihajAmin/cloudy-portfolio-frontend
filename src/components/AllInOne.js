import { CheckIcon } from "@heroicons/react/outline";

export default function AllInOne() {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Beyond standard infrastructure-as-a-service functionality, additional
          components provide orchestration, fault management and service
          management amongst other services to ensure high availability of user
          applications.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                CLOUDY services are comprised of different composable projects
                that deliver programmable infrastructure. You can combine the
                services in different ways based on your use case.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                CLOUDY services are comprised of different composable projects
                that deliver programmable infrastructure. You can combine the
                services in different ways based on your use case.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                CLOUDY services are comprised of different composable projects
                that deliver programmable infrastructure. You can combine the
                services in different ways based on your use case.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Notifications</h3>
              <p className="text-lg pt-2 pb-4">
                CLOUDY services are comprised of different composable projects
                that deliver programmable infrastructure. You can combine the
                services in different ways based on use case.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
