//event types

[{"eventtype":"Replace Turbo Charger", "category":"PM", "jobcode":"510","componentcode":"1052","modifiercode":"","businessgroup":"55","sortorder":0},
{"eventtype":"PM1", "category":"PM", "jobcode":"540","componentcode":"7501","modifiercode":"","businessgroup":"55","sortorder":5},
{"eventtype":"PM2", "category":"PM", "jobcode":"540","componentcode":"7502","modifiercode":"","businessgroup":"55","sortorder":10},
{"eventtype":"PM3", "category":"PM", "jobcode":"540","componentcode":"7503","modifiercode":"","businessgroup":"55","sortorder":15},
{"eventtype":"PM4", "category":"PM", "jobcode":"540","componentcode":"7504","modifiercode":"","businessgroup":"55","sortorder":20},
{"eventtype":"Semi Annual Inspection", "category":"inspections", "jobcode":"040","componentcode":"1021","modifiercode":"","businessgroup":"","sortorder":25},
{"eventtype":"Annual Inspection", "category":"inspections", "jobcode":"040","componentcode":"1021","modifiercode":"","businessgroup":"","sortorder":30},
];

//standard jobs equipment families pullled from the ERP
[
{"description":"AGRICULTURAL PRODUCTS","modelsnranges":"56","events":"4","enabledevents":0},
{"description":"BACKHOE LOADERS","modelsnranges":"114","events":"152","enabledevents":0},
{"description":"EXCAVATORS","modelsnranges":"634","events":"714","enabledevents":7},
{"description":"MOTOR GRADERS","modelsnranges":"135","events":"117","enabledevents":5}

];

//escavators serail number
[
    {"make":"AA", "model":205,"beginsn":"03HC00001","endsn":"03HC99999"},
    {"make":"AA", "model":206,"beginsn":"04DC00001","endsn":"04EC99999"},
    {"make":"AA", "model":2138,"beginsn":"09MB00001","endsn":"09MB99999"}
];

//flat rate exchanges these do not have parts most of the time mainly labor PULLED FROM THE ERP
//things like performing paint jobs etc
[
    {"description":"PM232","events": 4, "enabled events":0},
    {"description":"PM256","events": 4, "enabled events":0},
    {"description":"PM2345","events": 4, "enabled events":0},
    {"description":"PM SPECIAL","events": 4, "enabled events":0},
    {"description":"PM GENERAL","events": 4, "enabled events":0},
];

//ADDITIONAL EVENTS these are not connected to the ERP all pricing is done in the quoter
//these are things that are quoted frequently
//manual events are things that are quoted infrequently
[
    {"eventname":"Cabin Filters", "category":"PM", "sortorder":40},
    {"eventname":"Inspection", "category":"Inspections", "sortorder":50},
    {"eventname":"PM-1", "category":"PM", "sortorder":1},
    {"eventname":"Travel", "category":"Additional", "sortorder":20},
    {"eventname":"Yearly Subscriptions",  "category":"Productlink", "sortorder":20},
];

//Packages change the oil on filter on the machine every 250 hours and the contract is good for 1000 hrs
[

    {"packagename":"Construction Gold 250/1000","description": "250 hr interval for 1000 hrs","contracttype":"PM agreement","events":3,"occourrences":4,
     "eventtypes":[
      {"eventtype":"PM1","occurrences":4},
      {"eventtype":"PM2","occurrences":2},
      {"eventtype":"PM3","occurrences":1},
      {"eventtype":"PM4","occurrences":1},
     ],
    "additionalevents":[
        {"eventname":"travel","occurences":8},
        {"eventname":"Inspection","occurences":8}
    ]
    },
    {"packagename":"Construction Gold 250/2000","description": "250 hr interval for 2000 hrs","contracttype":"Construction Gold","events":4,"occourrences":8},
    {"packagename":"Construction Gold 250/3000","description": "250 hr interval for 3000 hrs","contracttype":"Construction Gold","events":4,"occourrences":12},
    {"packagename":"Construction Silver 500/3000","description": "500 hr interval for 3000 hrs","contracttype":"PM agreement","events":4,"occourrences":10},
]