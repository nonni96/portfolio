import language from '../lang';

function Projects(icelandic) {
    return (
      <div className="font-mono bg-gradient-to-r from-blue-400 to-teal-400 shadow-lg mb-10">
        <h1 className="text-center sm:text-7xl text-5xl pt-4">{icelandic.icelandic ? language.projects.is.title : language.projects.en.title}</h1>
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 p-20">
          <div className="p-7 bg-gradient-to-r from-blue-500 to-teal-500 shadow-md rounded transition ease-in-out delay-100 hover:scale-105">
          <h1 className="text-xl">{icelandic.icelandic ? language.projects.is.joklavefsja.title : language.projects.en.joklavefsja.title}</h1>
          <p className="">{icelandic.icelandic ? language.projects.is.joklavefsja.text : language.projects.en.joklavefsja.text}</p>
          </div>
          <div className="p-7 bg-gradient-to-r from-blue-500 to-teal-500 shadow-md rounded transition ease-in-out delay-100 hover:scale-105">
            <a href="https://topguard.is" target='_blank'>
            <h1 className="text-xl">{icelandic.icelandic ? language.projects.is.topguard.title : language.projects.en.topguard.title}</h1>
          <p className="">{icelandic.icelandic ? language.projects.is.topguard.text : language.projects.en.topguard.text}</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;