function Jobs() {
  return (
    <div className="font-mono bg-gradient-to-r from-blue-400 to-teal-400 shadow-lg mb-10">
      <h1 className="text-center sm:text-7xl text-5xl pt-4">Starfsreynsla</h1>
      <div className="grid grid-cols-1 gap-10 xl:grid-cols-2 p-10">
        <div className="p-7 bg-gradient-to-r from-blue-500 to-teal-500 shadow-md rounded transition ease-in-out delay-100 hover:scale-105">
          <h1 className="text-xl">Veðurstofan</h1>
          <p className="">Gerð Jöklavefsjáar</p>
        </div>
        <div className="p-7 bg-gradient-to-r from-blue-500 to-teal-500 shadow-md rounded transition ease-in-out delay-100 hover:scale-105">
          <h1 className="text-xl">Veðurstofa Íslands</h1>
          <p className="text-sm">Sumarvinna</p>
          <p className="">Gerð hugbúnaðar sem auðveldar uppsetningu á vefmyndavélum. Notað
                var Python með Flask frameworkinu og Javascript til að búa til Shell
                scriptur og möppur sem þurfti.<br/>

                Einnig gervigreindar verkefni sem snérist um að greina ský út frá
                myndum vefmyndavéla veðurstofunnar. Þjálfunargögn voru gerð með
                notkun maska á myndum og var notast við U-net til að þjálfa gögnin.</p>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
