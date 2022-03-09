export default function Avatar() {
  return (
    <div className="max-w-4xl mx-auto ">
      <div className="flex flex-wrap p-3 mx-auto">
        <div>
          <div
            variants={fadeInUp}
            key="modal-morestories-3"
            className="flex flex-wrap "
          >
            <div className="flex flex-wrap sm:flex-nowrap">
              <div
                key="modal-morestories-4"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="hidden my-auto place-content-end md:block "
              ></div>
              <div className="flex flex-col items-start justify-center pl-2 sm:pl-10 ">
                <span className="inline-flex px-4 py-1 mb-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                  Author
                </span>
                <h2 className="text-base font-bold leading-tight tracking-tighter">
                  Abdukhamid Latipov
                </h2>
                <h3 className="pt-2 text-sm text-gray-400">
                  Explorer of artistic universes and entrepreneurs, specializing
                  in front-end. I create web applications and websites of any
                  type which meeting the need of today.
                </h3>
              </div>
              <div className="my-auto "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
