// Шведская локализация для квиза
// Файл будет заполнен переводом с русского на шведский
// Структура объектов и длина массивов будут сохранены как в quiz2-ru.js

const landingContent = {
    title: "Svag erektion är inte ålder. Ta testet och förbättra din styrka och storlek på 2 veckor!",
    subtitle: "Test från urologiska föreningen",
    startButtonText: "Starta testet",
    bottomButtonText: "Återställ potensen",
    middleButtonText: "Hitta dold sjukdom",
    orderButtonText: "Börja testet",
    paragraphs: [
        "Låg libido, för tidig utlösning, erektionsproblem och slapphet, minskad storlek - detta är inte åldersrelaterade förändringar. Det är sjukdomar som utvecklas i din kropp. Om du inte börjar behandla dem i ett tidigt skede kommer de att leda till fullständig impotens, obotlig prostatit, hormonella störningar och till och med behov av kirurgiskt ingrepp.",
        "Sluta ursäkta erektionsproblem med stress, ålder och sömnbrist. Impotens är inte normalt ens vid 60 års ålder. Det är symtom på sjukdomar som förstör manlig styrka. Du åldras inte, du är sjuk!",
        "Inflammationer, infektioner och mer än 10 manliga sjukdomar utvecklas utan akut smärta, obehag och märkbara symtom. Smärta uppstår när det är för sent att behandla själv.",
        "I vårt test från urologiska föreningen beaktas alla dolda och uppenbara symtom - mer än 3000 parametrar baserade på 50 000 undersökningar. Testet avgör om du har dolda sjukdomar, i vilket stadium de befinner sig och ger dig rekommendationer för självbehandling utan läkare, förödmjukande procedurer och tunga läkemedel."
    ],
    socialProof: [
        "Testet utvecklades av Europeiska och Amerikanska urologiska föreningar med stöd från föreningar i 5 andra länder.",
        "Vår quiz kan med 97% noggrannhet avgöra om du har en hormonell obalans och skapa rekommendationer specifikt för din kropp.",
        "Vi har hjälpt mer än 1000+ män med tidig prostatit att bli botade genom korrekt anpassad kost och övningar.",
        "78% av kosttillskotten i vårt land är förfalskningar eller ineffektiva, och de som verkligen hjälper måste väljas mycket individuellt.",
        "Vid upptäckt av allvarliga sjukdomar ger vi dig en kupong för en fullständig gratis urologisk undersökning på valfri klinik i din stad."
    ],
    landingBenefits: {
        title: "Det är viktigt för dig att ta detta test för att:",
        items: [
            "Identifiera hormonell obalans som orsakar minskad libido, svag erektion och förlust av muskelmassa.",
            "Upptäcka prostatit i ett tidigt stadium innan det leder till kroniskt smärtsyndrom och fullständig förlust av erektion.",
            "Kontrollera blodcirkulationen i bäckenområdet - utan normal blodflöde återställs inte erektionen och penis når inte maximal storlek.",
            "Få personliga rekommendationer om kost och övningar som hjälper till att återställa potensen utan läkemedel."
        ]
    },
    slides: [
        {
            img: "coms/kv1.webp", 
            text: "Jag är 53 år. Testet visade problem med blodcirkulationen i bäckenområdet. Enligt rekommendationerna började jag göra plankan på morgonen och knäböj med vridningar, plus började äta lax två gånger i veckan, valnötter och olivolja. Efter 3-4 veckor märkte jag att min penis ökade i volym. Jag botades utan tabletter, bara rätt kost och träning."
        },
        {img: "coms/kv2.webp", text: "Testerna visade blodstagnation i bäckenet. De rekommenderade daglig kardioträning - jag började springa på morgonen i 20 minuter och lade till fisk, nötter och grönsaker i min kost. Efter en månad blev erektionen starkare, den försvinner inte under sex i 1-3 timmar, och nu kan jag kontrollera orgasmen."},
        {img: "coms/3.jpg", text: "Jag är 50 år. Testet visade att jag hade låg testosteronnivå. De gav mig proteindieter med kött, ägg och billiga B-vitaminer. Efter 3 veckor med sådana förändringar märkte jag att min penis blev lite tjockare, morgonerektion återvände och humörsvängningar försvann."},
        {img: "coms/4.jpg", text: "Efter att ha tagit testet rekommenderades jag att minska sockerintaget och öka fiberintaget. Jag lade till broccoli, spenat och bär i min kost, gjorde stretchövningar. Efter 2-4 veckor kände jag att erektionen blev starkare."},
        {img: "coms/kv55.webp", text: "Efter att ha tagit testet fick jag veta att jag hade kronisk prostatit. De förbjöd mig att äta kryddstark, stekt mat och alkohol. De valde ett kosttillskott åt mig och rådde mig att reglera min sömnrutin. Jag tog tillskottet i 1 månad och följde alla rekommendationer. Efter en månad har jag inte längre smärta i prostatan, jag behöver inte gå på toaletten varje timme, inga akuta toalettbehov längre, även ryggsmärtan är borta."},
        {img: "coms/6.jpg", text: "Jag är 47 år. Jag tog testet och de sa att jag hade stagnation i lilla bäckenet. Rekommendationerna inkluderade en diet med minskade kolhydrater, undvikande av snabbmat och ökat fiberintag - jag började äta mer grönsaker, havregryn och baljväxter. De rådde mig också att dagligen utföra stretchövningar och övningar för att stärka bäckenbottenmusklerna. Redan efter 3 veckor blev erektionen starkare och längre, och smärtan i prostataområdet försvann."},
        {img: "coms/7.jpg", text: "Jag led länge av akuta toalettbehov, varje gång kändes det som om jag inte skulle hinna till toaletten. Det visade sig att prostatan var inflammerad. Efter testet rekommenderades jag att öka intaget av livsmedel med omega-3 fettsyror - jag började äta mer fisk och nötter. De rådde mig också att göra kardioträning och inte sitta länge. Efter en månad märkte jag att smärtan i prostatan var borta, inga akuta toalettbehov heller, och libido återvände."},
        {img: "coms/8.jpg", text: "Jag är 60 år. Efter att ha tagit testet rekommenderades jag att undvika fet mat, särskilt fläskkött, och öka intaget av vegetabiliska oljor och livsmedel rika på vitamin A och E. Jag började dricka mer vatten och bytte kaffe mot grönt te. Efter 3 veckor började jag märka förbättringar - sex varar längre, erektionen försvinner inte längre när jag byter position under sex, orgasmen är också stabil."},
        {img: "coms/9.jpg", text: "Testet visade att jag hade erektionsproblem på grund av dålig blodcirkulation. De rekommenderade mig att vara mer fysiskt aktiv: jag började gå på halvtimmeslånga promenader och simma. Jag började också dricka vatten med citron. Redan efter en vecka märkte jag att min erektion blev stabil. Sexuell funktion återställdes helt under den femte veckan. Jag tog till och med tester för att dubbelkolla, läkarna sa att jag var helt frisk."},
        {img: "coms/10.jpg", text: "Jag hade ingen aning om att jag hade en infektion - det fanns inga utsöndringar, ingen smärta, ingen lukt. Först trodde jag inte på testresultaten, men sedan gick jag till sjukhuset och de bekräftade att jag verkligen hade en infektion. Efter testet rekommenderade de mig ett preparat som läkarna godkände. På 1 vecka blev jag av med infektionen. Efter 2 veckor kände jag att erektionen blev starkare och rörelserna lättare. På sjukhuset bekräftade de att jag var helt frisk."}
    ],
    slides2: [
        {
            img: "dp/1.webp", 
            text: "Jag är 60 år och Formelan gav mig livet tillbaka. Nu har jag stabil erektion och sex i 40-60 minuter. Först trodde jag inte på testresultaten, men jag tog risken och ångrar det inte!"
        },
        {
            img: "dp/2.webp", 
            text: "Jag är ingenjör och tillbringar mycket tid framför datorn. Jag är 53 år. Formelan hjälpte mig att hantera potensproblem orsakade av stillasittande livsstil."
        },
        {
            img: "dp/3.webp", 
            text: "Jag tog Viagra i en månad, sedan fick jag en hjärtattack. Läkarna rekommenderade Formelan som ett naturligt alternativ. Det verkar snabbare än Viagra och skadar inte inre organ."
        },
        {
            img: "dp/4.webp", 
            text: "Det värsta med impotens är förmodligen depressionen. Formelan blev räddningen för vårt äktenskap, min fysiska och mentala hälsa. Så snart jag botade impotensen började depressionen också försvinna."
        },
        {
            img: "dp/5.webp", 
            text: "Prostatit är mycket farligt. Min farbror dog av prostatacancer. När jag märkte att jag började gå på toaletten ofta och erektionen försvann, började jag använda Formelan. Jag behandlades mindre än en månad. Nu är jag helt frisk."
        },
        {
            img: "dp/6.webp", 
            text: "Formelan återställde erektionen som jag förlorade på grund av diabetes. Nu kan jag leva ett fullvärdigt liv trots sjukdomen."
        },
        {
            img: "dp/7.webp", 
            text: "För 3 veckor sedan slutade varje försök till sex med tre minuters skam för mig. Nu kan jag tillfredsställa min fru och ge henne orgasm minst 2 gånger."
        },
        {
            img: "dp/8.webp", 
            text: "Jag är 58 år och arbetar på en fabrik. På grund av tungt fysiskt arbete och konstant stress började jag få erektionsproblem. Formelan återställde potensen."
        },
        {
            img: "dp/9.webp", 
            text: "Jag är 42 år. Jag hade stabilt sex med min fru även före denna gel. Jag började använda Formelan för att förebygga prostatit och impotens. Efter 1 kurs blev min penis mycket starkare och den blev längre och mer voluminös."
        },
        {
            img: "dp/10.webp", 
            text: "Jag är före detta tyngdlyftare. Tränarna matade mig med preparat för muskeltillväxt. De dödade min potens. De senaste 5 åren tillbringade jag 3 dagar i veckan på sjukhus. Läkarna hjälpte inte. Formelan blev min livboj."
        }
    ], 
    footerText:[
    "© 2025 European Urological Association",
    "All rights reserved"   
],
faq: {
title: "Svar på populära frågor",
items: [
    {
        question: "Hur länge varar effekten efter kursen?",
        answer: {
            intro: "Effekten av Formelan har två faser:",
            list: [
                "Snabb effekt: 30-40 minuter efter applicering av gelen, varar 1-3 timmar",
                "Terapeutisk effekt: första förbättringarna efter 3-6 dagar, fullständig återhämtning efter 3 veckor",
                "Efter en fullständig kurs varar effekten 1-3 år om rekommendationerna följs",
                "96% av patienterna behöver inte ytterligare stimulatorer för erektion efter behandlingskursen"
            ],
            conclusion: "För att upprätthålla resultatet rekommenderas att upprepa kursen 1 gång på 1-3 år"
        }
    },
    {
        question: "Kan man ta det med andra läkemedel?",
        answer: {
            intro: "Formelan kombineras med allt utom sildenafil:",
            list: [
                "Kan användas tillsammans med alla läkemedel mot högt blodtryck och diabetes",
                "Säkert för hjärt-kärlsystemet i alla åldrar",
                "Orsakar inga biverkningar även vid långvarig användning",
                "Kompatibel med vitaminer och kosttillskott",
                "VIKTIGT: kan inte användas samtidigt med Viagra och liknande preparat"
            ],
            conclusion: "Den naturliga sammansättningen av Formelan garanterar säkerhet vid användning med alla läkemedel, förutom syntetiska erektionsstimulatorer. Efter avslutad Formelan-kurs behövs inga ytterligare stimulatorer."
        }
    },
    {
        question: "Passar Formelan för män över 60 år?",
        answer: {
            intro: "Formelan är särskilt effektivt för äldre män eftersom det tar hänsyn till alla åldersrelaterade förändringar i kroppen:",
            list: [
                "Kompenserar för naturlig minskning av testosteron efter 60 år",
                "Förbättrar blodcirkulationen i lilla bäckenet, som vanligtvis försämras med åldern",
                "Stärker försvagade bäckenbottenmuskler",
                "Minskar risken för utveckling av prostatahyperplasi",
                "Återställer minskad känslighet i nervändarna",
                "Verkar milt, utan stress för kroppen",
                "Säkert vid långvarig användning och kompatibelt med andra läkemedel",
                "Orsakar inte blodtryckstoppar till skillnad från syntetiska preparat",
                "Förbättrar allmänt välbefinnande och energi",
                "Hjälper till att upprätthålla en aktiv livsstil"
            ],
            conclusion: "Gradvis ackumulering av effekt och naturlig sammansättning gör Formelan till det bästa valet för äldre män. Preparatet kräver ingen speciell diet, är säkert för hjärt-kärlsystemet och hjälper till att bevara erektion och en frisk prostata i alla åldrar."
        }
    },
    {
        question: "Finns det kontraindikationer?",
        answer: {
            intro: "Ja, preparatet ska inte användas om du har:",
            list: [
                "Individuell intolerans eller allergi mot guarana och ginseng",
                "Kan inte användas samtidigt med Viagra och liknande preparat"
            ],
            conclusion: "Vid allergi mot någon av komponenterna bör användning undvikas. I övriga fall är preparatet helt säkert och kräver inte konsultation med läkare."
        }
    },
    {
        question: "Kommer diet och träning att bota mig?",
        answer: {
            intro: "Analysen av dina symtom visade förekomst av prostatainflammation och störd blodcirkulation i lilla bäckenet. I detta stadium är enbart livsstilsförändringar inte längre tillräckliga:",
            list: [
                "Det viktigaste är att snabbt minska inflammationen och återställa blodflödet med hjälp av Formelan",
                "Diet och träning är bara kompletterande åtgärder som kan påskynda behandlingen",
                "Rekommenderade livsmedel (som tillägg till Formelan): fet fisk, valnötter, pumpakärnor, grönsaker (särskilt broccoli, spenat), bär, olivolja",
                "Nyttiga övningar (valfritt): snabb promenad 30 minuter om dagen, simning, lätt stretching av bäckenmusklerna, Kegel-övningar",
                "Vad som ska undvikas för bättre effekt: kryddstark mat, stekt mat, alkohol, långvarigt sittande, tunga fysiska belastningar"
            ],
            conclusion: "Utan användning av Formelan kommer enbart diet och träning inte att stoppa sjukdomsprogressionen. Formelan eliminerar orsaken till problemet: efter 3-6 dagar minskar frekventa toalettbehov, efter 3 veckor normaliseras erektionen. Rätt kost och måttlig aktivitet kan påskynda resultatet, men grunden för behandlingen är Formelan-kursen."
        }
    },
    {
        question: "Hur använder man Formelan korrekt?",
        answer: {
            intro: "Formelan är enkel att använda, men det finns två användningssätt:",
            list: [
                "För snabb effekt: applicera gelen 30-40 minuter före intimitet",
                "För terapeutisk effekt: applicera 2 gånger om dagen - morgon och kväll",
                "Gelen appliceras i ett tunt lager på penis och perinealområdet",
                "Massera in med lätta rörelser i 2-3 minuter tills den absorberas helt"
            ],
            conclusion: "Efter att ha lagt din beställning kommer en specialist att ringa dig och förklara i detalj hur du använder Formelan för snabb effekt och långvarig behandling i ditt specifika fall."
        }
    }
]
},
        doctorComment: {
        name: "Dr. David F. Jarrard",
        title: "Urolog av högsta kategori, 15 års erfarenhet inom urologi",
        quote: "Formelan förstärker blodflödet till penis inom 30 minuter och ökar känsligheten i erogena zoner, förbättrar erektionen. Vid kursanvändning av gelen upphör nattliga toalettbesök och problem med urinering. I slutet av 2 veckor normaliseras hormonnivåerna, vilket bekräftas av laboratorietester. Efter 3 veckors användning återställs full erektion utan ytterligare stimulering med tabletter eller geler. Ultraljud visar minskad prostatastorlek och tester bekräftar frånvaro av inflammatoriska processer. Formelan är säkert för hjärt-kärlsystemet och kompatibelt med läkemedel mot diabetes och högt blodtryck. Effekten varar i cirka 2 år efter avslutad kurs, vilket bekräftas av långsiktiga observationer av mina patienter."
        }
}; 

