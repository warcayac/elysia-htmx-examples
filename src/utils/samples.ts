import { TMake, TMakeMap, TUser, TUser2 } from "./types";


export function getSampleUsers() {
  return sampleUsers.map((user) => ({...user}));
}

export function getLongSampleUsers() {
  return longSampleUsers.map((user) => ({...user}));
}

export function getMakes(): TMakeMap {
  return Object
    .keys(makes)
    .reduce(
      (acc, key) => {
        acc[key] = { ...makes[key]! };
        return acc;
      }, 
      {} as TMakeMap
    )
  ;
}


const sampleUsers: readonly TUser[] = [
  { id: 1, name: 'Joe Smith', email: 'joe@smith.org', active: true },
  { id: 2, name: 'Angie MacDowell', email: 'angie@macdowell.org', active: true },
  { id: 3, name: 'Fuqua Tarkenton', email: 'fuqua@tarkenton.org', active: true },
  { id: 4, name: 'Kim Yee', email: 'kim@yee.org', active: false },
];

const longSampleUsers: readonly TUser2[] = [{
  "id": 1,
  "first_name": "Bronson",
  "last_name": "Chew",
  "email": "bchew0@cdbaby.com"
}, {
  "id": 2,
  "first_name": "Ariela",
  "last_name": "Martschik",
  "email": "amartschik1@examiner.com"
}, {
  "id": 3,
  "first_name": "Gawen",
  "last_name": "Sapena",
  "email": "gsapena2@icio.us"
}, {
  "id": 4,
  "first_name": "Bobby",
  "last_name": "Lathleiff",
  "email": "blathleiff3@unesco.org"
}, {
  "id": 5,
  "first_name": "Marne",
  "last_name": "Deer",
  "email": "mdeer4@1und1.de"
}, {
  "id": 6,
  "first_name": "Emmy",
  "last_name": "Moff",
  "email": "emoff5@spiegel.de"
}, {
  "id": 7,
  "first_name": "Zeke",
  "last_name": "Goodburn",
  "email": "zgoodburn6@list-manage.com"
}, {
  "id": 8,
  "first_name": "Karlotte",
  "last_name": "Papis",
  "email": "kpapis7@sbwire.com"
}, {
  "id": 9,
  "first_name": "Bayard",
  "last_name": "Rubens",
  "email": "brubens8@webmd.com"
}, {
  "id": 10,
  "first_name": "Lennard",
  "last_name": "Bradden",
  "email": "lbradden9@gizmodo.com"
}, {
  "id": 11,
  "first_name": "Frasquito",
  "last_name": "Downton",
  "email": "fdowntona@wufoo.com"
}, {
  "id": 12,
  "first_name": "Jeri",
  "last_name": "Kennler",
  "email": "jkennlerb@jugem.jp"
}, {
  "id": 13,
  "first_name": "Jemmie",
  "last_name": "Ickowicz",
  "email": "jickowiczc@fc2.com"
}, {
  "id": 14,
  "first_name": "Garrett",
  "last_name": "McGowing",
  "email": "gmcgowingd@flickr.com"
}, {
  "id": 15,
  "first_name": "Marlene",
  "last_name": "Ortmann",
  "email": "mortmanne@photobucket.com"
}, {
  "id": 16,
  "first_name": "Carolynn",
  "last_name": "Wanklyn",
  "email": "cwanklynf@parallels.com"
}, {
  "id": 17,
  "first_name": "Terrance",
  "last_name": "Bryceson",
  "email": "tbrycesong@google.pl"
}, {
  "id": 18,
  "first_name": "Wald",
  "last_name": "Elfes",
  "email": "welfesh@yahoo.com"
}, {
  "id": 19,
  "first_name": "Franchot",
  "last_name": "O'Hartagan",
  "email": "fohartagani@mayoclinic.com"
}, {
  "id": 20,
  "first_name": "Elene",
  "last_name": "Sibthorp",
  "email": "esibthorpj@ebay.co.uk"
}, {
  "id": 21,
  "first_name": "Lydia",
  "last_name": "Wragg",
  "email": "lwraggk@slideshare.net"
}, {
  "id": 22,
  "first_name": "Archibald",
  "last_name": "Sinderland",
  "email": "asinderlandl@github.com"
}, {
  "id": 23,
  "first_name": "Rici",
  "last_name": "Tingle",
  "email": "rtinglem@typepad.com"
}, {
  "id": 24,
  "first_name": "Emmalynne",
  "last_name": "Tuma",
  "email": "etuman@mapquest.com"
}, {
  "id": 25,
  "first_name": "Haywood",
  "last_name": "Crigin",
  "email": "hcrigino@printfriendly.com"
}, {
  "id": 26,
  "first_name": "Harmonia",
  "last_name": "Shepland",
  "email": "hsheplandp@google.ca"
}, {
  "id": 27,
  "first_name": "Tiebout",
  "last_name": "Kob",
  "email": "tkobq@amazon.de"
}, {
  "id": 28,
  "first_name": "Emmi",
  "last_name": "Walster",
  "email": "ewalsterr@tinyurl.com"
}, {
  "id": 29,
  "first_name": "Bernita",
  "last_name": "Leeb",
  "email": "bleebs@dailymotion.com"
}, {
  "id": 30,
  "first_name": "Gordie",
  "last_name": "Hurd",
  "email": "ghurdt@shop-pro.jp"
}, {
  "id": 31,
  "first_name": "Erie",
  "last_name": "Ciotto",
  "email": "eciottou@com.com"
}, {
  "id": 32,
  "first_name": "Andras",
  "last_name": "Fielders",
  "email": "afieldersv@constantcontact.com"
}, {
  "id": 33,
  "first_name": "Lanae",
  "last_name": "Bromhead",
  "email": "lbromheadw@indiatimes.com"
}, {
  "id": 34,
  "first_name": "Bronny",
  "last_name": "Greenstock",
  "email": "bgreenstockx@rediff.com"
}, {
  "id": 35,
  "first_name": "Cyndi",
  "last_name": "Hegg",
  "email": "cheggy@vimeo.com"
}, {
  "id": 36,
  "first_name": "Myrtice",
  "last_name": "Smeeth",
  "email": "msmeethz@cnn.com"
}, {
  "id": 37,
  "first_name": "Vivien",
  "last_name": "Lebel",
  "email": "vlebel10@house.gov"
}, {
  "id": 38,
  "first_name": "My",
  "last_name": "Briskey",
  "email": "mbriskey11@vimeo.com"
}, {
  "id": 39,
  "first_name": "Mickey",
  "last_name": "Harrisson",
  "email": "mharrisson12@economist.com"
}, {
  "id": 40,
  "first_name": "Amandi",
  "last_name": "Gault",
  "email": "agault13@facebook.com"
}, {
  "id": 41,
  "first_name": "Lynnette",
  "last_name": "Beales",
  "email": "lbeales14@networksolutions.com"
}, {
  "id": 42,
  "first_name": "Garvey",
  "last_name": "Crannell",
  "email": "gcrannell15@princeton.edu"
}, {
  "id": 43,
  "first_name": "Ruth",
  "last_name": "Hammell",
  "email": "rhammell16@mayoclinic.com"
}, {
  "id": 44,
  "first_name": "Meredith",
  "last_name": "Pellatt",
  "email": "mpellatt17@technorati.com"
}, {
  "id": 45,
  "first_name": "Remus",
  "last_name": "Hackett",
  "email": "rhackett18@wp.com"
}, {
  "id": 46,
  "first_name": "Rudolfo",
  "last_name": "Pritty",
  "email": "rpritty19@samsung.com"
}, {
  "id": 47,
  "first_name": "Wynny",
  "last_name": "Fitchen",
  "email": "wfitchen1a@usatoday.com"
}, {
  "id": 48,
  "first_name": "Quentin",
  "last_name": "Kerford",
  "email": "qkerford1b@fastcompany.com"
}, {
  "id": 49,
  "first_name": "Ruthie",
  "last_name": "Speed",
  "email": "rspeed1c@washington.edu"
}, {
  "id": 50,
  "first_name": "Codie",
  "last_name": "Linster",
  "email": "clinster1d@wsj.com"
}, {
  "id": 51,
  "first_name": "Darcey",
  "last_name": "Battman",
  "email": "dbattman1e@timesonline.co.uk"
}, {
  "id": 52,
  "first_name": "Donovan",
  "last_name": "Odd",
  "email": "dodd1f@a8.net"
}, {
  "id": 53,
  "first_name": "Benito",
  "last_name": "Chason",
  "email": "bchason1g@rediff.com"
}, {
  "id": 54,
  "first_name": "Wilmar",
  "last_name": "Munday",
  "email": "wmunday1h@weibo.com"
}, {
  "id": 55,
  "first_name": "Lanny",
  "last_name": "Tedridge",
  "email": "ltedridge1i@fotki.com"
}, {
  "id": 56,
  "first_name": "Rafaellle",
  "last_name": "Merchant",
  "email": "rmerchant1j@virginia.edu"
}, {
  "id": 57,
  "first_name": "Christine",
  "last_name": "Van der Beken",
  "email": "cvanderbeken1k@opensource.org"
}, {
  "id": 58,
  "first_name": "Brianne",
  "last_name": "Lednor",
  "email": "blednor1l@washingtonpost.com"
}, {
  "id": 59,
  "first_name": "Lukas",
  "last_name": "Siman",
  "email": "lsiman1m@bbc.co.uk"
}, {
  "id": 60,
  "first_name": "Bryna",
  "last_name": "Buttwell",
  "email": "bbuttwell1n@mozilla.org"
}, {
  "id": 61,
  "first_name": "Gianina",
  "last_name": "Lambie",
  "email": "glambie1o@yellowbook.com"
}, {
  "id": 62,
  "first_name": "Gwendolyn",
  "last_name": "Kasting",
  "email": "gkasting1p@archive.org"
}, {
  "id": 63,
  "first_name": "Cristiano",
  "last_name": "Lafflin",
  "email": "clafflin1q@cam.ac.uk"
}, {
  "id": 64,
  "first_name": "Cherilynn",
  "last_name": "Backes",
  "email": "cbackes1r@bloglovin.com"
}, {
  "id": 65,
  "first_name": "Kristien",
  "last_name": "Paulsen",
  "email": "kpaulsen1s@wufoo.com"
}, {
  "id": 66,
  "first_name": "Dolly",
  "last_name": "Benasik",
  "email": "dbenasik1t@cdc.gov"
}, {
  "id": 67,
  "first_name": "Anselm",
  "last_name": "Beecraft",
  "email": "abeecraft1u@shop-pro.jp"
}, {
  "id": 68,
  "first_name": "Hilary",
  "last_name": "Dobbson",
  "email": "hdobbson1v@java.com"
}, {
  "id": 69,
  "first_name": "Ginger",
  "last_name": "Barcke",
  "email": "gbarcke1w@indiatimes.com"
}, {
  "id": 70,
  "first_name": "Tricia",
  "last_name": "Whiteman",
  "email": "twhiteman1x@yahoo.com"
}, {
  "id": 71,
  "first_name": "Arch",
  "last_name": "Beavan",
  "email": "abeavan1y@census.gov"
}, {
  "id": 72,
  "first_name": "Kathleen",
  "last_name": "Plumtree",
  "email": "kplumtree1z@booking.com"
}, {
  "id": 73,
  "first_name": "Annie",
  "last_name": "Longstaffe",
  "email": "alongstaffe20@utexas.edu"
}, {
  "id": 74,
  "first_name": "Arch",
  "last_name": "Charlo",
  "email": "acharlo21@dell.com"
}, {
  "id": 75,
  "first_name": "Robyn",
  "last_name": "Birrell",
  "email": "rbirrell22@alexa.com"
}, {
  "id": 76,
  "first_name": "Darnall",
  "last_name": "Pullen",
  "email": "dpullen23@live.com"
}, {
  "id": 77,
  "first_name": "Tait",
  "last_name": "Kolakowski",
  "email": "tkolakowski24@usda.gov"
}, {
  "id": 78,
  "first_name": "Cammy",
  "last_name": "Janowicz",
  "email": "cjanowicz25@ustream.tv"
}, {
  "id": 79,
  "first_name": "Cosetta",
  "last_name": "Baudacci",
  "email": "cbaudacci26@ezinearticles.com"
}, {
  "id": 80,
  "first_name": "Verna",
  "last_name": "Plaster",
  "email": "vplaster27@dyndns.org"
}, {
  "id": 81,
  "first_name": "Allie",
  "last_name": "Willoughey",
  "email": "awilloughey28@merriam-webster.com"
}, {
  "id": 82,
  "first_name": "Danella",
  "last_name": "Ledger",
  "email": "dledger29@vimeo.com"
}, {
  "id": 83,
  "first_name": "Ransom",
  "last_name": "Pilgram",
  "email": "rpilgram2a@oracle.com"
}, {
  "id": 84,
  "first_name": "Lorilee",
  "last_name": "Boner",
  "email": "lboner2b@marriott.com"
}, {
  "id": 85,
  "first_name": "Emilia",
  "last_name": "Fortesquieu",
  "email": "efortesquieu2c@cnn.com"
}, {
  "id": 86,
  "first_name": "Lucine",
  "last_name": "Peiro",
  "email": "lpeiro2d@bizjournals.com"
}, {
  "id": 87,
  "first_name": "Kakalina",
  "last_name": "Cuffin",
  "email": "kcuffin2e@msn.com"
}, {
  "id": 88,
  "first_name": "Joelly",
  "last_name": "Edmands",
  "email": "jedmands2f@cafepress.com"
}, {
  "id": 89,
  "first_name": "Morganica",
  "last_name": "McAlroy",
  "email": "mmcalroy2g@delicious.com"
}, {
  "id": 90,
  "first_name": "Richard",
  "last_name": "Astling",
  "email": "rastling2h@netvibes.com"
}, {
  "id": 91,
  "first_name": "Lauretta",
  "last_name": "Alty",
  "email": "lalty2i@shutterfly.com"
}, {
  "id": 92,
  "first_name": "Peta",
  "last_name": "VanBrugh",
  "email": "pvanbrugh2j@nsw.gov.au"
}, {
  "id": 93,
  "first_name": "Adolphus",
  "last_name": "Brimelow",
  "email": "abrimelow2k@homestead.com"
}, {
  "id": 94,
  "first_name": "Gwennie",
  "last_name": "Brandts",
  "email": "gbrandts2l@twitpic.com"
}, {
  "id": 95,
  "first_name": "Janeta",
  "last_name": "Insole",
  "email": "jinsole2m@hud.gov"
}, {
  "id": 96,
  "first_name": "Cleo",
  "last_name": "Janda",
  "email": "cjanda2n@plala.or.jp"
}, {
  "id": 97,
  "first_name": "Catie",
  "last_name": "Theakston",
  "email": "ctheakston2o@tripadvisor.com"
}, {
  "id": 98,
  "first_name": "Pia",
  "last_name": "Lashbrook",
  "email": "plashbrook2p@newsvine.com"
}, {
  "id": 99,
  "first_name": "Cyrillus",
  "last_name": "Davis",
  "email": "cdavis2q@aol.com"
}, {
  "id": 100,
  "first_name": "Rebecca",
  "last_name": "Klimentyonok",
  "email": "rklimentyonok2r@storify.com"
}];

