const lang = {
    jobs: {
        'en': {
            title: 'Work',
            'imo': {
                title: 'Icelandic Meteorological Office - Full Stack Developer',
                time: '09/21 - 05/22',
                text: 'Making of the glacier web portal, islenskirjoklar.is. The project was used partly in my master’s thesis.'
            },
            'imosummer': {
                title: 'Icelandic Meteorological Office',
                time: 'Summer job',
                text: 'Making of a software to simplify the setup of webcams. Python was used with the Flask framework and Javascript was used for the frontend. The software returned Shell scripts and files that made the setup of webcams easier. The second project was a machine learning project that looked to distinguish clouds from images of webcams. The dataset was made with masking images and U-net was used to train the data.'
            }
        },
        'is': {
            title: 'Starfsreynsla',
            'imo': {
                title: 'Veðurstofa Íslands - Full Stack Developer',
                time: '09/21 - 05/22',
                text: 'Gerð jöklavefsjáar, islenskirjoklar.is. Verkefnið var notað að hluta til í mastersritgerð.'
            },
            'imosummer': {
                title: 'Veðurstofa Íslands',
                time: 'Sumarstarf',
                text: 'Gerð hugbúnaðar sem auðveldar uppsetningu á vefmyndavélum. Notað var Python með Flask frameworkinu og Javascript í framenda til að búa til Shell scriptur og möppur sem þurfti til uppsetningar. Einnig gervigreindar verkefni sem snérist um að greina ský út frá myndum vefmyndavéla veðurstofunnar. Þjálfunargögn voru gerð með notkun maska á myndum og var notast við U-net til að þjálfa gögnin.'
            }
        }
    },
    projects: {
        'en': {
            title: 'Projects',
            'joklavefsja': {
                title: 'islenskirjoklar.is',
                text: 'Javascript was used for the frontend and the Leaflet library for the map. The backend API made with python where data was fetched from a PostgreSQL database. Layers and markers on the map were fetched from a GeoServer that returned WFS and WMS data.'
            },
            'topguard': {
                title: 'topguard.is',
                text: 'Website made for Topguard. The website was made with HTML and CSS, appearance of the website made after the owners direction.'
            }
        },
        'is': {
            title: 'Verkefni',
            'joklavefsja': {
                title: 'islenskirjoklar.is',
                text: 'Notast var við Javascript í framenda með Leaflet fyrir kortasjá. Bakenda API var gerður með python þar sem gögn voru sótt úr PostgreSQL gagnagrunni. Gögn á korti voru sótt af GeoServer sem skilaði WFS og WMS gögnum.'
            },
            'topguard': {
                title: 'topguard.is',
                text: 'Vefsíðugerð fyrir Topguard. Vefsíðan gerð með HTML og CSS, útlitið á síðunni eftir fyrirmælum eiganda'
            }
        }
    }
}

export default lang;