const navLinks = [
    {text: "Riktlinjer", href: "#"},
    {text: "Utbildning & Evenemang", href: "#"},
    {text: "Vetenskap & Publikationer", href: "#"},
    {text: "Om oss", href: "#"}
];

const headerButtons = [
    {text: "Logga in", class: "login-btn", href: "#"},
    {text: "Bli medlem", class: "become-member-btn", href: "#"}
];

const questions = [
    {
        question: "Har du någonsin sett besvikelse och medlidande i din partners ögon när hon tittade på din slappa penis?",
        answers: ["Ja, det var förödmjukande", "Jag har märkt det några gånger", "Hon försöker dölja sin besvikelse", "Nej, det har aldrig hänt"]
    },
    {
        question: "Har du behövt hitta på ursäkter för att undvika sex på grund av rädsla för att göra bort dig med svag erektion?",
        answers: ["Ja, jag undviker regelbundet intimitet", "Ibland måste jag ljuga", "Det har hänt några gånger", "Nej, jag är alltid säker på mig själv"]
    },
    {
        question: "Har du någonsin känt dig som en otillräcklig man på grund av erektionsproblem?",
        answers: ["Ja, jag känner mig konstant bristfällig", "Sådana tankar kommer ofta", "Ibland kommer tvivel", "Nej, jag är alltid säker på mig själv"]
    },
    {
        question: "Har du märkt att din partner börjat söka sexuell tillfredsställelse på annat håll på grund av dina problem i sängen?",
        answers: ["Ja, hon var otrogen mot mig", "Jag misstänker att hon är otrogen", "Jag är rädd att hon snart kommer att börja leta efter någon annan", "Nej, hon är trogen mot mig"]
    },
    {
        question: "Märker du att din penis blir allt mindre och mjukare för varje månad, som om den krymper?",
        answers: ["Ja, den har märkbart minskat", "Den har blivit mindre och mjukare", "Ibland verkar den mindre", "Nej, storleken har inte förändrats"]
    },
    {
        question: "Har du tankar om att du aldrig mer kommer att kunna tillfredsställa en kvinna som en riktig man?",
        answers: ["Ja, jag har accepterat det", "Jag tänker ofta på det", "Sådana tankar kommer ibland", "Nej, jag är säker på min förmåga"]
    },
    {
        question: "Har du någonsin hört skratt eller diskussioner om dina sexuella problem bakom ryggen?",
        answers: ["Ja, det var förödmjukande", "Jag misstänker att de pratar om det", "Jag är rädd att min partner berättar för sina vänner", "Nej, det har aldrig hänt"]
    },
    {
        question: "Har du märkt att din partner fejkar stön och orgasm för att snabbare avsluta otillfredsställande sex med dig?",
        answers: ["Ja, det är uppenbart", "Jag misstänker att det är så", "Ibland verkar det som om hon fejkar", "Nej, hennes orgasmer är äkta"]
    },
    {
        question: "Känner du panik när erektionen förrädiskt försvinner mitt under samlaget?",
        answers: ["Ja, det är en riktig mardröm", "Jag upplever stark stress", "Jag blir lite nervös", "Nej, det händer inte"]
    },
    {
        question: "Har du i hemlighet tagit stimulerande medel och dolt din oförmåga från din partner?",
        answers: ["Ja, jag ljuger konstant", "Jag har behövt göra det några gånger", "Jag provade en gång", "Nej, aldrig"]
    },
    {
        question: "Har du märkt att din partner allt oftare vänder sig bort från dig i sängen och undviker intimitet?",
        answers: ["Ja, hon har helt tappat intresset", "Intresset har minskat betydligt", "Ibland avböjer hon", "Nej, allt är som förut"]
    },
    {
        question: "Förföljs du av rädslan att din partner en dag helt enkelt kommer att lämna dig för en mer kapabel man i sängen?",
        answers: ["Ja, det är min största mardröm", "Jag tänker ofta på det", "Jag oroar mig ibland", "Nej, jag är säker i relationen"]
    },
    {
        question: "Har du någonsin hört förödmjukande jämförelser från din partner med tidigare partners gällande storlek eller uthållighet?",
        answers: ["Ja, det var outhärdligt smärtsamt", "Hon har gett tydliga antydningar", "Jag är rädd att hon tänker på det", "Nej, det har aldrig hänt"]
    },
    {
        question: "Känner du att du på grund av potensproblem förlorar respekt inte bara i kvinnors ögon utan även andra mäns?",
        answers: ["Ja, jag känner mig otillräcklig överallt", "Det påverkar märkbart min självkänsla", "Ibland känner jag osäkerhet", "Nej, det är inte relaterat"]
    },
    {
        question: "Hur gammal är du?",
        answers: ["30-40", "40-50", "50-60", "60+"]
    }
]; 

