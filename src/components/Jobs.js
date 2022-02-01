import language from '../lang';

function Jobs(icelandic) {
  console.log(language.jobs);
  return (
    <div className="font-mono bg-gradient-to-r from-blue-400 to-teal-400 shadow-lg mb-10">
      <h1 className="text-center sm:text-7xl text-5xl pt-4">{icelandic.icelandic ? language.jobs.is.title : language.jobs.en.title}</h1>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 p-10">
        <div className="p-7 bg-gradient-to-r from-blue-500 to-teal-500 shadow-md rounded transition ease-in-out delay-100 hover:scale-105">
          <h1 className="text-xl">{icelandic.icelandic ? language.jobs.is.imo.title : language.jobs.en.imo.title}</h1>
          <p className="text-sm">{icelandic.icelandic ? language.jobs.is.imo.time : language.jobs.en.imo.time}</p>
          <p className="">{icelandic.icelandic ? language.jobs.is.imo.text : language.jobs.en.imo.text}</p>
        </div>
        <div className="p-7 bg-gradient-to-r from-blue-500 to-teal-500 shadow-md rounded transition ease-in-out delay-100 hover:scale-105">
          <h1 className="text-xl">{icelandic.icelandic ? language.jobs.is.imosummer.title : language.jobs.en.imosummer.title}</h1>
          <p className="text-sm">{icelandic.icelandic ? language.jobs.is.imo.time : language.jobs.en.imo.time}</p>
          <p className="">{icelandic.icelandic ? language.jobs.is.imosummer.text : language.jobs.en.imosummer.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