const makes : TMakeMap = {
  audi: {
    name: 'Audi',
    models: ['A1', 'A3', 'A6']
  },
  toyota: {
    name: 'Toyota',
    models: ['Landcruiser', 'Tacoma', 'Yaris']
  },
  bmw: {
    name: 'BMW',
    models: ['325i', '325ix', 'X5']
  },
};

export const contents = [
  `Commodo normcore truffaut VHS duis gluten-free keffiyeh iPhone taxidermy godard ramps anim pour-over.
  Pitchfork vegan mollit umami quinoa aute aliquip kinfolk eiusmod live-edge cardigan ipsum locavore.
  Polaroid duis occaecat narwhal small batch food truck.
  PBR&amp;B venmo shaman small batch you probably haven't heard of them hot chicken readymade.
  Enim tousled cliche woke, typewriter single-origin coffee hella culpa.
  Art party readymade 90's, asymmetrical hell of fingerstache ipsum.`,

  `Kitsch fanny pack yr, farm-to-table cardigan cillum commodo reprehenderit plaid dolore cronut meditation.
  Tattooed polaroid veniam, anim id cornhole hashtag sed forage.
  Microdosing pug kitsch enim, kombucha pour-over sed irony forage live-edge.
  Vexillologist eu nulla trust fund, street art blue bottle selvage raw denim.
  Dolore nulla do readymade, est subway tile affogato hammock 8-bit.
  Godard elit offal pariatur you probably haven't heard of them post-ironic.
  Prism street art cray salvia.`,

  `Aute chia marfa echo park tote bag hammock mollit artisan listicle direct trade.
  Raw denim flexitarian eu godard etsy.
  Poke tbh la croix put a bird on it fixie polaroid aute cred air plant four loko gastropub swag non brunch.
  Iceland fanny pack tumeric magna activated charcoal bitters palo santo laboris quis consectetur cupidatat portland aliquip venmo.`,
]