const results = {
headings: [
    "Diagnostiken har identifierat 3 faktorer som blockerar din erektion",
    "Huvudproblemen som upptäckts i din kropp:",
    "Nödvändiga åtgärder för att återställa manlig styrka",
    "För ditt fall krävs specifika förändringar i kost och livsstil", 
    "Varför just Formelan:"
],
mainText: "Du har hormonell obalans, störningar i blodcirkulationen i lilla bäckenet och tecken på prostatainflammation. Dessa problem påverkar direkt kvaliteten på din erektion och ditt sexliv.",

seriousReasons: [
    "Testosteronbrist blockerar erektionsmekanismer på cellnivå. Dina blodkärl förlorar elasticitet och svällkropparna fylls inte med blod. Härifrån kommer svag erektion, sällsynta morgonerektion och minskad penisstorlek i viloläge.",
    "Blodstagnation i lilla bäckenet leder till syrebrist i penisvävnaden. Svällkropparnas celler dör och ersätts av bindväv. Detta är en irreversibel process som gör det omöjligt att uppnå hård erektion även med hjälp av stimulerande medel.",
    "Prostatainflammation har redan lett till ökad storlek. Härifrån kommer förändringar relaterade till toalettbesök och obehag i ländryggen. Utan behandling kommer inflammationen att sprida sig till sädesblåsorna, vilket orsakar smärtsam ejakulation och minskad spermamängd.",
    "Störd mikrocirkulation i könsorganen blockerar leveransen av näringsämnen till nervändarna. Detta orsakar minskad känslighet i ollon och penisskaft, vilket gör orgasmen mindre intensiv eller helt ouppnåelig."
],

dangerHeading: "Vad som väntar dig om du inte börjar behandling:",
dangerText: {
stage1: {
    time: "Under de närmaste 3-6 månaderna:",
    text: "Testosteronnivån kommer att fortsätta sjunka med 5-7% varje månad. Erektionen blir instabil och försvinner i 70% av fallen. Prostatan ökar med 15-20%, vilket leder till ökad urinering upp till 6-8 gånger per natt. Värkande smärtor i perineum som strålar ut i ländryggen uppstår. Formelan stoppar dessa processer redan under första behandlingsveckan."
},
stage2: {
    time: "Inom 8-12 månader:",
    text: "Blodflödet i lilla bäckenet minskar med 20-30%, vilket gör det omöjligt att uppnå fullständig erektion även med hjälp av stimulerande medel. Fibrösa förändringar börjar i prostatavävnaden, vilket leder till konstant smärta vid urinering och sittande. Ejakulatvolymen minskar med 60-70% och dess kvalitet försämras kraftigt. Formelan återställer normalt blodflöde och förhindrar utveckling av fibros."
},
stage3: {
    time: "Vid frånvaro av behandling i mer än ett år:",
    text: "Irreversibel erektil dysfunktion utvecklas. Prostatit övergår till kronisk form med bildning av adenom. Hormonell obalans leder till viktökning och förlust av muskelmassa. Urogenitalsystemets funktion störs. Formelan är det enda medlet som kan återställa manliga funktioner även i detta stadium tack vare dess komplexa effekt på alla orsaker till problemet."
}
},

whatToDoText: [
"Din kropp kräver omedelbar komplex påverkan på tre nyckelsystem: hormonellt, vaskulärt och prostata. FORMELAN-gelen innehåller 12 aktiva komponenter som exakt motsvarar de störningar som identifierats hos dig. Varje komponent påverkar en specifik orsak till problemet.",

"FORMELAN återställer testosteronnivån, normaliserar blodflödet i lilla bäckenet och eliminerar prostatainflammation. Kliniska studier bekräftar: de flesta män noterar betydande förbättring av erektion redan efter 3-5 dagars användning. Frekventa toalettbehov och obehag försvinner under den första veckan.",

"Som patient hos urologiska föreningen får du FORMELAN med rabatt och gratis konsultation med en specialist. En kurs av gelen återställer helt manliga funktioner, och effekten varar upp till 3 år. För att uppnå maximalt resultat, börja användningen inom en vecka."
],

proofs: {
sections: [
{
    title: "Huvudkomponenter för snabb effekt",
    points: [
        "<span class='component'>Guarana</span>: Innehåller 4 gånger mer koffein än kaffe, vilket ger ett kraftfullt blodflöde till organen i lilla bäckenet. Studier har visat: minskar prostatasvullnad 67% snabbare än vanliga preparat. Redan 40 minuter efter första användningen kommer du att känna en energiökning och förbättrad erektion.",
        "<span class='component'>Ginseng</span>: Innehåller 32 typer av ginsenosider — naturliga stimulatorer av testosteronproduktion. Kliniska prövningar på 1200 män har bevisat: ökar testosteronnivån med 27% på 14 dagars användning. Återställer sexuell lust även efter långvarig avhållsamhet.",
        "<span class='component'>L-arginin</span>: Aminosyra som omvandlas till kväveoxid — huvudsaklig kärlvidgare. Koncentrationen i FORMELAN är 5 gånger högre än i tabletter. Vidgar penisblodkärl med 82%, vilket ger maximal blodflöde och hårdhet i erektionen redan efter 2-3 dagar."
    ]
},
{
    title: "Lindring av inflammation och smärta",
    points: [
        "<span class='component'>Extrakt från vitpilbark</span>: Innehåller salicin — naturlig motsvarighet till aspirin, men 3 gånger starkare och utan biverkningar. Minskar prostatainflammation på cellnivå inom 72 timmar. Eliminerar helt sveda vid urinering redan på 2-3 dagen av användning.",
        "<span class='component'>Tjurprostataextrakt</span>: Innehåller prostatapeptider identiska med människans, som återställer körtelvävnad. Minskar storleken på inflammerad prostata med 23% på 10 dagar. Kliniskt bevisat: minskar frekvensen av nattliga toalettbesök från 5-6 till 1-2 gånger.",
        "<span class='component'>Quercetin</span>: Kraftfull naturlig antioxidant, vars koncentration i FORMELAN är 8 gånger högre än i alla kosttillskott. Förstör patogena bakterier i prostatan inom 96 timmar och förhindrar återkommande inflammation i upp till 3 år."
    ]
},
{
    title: "TRIPPELSYSTEM FÖR FÖRBÄTTRAT BLODFLÖDE",
    points: [
        "<span class='component'>Ginkgo biloba-extrakt</span>: Innehåller 24% flavonoidglykosider — ämnen som gör kärlväggarna elastiska. Ökar blodflödet i lilla bäckenet med 64% på 5 dagar. Kliniska studier har visat: förlänger samlaget med i genomsnitt 37 minuter.",
        "<span class='component'>Niacin (vitamin B3)</span>: I FORMELAN används en speciell form av niacin med förlängd verkan. Vidgar mikrokapillärer i penis med 300%, vilket möjliggör maximal volym och hårdhet. Effekten varar upp till 3 timmar efter engångsanvändning.",
        "<span class='component'>Zinkpikolinat</span>: Biotillgänglig form av zink, absorberas 95% bättre än vanlig. Ökar testosteronproduktionen med 34% på 21 dagar. Ökar ejakulatvolymen med 41% och spermieantalet med 68%, vilket bekräftas av laboratorieanalyser."
    ]
},
{
    title: "Skydd mot återkommande inflammation",
    points: [
        "<span class='component'>Sabal-palm</span>: Extraktet innehåller unika fytosteroler som blockerar omvandlingen av testosteron till dihydrotestosteron — hormon som orsakar prostatatillväxt. Minskar prostatastorlek med 31% på 30 dagar. Förhindrar utveckling av adenom med 89% effektivitet.",
        "<span class='component'>Lykopen</span>: Koncentrationen i FORMELAN är 12 gånger högre än i tomater. Skyddar prostatacellerss DNA från skador med 97% effektivitet. Minskar risken för prostatacancer med 83%, vilket bekräftas av en 15-årig studie med 47000 män.",
        "<span class='component'>Selen</span>: Mikroelement som aktiverar 35 skyddsenzym i prostatavävnad. Ökar lokalt immunförsvar 4,7 gånger, vilket gör prostatan resistent mot infektioner. Förhindrar återkommande inflammation med 92% effektivitet under 5 år efter kursen."
    ]
},
{
    title: "KOMPLEX PROSTATAÅTERSTÄLLNING",
    points: [
        "<span class='component'>Nässelextrakt</span>: Innehåller lektiner som minskar prostatasvullnad med 78% på 7 dagar. Återställer normalt utflöde av prostatavätska, förhindrar stagnation och utveckling av konkrement. Normaliserar urinering hos 94% av män redan på 5:e dagen av användning.",
        "<span class='component'>Vitamin D3</span>: I FORMELAN används aktiv form av D3, som absorberas till 100%. Reglerar 56 gener ansvariga för prostataarbete. Återställer normal sekretion av prostatavätska på 14 dagar, vilket bekräftas av analyser av prostatasekret.",
        "<span class='component'>Maca-extrakt</span>: Växt som innehåller 31 alkaloider som förbättrar mikrocirkulationen i prostatan. Eliminerar stagnation med 87% effektivitet på 9 dagar. Ökar libido med 71%, vilket bekräftas av dubbelblind placebokontrollerad studie."
    ]
},
{
    title: "MAXIMAL FÖRSTÄRKNING AV SEXUELL FUNKTION",
    points: [
        "<span class='component'>Tribulus terrestris</span>: Innehåller 90% saponiner — ämnen som stimulerar produktion av luteiniserande hormon. Ökar blodflödet till penis med 83%, vilket leder till volymökning med 2,7 cm i erigerat tillstånd. Effekten märks redan efter 5 dagar och varar upp till 2 år efter kursen.",
        "<span class='component'>Damiana-extrakt</span>: Innehåller alkaloider som blockerar för tidig utlösning med 94% effektivitet. Förlänger samlaget med i genomsnitt 47 minuter. Förstärker orgasmintensiteten med 78% genom ökad känslighet i nervändarna.",
        "<span class='component'>Yohimbin</span>: Alkaloid som blockerar alfa-2-adrenoreceptorer ansvariga för sammandragning av penisblodkärl. Ökar känsligheten i erogena zoner 3,2 gånger. Ger maximal hårdhet i erektionen även vid stark stress eller trötthet. Verkar inom 27 minuter efter applicering."
    ]
},
{
    title: "VETENSKAPLIGT BEVISADE RESULTAT AV FORMELAN-ANVÄNDNING",
    points: [
        "<span class='component'>Första 3-5 dagarna</span>: Minskning av prostatainflammation med 43%, minskning av urineringsfrekvens med 61%, försvinnande av sveda och obehag hos 87% av män. Uppkomst av spontana erektioner hos 73% av patienter, ökning av samlagets varaktighet med 24 minuter.",
        "<span class='component'>7-14 dagars användning</span>: Normalisering av prostatastorlek hos 82% av män, återställning av normalt blodflöde i lilla bäckenet hos 91% av patienter. Ökning av testosteronnivån med 34%, förstärkning av libido hos 96% av män. Ökning av penisvolym i erigerat tillstånd med 1,8 cm.",
        "<span class='component'>Efter fullständig kurs (21-30 dagar)</span>: Fullständig återställning av erektil funktion hos 94% av män, normalisering av hormonnivåer hos 89% av patienter. Eliminering av alla prostatitsymtom hos 97% av män. Effekten varar i 2-3 år utan ytterligare användning."
    ]
},
{
    title: "FÖRDELAR JÄMFÖRT MED ANDRA BEHANDLINGSMETODER",
    points: [
        "<span class='component'>Till skillnad från tabletter</span>: FORMELAN verkar lokalt och belastar inte lever och njurar. Orsakar inga biverkningar även vid långvarig användning. Kompatibel med alla läkemedel mot högt blodtryck och diabetes. Orsakar inte beroende och tillvänjning till skillnad från syntetiska stimulatorer.",
        "<span class='component'>Till skillnad från injektioner och operationer</span>: Smärtfri användning utan risk för infektioner och komplikationer. Kräver inte besök på klinik och kontakt med sjukvårdspersonal. Påverkar alla orsaker till problemet samtidigt, inte bara symtomen. Återställer naturliga erektionsmekanismer.",
        "<span class='component'>Till skillnad från naturläkemedel</span>: Koncentrationen av aktiva ämnen i FORMELAN är 10-15 gånger högre än i alla örtinfusioner. Alla komponenter genomgår strikt laboratoriekvalitetskontroll. Effektiviteten bekräftas av kliniska studier med över 12000 män i olika åldrar."
    ]
},
],
summary: "FORMELAN — det enda preparatet med kliniskt bevisad effektivitet på 94% vid behandling av komplexa manliga problem. Patenterad formel med 18 aktiva komponenter verkar samtidigt på alla orsaker till erektil dysfunktion: hormonell obalans, prostatainflammation och störd blodcirkulation. Till skillnad från syntetiska preparat återställer FORMELAN naturliga erektionsmekanismer och ger långvarig effekt upp till 3 år efter kursen."
},
orderForm: {
namePlaceholder: "Ditt namn",
phonePlaceholder: "Telefonnummer",
buttonText: "Få FORMELAN med rabatt"
}, 
bottomOrderButton: "BESTÄLL FORMELAN NU"
}; 

let currentQuestionIndex = 0;
let currentSlideIndex1 = 0;
let currentSlideIndex2 = 0;
let autoSlideInterval1 = null;
let autoSlideInterval2 = null;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0; 