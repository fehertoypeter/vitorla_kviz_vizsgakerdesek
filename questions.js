const examTopics = [
  
  {
    examName: 'Légi Jog',
    questionCount: 24,
    timeLimit: 2400, // másodperc
    examTopics: 'LÉGIJOG , LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK , REPÜLÉSI SZABÁLYOK , LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS',  
  },
  {
    examName: 'Légijármű álltalános ismeretek',
    questionCount: 20,
    timeLimit: 1200, // másodperc
	examTopics: 'SZERKEZETTAN , MŰSZERTAN , MOTORTAN , ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA , SZILÁRDSÁGTAN',  
  },
  {
    examName: 'Repülési teljesítmény és tervezés',
    questionCount: 20,
    timeLimit: 1200, // másodperc
    examTopics: 'REPÜLÉSTERVEZÉS',
  },
  {
    examName: 'Emberi teljesítőképesség',
    questionCount: 22,
    timeLimit: 2400, // másodperc
    examTopics: 'ELSŐSEGÉLYNYÚJTÁS , PSZICHOLÓGIAI ALAPISMERETEK , REPÜLÉSEGÉSZSÉGÜGYI ALAPISMERETEK , REPÜLÉSÉLETTAN',
  },
  {
    examName: 'Meteorológia',
    questionCount: 27,
    timeLimit: 3600, // másodperc
    examTopics: 'LÉGKÖR , METEROLÓGIA , REPÜLÉSMETEOROLÓGIA',
  },
  {
    examName: 'Navigáció.',
    questionCount: 20,
    timeLimit: 2400, // másodperc
    examTopics: 'NAVIGÁCIÓ',
  },
  {
    examName: 'Üzemeltetési eljárások',
    questionCount: 20,
    timeLimit: 1200, // másodperc
    examTopics: 'LÉGIÜZEMELTETÉS , ÜZEMELTETÉSI ISMERETEK',
  },
  {
    examName: 'Repüléselmélet',
    questionCount: 20,
    timeLimit: 1200, // másodperc
    examTopics: 'REPÜLÉSELMÉLET',
  },
  {
    examName: 'Kommunikáció',
    questionCount: 18,
    timeLimit: 1800, // másodperc
    examTopics: 'RÁDIÓKOMMUNIKÁCIÓ , RÁDIÓTÁVBESZÉLŐ KEZELŐI ISMERETEK',
  }
];

const questions = [
	{

		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen minimális megengedett látástávolságig lehet üzemelni F-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "5 km.", correct: false},
			{ text: "5 km, de ha a repülést olyan sebességgel hajtják végre, ami lehetővé teszi az egyéb forgalom vagy akadályok időbeni észlelését és az összeütközés elkerülését, akkor 1500 m.", correct: false},
			{ text: " 8 km FL100-on és felette, 5 km FL100 alatt.", correct: true},
			{ text: "8 km.", correct: false},
		],
		hint:"A látványrepülési szabályok szerint az F-osztályú légtérben a minimális megengedett látástávolság (minimum visibility) legalább 5 kilométernek kell lennie. Az F-osztályú légtérben csak vizuális repülés (VFR) engedélyezett, ami azt jelenti, hogy a repülőgép pilótájának képesnek kell lennie arra, hogy folyamatos vizuális kapcsolatot tartsanak a környező tájval és akadályokkal, valamint az égen található repülőgépekkel. Ezenkívül a pilóta a látástávolságon kívül is rendelkeznie kell a szükséges tájékozódási eszközökkel, például műszerfelszereléssel és navigációs rendszerekkel.",
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Milyen esetben végezhet a PPL engedélyes kereskedelmi célú repülést?",
		answers: [
			{ text: "Nem végezhet ilyet.", correct: true},
			{ text: "A légközlekedési hatóság külön engedélyével.", correct: false},
			{ text: "Vészhelyzet esetén.", correct: false},
			{ text: "CPL jogosítású engedélyes másodpilótájaként.", correct: false},
		],
		hint:"Fontos megjegyezni, hogy a PPL engedélyesek nem végezhetnek rendszeres, kereskedelmi célú repüléseket, mivel ehhez magasabb szintű szakmai engedélyekre van szükség, például a CPL-re (Commercial Pilot License) vagy az ATPL-re (Airline Transport Pilot License).",
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Felszállás előtt ellenőrizheti-e a repülőgép-vezető, hogy a repülőgép felelősségbiztosítása érvényes-e?",
		answers: [
			{ text: "Nem, ez a szerelő feladata.", correct: false},
			{ text: "Nem, ez az üzemben tartó feladata.", correct: false},
			{ text: " Igen, ha az üzemben tartó erre felhatalmazza.", correct: false},
			{ text: "Kötelessége ellenőrizni.", correct: true},
		],
		hint:"A repülőgép-vezetőknek valóban kötelességük ellenőrizni, hogy a repülőgép felelősségbiztosítása érvényes-e, mielőtt felszállnának a repülőgéppel. Ez azért fontos, mert a repülőgép-vezető és az utasok biztonsága érdekében szükség van a megfelelő biztosításra.<br><br>Emellett fontos megjegyezni, hogy a repülőgép-vezetőknek nem csak a biztosításokat kell ellenőrizniük, hanem a repülőgép műszaki állapotát is. Ennek érdekében az előírások szerint a repülőgép-vezetőknek minden felszállás előtt részletes ellenőrzést kell végezniük a repülőgép műszaki állapotára vonatkozóan, és csak akkor szabad felszállniuk, ha a repülőgép minden szempontból megfelelő állapotban van.",
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Magyarországon a légiközlekedési hatóság feladatait első fokon … látja el.",
		answers: [
			{ text: "a Légirendészeti Parancsnokság", correct: false},
			{ text: "a HM Katonai Légügyi Hivatala.", correct: false},
			{ text: "az NFM KH LH", correct: true},
			{ text: "az NFM Központi Hivatal", correct: false},
		],
		hint:"",
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Mi a teendő akkor, ha a repülőgép fedélzetén tartandó okmányok közül valamelyik hiányzik?",
		answers: [
			{ text: "A felszállást el kell halasztani és jelezni kell a szabálytalanságot a repülőgép üzemben tartójának.", correct: true},
			{ text: "A tulajdonos külön engedélyével a felszállást végre lehet hajtani.", correct: false},
			{ text: "Az üzemben tartó külön engedélyével a felszállást végre lehet hajtani.", correct: false},
			{ text: "A főpilóta külön engedélyével a felszállást végre lehet hajtani.", correct: false},
		],
		hint:"",
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Melyik dokumentum bizonyítja, hogy a repülőgép előírt karbantartását elvégezték?",
		answers: [
			{ text: "Az üzemidő napló.", correct: false},
			{ text: "A lajstromozási bizonyítvány.", correct: false},
			{ text: "Az üzemképesség tanúsító nyilatkozat.", correct: true},
			{ text: "A légialkalmassági bizonyítvány.", correct: false},
		],
		hint:"Az üzemidő napló a repülőgép üzemidejének nyilvántartására szolgál. Az üzemidő naplóban rögzítik a repülőgép üzemelésének minden fontos adatát, például az üzemórákat, az indításokat és a leszállásokat.<br><br>A lajstromozási bizonyítvány egy olyan dokumentum, amely igazolja, hogy a repülőgép be van jegyezve a nemzeti repülési lajstromba. A lajstromozási bizonyítvány tartalmazza a repülőgép azonosító számát, a tulajdonos nevét és címét, a repülőgép típusát és az üzemkategóriát.<br><br>Az üzemképességet tanúsító nyilatkozat egy olyan dokumentum, amely igazolja, hogy a repülőgép megfelel az összes műszaki, üzemeltetési és biztonsági előírásnak. Az üzemképességet tanúsító nyilatkozatot a repülőgép tulajdonosa vagy üzemeltetője adja ki.<br><br>A légialkalmassági bizonyítvány egy olyan dokumentum, amely igazolja, hogy a repülőgép megfelel a légialkalmassági követelményeknek, és biztonságosan repülhet. A légialkalmassági bizonyítvány tartalmazza a repülőgép adatait, az üzemkategóriát, az engedélyezett repülési határokat és a repülőgép üzemeltetésére vonatkozó egyéb feltételeket.",
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Melyik ICAO Annex tartalmazza a nemzetközi repülőterek tervezésére és üzemben tartására vonatkozó szabványokat és ajánlott gyakorlatokat?",
		answers: [
			{ text: "Annex 15", correct: false},
			{ text: "Annex 14", correct: true},
			{ text: "Annex 13", correct: false},
			{ text: "Annex 12", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A Szerződő Államokban a légijárművek lajstromozása, vagy a lajstromozás átírása … szerint történik.",
		answers: [
			{ text: "az ICAO szabályai", correct: false},
			{ text: " a JAA szabályai", correct: false},
			{ text: "az illető állam szabályai", correct: true},
			{ text: "az üzemben tartó kívánsága", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mi az átváltási szint Budapest FIR-ben?",
		answers: [
			{ text: " QNH 9500 láb", correct: false},
			{ text: "QNH 9000 láb.", correct: false},
			{ text: "FL100, FL110 vagy FL120", correct: true},
			{ text: "FL100.", correct: false},
		],
		hint:"Az 'FL' a 'Flight Level' rövidítése, amelyet repülés közben az altiméter beállítása során használnak a magasság mérésére. Az FL átváltási szint az a magasság, amelyen a pilóták a légiközlekedési irányítóval kommunikálnak a magasságváltozásról, amikor az adott terület fölött repülnek.<br><br>A QNH az 'altiméter beállítási érték tengerszintre átszámítva' kifejezés rövidítése (angolul: 'altimeter setting to QNH'). Ez az érték az, amit az altiméter beállításakor használnak a repülőgép magasságának meghatározásához a tengerszinti szinten. A QNH az aktuális légköri nyomást jelenti a tengerszinten, és az altiméter beállítása erre az értékre teszi a tengerszinti magasságot nullának.",
		},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "… a polgári repülés biztonsága elleni jogellenes cselekmények leküzdéséről.",
		answers: [
			{ text: "A Tokiói Egyezmény (1963)", correct: false},
			{ text: " A Montreali Egyezmény (1971)", correct: true},
			{ text: " A Római Egyezmény (1952)", correct: false},
			{ text: "A Hágai Egyezmény (1970)", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Milyen javításokat és karbantartásokat végezhet el a repülőgép-vezető a repülőgépen?",
		answers: [
			{ text: "A repülőgép-vezető képesítésétől függ, hogy milyen javításokat és karbantartásokat végezhet el.", correct: false},
			{ text: "Apróbb javításokat és karbantartásokat végezhet.", correct: false},
			{ text: "Nem végezhet el semmilyen javítást és karbantartást.", correct: false},
			{ text: "Olyan javításokat és karbantartásokat végezhet el, melyre a repülőgép üzemben tartója erre felhatalmazza.", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Melyik nemzetközi szervezettel egyezteti az ICAO a fertőző betegségek légijárművek útján történő terjedésének megakadályozását szolgáló intézkedéseket?",
		answers: [
			{ text: "Az ILO-val.", correct: false},
			{ text: " Az ITU-val.", correct: false},
			{ text: "A WHO-val.", correct: true},
			{ text: " A WMO-val.", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Egy adott repülőgépre a légiüzemeltetési utasítás …",
		answers: [
			{ text: "akkor érvényes, ha azt a karbantartó szervezet jóváhagyta és az üzemben tartó folyamatosan frissíti.", correct: false},
			{ text: "akkor érvényes, ha azt a légügyi hatóság jóváhagyta és az üzemben tartó folyamatosan frissíti.", correct: true},
			{ text: " akkor érvényes, ha azt az üzemben tartó jóváhagyta és folyamatosan frissíti.", correct: false},
			{ text: " minden körülmények között érvényes.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Mit tartalmaznak a Nemzetközi Polgári Repülésről szóló Chicagói Egyezmény Függelékei (Annex-ek)?",
		answers: [
			{ text: "Szabványokat és Ajánlott gyakorlatokat.", correct: true},
			{ text: "Ajánlásokat.", correct: false},
			{ text: "Nemzetközi Szabályokat.", correct: false},
			{ text: "Nemzetközi Szabványokat.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A Szerződő Államok elismerik, hogy minden Államot a területe fölötti légtérben … illeti meg.",
		answers: [
			{ text: " szabad és korlátlan repülési lehetőség", correct: false},
			{ text: " rendelkezési jog", correct: false},
			{ text: " teljes és kizárólagos szuverenitás", correct: true},
			{ text: " a légiközlekedésben elsőbbség", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "… alsó határa a C osztályú ellenőrzött légtér alsó határa, felső határa pedig FL660, valamint oldalhatára megegyezik az államhatárral.",
		answers: [
			{ text: " Budapest CTR", correct: false},
			{ text: "Budapest FIR", correct: false},
			{ text: "Budapest TMA", correct: false},
			{ text: "Budapest CTA", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A Nemzetközi Polgári Repülési Szervezet (ICAO) szabványokat és ajánlott gyakorlatokat állapít meg … számára.",
		answers: [
			{ text: " a légiforgalmi szolgálatok", correct: false},
			{ text: "a Szerződő Államok", correct: true},
			{ text: "a légiközlekedési hatóságok", correct: false},
			{ text: "a tagországok", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Az üzemképesség tanúsító nyilatkozatot …",
		answers: [
			{ text: "a karbantartó szervezet adja ki, melyben igazolja, hogy a megrendelt karbantartási vagy javítási munkákat elvégezték.", correct: true},
			{ text: " a légügyi hatóság adja ki, melyben igazolja, hogy a repülőgép üzemképes.", correct: false},
			{ text: " az üzemben tartó adja ki, melyben igazolja, hogy a repülés előtt a repülőgépet a feladat végrehajtására alkalmasnak találta.", correct: false},
			{ text: " a gyártó adja ki, melyben igazolja, hogy a repülőgép a végrehajtott javítások elvégzése után üzemképes.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben nyári időszámítás esetén helyi idő szerint 16 óra UTC-ben kifejezve …",
		answers: [
			{ text: "1800.", correct: false},
			{ text: "1500.", correct: false},
			{ text: "1400.", correct: true},
			{ text: "1700.", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Az alábbiak közül mely dokumentumot nem kötelező a repülőgép fedélzetén tartani?",
		answers: [
			{ text: "A súly- és súlypontmérési jegyzőkönyvet.", correct: false},
			{ text: "A repülési naplót.", correct: true},
			{ text: " A légialkalmassági bizonyítványt.", correct: false},
			{ text: " A lajstromozási bizonyítványt.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelent a pályával párhuzamos, két oldalra szimmetrikusan elrendezett páros számú vonalakból álló küszöb jelzés előtt a pályára közepére felfestett, a pályairányba mutató egymás utáni két nyíl?",
		answers: [
			{ text: " A pályairány jelölése.", correct: false},
			{ text: " Ideiglenesen áthelyezett küszöb.", correct: false},
			{ text: " Földet érési terület jelzése.", correct: false},
			{ text: "Állandó jelleggel áthelyezett küszöb.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Melyek azok a légterek, ahova a belépés csak benyújtott repülési tervvel lehetséges?",
		answers: [
			{ text: " F- és G-osztályú légterek.", correct: false},
			{ text: "C- és F-osztályú légterek.", correct: false},
			{ text: " C- és D-osztályú légterek.", correct: true},
			{ text: "C-, D- és F-osztályú légterek.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülőtér mozgási területén …",
		answers: [
			{ text: "közlekedő repülőgépek előzést csak akkor hajthatnak végre, ha a másik repülőgép áll.", correct: false},
			{ text: "előzés esetén az előzés alatt álló repülőgépnek van elsőbbsége és az előzést végző repülőgépnek kell megfelelő oldaltávolságot tartania a másik repülőgéptől.", correct: true},
			{ text: " közlekedő repülőgépeknek előzést végrehajtani tilos.", correct: false},
			{ text: " előzés esetén az előzés alatt álló repülőgép köteles megállni, és utat engedni az előző repülőgép számára, de az előzést végző repülőgépnek megfelelő oldaltávolságot kell tartania a másik repülőgéptől.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben téli időszámítás esetén UTC 1100 helyi idő szerint …",
		answers: [
			{ text: "9 óra.", correct: false},
			{ text: "10 óra.", correct: false},
			{ text: "12 óra.", correct: true},
			{ text: "13 óra.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A fel- és leszállás eseteit kivéve VFR repülés nem végezhető városok, települések sűrűn lakott területei és szabadban tartózkodó embercsoportok felett, a légijárműtől mint középponttól számított … sugarú körön belül található legmagasabb akadály felett … alacsonyabban.",
		answers: [
			{ text: "600 m – 1000 lábnál", correct: true},
			{ text: "600 m – 300 lábnál", correct: false},
			{ text: "300 m – 1000 lábnál", correct: false},
			{ text: "300 m – 500 lábnál", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A jelmezőben vízszintesen elhelyezett, egy sárga átlóval ellátott vörös négyszög azt jelenti, hogy …",
		answers: [
			{ text: " a légijárműveknek a fel- és leszállásra csak a futópályát, gurulásra csak a gurulóutakat lehet használni.", correct: false},
			{ text: "csak a fel- és leszállásokat kell a futópályán végrehajtani, egyéb manőverek végrehajtására a futópályák és a gurulóutak használata nem kötelező.", correct: false},
			{ text: " a munkaterület rossz állapota, vagy bármely más ok miatt különleges óvatosságot kell tanúsítani a megközelítés, vagy leszállás közben.", correct: true},
			{ text: "a leszállás tilos, és a tilalom tartós jellegű.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "… idegen légijárművel a földön harmadik személynek okozott kárért való felelősségről.",
		answers: [
			{ text: " A Montreali Egyezmény (1971)", correct: false},
			{ text: "A Hágai Egyezmény (1970)", correct: false},
			{ text: "A Tokiói Egyezmény (1963)", correct: false},
			{ text: "A Római Egyezmény (1952)", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest TMA és CTR … légtér.",
		answers: [
			{ text: "D-osztályú", correct: false},
			{ text: "C-osztályú", correct: true},
			{ text: "F-osztályú", correct: false},
			{ text: "G-osztályú", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Magyarország területén polgári motoros repülőgéppel fel- és leszállni …",
		answers: [
			{ text: "repülőtéren, nem nyilvános fel- és leszállóhelyen, lakott területen kívül vagy saját tulajdonú ingatlanon szabad.", correct: false},
			{ text: "kizárólag repülőtéren szabad.", correct: false},
			{ text: " baleseti segélynyújtás érdekében szükséges fel- és leszállás, valamint kényszerhelyzetben szükségessé vált leszállás kivételével kizárólag repülőtéren vagy nem nyilvános fel- és leszállóhelyen szabad.", correct: true},
			{ text: " repülőtéren, nem nyilvános fel- és leszállóhelyen vagy lakott területen kívül szabad.", correct: false},
			
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "A repülés megkezdése előtt milyen esetben kell ellenőrizni a repülőgép-vezetőnek, hogy a repülőgép alkalmas-e a feladat biztonságos végrehajtására?",
		answers: [
			{ text: "Nem kell ellenőriznie, ha a szerelő ezt megtette.", correct: false},
			{ text: "Nem kell ellenőriznie, ha a hangármester ezt megtette.", correct: false},
			{ text: "Csak akkor végezhet ilyen ellenőrzést, ha a repülőgép üzemben tartója erre felhatalmazta.", correct: false},
			{ text: "Minden esetben ellenőriznie kell.", correct: true},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "A légialkalmassági bizonyítvány …",
		answers: [
			{ text: "igazolja a légijármű a magyar állami légijármű-lajstromba való bejegyzését.", correct: false},
			{ text: "igazolja a légijármű légiközlekedésre való alkalmasságát.", correct: true},
			{ text: "igazolja, hogy a megrendelt karbantartási vagy javítási munkákat a karbantartó szervezet elvégezte.", correct: false},
			{ text: "igazolja, hogy az üzemben tartó repülőgépek üzemben tartására jogosult.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "… csak a BUD Liszt Ferenc repülőtérre történő leszállás esetén vagy külön engedély birtokában szabad berepülni.",
		answers: [
			{ text: "Budapest CTR-be és Budapest TMA-ba", correct: false},
			{ text: "Budapest CTR-be", correct: false},
			{ text: "Budapest TMA-ba", correct: false},
			{ text: "Budapest CTR-ben kijelölt végső megközelítési területre", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A légiforgalomban közlekedő valamennyi légijárművön fel kell tüntetni …",
		answers: [
			{ text: "állami hovatartozását.", correct: false},
			{ text: "felségjelét és lajstromjelét.", correct: true},
			{ text: "bázisrepülőterének nevét.", correct: false},
			{ text: "a tulajdonos nevét és címét.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A jelmezőben vízszintesen elhelyezett fehér színű kettős kereszt azt jelzi, hogy …",
		answers: [
			{ text: "a leszállás tilos, és a tilalom tartós jellegű.", correct: false},
			{ text: "csak a fel- és leszállásokat kell a futópályán végrehajtani, egyéb manőverek végrehajtására a futópályák és a gurulóutak használata nem kötelező.", correct: false},
			{ text: " a repülőteret vitorlázógépek használják, és hogy vitorlázó repülés folyik.", correct: true},
			{ text: "a légijárműveknek a fel- és leszállásra csak a futópályát, gurulásra csak a gurulóutakat lehet használni.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Magyarország területén nyilvános repülőtéren …",
		answers: [
			{ text: "fel- és leszállást polgári repülőgép csak a tulajdonos, illetve az üzemben tartó engedélye alapján végezhet, de a kényszerhelyzetben lévő repülőgép ez alól kivételt képez.", correct: false},
			{ text: "fel- és leszállást polgári repülőgép csak a tulajdonos, illetve az üzemben tartó engedélye alapján végezhet.", correct: false},
			{ text: "fel- és leszállást bármelyik polgári repülőgép végezhet.", correct: true},
			{ text: "leszállást polgári repülőgép csak kényszerhelyzetben végezhet.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Ha a repülőtér mozgási területén két repülőgép összetartó irányon közeledik egymáshoz, akkor …",
		answers: [
			{ text: "mindkettő köteles megállni, vagy ahol ez lehetséges, mindketten jobbra kitérni, kellő oldaltávolságot tartva.", correct: false},
			{ text: "annak kell elsőbbséget adnia, amelyik a másik repülőgépet jobbról látja.", correct: true},
			{ text: "a kisebb felszállótömegű repülőgépnek utat kell engednie a nagyobb felszállótömegű repülőgép számára.", correct: false},
			{ text: " a helyzetből adódó legcélszerűbb irányban kell kikerülniük egymást.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor a “DOF/” jelölést akkor kell alkalmazni, ha …",
		answers: [
			{ text: "az indulás napja nem esik egybe a repülési terv benyújtásának napjával.", correct: true},
			{ text: "a légijármű lajstromjele, eltér a korábban feltüntetett légijármű azonosító jeltől.", correct: false},
			{ text: "az indulási repülőtér megjelölésekor korábban ZZZZ-t használtak.", correct: false},
			{ text: "a rendeltetési repülőtér megjelölésekor korábban ZZZZ-t használtak.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A veszélybe került légijárművek számára nyújtandó segítség formáit és eljárásait az ICAO … tartalmazza.",
		answers: [
			{ text: "Annex 11 és 12", correct: true},
			{ text: "Annex 10", correct: false},
			{ text: "Annex 8", correct: false},
			{ text: "Annex 9", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "A magyar polgári repülőgépek jogszabályban meghatározott felületén kötelezően szerepeltetni kell a …",
		answers: [
			{ text: "a felségjelét és a lajstromjelét.", correct: true},
			{ text: "a lajstromjelét.", correct: false},
			{ text: "felségjelét.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A rádiókapcsolat megszakadásakor mit jelez a repülőgép számára a toronyból leadott szaggatott vörös fényjelzés?",
		answers: [
			{ text: "A repülőtér nem biztonságos, ne szálljon le!", correct: true},
			{ text: "Leszállási parancs.", correct: false},
			{ text: "Polgári repülőtér.", correct: false},
			{ text: "Katonai repülőtér.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen a minimális megengedett látástávolságig lehet üzemelni G-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "8 km FL100-on és felette, 5 km FL100 alatt.", correct: false},
			{ text: " 8 km.", correct: false},
			{ text: "5 km.", correct: false},
			{ text: "5 km, de ha a repülést olyan sebességgel hajtják végre, ami lehetővé teszi az egyéb forgalom vagy akadályok időbeni észlelését és az összeütközés elkerülését, akkor 1500 m.", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Légijármű fedélzeti rádió-berendezést … szabad üzemeltetni.",
		answers: [
			{ text: "rádió amatőr vizsgával.", correct: false},
			{ text: "a légitársaság engedélyével.", correct: false},
			{ text: "nemzetközi rádiótávbeszélő-kezelői engedéllyel.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben az F-osztályú légterek … nem ellenőrzött légterek, valamint a TIZ-ek.",
		answers: [
			{ text: "a 4500 láb AMSL és 9000 láb AMSL közötti", correct: false},
			{ text: "a 4000 láb alatti", correct: false},
			{ text: "a 4000 láb AMSL és 9500 láb AMSL közötti", correct: true},
			{ text: "a 4500 láb alatti", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben …",
		answers: [
			{ text: " a C-, a D- és az F-osztályú légtér ellenőrzött.", correct: false},
			{ text: "a C- és a D-osztályú légtér ellenőrzött.", correct: false},
			{ text: "csak a D-osztályú légtér ellenőrzött.", correct: false},
			{ text: "csak a C-osztályú légtér ellenőrzött.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Melyik állítás hamis?",
		answers: [
			{ text: "Ha egy légijármű vezetőjének tudomására jut, hogy egy másik légijármű kényszerleszállást hajt végre, köteles annak utat engedni.", correct: false},
			{ text: " A munkaterületen guruló légijárműnek utat kell engednie a felszálló, vagy felszállni készülő légijármű számára.", correct: false},
			{ text: "A levegőben lévő, földön vagy vízen üzemelő légijárműveknek utat kell adniuk a leszálló légijárművek számára.", correct: false},
			{ text: "A hajtómű nélküli légijármű köteles utat adni valamennyi levegőnél nehezebb, működő hajtóművel repülő légijárműnek.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Kinek a felelősége az elkülönítés ellenőrzött légtérben?",
		answers: [
			{ text: "A repülőgép-vezető felelőssége.", correct: false},
			{ text: "A repüléstájékoztató szolgálat vagy a légiforgalmi irányító szolgálat felelőssége.", correct: false},
			{ text: "A légiforgalmi irányító szolgálat felelőssége.", correct: true},
			{ text: " A repüléstájékoztató szolgálat felelőssége.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A légijárművek leszállási és kiszolgálási díjait … állapítja meg és … hagyja jóvá.",
		answers: [
			{ text: "a repülőtér üzembentartója – az adóhatóság", correct: false},
			{ text: "a repülőtér tulajdonosa – a pénzügyminiszter", correct: false},
			{ text: "a repülőtér üzembentartója – légiközlekedési hatóság", correct: true},
			{ text: "mma repülőtér tulajdonosa – az ICAOm", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "… Magyarország államhatára által körbezárt terület, amely a földfelszíntől a légiközlekedésre igénybe vehető legnagyobb magasságig terjed.",
		answers: [
			{ text: "Budapest CTA", correct: false},
			{ text: " Budapest TMA", correct: false},
			{ text: "Budapest CTR", correct: false},
			{ text: "Budapest FIR", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A repülésbiztonságot érintő tájékoztatások, amelyek azonnali szétosztást igényelnek …",
		answers: [
			{ text: "az AIC-k.", correct: false},
			{ text: "az AIP kiegészítések.", correct: false},
			{ text: "a NOTAM-ok", correct: true},
			{ text: "az AIRAC AIP módosítások.", correct: false},
		],
		hint:"Az AIRAC, AIC, NOTAM és AIP a légiközlekedésben használt fontos dokumentumok rövidítései:<br><br><br><br>AIRAC: Az 'Aeronautical Information Regulation And Control' rövidítése, amely egy olyan rendszer, amely az éves légiközlekedési ütemtervet és az ahhoz kapcsolódó információkat határozza meg. Az AIRAC rendszer lényege, hogy az információk meghatározott időszakokban (általában 28 naponta) frissülnek, így a pilóták és a légiforgalmi irányítók mindig az aktuális információkra támaszkodhatnak a repülés tervezése során.<br><br>AIC: Az 'Aeronautical Information Circular' rövidítése, amely egy olyan dokumentum, amelyben az illetékes hatóságok fontos információkat és ajánlásokat közölnek a légiközlekedéssel kapcsolatosan. Az AIC-ek széles körű témákat fedhetnek le, például a légi navigációs segédletek karbantartását, a repülőtéri biztonsági eljárásokat, a repülőgép-karbantartást és egyéb szabályozásokat.<br><br>AIP: Az 'Aeronautical Information Publication' rövidítése, amely egy hivatalos dokumentum, amely tartalmazza az ország légiforgalmi szolgálatának összes légi térképét, légi navigációs segédleteit, légiközlekedési szabályozásait, légiközlekedési eljárásait, repülőterek adatait és más fontos információkat. Az AIP egy adott ország vagy régió hivatalos légiközlekedési dokumentuma, amelyet a pilóták és a légiforgalmi irányítók használnak a repülési tevékenységek tervezése és végrehajtása során. Az AIP frissítése a AIRAC rendszer része.<br><br>A NOTAM-ok (Notice to Airmen) különböző típusú értesítéseket tartalmazhatnak, amelyek között a legfontosabbak a következők:<br><br><br><br>FDC NOTAM: Az Amerikai Szövetségi Légügyi Hatóság (FAA) által kiadott értesítések, amelyek az ország egész területén érvényesek. Ezek általában olyan információkat tartalmaznak, mint a légi tér zárlatai, a katonai gyakorlatok és az átmeneti légi navigációs segédletek működési zavarai.<br><br>NOTAM-D: Az USA-beli katonai légi erők által kiadott értesítések, amelyek a repülőterek és a katonai légtér működésével kapcsolatos információkat tartalmaznak.<br><br>NOTAMN: Nemzeti fontosságú értesítések, amelyek a nemzetbiztonságra és a repülésbiztonságra vonatkozó fontos információkat tartalmazzák.<br><br>NOTAMR: Az átmeneti változásokkal, zárlatokkal vagy korlátozásokkal kapcsolatos értesítések, amelyek csak egy bizonyos időszakban érvényesek.<br><br>NOTAMC: A hosszú távú vagy állandó változásokkal kapcsolatos értesítések, amelyek hosszabb ideig érvényesek és általában az állandó repülőterek és légi navigációs segédletek működésével kapcsolatos információkat tartalmazzák.<br><br>SNOWTAM: A hóeltakarítással és síkosságmentesítéssel kapcsolatos értesítések, amelyek a téli időszakban fontosak lehetnek a repülőgépek biztonságos működése szempontjából.<br><br>ASHTAM: A vulkáni hamu elterjedésével kapcsolatos értesítések, amelyek akkor jelentek meg, amikor a vulkánkitörések vagy más geológiai események hatással lehetnek a repülés biztonságára.<br><br>Ezenkívül vannak egyéb speciális NOTAM-ok, amelyek egy adott ország vagy régió légiközlekedési hatóságai által adhatók ki a repülési biztonság és hatékonyság érdekében.",

	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Az ICAO tagállamok számára kötelező, hogy …",
		answers: [
			{ text: "a Tanácsnak minden szabványtól való eltérést bejelentsenek.", correct: true},
			{ text: "bejelentsék az általuk kiadott hajózó személyzeti szakszolgálati engedélyeket a Főtitkárnak.", correct: false},
			{ text: "engedélyt kérjenek a nemzetközi légijáratok indítására a Tanácstól.", correct: false},
			{ text: "a nemzeti szabályok minden változását bejelentsék az ICAO-nak.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A légialkalmassági bizonyítványra vonatkozó szabványokat az ICAO … tartalmazza.",
		answers: [
			{ text: "Annex 6", correct: false},
			{ text: " Annex 8", correct: true},
			{ text: "Annex 12", correct: false},
			{ text: "Annex 10", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben a TIZ-ek … légterek.",
		answers: [
			{ text: "F-osztályú", correct: true},
			{ text: "G- vagy F-osztályú", correct: false},
			{ text: "C-osztályú", correct: false},
			{ text: "C- vagy D-osztályú", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben a G-osztályú légterek … nem ellenőrzött, valamint a vitorlázó és műrepülő légterek.",
		answers: [
			{ text: "a 4000 láb AMSL és 9500 láb AMSL közötti", correct: false},
			{ text: "a 4000 láb alatti", correct: true},
			{ text: "a 4500 láb alatti", correct: false},
			{ text: "a 4500 láb AMSL és 9000 láb AMSL közötti", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mitől függ az átváltási szint magassága?",
		answers: [
			{ text: " Az aktuális légiforgalomtól.", correct: false},
			{ text: "A QNH-tól.", correct: true},
			{ text: "A magasságmérő-beállítástól.", correct: false},
			{ text: "Az átváltási magasságtól.", correct: false},
		],
		hint:"Az 'FL' a 'Flight Level' rövidítése, amelyet repülés közben az altiméter beállítása során használnak a magasság mérésére. Az FL átváltási szint az a magasság, amelyen a pilóták a légiközlekedési irányítóval kommunikálnak a magasságváltozásról, amikor az adott terület fölött repülnek.<br><br>A QNH az 'altiméter beállítási érték tengerszintre átszámítva' kifejezés rövidítése (angolul: 'altimeter setting to QNH'). Ez az érték az, amit az altiméter beállításakor használnak a repülőgép magasságának meghatározásához a tengerszinti szinten. A QNH az aktuális légköri nyomást jelenti a tengerszinten, és az altiméter beállítása erre az értékre teszi a tengerszinti magasságot nullának.",
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Ha egy légijármű C-módú transzponderrel van felszerelve, akkor …",
		answers: [
			{ text: " transzponderét C-módban kell üzemeltetnie, ha az ATS egységek kifejezetten más utasítást nem adnak.", correct: true},
			{ text: "transzponderét minden esetben C-módban kell üzemeltetnie.", correct: false},
			{ text: "transzponderét minden esetben C-módban kell üzemeltetnie.", correct: false},
			
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor az “RMK/” karaktereket … rovatba kell beírni, ha ez szükséges.",
		answers: [
			{ text: " a “További követelményekre fenntartott hely”", correct: false},
			{ text: "a “Megjegyzések”", correct: false},
			{ text: "az “Egyéb tájékoztatások”", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A repülőtéri leszállási és kiszolgálási díjakat …",
		answers: [
			{ text: "az utazási irodák hirdetik ki.", correct: false},
			{ text: "a repülőtéri hirdető táblán függesztik ki.", correct: false},
			{ text: "az AIP-ben teszik közzé.", correct: true},
			{ text: "a Magyar Közlönyben hirdetik ki.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelent a gurulóútra festett, a gurulóutat keresztező szaggatott vonal?",
		answers: [
			{ text: "Futópálya előtti várópont.", correct: false},
			{ text: "Útelágazás következik.", correct: false},
			{ text: "Közbenső várópont.", correct: true},
			{ text: " A kiszolgáló személyzet földi járművei számára felfestett figyelmeztető jelzés.", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Felszállás előtt ellenőrizheti-e a repülőgép-vezető, hogy az időszakos karbantartást elvégezték-e a repülőgépen?",
		answers: [
			{ text: "Kötelessége ellenőrizni.", correct: true},
			{ text: " Igen, ha az üzemben tartó erre felhatalmazza.", correct: false},
			{ text: "Nem, ez az üzemben tartó feladata.", correct: false},
			{ text: "Nem, ez a szerelő feladata.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Melyek azok a légterek, ahova a belépés csak kétoldalú rádió-összeköttetéssel lehetséges?",
		answers: [
			{ text: "C- és D-osztályú légterek.", correct: false},
			{ text: "F- és G-osztályú légterek.", correct: false},
			{ text: "C- és F-osztályú légterek.", correct: false},
			{ text: "C-, D- és F-osztályú légterek.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Kényszerhelyzet esetén a transzponderrel rendelkező légijárműnek a … kódot kell beállítani.",
		answers: [
			{ text: "7000-es", correct: false},
			{ text: "7500-as", correct: false},
			{ text: " 7600-as", correct: false},
			{ text: " 7700-as", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "… történő belépést csak kijelölt belépőpontok felett szabad végrehajtani?",
		answers: [
			{ text: "A CTR-be és a TMA-ba", correct: false},
			{ text: " A TMA-ba", correct: false},
			{ text: "A CTR-be", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A magyar légtér az országhatár által körbezárt terület feletti légtérnek … terjedő része.",
		answers: [
			{ text: "a Kármán-vonalig", correct: false},
			{ text: "a légi közlekedés számára fizikailag igénybe vehető magasságig", correct: true},
			{ text: "FL660 magasságig", correct: false},
			{ text: "a sztratopauzáig.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben levegőből benyújtott repülési tervet legalább … az ellenőrzött légtér határának számított elérése előtt kell benyújtani.",
		answers: [
			{ text: "30 perccel", correct: false},
			{ text: "10 perccel", correct: true},
			{ text: "1 órával", correct: false},
			{ text: "3 perccel", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A Chicagói Egyezmény Függelékeiben található Szabványok …",
		answers: [
			{ text: "kötelezőek valamennyi, a nemzetközi légiközlekedésben résztvevő légitársaság számára.", correct: false},
			{ text: " kötelezőek azon Szerződő Államok számára, amelyek nem jelentettek be eltérést a Tanácshoz.", correct: true},
			{ text: "útmutatók és segédeszközök a Szerződő Államok számára saját jogszabályaik megalkotásához.", correct: false},
			{ text: "az összes tagállam számára kötelezettséget jelentenek.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A gurulást a gurulóútra festett …",
		answers: [
			{ text: "középvonaltól balra kell végrehajtani, hogy a szembetartó forgalom számára is biztosított legyen az elhaladás.", correct: false},
			{ text: "középvonaltól jobbra kell végrehajtani, hogy a szembetartó forgalom számára is biztosított legyen az elhaladás.", correct: false},
			{ text: "középvonalon kell végrehajtani.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor a repülőgép üzemben tartójának nevét … rovatba, … karaktereket követően kell beírni.",
		answers: [
			{ text: " a “Megjegyzések” – a “REG/”", correct: false},
			{ text: "az “Egyéb tájékoztatások” – az “OPR/”", correct: true},
			{ text: "a “Megjegyzések” – az “OPR/”", correct: false},
			{ text: "az “Egyéb tájékoztatások” – a “REG/”", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Előzés esetén …",
		answers: [
			{ text: "az előzést végző légijárműnek jobbra történő kitéréssel kell előznie, míg az előzés alatt álló légijármű köteles biztosítani az előző légijármű útját.", correct: false},
			{ text: "az előzés alatt álló légijármű jogosult a változatlan irányú repülésre, míg az előzést végző légijárműnek jobbra történő kitéréssel kell biztosítania a másik légijármű útját.", correct: true},
			{ text: " az előzés alatt álló légijármű jogosult a változatlan irányú repülésre, míg az előzést végző légijárműnek balra történő kitéréssel kell biztosítania a másik légijármű útját.", correct: false},
			{ text: "az előzést végző légijárműnek balra történő kitéréssel kell előznie, míg az előzés alatt álló légijármű köteles biztosítani az előző légijármű útját.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A légiforgalmi tanácsadó szolgálat, valamint a repüléstájékoztató szolgálat az összeütközések elkerülése vonatkozásában ugyanazt a biztonsági fokot nyújtja és ugyanazokat a felelősségeket vállalja, mint a légiforgalmi irányító szolgálat.",
		answers: [
			{ text: " Hamis.", correct: true},
			{ text: "Igaz.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Amennyiben a repülőgép vezetőjének az ATS nem adott egyedi kód beállítására utasítást, nem ellenőrzött légtérben a … kódot kell beállítani.",
		answers: [
			{ text: "7000-es", correct: true},
			{ text: "7500-as", correct: false},
			{ text: "7700-as", correct: false},
			{ text: "7600-as", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Az alábbiak közül mely dokumentumot nem kötelező a repülőgép fedélzetén tartani?",
		answers: [
			{ text: "A rádióengedélyt.", correct: false},
			{ text: "A törzslapokat.", correct: true},
			{ text: "Harmadik fél részére felelősségbiztosítási bizonyítvány és a biztosítási fedezet igazolása.", correct: false},
			{ text: " Az üzemképesség tanúsító nyilatkozatot.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A légijárművek lajstromozására vonatkozó szabályokat az ICAO … tartalmazza.",
		answers: [
			{ text: "Annex 5", correct: false},
			{ text: "Annex 8", correct: false},
			{ text: "Annex 6", correct: false},
			{ text: "Annex 7", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mi a felhőktől való minimális megengedett távolság C- és D-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "Felhőkön kívül, folyamatos talaj vagy vízfelszín látással kell repülni.", correct: false},
			{ text: "Vízszintes irányban 1500 m, függőleges irányban 300 m.", correct: true},
			{ text: "Vízszintes irányban 1000 láb, függőleges irányban 1500 m.", correct: false},
			{ text: "Vízszintes irányban 1500 láb, függőleges irányban 300 láb.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mi a felhőktől való minimális megengedett távolság F-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "Vízszintes irányban 1500 m, függőleges irányban 300 m.", correct: true},
			{ text: "Vízszintes irányban 1000 láb, függőleges irányban 1500 m.", correct: false},
			{ text: "Felhőkön kívül, folyamatos talaj vagy vízfelszín látással kell repülni.", correct: false},
			{ text: "Vízszintes irányban 1500 láb, függőleges irányban 300 láb.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen magasságtartományban kell QNH szerint és egyben a magassági lépcsőzést betartva repülni Budapest FIR-ben?",
		answers: [
			{ text: "QNH 3500 láb és QNH 9500 láb között.", correct: false},
			{ text: "QNH 3000 láb és QNH 9000 láb között.", correct: false},
			{ text: "QNH 3500 láb és QNH 9000 láb között.", correct: true},
			{ text: "QNH 3000 láb és QNH 9500 láb között.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mi a felhőktől való minimális megengedett távolság F-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "Vízszintes irányban 1500 m, függőleges irányban 300 m.", correct: true},
			{ text: "Vízszintes irányban 1000 láb, függőleges irányban 1500 m.", correct: false},
			{ text: "Felhőkön kívül, folyamatos talaj vagy vízfelszín látással kell repülni.", correct: false},
			{ text: "Vízszintes irányban 1500 láb, függőleges irányban 300 láb.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen magasságtartományban kell QNH szerint és egyben a magassági lépcsőzést betartva repülni Budapest FIR-ben?",
		answers: [
			{ text: "QNH 3500 láb és QNH 9500 láb között.", correct: false},
			{ text: "QNH 3000 láb és QNH 9000 láb között.", correct: false},
			{ text: "QNH 3500 láb és QNH 9000 láb között.", correct: true},
			{ text: "QNH 3000 láb és QNH 9500 láb között.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest FIR-ben … QNH 9000 láb.",
		answers: [
			{ text: "az átváltási magasság", correct: true},
			{ text: "az átváltási szint", correct: false},
			{ text: "az átváltási réteg", correct: false},
		],
		hint:"Az 'FL' a 'Flight Level' rövidítése, amelyet repülés közben az altiméter beállítása során használnak a magasság mérésére. Az FL átváltási szint az a magasság, amelyen a pilóták a légiközlekedési irányítóval kommunikálnak a magasságváltozásról, amikor az adott terület fölött repülnek.<br><br>A QNH az 'altiméter beállítási érték tengerszintre átszámítva' kifejezés rövidítése (angolul: 'altimeter setting to QNH'). Ez az érték az, amit az altiméter beállításakor használnak a repülőgép magasságának meghatározásához a tengerszinti szinten. A QNH az aktuális légköri nyomást jelenti a tengerszinten, és az altiméter beállítása erre az értékre teszi a tengerszinti magasságot nullának.",
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor mit kell írni a “Turbulencia kategória” mezőbe, ha a repülőgép engedélyezett maximális felszállósúlya 7000 kg vagy annál kisebb?",
		answers: [
			{ text: "H betűt.", correct: false},
			{ text: "M betűt.", correct: false},
			{ text: "L betűt.", correct: true},
			{ text: "S betűt.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Az alábbiak közül melyik nem ellenőrzött légtér?",
		answers: [
			{ text: "TMA.", correct: false},
			{ text: "TIZ.", correct: false},
			{ text: "CTR.", correct: false},
			{ text: "CTA.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mikor kell üzemeltetni a villogót (összeütközést jelző fényt)?",
		answers: [
			{ text: "Minden napszakban motorindítás előtt kell felkapcsolni, és motorleállítás után kell lekapcsolni.", correct: true},
			{ text: "Amikor a légiforgalmi irányító erre utasítást ad.", correct: false},
			{ text: "A hivatalos napnyugtától napkeltéig.", correct: false},
			{ text: "Minden napszakban a pályára guruláskor kell felkapcsolni és a pálya elhagyásakor kell lekapcsolni.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Amikor két hajtóművel felszerelt repülőgép szembetartó, vagy közel szembetartó irányon közeledik egymáshoz és összeütközési veszély áll fenn, akkor …",
		answers: [
			{ text: " az a repülőgép köteles kitérni, amelyik a másikat jobbról látja, hacsak nem vontat, mert akkor neki van elsőbbsége.", correct: false},
			{ text: "mindkettő köteles irányától jobbra kitérni.", correct: true},
			{ text: "mindkettő köteles irányától balra kitérni.", correct: false},
			{ text: "az légijármű jogosult a változatlan irányú repülésre, amelyik a másikat jobbról látja, hacsak a másik repülőgép nem vontat, mert akkor annak van elsőbbsége.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A rádió-összeköttetés megszakadása esetén a transzponderrel rendelkező légijárműnek a … kódot kell beállítani.",
		answers: [
			{ text: "7000-es", correct: false},
			{ text: "7700-as", correct: false},
			{ text: "7600-as", correct: true},
			{ text: "7500-as", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A repülőbalesetek és repülőesemények kivizsgálását az az állam köteles kivizsgálni, ahol …",
		answers: [
			{ text: "a légijármű üzemben tartója lakik.", correct: false},
			{ text: "az esemény történt.", correct: true},
			{ text: "a kivizsgálásra megfelelően felkészültek.", correct: false},
			{ text: "a légijárművet lajstromba vették.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "… a légijárművek fedélzetén elkövetett bűncselekményekről és egyéb cselekményekről szól.",
		answers: [
			{ text: "A Tokiói Egyezmény (1963)", correct: true},
			{ text: "A Római Egyezmény (1952)", correct: false},
			{ text: "A Hágai Egyezmény (1970)", correct: false},
			{ text: "A Montreali Egyezmény (1971)", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelent a futópálya küszöb után felfestett fehér színű haránt irányban futó kereszt?",
		answers: [
			{ text: "A földet érést csak a haránt irányban futó kereszt után szabad végrehajtani.", correct: false},
			{ text: "A repülőtér vonatkoztatási pontját.", correct: false},
			{ text: "A földet érést a haránt irányban futó keresztre kell végrehajtani.", correct: false},
			{ text: "A futópálya nem használható fel- és leszállásra, valamint gurulásra sem.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "… esete áll fenn, ha a légijárművet súlyos és közvetlen veszély fenyegeti és azonnali segítségre van szüksége. Ilyen helyzetben háromszor egymás után a … kifejezést kell leadni a rádión.",
		answers: [
			{ text: "Kényszerhelyzet – MAYDAY", correct: true},
			{ text: "Kényszerhelyzet – PAN PAN", correct: false},
			{ text: "Sürgősség – PAN PAN", correct: false},
			{ text: "Sürgősség – MAYDAY", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Amikor két hajtóművel felszerelt repülőgép összetartó irányon és hozzávetőleg azonos magasságon repül, akkor …",
		answers: [
			{ text: "mindkettő köteles irányától balra kitérni.", correct: false},
			{ text: "az légijármű jogosult a változatlan irányú repülésre, amelyik a másikat jobbról látja, hacsak a másik repülőgép nem vontat, mert akkor annak van elsőbbsége.", correct: false},
			{ text: "mindkettő köteles irányától jobbra kitérni.", correct: false},
			{ text: "az a repülőgép köteles kitérni, amelyik a másikat jobbról látja, hacsak nem vontat, mert akkor neki van elsőbbsége.", correct: true},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "A magyar polgári légijárművek lajstromjele …",
		answers: [
			{ text: "a piros-fehér-zöld színjelzés és a HA- betűcsoport.", correct: false},
			{ text: "a HA- betűcsoport.", correct: false},
			{ text: "a HA- betűcsoportot követő számokból vagy betűkből álló jelzéscsoport.", correct: false},
			{ text: "a HA- betűcsoport és az azt követő számokból vagy betűkből álló jelzés.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelent a gurulóútra festett, a gurulóutat keresztező 2 folyamatos és 2 szaggatott vonal?",
		answers: [
			{ text: "Közbenső várópont.", correct: false},
			{ text: "Futópálya előtti várópont.", correct: true},
			{ text: "Útelágazás következik.", correct: false},
			{ text: "A kiszolgáló személyzet földi járművei számára felfestett jelzés.", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "A magyar polgári légijárművek felségjele …",
		answers: [
			{ text: "a HA- betűcsoportot követő számokból vagy betűkből álló jelzés.", correct: false},
			{ text: "a HA- betűcsoport.", correct: false},
			{ text: "a piros-fehér-zöld színjelzés.", correct: false},
			{ text: "a piros-fehér-zöld színjelzés és a HA- betűcsoport.", correct: true},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Mi a teendő, ha felszállás előtt azt tapasztaljuk, hogy a légijármű felség vagy lajstromjele, sérült és hiányos.",
		answers: [
			{ text: "A felszállást el kell halasztani és jelezni kell a szabálytalanságot a repülőgép üzemben tartójának.", correct: true},
			{ text: "Ezzel a repülőgép-vezetőnek nem kell foglalkoznia, mert ez az üzemben tartó feladata.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen magasságig kell a magassági lépcsőzés szerint repülni Budapest FIR-ben?",
		answers: [
			{ text: "FL660-ig.", correct: true},
			{ text: "QNH 9500 lábig.", correct: false},
			{ text: "QNH 9000 lábig.", correct: false},
			{ text: "QNH 3500 lábig.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Az ICAO egyik fő célkitűzése, hogy …",
		answers: [
			{ text: "engedélyezze a nemzetközi légitársaságok által alkalmazott viteldíjakat.", correct: false},
			{ text: "elősegítse a repülés biztonságát a nemzetközi légiközlekedésben.", correct: true},
			{ text: "elősegítse az új nemzetközi légitársaságok alapítását.", correct: false},
			{ text: "engedélyezze a légitársaságok számára a sugárhajtású repülőgépek üzembe állítását.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A légiforgalomban résztvevő légijárművet … által kiadott, illetőleg érvényesített légialkalmassági bizonyítvánnyal kell ellátni.",
		answers: [
			{ text: "az ICAO", correct: false},
			{ text: "a JAA", correct: false},
			{ text: "az EASA", correct: false},
			{ text: "a lajstromozó állam", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Az oktatóval együtt végzett kiképző repülés közben … a parancsnok.",
		answers: [
			{ text: "a főpilóta", correct: false},
			{ text: "a növendék pilóta", correct: false},
			{ text: "az oktató pilóta", correct: true},
			{ text: "a növendék és az oktató pilóta együttesen", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelent a pályával párhuzamos, két oldalra szimmetrikusan elrendezett páros számú vonalakból álló küszöb jelzés előtt a pályára közepére felfestett egymás utáni két haránt irányban futó kereszt?",
		answers: [
			{ text: "A futópálya nem használható fel- és leszállásra, valamint gurulásra sem.", correct: false},
			{ text: "Állandó jelleggel áthelyezett küszöb. A küszöb előtti terület semmilyen feladatra nem vehető igénybe.", correct: true},
			{ text: "Földet érési terület jelzése.", correct: false},
			{ text: "Ideiglenesen áthelyezett küszöb.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Ha a repülőtér mozgási területén két repülőgép egymással szembetartó, vagy közel szembetartó irányon közeledik egymáshoz, akkor …",
		answers: [
			{ text: "annak kell elsőbbséget adnia, amelyik a másik repülőgépet jobbról látja.", correct: false},
			{ text: "a kisebb felszállótömegű repülőgépnek utat kell engednie a nagyobb felszállótömegű repülőgép számára.", correct: false},
			{ text: "mindkettő köteles megállni, vagy ahol ez lehetséges, mindketten jobbra kitérni, kellő oldaltávolságot tartva.", correct: true},
			{ text: "a helyzetből adódó legcélszerűbb irányban kell kikerülniük egymást.", correct: false},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "Az alábbiak közül mely dokumentumot kötelező a repülőgép fedélzetén tartani?",
		answers: [
			{ text: "A bulletineket.", correct: false},
			{ text: "A karbantartási programot.", correct: false},
			{ text: "Az üzemidő naplókat.", correct: false},
			{ text: "A légiüzemeltetési utasítást.", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Magyarország területén nem nyilvános repülőtéren …",
		answers: [
			{ text: "fel- és leszállást bármelyik polgári repülőgép végezhet.", correct: false},
			{ text: "fel- és leszállást polgári repülőgép csak a tulajdonos, illetve az üzemben tartó engedélye alapján végezhet.", correct: false},
			{ text: "fel- és leszállást polgári repülőgép csak a tulajdonos, illetve az üzemben tartó engedélye alapján végezhet, de a kényszerhelyzetben szükségessé vált leszálláshoz nem kell ilyen engedély.", correct: true},
			{ text: "leszállást polgári repülőgép csak vészhelyzetben végezhet.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen színűek a gurulóutak burkolati jelei?",
		answers: [
			{ text: "Vörös.", correct: false},
			{ text: "Sárga.", correct: true},
			{ text: "Zöld.", correct: false},
			{ text: "Fehér", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen minimális megengedett látástávolságig lehet üzemelni C- és D-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "5 km, de ha a repülést olyan sebességgel hajtják végre, ami lehetővé teszi az egyéb forgalom vagy akadályok időbeni észlelését és az összeütközés elkerülését, akkor 1500 m.", correct: false},
			{ text: "5 km.", correct: false},
			{ text: "8 km.", correct: false},
			{ text: "8 km FL100-on és felette, 5 km FL100 alatt.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A … a földfelszín feletti meghatározott határtól felfelé terjedő, ellenőrzött légtér.",
		answers: [
			{ text: "TIZ.", correct: false},
			{ text: "CTA.", correct: true},
			{ text: "CTR.", correct: false},
			{ text: "FIR.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A korlátozott légtérbe való …",
		answers: [
			{ text: "belépés csak kényszerhelyzetben lévő légijárművek számára engedélyezhető.", correct: false},
			{ text: "belépéshez a légiforgalmi irányító egység ad előzetes engedélyt.", correct: false},
			{ text: "belépés a polgári légiforgalom számára minden körülmények között tilos.", correct: false},
			{ text: "belépéshez a légiközlekedési hatóság ad előzetes hatósági engedélyt.", correct: true},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A szakszolgálati engedély érvényességét …",
		answers: [
			{ text: "bejegyzett jogosításra és nyelvi kiterjesztésre, valamint az orvosi minősítésre meghatározott érvényességi idő együttesen határozza meg.", correct: true},
			{ text: "a bejegyzett jogosításra meghatározott érvényességi idő határozza meg.", correct: false},
			{ text: "a nyelvi kiterjesztésre meghatározott érvényességi idő határozza meg.", correct: false},
			{ text: "az orvosi minősítésre meghatározott érvényességi idő.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "Magyarországon a légiközlekedési baleseteket és súlyos repülőeseményeket … vizsgálja.",
		answers: [
			{ text: "az EASA", correct: false},
			{ text: "a KBSZ", correct: true},
			{ text: "a rendőrség", correct: false},
			{ text: "az NFM KH LH", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Az alábbiak közül miről nem kell tájékoztatni az AFIS egységet?",
		answers: [
			{ text: "Motorindítási szándékról.", correct: true},
			{ text: "A felszállás utáni tervezett útvonalról.", correct: false},
			{ text: "Felszálláshoz történő gurulási szándékról.", correct: false},
			{ text: "A futópályára való gurulási szándékról.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A légiforgalom biztonságos végrehajtásához szükséges üzemviteli fontosságú, lényeges és tartós tájékoztatások alapvető dokumentuma …",
		answers: [
			{ text: "az AIP.", correct: true},
			{ text: "az AIC.", correct: false},
			{ text: "az AIRAC.", correct: false},
			{ text: "a NOTAM.", correct: false},
		],
		hint:"Az AIRAC, AIC, NOTAM és AIP a légiközlekedésben használt fontos dokumentumok rövidítései:<br><br><br><br>AIRAC: Az 'Aeronautical Information Regulation And Control' rövidítése, amely egy olyan rendszer, amely az éves légiközlekedési ütemtervet és az ahhoz kapcsolódó információkat határozza meg. Az AIRAC rendszer lényege, hogy az információk meghatározott időszakokban (általában 28 naponta) frissülnek, így a pilóták és a légiforgalmi irányítók mindig az aktuális információkra támaszkodhatnak a repülés tervezése során.<br><br>AIC: Az 'Aeronautical Information Circular' rövidítése, amely egy olyan dokumentum, amelyben az illetékes hatóságok fontos információkat és ajánlásokat közölnek a légiközlekedéssel kapcsolatosan. Az AIC-ek széles körű témákat fedhetnek le, például a légi navigációs segédletek karbantartását, a repülőtéri biztonsági eljárásokat, a repülőgép-karbantartást és egyéb szabályozásokat.<br><br>AIP: Az 'Aeronautical Information Publication' rövidítése, amely egy hivatalos dokumentum, amely tartalmazza az ország légiforgalmi szolgálatának összes légi térképét, légi navigációs segédleteit, légiközlekedési szabályozásait, légiközlekedési eljárásait, repülőterek adatait és más fontos információkat. Az AIP egy adott ország vagy régió hivatalos légiközlekedési dokumentuma, amelyet a pilóták és a légiforgalmi irányítók használnak a repülési tevékenységek tervezése és végrehajtása során. Az AIP frissítése a AIRAC rendszer része.<br><br>A NOTAM-ok (Notice to Airmen) különböző típusú értesítéseket tartalmazhatnak, amelyek között a legfontosabbak a következők:<br><br><br><br>FDC NOTAM: Az Amerikai Szövetségi Légügyi Hatóság (FAA) által kiadott értesítések, amelyek az ország egész területén érvényesek. Ezek általában olyan információkat tartalmaznak, mint a légi tér zárlatai, a katonai gyakorlatok és az átmeneti légi navigációs segédletek működési zavarai.<br><br>NOTAM-D: Az USA-beli katonai légi erők által kiadott értesítések, amelyek a repülőterek és a katonai légtér működésével kapcsolatos információkat tartalmaznak.<br><br>NOTAMN: Nemzeti fontosságú értesítések, amelyek a nemzetbiztonságra és a repülésbiztonságra vonatkozó fontos információkat tartalmazzák.<br><br>NOTAMR: Az átmeneti változásokkal, zárlatokkal vagy korlátozásokkal kapcsolatos értesítések, amelyek csak egy bizonyos időszakban érvényesek.<br><br>NOTAMC: A hosszú távú vagy állandó változásokkal kapcsolatos értesítések, amelyek hosszabb ideig érvényesek és általában az állandó repülőterek és légi navigációs segédletek működésével kapcsolatos információkat tartalmazzák.<br><br>SNOWTAM: A hóeltakarítással és síkosságmentesítéssel kapcsolatos értesítések, amelyek a téli időszakban fontosak lehetnek a repülőgépek biztonságos működése szempontjából.<br><br>ASHTAM: A vulkáni hamu elterjedésével kapcsolatos értesítések, amelyek akkor jelentek meg, amikor a vulkánkitörések vagy más geológiai események hatással lehetnek a repülés biztonságára.<br><br>Ezenkívül vannak egyéb speciális NOTAM-ok, amelyek egy adott ország vagy régió légiközlekedési hatóságai által adhatók ki a repülési biztonság és hatékonyság érdekében.",
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor hogyan kell beírni a TAS-ban számított 100 csomós utazósebességet az “Utazósebesség” mezőbe?",
		answers: [
			{ text: "C0100.", correct: false},
			{ text: "N0100.", correct: true},
			{ text: "T0100.", correct: false},
			{ text: "K0100.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Ha két, vagy több hajtóművel felszerelt repülőgép közeledik leszállás céljából valamelyik repülőtérhez, akkor …",
		answers: [
			{ text: "az a repülőgép köteles utat adni, amelyik a másikat jobbról látja.", correct: false},
			{ text: "az a repülőgép köteles utat adni, amelyik a másikat balról látja.", correct: false},
			{ text: "a nagyobb magasságon lévő repülőgép köteles utat adni az alacsonyabb magasságon lévő repülőgépnek.", correct: true},
			{ text: "a kisebb felszállótömegű repülőgép köteles utat adni a nagyobb felszállótömegű repülőgépnek.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Kinek a felelősége az elkülönítés nem ellenőrzött légtérben?",
		answers: [
			{ text: "A repülőgép-vezető felelőssége.", correct: true},
			{ text: "A repüléstájékoztató szolgálat vagy a légiforgalmi irányító szolgálat felelőssége.", correct: false},
			{ text: "A légiforgalmi irányító szolgálat felelőssége.", correct: false},
			{ text: "A repüléstájékoztató szolgálat felelőssége.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelez a 10 mp-kénti időközökben kilőtt világító lövedéksorozat, amely szétrobbanásakor vörös és zöld fényt mutat, vagy csillagokat szór?",
		answers: [
			{ text: "A repülőtér nem biztonságos, ne szálljon le!", correct: false},
			{ text: "Minden eddigi utasítás érvénytelen, egyelőre ne szálljon le!", correct: false},
			{ text: "Adjon utat más légijárműnek és folytassa a körözést!", correct: false},
			{ text: "A légijármű korlátozott, tiltott, vagy veszélyes légtérben halad, vagy ahhoz közeledik.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Városok, települések sűrűn lakott területein kívül, ahol nem tartózkodnak embercsoportok a szabadban, a fel- és leszállás eseteit kivéve VFR repülés esetén a minimális megengedett magasság … föld vagy vízfelszín felett; kivéve a különleges engedélyhez kötött repüléseket.",
		answers: [
			{ text: "500 m", correct: false},
			{ text: "300 láb", correct: false},
			{ text: "300 m", correct: false},
			{ text: "500 láb", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mi a felhőktől való minimális megengedett távolság G-osztályú légtérben a látvarepülési szabályok szerint?",
		answers: [
			{ text: "Vízszintes irányban 1000 láb, függőleges irányban 1500 m.", correct: false},
			{ text: "Vízszintes irányban 1500 m, függőleges irányban 1500 m.", correct: false},
			{ text: "Vízszintes irányban 1500 m, függőleges irányban 300 m.", correct: false},
			{ text: "Felhőkön kívül, folyamatos talaj vagy vízfelszín látással kell repülni.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Elfogás esetén mit jelez az elfogó repülőgép, ha lassú szintrepülésben bal fordulót hajt végre?",
		answers: [
			{ text: "Tovább haladhat.", correct: false},
			{ text: "Nyugtázást jelent.", correct: false},
			{ text: "Kövessen!", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A Budapest FIR-ben egy 3500 lábon közlekedő repülőgépnek …",
		answers: [
			{ text: "QNH szerint és a magassági lépcsőzést betartva kell repülni.", correct: true},
			{ text: "QNH szerint kell repülni és magassági lépcsőzést nem kell alkalmazni.", correct: false},
			{ text: "QNE szerint és a magassági lépcsőzést betartva kell repülni.", correct: false},
			{ text: "QNE szerint kell repülni és magassági lépcsőzést nem kell alkalmazni.", correct: false},
		],
		hint:"Budapest FIR-ben a QNH átváltási bagasság 9000 láb.<br><br>Ha az átváltási magasságon vagy alatta repülünk, az azt jelenti, hogy a tengerszint feletti magasságot a helyi légköri nyomás (QNH) szerint kell meghatározni, mivel a légkörben a nyomás változik a tengerszinttől eltérő magasságokban. Az átváltási magasság alatt az QNH nyomásreferencia-rendszer a legpontosabb nyomásreferencia-rendszer a magasság meghatározásához, mivel az a valós légköri nyomás értéket adja meg. Ha ezt az értéket beállítjuk a magasságmérőben, akkor pontosan tudjuk meghatározni a repülőgép tengerszint feletti magasságát.",
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Egy baleset túlélőinek milyen föld-levegő látjelet kell kirakni a kutató-mentő egység számára, ha orvosi segítségre van szükség?",
		answers: [
			{ text: "X betűt.", correct: true},
			{ text: "N betűt.", correct: false},
			{ text: "V betűt.", correct: false},
			{ text: "Y betűt.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A forgalmi körön közlekedő repülőgépnek elsőbbsége van a forgalmi körre besoroló repülőgéppel szemben.", correct: true},
			{ text: "A forgalmi körön közlekedő kisebb felszállótömegű repülőgépnek utat kell engedni a forgalmi körre besoroló nagyobb felszállótömegű repülőgépnek.", correct: false},
			{ text: "A forgalmi körön közlekedő repülőgépnek utat kell engedni a forgalmi körre besoroló repülőgépnek.", correct: false},
			{ text: "A forgalmi körön közlekedő repülőgépnek utat kell engedni a forgalmi körre besoroló repülőgépnek, ha azt jobbról látja.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A rádiókapcsolat megszakadásakor mit jelez a repülőgép számára a toronyból leadott folyamatos vörös fényjelzés?",
		answers: [
			{ text: "Minden eddigi utasítás érvénytelen, egyelőre ne szálljon le!", correct: false},
			{ text: "Leszállási parancs.", correct: false},
			{ text: "A repülőtér nem biztonságos, ne szálljon le!", correct: false},
			{ text: "Adjon utat más légijárműnek és folytassa a körözést!", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest Liszt Ferenc repülőtér megközelítése során a végső egyenesen a repülőgép madárral ütközik. Van-e ilyenkor teendője a repülőgép-vezetőnek?",
		answers: [
			{ text: "Azonnal értesíteni kell rádión az ATC-t az ütközésről, majd leszállás után a kitöltött Bird Strike Report nyomtatványt továbbítani kell a jelentések kezelését ellátó szervnek, valamint a repülőgép üzemben tartóját is értesíteni kell.", correct: true},
			{ text: "Azonnal értesíteni kell az ATC-t az ütközésről, további teendő nincs.", correct: false},
			{ text: "Csak akkor van jelentési kötelezettsége, ha a repülőgép megsérült.", correct: false},
			{ text: "Ilyenkor csak a repülőgép üzemben tartójának érdemes jelezni a madárral való ütközést, de nem kötelező.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A kiképzés alatt álló légijármű-vezető növendéket az önálló repülési feladatának teljesítése közben parancsnoknak kell tekinteni.",
		answers: [
			{ text: "Igaz.", correct: true},
			{ text: "Hamis.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Milyen színűek a futópályák burkolati jelei?",
		answers: [
			{ text: "Zöld.", correct: false},
			{ text: "Vörös.", correct: false},
			{ text: "Fehér.", correct: true},
			{ text: "Sárga.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Elfogás esetén mit jelez az elfogó repülőgép, ha 90°-os, vagy annál nagyobb mértékű emelkedő fordulóból álló hirtelen manővert hajt végre?",
		answers: [
			{ text: "Kövessen!", correct: false},
			{ text: "Nyugtázást jelent.", correct: false},
			{ text: "Tovább haladhat.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Jogellenes beavatkozás esetén a transzponderrel rendelkező légijárműnek a … kódot kell beállítani.",
		answers: [
			{ text: "7500-as", correct: true},
			{ text: "7600-as", correct: false},
			{ text: "7000-es", correct: false},
			{ text: "7700-as", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A magyar légtér az országhatár által körbezárt terület feletti légtérnek …",
		answers: [
			{ text: "az aerodinamikai felhajtóerőt biztosító légkör felső határáig terjedő része.", correct: false},
			{ text: "a légiközlekedés számára fizikailag igénybevehető magasságig terjedő része.", correct: true},
			{ text: "a mesterséges égitestek orbitális pályáját meg nem haladó magasságig terjedő része.", correct: false},
			{ text: "a Kármán vonalig terjedő része.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "A nemzetközi és belföldi repüléseket érintő adminisztratív jellegű tájékoztatásokat tartalmazó AIS kiadvány …",
		answers: [
			{ text: "az AIRAC.", correct: false},
			{ text: "az AIC.", correct: true},
			{ text: "az AIP.", correct: false},
			{ text: "a NOTAM.", correct: false},
		],
		hint:"Az AIRAC, AIC, NOTAM és AIP a légiközlekedésben használt fontos dokumentumok rövidítései:<br><br><br><br>AIRAC: Az 'Aeronautical Information Regulation And Control' rövidítése, amely egy olyan rendszer, amely az éves légiközlekedési ütemtervet és az ahhoz kapcsolódó információkat határozza meg. Az AIRAC rendszer lényege, hogy az információk meghatározott időszakokban (általában 28 naponta) frissülnek, így a pilóták és a légiforgalmi irányítók mindig az aktuális információkra támaszkodhatnak a repülés tervezése során.<br><br>AIC: Az 'Aeronautical Information Circular' rövidítése, amely egy olyan dokumentum, amelyben az illetékes hatóságok fontos információkat és ajánlásokat közölnek a légiközlekedéssel kapcsolatosan. Az AIC-ek széles körű témákat fedhetnek le, például a légi navigációs segédletek karbantartását, a repülőtéri biztonsági eljárásokat, a repülőgép-karbantartást és egyéb szabályozásokat.<br><br>AIP: Az 'Aeronautical Information Publication' rövidítése, amely egy hivatalos dokumentum, amely tartalmazza az ország légiforgalmi szolgálatának összes légi térképét, légi navigációs segédleteit, légiközlekedési szabályozásait, légiközlekedési eljárásait, repülőterek adatait és más fontos információkat. Az AIP egy adott ország vagy régió hivatalos légiközlekedési dokumentuma, amelyet a pilóták és a légiforgalmi irányítók használnak a repülési tevékenységek tervezése és végrehajtása során. Az AIP frissítése a AIRAC rendszer része.<br><br>A NOTAM-ok (Notice to Airmen) különböző típusú értesítéseket tartalmazhatnak, amelyek között a legfontosabbak a következők:<br><br><br><br>FDC NOTAM: Az Amerikai Szövetségi Légügyi Hatóság (FAA) által kiadott értesítések, amelyek az ország egész területén érvényesek. Ezek általában olyan információkat tartalmaznak, mint a légi tér zárlatai, a katonai gyakorlatok és az átmeneti légi navigációs segédletek működési zavarai.<br><br>NOTAM-D: Az USA-beli katonai légi erők által kiadott értesítések, amelyek a repülőterek és a katonai légtér működésével kapcsolatos információkat tartalmaznak.<br><br>NOTAMN: Nemzeti fontosságú értesítések, amelyek a nemzetbiztonságra és a repülésbiztonságra vonatkozó fontos információkat tartalmazzák.<br><br>NOTAMR: Az átmeneti változásokkal, zárlatokkal vagy korlátozásokkal kapcsolatos értesítések, amelyek csak egy bizonyos időszakban érvényesek.<br><br>NOTAMC: A hosszú távú vagy állandó változásokkal kapcsolatos értesítések, amelyek hosszabb ideig érvényesek és általában az állandó repülőterek és légi navigációs segédletek működésével kapcsolatos információkat tartalmazzák.<br><br>SNOWTAM: A hóeltakarítással és síkosságmentesítéssel kapcsolatos értesítések, amelyek a téli időszakban fontosak lehetnek a repülőgépek biztonságos működése szempontjából.<br><br>ASHTAM: A vulkáni hamu elterjedésével kapcsolatos értesítések, amelyek akkor jelentek meg, amikor a vulkánkitörések vagy más geológiai események hatással lehetnek a repülés biztonságára.<br><br>Ezenkívül vannak egyéb speciális NOTAM-ok, amelyek egy adott ország vagy régió légiközlekedési hatóságai által adhatók ki a repülési biztonság és hatékonyság érdekében.",
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A … repülőtér körül a föld felszínétől egy meghatározott felső határig terjedő ellenőrzött légtér.",
		answers: [
			{ text: "CTA.", correct: false},
			{ text: "CTR.", correct: true},
			{ text: "TMA.", correct: false},
			{ text: "TIZ.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor hogyan kell beírni a QNH szerinti 4500 láb utazómagasságot a “Szint” mezőbe?",
		answers: [
			{ text: "F045.", correct: false},
			{ text: "S045.", correct: false},
			{ text: "A045.", correct: true},
			{ text: "M045.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "… a légijárművek jogellenes hatalomba kerítésének leküzdéséről szól.",
		answers: [
			{ text: "A Tokiói Egyezmény (1963)", correct: false},
			{ text: "A Római Egyezmény (1952)", correct: false},
			{ text: "A Montreali Egyezmény (1971)", correct: false},
			{ text: "A Hágai Egyezmény (1970)", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A korlátozott légtérben …",
		answers: [
			{ text: "minden esetben katonai repülésirányító szolgálat működik.", correct: false},
			{ text: "minden esetben repülés tájékoztató szolgálat működik.", correct: false},
			{ text: "polgári légiforgalom semmilyen körülmények között nem közlekedhet.", correct: false},
			{ text: " azokat a szabályokat kell alkalmazni, amelyek a vele közös részt alkotó légtérre vonatkoznak.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mit jelent a gurulóút mellett lévő táblán, fekete mezőben látható “A” betű és sárga mezőben látható “C” betű, jobbra mutató nyíllal?",
		answers: [
			{ text: " Egyenesen továbbhaladva az “A” gurulóútra behajtani tilos, kötelező haladási irány jobbra a “C” gurulóúton.", correct: false},
			{ text: "Egyenesen továbbhaladva az “A” gurulóút következik, jobbra pedig a “C”.", correct: false},
			{ text: "Az “A” betű a helyszínt jelöli, a sárga tábla pedig útjelző tábla a “C” gurulóút felé.", correct: true},
			{ text: "Az “A” betű a helyszínt jelöli, a sárga tábla pedig a kötelező haladási irányt.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mikor kell üzemeltetni a navigációs fényeket?",
		answers: [
			{ text: "Amikor a légiforgalmi irányító erre utasítást ad.", correct: false},
			{ text: "Minden napszakban a pályára guruláskor kell felkapcsolni és a pálya elhagyásakor kell lekapcsolni.", correct: false},
			{ text: "A hivatalos napnyugtától napkeltéig.", correct: true},
			{ text: "Minden napszakban motorindítás előtt kell felkapcsolni, és motorleállítás után kell lekapcsolni.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Ha Budapest FIR-ben a repülőgép-vezető repülési tervet nyújt be, ha különleges körülmények nem indokolják, akkor azt nem korábban, mint … és nem később, mint … a felszálláshoz történő gurulás megkezdése előtti időpontig kell megtennie.",
		answers: [
			{ text: "24 órával – 10 perccel", correct: false},
			{ text: "3 órával – 30 perccel", correct: false},
			{ text: "10 órával – 3 órával", correct: false},
			{ text: "24 órával – 1 órával", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Budapest Liszt Ferenc repülőtérről történő felszállás során a repülőgép madárral ütközik, és nincs jele annak, hogy az repülést meg kellene szakítani az ütközésből adódó műszaki hiba vagy sérülés miatt. Van-e ilyenkor teendője a repülőgép-vezetőnek?",
		answers: [
			{ text: " Ilyenkor csak a repülőgép üzemben tartójának érdemes jelezni a madárral való ütközést, de nem kötelező.", correct: false},
			{ text: "Azonnal értesíteni kell rádión az ATC-t az ütközésről, majd a rendeltetési repülőtéren kitöltött Bird Strike Report nyomtatványt továbbítani kell a jelentések kezelését ellátó szervnek, valamint a repülőgép üzemben tartóját is értesíteni kell.", correct: true},
			{ text: "Azonnal értesíteni kell az ATC-t az ütközésről és le kell szállni. További teendő nincs.", correct: false},
			{ text: "A repülést ennek ellenére azonnal meg kell szakítani és le kell szállni.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Az időszakosan korlátozott légtérben …",
		answers: [
			{ text: "azon szabályokat kell alkalmazni, amelyek a vele közös részt alkotó légiforgalmi légtérre vonatkoznak.", correct: false},
			{ text: "a polgári légiforgalom minden körülmények között tilos.", correct: false},
			{ text: "minden esetben repülés tájékoztató szolgálat működik.", correct: false},
			{ text: "minden esetben katonai repülésirányító szolgálat működik.", correct: true},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Általános célú VFR repülés esetén a repülési terv kitöltésekor mit kell írni a “Repülés típusa” mezőbe?",
		answers: [
			{ text: "G betűt.", correct: true},
			{ text: "A betűt.", correct: false},
			{ text: "N betűt.", correct: false},
			{ text: "V betűt.", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "… kell kijelölni állami légijárművek által végrehajtott azon repülések számára, amelyek jellegüknél fogva szükségessé teszik a feladatban részt nem vevő légiforgalomtól történő védettséget.",
		answers: [
			{ text: "Tiltott légteret", correct: false},
			{ text: "Veszélyes légteret", correct: false},
			{ text: "Időszakosan korlátozott légteret", correct: true},
			{ text: "Korlátozott légteret.", correct: false},
		]
	},
	{
		subject: "LÉGIKÖZLEKEDÉSI JOGI ALAPISMERETEK",
		question: "… felel a repülési feladat biztonságos végrehajtásáért és a repülési szabályok megtartásáért. Joga és kötelessége a repülés alatt az ezzel kapcsolatban felmerült minden kérdés végső eldöntése.",
		answers: [
			{ text: "A növendék pilóta", correct: false},
			{ text: "A parancsnok", correct: true},
			{ text: "Az oktató pilóta", correct: false},
			{ text: "A főpilóta", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "Mi az átváltási magasság Budapest FIR-ben?",
		answers: [
			{ text: "FL100, FL110 vagy FL120.", correct: false},
			{ text: "FL100.", correct: false},
			{ text: "QNH 9500 láb.", correct: false},
			{ text: "QNH 9000 láb.", correct: true},
		],
		hint:"Ha az átváltási magasságon vagy alatta repülünk, az azt jelenti, hogy a tengerszint feletti magasságot a helyi légköri nyomás (QNH) szerint kell meghatározni, mivel a légkörben a nyomás változik a tengerszinttől eltérő magasságokban. Az átváltási magasság alatt az QNH nyomásreferencia-rendszer a legpontosabb nyomásreferencia-rendszer a magasság meghatározásához, mivel az a valós légköri nyomás értéket adja meg. Ha ezt az értéket beállítjuk a magasságmérőben, akkor pontosan tudjuk meghatározni a repülőgép tengerszint feletti magasságát.<br><br>Az átváltási magasság az a magasság, ahol az adott helyi légköri nyomáshoz tartozó szabványos légköri nyomás (STD) értéke kezdődik. Az átváltási magasság fölött az STD nyomásreferencia-rendszer a megfelelő nyomásreferencia-rendszer a magasság meghatározásához.",
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "A repülési terv kitöltésekor azokat a kényszerhelyzeti és mentőfelszerelésekhez tartozó mezőket kell “X”-szel jelölni, amely felszerelésekkel a repülőgép …",
		answers: [
			{ text: "rendelkezik.", correct: false},
			{ text: "nem rendelkezik.", correct: true},
		]
	},
	{
		subject: "LÉGIALKALMASSÁG ÉS ÜZEMELTETÉS",
		question: "A polgári légijárműnek a két légiközlekedési hatósági vizsgálata közötti folyamatos légialkalmasságának fenntartásáról minden esetben … gondoskodik.",
		answers: [
			{ text: "a karbantartó szervezet.", correct: false},
			{ text: "a légügyi hatóság.", correct: false},
			{ text: "a légijármű tulajdonosa.", correct: false},
			{ text: "a légijármű üzemben tartója.", correct: true},
		]
	},
/*Légijog PDF */
		{
		subject: "LÉGIJOG",
		question: "Kivéve, ha egy légiforgalmi irányító egységtõl erre engedélyt kapott, VFR szerint mûködõ légijármû nem léphet be egy repülõtéri irányító körzetbe, illetve nem hagyhatja el azt, amikor a felhõalap alacsonyabb mint:",
		answers: [
			{ text: "1 500 láb vagy a látástávolság kevesebb mint 5 km", correct: true},
			{ text: "1 000 láb vagy a látástávolság kevesebb mint 5 km", correct: false},
			{ text: "2 000 láb vagy a látástávolság kevesebb mint 5 km", correct: false},
			{ text: "1 000 láb vagy a látástávolság kevesebb mint 8 km", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Az a személy akinek joga a légijármûvel kapcsolatos minden kérdés végsõ eldöntése a repülés idõtartama alatt:",
		answers: [
			{ text: "A légiforgalmi irányító, ha a légijármû ellenõrzött légtérben repül.", correct: false},
			{ text: "A légijármû tulajdonosa", correct: false},
			{ text: "A parancsnok", correct: true},
			{ text: "A légijárat üzembentartója", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "A következõ repülések közül melyiknek van a leginkább elsõbbsége a leszálláshoz?",
		answers: [
			{ text: "Kényszerhelyzetben lévõ légijármû", correct: true},
			{ text: "Katonai légijármû", correct: false},
			{ text: "VIP (Államfõt szállító) légijármû", correct: false},
			{ text: "Egészségügyi légijármû, amelyik azonnali orvosi beavatkozást igénylõ súlyos beteget szállít", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: " G osztályú légtérben 10 000 láb tengerszint feletti magasság felett a VMC minimum értékek az alábbiak:",
		answers: [
			{ text: "1 500 m vízszintes és 1 000 láb függõleges távolság a felhõktõl; 5 km látástávolság", correct: false},
			{ text: "1 tengeri mérföld vízszintes és 1 000 láb fügõleges távolság a felhõktõl; 5 km látás- távolság", correct: false},
			{ text: "1 500 m vízszintes és 1 000 láb függõleges távolság a felhõktõl; 8 km látástávolság", correct: true},
			{ text: "1 tengeri mérföld vízszintes és 1 000 láb függõleges távolság a felhõktõl; 8 km látás- távolság", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Amennyiben egy légijármûvet egy másik légijármûvel elfognak, az elfogott légijármû, ha másodlagos radar fedélzeti válaszjeladóval rendelkezik, hacsak az illetékes légiforgalmi szolgálat egységtõl más utasítást nem kapott, állitsa be az alábbi 'A' módu kódok egyikét:",
		answers: [
			{ text: "7000", correct: true},
			{ text: "7600", correct: false},
			{ text: "7700", correct: false},
			{ text: "7500", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Egy másik légijármû által elfogott légijármûnek azonnal meg kell kísérelnie a rádióösszeköttetés felvételét az elfogó légijármûvel az alábbi frekvenciákon:",
		answers: [
			{ text: "121.5 MHz - 125.5 MHz", correct: false},
			{ text: "121.5 MHz - 243 MHz", correct: true},
			{ text: "121.5 MHz - 282.8 MHz", correct: false},
			{ text: "243 MHz - 125.5 MHz", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik manõvert kell végrehajtania az elfogó légijármûvel, ha annak pilótája azt akarja közölni az elfogott légijármûvel 'AZ ÖN ÚTJA SZABAD' ?",
		answers: [
			{ text: "Szárnybillegtetés kétszer és keresztezõ irányú repülés a másik légijármû elõtt.", correct: false},
			{ text: "Az elfogott légijármû körûlrepülése az óramutató járásával megegyezõ irányban.", correct: false},
			{ text: "Emelkedõben egy 90 fokos vagy nagyobb értékû forduló végrehajtása anélkül, hogy az elfogott légijármû repülési vonalát keresztezné.", correct: true},
			{ text: "Szárnybillegtetés és a navigációs fények villogtatása.", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Mit kell tennie egy repülõtér forgalmi körén repülõ légijármûnek, amely rádióhibát tapasztal, annak jelzésére, hogy emiatt leszállni kényszerül, anélkül azonban, hogy azonnali segítségre lenne szüksége ?",
		answers: [
			{ text: "A leszállófények ismételt be- és kikapcsolása", correct: true},
			{ text: "A leszállófények háromszor való be- és kikapcsolása", correct: false},
			{ text: "A leszállófények négyszer való be- és kikapcsolása", correct: false},
			{ text: "A navigációs fények négyszer való be- és kikapcsolása", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Szaggatott vörös fényjelzés a repülõtéri irányító toronyból a leszálláshoz történõ megközelítés során azt jelenti, hogy:",
		answers: [
			{ text: "A repülõtér ideiglenesen zárva, folytassa a körözést !", correct: false},
			{ text: "Adjon utat egy kényszerhelyzetben lévõ másik légijármûnek !", correct: false},
			{ text: "A repülõtér nem biztonságos, ne szálljon le !", correct: true},
			{ text: "Folytassa a körözést és várjon a további utasításokra !", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "A repülõtér munkaterületén guruló légijármûnek utat kell engednie:",
		answers: [
			{ text: "a forgalmi elõtéren mozgó összes jármûnek a 'FOLLOW ME' gépkocsi kivételével", correct: false},
			{ text: "egyéb összetartó irányon haladó légijármûnek", correct: false},
			{ text: "egyéb jármûveknek és a gyalogosoknak", correct: false},
			{ text: "a felszálló, vagy felszállni készülõ légijármûnek", correct: true},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "'A' légijármû ATC engedély szerint VMC-ben repül egy ellenõrzött légtérben. 'B' légijármû ATC engedély nélkül közeledik, hozzávetõleg azonos magasságon, összetartó irányon. Melyik légijármûnek van elsõbbsége ?",
		answers: [
			{ text: "'B' légijármûnek, ha 'A' légijármûvet balról látja", correct: true},
			{ text: "'A' légijármûnek , ha 'B' légijármûvet jobbról látja", correct: false},
			{ text: "'A' légijármûnek, függetlenûl attól, hogy 'B' légijármû milyen irányból közeledik", correct: false},
			{ text: "'B' légijármûnek, függetlenûl attól, hogy 'A' légijármû milyen irányból közeledik", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Vörös rakéta a levegõben lévõ légijármû részére azt jelenti, hogy:",
		answers: [
			{ text: "Fordúljon vissza és szálljon le.", correct: false},
			{ text: "Minden eddigi utasítás érvénytelen, egyelõre ne szálljon le.", correct: true},
			{ text: "Adjon utat másik légijármûnek és folytassa a körözést.", correct: false},
			{ text: "A repülõtér veszélyes. Ne szálljon le.", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Van-e Magyaroroszágon hatályos törvényi szabályozása a polgári repülésnek?",
		answers: [
			{ text: "Van", correct: true},
			{ text: "Nincs", correct: false},
			{ text: "Elõkészületben", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik nemzetközi szervezet mûködik az ENSZ szakági szervezeteként?",
		answers: [
			{ text: "ICAO", correct: true},
			{ text: "IATA", correct: false},
			{ text: "IFALPA", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik szervezet gyakorolja a közvetlen felügyeletet a polgári repülés felett Magyarországon?",
		answers: [
			{ text: "Közlekedési Fõfelügyelet", correct: false},
			{ text: "Közlekedési és Hírközlési Minisztérium", correct: false},
			{ text: "Polgári Légiközlekedés Biztonsági Szervezet", correct: false},
			{ text: "Polgári Légiközlekedési Hatóság", correct: true},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik nemzetközi egyezmény szól a légijármûvek fedélzetén elkövetett bûncselekményekrõl?",
		answers: [
			{ text: "Tokiói Egyezmény", correct: true},
			{ text: "Hágai Egyezmény", correct: false},
			{ text: "Montreali Egyezmény", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik nemzetközi egyezmény szól a polgári repülés biztonsága elleni jogellenes cselekmények leküzdésérõl?",
		answers: [
			{ text: "Hágai Egyezmény", correct: false},
			{ text: "Montreali Egyezmény", correct: true},
			{ text: "Tokiói Egyezmény", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik nemzetközi egyezmény szól a légijármûvek jogellens hatalomba kerítésének leküzdésérõl?",
		answers: [
			{ text: "Varsói Egyezmény", correct: false},
			{ text: "Chicagói Egyezmény", correct: false},
			{ text: "Hágai Egyezmény", correct: true},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Magyarország tagja-e az ICAO-nak?",
		answers: [
			{ text: "Igen", correct: true},
			{ text: "Nem", correct: false},
			{ text: "Felvétele folyamatban", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik ICAO Annex kötelezi a légijármû üzembentartóját arra, hogy a repülések végrehajtását Repülés Végehajtási Kézikönyvben (Operations Manual) szabályozza?",
		answers: [
			{ text: "Annex 1", correct: false},
			{ text: "Annex 6", correct: true},
			{ text: "Annex 14", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik ICAO Annex szabályozza a személyi alkalmasság (Personal Licensing) kérdéskörét?",
		answers: [
			{ text: "Annex 1", correct: true},
			{ text: "Annex 10", correct: false},
			{ text: "Annex 14", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Melyik ICAO Annex szabályozza a személyi alkalmasság (Personal Licensing) kérdéskörét?",
		answers: [
			{ text: "Annex 2", correct: false},
			{ text: "Annex 8", correct: false},
			{ text: "Annex 14", correct: true},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Lakott területen kívül a VFR-repülések számára a minimális repülési magasság:",
		answers: [
			{ text: "50m ", correct: false},
			{ text: "150m ", correct: true},
			{ text: "300m ", correct: false},
		]
	},
		{
		subject: "LÉGIJOG",
		question: "Lakott terület, ember-, vagy állatcsoport felett a minimális repülési magasság VFR-repülések számára:",
		answers: [
			{ text: "300 m a repülõgép, mint középpont körüli 600 m sugarú körön belüli legmagasabb terepakadály felett úgy, hogy leálló motorral is ki tudjunk siklani a terület fölül.", correct: true},
			{ text: "500 m, de úgy, hogy leálló motorral is ki tudjunk siklani a terület fölül.", correct: false},
			{ text: "600 m a repülõgép, mint középpont körüli 300 m sugarú körön belüli legmagasabb terepakadály felett úgy, hogy leálló motorral is ki tudjunk siklani a terület fölül.", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "A Ferihegyi TMA-t (Ferihegy közelkörzetét) VFR repülés során keresztezhetjük-e?",
		answers: [
			{ text: "Csak különleges engedély birtokában, illetve ferihegyi le-, ill. felszállás esetén.", correct: false},
			{ text: "Igen, de repülési terv leadása kötelezõ a repülés megkezdése elõtt minimum 3 órával.", correct: false},
			{ text: "Igen, de csak érvényes repülési terv és irányítói engedély birtokában, melyet a belépés elõtt minimum 10 perccel meg kell kérni.", correct: true},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "VFR repülés tervezhetõ-e a ferihegyi CTR-en keresztül?",
		answers: [
			{ text: "Csak 2000 feet fölött.", correct: false},
			{ text: "Csak különleges engedély birtokában, illetve ferihegyi fel-, ill. leszállás esetén.", correct: true},
			{ text: "Csak akkor, ha van transzponderünk.", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Mikor állítjuk be a magasságmérõt QNH nyomás szerint?",
		answers: [
			{ text: "Ha az átváltási magasságon, vagy alatta fogunk repülni.", correct: true},
			{ text: "Mindig ezt használjuk.", correct: false},
			{ text: "Ellenõrzött légtéren kívül.", correct: false},
		],
		hint:"Ha az átváltási magasságon vagy alatta repülünk, az azt jelenti, hogy a tengerszint feletti magasságot a helyi légköri nyomás (QNH) szerint kell meghatározni, mivel a légkörben a nyomás változik a tengerszinttől eltérő magasságokban. Az átváltási magasság alatt az QNH nyomásreferencia-rendszer a legpontosabb nyomásreferencia-rendszer a magasság meghatározásához, mivel az a valós légköri nyomás értéket adja meg. Ha ezt az értéket beállítjuk a magasságmérőben, akkor pontosan tudjuk meghatározni a repülőgép tengerszint feletti magasságát.<br><br>A magasságmérőt QNH nyomás szerint általában a repülés előtt, a felszállás előtt állítják be. Az QNH a helyi légköri nyomás értéke a tengerszinten, így a magasságmérő a tengerszint feletti magasságot mutatja, ha az QNH-t állítjuk be. Ha az átváltási magasság alatt repülünk, akkor az QNH a legpontosabb nyomásreferencia-rendszer a magasság meghatározására.<br><br>Az átváltási magasság az a magasság, ahol az adott helyi légköri nyomáshoz tartozó szabványos légköri nyomás (STD) értéke kezdődik. Ha az átváltási magasság fölé emelkedünk, akkor az STD nyomásreferencia-rendszert kell használnunk a magasság meghatározására. Ha az átváltási magasság alatt maradunk, akkor az QNH-t kell használnunk.<br><br>Fontos megjegyezni, hogy ha a légköri nyomás jelentősen változik a repülés során, akkor a magasságmérőt újra kell állítani a megfelelő nyomásreferencia-rendszerre, hogy pontosan tudjuk a repülőgép magasságát a tengerszint felett.<br><br>Az átváltási magasság az a magasság, ahol az adott helyi légköri nyomáshoz tartozó szabványos légköri nyomás (STD) értéke kezdődik. Az átváltási magasság fölött az STD nyomásreferencia-rendszer a megfelelő nyomásreferencia-rendszer a magasság meghatározásához.",
	},
	{
		subject: "LÉGIJOG",
		question: "Mikor állítjuk be a magasságmérõt standard nyomás szerint?",
		answers: [
			{ text: "Ellenõrzött légtérben", correct: false},
			{ text: "Nemzetközi repülések során", correct: false},
			{ text: "Az átváltási szinten és fölötte repülve", correct: true},
		],
		hint:"Ha az átváltási magasságon vagy alatta repülünk, az azt jelenti, hogy a tengerszint feletti magasságot a helyi légköri nyomás (QNH) szerint kell meghatározni, mivel a légkörben a nyomás változik a tengerszinttől eltérő magasságokban. Az átváltási magasság alatt az QNH nyomásreferencia-rendszer a legpontosabb nyomásreferencia-rendszer a magasság meghatározásához, mivel az a valós légköri nyomás értéket adja meg. Ha ezt az értéket beállítjuk a magasságmérőben, akkor pontosan tudjuk meghatározni a repülőgép tengerszint feletti magasságát.<br><br>Az átváltási magasság az a magasság, ahol az adott helyi légköri nyomáshoz tartozó szabványos légköri nyomás (STD) értéke kezdődik. Az átváltási magasság fölött az STD nyomásreferencia-rendszer a megfelelő nyomásreferencia-rendszer a magasság meghatározásához.",
	},
	{
		subject: "LÉGIJOG",
		question: "Mikor fogjuk a transzpondert 'C' üzemmódban mûködtetni? (Magasságkijelzést is ad)",
		answers: [
			{ text: "Ha van, és jól mûködik", correct: true},
			{ text: "Ha adtam le repülési tervet", correct: false},
			{ text: "9500 feet felett, ill. minden ellenõrzött légtérben", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "Magyarországon az ICAO ajánlásának megfelelõen a VFR-repülésekre vonatkozó minimális látástávolság átlagos sebességû repülõgépeknél:",
		answers: [
			{ text: "FL 100 felett 10 km, alatta 3 km", correct: false},
			{ text: "5 km és 10 km között", correct: false},
			{ text: "'C' és 'D' légtérben FL 100 fölött 8 km, alatta 5km, 'F' és 'G' légtérben 5 km", correct: true},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "LÉGIJOG",
		question: "A felhõktöl való minimális távolság VFR-repülés esetén:",
		answers: [
			{ text: "Minden légtérben kötelezõ az 1500 m vízszintes és a 300m függõleges távolságot megtartani", correct: false},
			{ text: "'C','D' és 'F' légtérben 1500 m vízszintes, 300 m függõleges, 'G' légtérben a felhõkön kívül kell tartózkodni, folyamatos talajlátás szükséges", correct: true},
			{ text: "A felhõktõl való kötelezõ távolság a zivatarfelhõkre vonatkozik, mivel azok a repülésre veszélyesek lehetnek", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A folytonossági tételt alkalmazva hogyan változik a levegõ sûrûsége (rho), ha az áramlás keresztmetszete megváltozik (kis sebességû, szubszónikus tartományt és összenyomhatatlan áramló közeget feltételezve)?",
		answers: [
			{ text: "rho1 < rho2", correct: false},
			{ text: "rho1 > rho2", correct: false},
			{ text: "rho1 = rho2", correct: true},
			{ text: "A sûrûség az áramcsõ keresztmetszetének változásától függ.", correct: false},
		],
		hint:"A folytonossági tétel szerint az áramlás állandó tömegáramú, azaz a tömegáram (m) állandó az áramlóközegen belül. Ha az áramlás keresztmetszete megváltozik, akkor az áramlási sebesség (v) és a keresztmetszet (A) arányosan változnak annak érdekében, hogy a tömegáram állandó maradjon.<br><br>Tehát, ha a keresztmetszet csökken, az áramlási sebesség növekszik ahhoz, hogy a tömegáram állandó maradjon, és fordítva, ha a keresztmetszet növekszik, az áramlási sebesség csökken.<br><br>Az összenyomhatatlan áramlóközeg esetén a sűrűség (rho) állandó az áramlóközegben, tehát a folytonossági tétel alkalmazása során nem változik a sűrűség.",
	},
	{
		subject: "AERODINAMIKA",
		question: "Bernoulli egyenlete a következõképpen írható fel: pt = teljes nyomás, ps = statikus nyomás, q = dinamikus nyomás",
		answers: [
			{ text: "pt - q = ps", correct: true},
			{ text: "pt = ps - q", correct: false},
			{ text: "pt + ps = q", correct: false},
			{ text: "pt = q - ps", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A dinamikus (kinetikai) nyomás növekedése a következõ hatással lesz a repülõgép ellenállására (minden más befolyásoló tényezõ állandó marad)",
		answers: [
			{ text: "Nincs hatással az ellenállásra.", correct: false},
			{ text: "Az ellenállás növekszik.", correct: true},
			{ text: "Az ellenállás csökken.", correct: false},
			{ text: "Az ellenállásra csak a föld feletti sebesség gyakorol hatást.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A levegõ nyomásának a növekedése a következõ hatást gyakorolja a repülõgép ellenállására (az állásszög, a külsõ levegõ hõmérséklet és a levegõhöz viszonyított valós sebesség (TAS) állandó):",
		answers: [
			{ text: "Az ellenállás növekszik.", correct: true},
			{ text: "Nincs hatással az ellenállásra.", correct: false},
			{ text: "Az ellenállás csökken.", correct: false},
			{ text: "Az ellenállásra csak a föld feletti sebesség gyakorol hatást.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A repülõgép melyik szerkezeti egységének van a legnagyobb hatása az indukált ellenállásra?",
		answers: [
			{ text: "A hajtómû burkolatnak.", correct: false},
			{ text: "A szárnytõ illesztésének.", correct: false},
			{ text: "A szárnyvégnek.", correct: true},
			{ text: "A futómûnek.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Az interferencia ellenállás a következõ tényezõk eredményeként jön létre:",
		answers: [
			{ text: "A repülõgép szerkezeti elemeinek kölcsönhatásából (pl. szárny/törzs).", correct: true},
			{ text: "A szárny mögötti leáramlás.", correct: false},
			{ text: "Az indukált örvényáram leválása.", correct: false},
			{ text: "Az indukált és a káros ellenállás összeadódása.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Gondoljunk egy áramlásba helyezett pozitív állásszögû ívelt profilra. Hol jön létre a legnagyobb helyi áramlási sebesség?",
		answers: [
			{ text: "A kritikus pontban.", correct: false},
			{ text: "A kritikus pont elõtt.", correct: false},
			{ text: "Az alsó felületen.", correct: false},
			{ text: "A felsõ felületen.", correct: true},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Egy áramlásba helyezett testen ébredõ felhajtóerõ merõleges, az ellenállás pedig párhuzamos",
		answers: [
			{ text: "a profil húrjához viszonyítva.", correct: false},
			{ text: "a szél/levegõáram irányára.", correct: true},
			{ text: "a hossztengelyhez viszonyítva.", correct: false},
			{ text: "a horizonthoz viszonyítva.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A párnahatás a következõképpen befolyásolja a leszállási úthosszat:",
		answers: [
			{ text: "nem változtat rajta", correct: false},
			{ text: "csökkenti", correct: false},
			{ text: "növeli", correct: true},
			{ text: "növeli, ha a fékszárnyak leszálló pozicióban teljesen ki vannak engedve", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A fékszárny kint elrendezéshez tartozó maximális állásszöget összehasonlítva a fékszárny bent elrendezéshez tartozóval, az elõbbi",
		answers: [
			{ text: "kisebb.", correct: true},
			{ text: "nagyobb.", correct: false},
			{ text: "változatlan.", correct: false},
			{ text: "kisebb vagy nagyobb a fékszárny lehajlásától függõen.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "(A kérdéshez használja a 032-2211A mellékletet) A magasság növekedésével a repülõgép szükséges teljesítmény görbéje merre tolódik?",
		answers: [
			{ text: "Minden pont az õt a nulla ponttal összekötõ egyenes mentén jobbra és felfelé mozog ( d ábra szerint)", correct: true},
			{ text: "Vízszintesen jobbra mozog (b ábra szerint)", correct: false},
			{ text: "Függõlegesen felfelé mozog (c ábra szerint)", correct: false},
			{ text: "Függõlegesen lefelé mozog ('a' ábra szerint)", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A maximális vízszintes sebesség akkor jön létre, ha",
		answers: [
			{ text: "A tolóerõ nem növekszik tovább a sebesség növekedésével.", correct: false},
			{ text: "a tolóerõ egyenlõ a minimális légellenállással.", correct: false},
			{ text: "tolóerõ egyenlõ a maximális légellenállással.", correct: false},
			{ text: "a maximális tolóerõ egyenlõ az össz. légellenállással.", correct: true},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Melyik helyes a következõ állítások közül?",
		answers: [
			{ text: "Az indukált ellenállás a sebesség növekedésekor csökken.", correct: true},
			{ text: "Az indukált ellenállás a sebességgel növekszik .", correct: false},
			{ text: "Az indukált ellenállás nem változik a sebességgel.", correct: false},
			{ text: "Az indukált ellenállás az állásszög növekedésével csökken.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Melyik erõ tart egyensúlyt a súlyerõvel egyenes vonalú vízszintes, gyorsulás nélküli repülésben?",
		answers: [
			{ text: "A vonóerõ.", correct: false},
			{ text: "A felhajtóerõ.", correct: true},
			{ text: "A légellenállás.", correct: false},
			{ text: "A felhajtóerõ és a légellenállás eredõje.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Az alább felsorolt helyzetek közül melyikben egyezik meg a szükséges tolóerõ és az ellenállás?",
		answers: [
			{ text: "Állandó sebességû emelkedõ repülés esetén.", correct: false},
			{ text: "Vízszintes , gyorsuló repülésnél.", correct: false},
			{ text: "Vízszintes , állandó sebességû repülésnél.", correct: true},
			{ text: "Állandó sebességû süllyedésnél.", correct: false},
		]
	},
		{
		subject: "AERODINAMIKA",
		question: "Állandó sebességgel végrehajtott vízszintes forduló közben mitõl függ a terhelési többszörös?",
		answers: [
			{ text: "A valóságos repülési sebességtõl és a bedöntési szögtõl.", correct: false},
			{ text: "A fordulósugártól és a bedöntési szögtõl.", correct: false},
			{ text: "Bedöntési szögtõl.", correct: true},
			{ text: "A fordulósugártól és a repülõgép súlyától.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Egy repülõgép indukált ellenállása...",
		answers: [
			{ text: "Csökken a sebesség növekedésével.", correct: true},
			{ text: "Csökken az össztömeg növekedésével.", correct: false},
			{ text: "Független a repülési sebességtõl.", correct: false},
			{ text: "Növekszik a sebesség növekedésével.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A repülõgép indukált ellenállása állandó tömegnél és magasságon mely sebességnél a legmagasabb?",
		answers: [
			{ text: "VS1 (átesési sebesség zárt mechanizációval)", correct: false},
			{ text: "VMO (legnagyobb engedélyezett repülési sebesség)", correct: false},
			{ text: "VSO (átesési sebesség leszállási konfigurációnál)", correct: true},
			{ text: "VA (manõverezési sebesség)", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "A felhajtóerõ tényezõ növelhetõ a fékszárny kibocsátásával vagy..",
		answers: [
			{ text: "az orrkönyû irányú trimmelés csökkentésével.", correct: false},
			{ text: "a TAS sebesség növelésével.", correct: false},
			{ text: "az állásszög növelésével.", correct: true},
			{ text: "a CAS sebesség növelésével.", correct: false},
		]
	},
	{
		subject: "AERODINAMIKA",
		question: "Egy repülõgép súlyponja a közepes aerodinamikai húr 25% -nál található. A 25% a következõt jelenti :",
		answers: [
			{ text: "A közepes aerodinamikai húron a kilépõéltõl számítva.", correct: false},
			{ text: "A közepes aerodinamikai húron a belépõéltõl számítva.", correct: true},
			{ text: "A közepes aerodinamikai húron a vonatkoztatási ponttól számítva.", correct: false},
			{ text: "A repülõgép teljes hosszában a belépõéltõl számítva.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha a repülőtéren álló repülőgép magasságmérőjén a repülőtérre számított QNH-t állítjuk be, akkor a magasságmérő …",
		answers: [
			{ text: "1013,25 hPa alapján mutat.", correct: false},
			{ text: "0-t mutat.", correct: false},
			{ text: "a repülőtér közepes tengerszint feletti magasságát mutatja.", correct: true},
		],
		hint:"A QNH az aktuális tengerszint feletti légköri nyomást jelenti, amelyet a repülőgép magasságának pontos meghatározásához használnak.<br><br>Ha a repülőtéren álló repülőgép magasságmérőjén a repülőtérre számított QNH-t állítjuk be, akkor a magasságmérő a repülőtér tengerszint feletti magasságát fogja mutatni. Ez azért van, mert az QNH a tengerszint feletti nyomás értéke a repülőtér felett, amelyet a magasságmérő használ a magasság kiszámításához. Tehát ha a QNH-t a repülőtérre számítjuk, akkor a magasságmérő azt a magasságot fogja mutatni, amelyen a repülőtér található a tengerszint felett.<br><br>Azonban fontos megjegyezni, hogy ha a repülőgép a repülőtéren kívülre emelkedik, akkor a magasságmérő értéke megváltozik attól függően, hogy milyen magasra emelkedett, mivel a légköri nyomás csökken a tengerszint felett. Ezért fontos, hogy a repülőgép a repülés során rendszeresen állítsa be a magasságmérőt az aktuális légköri nyomásreferencia-rendszerre (QNH, QFE, vagy STD), hogy pontosan tudja, hol tartózkodik a tengerszint felett.",
	},
	{
		subject: "MŰSZERTAN",
		question: "A Pitot-statikus rendszerben uralkodó vákuum normál üzemi értékéről a vákuummérő ad információt.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A behúzható futóműves típusoknál … 20-25%-kal csökken.",
		answers: [
			{ text: "a káros ellenállás", correct: true},
			{ text: "az interferencia ellenállás", correct: false},
			{ text: " az indukált ellenállás", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A CAS sebesség …",
		answers: [
			{ text: "meghatározása a Pitot-statikus rendszer beépítési hibái miatt szükséges.", correct: true},
			{ text: "meghatározása a légkör sűrűségváltozása miatt, navigációs számítások elvégzése érdekében szükséges.", correct: false},
			{ text: "a sebességmérőről leolvasott érték.", correct: false},
			{ text: "meghatározása a levegő összenyomhatóságából származó mérési hiba miatt szükséges.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Ha a szerkezet szilárdságát a biztonsági számmal jellemezzük, melyik szárnyelrendezés adódik a legnagyobb szilárdságúra?",
		answers: [
			{ text: "Bármelyik.", correct: true},
			{ text: "Az felsőszárnyas elrendezés.", correct: false},
			{ text: "A duplaszárnyas elrendezés.", correct: false},
			{ text: "Az alsószárnyas elrendezés.", correct: false},
		]
	},
	{
		subject: "MOTORTAN",
		question: "A korszerű kisrepülőgépeknél használt belsőégésű négyütemű Otto-motorok esetében hengerelrendezés szempontjából melyik a legjellemzőbb?",
		answers: [
			{ text: "Soros elrendezés.", correct: false},
			{ text: "Soros lógó elrendezés.", correct: false},
			{ text: "Csillagmotor.", correct: false},
			{ text: "Boxermotor.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A T-vezérsíkok hátránya, hogy működésüket ronthatják a szárnyról leváló áramlások.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},

		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A kisrepülőgépek számára jellemzően elérhető magasságig (ahol az összenyomhatósági hibát figyelmen kívül hagyhatjuk) az IAS-ban meghatározott átesési sebesség a magasság növekedésével …",
		answers: [
			{ text: "Nem változik.", correct: true},
			{ text: "Csökken.", correct: false},
			{ text: "Nő.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A terhelési többes megmutatja, hogy egységnyi szárnyfelületre mekkora súlyterhelés jut.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A magasságmérő műszerházába a … vezetik be. Érzékelője egy …",
		answers: [
			{ text: "az össznyomást – aneroid szelence.", correct: false},
			{ text: "a statikus nyomást – aneroid szelence.", correct: true},
			{ text: " az össznyomást – Vidi-szelence.", correct: false},
			{ text: " a statikus nyomást – Vidi-szelence.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Milyen manővereket engedélyez az EASA a Utility kategóriájú repülőgépeknél CS-23 szerint?",
		answers: [
			{ text: "Korlátlan műrepülés.", correct: false},
			{ text: "Átesés, forduló 90°-os bedöntésig, dugóhúzó (ha a gyártó engedi), laza nyolcas, gyertya.", correct: true},
			{ text: "Átesés, forduló 60°-os bedöntésig, dugóhúzó (ha a gyártó engedi), laza nyolcas, gyertya.", correct: false},
			{ text: "Átesés, forduló 60°-os bedöntésig, laza nyolcas, gyertya.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Két (teljesen azonos) repülőgép (NEL körülmények között) szélcsendben különböző magasságon azonos föld feletti sebességgel repül vízszintesen. Milyen reláció van a két repülőgép IAS sebessége között?",
		answers: [
			{ text: "Azonos a két repülőgép IAS sebessége.", correct: false},
			{ text: "A magasabban közlekedőnek kisebb az IAS sebessége.", correct: true},
			{ text: "Az alacsonyabban közlekedőnek kiesebb az IAS sebessége.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik féktípusra igaz, hogy a fékbetéteket mindkét oldalról dugattyúk nyomják a féktárcsára.",
		answers: [
			{ text: "Az úszónyerges tárcsafékre.", correct: false},
			{ text: "A fixnyerges tárcsafékre.", correct: true},
			{ text: " Az duplex pofás fékre.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A szárny hajlító igénybevételét repülés közben csökkenti a szárnyban elhelyezett tüzelőanyag és a szárnyra függesztett hajtómű vagy póttartály tömegereje.",
		answers: [
			{ text: "Igaz", correct: true},
			{ text: "Hamis", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A Pitot-csőből származó nyomás …",
		answers: [
			{ text: "a dinamikus és a statikus nyomás összege.", correct: true},
			{ text: "az össznyomás és a dinamikus nyomás különbsége.", correct: false},
			{ text: "a statikus nyomás.", correct: false},
			{ text: "a dinamikus, más néven torlónyomás.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A rugóstag rugalmasságának nevezzük azt, amikor felveszi a rá ható erők által képviselt energiát és azt részben fel is emészti, és így a kirugózás során annak csak egy részét adja vissza.",
		answers: [
			{ text: "Hamis", correct: true},
			{ text: "Igaz", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Melyik ütem zajlik a négyütemű Otto-motorban, amikor a szívó- és a kipufogó szelep is zárva van?",
		answers: [
			{ text: "Kompresszió vagy expanzió", correct: true},
			{ text: "Kipufogás.", correct: false},
			{ text: "Terjeszkedés.", correct: false},
			{ text: "Sűrítés.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A Pitot-statikus-cső nyílásai a levegő áramlásával párhuzamosak.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},
		]
	},
		{
		subject: "SZERKEZETTAN",
		question: "A húzó és a nyomó igénybevételek melyik törzsszerkezet jellemzik?",
		answers: [
			{ text: "A félhéjszerkezetű törzset.", correct: false},
			{ text: " A héjszerkezetű törzset.", correct: false},
			{ text: "A rácsszerkezetű törzset.", correct: true},
		]
	},
	{
		subject: "MOTORTAN",
		question: "A szelephézag …",
		answers: [
			{ text: "kialakításának oka a szelepszár üzem közbeni hőtágulása.", correct: true},
			{ text: "kialakulása a szelepemelő kopásának köszönhető, melyet a karbantartás során meg kell szüntetni.", correct: false},
			{ text: "kialakításának oka a szelepemelő üzemi kopása.", correct: false},
			{ text: "a szelepülés és a szeleptányér közötti távolság.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Két (teljesen azonos) repülőgép (NEL körülmények között) különböző magasságon azonos IAS sebességgel repül vízszintesen. Milyen reláció van a két repülőgép TAS sebessége között?",
		answers: [
			{ text: "Azonos a két repülőgép TAS sebessége.", correct: false},
			{ text: "Az alacsonyabban közlekedőnek nagyobb a TAS sebessége.", correct: false},
			{ text: "A magasabban közlekedőnek nagyobb a TAS sebessége.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Orrkerekes elrendezésnél a súlypont …",
		answers: [
			{ text: "a főfutók előtt van.", correct: true},
			{ text: "a főfutók mögött van.", correct: false},
			{ text: "a főfutókkal egy vonalban van.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ha a repülés során az alternátor meghibásodott és a felkapcsolt fogyasztók konfigurációja 130 W teljesítményt igényel, valamint az akkumulátor kapacitása 30 Ah, akkor kb. mennyi ideig tudja biztosítani az akkumulátor ezt az áramot egy 14 V-os rendszerben?",
		answers: [
			{ text: "Kb. 4,5 órán keresztül.", correct: false},
			{ text: "Kb. 2,8 órán keresztül.", correct: false},
			{ text: "Kb. 3,2 órán keresztül.", correct: true},
			{ text: "Kb. 1,6 órán keresztül.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A TAS sebesség …",
		answers: [
			{ text: "meghatározása a levegő összenyomhatóságából származó mérési hiba miatt szükséges.", correct: false},
			{ text: "meghatározása a Pitot-statikus rendszer beépítési hibái miatt szükséges.", correct: false},
			{ text: "a sebességmérőről leolvasott érték.", correct: false},
			{ text: "meghatározása a légkör sűrűségváltozása miatt, navigációs számítások elvégzése érdekében szükséges.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A sebességmérő sárga tartománya olyan sebességtartományt jelöl, mely … repülhető.",
		answers: [
			{ text: "turbulens időjárásban még", correct: false},
			{ text: "turbulens időjárásban már nem", correct: true},
			{ text: "kitérített fékszárnnyal", correct: false},
			{ text: "kitérített fékszárnnyal már nem", correct: false},
		]
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "A csavaró igénybevételt előidéző nyomaték síkja a rúd …",
		answers: [
			{ text: "tengelyével párhuzamos helyzetű.", correct: false},
			{ text: "tengelyére merőleges helyzetű.", correct: true},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Elektromos mezőben két pont között … megadja, hogy mennyi munkát végez a mező egységnyi töltésen, míg a töltés az egyik pontból elmozdul a másikba.",
		answers: [
			{ text: "a feszültség", correct: true},
			{ text: "az ellenállás", correct: false},
			{ text: "az áramerősség", correct: false},
			{ text: "a kapacitás", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A kompozit repülőgép törzse tipikusan …",
		answers: [
			{ text: "rácsszerkezetű.", correct: false},
			{ text: "félhéjszerkezetű.", correct: false},
			{ text: "tiszta héjszerkezetű.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A behúzható futóműnél melyik üzemállapotban használják fel a futómű tömegerejének és légellenállásának hatását?",
		answers: [
			{ text: "A futómű kibocsátásakor", correct: true},
			{ text: " A futómű behúzásakor.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A hidro-pneumatikus rugóstagokban …",
		answers: [
			{ text: "a csillapítást levegő vagy gáz adja, a rugalmasságot pedig olaj biztosítja.", correct: false},
			{ text: "a csillapítást a víz adja, a rugalmasságot pedig levegő vagy gáz biztosítja.", correct: false},
			{ text: "a csillapítást levegő vagy gáz adja, a rugalmasságot pedig víz biztosítja.", correct: false},
			{ text: "a csillapítást az olaj adja, a rugalmasságot pedig levegő vagy gáz biztosítja.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Ha a súlyponthelyzet a mellső határértéken van, akkor a normál súlyponthelyzethez képest … magassági kormánykitérítés szükséges ahhoz, hogy egy n=2-es terhelési többest létrehozzunk.",
		answers: [
			{ text: "kisebb", correct: false},
			{ text: "nagyobb", correct: true},
			{ text: "ugyanakkora", correct: false},
		]
	},
	{
		subject: "MOTORTAN",
		question: "A kenőolajok viszkozitása a hőmérséklet …",
		answers: [
			{ text: "növekedésével nő.", correct: false},
			{ text: "csökkenésével nő.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik alábbi felsorolás mindegyik elemére igaz, hogy a repülőgép valamelyik mechanizmusának egy részét képezi?",
		answers: [
			{ text: "a botkormány, a vízszintes vezérsík, a csűrőlap.", correct: false},
			{ text: "a futómű, a fékszárny, az orrsegédszárny.", correct: true},
			{ text: "a tárcsafék, a hajtómű, a trimlapok.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Az eloxálással …",
		answers: [
			{ text: "műanyag-felületeken képeznek hézagmentes bevonatot.", correct: false},
			{ text: "alumíniumötvözetek korrózióvédelmét biztosítják.", correct: true},
			{ text: "fafelületek oxidációját előzik meg.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A repülőgépek elektromos rendszere jellemzően …",
		answers: [
			{ text: "váltakozó áramú.", correct: false},
			{ text: "egyenáramú.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "NEL körülmények között, tengerszinten egy repülőgép sebessége IAS-ban 100 csomó, TAS-ban pedig 98 csomó. A különbség",
		answers: [
			{ text: "a beépítési hiba miatt adódik.", correct: true},
			{ text: "az összenyomhatósági hiba miatt adódik.", correct: false},
			{ text: "azért adódik, mert a repülőgép 2 csomós szembeszélben repül.", correct: false},
			{ text: " azért adódik, mert a repülőgép 2 csomós hátszélben repül.", correct: false},
		]
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "A tartó keresztmetszetének súlypontjában működő tengelyirányú normálerő hatására …",
		answers: [
			{ text: "csavaró igénybevétel jön létre.", correct: false},
			{ text: "hajlító igénybevétel jön létre.", correct: false},
			{ text: "tiszta nyíró igénybevétel jön létre.", correct: false},
			{ text: "központos húzó vagy nyomó igénybevétel jön létre.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A statikus port a levegő …",
		answers: [
			{ text: "áramlására merőlegesen helyezkedik el.", correct: true},
			{ text: "áramlásával párhuzamosan helyezkedik el.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Az alábbiak közül melyik mértékegységet használjuk nyomás mérésére?",
		answers: [
			{ text: "lb", correct: false},
			{ text: "PSI", correct: true},
			{ text: "kg/m3", correct: false},
			{ text: "N · m2", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A valódi magasság nem más, mint …",
		answers: [
			{ text: "a nyomásmagasság QNE alapján.", correct: false},
			{ text: "a közepes tengerszint feletti tényleges magasság.", correct: true},
			{ text: "a QNH szerint mért közepes tengerszint feletti magasság.", correct: false},
			{ text: "a sűrűségmagasság, melyet a repülési magasságon adódó tényleges légsűrűség határoz meg.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha egy négy hengeres belsőégésű repülőgépmotor hengerfejhőmérője egy kijelzős, azaz nem hengerenként mutatja a hengerfejek hőmérsékletét, akkor a kijelzett érték …",
		answers: [
			{ text: " az első hengerre vonatkozik.", correct: false},
			{ text: "a negyedik hengerre vonatkozik.", correct: false},
			{ text: "a négy hengerfej átlaghőmérsékletét mutatja.", correct: false},
			{ text: "a legrosszabbul hűtött hengerre vonatkozik.", correct: true},
		]
	},
		{
		subject: "SZERKEZETTAN",
		question: "Azonos felszállósúlyt és felületi terhelést feltételezve jellemzően melyik szárnytípus adódik a legnehezebbre?",
		answers: [
			{ text: "Az alsószárnyas elrendezés.", correct: true},
			{ text: "Az felsőszárnyas dúcolt elrendezés.", correct: false},
			{ text: "A duplaszárnyas elrendezés.", correct: false},
			{ text: "Bármelyik.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "… mértéke azt jelzi, hogy az elektromos térnek mekkora munkát kell végeznie, amíg egységnyi elektront átáramoltat egy adott anyagon.",
		answers: [
			{ text: "A kapacitás", correct: false},
			{ text: "Az ellenállás", correct: true},
			{ text: "A feszültség", correct: false},
			{ text: "Az áramerősség", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A repülési magasság mérése … mérésén alapul.",
		answers: [
			{ text: "az össznyomás és a statikus nyomás különbségének", correct: false},
			{ text: "a dinamikus nyomás", correct: false},
			{ text: "a statikus nyomás", correct: true},
			{ text: "az össznyomás", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Kétoldali állításúnak nevezzük a légcsavarvezérlőt, ha …",
		answers: [
			{ text: "mindkét oldalra hidraulikus munkahenger állít.", correct: true},
			{ text: "egyik oldalra hidraulikus munkahenger, a másik oldalra ellensúlyok centrifugális erejének nyomatéka vagy a lapátok saját tömegerő-nyomatéka állít.", correct: false},
		]
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "Hajlításról beszélünk, ha a külső erők hatására a rúd keresztmetszetein hajlítónyomaték keletkezik, és ennek következtében a rúd meggörbül …",
		answers: [
			{ text: "de nem szenved hosszváltozást.", correct: true},
			{ text: "és hosszváltozást szenved.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A repülési szint (flight level) nem más, mint …",
		answers: [
			{ text: "sűrűségmagasság.", correct: false},
			{ text: "a valódi magasság.", correct: false},
			{ text: "a közepes tengerszint feletti magasság.", correct: false},
			{ text: "nyomásmagasság.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "Ha a kordszál éppen látható a gumiabroncs felületén, akkor még nem kell lecserélni.", correct: false},
			{ text: "A gumiabroncsot le kell cserélni, ha felületén repedéseket találunk.", correct: false},
			{ text: "Ha a gumiabroncs felületén apró repedéseket találunk, akkor még nem kell lecserélni.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A felületi terhelés képlete: …",
		answers: [
			{ text: "G/Y", correct: false},
			{ text: "Y/G", correct: false},
			{ text: "Y/X", correct: false},
			{ text: "G/A", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A sebességmérő zöld tartománya a … sebességtartományt jelöli.",
		answers: [
			{ text: "soha át nem léphető", correct: false},
			{ text: "normál üzemi", correct: true},
			{ text: "kitérített fékszárnnyal repülhető", correct: false},
			{ text: "turbulenciától mentes időjárásban repülhető", correct: false},
		]
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "Ha egy rúd keresztmetszetére a keresztmetszet síkjával párhuzamosan, ellentétes irányban, egymástól végtelen kis távolságban, azonos nagyságú erők működnek, akkor …",
		answers: [
			{ text: "csavaró igénybevételről beszélünk.", correct: false},
			{ text: "nyíró igénybevételről beszélünk.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "Ha a repülési magasságon adódó léghőmérséklet magasabb, mint amit a NEL tengerszintre meghatároz, akkor a repülőgép alacsonyabban van a műszer szerinti magassághoz képest.", correct: false},
			{ text: "Ha a repülési magasságon adódó léghőmérséklet alacsonyabb, mint amit a NEL tengerszintre meghatároz, akkor a repülőgép alacsonyabban van a műszer szerinti magassághoz képest.", correct: false},
			{ text: "Ha a repülési magasságon adódó léghőmérséklet magasabb, mint amit ott a NEL meghatároz, akkor a repülőgép alacsonyabban van a műszer szerinti magassághoz képest.", correct: false},
			{ text: "Ha a repülési magasságon adódó léghőmérséklet alacsonyabb, mint amit ott a NEL meghatároz, akkor a repülőgép alacsonyabban van a műszer szerinti magassághoz képest.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Az egylapátos (standard fordulóban a repülőgép … perc alatt tesz meg egy … fokos fordulót, azaz … fokot fordul másodpercenként.",
		answers: [
			{ text: "3 – 360 – 2", correct: false},
			{ text: "2 – 360 – 3", correct: true},
			{ text: "2 – 180 – 1,5", correct: false},
			{ text: "1 – 360 – 6", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A repülőgép súlyának változása nincs hatással Va értékére.", correct: false},
			{ text: "A repülőgép súlyának növekedésével Va értéke magasabb.", correct: false},
			{ text: "A repülőgép súlyának csökkenésével Va értéke alacsonyabb.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A Bourdon-cső … mérésére használt szerkezet.",
		answers: [
			{ text: "áramló közeg sebességének", correct: false},
			{ text: "nyomás", correct: true},
			{ text: "hőmérséklet", correct: false},
			{ text: "folyadékszint", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Az elfordulásjelző működése a … szabadságfokú pörgettyű mozgástörvényein alapszik. Pörgettyűjének forgástengelye …",
		answers: [
			{ text: "három – vízszintes.", correct: false},
			{ text: "három – függőleges.", correct: false},
			{ text: "két – függőleges.", correct: false},
			{ text: "két – vízszintes", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Súlytalanság esetén az n terhelési többes …",
		answers: [
			{ text: "n > 0", correct: false},
			{ text: "n < 0", correct: false},
			{ text: "n < 0", correct: false},
			{ text: "n = 0", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A differenciált csűrőlapokat …",
		answers: [
			{ text: "kormányerő-csökkentésre alkalmazzák.", correct: false},
			{ text: "az ellentétes fordulónyomaték csökkentésére alkalmazzák.", correct: true},
			{ text: "az átesési karakterisztika javítása érdekében alkalmazzák.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Milyen manővereket engedélyez az EASA a Normal kategóriájú repülőgépeknél CS-23 szerint?",
		answers: [
			{ text: "Korlátlan műrepülés.", correct: false},
			{ text: "Átesés, forduló 90°-os bedöntésig, dugóhúzó (ha a gyártó engedi), laza nyolcas, gyertya.", correct: false},
			{ text: "Átesés, forduló 60°-os bedöntésig, laza nyolcas, gyertya.", correct: true},
			{ text: "Átesés, forduló 60°-os bedöntésig, dugóhúzó (ha a gyártó engedi), laza nyolcas, gyertya.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Egy repülőgép 4000 láb magasságon 100 csomós CAS sebességgel 25 csomós szembeszélben halad. Hozzávetőlegesen mekkora lesz a TAS sebesség?",
		answers: [
			{ text: "108 kt", correct: true},
			{ text: "83 kt", correct: false},
			{ text: "133 kt", correct: false},
			{ text: "133kt", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Ha a súlyponthelyzet a hátsó határértéken van, akkor a normál súlyponthelyzethez képest … magassági kormánykitérítés szükséges ahhoz, hogy egy n=2-es terhelési többest létrehozzunk.",
		answers: [
			{ text: "nagyobb", correct: false},
			{ text: "ugyanakkora", correct: false},
			{ text: "kisebb", correct: true},
		]
	},
	{
	    subject: "SZERKEZETTAN",
	    question: "A szegecselés …",
	    answers: [
	      { text: "oldható kötés.", correct: false },
	      { text: "nem oldható kötés.", correct: true },
    	]
  	},
  	{
	    subject: "MŰSZERTAN",
	    question:
	      "A repülőgépeken csak olyan tüzelőanyagszint-mérőket alkalmaznak, melyek lineárisan mérnek és melyeknél a mérés pontosságát a repülőgép térbeli helyzete nem befolyásolja.",
	    answers: [
	      { text: "Igaz.", correct: false },
	      { text: "Hamis.", correct: true },
	    ]
  	},
  	{
	    subject: "SZERKEZETTAN",
	    question: "A csapszeg, a feszítőzár, a kardáncsukló, a beálló csapágyazás, a csőbilincs…",
	    answers: [
	      { text: "nem oldható kötések.", correct: false },
	      { text: "oldható kötések.", correct: true },
	    ]
  	},
  	{
    subject: "SZERKEZETTAN",
    question: "A differenciált csűrő kormánylapjai jobb fordulóban a következőképpen térnek ki:",
    answers: [
      { text: "a bal oldali lefelé kevésbé tér ki, mint a jobb oldali felfelé.", correct: true },
      { text: "a bal oldali lefelé jobban tér ki, mint a jobb oldali felfelé.", correct: false },
      { text: "a jobb oldali lefelé kevésbé tér ki, mint a bal oldali felfelé.", correct: false },
      { text: "a jobb oldali lefelé jobban tér ki, mint a bal oldali felfelé.", correct: false },
    ]
  },
  {
    subject: "SZERKEZETTAN",
    question: "A terhelési többes képlete:",
    answers: [
      { text: "Y/X", correct: false },
      { text: "Y/G", correct: true },
      { text: "G/Y", correct: false },
      { text: "G/A", correct: false },
    ]
  },
  {
    subject: "SZILÁRDSÁGTAN",
    question: "A húzódiagram szakaszai sorrendben:",
    answers: [
      { text: "keményedő szakasz, képlékeny szakasz, rugalmas szakasz, majd nagy nyúlás és szakadás.", correct: false },
      { text: "rugalmas szakasz, képlékeny szakasz, keményedő szakasz, majd nagy nyúlás és szakadás.", correct: true },
      { text: "rugalmas szakasz, keményedő szakasz, képlékeny szakasz, majd nagy nyúlás és szakadás.", correct: false },
      { text: "képlékeny szakasz, rugalmas szakasz, keményedő szakasz, majd nagy nyúlás és szakadás.", correct: false },
    ]
  },
  {
    subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
    question: "Melyik állítás igaz?",
    answers: [
      { text: "Az elektromos rendszer működéséhez szükséges áramot az akkumulátor állítja elő.", correct: false },
      { text: "Amíg a repülőgép a földön áll, az akkumulátor táplálja a fedélzeti fogyasztókat.", correct: false },
      { text: "Üzemképtelen akkumulátor mellett az alternátor nem fejleszt áramot.", correct: true },
      { text: "A generátor/alternátor a motor indító áramforrása.", correct: false },
    ]
  	},
	{
		subject: "SZERKEZETTAN",
		question: "A csűrő-flatter …",
		answers: [
			{ text: "öngerjesztett lengés.", correct: true},
			{ text: "kényszerrezgés.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ha egy akkumulátor 20 órán át 2 A áramot képes leadni, akkor …",
		answers: [
			{ text: "10 Ah-ás.", correct: false},
			{ text: "40 Ah-ás.", correct: true},
			{ text: "18 Ah-ás.", correct: false},
			{ text: "22 Ah-ás.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A legtöbb … alacsony fordulatszámon nem ad le elegendő feszültséget, míg … ez nem mondható el.",
		answers: [
			{ text: "alternátor – az egyenáramú generátorról", correct: false},
			{ text: "egyenáramú generátor – az alternátorról", correct: true},
		]
	},
		{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Melyik alkatrész közös az egyenáramú motor és generátor szerkezetében?",
		answers: [
			{ text: "A kontaktor.", correct: false},
			{ text: "A regulátor.", correct: false},
			{ text: "A kommutátor.", correct: true},
			{ text: "A dióda-tömb.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az alábbiak közül mely frekvenciatartomány felel meg a NAV-tartománynak?",
		answers: [
			{ text: "108,000-118,000 MHz.", correct: true},
			{ text: "118,000-136,975 MHz.", correct: false},
			{ text: "104,000-121,500 MHz.", correct: false},
			{ text: "108,000-136,975 MHz.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "… radarberendezés, más néven passzív radar a saját maga által kisugárzott, valamely céltárgyról visszaverődő jelet veszi.",
		answers: [
			{ text: "Az elsődleges", correct: true},
			{ text: "A másodlagos", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Megkezdhetjük-e a repülést, ha a helyes QNH beállítása után a magasságmérő a repülőtér valós tengerszint feletti magasságánál 60 lábbal többet mutat?",
		answers: [
			{ text: "Nem", correct: true},
			{ text: "Igen", correct: false},
		],
		hint:"A QNH az aktuális tengerszint feletti légköri nyomást jelenti, amelyet a repülőgép magasságának pontos meghatározásához használnak.",
	},
	{
		subject: "MŰSZERTAN",
		question: "A dőlés- és elfordulásjelző …",
		answers: [
			{ text: "a bedöntési és bólintási szöget mutatja a forduló során.", correct: false},
			{ text: "információt ad a bólintás szögről a forduló során.", correct: false},
			{ text: "a forduló bedöntési szögét mutatja.", correct: false},
			{ text: "nem ad információt sem a bedöntési, sem a bólintási szögről a forduló során.", correct: true},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik egyenlőség igaz?",
		answers: [
			{ text: "biztosnági tényező ∙ törő terhelési többes = megengedett terhelési többes", correct: false},
			{ text: "biztonsági tényező = törő terhelési többes ∙ megengedett terhelési többes", correct: false},
			{ text: "törő terhelési többes / biztonsági tényező = megengedett terhelési többes", correct: true},
			{ text: "megengedett terhelési többes / törő terhelési többes = biztonsági tényező.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Azonos felszállósúlyt és felületi terhelést feltételezve melyik szárnyelrendezés adódik a legnagyobb hajlítómerevségűre?",
		answers: [
			{ text: "A duplaszárnyas elrendezés.", correct: true},
			{ text: "Az felsőszárnyas dúcolt elrendezés.", correct: false},
			{ text: "Az alsószárnyas elrendezés.", correct: false},
			{ text: "Bármelyik.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A Va sebesség határáig még teljes kormánykitérítéssel sem tudjuk átlépni a megengedett legnagyobb terhelési többest.",
		answers: [
			{ text: "Igaz", correct: true},
			{ text: "Hamis", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Szerkezeti kialakítás szempontjából a szárny lehet …",
		answers: [
			{ text: "szabadonhordó vagy dúcolt.", correct: false},
			{ text: "előre nyilazott, hátra nyilazott vagy változtatható nyilazású.", correct: false},
			{ text: "tartószerkezetes, félhéjszerkezetű vagy héjszerkezetű.", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A repülőgép valódi sebességét … számoljuk ki.",
		answers: [
			{ text: "a műszer szerinti sebességből", correct: false},
			{ text: "a kalibrált sebességből", correct: false},
			{ text: "ha az összenyomhatósági hibát figyelmen kívül hagyhatjuk, akkor – a kalibrált sebességből", correct: true},
			{ text: "a föld feletti sebesség ismeretében a műszer szerinti sebességből", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A QFE-re állított magasságmérő az adott repülőtéren …",
		answers: [
			{ text: "a repülőtér közepes tengerszint feletti magasságát mutatja.", correct: false},
			{ text: "0-t mutat.", correct: true},
			{ text: "1013,25 hPa alapján mutat.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Két 12 V-os és 40 Ah-s akkumulátort sorba kötve …",
		answers: [
			{ text: "egy 12 V-os és 80 Ah-ás áramforrást kapunk.", correct: false},
			{ text: "egy 24 V-os és 80 Ah-ás áramforrást kapunk.", correct: false},
			{ text: "egy 24 V-os és 40 Ah-ás áramforrást kapunk.", correct: true},
			{ text: "Csak párhuzamosan kapcsolhatunk össze két akkumulátort.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "Ha a levegő nyugodt, a Vne sebességet még átléphetjük.",
		answers: [
			{ text: "Igaz.", correct: false},
			{ text: "Hamis", correct: true},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A sebességmérő fehér tartománya a … sebességtartományt jelöli.",
		answers: [
			{ text: "turbulenciától mentes időjárásban repülhető", correct: false},
			{ text: "soha át nem léphető", correct: false},
			{ text: "kitérített fékszárnnyal repülhető", correct: true},
			{ text: "normál üzemi", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha egy adott repülőtéren a QFE 1001 hPa és a QNH 1012 hPa, mekkora hozzávetőlegesen a repülőtér közepes tengerszint feletti magassága?",
		answers: [
			{ text: "Kb. 170 láb.", correct: false},
			{ text: "Kb. 330 láb.", correct: true},
			{ text: "Kb. 110 láb.", correct: false},
			{ text: "Kb. 250 láb.", correct: false},
		],
		hint:"A QFE egy légköri nyomásreferencia-rendszer a repülésben, amely a leszállópálya tengerszint feletti magasságát veszi alapul. Az QFE azt jelenti, hogy a magasságmérő mutatja a leszállópálya tengerszint feletti magasságát, így az érték 0 méter, ha a repülőgép a leszállópálya szintjén repül.<br><br>Az QFE használata különösen fontos a leszállási folyamat során, amikor a repülőgépnek pontosan tudnia kell, hogy mennyire van a földtől, hogy biztonságosan landolhasson. A QFE értéke a leszállópálya helyétől és a légköri nyomástól függ, és általában a leszállópálya meteorológiai állomásának adatbázisában található.<br><br>Az QFE-t általában csak rövid ideig használják a leszállási folyamat során, és a repülőgép általában röviddel a leszállás előtt tér vissza az alapvető légköri nyomásreferenciához, azaz az QNH-hoz vagy az STD-hez (standard hozam).",
	},
	{
		subject: "MŰSZERTAN",
		question: "A repülőgép folyadékos mágneses iránytűjében … ellensúllyal beépítésével kompenzálják, … menetesen mozgatható kis mágnespárok állításával kompenzálják, … csak számításba vehetjük, nem kompenzálják.",
		answers: [
			{ text: "a deviációt – az inklinációt – a deklinációt", correct: false},
			{ text: "az inklinációt – a deviációt – a deklinációt", correct: true},
			{ text: "a deklinációt – az inklinációt – a deviációt", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "Az egyszerű sebességmérés …",
		answers: [
			{ text: "aneroid szelence segítségével történik.", correct: false},
			{ text: "Vidi-szelence segítségével történik.", correct: true},
			{ text: "Vidi- és aneroid szelence együttes alkalmazásával történik.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A félhéjszerkezetű törzs alapvető teherviselő elemei: …",
		answers: [
			{ text: "a borítás, a törzskeretek és a hosszmerevítők.", correct: true},
			{ text: "a törzskeretek és a hosszmerevítők.", correct: false},
			{ text: "a borítás és a hosszmerevítők.", correct: false},
			{ text: "a borítás és a törzskeretek.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Melyik energiaforrás marad üzemképes az akkumulátor működésképtelensége esetén?",
		answers: [
			{ text: "A generátor és az alternátor is.", correct: false},
			{ text: "Sem a generátor, sem az alternátor.", correct: false},
			{ text: "A generátor.", correct: true},
			{ text: "Az alternátor.", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "A bimetál … mérésére használt szerkezet.",
		answers: [
			{ text: "sebesség", correct: false},
			{ text: "hőmérséklet", correct: true},
			{ text: "magasság", correct: false},
			{ text: "nyomás", correct: false},
		]
	},
	{
		subject: "MOTORTAN",
		question: "A repülőbenzin jelölő színkódja: …",
		answers: [
			{ text: " teli fekete, két fehér csíkkal", correct: false},
			{ text: "kisebb részben kék, nagyobb részben piros, a kettő között fehér elválasztó csíkkak", correct: true},
			{ text: "kisebb részben sárga, nagyobb részben piros, a kettő között fehér elválasztó csíkkal.", correct: false},
		]
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mekkora a 12 V-os akkumulátor kisütési végfeszültsége?",
		answers: [
			{ text: "6 V", correct: false},
			{ text: "2 V", correct: false},
			{ text: "10,5 V", correct: true},
			{ text: "1,75 V", correct: false},
		]
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "Tiszta hajlítás következtében a rúd keresztmetszeti síkjai a rúdtengelyre merőleges helyzetüket az alakváltozás után …",
		answers: [
			{ text: "is megtartják.", correct: true},
			{ text: "nem tartják meg.", correct: false},
		]
	},
		{
		subject: "SZILÁRDSÁGTAN",
		question: "A kihajlás vizsgálatának tökéletes körülményei esetén, ha egy karcsú rudat pontosan a kritikus törőerő terhel, …",
		answers: [
			{ text: "az oldalirányú erő megszüntetése után újból egyenes lesz.", correct: false},
			{ text: "az oldalirányú erő megszüntetése után maradó alakváltozást szenved.", correct: true},
			{ text: "akkor egészen kis oldalirányú erő hatására meggörbül, kihajlása fokozódik és végül eltörik.", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "A fordulóban az n terhelési többes …",
		answers: [
			{ text: "n = 0", correct: false},
			{ text: "n < 1", correct: false},
			{ text: "n = 1", correct: false},
			{ text: "n > 1", correct: true},
		],
		hint:"A repülésben a terhelési többes (plurális terhelés) egy olyan fogalom, amely a repülőgép tervezésének és működésének elemzésére vonatkozik. Ez a fogalom azt jelenti, hogy a repülőgépnek nem csak egyetlen terhelésnek kell ellenállnia, hanem különböző terheléseknek is, amelyeket a repülés során tapasztal. Az N terhelési többes kifejezés a legfontosabb terheléstípus, amelyet a repülőgépek tervezése során figyelembe kell venni. Az N terhelési többes azokat az erőket jelöli, amelyeket a repülőgép teste átél a gravitációs erő, a turbulencia, a manőverek és a leszállás során. Az N terhelési többes azt jelzi, hogy a repülőgép testének mennyi-szeresére növekszik az általa elviselt terhelés, amikor a különböző terheléseket tapasztalja. Az N terhelési többes nagyon fontos azért, mert az általa jelzett terhelési határok meghatározzák a repülőgép maximális sebességét és manőverező képességét. A repülőgépek tervezése során az N terhelési többes értéke az egyik legfontosabb paraméter, amely befolyásolja a repülőgép súlyát, szerkezetét és teljesítményét.",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A transzponder kód mely számok kombinációja lehet az alábbi felsorolások közül?",
		answers: [
			{ text: "0, 1, 2, 3, 4", correct: false},
			{ text: "0, 1, 2, 3, 4, 5", correct: false},
			{ text: "0, 1, 2, 3, 4, 5, 6, 7", correct: true},
			{ text: "0, 1, 2, 3, 4, 5, 6, 7, 8, 9", correct: false},
		],
		hint:"A transzponder kód egy négyjegyű szám, amelyet a repülőgép pilótái beállítanak a fedélzeti transzponderen. A transzponder kód segít a légi irányításnak a repülőgép azonosításában és nyomon követésében a légtérben. <br><br> A transzponder kódok 4 számjegyből állnak, és általában 0 és 7 közötti számokat tartalmaznak. A kódokat hexadecimális számrendszerben ábrázolják, ami azt jelenti, hogy a számjegyek 16 különböző értéket vehetnek fel a 0-tól a F-ig terjedő skálán.<br><br>A transzponder kódok általában az adott repülési tervhez kapcsolódnak, és a pilóta az irányítótoronnyal történő kommunikáció során állítja be őket. A kódokat rendszeresen változtatják, hogy megakadályozzák a félreértéseket vagy a véletlen azonosítást más repülőgépekkel. A transzponder kódok szerepe kiemelten fontos a légi közlekedés biztonsága szempontjából.",

	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "A repülőgép szerkezeti igénybevételei során a nyomó igénybevétel legtöbbször tiszta nyomó igénybevétel.",
		answers: [
			{ text: "Hamis.", correct: true},
			{ text: "Igaz", correct: false},
		],
		hint:"A tiszta nyomó igénybevétel (clean maneuvering speed) a repülésben egy olyan sebesség, amelyen a repülőgép maximális tiszta nyomóerőt (clean lift) tud generálni, anélkül hogy az aerodinamikai korlátok közelébe kerülne.<br><br>A tiszta nyomó igénybevétel azt jelenti, hogy a repülőgép a legnagyobb lehetséges tiszta nyomóerőt (lift) tudja előállítani az adott sebességen, és még nincs a szárnyprofil határaitól vagy más aerodinamikai korlátoktól eltérve. A tiszta nyomó igénybevétel sebessége repülőgépenként változó, és a repülőgép használati utasításában (POH) található meg.<br><br>A tiszta nyomó igénybevétel fontos a repülőgép biztonságos manőverezéséhez, mivel ezen a sebességen a repülőgép még képes a kívánt manőverek elvégzésére, anélkül hogy aerodinamikai problémákkal kellene szembenéznie. A tiszta nyomó igénybevétel sebessége különösen fontos a manőverező repülés, mint például a fordulók vagy a fel-le húzások, vagy a turbulens légkörben történő repülés során. A repülőgép szárnyprofiljának és a repülési körülményeknek megfelelő tiszta nyomó igénybevétel sebesség figyelembevétele hozzájárul a repülőgép biztonságosabb és hatékonyabb kezeléséhez.",
	},
	{
		subject: "MOTORTAN",
		question: "Mi a rendeltetése a porlasztónak?",
		answers: [
			{ text: "A hengerekbe belépő tüzelőanyag szétporlasztása.", correct: false},
			{ text: "A hengerekbe belépő levegő nyomásának szabályozása.", correct: false},
			{ text: "A hengerekbe belépő tüzelőanyag és levegő optimális keverékének előállítása.", correct: true},
			{ text: "A hengerekbe belépő levegő optimális térfogatáramának biztosítása.", correct: false},
		],
		hint:"A porlasztó rendeltetése a benzin vagy gázolaj folyékony üzemanyagát porlasztani (azaz ködösíteni) az égéstérbe, hogy az égés hatékonyabb legyen.<br><br>A porlasztó a benzin vagy gázolaj folyadékot nyomás alá helyezi, majd az általa létrehozott kis lyukakon keresztül permetezi az égéstérbe. A porlasztó rendszer fő elemei közé tartoznak a porlasztó test, a porlasztó csúcsa, a benzin vagy gázolaj átfolyási nyílása, az üzemanyagcsatlakozó, az üzemanyagnyomás-szabályzó és a porlasztó maga.<br><br>A porlasztó hatékony működése kulcsfontosságú a jármű vagy repülőgép megfelelő teljesítményéhez. A porlasztó által ködösített üzemanyag könnyebben és hatékonyabban keveredik a levegővel az égéstérben, ami fokozza az égés hatékonyságát és növeli az erőforrás teljesítményét. A porlasztó egyik előnye az is, hogy lehetővé teszi az üzemanyag-ellátás finomhangolását, ami lehetővé teszi a jármű vagy repülőgép különböző sebességeinél és terheléseinek különböző szintjeinél az optimális teljesítmény elérését.<br><br>A porlasztó használata gyakori a repülőgépek, autók és motorkerékpárok belső égésű motorjaiban. A porlasztók különböző típusai és méretei léteznek, és a járművek és repülőgépek különböző típusainak és teljesítményigényeinek megfelelően választják ki.",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A szárnyra ható légerők és tömegerők a szerkezetét …",
		answers: [
			{ text: "csavarásra és nyírásra veszik igénybe.", correct: false},
			{ text: "hajlításra, csavarásra és nyírásra veszik igénybe.", correct: true},
			{ text: "hajlításra és nyírásra veszik igénybe.", correct: false},
			{ text: "hajlításra és csavarásra veszik igénybe.", correct: false},
		],
		hint:"A légerő és a tömegerő két különböző típusú erő, amelyek a repülőgép mozgására és irányváltoztatására hatnak a repülés során.<br><br>A légerő a repülőgép szárnyainak felszínére ható erő, amelyet a levegő áramlása hoz létre, amikor a repülőgép repül. A légerő egyenletesen oszlik el a szárny felületén, és a szárny felső részén keletkező alacsony légnyomás és az alsó részén keletkező magas légnyomás különbsége okozza. A légerő hatására a szárnyak felfelé irányú erőhatást kapnak, amely az emelőerőt (liftet) eredményezi, ami szükséges a repülőgép emelkedéséhez és a levegőben tartásához.<br><br>A tömegerő a repülőgép tömegének hatása a mozgásra. A repülőgép mozgását befolyásoló erő, amely az előre-, hátra-, fel- és lefelé irányuló mozgásokat befolyásolja. A tömegerő a repülőgép súlypontjára hat, és megkísérli mozgatni a repülőgépet az egyenes vonaltól. A pilóta a tömegerőkkel szembeni ellenállásnak köszönhetően irányíthatja a repülőgépet.<br><br>A repülőgép tervezésekor a légerők és a tömegerők figyelembevétele elengedhetetlen a biztonságos és hatékony repüléshez, valamint a megfelelő terhelhetőség biztosításához.",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Állandósult emelkedésben és siklásban az n terhelési többes …",
		answers: [
			{ text: "n = 0", correct: false},
			{ text: "n = 1", correct: false},
			{ text: "n < 1", correct: true},
			{ text: "n > 1", correct: false},
		],
		hint:"Az állándósult emelkedésben és siklásban végrehajtott repülőmanőverek esetében az n terhelési többes mindig kisebb, mint 1. Ez azt jelenti, hogy a repülőgép súlya és a felhajtóerő közötti arány a terhelés csökkenésével csökken.",
	},
	{
		subject: "MOTORTAN",
		question: "Mi a primer befecskendező?",
		answers: [
			{ text: "Kézi működtetésű tüzelőanyag-pumpa, mellyel a motor hidegindításakor a porlasztót megkerülve, közvetlenül a hengerekbe (vagy a szívócsőbe) fecskendezhetünk többlet tüzelőanyagot.", correct: true},
			{ text: "Kézi működtetésű tüzelőanyag-pumpa, mellyel a motor indítása előtt nyomás létesítünk a tüzelőanyag-rendszerben.", correct: false},
			{ text: "A Diesel-motor hengerében összesűrített levegőbe fecskendezi be a nagy nyomású gázolajat, amely a felforrósodott levegő hőjétől meggyullad és elég.", correct: false},
			{ text: "Befecskendezéses motoroknál túlnyomással adagolja a tüzelőanyagot közvetlenül a keverékképzés helyére.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A vízszintes vezérsík jellemzően …",
		answers: [
			{ text: "A vízszintes vezérsíknak a kis igénybevétel miatt nincs főtartója.", correct: false},
			{ text: "egyfőtartós.", correct: false},
			{ text: "kétfőtartós.", correct: true},
		],
		hint:"A vízszintes vezérsík a repülőgép farán található, és segíti a repülőgép magasságának irányítását. Jellemzően kétfőtartós, vagyis két stabilizátorból áll, amelyek általában vízszintes irányban helyezkednek el. Az egyik stabilizátor alsó részéhez kapcsolódik az emelő felület, amely a magasság irányítására szolgál.<br><br>A két stabilizátor nagyobb stabilitást biztosít a repülőgép számára, mint egyetlen stabilizátor használata esetén. Ez segít megelőzni a repülőgép veszélyes csavarását és hajlítását, valamint javítja a magasság irányításának pontosságát.",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Melyik egyenlőség igaz? (P elektromos teljesítmény, U feszültség, I áramerősség)",
		answers: [
			{ text: "P = U ∙ I", correct: true},
			{ text: "U = I / P", correct: false},
			{ text: "I = U / P", correct: false},
			{ text: "P ∙ U = I", correct: false},
		],
		hint:"A P = U ∙ I az elektromos teljesítmény számítására használt képlet, ahol:<br><br><br><br>P: teljesítmény (Watt)br><br>U: feszültség (Volt)<br><br>I: áram (Ampere)<br><br><br><brAz elektromos áram teljesítménye a feszültség és az áram szorzataként határozható meg. Ez azt jelenti, hogy minél nagyobb az áram vagy a feszültség, annál nagyobb lesz az áram teljesítménye is. A teljesítmény az elektromos energia mennyiségét jelöli, amelyet egy adott idő alatt használnak fel.<br><br>Az elektromos teljesítmény számítása fontos az elektromos áramkörök tervezése és karbantartása során, mivel lehetővé teszi a megfelelő feszültség- és áramellátás biztosítását. Ha az áramkörben túl magas a teljesítmény, akkor túlmelegedés és károsodás léphet fel, és akár tűzveszély is előfordulhat. Ezért fontos, hogy az elektromos áramkörök tervezésekor és karbantartásakor ügyeljenek a megfelelő teljesítményre és terhelhetőségre.",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A terhelési többes a repülés során …",
		answers: [
			{ text: "a repülőgép súlyának és a felhajtóerőnek a hányadosa.", correct: false},
			{ text: "a függőlegesen lefelé irányuló erők és a felhajtóerő hányadosa.", correct: true},
			{ text: "a felhajtóerő és a repülőgép súlyának hányadosa.", correct: false},
			{ text: "a felhajtóerő és a függőlegesen lefelé irányuló erők hányadosa.", correct: false},
		],
		hint:"A repülésben a terhelési többes (plurális terhelés) egy olyan fogalom, amely a repülőgép tervezésének és működésének elemzésére vonatkozik. Ez a fogalom azt jelenti, hogy a repülőgépnek nem csak egyetlen terhelésnek kell ellenállnia, hanem különböző terheléseknek is, amelyeket a repülés során tapasztal. Az N terhelési többes kifejezés a legfontosabb terheléstípus, amelyet a repülőgépek tervezése során figyelembe kell venni. Az N terhelési többes azokat az erőket jelöli, amelyeket a repülőgép teste átél a gravitációs erő, a turbulencia, a manőverek és a leszállás során. Az N terhelési többes azt jelzi, hogy a repülőgép testének mennyi-szeresére növekszik az általa elviselt terhelés, amikor a különböző terheléseket tapasztalja. Az N terhelési többes nagyon fontos azért, mert az általa jelzett terhelési határok meghatározzák a repülőgép maximális sebességét és manőverező képességét. A repülőgépek tervezése során az N terhelési többes értéke az egyik legfontosabb paraméter, amely befolyásolja a repülőgép súlyát, szerkezetét és teljesítményét.",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az elektromos rendszer feszültség-szabályzását … végzi.",
		answers: [
			{ text: "a dióda-tömb", correct: false},
			{ text: "a kommutátor", correct: false},
			{ text: "a kontaktor", correct: false},
			{ text: "a regulátor", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "Egy rúd valamely keresztmetszete akkor van … igénybe véve, ha a keresztmetszet egyik oldalán lévő erőrendszer eredője olyan erőpár, amely a rúd tengelye körül forgat.",
		answers: [
			{ text: "nyírásra", correct: false},
			{ text: "csavarásra", correct: true},
			{ text: "hajlításra", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Repülés közben a repülőgép-vezető füstöt érzékel a műszerfalból és arra kényszerül, hogy lekapcsolja az elektromos rendszer főkapcsolóját. Az alábbiak közül melyik műszer válik működésképtelenné?",
		answers: [
			{ text: "Úszós-potenciométeres tüzelőanyagszint-mérő.", correct: true},
			{ text: "Venturi-csöves elfordulásjelző.", correct: false},
			{ text: "Szelencés variométer.", correct: false},
			{ text: "Vákuumrendszerről működtetett műhorizont.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Hogyan kell eljárni egy biztosíték leoldása esetén?",
		answers: [
			{ text: "Ilyen esetben csak szakember járhat el, a hibát jelezni kell a repülőgép üzemeltetőjének.", correct: false},
			{ text: "A biztosíték normál körülmények között is leoldhat, de csak annyiszor cserélhetjük ki vagy nyomhatjuk vissza, ameddig ezt égett szag vagy füst nem kíséri.", correct: false},
			{ text: "A biztosíték normál körülmények között is leoldhat, ezért ha nem tapasztalunk égett szagot vagy füstöt, akkor egyszer kicserélhetjük vagy visszanyomhatjuk.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A repülőgép-építésben faanyagok felhasználása esetén csak keményfát alkalmaznak.",
		answers: [
			{ text: "Hamis", correct: true},
			{ text: "Igaz", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Az oktánszám a benzin … jellemzi?",
		answers: [
			{ text: "fűtőértékét", correct: false},
			{ text: "keverési arányát", correct: false},
			{ text: "kompresszióviszonyát", correct: false},
			{ text: "kompressziótűrését", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mágneses gyújtás esetén, ha lemerült akkumulátor mellett a gyújtást felkapcsolva a légcsavart kézzel megforgatjuk …",
		answers: [
			{ text: "a repülőgép motorja be fog indulni, de az alternátor nem fog áramot termelni, míg a generátor ilyenkor is működni fog.", correct: true},
			{ text: "a repülőgép motorja nem fog beindulni, mert a generátor működéséhez nincs gerjesztő feszültség.", correct: false},
			{ text: "a repülőgép motorja be fog indulni, de a generátor nem fog áramot termelni, míg az alternátor ilyenkor is működni fog.", correct: false},
			{ text: "a repülőgép motorja nem fog beindulni, mert az alternátor működéséhez nincs gerjesztő feszültség.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Két repülőgép azonos légtömegben repül, és mindkettő magasságmérője 5000 lábat mutat. Mekkora magasságkülönbség van a két repülőgép között és melyik javára, ha az egyik helyesen állította magasságmérőjét QNH 1018-re, míg a másik hibásan QNH 1001-et állított be?",
		answers: [
			{ text: "A QNH 1001-t használó repülőgép kb. 340 lábbal alacsonyabban közlekedik a QNH 1018-t használó repülőgéphez képest.", correct: false},
			{ text: "A QNH 1001-t használó repülőgép kb. 510 lábbal magasabban közlekedik a QNH 1018-t használó repülőgéphez képest.", correct: true},
			{ text: "A QNH 1001-t használó repülőgép kb. 680 lábbal alacsonyabban közlekedik a QNH 1018-t használó repülőgéphez képest.", correct: false},
			{ text: "A QNH 1001-t használó repülőgép kb. 850 lábbal magasabban közlekedik a QNH 1018-t használó repülőgéphez képest.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A borítás is részt vesz a teherviselésben …",
		answers: [
			{ text: "a félhéjszerkezetű szárnyaknál.", correct: false},
			{ text: "a félhéj- és a héjszerkezetű szárnyaknál.", correct: true},
			{ text: "a vászonborítású, a félhéj- és a héjszerkezetű szárnyaknál.", correct: false},
			{ text: "a héjszerkezetű szárnyaknál.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A repülőgép akkumulátora …",
		answers: [
			{ text: "egyenáramú.", correct: true},
			{ text: "váltakozó áramú.", correct: false},
			{ text: "lehet egyenáramú vagy váltakozó áramú.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A sebességmérő zárt műszerházába …",
		answers: [
			{ text: "a dinamikus nyomást vezetik be.", correct: false},
			{ text: "a statikus nyomást vezetik be.", correct: true},
			{ text: "az össznyomást vezetik be.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A korszerű repülőgépekben alkalmazott belsőégésű motorok blokkjának alapanyagai …",
		answers: [
			{ text: "acélötvözetek", correct: false},
			{ text: "vasöntvények", correct: false},
			{ text: "alumíniumötvözetek", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A szárny belépőéle és a főtartó közötti részét azért borítják réteges lemezzel, hogy ez a rész a …",
		answers: [
			{ text: "hajlító igénybevételt felvegye.", correct: false},
			{ text: "csavaró igénybevételt felvegye.", correct: true},
			{ text: "nyíró igénybevételt felvegye.", correct: false},
			{ text: "nyomó igénybevételt felvegye.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A TAS értékét jó közelítéssel úgy kapjuk meg, hogy a magasság növekedésével a CAS …",
		answers: [
			{ text: "értékéhez 5%-ot 1000 méterenként hozzáadunk.", correct: false},
			{ text: "értékéhez 5%-ot 1000 méterenként kivonunk.", correct: false},
			{ text: "értékéhez 2%-ot 1000 lábanként hozzáadunk.", correct: true},
			{ text: "értékéből 2%-ot 1000 lábanként kivonunk.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A repülőgép melyik része lehet szabadonhordó vagy kitámasztott.",
		answers: [
			{ text: "A szárnya.", correct: false},
			{ text: "A szárnya és a vízszintes vezérsíkja is.", correct: false},
			{ text: "A szárnya, a vízszintes vezérsíkja és futóműve.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Utazó légcsavarnak nevezzük azt a merev légcsavart, melynek …",
		answers: [
			{ text: "beállítási szöge kicsi, tehát vonóereje viszonylag kis sebességeknél nagy.", correct: false},
			{ text: "beállítási szöge kicsi, tehát vonóereje viszonylag nagy sebességeknél nagy.", correct: false},
			{ text: "beállítási szöge nagy, tehát vonóereje viszonylag kis sebességeknél nagy.", correct: false},
			{ text: "beállítási szöge nagy, tehát vonóereje viszonylag nagy sebességeknél nagy.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A vászonborítás feladata az aerodinamikailag megkívánt alakhűség biztosítása.",
		answers: [
			{ text: "Hamis", correct: true},
			{ text: "Igaz", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A gumiabroncson a következő feliratot látjuk: “26 7,75-13 PR10 210MPH”, mely azt jelenti, hogy az abroncs …",
		answers: [
			{ text: "külső átmérője 26 inch; belső átmérője 7,75 inch; terhelhetősége 13; szélessége 10 inch; a maximális üzemi sebességhatár 210MPH.", correct: false},
			{ text: "külső átmérője 26 inch; szélessége 7,75 inch; belső átmérője 13 inch; terhelhetősége 10; a maximális üzemi sebességhatár 210MPH.", correct: true},
			{ text: "külső átmérője 26 inch; belső átmérője 7,75 inch; szélessége 13 inch; terhelhetősége 10; a maximális üzemi sebességhatár 210MPH.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A fémek jól, a szén kevésbé, az üveg, a porcelán, a gumi, a műanyag és a tiszta víz gyakorlatilag nem vezeti az áramot.",
		answers: [
			{ text: "Hamis", correct: false},
			{ text: "Igaz", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A kormánylapok súlykiegyenlítése …",
		answers: [
			{ text: "a flettner jelenség miatt szükséges.", correct: false},
			{ text: "a bafting jelenség miatt szükséges.", correct: false},
			{ text: "a flatter jelenség miatt szükséges.", correct: true},
			{ text: "a bafting és a flettner jelenség miatt szükséges.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A simmizés lehetősége nagyobb …",
		answers: [
			{ text: "kisnyomású abroncs és dupla kerékfelépítés esetén.", correct: false},
			{ text: "nagynyomású abroncs és dupla kerékfelépítés esetén.", correct: false},
			{ text: "kisnyomású abroncs és szimpla kerékfelépítés esetén.", correct: true},
			{ text: "nagynyomású abroncs és szimpla kerékfelépítés esetén.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik kormányerő-csökkentési megoldás működésének alapja a kormánylap belépőéléhez rögzített membrán alatti és feletti térben létrejövő nyomáskülönbség?",
		answers: [
			{ text: "A tengelykiegyenlítésé.", correct: false},
			{ text: "Az oldalkiegyenlítésé.", correct: false},
			{ text: "Az Irwing-féle kiegyenlítésé.", correct: false},
			{ text: "Az áttételeztett kiegyenlítésé.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A hajtómű kiegyensúlyozatlan tömegerői a bekötésen keresztül még csillapítás mellett is átadódnak a repülőgépre.", correct: true},
			{ text: "A hajtómű kiegyensúlyozatlan tömegerői a bekötésen keresztül nem adódnak át a repülőgépre, mert csillapítva vannak.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A kisnyomású abroncsokban jellemzően 0,2 bar nyomás van és munkafelvevő képességük nagy.", correct: false},
			{ text: "A kisnyomású abroncsokban jellemzően 2 bar nyomás van és munkafelvevő képességük kicsi.", correct: false},
			{ text: "A kisnyomású abroncsokban jellemzően 2 bar nyomás van és munkafelvevő képességük nagy.", correct: true},
			{ text: "A kisnyomású abroncsokban jellemzően 0,2 bar nyomás van és munkafelvevő képességük kicsi.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A kopogás létrejöhet a kompresszióviszonyhoz képest túl … oktánszámú benzin használatakor, a keverék … esetén vagy állandó fordulatszámú légcsavarral felszerelt repülőgépeken … szívótérnyomás és … fordulatszám esetén következik be.",
		answers: [
			{ text: "alacsony – eldúsulása – nagy – alacsony", correct: false},
			{ text: "magas – eldúsulása – kis – magas", correct: false},
			{ text: "alacsony – túlszegényedése – nagy – alacsony", correct: true},
			{ text: "magas – túlszegényedése – kis – magas", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Mit nevezünk alacsonyabb frekvenciájú periodikus mozgásnak?",
		answers: [
			{ text: "A lengést.", correct: true},
			{ text: "A rezgést.", correct: false},
			{ text: "A rezonanciát.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A durál ötvözetek …",
		answers: [
			{ text: "acélötvözetek.", correct: false},
			{ text: "magnéziumötvözetek alumínium és rézötvözővel.", correct: false},
			{ text: "alumíniumötvözetek magnézium és réz ötvözővel.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Osztott elrendezésnek nevezzük …",
		answers: [
			{ text: "a V-vezérsíkokat.", correct: false},
			{ text: "a T-vezérsíkokat.", correct: false},
			{ text: "a H-vezérsíkokat.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az akkumulátor elektrolit-szintje akkor megfelelő, ha a lemezek felső részét … fedi el, ellenkező esetben … kell utántölteni.",
		answers: [
			{ text: "kb. 1-1,5 mm-rel – kénsavat", correct: false},
			{ text: "kb. 1-1,5 cm-rel – desztillált vizet", correct: true},
			{ text: "kb. 1-1,5 mm-rel – desztillált vizet vagy kénsavat", correct: false},
			{ text: "kb. 1-1,5 cm-rel – desztillált vizet vagy csapvizet", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A futómű terhelését …",
		answers: [
			{ text: "hatásjelleg alapján statikus, megoszlás alapján koncentrált erők hozzák létre.", correct: false},
			{ text: "hatásjelleg alapján dinamikus, megoszlás alapján koncentrált erők hozzák létre.", correct: true},
			{ text: "hatásjelleg alapján dinamikus, megoszlás alapján felület menti erők hozzák létre.", correct: false},
			{ text: "hatásjelleg alapján statikus, megoszlás alapján felület menti erők hozzák létre.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "… külső áramforrás nélkül is képes előállítani áramot. … külső gerjesztésű, működéséhez az akkumulátor feszültsége szükséges.",
		answers: [
			{ text: "Az alternátor – Az egyenáramú generátor", correct: false},
			{ text: "Az egyenáramú generátor – Az alternátor", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mi a funkciója műszerfalon egymás mellett található “BAT” és “ALT” kapcsolóknak?",
		answers: [
			{ text: "A “BAT” kapcsoló a generátor feszültséget kapcsolja rá az elektromos rendszerre. Az “ALT” kapcsoló pedig külön kapcsolja az alternátor gerjesztését az akkumulátorról.", correct: false},
			{ text: "A “BAT” kapcsoló az akkumulátor feszültséget kapcsolja rá az elektromos rendszerre. Az “ALT” kapcsoló pedig külön kapcsolja az alternátor gerjesztését az akkumulátorról.", correct: true},
			{ text: "A “BAT” kapcsoló az elektromos rendszer főkapcsolója. Az “ALT” kapcsolóval pedig a fő áramforrás meghibásodásakor a tartalék (alternatív) áramforrást lehet üzembe helyezni.", correct: false},
			{ text: "A “BAT” kapcsoló a csatlakoztató (batch-panel) kapcsolója, mely áram alá helyezi az elektromos rendszert. Az “ALT” kapcsolóval pedig a repülőgép váltakozó áramú (alternate current) elektromos rendszerét helyezzük áram alá.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Egy 28 V-os elektromos rendszerhez …",
		answers: [
			{ text: "28 V-os akkumulátor tartozik.", correct: false},
			{ text: "14 V-os akkumulátor tartozik.", correct: false},
			{ text: "24 V-os akkumulátor tartozik.", correct: true},
			{ text: "12 V-os akkumulátor tartozik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ha repülés közben az elektromos rendszer működésképtelenné válik, akkor csak azok a műszerek nem fognak működni, melyeken a DC. ELEC. felirat szerepel.",
		answers: [
			{ text: "Hamis", correct: true},
			{ text: "Igaz", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ha egy repülőgépen a repülés során a felkapcsolt fogyasztók 20 A-t vesznek fel és az alternátor kapcsoló le van kapcsolva, akkor az az ampermérő, melynek skáláján középen helyezkedik el a nulla kijelzés …, az az ampermérő, melynek skálája bal oldalt jelzi a nullát … fog mutatni.",
		answers: [
			{ text: "-20 A-t – 20 A-t.", correct: false},
			{ text: "0 A-t – 20 A-t.", correct: false},
			{ text: "-20 A-t – 0 A-t.", correct: true},
			{ text: "0 A-t – 0 A-t.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mi a következménye annak, ha repülés közben a generátor meghibásodik?",
		answers: [
			{ text: "Az elektromos berendezések működésképtelenek lesznek.", correct: false},
			{ text: "Ameddig az akkumulátor le nem merül, el fogja látni az elektromos fogyasztókat árammal.", correct: true},
			{ text: "Leáll a gyújtás és a motor.", correct: false},
			{ text: "Az elektromos berendezések és repülőgép műszerei működésképtelenek lesznek.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik típusú motorágy felépítésére igaz, hogy a hajlított gerendatartókat, melyekhez a motor rezgéscsillapítók útján csatlakozik, rácsrudak támasztják ki?",
		answers: [
			{ text: "Vegyes építésű motorágy.", correct: true},
			{ text: "Gerendatartós motorágy.", correct: false},
			{ text: "Rácsos szerkezetű motorágy.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A másodlagos radarberendezések mérete kisebb és kisebb adóteljesítmény is elegendő a működésükhöz.",
		answers: [
			{ text: "Hamis", correct: false},
			{ text: "Igaz", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A légcsavar fordulatszáma, a minél nagyobb vonóerő elérése érdekében és a repülőgép rendeltetésétől függően tetszőlegesen növelhető.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "Ha rövid, zömök rudat bizonyos erővel összenyomunk, akkor …",
		answers: [
			{ text: "hosszmérete nő, keresztmetszete pedig csökken.", correct: false},
			{ text: "hosszmérete csökken, keresztmetszete pedig változatlan marad.", correct: false},
			{ text: "hosszmérete csökken, keresztmetszete pedig nő.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ha egy ampermérő skálájának közepén található a nulla töltés jelzése, akkor ez az ampermérő …",
		answers: [
			{ text: "az akkumulátorba és az akkumulátorból folyó áram erősségét mutatja.", correct: true},
			{ text: "a generátor felől folyó áram erősségét méri.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A szelencés variométer …",
		answers: [
			{ text: "műszerházába és Vidi-szelencéjébe is a statikus nyomást vezetik be.", correct: true},
			{ text: "műszerházába és Vidi-szelencéjébe is az össznyomást vezetik be.", correct: false},
			{ text: "műszerházába az össznyomást vezetik be. A műszer aneroid szelence segítségével mér.", correct: false},
			{ text: "műszerházába a statikus nyomást vezetik be. A műszer aneroid szelence segítségével mér.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mi az elektromos feszültség mértékegysége?",
		answers: [
			{ text: "Watt.", correct: false},
			{ text: "Amper.", correct: false},
			{ text: "Ohm.", correct: false},
			{ text: "Volt.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Ha egy repülőgép n=+4,4-re van méretezve és ezt a terhelést átlépjük, akkor …",
		answers: [
			{ text: "biztos törés következik be a repülőgép szerkezetében.", correct: false},
			{ text: "csak maradó alakváltozás léphet fel a repülőgép szerkezetében.", correct: false},
			{ text: "Ezt a terhelést a biztonsági tényezőnek köszönhetően még átléphetjük.", correct: false},
			{ text: "maradó alakváltozás vagy törés léphet fel a repülőgép szerkezetében.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Az északi fordulati hiba miatt az iránytű …",
		answers: [
			{ text: "az északi irányú fordulónál késik, déli irányú fordulónál siet.", correct: true},
			{ text: "az északi irányú fordulónál siet, déli irányú fordulónál késik.", correct: false},
			{ text: "a forduló során késik.", correct: false},
			{ text: "a forduló során siet.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A gyártó által előírt eljárás szerinti szegényítés után a keverék …",
		answers: [
			{ text: "elszegényedik.", correct: false},
			{ text: "eldúsul.", correct: false},
			{ text: "elszegényedik vagy eldúsul.", correct: false},
			{ text: "az 1:15-ös arányhoz közeli lesz.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A fafelületek korrózióvédelmét …",
		answers: [
			{ text: "plattírozással oldják meg.", correct: false},
			{ text: "festéssel oldják meg.", correct: true},
			{ text: "alitálással oldják meg.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A EAS sebesség …",
		answers: [
			{ text: "a sebességmérőről leolvasott érték.", correct: false},
			{ text: "meghatározása a légkör sűrűségváltozása miatt, navigációs számítások elvégzése érdekében szükséges.", correct: false},
			{ text: "meghatározása a Pitot-statikus rendszer beépítési hibái miatt szükséges.", correct: false},
			{ text: "meghatározása a levegő összenyomhatóságából származó mérési hiba miatt szükséges.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Egy felsőszárnyas repülőgép szárnya …",
		answers: [
			{ text: "dúcolt.", correct: false},
			{ text: "szabadonhordó.", correct: false},
			{ text: "lehet szabadonhordó és dúcolt is.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mind a generátor, mind az alternátor alapvetően váltakozó áramot állít elő. Az áram egyenirányítását … esetében diódák, … esetében pedig a kommutátor végezi el.",
		answers: [
			{ text: "az egyenáramú generátor – az alternátor", correct: false},
			{ text: "az alternátor – az egyenáramú generátor", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZILÁRDSÁGTAN",
		question: "A gyakorlatban a nyíró igénybevétellel együtt hajító és nyomó igénybevétel is fellép.",
		answers: [
			{ text: "Hamis", correct: false},
			{ text: "Igaz", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A hidraulikus rugóstagokban …",
		answers: [
			{ text: "A rugózó és a csillapító elem is gáz.", correct: false},
			{ text: "a rugózó elem folyadék, a csillapító elem gáz.", correct: false},
			{ text: "a rugózó elem gáz, a csillapító elem folyadék.", correct: false},
			{ text: "A rugózó és a csillapító elem is folyadék.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ha a gyártó által előírt szegényítési eljárást alkalmaztunk és azt tapasztaljuk, hogy az adott körülmények között a hűtés nem elegendő, akkor ebben a helyzetben …",
		answers: [
			{ text: "a keverékdúsítás csak nagyobb hengerfej-hőmérsékletet fog előidézni.", correct: false},
			{ text: "segíthetünk a keverék dúsításával, mert az a hengerfej-hőmérséklet csökkenése irányába hat.", correct: true},
			{ text: "a keverékszabályzással nem tudunk változtatni a hengerfej-hőmérsékleten.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "Ha a gumiabroncson és a keréktárcsán látható szerelési jeleknek nincs összeérő részük, akkor a gumiabroncs elhasználódott és újra kell cserélni.", correct: false},
			{ text: "Ha a gumiabroncson és a keréktárcsán látható szerelési jelek még éppen összeérnek, akkor a gumival nincs teendő.", correct: true},
			{ text: "Ha a gumiabroncson látható szerelési jel elmozdult, akkor az abroncsot le kell venni és újra össze kell rakni helyesen.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A legintenzívebb léghűtés …",
		answers: [
			{ text: "boxermotor esetén érhető el.", correct: false},
			{ text: "csillagmotor esetén érhető el.", correct: true},
			{ text: "sorosmotor esetén érhető el.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A … az égési térben levő gáznyomást és nagy hőterhelést kell elbírnia.",
		answers: [
			{ text: "szelepszárnak, a szeleptányérnak, a szeleprugónak és a szelepemelőnek", correct: false},
			{ text: "szelepszárnak és a szeleptányérnak", correct: false},
			{ text: "szeleptányérnak", correct: true},
			{ text: "szelepszárnak, a szeleptányérnak és a szeleprugónak", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mi az elektromos teljesítmény mértékegysége?",
		answers: [
			{ text: "Watt", correct: true},
			{ text: "Volt", correct: false},
			{ text: "Ohm", correct: false},
			{ text: "Amper", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A motor teljesítménye a levegő állapotváltozóinak függvényében a legnagyobb lesz …",
		answers: [
			{ text: "alacsony nyomású, meleg és nedves levegőben.", correct: false},
			{ text: "magas nyomású, meleg és száraz levegőben.", correct: false},
			{ text: "magas nyomású, hideg és száraz levegőben.", correct: true},
			{ text: "alacsony nyomású, hideg és nedves levegőben.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik kormányvezérlési megoldásra utalnak a következő alkatrészek: himba, csiga, feszítőzár?",
		answers: [
			{ text: "A tolórudas kormányvezérlésre.", correct: false},
			{ text: "A sodronyköteles kormányvezérlésre.", correct: true},
			{ text: "A rásegítéses kormányvezérlésre.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A tüzelőanyag-tartályok szellőzésének biztosítása arra szolgál, hogy …",
		answers: [
			{ text: "a tüzelőanyag fogyásával ne alakuljon ki vákuum a tartályokban.", correct: true},
			{ text: "lehetővé tegye a tüzelőanyag átszivattyúzását egyik tartályból a másikba.", correct: false},
			{ text: "a tartályok túltöltésénél a felesleges tüzelőanyag ki tudjon folyni.", correct: false},
			{ text: "lehetővé tegye a tüzelőanyag átfolyását egyik tartályból a másikba.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A fordulatszámmérő …",
		answers: [
			{ text: "a motor főtengely fordulatszámáról tájékoztat.", correct: false},
			{ text: "a légcsavartengely fordulatszámáról tájékoztat.", correct: false},
			{ text: "légcsavartípustól függően a motor főtengely vagy a légcsavartengely fordulatszámáról tájékoztat.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A gumiabroncs futófelületét karkasznak nevezzük",
		answers: [
			{ text: "Hamis", correct: true},
			{ text: "Igaz", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A C-módú transzponder C-módra kapcsolva …",
		answers: [
			{ text: "alapvetően a fedélzeti számot és a magasságot sugározza, de egyéb információk és adatok közlésére is alkalmas.", correct: false},
			{ text: "a fedélzeti számot és a magasságot sugározza.", correct: true},
			{ text: "csak a magasságot sugározza.", correct: false},
			{ text: "csak a fedélzeti számot sugározza.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Egy repülőgép 5000 láb magasságon 100 csomós CAS sebességgel 15 csomós hátszélben halad. Hozzávetőlegesen mekkora lesz a GS sebesség?",
		answers: [
			{ text: "125 kt", correct: true},
			{ text: "115 kt", correct: false},
			{ text: "95 kt", correct: false},
			{ text: "105 kt", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Hogyan nevezzük az acélcsövekből épült törzset, melynek borítása nem teherviselő?",
		answers: [
			{ text: "Rácsszerkezetű törzs.", correct: true},
			{ text: "Héjszerkezetű törzs.", correct: false},
			{ text: "Méhsejtrács szerkezetű törzs.", correct: false},
			{ text: "Félhéjszerkezetű törzs.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A műhorizont rossz látási körülmények között hasznos, mert kijelzője pontos információt ad a repülőgép állásszögéről.",
		answers: [
			{ text: "Igaz.", correct: false},
			{ text: "Hamis", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha a QNH nagyobb 1013,25 hPa-nál, akkor QNH szerint a magasságmérő többet mutat, mint QNE szerint.",
		answers: [
			{ text: "Igaz", correct: true},
			{ text: "Hamis", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A tárcsafék előnye, hogy súlya kisebbre adódik és aránylag kis mérete mellett is kellő fékezőnyomaték állítható elő.", correct: true},
			{ text: "A tárcsafék előnye, hogy súlya kisebbre adódik, de hátránya, hogy a kis mérete miatt nem állítható elő kellő fékezőnyomaték.", correct: false},
			{ text: "A dobfék hátránya, hogy súlya nagyobbra adódik, de ezzel állítható elő kellő fékezőnyomaték.", correct: false},
			{ text: "A dobfék előnye, hogy súlya kisebbre adódik és általa nagy fékezőnyomaték állítható elő.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A Pitot-fűtést …",
		answers: [
			{ text: "a süllyedés megkezdése előtt és jegesedési viszonyok között kapcsoljuk be.", correct: false},
			{ text: "jegesedési viszonyok esetén kapcsoljuk be.", correct: true},
			{ text: "téli időjárási körülmények között használjuk.", correct: false},
			{ text: "a süllyedés megkezdése előtt és téli időjárási körülmények között használjuk.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A repülőgépek elektromos rendszerében …",
		answers: [
			{ text: "a fogyasztók sorosan vannak bekötve.", correct: false},
			{ text: "a fogyasztók párhuzamosan vannak bekötve.", correct: true},
			{ text: "minden kapcsolás soros.", correct: false},
			{ text: "minden kapcsolás párhuzamos.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A tolórudas kormányvezérlés esetén a kihajlás veszélye ellen …",
		answers: [
			{ text: "himbákat alkalmaznak.", correct: false},
			{ text: "cső keresztmetszetű rudakat alkalmaznak.", correct: true},
			{ text: "tömör keresztmetszetű rudakat alkalmaznak.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A léghűtés hatékonyságát …",
		answers: [
			{ text: "a külső hőmérséklet befolyásolja.", correct: true},
			{ text: "a külső hőmérséklet nem befolyásolja.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Milyen színű a 100 LL típusú repülőbenzin?",
		answers: [
			{ text: "Lila", correct: false},
			{ text: "Piros", correct: false},
			{ text: "Zöld", correct: false},
			{ text: "Kék", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Az alábbiak közül melyik szárny biztosítja a legkisebb indukált ellenállást?",
		answers: [
			{ text: "A téglalap alaprajzú.", correct: false},
			{ text: "A trapéz alaprajzú.", correct: false},
			{ text: "Az elliptikus alaprajzú.", correct: true},
			{ text: "A hátra nyilazott.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A repülés gazdaságosságosságát a tüzelőanyag-levegő keverék égésének minősége alapján …",
		answers: [
			{ text: "a hengerfej-hőmérővel ellenőrizzük.", correct: false},
			{ text: "a kipufogógáz-hőmérővel ellenőrizzük.", correct: true},
			{ text: "a szívótérnyomás-mérővel ellenőrizzük.", correct: false},
			{ text: "a tüzelőanyagátfolyás-mérővel ellenőrizzük.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A … működése a késleltetett nyomáskiegyenlítődésen alapul.",
		answers: [
			{ text: "szívótérnyomásmérő", correct: false},
			{ text: "magasságmérő", correct: false},
			{ text: "sebességmérő", correct: false},
			{ text: "variométer", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Mire következtethetünk túl magas olajnyomás esetén?",
		answers: [
			{ text: "Nem elegendő az olajmennyiség.", correct: false},
			{ text: "Az olajszivattyú meghibásodására.", correct: false},
			{ text: "A motor túlmelegedésére.", correct: false},
			{ text: "A nyomásszabályzó szelep meghibásodására.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A Vno sebesség …",
		answers: [
			{ text: "az emelkedéshez tartozó biztonságos sebesség.", correct: false},
			{ text: "az a sebesség, ahol még a magassági kormány teljes kitérítése megengedett.", correct: false},
			{ text: "az sebesség, melyet csak nyugodt időben szabad átlépni.", correct: true},
			{ text: "a sebességmérő fehér sávjának felső határa.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Mi történik, ha a négyütemű Otto-motor működése során bekövetkezik, hogy a szívó és a kipufogó szelep egyidejűleg nyitott helyzetbe kerül?",
		answers: [
			{ text: "Ez csak akkor fordulhat elő, ha a gyújtás hibásan van beállítva, melynek következménye egyenetlen motorjárás lesz.", correct: false},
			{ text: "Ezt nevezzük szelepösszenyitásnak, mely a motor normál működése során a negyedik és az első ütem között rendeltetésszerű.", correct: true},
			{ text: "A motor normál működése során ilyen nem fordulhat elő, csak a gyújtás meghibásodásakor. Ha ez előfordul, a forgattyús mechanizmus törése is bekövetkezhet.", correct: false},
			{ text: "A motor normál működése során minden szelepnyitás során egy rövid pillanatra a szívó és a kipufogó szelep egyidejűleg nyitott helyzetbe kerül.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A repülőgép-rádiók … kHz-enkénti, vagy … felett a magaslégtéri irányításhoz szükséges rádiókapcsolat létesítéséhez … kHz-enkénti csatornakiosztással rendelkeznek.",
		answers: [
			{ text: "8,33 – FL 100 – 25", correct: false},
			{ text: "25 – FL 100 – 8,33", correct: false},
			{ text: "8,33 – FL 195 – 25", correct: false},
			{ text: "25 – FL 195 – 8,33", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha a Pitot-statikus rendszer az alternatív statikus portról kapja a statikus nyomást, a sebességmérő enyhén … fog mutatni, mivel az alternatív statikus port valamivel … légnyomást juttat a rendszerbe.",
		answers: [
			{ text: "kevesebbet – nagyobb", correct: false},
			{ text: "többet – kisebb", correct: true},
			{ text: "kevesebbet – kisebb", correct: false},
			{ text: "többet – nagyobb", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Milyen anyagból készül a rácsszerkezetű repülőgéptörzs?",
		answers: [
			{ text: "Ötvözött acél.", correct: true},
			{ text: "Ötvözött alumínium.", correct: false},
			{ text: "Titán.", correct: false},
			{ text: "Szálerősítésű műanyag.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Minél magasabban halad egy repülőgép annál … távolságból mérhető be a radarberendezéssel.",
		answers: [
			{ text: "kisebb", correct: false},
			{ text: "Egy repülőgép bemérhetősége nem függ a magasságától.", correct: false},
			{ text: "nagyobb", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A merítőolajozású kenés esetén …",
		answers: [
			{ text: "egy membrános szivattyú juttatja el a nyomás alá helyezett olajat a kenési pontokra.", correct: false},
			{ text: "a forgó alkatrészek belecsapnak az olajgyűtőben lévő olajba és a kenés a szétfröccsenő olajjal történik.", correct: true},
			{ text: "egy forgólapátos szivattyú juttatja el a nyomás alá helyezett olajat a kenési pontokra.", correct: false},
			{ text: "egy fogaskerék-szivattyú juttatja el a nyomás alá helyezett olajat a kenési pontokra.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Amikor a magasságmérő Kollsmann-ablakában található nyomásértéket a fogatógomb segítségével csökkentjük, akkor a kijelzett magasság …",
		answers: [
			{ text: "nem változik.", correct: false},
			{ text: "nőni fog.", correct: false},
			{ text: "csökkenni fog.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A motor által hajtott tüzelőanyag-szivattyú rendszerint …",
		answers: [
			{ text: "fogaskerékszivattyú.", correct: false},
			{ text: "forgólapátos szivattyú.", correct: false},
			{ text: "emelőkaros, membrános szivattyú.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Ha az állandó fordulatszámú légcsavarvezérlő egyik oldalra a lapátok saját tömegerő-nyomatékával állít, akkor a hidraulika a …",
		answers: [
			{ text: "nagy szögre állítást végzi.", correct: true},
			{ text: "kis szögre állítást végzi.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "… nevezzük azt a magasságot, melyet az ott uralkodó nyomás alapján a NEL meghatároz.",
		answers: [
			{ text: "Átváltási magasságnak", correct: false},
			{ text: "Sűrűségmagasságnak", correct: false},
			{ text: "Nyomásmagasságnak", correct: true},
			{ text: "Valódi magasságnak", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A repülőgépek kerékabroncsa …",
		answers: [
			{ text: "lehet tömlős vagy tömlő nélküli.", correct: true},
			{ text: "tömlő nélküli.", correct: false},
			{ text: "tömlős.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Mekkora megengedett terhelési többest kell minimálisan biztosítania egy Utility kategóriájú repülőgépnek az EASA CS-23 szerint?",
		answers: [
			{ text: "6", correct: false},
			{ text: "4.4", correct: true},
			{ text: "3.8", correct: false},
			{ text: "2.5", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha a repülőgép-vezető a helyes QNH nyomáshoz képest alacsonyabb nyomást állít be a magasságmérőn, akkor a műszer …",
		answers: [
			{ text: "a helyes értéknél többet fog mutatni.", correct: false},
			{ text: "helyes értéknél kevesebbet fog mutatni.", correct: true},
			{ text: "NEL körülmények között helyesen fog mutatni.", correct: false},
			{ text: "attól függően, hogy a nyomás magasabb vagy alacsonyabb 1013,25 hPa-nál, többet vagy kevesebbet fog mutatni.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Hol gyűlik össze a tüzelőanyag-tartályba került szennyeződés és kicsapódott víz?",
		answers: [
			{ text: "A tüzelőanyag fajsúlyánál kisebb fajsúlyú szennyeződés és a víz is a tüzelőanyag tetején úszik.", correct: false},
			{ text: "A tüzelőanyag fajsúlyánál nagyobb fajsúlyú szennyeződés és a víz is a tartály legalsó pontjára ülepedik.", correct: true},
			{ text: "A tüzelőanyag fajsúlyánál nagyobb fajsúlyú szennyeződés a tartály legalsó pontjára ülepedik, míg a víz a tüzelőanyag tetején úszik.", correct: false},
			{ text: "A tüzelőanyag-tartályba nem kerülhet sem szennyeződés, sem víz.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "Az ingadozó olajnyomás normál üzemi körülmény.", correct: false},
			{ text: "Ingadozó olajnyomást tapasztalva az olajrendszer komoly meghibásodására következtethetünk.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A motorzsalu zárt állapotában …",
		answers: [
			{ text: "a léghűtés hatékonyságát növeljük, ezért a hűtés csökken.", correct: false},
			{ text: "a léghűtés hatékonyságát csökkentjük, ezért a hűtés nő.", correct: false},
			{ text: "a léghűtés hatékonyságát csökkentjük, ezért a hűtés csökken.", correct: true},
			{ text: "a léghűtés hatékonyságát növeljük, ezért a hűtés nő.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A Bourdon-csöves olajnyomásmérés során alkalmazott potenciométeres távnyomásmérő rendszerben örvényáram keletkezik.", correct: false},
			{ text: "A Bourdon-csöves olajnyomásmérés során a cső keresztmetszetén átfolyó olaj forgólapátos mechanizmust forgat.", correct: false},
			{ text: "A Bourdon-csöves olajnyomásmérő érzékelője egy csőrugó, amiben nyomás hatására kiegyenesedést kiváltó erő ébred.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Milyen színnel jelölik a sebességmérőn a Vso és a Vfe sebességek által határolt tartományt?",
		answers: [
			{ text: "Piros", correct: false},
			{ text: "Fehér", correct: true},
			{ text: "Zöld", correct: false},
			{ text: "Sárga", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A simmizés …",
		answers: [
			{ text: "kényszerrezgés.", correct: false},
			{ text: "öngerjesztett lengés.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Melyik műszerek működéséhez szükséges a statikus légfelvevőből származó nyomás?",
		answers: [
			{ text: "Csak a variométer és a sebességmérő működéséhez.", correct: false},
			{ text: "Csak a sebességmérő működéséhez.", correct: false},
			{ text: "Csak a magasságmérő és a variométer működéséhez.", correct: false},
			{ text: "A sebességmérő, a magasságmérő és a variométer működéséhez.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Az olajhőmérő jellemzően …",
		answers: [
			{ text: "bimetálos hőmérő.", correct: false},
			{ text: "ellenállás-hőmérő.", correct: true},
			{ text: "hőelemes hőmérő.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Az elméleti keverési arány …",
		answers: [
			{ text: "a tüzelőanyag tömege és az égéshez szükséges levegő tömege között teremt kapcsolatot.", correct: true},
			{ text: "a tüzelőanyag térfogata és az égéshez szükséges levegő tömege között teremt kapcsolatot.", correct: false},
			{ text: "a tüzelőanyag térfogata és az égéshez szükséges levegő térfogata között teremt kapcsolatot.", correct: false},
			{ text: "a tüzelőanyag tömege és az égéshez szükséges levegő térfogata között teremt kapcsolatot.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ha a repülés során egy repülőgép ampermérője a negatív tartományban kb. 10 A-t jelez, akkor …",
		answers: [
			{ text: "az alternátor valószínűleg meghibásodott és az akkumulátor kisütés alatt áll.", correct: true},
			{ text: "az alternátor valószínűleg meghibásodott és az akkumulátor töltés alatt áll.", correct: false},
			{ text: "az akkumulátor valószínűleg meghibásodott.", correct: false},
			{ text: "normál üzemi jelenséget mutat.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "… a mágneses térerősség és a vízszintes mágneses intenzitás vektora által bezárt szög. … a mágneses meridián és az iránytű meridián által bezárt szög. … értéke a földrajzi észak és a mágneses észak iránya közötti szög.",
		answers: [
			{ text: "Az inklináció – A deklináció – A deviáció", correct: false},
			{ text: "Az inklináció – A deviáció – A deklináció", correct: true},
			{ text: "A deklináció – Az inklináció – A deviáció", correct: false},
			{ text: "A deviáció – A deklináció – Az inklináció", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Mire szolgál a kormánylapokon található merev trimlap?",
		answers: [
			{ text: "A merev trimlap szögének állítása a földön történik, melynek célja, hogy kompenzálja a repülőgép valamely tengely körüli elfordulási hajlamát.", correct: true},
			{ text: "Kitérési szögét a földön állítjuk, és az adott kormánylap súlykiegyenlítését szolgálja.", correct: false},
			{ text: "Mozgatása jellemzően sodronyköteles, és célja a repülőgép vezetéséhez szükséges kormányerő csökkentése.", correct: false},
			{ text: "Kitérését a kabinban elhelyezett trimkar segítségével állítjuk, és az adott kormánylap aerodinamikai kiegyenlítését szabályozzuk vele.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Emelkedő légcsavarnak nevezzük azt a merev légcsavart, melynek …",
		answers: [
			{ text: "beállítási szöge nagy, tehát vonóereje viszonylag nagy sebességeknél nagy.", correct: false},
			{ text: "beállítási szöge kicsi, tehát vonóereje viszonylag nagy sebességeknél nagy.", correct: false},
			{ text: "beállítási szöge kicsi, tehát vonóereje viszonylag kis sebességeknél nagy.", correct: true},
			{ text: "beállítási szöge nagy, tehát vonóereje viszonylag kis sebességeknél nagy.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "Munkavégzés csak a sűrítés alatt történik.", correct: false},
			{ text: "Munkavégzés csak a sűrítés és a terjeszkedés alatt történik.", correct: false},
			{ text: "Munkavégzés csak a terjeszkedés alatt történik.", correct: true},
			{ text: "A négy ütem egyszeri teljes leforgását nevezzük munkavégzésnek.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A sebességmérőn található fehér sáv alsó határa által jelölt sebességérték a zöld sáv alsó …",
		answers: [
			{ text: "határához képest magasabb.", correct: false},
			{ text: "határához képest alacsonyabb.", correct: true},
			{ text: "határával megegyezik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A repülőgépmotorok …",
		answers: [
			{ text: "szárazkarteresek.", correct: false},
			{ text: "nedveskarteresek.", correct: false},
			{ text: "lehetnek száraz- vagy nedveskarteresek.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha a repülőgép (a NEL-hez képest) hidegebb környezetbe kerül, a magasságmérője …",
		answers: [
			{ text: "A hőmérséklet-változás nem befolyásolja a magasságkijelzést.", correct: false},
			{ text: "a valóságosnál kevesebbet mutat.", correct: false},
			{ text: "a valóságosnál többet mutat.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A pörgettyűs iránytartó működése a … szabadságfokú pörgettyű mozgástörvényein alapszik. Pörgettyűjének forgástengelye …",
		answers: [
			{ text: "három – függőleges.", correct: false},
			{ text: "két – függőleges.", correct: false},
			{ text: "három – vízszintes.", correct: true},
			{ text: "két – vízszintes.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Hol kell elhelyezni a kormánylap súlykiegyenlítését szolgáló flatter-súlyt?",
		answers: [
			{ text: "A kormánylap forgástengelyéhez képest hátrébb a kormánylap kilépőéle irányába.", correct: false},
			{ text: "A kormánylap forgástengelyében.", correct: false},
			{ text: "A kormánylap felett.", correct: false},
			{ text: "A kormánylap forgástengelyéhez képest előrébb.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az elsődleges radarberendezések előnye, hogy a vett jel minősége nem függ a légijármű méretétől és nem méri be a légköri nedvességet és az álló céltárgyakat sem.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A Frise-típusú csűrőlapokat …",
		answers: [
			{ text: "kormányerő-csökkentésre alkalmazzák.", correct: false},
			{ text: "az ellentétes fordulónyomaték csökkentésére alkalmazzák.", correct: true},
			{ text: "a flatterelés ellen alkalmazzák.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik motoralkatrészt alkotják a következő részek: főcsapágyak, ellensúlyok, forgattyúcsapok és forgattyúkarok?",
		answers: [
			{ text: "A forgattyús mechanizmust.", correct: false},
			{ text: "A forgattyústengelyt.", correct: true},
			{ text: "A hajtórudat.", correct: false},
			{ text: "A forgattyús egységet.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A sebességmérő sárga sávja …",
		answers: [
			{ text: "a fékszárnyhasználatra vonatkozik.", correct: false},
			{ text: "a turbulenciától mentes időben még repülhető sebességtartomány.", correct: true},
			{ text: "az a tartomány, ahol még teljes kormánykitérítést tehetünk.", correct: false},
			{ text: "a normál üzemi tartomány.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A korszerű kisrepülőgépek kormányvezérlése jellemzően …",
		answers: [
			{ text: "pneumatikus.", correct: false},
			{ text: "elektromos.", correct: false},
			{ text: "tolórudas és sodronyköteles.", correct: true},
			{ text: "hidraulikus.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A négyütemű Otto-motor és a Diesel-motor lehet karburátoros vagy befecskendezéses.",
		answers: [
			{ text: "Igaz", correct: false},
			{ text: "Hamis", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A motor esetleges túlhűtéséről vagy túlmelegedéséről …",
		answers: [
			{ text: "a kipufugógáz-hőmérő segítségével kapunk információt.", correct: false},
			{ text: "az olajhőmérő segítségével kapunk információt.", correct: false},
			{ text: "a hengerfejhőmérő segítségével kapunk információt.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A szelence … mérésére használt szerkezet.",
		answers: [
			{ text: "folyadékszint", correct: false},
			{ text: "gyorulás", correct: false},
			{ text: "hőmérséklet", correct: false},
			{ text: "nyomás", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "… az a NEL szerinti magasság, amelyen a levegő sűrűségének értéke megegyezik a repülési magasságon mért tényleges légsűrűséggel.",
		answers: [
			{ text: "Az átváltási magasság", correct: false},
			{ text: "A valódi magasság", correct: false},
			{ text: "A nyomásmagasság", correct: false},
			{ text: "A sűrűségmagasság", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A statikus portról …",
		answers: [
			{ text: "az össznyomás és a statikus nyomás különbsége származik.", correct: false},
			{ text: "a dinamikus nyomás és a statikus nyomás különbsége származik.", correct: false},
			{ text: "az össznyomás és a dinamikus nyomás különbsége származik.", correct: true},
			{ text: "az össznyomás származik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A négy ütem sorrendben: …",
		answers: [
			{ text: "szívás – sűrítés – terjeszkedés – kipufogás.", correct: true},
			{ text: "sűrítés – terjeszkedés – szívás – kipufogás.", correct: false},
			{ text: "szívás – sűrítés – kipufogás – terjeszkedés.", correct: false},
			{ text: "kipufogás – szívás – sűrítés – terjeszkedés.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ha felszállás előtt az ülepítés során a levett mintában üledék van, akkor …",
		answers: [
			{ text: "a felszállást el kell halasztanunk.", correct: false},
			{ text: "ha csak kevés szennyeződést találunk, a repülést megkezdhetjük.", correct: false},
			{ text: "ezzel eltávolítottuk a szennyeződést a rendszerből.", correct: false},
			{ text: "ha többszöri ülepítés után is találunk üledéket a felszállást el kell halasztanunk.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Melyik állítás igaz a dob- és a tárcsafék működését összehasonlítva?",
		answers: [
			{ text: "A dob és a tárcsa együtt forog a kerékkel.", correct: true},
			{ text: "A dob együtt forog a kerékkel, a tárcsa a futószárhoz erősített állórészhez tartozik.", correct: false},
			{ text: "A dob és a tárcsa a futószárhoz erősített állórészhez tartozik.", correct: false},
			{ text: "A tárcsa együtt forog a kerékkel, a dob a futószárhoz erősített állórészhez tartozik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik szó illik a kipontozott részekre? …szár, …kisfej, …nagyfej",
		answers: [
			{ text: "hajtórúd", correct: true},
			{ text: "szelep", correct: false},
			{ text: "dugattyú", correct: false},
			{ text: "henger", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A korszerű repülőgépmotorknál …",
		answers: [
			{ text: "merítőolajozást alkalmaznak.", correct: false},
			{ text: "kényszercirkulációs kenést alkalmaznak.", correct: true},
			{ text: "kombinált olajozást alkalmaznak.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A sárkánynak a légcsavar vonóerejét a …",
		answers: [
			{ text: "a forgattyúház adja át a motorágyon keresztül.", correct: true},
			{ text: "a forgattyús egység adja át a motorágyon keresztül.", correct: false},
			{ text: "a forgattyústengely adja át a motorágyon keresztül.", correct: false},
			{ text: "a forgattyús mechanizmus adja át a motorágyon keresztül.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ha a tüzelőanyag és a levegő nem keveredik tökéletesen, akkor az égés lassúbb lesz, még akkor is, ha a keverék a legmegfelelőbb arányú.",
		answers: [
			{ text: "Igaz", correct: true},
			{ text: "Hamis", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A hengerfejhőmérő jellemzően …",
		answers: [
			{ text: "hőelemes hőmérő.", correct: true},
			{ text: "ellenálláshőmérő.", correct: false},
			{ text: "bimetálos hőmérő.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Két repülőgép azonos légtömegben repül és mindkettő magasságmérője 3000 lábat mutat. Mekkora magasságkülönbség van a két repülőgép között és melyik javára, ha az egyik helyesen állította magasságmérőjét QNH 1002-re, míg a másik tévedésből QNH 1020-at állított be?",
		answers: [
			{ text: "A QNH 1020-t használó repülőgép kb. 160 lábbal alacsonyabban közlekedik a QNH 1002-t használó repülőgéphez képest.", correct: false},
			{ text: "A QNH 1020-t használó repülőgép kb. 280 lábbal magasabban közlekedik a QNH 1002-t használó repülőgéphez képest.", correct: false},
			{ text: "A QNH 1020-t használó repülőgép kb. 690 lábbal magasabban közlekedik a QNH 1002-t használó repülőgéphez képest.", correct: false},
			{ text: "A QNH 1020-t használó repülőgép kb. 540 lábbal alacsonyabban közlekedik a QNH 1002-t használó repülőgéphez képest.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A korszerű repülőgépek indítása során …",
		answers: [
			{ text: "a sűrített levegő az elosztóból az indítószelepeken keresztül az egyes hengerekbe jut és megforgatja a főtengelyt.", correct: false},
			{ text: "egy elektormotor forgatja meg a főtengelyt.", correct: true},
			{ text: "egy elektromotor lendítőkereket pörget fel, melynek inerciáját használják a főtengelyt megforgatására.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Porlasztófűtés alkalmazása esetén a porlasztóba jutó levegő sűrűsége …",
		answers: [
			{ text: "csökken, ezért a keverék eldúsul, ami fordulatszám-csökkenéshez vezet.", correct: true},
			{ text: "nő, ezért a keverék elszegényedik, ami fordulatszám-növekedéshez vezet.", correct: false},
			{ text: "nő, ezért a keverék elszegényedik, ami fordulatszám-csökkenéshez vezet.", correct: false},
			{ text: "csökken, ezért a keverék eldúsul, ami fordulatszám-növekedéshez vezet.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A polgári légiközlekedésben alkalmazott radarok a … frekvenciatartományban dolgoznak.",
		answers: [
			{ text: "300 kHz – 30 GHz-es", correct: false},
			{ text: "30 MHz – 300 GHz-es", correct: false},
			{ text: "300 MHz – 30 GHz-es", correct: true},
			{ text: "300 kHz – 30 MHz-es", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ha egy motornál légcsavaráttétel kerül kiépítésre, akkor a légcsavartengely és a forgattyústengely fordulatszámának hányadosa …",
		answers: [
			{ text: "<1", correct: false},
			{ text: ">1", correct: false},
			{ text: "≤ 1", correct: true},
			{ text: "≥ 1", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Milyen meghibásodásra következtethetünk, ha a repülési helyzet változásától függetlenül a magasságmérő mutatója nem mozog tovább, a variométer mutatója nulla állásban marad változatlanul, de a sebességmérő reagál a sebességváltozásra?",
		answers: [
			{ text: "A statikus port eldugulására, valamint arra, hogy a sebességmérő pontatlanul fog mutatni.", correct: true},
			{ text: "A Pitot-cső eldugulására, valamint arra, hogy a sebességmérő pontatlanul fog mutatni.", correct: false},
			{ text: "A statikus port eldugulására, de ennek ellenére a sebességmérő pontosan fog mutatni.", correct: false},
			{ text: "A Pitot-cső eldugulására, de ennek ellenére a sebességmérő pontosan fog mutatni.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A felsőszárnyas (karburátoros) repülőgépek tüzelőanyag-ellátása rendszerint ejtőtartályos, ezért jellemzően egy kiegészítő szivattyú is kiépítésre kerül.", correct: false},
			{ text: "Az alsószárnyas (karburátoros) repülőgépek tüzelőanyag-ellátása rendszerint ejtőtartályos, ezért jellemzően egy kiegészítő szivattyú is kiépítésre kerül.", correct: false},
			{ text: "A felsőszárnyas (karburátoros) repülőgépek tüzelőanyag-ellátását rendszerint a motor által hajtott tüzelőanyag-szivatytyú biztosítja, és egy kiegészítő szivattyú is kiépítésre kerül.", correct: false},
			{ text: "Az alsószárnyas (karburátoros) repülőgépek tüzelőanyag-ellátását rendszerint a motor által hajtott tüzelőanyagszivaty-tyú biztosítja, és egy kiegészítő szivattyú is kiépítésre kerül.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A belsőégésű négyütemű repülőgépmotorok gyújtása …",
		answers: [
			{ text: "a jobb indítóképesség miatt rendszerint elektromos, melynek működéséhez az elektromos rendszer feszültsége szükséges.", correct: false},
			{ text: "a biztonság növelése miatt rendszerint elektromos, melynek működéséhez a generátor biztosít feszültséget.", correct: false},
			{ text: "a biztonság növelése miatt rendszerint kétkörös, mágneses, melynek működéséhez nem szükséges az elektromos rendszer feszültsége.", correct: true},
			{ text: "rendszerint a jobb indítóképesség érdekében kétkörös, és a biztonság növelése miatt mágneses, melynek üzembiztonságát az elektromos rendszer feszültség nyújtja.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A fojtószelep hirtelen nyitásakor a motorba áramló keverék elszegényedik. A helyes keveréket ilyenkor …",
		answers: [
			{ text: "a kiegyenlítő fúvóka állítja vissza.", correct: false},
			{ text: "a főfúvóka állítja vissza.", correct: false},
			{ text: "a féklevegő fúvóka állítja vissza.", correct: false},
			{ text: "gyorsítóberendezés állítja vissza.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A repülőgépek hajtóműve lehet kétütemű vagy négyütemű Otto-motor, Diesel-motor, légcsavaros-gázturbinás vagy gázturbinás sugárhajtómű.", correct: true},
			{ text: "Kétütemű motorokat nem alkalmaznak a repülésben.", correct: false},
			{ text: "Diesel-motorokat nem alkalmaznak a repülésben.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A műhorizont működése a … szabadságfokú pörgettyű mozgástörvényein alapszik. Pörgettyűjének forgástengelye …",
		answers: [
			{ text: "három – függőleges.", correct: true},
			{ text: "két – vízszintes.", correct: false},
			{ text: "három – vízszintes.", correct: false},
			{ text: "két – függőleges.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Hogyan nevezzük azt a törzsszerkezetet, melynél a borítás mellett törzskeretek és hosszmerevítők is részt vesznek teherviselésben?",
		answers: [
			{ text: "Rácsszerkezetű törzs.", correct: false},
			{ text: "Héjszerkezetű törzs.", correct: false},
			{ text: "Méhsejtrács szerkezetű törzs.", correct: false},
			{ text: "Félhéjszerkezetű törzs.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "a kis hőértékű gyertya viszonylag kevésbé melegszik, hosszú és vékony lábú.", correct: false},
			{ text: "a nagy hőértékű gyertya viszonylag jobban melegszik, hoszszú és vékony lábú.", correct: false},
			{ text: "a nagy hőértékű gyertya viszonylag kevésbé melegszik, rövid, vaskos lábú.", correct: true},
			{ text: "a kis hőértékű gyertya viszonylag jobban melegszik, rövid, vaskos lábú.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A bütyköstengelyen levő bütykök száma megegyezik a motor hengereinek számával.", correct: false},
			{ text: "A bütyköstengelyen levő bütykök száma megegyezik a motor szelepeinek számával.", correct: true},
			{ text: "A bütyköstengelyen kétszer annyi bütyök helyezkedik el, mint a motor szelepeinek száma.", correct: false},
			{ text: "A bütyköstengelyen fele annyi bütyök helyezkedik el, mint a motor szelepeinek száma.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A légcsavar kézzel történő megforgatása életveszélyes lehet, …",
		answers: [
			{ text: "mert a motor beindulhat, ha a gyújtáskapcsoló fel van kapcsolva.", correct: true},
			{ text: "mert a motor beindulhat, ha a főkapcsoló fel van kapcsolva.", correct: false},
			{ text: "mert a motor beindulhat, de csak akkor, ha egyidejűleg fel van kapcsolva a gyújtáskapcsoló és a főkapcsoló.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A biztonság növelése miatt a mágneses gyújtásrendszerben …",
		answers: [
			{ text: "két gyertyasort alkalmaznak, melyhez elegendő egy gyújtómágnes.", correct: false},
			{ text: "két gyújtómágnest alkalmaznak, melyhez elegendő egy gyertyasor.", correct: false},
			{ text: "két gyújtómágnest és két gyertyasor alkalmaznak.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Hogyan nevezzük azt a törzsszerkezetet, melynél a teherviselő elemek a borítás és a törzskeretek?",
		answers: [
			{ text: "Héjszerkezetű törzs.", correct: true},
			{ text: "Félhéjszerkezetű törzs.", correct: false},
			{ text: "Méhsejtrács szerkezetű törzs.", correct: false},
			{ text: "Rácsszerkezetű törzs.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Az alábbiak közül melyik műszer jelzi ki a hossztengely körüli elfordulás szögsebességét?",
		answers: [
			{ text: "A csúszásjelző.", correct: false},
			{ text: "Az elfordulásjelző.", correct: false},
			{ text: "A műhorizont.", correct: false},
			{ text: "Az elfordulás és dőlésjelző.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha repülés közben azt tapasztaljuk, hogy a kijelzett sebesség nem a sebességváltozás, hanem a magasságváltozás hatására változik, akkor valószínűleg …",
		answers: [
			{ text: "a statikus port eldugult.", correct: false},
			{ text: "a statikus vezeték ereszt.", correct: false},
			{ text: "a Pitot-cső eldugult.", correct: true},
			{ text: "a Pitot-vezeték ereszt.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Egy 2500 lábon közlekedő repülőgép sebessége TAS-ban 100 csomó, a GS pedig 98 csomó. A különbség …",
		answers: [
			{ text: "a magasságváltozással összefüggő sűrűségváltozás miatt adódik.", correct: false},
			{ text: "az összenyomhatósági hiba miatt adódik.", correct: false},
			{ text: "a szél következménye.", correct: true},
			{ text: "a beépítési hiba miatt adódik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A kipufogószelep az AHP előtt nyit és a FHP előtt zár.", correct: false},
			{ text: "A kipufogószelep az AHP után nyit és a FHP előtt zár.", correct: false},
			{ text: "A kipufogószelep az AHP után nyit és a FHP után zár.", correct: false},
			{ text: "A kipufogószelep az AHP előtt nyit és a FHP után zár.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A keverék összetételének aránya nem befolyásolja a motor kopogását.", correct: false},
			{ text: "A dúsabb keverék hajlamosabb a kopogásra.", correct: false},
			{ text: "A szegényebb keverék hajlamosabb a kopogásra.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az alábbi értékek közül melyik jelöli egy akkumulátor kapacitását?",
		answers: [
			{ text: "24 V", correct: false},
			{ text: "44 Ah", correct: true},
			{ text: "30 W", correct: false},
			{ text: "10 A", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mi az áramerősség mértékegysége?",
		answers: [
			{ text: "Amper", correct: true},
			{ text: "Ohm", correct: false},
			{ text: "Volt", correct: false},
			{ text: "Watt", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A motorzsalu nyitott állapotában …",
		answers: [
			{ text: "a repülőgép káros ellenállása nem változik.", correct: false},
			{ text: "a repülőgép káros ellenállása nagyobb.", correct: true},
			{ text: "a repülőgép káros ellenállása kisebb.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz.",
		answers: [
			{ text: "Mivel a mágneses gyújtásrendszert már elavult, a repülésben a biztonságosabb akkumulátoros gyújtásrendszert alkalmazzák.", correct: false},
			{ text: "A repülésben a biztonság miatt a mágneses gyújtásrendszert alkalmazzák, mert független a repülőgép elektromos rendszerétől.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ha olyan jeleket tapasztalunk, melyek a motor olajrendszerének meghibásodására utalnak, …",
		answers: [
			{ text: "a repülést folytathatjuk, fokozott figyelemmel kísérve a hibajelenséget.", correct: false},
			{ text: "a legrövidebb időn belül (a probléma súlyosságától függően kitérő repülőtérre vagy kényszerleszállással) le kell szállni.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Melyik műszerek működéséhez szükséges a Pitot-csőből származó nyomás?",
		answers: [
			{ text: "Csak a sebességmérő működéséhez.", correct: true},
			{ text: "Csak a magasságmérő működéséhez.", correct: false},
			{ text: "Csak a sebességmérő és a variométer működéséhez.", correct: false},
			{ text: "A sebességmérő, a magasságmérő és a variométer működéséhez.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Ohm törvénye szerint melyik egyenlőség igaz? (R ellenállás, U feszültség, I áramerősség)",
		answers: [
			{ text: "U = R / I", correct: false},
			{ text: "R ∙ U = I", correct: false},
			{ text: "I = U / R", correct: true},
			{ text: "U ∙ I = R", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A SAE rendszerben az olaj viszkozitását kifejező szám minél …, annál … az olaj viszkozitása, tehát annál …",
		answers: [
			{ text: "kisebb – nagyobb – sűrűbb.", correct: false},
			{ text: "nagyobb – nagyobb – hígabb.", correct: false},
			{ text: "kiesebb – kisebb – sűrűbb.", correct: false},
			{ text: "nagyobb – nagyobb – sűrűbb.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ütemhatár-eltolás …",
		answers: [
			{ text: "csak az első és a második ütemben jelentkezik.", correct: false},
			{ text: "csak az negyedik és az első ütemben jelentkezik.", correct: false},
			{ text: "csak a második és a harmadik ütemben jelentkezik.", correct: false},
			{ text: "mind a négy ütemben jelentkezik.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az alábbiak közül mely frekvenciatartomány felel meg a COM-tartománynak?",
		answers: [
			{ text: "118,000-136,975 MHz.", correct: true},
			{ text: "108,000-118,000 MHz.", correct: false},
			{ text: "108,000-136,975 MHz.", correct: false},
			{ text: "104,000-121,500 MHz.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A gyújtás a fordulatszámtól függetlenül a FHP előtt történik.", correct: false},
			{ text: "A gyújtás a fordulatszám függvényében a FHP előtt történik.", correct: true},
			{ text: "A gyújtás a fordulatszám függvényében a FHP után történik.", correct: false},
			{ text: "A gyújtás mindig a FHP-ban történik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A repülés során mekkora feszültséget jelez a feszültségmérő töltött akkumulátor esetén egy 14 V-os rendszerben, ha az alternátor meghibásodik?",
		answers: [
			{ text: "Kb. 12 V-ot, mely folyamatosan csökkenni fog.", correct: true},
			{ text: "Kb. 14 V-ot, mely folyamatosan csökkenni fog.", correct: false},
			{ text: "Kb. 7 V-ot, mely folyamatosan csökkenni fog.", correct: false},
			{ text: "Kb. 10,5 V-ot, mely folyamatosan csökkenni fog.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "A légiforgalmi irányító egységek főként …",
		answers: [
			{ text: "másodlagos radarjelek alapján dolgoznak.", correct: true},
			{ text: "elsődleges radarjelek alapján dolgoznak.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Milyen szárnyszerkezetre utalnak a következő szerkezeti megoldások: hiányzó főtartók, hosszmerevítőkkel erősített teherviselő borítás, integrál szerkezet?",
		answers: [
			{ text: "Héjszerkezetű.", correct: true},
			{ text: "Félhéjszerkezetű.", correct: false},
			{ text: "Tartószerkezetes.", correct: false},
			{ text: "Szabadonhordó.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A befecskendezéses tüzelőanyag-rendszer működéséről a … segítségével kapunk információt.",
		answers: [
			{ text: "tüzelőanyagnyomás-mérő vagy a tüzelőanyagátfolyás-mérő", correct: true},
			{ text: "tüzelőanyagszint-jelző és a kipufogógáz-hőmérő", correct: false},
			{ text: "tüzelőanyaghőmérséklet-mérő és a hengerfejhőmérő", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Szívótérnyomás-mérővel …",
		answers: [
			{ text: "a befecskendezéses motorral felszerelt repülőgépek motorteljesítményét ellenőrizzük.", correct: false},
			{ text: "az alsószárnyas és a befecskendezéses motorral felszerelt repülőgépek motorteljesítményét ellenőrizzük.", correct: false},
			{ text: "az alsószárnyas repülőgépek motorteljesítményét ellenőrizzük.", correct: false},
			{ text: "az állandó fordulatszámú légcsavarral felszerelt repülőgépek motorteljesítményét ellenőrizzük.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A szívócsőbe jutó keverék mennyiségét …",
		answers: [
			{ text: "porlasztó súlyszelepe szabályozza.", correct: false},
			{ text: "a porlasztó fúvókája szabályozza.", correct: false},
			{ text: "a porlasztó tűszelepe szabályozza.", correct: false},
			{ text: "a porlasztó fojtószelepe szabályozza.", correct: true},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Mi az elektromos ellenállás mértékegysége?",
		answers: [
			{ text: "Ohm", correct: true},
			{ text: "Volt", correct: false},
			{ text: "Amper", correct: false},
			{ text: "Watt", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A bütyköstengely …",
		answers: [
			{ text: "a forgattyústengely két fordulatával egyet fordul.", correct: true},
			{ text: "a forgattyústengely egy fordulatával kettőt fordul.", correct: false},
			{ text: "a forgattyústengely négy fordulatával egyet fordul", correct: false},
			{ text: "a forgattyústengely egy fordulatával egyet fordul.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Mikor a leghajlamosabb a motor a túlmelegedésre?",
		answers: [
			{ text: "kis fordulatszám és kis sebesség esetén.", correct: false},
			{ text: "kis fordulatszám és nagy sebesség esetén.", correct: false},
			{ text: "nagy fordulatszám és nagy sebesség esetén.", correct: false},
			{ text: "nagy fordulatszám és kis sebesség esetén.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Négyhengeres Otto-motor esetén a forgattyústengely kétszeri körbefordulása esetén …",
		answers: [
			{ text: "minden hengerben négy ütem játszódik le.", correct: true},
			{ text: "minden hengerben nyolc ütem játszódik le.", correct: false},
			{ text: "minden hengerben nem fog le játszódni négy ütem.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A vegyeshűtés esetén …",
		answers: [
			{ text: "a hengerpalástot folyadék hűti, míg a hengerfejen léghűtés kerül alkalmazásra.", correct: false},
			{ text: "a forgattyúházat folyadék hűti, míg a hengerfejen léghűtés kerül alkalmazásra.", correct: false},
			{ text: "a hengerfejet folyadék hűti, míg a hengerpaláston léghűtés kerül alkalmazásra.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Milyen anyagból készül a kisrepülőgépek belsőégésű motorjának főtengelye?",
		answers: [
			{ text: "Szálerősítésű műanyag.", correct: false},
			{ text: "Ötvözött acél.", correct: true},
			{ text: "Ötvözött alumínium.", correct: false},
			{ text: "Titán.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Ha a repülőgép nem rendelkezik alternatív statikus légfelvevővel, akkor a statikus port eldugulásakor …",
		answers: [
			{ text: "a sebességmérő reagál a sebességváltozásra, de hibásan; a magasságmérő mutatója mozdulatlan marad és az eldugulás pillanatában mért magasságot fogja mutatni; a variométer nulla állásba kerül és ott is marad.", correct: true},
			{ text: "a sebességmérő helyesen mutat tovább; a magasságmérő mutatója mozdulatlan marad és az eldugulás pillanatában mért magasságot fogja mutatni; a variométer működni fog, de hibás értékeket fog mutatni.", correct: false},
			{ text: "a sebességmérő mutatója mozdulatlan marad és az eldugulás pillanatában mért sebességet fogja mutatni; a magasságmérő és a variométer működni fog, de hibás értékeket fog jelezni.", correct: false},
			{ text: "a sebességmérő nulla sebességet fog mutatni; a magasságmérő reagál a magasságváltozásra, de hibásan; a variométer az eldugulás pillanatában mért értéket fogja mutatni mozdulatlanul.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A statikus port eldugulásakor a sebességmérő …",
		answers: [
			{ text: "barométerként fog működni.", correct: false},
			{ text: "nem reagál a sebességváltozásra.", correct: false},
			{ text: "a légnyomás változásának megfelelően fals értéket mutat.", correct: true},
			{ text: "a helyes IAS értéknél többet fog mutatni.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Ha járó motornál az egyik gyújtáskört lekapcsoljuk, akkor …",
		answers: [
			{ text: "a fordulatszám változatlan marad, mert a rendszer lényege, hogy a két kör helyettesíti egymást.", correct: false},
			{ text: "a fordulatszám nőni fog, mert a két gyertya hátránya, hogy az égési folyamat időtartamát növeli.", correct: false},
			{ text: "a fordulatszám esni fog, mert a két gyertya az égési folyamat időtartamát kedvezően csökkenti.", correct: true},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Szelepösszenyitás …",
		answers: [
			{ text: "csak a második és a harmadik ütem között történik.", correct: false},
			{ text: "csak a harmadik és a negyedik ütem között történik.", correct: false},
			{ text: "csak a negyedik és az első ütem között történik.", correct: true},
			{ text: "mind a négy ütemben történik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Bal fordulóban a csúszásjelző enyhén jobbra tér ki. Milyen beavatkozással állíthatjuk vissza a forduló helyes menetét?",
		answers: [
			{ text: "Jobbra csűréssel vagy bal pedállal.", correct: false},
			{ text: "Balra csűréssel vagy jobb pedállal.", correct: true},
			{ text: "Jobbra csűréssel vagy jobb pedállal.", correct: false},
			{ text: "Balra csűréssel vagy bal pedállal.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A kompresszióviszony …",
		answers: [
			{ text: "a hőközlés végén uralkodó gáznyomás és a sűrítés végén előálló nyomás viszonya.", correct: false},
			{ text: "a beáramló és a kiáramló gázok térfogatának hányadosa.", correct: false},
			{ text: "hengertérfogat és a sűrítési térfogat aránya.", correct: true},
			{ text: "a tüzelőanyag és a levegő aránya a hengerben.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A nedveskarteres motorok esetében külön olajtartály kerül kiépítésre.", correct: false},
			{ text: "A szárazkarteres motorok esetében külön olajtartály kerül kiépítésre.", correct: true},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "Azt a két főtartós szárnyat, melynek belépőéle és a két főtartó közötti része réteges- vagy durállemez borítású, és így a borítás részben teherviselő, … szárnynak nevezzük.",
		answers: [
			{ text: "szabadonhordó", correct: false},
			{ text: "tartószerkezetes", correct: false},
			{ text: "félhéjszerkezetű", correct: true},
			{ text: "héjszerkezetű", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Növekvő magassággal a keveréket …",
		answers: [
			{ text: "szegényíteni kell, azaz a keverék tüzelőanyag-mennyiségét csökkentjük, különben a keverék eldúsúl.", correct: true},
			{ text: "szegényíteni kell, azaz a keverék levegőmennyiségét csökkentjük, különben a keverék eldúsúl.", correct: false},
			{ text: "dúsítani kell, azaz a keverék tüzelőanyag-mennyiségét növeljük, különben a keverék elszegényedik.", correct: false},
			{ text: "dúsítani kell, azaz a keverék levegőmennyiségét növeljük, különben a keverék elszegényedik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "A Va sebesség …",
		answers: [
			{ text: "az a sebesség, ahol még a magassági kormány teljes kitérítése megengedett.", correct: true},
			{ text: "az emelkedéshez tartozó biztonságos sebesség.", correct: false},
			{ text: "a sebességmérő fehér sávjának felső határa.", correct: false},
			{ text: "az sebesség, melyet csak nyugodt időben szabad átlépni.", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Beindul-e a repülőgép motorja mágneses gyújtás esetén, ha az osztott főkapcsolón csak az akkumulátor kapcsolója van felkapcsolva?",
		answers: [
			{ text: "Igen", correct: true},
			{ text: "Nem", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "NEL körülmények között, tengerszinten, szélcsendben (és amennyiben összenyomhatósági hiba nem keletkezik) …",
		answers: [
			{ text: "az IAS, a CAS, a TAS és a GS értéke megegyezik.", correct: false},
			{ text: "az IAS, a TAS és a GS értéke megegyezik.", correct: false},
			{ text: "a CAS, a TAS és a GS értéke megegyezik.", correct: true},
			{ text: "az IAS, a CAS és a TAS értéke megegyezik.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A henger indikált középnyomása alatt azt kell érteni, mellyel mint …",
		answers: [
			{ text: "változó nyomással a motor négy hengere ugyanakkora munkát végez, mint változó nyomás mellett egy ciklus alatt.", correct: false},
			{ text: "állandó nyomással a motor négy hengere ugyanakkora munkát végez, mint változó nyomás mellett egy ciklus alatt.", correct: false},
			{ text: "állandó nyomással a motor egy hengere ugyanakkora munkát végez, mint változó nyomás mellett egy ciklus alatt.", correct: true},
			{ text: "változó nyomással a motor egy hengere ugyanakkora munkát végez, mint állandó nyomás mellett egy ciklus alatt.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Melyik állítás igaz?",
		answers: [
			{ text: "A repülőgépek tüzelőanyagai tiszta, adalékoktól mentes szénhidrogén-párlatok.", correct: false},
			{ text: "A kompresszióviszonyhoz képest túl alacsony oktánszámú benzin használatakor vagy a keverék túlszegényedése esetén berobbanás jöhet létre.", correct: true},
			{ text: "A lobbanáspont az a hőmérséklet, amelyen a tüzelőanyag levegővel érintkezve minden külső gyújtás nélkül meggyullad.", correct: false},
			{ text: "A benzin normál heptán és izo-oktán elegye.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "… szárny esetében a főtartók szerepét a merevített borítólemez veszi át, mely mint fő teherviselő elem vesz részt az igénybevételek felvételében.",
		answers: [
			{ text: "A héjszerkezetű", correct: true},
			{ text: "A félhéjszerkezetű", correct: false},
			{ text: "A tartószerkezetes", correct: false},
			{ text: "A szabadonhordó", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "A magassági motor teljesítménye növekvő magassággal …",
		answers: [
			{ text: "a teljes nyomásmagasságig nő, majd efelett csökkenni kezd.", correct: true},
			{ text: "a teljes nyomásmagasságig változatlan, majd efelett csökkenni kezd.", correct: false},
			{ text: "a teljes nyomásmagasságig csökken, majd efelett változatlan marad.", correct: false},
			{ text: "a teljes nyomásmagasságig nő, majd efelett változatlan marad.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Két (teljesen azonos) repülőgép (NEL körülmények között) különböző magasságon azonos IAS sebességgel repül vízszintesen. Milyen reláció van a két repülőgép állásszöge és teljesítménybeállítása között?",
		answers: [
			{ text: "A magasabban közlekedő nagyobb állásszögön repül és nagyobb teljesítménybeállítást alkalmaz.", correct: false},
			{ text: "Teljesítménybeállításuk azonos, de a magasabban közlekedő állásszöge nagyobb.", correct: false},
			{ text: "Állásszögük azonos, de a magasabban közlekedő nagyobb teljesítménybeállítást alkalmaz.", correct: true},
			{ text: "Állásszögük és teljesítménybeállításuk is azonos.", correct: false},
		],
		hint:"",
	},
	{
		subject: "SZERKEZETTAN",
		question: "A korszerű repülőgépek orr- vagy farokfutóműve …",
		answers: [
			{ text: "ha kormányozható az lábkormánnyal történik, de vannak olyan típusok, ahol nincs lehetőség kormányzásra.", correct: true},
			{ text: "minden repülőgépnél kormányozható a lábkormánnyal.", correct: false},
			{ text: "nem kormányozató.", correct: false},
			{ text: "kormánykerékkel kormányozható.", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Alsószárnyas repülőgépeknél a fő tüzelőanyag-szivattyú elektromos hajtású, melyet meghibásodás esetén a motor által hajtott tartalék szivattyú egészít ki.",
		answers: [
			{ text: "Hamis", correct: true},
			{ text: "Igaz", correct: false},
		],
		hint:"",
	},
	{
		subject: "MOTORTAN",
		question: "Milyen vezérlésre utalnak a következő alkatrészek: egyenesbe vezető, himba, tolórúd?",
		answers: [
			{ text: "Az oldaltszelepelt és alulvezérelt vezérlésre.", correct: false},
			{ text: "A felülszelepelt és felülvezérelt vezérlésre.", correct: false},
			{ text: "A felülszelepelt és alulvezérelt vezérlésre", correct: true},
		],
		hint:"",
	},
	{
		subject: "MŰSZERTAN",
		question: "Melyik sebesség választja el a sebességmérő zöld és sárga tartományát?",
		answers: [
			{ text: "Vfe", correct: false},
			{ text: "Va", correct: false},
			{ text: "Vno", correct: true},
			{ text: "Vne", correct: false},
		],
		hint:"",
	},
	{
		subject: "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
		question: "Az alábbiak közül mely frekvenciatartomány felel meg az AIR-tartománynak?",
		answers: [
			{ text: "108,000-118,000 MHz.", correct: false},
			{ text: "118,000-136,975 MHz.", correct: false},
			{ text: "108,000-136,975 MHz.", correct: true},
			{ text: "104,000-121,500 MHz.", correct: false},
		],
		hint:"",
	},
    {
        "subject": "MŰSZERTAN",
        "question": "A sebességmérés során a sűrűségváltozás következtében kialakuló pontatlanságot …",
        "answers": [
            {
                "text": "a CAS és a TAS nem tartalmazza.",
                "correct": false
            },
            {
                "text": "az IAS és a CAS nem tartalmazza.",
                "correct": false
            },
            {
                "text": "a TAS és a GS nem tartalmazza.",
                "correct": true
            },
            {
                "text": "a CAS, a TAS és a GS nem tartalmazza.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Hogyan nevezzük azt a tüzelőanyag-mérőt, melynek kijelzőjét a szárnyon elhelyezve, vagy a kabinban a repülőgép-vezető melletti ablakok felett, a szárnytő és a törzs csatlakozásánál találhatjuk meg?",
        "answers": [
            {
                "text": "Úszós-örvényáramú mérő.",
                "correct": false
            },
            {
                "text": "Úszós-potenciométeres mérő.",
                "correct": false
            },
            {
                "text": "Úszós-kúpfogaskerekes mérő.",
                "correct": true
            },
            {
                "text": "Úszós-centrifugális mérő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Mire következtethetünk, ha a repülés során az olajhőmérséklet növekedni kezd, majd egy idő után az olajnyomásban hirtelen esés következik be?",
        "answers": [
            {
                "text": "Túl nagy az olajmennyiség, a motor kinyomja magából.",
                "correct": false
            },
            {
                "text": "Nem elegendő az olajmennyiség.",
                "correct": false
            },
            {
                "text": "Jelentős olajszivárgásra.",
                "correct": true
            },
            {
                "text": "A motor túlmelegedésére.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "A tartószerkezetes és a félhéjszerkezetű szárny aerodinamikailag megkívánt alakhűségét …",
        "answers": [
            {
                "text": "dobozos szerkezetek biztosítják.",
                "correct": false
            },
            {
                "text": "a főtartók biztosítják.",
                "correct": false
            },
            {
                "text": "a bordák biztosítják.",
                "correct": true
            },
            {
                "text": "a vászon és a lemezborítás biztosítja.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A magassági motorral felszerelt repülőgép … mint egy azonos kategóriájú feltöltő nélküli motorral felszerelt repülőgép esetében.",
        "answers": [
            {
                "text": "elméleti és gyakorlati csúcsmagassága ugyanakkora",
                "correct": false
            },
            {
                "text": "elméleti és gyakorlati csúcsmagassága nagyobb",
                "correct": true
            },
            {
                "text": "elméleti csúcsmagassága nagyobb, de gyakorlati csúcsmagassága ugyanakkora",
                "correct": false
            },
            {
                "text": "elméleti csúcsmagassága nagyobb, de gyakorlati csúcsmagassága kisebb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A tüzelőanyag-rendszer működésére veszélyes jegesedés …",
        "answers": [
            {
                "text": "fagypont alatti léghőmérséklet esetén jelentkezik.",
                "correct": false
            },
            {
                "text": "akkor jön létre, amikor a repülőgép felülete fagypont alá hűlt és melegebb, nedvesebb légtömegbe repül bele.",
                "correct": false
            },
            {
                "text": "széles hőmérséklet tartományban, fagypont alatti léghőmérséklet, de akár 20°C-nál magasabb léghőmérséklet esetén is ki alakulhat.",
                "correct": true
            },
            {
                "text": "20°C-nál magasabb léghőmérséklet esetén már nem alakulhat ki.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "Milyen anyagból készül a kompozit technológiával épült repülőgéptörzs?",
        "answers": [
            {
                "text": "Ötvözött alumínium.",
                "correct": false
            },
            {
                "text": "Titán.",
                "correct": false
            },
            {
                "text": "Szálerősítésű műanyag.",
                "correct": true
            },
            {
                "text": "Ötvözött acél.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A torlólapátos variométer …",
        "answers": [
            {
                "text": "szelencés műszer.",
                "correct": false
            },
            {
                "text": "működése a hőellenállás-változáson alapul.",
                "correct": false
            },
            {
                "text": "a késleltetett nyomáskiegyenlítődés elvén működik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A léghűtéses motor hűtéséről …",
        "answers": [
            {
                "text": "a hengerfej-hőmérő tájékoztat.",
                "correct": true
            },
            {
                "text": "a kipufugógáz-hőmérő tájékoztat.",
                "correct": false
            },
            {
                "text": "a szívótérnyomás-mérő tájékoztat.",
                "correct": false
            },
            {
                "text": "a tüzelőanyagátfolyás-mérő tájékoztat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Mire következtethetünk, ha a repülőgép magasságváltozásától függetlenül a variométer 0 függőleges sebességet mutat?",
        "answers": [
            {
                "text": "A Pitot-cső eldugult",
                "correct": false
            },
            {
                "text": "A statikus port eldugult.",
                "correct": true
            },
            {
                "text": "A statikus vezeték ereszt.",
                "correct": false
            },
            {
                "text": "A Pitot-vezeték ereszt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A szelepet a szeleprugó nyitja és a bütyök zárja.",
                "correct": false
            },
            {
                "text": "A szelepet a bütyök nyitja és a szeleprugó zárja.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A sebességmérő sárga tartományának …",
        "answers": [
            {
                "text": "alsó határa a Vs átesési sebesség, felső határa Vno normál üzemi sebesség.",
                "correct": false
            },
            {
                "text": "alsó határa a Vno normál üzemi sebesség, felső határa a Vne át nem léphető sebesség.",
                "correct": true
            },
            {
                "text": "alsó határa a Va manőverezési sebesség, felső határa Vno normál üzemi sebesség.",
                "correct": false
            },
            {
                "text": "alsó határa a Va manőverezési sebesség, felső határa a Vne át nem léphető sebesség.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A szívószelep a FHP után nyit és az AHP előtt zár.",
                "correct": false
            },
            {
                "text": "A szívószelep a FHP előtt nyit és az AHP után zár.",
                "correct": true
            },
            {
                "text": "A szívószelep a FHP után nyit és az AHP után zár.",
                "correct": false
            },
            {
                "text": "A szívószelep a FHP előtt nyit és az AHP előtt zár.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Az IAS sebesség …",
        "answers": [
            {
                "text": "meghatározása a légkör sűrűségváltozása miatt, navigációs számítások elvégzése érdekében szükséges.",
                "correct": false
            },
            {
                "text": "a sebességmérőről leolvasott érték.",
                "correct": true
            },
            {
                "text": "meghatározása a Pitot-statikus rendszer beépítési hibái miatt szükséges.",
                "correct": false
            },
            {
                "text": "meghatározása a levegő összenyomhatóságából származó mérési hiba miatt szükséges.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Ha a főfúvóka méretét úgy választják meg, hogy alacsony fordulatszámon megfelelő arányú keveréket biztosítson, akkor …",
        "answers": [
            {
                "text": "a kiegyenlítő fúvóka akadályozza meg a keverék elszegényedését.",
                "correct": false
            },
            {
                "text": "a féklevegő fúvóka akadályozza meg a keverék elszegényedését.",
                "correct": false
            },
            {
                "text": "a féklevegő fúvóka akadályozza meg a keverék eldúsulását.",
                "correct": true
            },
            {
                "text": "a kiegyenlítő fúvóka akadályozza meg a keverék eldúsulását.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "A kisrepülőgépek törzsének burkolata …",
        "answers": [
            {
                "text": "fából készül.",
                "correct": false
            },
            {
                "text": "alumíniumból készül.",
                "correct": false
            },
            {
                "text": "fából, alumíniumból és szálerősítésű műanyagból is készülhet.",
                "correct": true
            },
            {
                "text": "szálerősítésű műanyagból készül.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Milyen hengerelrendezésre utal a bütyköstárcsa?",
        "answers": [
            {
                "text": "Állóhengeres sorosmotor.",
                "correct": false
            },
            {
                "text": "Boxermotor.",
                "correct": false
            },
            {
                "text": "Lógóhengeres sorosmotor.",
                "correct": false
            },
            {
                "text": "Csillagmotor.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A befecskendezéses motorral felszerelt repülőgép előnye, hogy mentes a tüzelőanyag-rendszer működésére veszélyes jegesedéstől.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A bütyköstengelyt …",
        "answers": [
            {
                "text": "a forgattyústengely fogaskerék-áttétellel vagy lánccal hajtja.",
                "correct": false
            },
            {
                "text": "a forgattyústengely fogasszíjjal vagy lánccal hajtja.",
                "correct": false
            },
            {
                "text": "a vezérműtengely hajtja.",
                "correct": false
            },
            {
                "text": "a forgattyústengely fogaskerék-áttétellel, fogasszíjjal vagy lánccal hajtja.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A … szerint a magasságmérő a repülőgép közepes tengerszint feletti magasságát mutatja.",
        "answers": [
            {
                "text": "QNE",
                "correct": false
            },
            {
                "text": "QNH",
                "correct": true
            },
            {
                "text": "QFE",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Melyik vezérlésre igaz, hogy a vezérlőbütyök a szelepszárral közvetlenül érintkezik?",
        "answers": [
            {
                "text": "A felülszelepelt és alulvezérelt vezérlésre.",
                "correct": false
            },
            {
                "text": "A felülszelepelt és felülvezérelt vezérlésre.",
                "correct": true
            },
            {
                "text": "Az oldaltszelepelt és alulvezérelt vezérlésre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A motorzsalu nyitott állapotában …",
        "answers": [
            {
                "text": "a léghűtés hatékonyságát csökkentjük, ezért a hűtés csökken.",
                "correct": false
            },
            {
                "text": "a léghűtés hatékonyságát növeljük, ezért a hűtés nő.",
                "correct": true
            },
            {
                "text": "a léghűtés hatékonyságát csökkentjük, ezért a hűtés nő.",
                "correct": false
            },
            {
                "text": "a léghűtés hatékonyságát növeljük, ezért a hűtés csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "Milyen anyagból készül a kisrepülőgépek belsőégésű motorjának forgattyúsháza?",
        "answers": [
            {
                "text": "Ötvözött acél.",
                "correct": false
            },
            {
                "text": "Titán.",
                "correct": false
            },
            {
                "text": "Ötvözött alumínium.",
                "correct": true
            },
            {
                "text": "Szálerősítésű műanyag.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Magas léghőmérséklet esetén egy adott magasságnak a NEL-hez képest … sűrűségmagasság felel meg.",
        "answers": [
            {
                "text": "kisebb.",
                "correct": false
            },
            {
                "text": "nagyobb.",
                "correct": true
            },
            {
                "text": "A léghőmérséklet nem befolyásolja a sűrűségmagasságot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A … kód adott repülőtér meghatározott pontjára vonatkoztatott légnyomás jelölésére szolgál.",
        "answers": [
            {
                "text": "QNE",
                "correct": false
            },
            {
                "text": "QNH",
                "correct": false
            },
            {
                "text": "QFE",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "Azt a szárnyat, melynél a borítás egyáltalán nem vesz részt a teherviselésben … szárnynak nevezzük.",
        "answers": [
            {
                "text": "tartószerkezetes",
                "correct": true
            },
            {
                "text": "szabadonhordó",
                "correct": false
            },
            {
                "text": "félhéjszerkezetű",
                "correct": false
            },
            {
                "text": "héjszerkezetű",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A … szerinti magasságmérés a 1013,25 hPa-nak megfelelő nyomás alapján történik.",
        "answers": [
            {
                "text": "QNE",
                "correct": true
            },
            {
                "text": "QNH",
                "correct": false
            },
            {
                "text": "QFE",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Ha a repülőgép-vezető a helyes QNH nyomáshoz képest magasabb nyomást állít be a magasságmérőn, akkor a műszer …",
        "answers": [
            {
                "text": "helyes értéknél kevesebbet fog mutatni.",
                "correct": false
            },
            {
                "text": "attól függően, hogy a nyomás magasabb vagy alacsonyabb 1013,25 hPa-nál, többet vagy kevesebbet fog mutatni.",
                "correct": false
            },
            {
                "text": "a helyes értéknél többet fog mutatni.",
                "correct": true
            },
            {
                "text": "NEL körülmények között helyesen fog mutatni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A külső léghőmérséklet-mérő jellemzően …",
        "answers": [
            {
                "text": "bimetálos hőmérő.",
                "correct": true
            },
            {
                "text": "ellenálláshőmérő.",
                "correct": false
            },
            {
                "text": "hőelemes hőmérő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A térképen azonos mágneses elhajlással rendelkező pontokat összekötő vonalat … vonalaknak nevezzük. A nulla mágneses elhajlású pontokat összekötő vonalakat … vonalaknak nevezzük. Az azonos mágneses lehajlású pontokat összekötő vonalakat … vonalaknak nevezzük.",
        "answers": [
            {
                "text": "agon – izoklin – izogon",
                "correct": false
            },
            {
                "text": "agon – izogon – izoklin",
                "correct": false
            },
            {
                "text": "izogon – agon – izoklin",
                "correct": true
            },
            {
                "text": "izoklin – izogon – agon",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "Ha egy ampermérő skálájának bal oldalán található a nulla töltés jelzése, akkor ez az ampermérő …",
        "answers": [
            {
                "text": "az akkumulátorba és az akkumulátorból folyó áram erősségét mutatja.",
                "correct": false
            },
            {
                "text": "a generátor felől folyó áram erősségét méri.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Melyik alábbi felsorolás mindegyik elemére igaz, hogy a forgattyús mechanizmus egy alkatrésze?",
        "answers": [
            {
                "text": "Főtengely, dugattyúcsapszeg, hajtókar.",
                "correct": true
            },
            {
                "text": "Dugattyú, hengerfejtömítés, kompressziógyűrű.",
                "correct": false
            },
            {
                "text": "Hajtórúd, dugattyúgyűrűk, szelepszár.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Mit mutat az elfordulásjelző és a libella jobb dugóhúzóban?",
        "answers": [
            {
                "text": "A lapát teljesen kitér balra, a golyó teljesen kitér jobbra.",
                "correct": false
            },
            {
                "text": "A lapát és a golyó teljesen kitér jobbra.",
                "correct": false
            },
            {
                "text": "A lapát teljesen kitér jobbra, a golyó teljesen kitér balra.",
                "correct": true
            },
            {
                "text": "A lapát és a golyó teljesen kitér balra.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "Az URH tartományban dolgozó rádióállomások … , a föld-föld közötti összeköttetés távolságát a Föld görbülete …",
        "answers": [
            {
                "text": "működését az időjárás befolyásolja – nem korlátozza.",
                "correct": false
            },
            {
                "text": "működése az időjárásra közömbös – nem korlátozza.",
                "correct": false
            },
            {
                "text": "működését az időjárás befolyásolja – korlátozza.",
                "correct": false
            },
            {
                "text": "működése az időjárásra közömbös – korlátozza.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "A repülőgépek fedélzeti parancsnoki rádió-adóvevő készülékei … frekvenciatartományban … működnek?",
        "answers": [
            {
                "text": "az ultrarövid-hullámú – AM-modulációval",
                "correct": true
            },
            {
                "text": "a rövidhullámú – FM-modulációval",
                "correct": false
            },
            {
                "text": "a középhullámú – FM-modulációval",
                "correct": false
            },
            {
                "text": "az ultra magas – AM-modulációval",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A statikus légfelvevő eldugulásakor a magasságmérő …",
        "answers": [
            {
                "text": "a helyes értékhez képest kevesebbet fog mutatni.",
                "correct": false
            },
            {
                "text": "nem reagál a magasságváltozásra.",
                "correct": true
            },
            {
                "text": "a helyes értékhez képest többet fog mutatni.",
                "correct": false
            },
            {
                "text": "a légnyomás változásának megfelelően fog fals értéket mutatni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "Repülés közben a repülőgép-vezető füstöt érzékel a műszerfalból és arra kényszerül, hogy lekapcsolja az elektromos rendszer főkapcsolóját. Az alábbiak közül melyik műszer válhat működésképtelenné?",
        "answers": [
            {
                "text": "Sebességmérő.",
                "correct": false
            },
            {
                "text": "Magasságmérő.",
                "correct": false
            },
            {
                "text": "Elfordulásjelző.",
                "correct": true
            },
            {
                "text": "Folyadékos mágneses iránytű.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Az elfordulásjelzők és a tüzelőanyagmennyiség-mérők működéséhez feltétlenül szükséges elektromos áram.",
                "correct": false
            },
            {
                "text": "A fékszárny-működtetéshez és a motorindításhoz feltétlenül szükséges elektromos áram.",
                "correct": false
            },
            {
                "text": "Az elfordulásjelzők és a tüzelőanyagmennyiség-mérők működéséhez, valamint a fékszárny-működtetéshez és a motorindításhoz feltétlenül szükséges elektromos áram.",
                "correct": false
            },
            {
                "text": "Az elfordulásjelzők és a tüzelőanyagmennyiség-mérők működéséhez, valamint a fékszárnyműködtetéshez és a motorindításhoz sem feltétlenül szükséges elektromos áram.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "A mágneses iránytűnek azt a hibáját, melyet a repülőgép fém alkatrészei és villamos berendezései által keltett mágneses tér okoz … nevezzük.",
        "answers": [
            {
                "text": "mágneses elhajlásnak",
                "correct": false
            },
            {
                "text": "deklinációnak",
                "correct": false
            },
            {
                "text": "inklinációnak",
                "correct": false
            },
            {
                "text": "deviációnak",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "Mi a célja a magassági kormánylapokon alkalmazott trimmechanizmusnak?",
        "answers": [
            {
                "text": "A repülőgép-vezető tehermentesítésére és egy adott repülési helyzetben a kormányerő csökkentésére szolgál.",
                "correct": true
            },
            {
                "text": "A kormányérzékenység növelésére vagy csökkentésére alkalmazzuk.",
                "correct": false
            },
            {
                "text": "A kormánylap súlykiegyenlítése által a repülőgép-vezető tehermentesítésére szolgál.",
                "correct": false
            },
            {
                "text": "A kormánylap aerodinamikai kiegyenlítése által a repülőgép-vezető tehermentesítésére szolgál.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A kényszercirkulációs kenés esetén …",
        "answers": [
            {
                "text": "egy membrános szivattyú juttatja el a nyomás alá helyezett olajat a kenési pontokra.",
                "correct": false
            },
            {
                "text": "egy forgólapátos szivattyú juttatja el a nyomás alá helyezett olajat a kenési pontokra.",
                "correct": false
            },
            {
                "text": "egy fogaskerék-szivattyú juttatja el a nyomás alá helyezett olajat a kenési pontokra.",
                "correct": true
            },
            {
                "text": "a forgó alkatrészek belecsapnak az olajgyűjtőben lévő olajba és a kenés a szétfröccsenő olajjal történik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A benzin oktánszáma nincs kapcsolatban a kompresszítótűréssel.",
                "correct": false
            },
            {
                "text": "Minél kisebb egy motor kompresszióviszonya, annál nagyobb oktánszámú benzinnel üzemel.",
                "correct": false
            },
            {
                "text": "Minél kisebb a benzin oktánszáma, annál nagyobb a kompressziótűrése.",
                "correct": false
            },
            {
                "text": "Minél nagyobb a benzin oktánszáma, annál nagyobb a kompressziótűrése.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "… az áramvezető keresztmetszetén időegység alatt áthaladó elektromos töltés nagyságát értjük.",
        "answers": [
            {
                "text": "A kapacitáson",
                "correct": false
            },
            {
                "text": "Az ellenálláson",
                "correct": false
            },
            {
                "text": "Az áramerősségen",
                "correct": true
            },
            {
                "text": "A feszültségen",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "Milyen anyagból készül a kisrepülőgépek fémborítása?",
        "answers": [
            {
                "text": "Ötvözött acél.",
                "correct": false
            },
            {
                "text": "Titán.",
                "correct": false
            },
            {
                "text": "Ötvözött alumínium.",
                "correct": true
            },
            {
                "text": "Szálerősítésű műanyag.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Ha a főfúvóka méretét úgy választják meg, hogy magas fordulatszámon megfelelő arányú keveréket biztosítson, akkor …",
        "answers": [
            {
                "text": "a féklevegő fúvóka akadályozza meg a keverék eldúsulását.",
                "correct": false
            },
            {
                "text": "a kiegyenlítő fúvóka akadályozza meg a keverék elszegényedését.",
                "correct": true
            },
            {
                "text": "a kiegyenlítő fúvóka akadályozza meg a keverék eldúsulását.",
                "correct": false
            },
            {
                "text": "a féklevegő fúvóka akadályozza meg a keverék elszegényedését.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "A C-módú transzponder A-módra kapcsolva …",
        "answers": [
            {
                "text": "csak a fedélzeti számot sugározza.",
                "correct": true
            },
            {
                "text": "alapvetően a fedélzeti számot és a magasságot sugározza, de egyéb információk és adatok közlésére is alkalmas.",
                "correct": false
            },
            {
                "text": "csak a magasságot sugározza.",
                "correct": false
            },
            {
                "text": "a fedélzeti számot és a magasságot sugározza.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Emelkedés során a variométer szelencéje a műszerházban fennálló … nyomásérték miatt … , a mutató pedig emelkedést fog jelezni.",
        "answers": [
            {
                "text": "magasabb – kitágul",
                "correct": false
            },
            {
                "text": "alacsonyabb – kitágul",
                "correct": false
            },
            {
                "text": "alacsonyabb – összenyomódik",
                "correct": false
            },
            {
                "text": "magasabb – összenyomódik",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Mikor a leghajlamosabb a motor a túlhűlésre?",
        "answers": [
            {
                "text": "nagy fordulatszám és kis sebesség esetén.",
                "correct": false
            },
            {
                "text": "nagy fordulatszám és nagy sebesség esetén.",
                "correct": false
            },
            {
                "text": "kis fordulatszám és kis sebesség esetén.",
                "correct": false
            },
            {
                "text": "kis fordulatszám és nagy sebesség esetén.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MŰSZERTAN",
        "question": "Az északi féltekén az északi irányú fordulónál a fordulót a kívánt iránytűirányszög eléréséhez képest … kell befejezni, mert az iránytű …",
        "answers": [
            {
                "text": "később – késik.",
                "correct": false
            },
            {
                "text": "hamarabb – késik.",
                "correct": true
            },
            {
                "text": "később – siet.",
                "correct": false
            },
            {
                "text": "hamarabb – siet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A csillagmotor …",
        "answers": [
            {
                "text": "oldaltszelepelt és alulvezérelt.",
                "correct": false
            },
            {
                "text": "felülszelepelt és felülvezérelt.",
                "correct": false
            },
            {
                "text": "felülszelepelt és alulvezérelt.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "Ha egy motorban hengerenkénti befecskendezés történik, akkor …",
        "answers": [
            {
                "text": "szabályozott befecskendezésről beszélünk.",
                "correct": false
            },
            {
                "text": "közvetlen befecskendezésről beszélünk.",
                "correct": true
            },
            {
                "text": "közvetett befecskendezésről beszélünk.",
                "correct": false
            },
            {
                "text": "központi befecskendezésről beszélünk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A mágneses gyújtás hátránya, hogy indításkor nem ad elég erős gyújtást.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A fojtószelep lejegesedése …",
        "answers": [
            {
                "text": "kis sebesség és nagy fordulatszám esetén jellemző.",
                "correct": false
            },
            {
                "text": "kis fordulatszám esetén jellemző.",
                "correct": true
            },
            {
                "text": "nagy sebesség és kis fordulatszám esetén jellemző.",
                "correct": false
            },
            {
                "text": "nagy fordulatszám esetén jellemző.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A kompresszióviszony növelésének …",
        "answers": [
            {
                "text": "a tüzelőanyag lobbanáspontja szab határt.",
                "correct": false
            },
            {
                "text": "a motor legnagyobb fordulatszáma szab határt.",
                "correct": false
            },
            {
                "text": "a motor szerkezeti elemeinek teherviselő képessége szab határt.",
                "correct": false
            },
            {
                "text": "a kopogás szab határt.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELEKTROMOSSÁGTAN ÉS RÁDIÓTECHNIKA",
        "question": "Repülés közben a repülőgép-vezető füstöt érzékel a műszerfalból és arra kényszerül, hogy lekapcsolja az elektromos rendszer főkapcsolóját. Az alábbiak közül melyik műszer válik működésképtelenné?",
        "answers": [
            {
                "text": "Úszós-kúpfogaskerekes tüzelőanyagszint-mérő.",
                "correct": false
            },
            {
                "text": "Szívótérnyomásmérő.",
                "correct": false
            },
            {
                "text": "Távnyomásméréssel működő olajnyomásmérő.",
                "correct": true
            },
            {
                "text": "Vákuumrendszerről működtetett elfordulásjelző.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "SZERKEZETTAN",
        "question": "A szálerősített anyagok alkalmazásával jelentős súlycsökkenés tapasztalható, és szilárdságuk felveszi a versenyt a többi építési eljárással.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A felülszelepelt és alulvezérelt kialakításnál a vezérlés történhet bütyköstengelyről és bütyköstárácsól is.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MOTORTAN",
        "question": "A motor túlmelegedése esetén kopogás is bekövetkezhet.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Egyszerű, rutinszerű tevékenységek végrehajtásánál …",
        "answers": [
            {
                "text": "a serkentettség fokozódása csak egy bizonyos pontig társul a teljesítmény növekedésével, ezen túl pedig hanyatlani kezd.",
                "correct": false
            },
            {
                "text": "a teljesítmény színvonala a serkentettség szintjének növekedésével egyidejűleg nő.",
                "correct": true
            },
            {
                "text": "a teljesítmény színvonala a serkentettség szintjének növekedésével folyamatosan csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Egy inger csak akkor hoz létre érzetet, ha erőssége meghaladja az abszolút felső érzetküszöböt.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A kimerültség és az állandó koncentráció …",
        "answers": [
            {
                "text": "nem hat a hypoxiás tűrőképességre.",
                "correct": false
            },
            {
                "text": "15000 ft altt repülve növeli a hypoxiás tűrőképességet.",
                "correct": false
            },
            {
                "text": "növeli a hypoxiás tűrőképességet.",
                "correct": false
            },
            {
                "text": "csökkenti a hypoxiás tűrőképességet.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A testbe hatolt áram legsúlyosabb következménye …",
        "answers": [
            {
                "text": "a behatolás helyén létrejött égés okozta áramjegyek.",
                "correct": false
            },
            {
                "text": "a sokkos állapot.",
                "correct": false
            },
            {
                "text": "szívmegállás és légzésbénulás is lehet.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Melyik állítás helyes?",
        "answers": [
            {
                "text": "A kismennyiségű szénmonoxid ártalmatlan.",
                "correct": false
            },
            {
                "text": "A szénmonoxid szagtalan és szaglással nem is észlelhető.",
                "correct": true
            },
            {
                "text": "A magasság növekedésével a szénmonoxid mérgezés negatív hatása kompenzálódik.",
                "correct": false
            },
            {
                "text": "A szénmonoxid növeli a vér oxigéntelítettségét.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A testérzeteknek fontos szerepe van a mozgási koordináció szempontjából. Ezek az ingerek …",
        "answers": [
            {
                "text": "azonban csak a G-gyorsulások esetén lépnek fel.",
                "correct": false
            },
            {
                "text": "repülés közben lehetővé teszik a repülőgép-vezető számára az abszolút magasság meghatározását.",
                "correct": false
            },
            {
                "text": "IMC esetén fontos érzékelések.",
                "correct": false
            },
            {
                "text": "IMC esetén teljesen alkalmatlanok a térbeli tájékozódásra.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Az Eustach-kürt biztosítja a nyomás kiegyenlítődését …",
        "answers": [
            {
                "text": "a homloküreg, az orr és az arcüreg között.",
                "correct": false
            },
            {
                "text": "az orrmelléküregek és a külvilág között.",
                "correct": false
            },
            {
                "text": "az orr, a garatüreg és a külvilág között.",
                "correct": false
            },
            {
                "text": "a középfül és a külvilág között.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Dohányzás esetén a repülőgép-vezetőnél …",
        "answers": [
            {
                "text": "enyhe szénmonoxid mérgezés léphet fel, mely növeli a hypoxiás tűrőképességet.",
                "correct": false
            },
            {
                "text": "enyhe széndioxid mérgezés léphet fel, mely csökkenti a hypoxiás tűrőképességet.",
                "correct": false
            },
            {
                "text": "enyhe szénmonoxid mérgezés léphet fel, mely csökkenti a hypoxiás tűrőképességet.",
                "correct": true
            },
            {
                "text": "enyhe széndioxid mérgezés léphet fel, mely növeli a hypoxiás tűrőképességet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Gerincsérülés gyanúja esetén …",
        "answers": [
            {
                "text": "a sérültet úgy kell fektetni, hogy a homorú ívben feszített hát egymáshoz szorítsa a csigolyákat.",
                "correct": false
            },
            {
                "text": "a sérültet stabil oldalfekvésbe kell fektetni.",
                "correct": false
            },
            {
                "text": "a sérültet mozgatni tilos.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Ha egy bizonyos gyengébb erősségű inger hosszabb időn keresztül hat, akkor az illető inger iránt … az érzékenységünk. Erős ingerek hatására az érzékszerveink érzékenysége … .",
        "answers": [
            {
                "text": "nő – nő",
                "correct": false
            },
            {
                "text": "csökken – csökken",
                "correct": false
            },
            {
                "text": "csökken – nő",
                "correct": false
            },
            {
                "text": "nő – csökken",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "II. fokú égés esetén az égett testrész hűtését követően a sérülésre laza, száraz fedőkötést kell felhelyezni.",
                "correct": true
            },
            {
                "text": "I. fokú égés esetén az égett testrész hűtését követően az égett testrészt be kell kenni olajjal vagy tejföllel.",
                "correct": false
            },
            {
                "text": "III. fokú égés esetén tilos az égett testrész hűtése és fedőkötés felhelyezése.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A szöggyorsulást … érzékelik.",
        "answers": [
            {
                "text": "a csapok és a pálcikák",
                "correct": false
            },
            {
                "text": "az üllő, a kengyel és a kalapács",
                "correct": false
            },
            {
                "text": "a tömlőcskék és a zsákocskák",
                "correct": false
            },
            {
                "text": "a félkörös ívjáratok",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "A rövid távú memória megközelítőleg … elemet képes tárolni.",
        "answers": [
            {
                "text": "9 ± 2",
                "correct": false
            },
            {
                "text": "7 ± 2",
                "correct": true
            },
            {
                "text": "10 ± 2",
                "correct": false
            },
            {
                "text": "4 ± 2",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "… vérzés esetén a sebből ütemesen pulzálva, fecskendezve tör elő a vér, színe világos piros.",
        "answers": [
            {
                "text": "Hajszáleres",
                "correct": false
            },
            {
                "text": "Artériás",
                "correct": true
            },
            {
                "text": "Vénás",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A térbeli dezorientáció veszélye nő, ha …",
        "answers": [
            {
                "text": "a repülőgép-vezető a műszereket ellenőrzi és figyelmen kívül hagyja az illúziókat.",
                "correct": false
            },
            {
                "text": "a műszerek és az egyensúlyszervtől érkező információk között ellentmondás van.",
                "correct": true
            },
            {
                "text": "a repülőgép-vezető figyelmen kívül hagyja az egyensúlyszervtől érkező információkat.",
                "correct": false
            },
            {
                "text": "a repülőgép-vezető túl szorosra csatolja a biztonsági övet és ezért testérzetekkel nem tudja érzékelni a magasságváltozást.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "… égésről beszélünk, ha a bőr és esetleg az alatt fekvő szövetek elhalnak, a terület sárgás-fehér vagy barnás fekete, megkarcolva nem vérzik.",
        "answers": [
            {
                "text": "IV. fokú",
                "correct": false
            },
            {
                "text": "II. fokú",
                "correct": false
            },
            {
                "text": "I. fokú",
                "correct": false
            },
            {
                "text": "III. fokú",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Optimális mértékű stressz segíthet abban, hogy éberek maradjunk, és ezáltal megfelelően helyt tudjunk állni a helyzet támasztotta követelményekkel szemben.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Egy felnőtt normális pulzusszáma …",
        "answers": [
            {
                "text": "40-60 pulzálás/perc.",
                "correct": false
            },
            {
                "text": "60-80 pulzálás/perc.",
                "correct": true
            },
            {
                "text": "100-120 pulzálás/perc.",
                "correct": false
            },
            {
                "text": "80-100 pulzálás/perc.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Hypoxia szempontjából külső levegőt lélegezve a kompenzált zóna …",
        "answers": [
            {
                "text": "0-20000 ft.",
                "correct": false
            },
            {
                "text": "0-10000 ft.",
                "correct": true
            },
            {
                "text": "0-4000 ft.",
                "correct": false
            },
            {
                "text": "0-15000 ft.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A légibetegség előfordulásának valószínűsége nagyobb, ha …",
        "answers": [
            {
                "text": "az utas vagy a növendék fél a repüléstől.",
                "correct": true
            },
            {
                "text": "az utas mozgásbetegség elleni szert vett be repülés előtt.",
                "correct": false
            },
            {
                "text": "a növendék motivált és adaptálódott a repülés speciális hatásaihoz.",
                "correct": false
            },
            {
                "text": "jó külső vizuális referenciák állnak a növendék rendelkezésére.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Vénás vérzés esetén …",
        "answers": [
            {
                "text": "steril fedőkötést kell alkalmazni.",
                "correct": false
            },
            {
                "text": "nyomókötést kell alkalmazni.",
                "correct": true
            },
            {
                "text": "választott helyeken ujjainkkal a vérző ütőeret leszorítva kell csillapítani a vérzést.",
                "correct": false
            },
            {
                "text": "szorítókötést kell alkalmazni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Ha a repülőgép-vezető a megszokottnál szélesebb futópályára hajt végre leszállást, akkor …",
        "answers": [
            {
                "text": "a pálya hosszabbnak tűnik, mint amilyen valójában.",
                "correct": false
            },
            {
                "text": "a pálya rövidebbnek tűnik, mint amilyen valójában.",
                "correct": false
            },
            {
                "text": "földközelben azt érzékelheti, hogy túl alacsonyan van.",
                "correct": true
            },
            {
                "text": "földközelben azt érzékelheti, hogy túl magasan van.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "A szenzoros tárban rövid ideig, 1-2 mp-ig tárolódnak az ingerek.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Egy felnőtt normális légzésszáma …",
        "answers": [
            {
                "text": "18-20/perc.",
                "correct": false
            },
            {
                "text": "22-24/perc.",
                "correct": false
            },
            {
                "text": "14-16/perc.",
                "correct": true
            },
            {
                "text": "10-12/perc.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Mi a pozitív gyorsulás fő hatása?",
        "answers": [
            {
                "text": "A vér az alsó testfélbe torlódik, ezért kevesebb vér vesz részt a keringésben.",
                "correct": true
            },
            {
                "text": "A perifériás látás javulása.",
                "correct": false
            },
            {
                "text": "A vérnyomás növekedése a felső testfélben (szív feletti részben).",
                "correct": false
            },
            {
                "text": "A vér hyperoxigenizációja, mely érzékelési zavarhoz vezet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A szem és a szemhéj vágott sérülése esetén …",
        "answers": [
            {
                "text": "a sérült szemre nyomókötést kell felhelyezni, míg a másik szemet le kell takarni, hogy a szemgolyók mozgását megelőzzük.",
                "correct": false
            },
            {
                "text": "a sérült szemre hideg borogatást kell helyezni, míg a másik szemet le kell takarni, hogy a szemgolyók mozgását megelőzzük.",
                "correct": false
            },
            {
                "text": "A sérült szemet be kell fedni tiszta kötéssel, lazán rögzítve. A másik szemet le kell takarni, hogy a szemgolyók mozgását megelőzzük.",
                "correct": true
            },
            {
                "text": "A sérült szemet hideg folyó vízzel ki kell mosni, majd mindkét szemet le kell takarni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Komplex élesztési eljárás során a befúvás és a mellkaskompresszió ritmusa …",
        "answers": [
            {
                "text": "1:15",
                "correct": false
            },
            {
                "text": "1:30",
                "correct": false
            },
            {
                "text": "2:30",
                "correct": true
            },
            {
                "text": "2:15",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Melyik állítás helyes?",
        "answers": [
            {
                "text": "A légzés vizsgálatánál elsősorban a mellkas emelkedéséről kell meggyőződnünk.",
                "correct": false
            },
            {
                "text": "A légzés vizsgálatánál elsősorban a sérült orrához, illetve szájához közel hajolva meg kell hallgatni, hogy hallatszik-e a levegő áramlása.",
                "correct": false
            },
            {
                "text": "Csak akkor beszélhetünk kielégítő légzésről, ha a légzést látjuk és halljuk is egyszerre.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A klinikai halál általában … alatt megy át biológiai halálba",
        "answers": [
            {
                "text": "2-3 perc",
                "correct": false
            },
            {
                "text": "4 perc",
                "correct": true
            },
            {
                "text": "7 perc",
                "correct": false
            },
            {
                "text": "1 perc",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A keringés vizsgálatakor …",
        "answers": [
            {
                "text": "a nyaki ütőér megtapintásával történik a pulzus vizsgálata.",
                "correct": true
            },
            {
                "text": "a csukló belső oldalának megtapintásával történik a pulzus vizsgálata.",
                "correct": false
            },
            {
                "text": "a sérült mellkasához hajolva szívdobogását kell meghallgatni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "… törvénye szerint két, ellentétes tulajdonságokkal rendelkező inger egymás kölcsönös erősítésében áll.",
        "answers": [
            {
                "text": "A mozgásparallaxis",
                "correct": false
            },
            {
                "text": "Az alkalmazkodás",
                "correct": false
            },
            {
                "text": "Az érzékelési kontraszt",
                "correct": true
            },
            {
                "text": "Az érzékszervek együttműködésének",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A perifériás látás elvesztése már … kötötti gyorsulás esetén megfigyelhető.",
        "answers": [
            {
                "text": "1-2,5 +Gz",
                "correct": true
            },
            {
                "text": "2,5-4 +Gz",
                "correct": false
            },
            {
                "text": "4,5-5 +Gz",
                "correct": false
            },
            {
                "text": "4-4,5 +Gz",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Ha csak egyik szemünket használjuk a távolságérzékelésben …",
        "answers": [
            {
                "text": "a monokuláris távolsági jelzőmozzanatok és a mozgásparallaxis van segítségünkre.",
                "correct": true
            },
            {
                "text": "a mozgásparallaxis van segítségünkre.",
                "correct": false
            },
            {
                "text": "a monokuláris távolsági jelzőmozzanatok vannak segítségünkre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Ha például egy forduló során a repülőgép-vezető hirtelen a fejét is megdöntve fel- vagy lenéz valamiért a kabinba, akkor könnyen kialakulhat …",
        "answers": [
            {
                "text": "a temető-spirál (Graveyard Spiral).",
                "correct": false
            },
            {
                "text": "a fals pörgés (Graveyard Spin) illúziója.",
                "correct": false
            },
            {
                "text": "Coriolis-illúzió.",
                "correct": true
            },
            {
                "text": "a dőlés illúziója.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A légzési folyamat a következő lépésekből áll:",
        "answers": [
            {
                "text": "oxigénszállítás a sejtekhez; a nitrogén eltávolítása.",
                "correct": false
            },
            {
                "text": "széndioxid szállítása a sejtekhez; az oxigén eltávolítása.",
                "correct": false
            },
            {
                "text": "oxigéndiffúzió a vérbe a légzőhámon át; oxigén szállítása és diffúziója a sejtekbe; a széndioxid eltávolítása a szervezetből.",
                "correct": true
            },
            {
                "text": "oxigénszállítás a sejtekhez; a szénmonoxid eltávolítása.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Hyperventiláció során a vér …",
        "answers": [
            {
                "text": "szénmonoxid szintje csökken.",
                "correct": false
            },
            {
                "text": "széndioxid szintje nő.",
                "correct": false
            },
            {
                "text": "szénmonoxid szintje csökken.",
                "correct": false
            },
            {
                "text": "széndioxid szintje csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Hogyan előzhető meg a középfül barotraumája?.",
        "answers": [
            {
                "text": "Növelni kell a süllyedés sebességét.",
                "correct": false
            },
            {
                "text": "Meg kell szakítani az emelkedést és süllyedésbe kell kezdeni.",
                "correct": false
            },
            {
                "text": "Valsalva-manőverrel.",
                "correct": true
            },
            {
                "text": "A repülőgép-vezető minden repülés előtt szedjen be megfázás elleni szert.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Zúzódásról beszélünk, ha …",
        "answers": [
            {
                "text": "az ízület kóros helyzetben rögzül.",
                "correct": false
            },
            {
                "text": "mélyebben fekvő szövet is roncsolódik.",
                "correct": false
            },
            {
                "text": "a bőrfelületet érinti a sérülés.",
                "correct": false
            },
            {
                "text": "a bőr folytonossága nem szakad meg, de a bőr alatt vérömleny jön létre",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A belsőfül melyik része felelős a zaj érzékeléséért?",
        "answers": [
            {
                "text": "Az Eustach-kürt..",
                "correct": false
            },
            {
                "text": "A zsákocska és tömlőcske.",
                "correct": false
            },
            {
                "text": "A félkörös ívjáratok.",
                "correct": false
            },
            {
                "text": "A csigaszerv.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Mikor kell számítani éberségi minimumra (álmossági csúcsr?",
        "answers": [
            {
                "text": "Délután 13 és 15 óra között, valamint éjfél és hajnali 2 óra között.",
                "correct": false
            },
            {
                "text": "Délután 13 és 15 óra között.",
                "correct": false
            },
            {
                "text": "Hajnali 5 és 7 óra között.",
                "correct": false
            },
            {
                "text": "Hajnali 3 és 5 óra, valamint délután 15 és 17 óra között.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Mire következtetünk, ha a sérült kóros helyzetben rögzült végtagjának ízületén nagyfokú alakváltozás látható, és a sérült nyugalmi helyzetben is nagy fájdalomra panaszkodik?",
        "answers": [
            {
                "text": "Rándulásra.",
                "correct": false
            },
            {
                "text": "Zúzódásra.",
                "correct": false
            },
            {
                "text": "Nyílt törésre.",
                "correct": false
            },
            {
                "text": "Ficamra.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A hypoxia és a hyperventiláció jól megkülönböztethető, mert tüneteik nagyban különböznek egymástól.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Hypoxia szempontjából külső levegőt lélegezve a zavar zóna …",
        "answers": [
            {
                "text": "20000 ft és felette",
                "correct": false
            },
            {
                "text": "4000-10000 ft",
                "correct": false
            },
            {
                "text": "15000-20000 ft",
                "correct": true
            },
            {
                "text": "10000-15000 ft",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A befúvásos lélegeztetéshez a sérültet …",
        "answers": [
            {
                "text": "félülő helyzetbe kell hozni.",
                "correct": false
            },
            {
                "text": "hanyatt kell fektetni.",
                "correct": true
            },
            {
                "text": "oldalra kell fektetni.",
                "correct": false
            },
            {
                "text": "stabil oldalfekvésbe kell fektetni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A befúvásos lélegeztetésnél a levegőbefújást … ismételjük percenként.",
        "answers": [
            {
                "text": "28-30-szor",
                "correct": false
            },
            {
                "text": "22-26-szor",
                "correct": false
            },
            {
                "text": "10-14-szer",
                "correct": false
            },
            {
                "text": "16-20-szor",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Melyik illúzió alakul ki akkor, ha a repülőgép a repülőgép-vezető tudomása nélkül fordulóba kezd, mely mozgás nem kelt elegendő ingert az ívjáratokban?",
        "answers": [
            {
                "text": "A dőlés illúziója.",
                "correct": true
            },
            {
                "text": "A fals pörgés (Graveyard Spin) illúziója.",
                "correct": false
            },
            {
                "text": "A Coriolis-illúzió.",
                "correct": false
            },
            {
                "text": "A temető-spirál (Graveyard Spiral).",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Amikor dugóhúzóba kerül a repülőgép, a domináló gyorsulási típus …",
        "answers": [
            {
                "text": "lineáris gyorsulás.",
                "correct": false
            },
            {
                "text": "függőleges gyorsulás.",
                "correct": false
            },
            {
                "text": "szöggyorsulás.",
                "correct": true
            },
            {
                "text": "radiális gyorsulás.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Egy átlagos repülőgép-vezető rövid távú memóriájából kb. mennyi ideig képes hibátlanul előhívni pl. egy frissen hallott, számára ismeretlen rádiófrekvenciát.",
        "answers": [
            {
                "text": "kb. 1-2 percig.",
                "correct": false
            },
            {
                "text": "kb. 15-30 mp-ig",
                "correct": true
            },
            {
                "text": "kb. 7 mp-ig",
                "correct": false
            },
            {
                "text": "kb. 2-3 percig",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Ha egy megtanult, automatizált cselekvést nem gyakorlunk és elfelejtünk, akkor a cselekvés ismét a … ellenőrzése alá kerül.",
        "answers": [
            {
                "text": "központi döntési csatorna",
                "correct": true
            },
            {
                "text": "szenzoros tár",
                "correct": false
            },
            {
                "text": "hosszú távú memória",
                "correct": false
            },
            {
                "text": "rövid távú memória",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Az egyensúlyérzékelésért … felelősek, melyek … találhatók.",
        "answers": [
            {
                "text": "az üllő, a kengyel és a kalapács – a középfülben",
                "correct": false
            },
            {
                "text": "a félkörös ívjáratok, a tömlőcskék és a zsákocskák – a középfülben",
                "correct": false
            },
            {
                "text": "a félkörös ívjáratok, a tömlőcskék és a zsákocskák – a belső fülben",
                "correct": true
            },
            {
                "text": "az üllő, a kengyel és a kalapács – a külső fülben",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "A túl magas vagy alacsony hőmérséklet, a zaj, a turbulencia, a rezgések, a kényelmetlenség, mind stresszforrások lehetnek.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Mi az önmentési idő?",
        "answers": [
            {
                "text": "Az az idő, ami a hypoxia kezdetétől addig telik el, amíg azt a repülőgép-vezető észleli.",
                "correct": false
            },
            {
                "text": "Hypoxia esetén a pilóta reakcióideje.",
                "correct": false
            },
            {
                "text": "Az oxigénellátás megszűnésétől számított azon időtartam, ameddig az egyén hatékonyan és éberen képes cselekedni.",
                "correct": true
            },
            {
                "text": "Fokozatos dekompresszió után a hypoxia fellépéséig eltelt idő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Mi az első teendő, ha a sérült eszméletlen?",
        "answers": [
            {
                "text": "Félülő helyzetbe kell hozni a sérültet.",
                "correct": false
            },
            {
                "text": "Meg kell vizsgálni légzését és keringését.",
                "correct": true
            },
            {
                "text": "Stabil oldalfekvésbe kell fektetni a sérültet.",
                "correct": false
            },
            {
                "text": "Hátára kell fektetni a sérültet, lábát felpolcolva.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Barotrauma … alakulhat ki.",
        "answers": [
            {
                "text": "a középfüben, az orrmelléküregekben és a gyomor-bél rendszerben.",
                "correct": true
            },
            {
                "text": "a középfüben",
                "correct": false
            },
            {
                "text": "az orrmelléküregekben",
                "correct": false
            },
            {
                "text": "a gyomor-bél rendszerben.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Ha a repülőgép-vezető a megszokottnál rövidebb futópályára hajt végre leszállást, akkor …",
        "answers": [
            {
                "text": "a pálya távolibbnak tűnik a valóságosnál.",
                "correct": true
            },
            {
                "text": "földközelben azt érzékelheti, hogy túl magasan van.",
                "correct": false
            },
            {
                "text": "földközelben azt érzékelheti, hogy túl alacsonyan van.",
                "correct": false
            },
            {
                "text": "a pálya közelebbinek tűnik a valóságosnál.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "… vérzés esetén lassan gyöngyözik a vér a sebből.",
        "answers": [
            {
                "text": "Artériás",
                "correct": false
            },
            {
                "text": "Vénás",
                "correct": false
            },
            {
                "text": "Hajszáleres",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Az összetett tevékenységek végrehajtásánál …",
        "answers": [
            {
                "text": "a serkentettség fokozódása csak egy bizonyos pontig társul a teljesítmény növekedésével, ezen túl pedig hanyatlani kezd.",
                "correct": true
            },
            {
                "text": "a teljesítmény színvonala a serkentettség szintjének növekedésével folyamatosan csökken.",
                "correct": false
            },
            {
                "text": "a teljesítmény színvonala a serkentettség szintjének növekedésével egyidejűleg nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Felhőbe repülés esetén a térbeli tájékozódási zavart a repülőgép-vezető úgy kerülheti el, ha …",
        "answers": [
            {
                "text": "nem hisz a műszereknek.",
                "correct": false
            },
            {
                "text": "hisz a műszereknek.",
                "correct": true
            },
            {
                "text": "folyamatosan vizuális támpontot keres.",
                "correct": false
            },
            {
                "text": "folyamatosan figyeli a magasságmérőt és variométert.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Az alkohol kis mennyiségben …",
        "answers": [
            {
                "text": "serkenti az agyat, ezáltal a hypoxiával szemben jobb lesz a tűrőképesség.",
                "correct": false
            },
            {
                "text": "is fokozhatja az agysejtek hypoxia iránti érzékenységét.",
                "correct": true
            },
            {
                "text": "javítja a szellemi funkciókat, így a hypoxia tünetei sokkal jobban érezhetők.",
                "correct": false
            },
            {
                "text": "nem jelent veszélyt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Mire következtetünk, ha a sérült szédülésről, hányingerről és fejfájásról panaszkodik, a balesetre nem emlékszik?",
        "answers": [
            {
                "text": "Agyrázkódásra.",
                "correct": true
            },
            {
                "text": "Eszméletvesztésre.",
                "correct": false
            },
            {
                "text": "Agyvérzésre.",
                "correct": false
            },
            {
                "text": "Szénmonoxid mérgezésre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A szövetek oxigénhiányos állapotát …",
        "answers": [
            {
                "text": "hyperventilációnak nevezzük.",
                "correct": false
            },
            {
                "text": "eufóriának.",
                "correct": false
            },
            {
                "text": "Keszon-betegségnek nevezzük.",
                "correct": false
            },
            {
                "text": "hypoxiának nevezzük.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Szürkefátyol már … kötötti gyorsulás esetén felléphet.",
        "answers": [
            {
                "text": "4,5-5 +Gz",
                "correct": false
            },
            {
                "text": "2,5-4 +Gz",
                "correct": true
            },
            {
                "text": "1-2,5 +Gz",
                "correct": false
            },
            {
                "text": "4-4,5 +Gz",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A futópálya lejt a küszöbtől. A lehetséges veszély?",
        "answers": [
            {
                "text": "A repülőgép-vezető a szokásosnál magasabbra helyezkedik, ezért a leszállási úthossz megnövekedhet.",
                "correct": true
            },
            {
                "text": "A repülőgép-vezető magasabbnak érzi helyzetét a valósnál, ilyenkor elpattanás vagy kilebegtetés nélküli földet érés következhet be.",
                "correct": false
            },
            {
                "text": "A futópálya hosszának téves becslése.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető túlságosan a siklópálya alá süllyed.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "… vérzés esetén a vér lassan folyik a sebből, színe sötét vörös.",
        "answers": [
            {
                "text": "Hajszáleres",
                "correct": false
            },
            {
                "text": "Vénás",
                "correct": true
            },
            {
                "text": "Artériás",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Hyperventiláció esetén 10000 ft alatti magasságon célszerű …",
        "answers": [
            {
                "text": "L-1-manővert végezni.",
                "correct": false
            },
            {
                "text": "100% oxigént lélegezni.",
                "correct": false
            },
            {
                "text": "Valsalva-manővert végezni.",
                "correct": false
            },
            {
                "text": "a higiéniai zacskóból lélegezni.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Amikor a központi döntési csatorna is érintett egy válasz kivitelezésében, a reakcióidő …, mint az automatikusan zajló tevékenységek esetében.",
        "answers": [
            {
                "text": "rövidebb",
                "correct": false
            },
            {
                "text": "hosszabb",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "A figyelmünk körébe jutó ingerek a szenzoros tárból a hosszú távú memóriába kerülnek.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Bármely magasság túlélhető, ha biztosított …",
        "answers": [
            {
                "text": "a túlnyomásos légzés az adott magasságban.",
                "correct": false
            },
            {
                "text": "a kabin hőmérséklete nem csökken 10°C alá.",
                "correct": false
            },
            {
                "text": "a megfelelő oxigén, nyomás és hőmérséklet.",
                "correct": true
            },
            {
                "text": "a belégzett levegő oxigéntartalma 21%.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Mit értünk kinetózis alatt?",
        "answers": [
            {
                "text": "Érzékelési zavar az egyensúlyszervben, amit hányinger, hányás és szorongás kísér.",
                "correct": true
            },
            {
                "text": "A középfül fertőzése okozta betegség.",
                "correct": false
            },
            {
                "text": "Olyan betegség, melyet a vérben felszabaduló gázok okoznak.",
                "correct": false
            },
            {
                "text": "Alacsony légnyomás okozta betegség.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A sebből durva anyagot eltávolítani …",
        "answers": [
            {
                "text": "tilos.",
                "correct": false
            },
            {
                "text": "csak akkor szabad, ha úgy ítéljük meg, hogy a sérült életét veszélyezteti.",
                "correct": false
            },
            {
                "text": "csak akkor szabad, ha nem rögzült a sebbe, és eltávolítás közben nem kell belenyúlni a sebbe.",
                "correct": true
            },
            {
                "text": "csak akkor szabad, ha nem rögzült a sebbe, és a sebbe nyúlva könnyen elérhető.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "A verbális kommunikációba tartozik a beszéd, a non-verbális kommunikáció összetevői az írás, a vokális jelek, az arc és a gesztus stb.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Hogyan előzhető meg a sokkos állapot?",
        "answers": [
            {
                "text": "A sérültet hanyatt kell fektetni, lábait megemelve. A vérzést csillapítani kell, a sérült végtagokat nyugalomba kell helyezni és rögzíteni kell. A sérültet vízzel vagy teával lassan itathatjuk.",
                "correct": true
            },
            {
                "text": "Sokkos állapot nem előzhető meg, csak a kialakult sokkot kezelhetjük.",
                "correct": false
            },
            {
                "text": "A sérültet stabil oldalfekvésbe helyezve meg kell nyugtatni. Kortyokban folyadékot (vizet vagy teát) kell adni neki.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "PSZICHOLÓGIAI ALAPISMERETEK",
        "question": "Egy váratlan esemény megoldásakor melyik tudatállapotban nyújtjuk a legjobb teljesítményt?",
        "answers": [
            {
                "text": "Teljesen relaxált állapotban.",
                "correct": false
            },
            {
                "text": "Közepes szintű izgalmi állapotban.",
                "correct": true
            },
            {
                "text": "Minél intenzívebb egy stresszhelyzet, annál jobb teljesítmény nyújtunk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A … alvás a mélyebb alvásstádium.",
        "answers": [
            {
                "text": "REM",
                "correct": false
            },
            {
                "text": "a non-REM",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A szem ideghártyáján … vesznek részt a fény érzékelésében.",
        "answers": [
            {
                "text": "a csapok és a zsákocskák",
                "correct": false
            },
            {
                "text": "a csapok és a pálcikák",
                "correct": true
            },
            {
                "text": "a tömlőcskék és a zsákocskák",
                "correct": false
            },
            {
                "text": "a pálcikák és a tömlőcskék",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Végtagtörés gyanúja esetén …",
        "answers": [
            {
                "text": "a sérült végtagot meg kell mozgatni, ezzel meggyőződve a törésről.",
                "correct": false
            },
            {
                "text": "a sérült végtagot a talált helyzetben rögzíteni kell.",
                "correct": true
            },
            {
                "text": "a sérült végtagot helyre kell igazítani és rögzíteni kell.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Külső levegőt lélegezve … felett a hypoxia tünetei: eszméletvesztés, görcsök, halál.",
        "answers": [
            {
                "text": "15000 ft",
                "correct": false
            },
            {
                "text": "10000 ft",
                "correct": false
            },
            {
                "text": "30000 ft",
                "correct": false
            },
            {
                "text": "20000 ft",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A következő felsorolásokban a hypoxia és a szénmonoxid mérgezés néhány tünete szerepel. Melyik pont vonatkozik a szénmonoxid mérgezésre?",
        "answers": [
            {
                "text": "Fejfájás, fokozódó hányinger, szédülés.",
                "correct": true
            },
            {
                "text": "Izomgörcsök, tudatzavar, halláscsökkenés.",
                "correct": false
            },
            {
                "text": "Eufória, alkalmazkodási zavar, homályos látás.",
                "correct": false
            },
            {
                "text": "Fokozott élénkség, a hibák számának növekedése, pontatlanság.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A légzés és a keringés között olyan szoros az összefüggés, hogy egyik a másik megszűnését követően legfeljebb … tud tovább működni.",
        "answers": [
            {
                "text": "1 percig",
                "correct": false
            },
            {
                "text": "7 percig",
                "correct": false
            },
            {
                "text": "2-3 percig",
                "correct": true
            },
            {
                "text": "4 percig",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Hogyan látunk el zúzódást?",
        "answers": [
            {
                "text": "a bőr alatti vérömlenyeket szét kell masszírozni, majd nyomókötést kell alkalmazni.",
                "correct": false
            },
            {
                "text": "Rugalmas pólyával kössük be a sérült területet, majd sűrűn váltott hideg vizes borogatást alkalmazzunk.",
                "correct": true
            },
            {
                "text": "A sebet alaposan ki kell mosni, majd be kell jódozni vagy hintőporozni. Ezután steril fedőkötést kell felhelyezni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Ütőeres vérzés esetén …",
        "answers": [
            {
                "text": "a vérző végtagot pl. egy szíjjal el kell szorítani és nyomókötést kell felhelyezni.",
                "correct": false
            },
            {
                "text": "a vérző végtagot pl. egy szíjjal el kell szorítani és fedőkötést kell felhelyezni.",
                "correct": false
            },
            {
                "text": "választott helyeken ujjainkkal a vérző ütőeret leszorítva csillapítani kell a vérzést és nyomókötést kell felhelyezni.",
                "correct": true
            },
            {
                "text": "a vérző végtagot pl. egy szíjjal el kell szorítani és választott helyeken ujjainkkal a vérző ütőeret leszorítva csillapítani kell a vérzést.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Melyik állítás helyes?",
        "answers": [
            {
                "text": "Ha életünkben alvásmegvonásos időszak elé nézünk, akkor azt megelőzően célszerű sokat aludnunk, mert így a szervezet képes az alvást “felhalmozni” a nehéz időszakra.",
                "correct": false
            },
            {
                "text": "Az alvás alatt a REM alvásstádiumban töltött időt értjük.",
                "correct": false
            },
            {
                "text": "Ha a circadiam ritmus zavara nem áll fenn, akkor a legsúlyosabb alváshiányban szenvedő szervezet is képes regenerálódni két 9-10 órás teljes alvási periódus után.",
                "correct": true
            },
            {
                "text": "A pihenés csökkenti az alváshiányt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A repülőgép-vezetőre melyik típusú gyorsulás hat a leginkább?",
        "answers": [
            {
                "text": "A radiális gyorsulás (+Gz).",
                "correct": true
            },
            {
                "text": "A lineáris gyorsulás (+Gx).",
                "correct": false
            },
            {
                "text": "Kombinált lineáris és haránt irányú gyorsulás.",
                "correct": false
            },
            {
                "text": "A haránt irányú gyorsulás (+Gy).",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "Magassági repülés során túlnyomás nélküli kabin esetén a bélgázok miatt a repülőgép-vezető kellemetlen hasi puffadástól szenved. A helyes teednő:",
        "answers": [
            {
                "text": "Oxigént kell lélegezni.",
                "correct": false
            },
            {
                "text": "Valsalva-manővert kell végezni.",
                "correct": false
            },
            {
                "text": "Alacsonyabb magasságra kell süllyedni.",
                "correct": true
            },
            {
                "text": "Nagyobb magasságra kell süllyedni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSÉLETTAN",
        "question": "A dekompressziós betegséget …",
        "answers": [
            {
                "text": "a hirtelen nyomáscsökkenés váltja ki, mely során a hasüregi gázok kitágulása miatt a felnyomott rekesz akadályozza a légzést.",
                "correct": false
            },
            {
                "text": "a hirtelen nyomáscsökkenés váltja ki, mely során a vérben nitrogén buborékok szabadulnak fel és nyomást gyakorolnak a környező szövetekre, valamint elzárják a véráram útját.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "A mellkaskompressziót … ütemben kell végezni.",
        "answers": [
            {
                "text": "100-120 kompresszió/perc",
                "correct": true
            },
            {
                "text": "120-140 kompresszió/perc",
                "correct": false
            },
            {
                "text": "80-100 kompresszió/perc",
                "correct": false
            },
            {
                "text": "60-80 kompresszió/perc",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "ELSŐSEGÉLYNYÚJTÁS",
        "question": "Steril fedőkötés felhelyezése előtt …",
        "answers": [
            {
                "text": "tilos a sebbe bármilyen anyagot beleszórni, beleöntetni.",
                "correct": true
            },
            {
                "text": "a sebet alaposan ki kell mosni, majd be kell jódozni vagy hintőporozni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A Nap sugárzása …",
        "answers": [
            {
                "text": "melegíti a Föld felszínét, amely azután melegíti a troposzférában a levegőt.",
                "correct": true
            },
            {
                "text": "közvetlenül melegíti a troposzféra levegőjét.",
                "correct": false
            },
            {
                "text": "a troposzféra levegőjében a vízgőzt melegíti.",
                "correct": false
            },
            {
                "text": "ha felhők nincsenek jelen, a troposzféra levegőjét csak közvetlenül (közvetetten nem) melegíti.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Nyáron jegesedés semmilyen körülmények között nem következhet be.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Hogy hívják a troposzféra és a sztratoszféra közötti elválasztó réteget?",
        "answers": [
            {
                "text": "Ionoszféra.",
                "correct": false
            },
            {
                "text": "Sztratopauza.",
                "correct": false
            },
            {
                "text": "Tropopauza.",
                "correct": true
            },
            {
                "text": "Sztratoszféra.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mi a különbség a radiációs és az advektív köd között?",
        "answers": [
            {
                "text": "A radiációs köd a talajfelszín lehűlése miatt keletkezik szélcsendben. Az advektív köd párolgás következtében keletkezik a tenger fölött.",
                "correct": false
            },
            {
                "text": "A radiációs köd a talajfelszín lehűlése miatt keletkezik éjszaka gyenge szélben, vagy szélcsendben. Az advekciós köd akkor keletkezik, ha meleg nedves levegő áramlik hideg felszín fölé.",
                "correct": true
            },
            {
                "text": "A radiációs köd az éjszakai lehűlés folytán, az advektív köd pedig a nappali lehűlés folytán jön létre.",
                "correct": false
            },
            {
                "text": "Radiációs köd csak talajon, advekciós köd pedig csak tengeren képződik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Hogyan mozognak a légtömegek egy hideg okklúziós frontban?",
        "answers": [
            {
                "text": "A hidegfront meleg levegőéke a kevésbé meleg hidegfronti meleg levegőék alá nyomul..",
                "correct": false
            },
            {
                "text": "A hidegfront meleg levegőéke elválik a földfelszíntől és felfelé halad a melegfront kevésbé meleg felületén.",
                "correct": false
            },
            {
                "text": "A hidegfront hideg levegőéke a kevésbé hideg melegfronti hideg levegőék alá nyomul.",
                "correct": true
            },
            {
                "text": "A hidegfront hideg levegőéke kevésbé hideg, mint a melegfront hideg levegőéke, ezért a hidegfront felülete elválik a földfelszíntől és felfelé halad a melegfront felületén.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Milyen repülési feltételek jellemzik a Cirrus felhőket?",
        "answers": [
            {
                "text": "Az átlagos vízszintes látás több mint 1000 m, és nincs jegesedés.",
                "correct": true
            },
            {
                "text": "Az átlagos vízszintes látás kevesebb, mint 500 m, és gyengétől közepesig intenzitású jegesedés várható.",
                "correct": false
            },
            {
                "text": "Az átlagos vízszintes látás kevesebb, mint 500 m, és nincs jegesedés.",
                "correct": false
            },
            {
                "text": "Az átlagos vízszintes látás több mint 1000 m, és gyengétől közepesig intenzitású jegesedés várható.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Melyik rétegbe koncentrálódik a légköri vízgőztartalom legnagyobb része?",
        "answers": [
            {
                "text": "Sztratoszféra.",
                "correct": false
            },
            {
                "text": "Sztratopauza.",
                "correct": false
            },
            {
                "text": "Troposzféra",
                "correct": true
            },
            {
                "text": "Tropopauza.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Minden esetben képződik felhő, köd vagy harmat, ha …",
        "answers": [
            {
                "text": "a relatív nedvesség eléri a 98%-ot.",
                "correct": false
            },
            {
                "text": "vízgőz van jelen.",
                "correct": false
            },
            {
                "text": "a hőmérséklet és a harmatpont értéke közel azonos.",
                "correct": false
            },
            {
                "text": "a vízgőz kicsapódik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az északi félteke közepes szélességein a szél …",
        "answers": [
            {
                "text": "az óramutató járásával megegyezően fúj a ciklonokban és az óramutató járásával ellentétesen az anticiklonokban.",
                "correct": false
            },
            {
                "text": "az anticiklonokban és a ciklonokban az óramutató járásával megegyezően fúj.",
                "correct": false
            },
            {
                "text": "az óramutató járásával ellentétesen fúj a ciklonokban és az óramutató járásával megegyezően az anticiklonokban.",
                "correct": true
            },
            {
                "text": "a magas nyomás felől az alacsony nyomás felé fúj.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A … két-két szemközti alacsony- és magasnyomású képződmény közötti terület.",
        "answers": [
            {
                "text": "nyereg",
                "correct": true
            },
            {
                "text": "gerinc",
                "correct": false
            },
            {
                "text": "ciklon",
                "correct": false
            },
            {
                "text": "anticiklon",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A szelet előidézi …",
        "answers": [
            {
                "text": "a Föld forgása.",
                "correct": false
            },
            {
                "text": "a vízszintesben jelentkező nyomáskülönbség.",
                "correct": true
            },
            {
                "text": "a frontok mozgása.",
                "correct": false
            },
            {
                "text": "a talaj és a levegő közötti súrlódás.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Ha a látástávolság … között van, akkor párásságról, ha … alatt van, akkor ködről beszélünk.",
        "answers": [
            {
                "text": "1-5 km – 1 km",
                "correct": true
            },
            {
                "text": "0,5-5 km – 500 m",
                "correct": false
            },
            {
                "text": "5-10 km – 5 km",
                "correct": false
            },
            {
                "text": "1-10 km – 1 km",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az advekció …",
        "answers": [
            {
                "text": "a levegő horizontális mozgása.",
                "correct": true
            },
            {
                "text": "a levegő vertikális mozgása.",
                "correct": false
            },
            {
                "text": "azonos a konvekcióval.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Ha … , akkor nedves légrészecskére nézve a légoszlop instabil.",
        "answers": [
            {
                "text": "γn < γ",
                "correct": true
            },
            {
                "text": "γn > γ",
                "correct": false
            },
            {
                "text": "γn = γ",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mely pontokat kötik össze az izobárok az időjárási talajtérképen?",
        "answers": [
            {
                "text": "Azokat a pontokat, amelyekben egy adott szintre vonatkozó léghőmérséklet-értékek azonosak.",
                "correct": false
            },
            {
                "text": "Azokat a pontokat, amelyekben egy adott szintre vonatkozó légnyomás-értékek azonosak.",
                "correct": true
            },
            {
                "text": "Az azonos QNH pontjait.",
                "correct": false
            },
            {
                "text": "Azokat a pontokat, amelyekben egy adott szintre vonatkozó szélsebesség-értékek azonosak.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mi a magasszintű felhők legfőbb alkotórésze?",
        "answers": [
            {
                "text": "Túlhűlt vízcseppek.",
                "correct": false
            },
            {
                "text": "Vízgőz.",
                "correct": false
            },
            {
                "text": "Jégkristályok.",
                "correct": true
            },
            {
                "text": "Vízcseppek.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Dérszerű lerakódás keletkezik a repülőgépen, ha …",
        "answers": [
            {
                "text": "a repülőgép olyan felhőbe repül, amelynek hőmérséklete melegebb, mint a környező levegőé.",
                "correct": false
            },
            {
                "text": "a repülőgép 0 fok alatti felhőmentes levegőből melegebb, nedves levegőbe repül.",
                "correct": true
            },
            {
                "text": "a repülőgép 0 fok alatti felhőmentes levegőből hidegebb levegőbe repül.",
                "correct": false
            },
            {
                "text": "a repülőgép hirtelen 0 fok alatti felhőbe repül.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az alább felsoroltak közül nem tekintjük alapgáznak …",
        "answers": [
            {
                "text": "a vízgőzt.",
                "correct": true
            },
            {
                "text": "a nitrogént.",
                "correct": false
            },
            {
                "text": "az oxigént.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Hogyan mozognak a légtömegek egy melegfrontban?",
        "answers": [
            {
                "text": "A hideg légtömeg a meleg légtömeg alá csúszik.",
                "correct": false
            },
            {
                "text": "A meleg légtömeg felsiklik a hideg légtömegre.",
                "correct": true
            },
            {
                "text": "A meleg légtömeg a hideg légtömeg alá csúszik.",
                "correct": false
            },
            {
                "text": "A hideg légtömeg felsiklik a meleg légtömegen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A következő meghatározások közül melyik írja le a microburst jelenséget?",
        "answers": [
            {
                "text": "Nagy sebességű levegő leáramlás, melynek a hőmérséklete alacsonyabb a környező levegőénél.",
                "correct": true
            },
            {
                "text": "Nagy sebességű levegő leáramlás, melynek a hőmérséklete magasabb a környező levegőénél.",
                "correct": false
            },
            {
                "text": "Kis kiterjedésű alacsony nyomású terület, ahol igen erős a szél sebessége.",
                "correct": false
            },
            {
                "text": "Extrém erős széllökés, mely trópusi forgóviharral kapcsolatos.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A QNH mindig nagyobb a QFE-nél",
                "correct": false
            },
            {
                "text": "A QNH lehet egyenlő a QFE-vel.",
                "correct": true
            },
            {
                "text": "A QNH mindig egyenlő a QFE-vel.",
                "correct": false
            },
            {
                "text": "A QNH mindig kisebb a QFE-nél.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mely erők tartanak egyensúlyt a geosztrofikus szélben?",
        "answers": [
            {
                "text": "Nyomásgradiens erő, centrifugális erő, súrlódási erő.",
                "correct": false
            },
            {
                "text": "Nyomásgradiens erő, Coriolis erő, centrifugális erő.",
                "correct": false
            },
            {
                "text": "Nyomásgradiens erő, Coriolis erő, súrlódási erő.",
                "correct": false
            },
            {
                "text": "Nyomásgradiens erő, Coriolis erő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az izotermia olyan légréteg, amelyben a hőmérséklet …",
        "answers": [
            {
                "text": "csökken a magassággal, állandó arány szerint.",
                "correct": false
            },
            {
                "text": "állandó marad a magasság változásával.",
                "correct": true
            },
            {
                "text": "nő a magassággal.",
                "correct": false
            },
            {
                "text": "nő a magassággal, állandó arány szerint.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az alábbiak közül melyik felhő terjed ki több magassági szintre?",
        "answers": [
            {
                "text": "Stratus.",
                "correct": false
            },
            {
                "text": "Cirrus.",
                "correct": false
            },
            {
                "text": "Altocumulus.",
                "correct": false
            },
            {
                "text": "Nimbostratus.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Melyik állítás igaz a dérszerű lerakódásra?",
        "answers": [
            {
                "text": "A jégtelenítő berendezéssel nehezen választható le.",
                "correct": false
            },
            {
                "text": "Durva, matt, kristályos szerkezetű jegesedés.",
                "correct": false
            },
            {
                "text": "A fellépő veszély jelentős és hosszan tartó.",
                "correct": false
            },
            {
                "text": "Keletkezéséhez felhőzet, illetve csapadék jelenléte nem szükséges.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Száraz légköri homálynak nevezzük azt a jelenséget, amikor a látástávolság… lecsökken.",
        "answers": [
            {
                "text": "porszerű részecskék jelenléte következtében",
                "correct": true
            },
            {
                "text": "gyenge szitálás következtében",
                "correct": false
            },
            {
                "text": "apró vízcseppek jelenléte következtében",
                "correct": false
            },
            {
                "text": "hidegfront következtében",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A zivatarral kapcsolatos szélnyírás a zivatarfelhő melyik részén a legveszélyesebb?",
        "answers": [
            {
                "text": "A zivatarcella délnyugati oldalán.",
                "correct": false
            },
            {
                "text": "A zivatarcella előtt, a gust front közelében.",
                "correct": true
            },
            {
                "text": "Közvetlenül a zivatar cella alatt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az 500 hPa-s szint átlagosan melyik FL-nek felel meg?",
        "answers": [
            {
                "text": "FL180.",
                "correct": true
            },
            {
                "text": "FL050.",
                "correct": false
            },
            {
                "text": "FL100.",
                "correct": false
            },
            {
                "text": "FL240.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Melyik állítás nem igaz a tiszta jegesedésre?",
        "answers": [
            {
                "text": "A jégtelenítő berendezéssel könnyen leválasztható.",
                "correct": true
            },
            {
                "text": "Nagyobb méretű felhőelemek, illetve csapadékelemek okozzák.",
                "correct": false
            },
            {
                "text": "Sima, átlátszó, jégpáncélszerű jegesedés.",
                "correct": false
            },
            {
                "text": "Az aerodinamikai tulajdonságokban jelentős romlás áll be.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Milyen a levegő áramlásának iránya a downburst-ben a talajon?",
        "answers": [
            {
                "text": "Felfelé irányuló szívóhatás.",
                "correct": false
            },
            {
                "text": "Szétáramlás.",
                "correct": true
            },
            {
                "text": "Összeáramlás.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A … egy vagy több zárt izobár, melynek a középpontjában a nyomás alacsony.",
        "answers": [
            {
                "text": "gerinc",
                "correct": false
            },
            {
                "text": "nyereg",
                "correct": false
            },
            {
                "text": "anticiklon",
                "correct": false
            },
            {
                "text": "ciklon",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Késő délután a hőmérséklet 12°C, a harmatpont 5°C. Hogyan kell változnia a hőmérsékletnek, hogy az éjszaka folyamán meginduljon a kicsapódás?",
        "answers": [
            {
                "text": "5°C-kal kell növekednie.",
                "correct": false
            },
            {
                "text": "7°C-kal kell csökkennie.",
                "correct": true
            },
            {
                "text": "5°C-kal kell csökkennie.",
                "correct": false
            },
            {
                "text": "7°C-ra kell csökkennie.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Ha … , akkor száraz légrészecskére nézve a légoszlop stabilis.",
        "answers": [
            {
                "text": "γsz > γ",
                "correct": true
            },
            {
                "text": "γsz < γ",
                "correct": false
            },
            {
                "text": "γsz = γ",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mit jelent a beágyazott zivatar kifejezés?",
        "answers": [
            {
                "text": "Zivatar felhő más típusú felhőkkel együtt figyelhető meg.",
                "correct": true
            },
            {
                "text": "Erős zivatar ágyazódott egy squalle line-ba.",
                "correct": false
            },
            {
                "text": "Zivatart figyeltek meg erősen stabilis légtömegben.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az inverzió olyan légréteg, amelyben a hőmérséklet …",
        "answers": [
            {
                "text": "állandó marad a magasság változásával.",
                "correct": false
            },
            {
                "text": "nő a magassággal.",
                "correct": true
            },
            {
                "text": "1°C/100m-nél nagyobb mértékben nő a magassággal.",
                "correct": false
            },
            {
                "text": "1°C/100m-nél nagyobb mértékben csökken a magassággal.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az erősen fejlett Cumulus felhők jelzik …",
        "answers": [
            {
                "text": "a gyenge látást a talajon.",
                "correct": false
            },
            {
                "text": "az atmoszféra instabilitását.",
                "correct": true
            },
            {
                "text": "a meleg levegő jelenlétét a magasban.",
                "correct": false
            },
            {
                "text": "az alacsony szintű inverzió jelenlétét.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Közelítőleg milyen magas a tropopauza az Egyenlítő környékén?",
        "answers": [
            {
                "text": "8 km.",
                "correct": false
            },
            {
                "text": "16 km.",
                "correct": true
            },
            {
                "text": "11 km.",
                "correct": false
            },
            {
                "text": "40 km.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A talajfelszín felmelegedése … következménye.",
        "answers": [
            {
                "text": "kondenzáció",
                "correct": false
            },
            {
                "text": "besugárzás",
                "correct": true
            },
            {
                "text": "advekció",
                "correct": false
            },
            {
                "text": "konvekció",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az alábbiak közül mely felhőtípushoz kapcsolódnak nagy valószínűséggel záporok?",
        "answers": [
            {
                "text": "Stratocumulus.",
                "correct": false
            },
            {
                "text": "Stratus.",
                "correct": false
            },
            {
                "text": "Cumulonimbus.",
                "correct": true
            },
            {
                "text": "Nimbostratus.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A zivatar fejlődési stádiumai közül melyikre jellemző a kizárólagos leáramlás?",
        "answers": [
            {
                "text": "Cu állapot.",
                "correct": false
            },
            {
                "text": "Feloszlási szakasz.",
                "correct": true
            },
            {
                "text": "Kifejlett állapot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Melyek a zúzmarás jéglerakódás jellemzői?",
        "answers": [
            {
                "text": "Átlátszó, jégpáncélszerű.",
                "correct": false
            },
            {
                "text": "Kristályos szerkezetű, fehér színű.",
                "correct": true
            },
            {
                "text": "Vékony, átlátszó réteg.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A … hőmérsékleti gradiens kb. 1°C/100 m.",
        "answers": [
            {
                "text": "nedves adiabatikus",
                "correct": false
            },
            {
                "text": "száraz és a nedves adiabatikus",
                "correct": false
            },
            {
                "text": "lokális.",
                "correct": false
            },
            {
                "text": "száraz adiabatikus",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Milyen időjárási körülményeket várhatunk egy instabilitási vonalon?",
        "answers": [
            {
                "text": "Zivatarokat.",
                "correct": true
            },
            {
                "text": "Ködöt.",
                "correct": false
            },
            {
                "text": "Intenzív, folyamatos esőt.",
                "correct": false
            },
            {
                "text": "Erős forgószeleket, melyek felnyúlnak a magasabb szintekig.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Hogyan mozognak a légtömegek egy hidegfrontban?",
        "answers": [
            {
                "text": "A meleg légtömeg a hideg légtömeg alá hatol.",
                "correct": false
            },
            {
                "text": "A hideg légtömeg a meleg légtömeg alá hatol.",
                "correct": true
            },
            {
                "text": "A hideg légtömeg a meleg légtömeg fölé siklik.",
                "correct": false
            },
            {
                "text": "A meleg légtömeg felsiklik a hideg légtömegen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Melyik kijelentés igaz a légtömeg harmatpontjára vonatkoztatva?",
        "answers": [
            {
                "text": "A légtömeg relatív nedvességének meghatározására alkalmas, ha a léghőmérsékletet nem ismerjük.",
                "correct": false
            },
            {
                "text": "A hőmérsékletnél alacsonyabb vagy vele egyenlő lehet.",
                "correct": true
            },
            {
                "text": "A légtömeg relatív nedvességének meghatározására alkalmas, ha ismerjük a légnyomást.",
                "correct": false
            },
            {
                "text": "A hőmérsékletnél lehet magasabb.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Az alábbiak közül melyik folyamat vezethet Cu és Cb felhők kialakulásához?",
        "answers": [
            {
                "text": "Konvekció.",
                "correct": true
            },
            {
                "text": "Frontális emelés stabilis légrétegben.",
                "correct": false
            },
            {
                "text": "Radiáció.",
                "correct": false
            },
            {
                "text": "Advekció.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A konvekció során kialakuló turbulenciát …",
        "answers": [
            {
                "text": "termikus turbulenciának nevezzük.",
                "correct": true
            },
            {
                "text": "dinamikus turbulenciának nevezzük.",
                "correct": false
            },
            {
                "text": "súrlódási turbulenciának nevezzük.",
                "correct": false
            },
            {
                "text": "hegyvidéki turbulenciának nevezzük.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mennyi az átlagos hőmérsékleti gradiens a troposzférában az ICAO standard légkör (NEL) szerint számolva?",
        "answers": [
            {
                "text": "3°C/100m",
                "correct": false
            },
            {
                "text": "0,56°C/100m",
                "correct": false
            },
            {
                "text": "0,65°C/100m",
                "correct": true
            },
            {
                "text": "1°C/100m.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A NEL-re vonatkozóan melyik állítás igaz?",
        "answers": [
            {
                "text": "A közepes tengerszinten 15°C a hőmérséklet és 1013,25 hPa a légnyomás.",
                "correct": true
            },
            {
                "text": "A közepes tengerszinten 15°C a hőmérséklet és a hőmérséklet-csökkenés a magassággal 0,56°C/100 m.",
                "correct": false
            },
            {
                "text": "A közepes tengerszinten 1013,25 hPa a légnyomás és a hőmérséklet-emelkedés a magassággal 0,65°C/100 m.",
                "correct": false
            },
            {
                "text": "A közepes tengerszinten 10°C a hőmérséklet és a hőmérséklet-csökkenés a magassággal 1°C/100 m",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Milyen kiváltó okai vannak a zivatarok kialakulásának?",
        "answers": [
            {
                "text": "Elegendő nedvességtartalom + feláramlás + labilitás.",
                "correct": true
            },
            {
                "text": "Cu felhőzet + feláramlás.",
                "correct": false
            },
            {
                "text": "Elegendő nedvességtartalom + feláramlás.",
                "correct": false
            },
            {
                "text": "Cu felhőzet + nedvességtartalom + inverzió.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mik a kisugárzási ködök keletkezési feltételei?",
        "answers": [
            {
                "text": "Erős talajszél, erős stabilitás, felhőtlen ég, hófelszín.",
                "correct": false
            },
            {
                "text": "Erős stabilitás, nagy relatív nedvesség, gyenge talajszél, felhőtlen ég.",
                "correct": true
            },
            {
                "text": "Nagy relatív nedvesség, erős talajszél, erős labilitás, hófelszín.",
                "correct": false
            },
            {
                "text": "Gyenge talajszél, nagy relatív nedvesség, zárt felhőzet, negatív léghőmérséklet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A zivatarok Cu állapotára melyik jelenség a jellemző?",
        "answers": [
            {
                "text": "Elérheti a sztratoszféra alsó részét.",
                "correct": false
            },
            {
                "text": "A felhőben csak feláramlás tapasztalható.",
                "correct": true
            },
            {
                "text": "Gyakori felhőn belüli villámlás.",
                "correct": false
            },
            {
                "text": "A talajon csapadékhullás kezdődik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "A túlhűlt vízcsepp …",
        "answers": [
            {
                "text": "fagypont alatti hőmérséklete ellenére folyékony halmazállapotú.",
                "correct": true
            },
            {
                "text": "olyan vízcsepp, amelynek túlnyomórésze fagyott.",
                "correct": false
            },
            {
                "text": "olyan vízcsepp, amely esése során megfagyott.",
                "correct": false
            },
            {
                "text": "apró vízrészecske, melynek hőmérséklete -50°C alatt van.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mi a szélnyírás kialakulásának feltétele a légkörben?",
        "answers": [
            {
                "text": "Bárhol a légkörben kialakulhat, ha a szélvektor gradiense nagy.",
                "correct": true
            },
            {
                "text": "Zivatarok környezetében alakul ki.",
                "correct": false
            },
            {
                "text": "Csak alacsony szinteken alakul ki, ha nagy a hőmérséklet horizontális gradiense.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Mikor indul meg a csapadékhullás a felhőkből?",
        "answers": [
            {
                "text": "Ha a súlya elég nagy ahhoz, hogy a felhőt létrehozó felszálló légmozgást legyőzze.",
                "correct": true
            },
            {
                "text": "Ha a felhő elérte a 2000 m-es magasságot.",
                "correct": false
            },
            {
                "text": "Ha a levegő túltelítetté válik a felhőben.",
                "correct": false
            },
            {
                "text": "Ha egy átlagos méretű felhőelem a százezerszeresére növekedett.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "METEROLÓGIA",
        "question": "Minél nagyobb a nyomásgradiens …",
        "answers": [
            {
                "text": "az izobárok annál közelebb vannak egymáshoz és annál erősebb a szél.",
                "correct": true
            },
            {
                "text": "az izobárok annál távolabb vannak egymástól és annál gyengébb a szél.",
                "correct": false
            },
            {
                "text": "az izobárok annál közelebb vannak egymáshoz és annál alacsonyabb a hőmérséklet.",
                "correct": false
            },
            {
                "text": "az izobárok annál távolabb vannak egymástól és annál magasabb a hőmérséklet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A mágneses géptengely-irányszög és a tényleges géptengely-irányszög közötti eltérést … okozza.",
        "answers": [
            {
                "text": "a deviáció",
                "correct": false
            },
            {
                "text": "az inklináció",
                "correct": false
            },
            {
                "text": "a deklináció",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Ökölszabályt alkalmazva QNH 1020 esetén QNH 3000 láb mekkora nyomásmagasságnak felel meg?",
        "answers": [
            {
                "text": "3290 láb",
                "correct": false
            },
            {
                "text": "3210 láb",
                "correct": false
            },
            {
                "text": "2790 láb",
                "correct": true
            },
            {
                "text": "3430 láb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Elméletileg melyik esetben teszi meg a legnagyobb utat a repülőgép?",
        "answers": [
            {
                "text": "Ha uticéljának eléréséhez egy adóállomásra vezető rádió-irányszöget követ.",
                "correct": false
            },
            {
                "text": "A megtett út mindhárom esetben azonos.",
                "correct": false
            },
            {
                "text": "Ha uticélját látással megirányozza.",
                "correct": false
            },
            {
                "text": "Ha uticélját a mágneses iránytű segítségével éri el.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A gyakorlati navigáció szempontjából a Föld alakja …",
        "answers": [
            {
                "text": "gömb.",
                "correct": true
            },
            {
                "text": "forgási ellipszoid.",
                "correct": false
            },
            {
                "text": "geoid.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy NOTAM B) adateleme: 1001040700, C) adateleme pedig: 1001221500. Érvényes-e a NOTAM 2010. február 1-én?",
        "answers": [
            {
                "text": "Nem.",
                "correct": true
            },
            {
                "text": "Igen.",
                "correct": false
            }
        ],
        "hint": "A NOTAM-ok (Notice to Airmen) különböző típusú értesítéseket tartalmazhatnak, amelyek között a legfontosabbak a következők:<br><br><br><br>FDC NOTAM: Az Amerikai Szövetségi Légügyi Hatóság (FAA) által kiadott értesítések, amelyek az ország egész területén érvényesek. Ezek általában olyan információkat tartalmaznak, mint a légi tér zárlatai, a katonai gyakorlatok és az átmeneti légi navigációs segédletek működési zavarai.<br><br>NOTAM-D: Az USA-beli katonai légi erők által kiadott értesítések, amelyek a repülőterek és a katonai légtér működésével kapcsolatos információkat tartalmaznak.<br><br>NOTAMN: Nemzeti fontosságú értesítések, amelyek a nemzetbiztonságra és a repülésbiztonságra vonatkozó fontos információkat tartalmazzák.<br><br>NOTAMR: Az átmeneti változásokkal, zárlatokkal vagy korlátozásokkal kapcsolatos értesítések, amelyek csak egy bizonyos időszakban érvényesek.<br><br>NOTAMC: A hosszú távú vagy állandó változásokkal kapcsolatos értesítések, amelyek hosszabb ideig érvényesek és általában az állandó repülőterek és légi navigációs segédletek működésével kapcsolatos információkat tartalmazzák.<br><br>SNOWTAM: A hóeltakarítással és síkosságmentesítéssel kapcsolatos értesítések, amelyek a téli időszakban fontosak lehetnek a repülőgépek biztonságos működése szempontjából.<br><br>ASHTAM: A vulkáni hamu elterjedésével kapcsolatos értesítések, amelyek akkor jelentek meg, amikor a vulkánkitörések vagy más geológiai események hatással lehetnek a repülés biztonságára.<br><br>Ezenkívül vannak egyéb speciális NOTAM-ok, amelyek egy adott ország vagy régió légiközlekedési hatóságai által adhatók ki a repülési biztonság és hatékonyság érdekében."
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Az útvonal-ellenőrzésen 20 NM megtétele után 3 NM oldaleltérést tapasztalunk. Mennyi az oldaleltérés szöge az 1:60-as szabályt alkalmazva?",
        "answers": [
            {
                "text": "2°",
                "correct": false
            },
            {
                "text": "3°",
                "correct": false
            },
            {
                "text": "6°",
                "correct": false
            },
            {
                "text": "9°",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A repülőgép haladási iránya és a mágneses észak között adódó szög …",
        "answers": [
            {
                "text": "a mágneses útirányszög.",
                "correct": true
            },
            {
                "text": "a tényleges géptengely-irányszög.",
                "correct": false
            },
            {
                "text": "a tényleges útirányszög.",
                "correct": false
            },
            {
                "text": "a mágneses géptengely-irányszög.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A … rendszer működése a fáziskülönbség mérésén alapszik.",
        "answers": [
            {
                "text": "A VDF",
                "correct": false
            },
            {
                "text": "A DME",
                "correct": false
            },
            {
                "text": "Az NDB",
                "correct": false
            },
            {
                "text": "A VOR",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A léginavigáció szempontjából elsődleges követelmény, hogy a térkép … legyen.",
        "answers": [
            {
                "text": "szögtartó és hossztartó",
                "correct": false
            },
            {
                "text": "hossztartó",
                "correct": false
            },
            {
                "text": "szögtartó, hossztartó és területtartó",
                "correct": false
            },
            {
                "text": "szögtartó",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Hogyan jelölik az érvénytelenítő NOTAM-ot?",
        "answers": [
            {
                "text": "NOTAMC",
                "correct": true
            },
            {
                "text": "NOTAMR",
                "correct": false
            },
            {
                "text": "NOMAMN",
                "correct": false
            }
        ],
        "hint": "A NOTAM-ok (Notice to Airmen) különböző típusú értesítéseket tartalmazhatnak, amelyek között a legfontosabbak a következők:<br><br><br><br>FDC NOTAM: Az Amerikai Szövetségi Légügyi Hatóság (FAA) által kiadott értesítések, amelyek az ország egész területén érvényesek. Ezek általában olyan információkat tartalmaznak, mint a légi tér zárlatai, a katonai gyakorlatok és az átmeneti légi navigációs segédletek működési zavarai.<br><br>NOTAM-D: Az USA-beli katonai légi erők által kiadott értesítések, amelyek a repülőterek és a katonai légtér működésével kapcsolatos információkat tartalmaznak.<br><br>NOTAMN: Nemzeti fontosságú értesítések, amelyek a nemzetbiztonságra és a repülésbiztonságra vonatkozó fontos információkat tartalmazzák.<br><br>NOTAMR: Az átmeneti változásokkal, zárlatokkal vagy korlátozásokkal kapcsolatos értesítések, amelyek csak egy bizonyos időszakban érvényesek.<br><br>NOTAMC: A hosszú távú vagy állandó változásokkal kapcsolatos értesítések, amelyek hosszabb ideig érvényesek és általában az állandó repülőterek és légi navigációs segédletek működésével kapcsolatos információkat tartalmazzák.<br><br>SNOWTAM: A hóeltakarítással és síkosságmentesítéssel kapcsolatos értesítések, amelyek a téli időszakban fontosak lehetnek a repülőgépek biztonságos működése szempontjából.<br><br>ASHTAM: A vulkáni hamu elterjedésével kapcsolatos értesítések, amelyek akkor jelentek meg, amikor a vulkánkitörések vagy más geológiai események hatással lehetnek a repülés biztonságára.<br><br>Ezenkívül vannak egyéb speciális NOTAM-ok, amelyek egy adott ország vagy régió légiközlekedési hatóságai által adhatók ki a repülési biztonság és hatékonyság érdekében."
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A földgömb felületén a Föld középpontját magukba foglaló síkokkal kimetszett köröket … nevezzük.",
        "answers": [
            {
                "text": "nagyköröknek",
                "correct": true
            },
            {
                "text": "hosszúsági köröknek",
                "correct": false
            },
            {
                "text": "kisköröknek",
                "correct": false
            },
            {
                "text": "szélességi köröknek",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Nyári időszámításkor Magyarországon a helyi idő …, téli időszámítás esetén …",
        "answers": [
            {
                "text": "CET + 2 – CET + 1",
                "correct": false
            },
            {
                "text": "UTC + 2 – UTC + 1",
                "correct": true
            },
            {
                "text": "CET + 1 – CET + 2",
                "correct": false
            },
            {
                "text": "UTC + 1 – UTC + 2",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A VFR repülések során milyen esetben használhatunk elsődleges navigációs forrásként GPS készüléket?",
        "answers": [
            {
                "text": "Minden körülmények között.",
                "correct": false
            },
            {
                "text": "Ha a GPS készülék IFR-engedélyezett.",
                "correct": false
            },
            {
                "text": "Semmilyen körülmények között.",
                "correct": true
            },
            {
                "text": "Ha a GPS készülék és a repülőgép IFR-engedélyezett.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy útvonalszakasz tényleges útirányszöge 170°. A deklináció értéke 2° nyugati. A szél iránya 240° és a számítások alapján 7°-kal téríti el a repülőgépet. A deviáció 1° keleti. Hány fok lesz az iránytűirányszög?",
        "answers": [
            {
                "text": "162°",
                "correct": false
            },
            {
                "text": "176°",
                "correct": false
            },
            {
                "text": "178°",
                "correct": true
            },
            {
                "text": "180°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy útvonalszakasz tényleges útirányszöge 310°. A deklináció értéke 3° és keleti. A deviáció 2° nyugati. Hány fok lesz az iránytűirányszög?",
        "answers": [
            {
                "text": "305 °",
                "correct": false
            },
            {
                "text": "315°",
                "correct": false
            },
            {
                "text": "309°",
                "correct": true
            },
            {
                "text": "311°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Minimálisan hány műholdra való rálátás szükséges a három dimenziós műholdas helymeghatározáshoz működéséhez?",
        "answers": [
            {
                "text": "6",
                "correct": false
            },
            {
                "text": "4",
                "correct": true
            },
            {
                "text": "3",
                "correct": false
            },
            {
                "text": "7",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy repülőgép a VOR adó 124-es radiálján van és 300° mágneses irányszögön halad. Az OBS beállítása 300°. Mit mutat a CDI?",
        "answers": [
            {
                "text": "A TO/FROM zászló jelzése: TO, a pálcika egy ponttal jobbra tér ki.",
                "correct": false
            },
            {
                "text": "A TO/FROM zászló jelzése: FROM, a pálcika egy ponttal balra tér ki.",
                "correct": false
            },
            {
                "text": "A TO/FROM zászló jelzése: FROM, a pálcika két ponttal balra tér ki.",
                "correct": false
            },
            {
                "text": "A TO/FROM zászló jelzése: TO, a pálcika két ponttal jobbra tér ki.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A rádióállomáshoz vezető mágneses irányszög a …",
        "answers": [
            {
                "text": "QDM",
                "correct": true
            },
            {
                "text": "QDR",
                "correct": false
            },
            {
                "text": "QUJ",
                "correct": false
            },
            {
                "text": "QTE",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Ha látással megirányozunk egy tereptárgyat, akkor … repülünk.",
        "answers": [
            {
                "text": "orthodromán",
                "correct": true
            },
            {
                "text": "loxodromán",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A … rendszerben a földi állomás méri az állomás és a repülőgép közötti rádióirányszöget.",
        "answers": [
            {
                "text": "A DME",
                "correct": false
            },
            {
                "text": "A VOR",
                "correct": false
            },
            {
                "text": "Az NDB",
                "correct": false
            },
            {
                "text": "A VDF",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy útvonalszakasz hossza 80 NM. Az útvonalszakasz 1/4-nél 2 NM oldaleltérést tapasztalunk és a kurzushoz az útvonalszakasz végpontján szeretnénk csatlakozni. Az 1:60-as szabályt alkalmazva mennyi az irányhelyesbítés szöge?",
        "answers": [
            {
                "text": "8°",
                "correct": true
            },
            {
                "text": "4°",
                "correct": false
            },
            {
                "text": "2°",
                "correct": false
            },
            {
                "text": "6°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A magyarországi VFR útvonalrepülésekhez … használjuk.",
        "answers": [
            {
                "text": "az ICAO 1:1 000 000-s légiforgalmi térképet",
                "correct": false
            },
            {
                "text": "az ICAO útvonaltérképet",
                "correct": false
            },
            {
                "text": "az ICAO 1:500 000-es légiforgalmi térképet",
                "correct": true
            },
            {
                "text": "az ICAO kis méretarányú légiforgalmi navigációs térképet",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A CDI (OBI) és a HSI az alábbiak közül a … rendszerhez tartozó kijelző.",
        "answers": [
            {
                "text": "VDF",
                "correct": false
            },
            {
                "text": "NDB",
                "correct": false
            },
            {
                "text": "VOR",
                "correct": true
            },
            {
                "text": "DME",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy útvonal lerepülésének teljes számított ideje 1 óra 27′. Navigációs tartaléknak 45 perc tüzelőanyagot kell vételeznünk. A repülőgép fogyasztása 5 US gallon/óra. Hány gallon a teljes tüzelőanyag-szükséglet?",
        "answers": [
            {
                "text": "11 US gallon",
                "correct": true
            },
            {
                "text": "10,6 US gallon",
                "correct": false
            },
            {
                "text": "3,5 US gallon",
                "correct": false
            },
            {
                "text": "12,6 US gallon",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A … rendszerben a keret- és a szálantenna által vett összegzett jelek erőssége szerint történik az iránymeghatározás.",
        "answers": [
            {
                "text": "Az NDB",
                "correct": true
            },
            {
                "text": "A VDF",
                "correct": false
            },
            {
                "text": "A VOR",
                "correct": false
            },
            {
                "text": "A DME",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Az RBI 040° mágneses irányszöget mutat A mágneses géptengelyirányszög 330°. Mennyi a QDM?",
        "answers": [
            {
                "text": "290°",
                "correct": false
            },
            {
                "text": "220°",
                "correct": false
            },
            {
                "text": "040°",
                "correct": false
            },
            {
                "text": "010°",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Ökölszabályt alkalmazva NEL körülmények között 5000 láb magasságon 100 kt CAS sebesség mekkora TAS sebességnek felel meg?",
        "answers": [
            {
                "text": "110 kt",
                "correct": true
            },
            {
                "text": "105 kt",
                "correct": false
            },
            {
                "text": "115 kt",
                "correct": false
            },
            {
                "text": "102 kt",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A QUJ és QDM, valamint a QTE és a QDR között … teremt kapcsolatot..",
        "answers": [
            {
                "text": "a rádiódeviáció",
                "correct": false
            },
            {
                "text": "a deviáció",
                "correct": false
            },
            {
                "text": "az inklináció",
                "correct": false
            },
            {
                "text": "a deklináció",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A … metszősíkja párhuzamos az egyenlítővel, azaz merőleges a Föld tengelyére.",
        "answers": [
            {
                "text": "kiskörök",
                "correct": false
            },
            {
                "text": "hosszúsági körök",
                "correct": false
            },
            {
                "text": "szélességi körök",
                "correct": true
            },
            {
                "text": "nagykörök",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A pörgettyűs iránytartóval állandó irányt tartva … repülünk.",
        "answers": [
            {
                "text": "orthodromán",
                "correct": true
            },
            {
                "text": "loxodromán",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A földrajzi észak és a légijármű haladási iránya közötti szög …",
        "answers": [
            {
                "text": "a mágneses útirányszög.",
                "correct": false
            },
            {
                "text": "a tényleges útirányszög.",
                "correct": true
            },
            {
                "text": "a tényleges géptengely-irányszög.",
                "correct": false
            },
            {
                "text": "a mágneses géptengely-irányszög.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A mágneses géptengely-irányszög és az iránytű géptengely-irányszög közötti eltérést … okozza.",
        "answers": [
            {
                "text": "a deklináció",
                "correct": false
            },
            {
                "text": "a deviáció",
                "correct": true
            },
            {
                "text": "az inklináció",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Az RMI …",
        "answers": [
            {
                "text": "az NDB- és a VOR-rendszer közös kijelzője is lehet.",
                "correct": true
            },
            {
                "text": "kizárólag a VOR-rendszerben üzemel.",
                "correct": false
            },
            {
                "text": "kizárólag az NDB-rendszerben üzemel.",
                "correct": false
            },
            {
                "text": "kizárólag a DME-rendszer kijelzője.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A rádióállomástól mért mágneses irányszög …",
        "answers": [
            {
                "text": "QDM",
                "correct": false
            },
            {
                "text": "QDR",
                "correct": true
            },
            {
                "text": "QUJ",
                "correct": false
            },
            {
                "text": "QTE",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Azt a pontot, ahonnan nézve a Föld forgása az óramutató járásával ellentétes irányú, földrajzi … nevezzük.",
        "answers": [
            {
                "text": "Déli-sarknak",
                "correct": false
            },
            {
                "text": "mágneses északnak",
                "correct": false
            },
            {
                "text": "Északi-sarknak",
                "correct": true
            },
            {
                "text": "mágneses délnek",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "ICAO kis méretarányú légiforgalmi navigációs térkép …",
        "answers": [
            {
                "text": "megközelítésekhez használatos.",
                "correct": false
            },
            {
                "text": "nagytávolságú repülésekhez használatos.",
                "correct": true
            },
            {
                "text": "óceánok, illetve a kis település-sűrűségű területek feletti repülésekhez használatos.",
                "correct": false
            },
            {
                "text": "rövid útvonalrepülésekhez használatos.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy útvonalszakasz tényleges útirányszöge 250°. A deklináció értéke 3° keleti. A szél iránya 190° és a számítások alapján 4°-kal téríti el a repülőgépet. A deviáció 2° nyugati. Hány fok lesz az iránytűirányszög?",
        "answers": [
            {
                "text": "259°",
                "correct": false
            },
            {
                "text": "255°",
                "correct": false
            },
            {
                "text": "247°",
                "correct": false
            },
            {
                "text": "245°",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "… rendszer fedélzeti berendezése az induló és érkező impulzusjelek közötti időkülönbség alapján határozza meg a távolságot.",
        "answers": [
            {
                "text": "A VDF",
                "correct": false
            },
            {
                "text": "A DME",
                "correct": true
            },
            {
                "text": "Az NDB",
                "correct": false
            },
            {
                "text": "A VOR",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy repülőgép 320° mágneses irányt tart és 40 NM lerepülése után 4 NM-el tér el a kurzustól, jobb oldaleltéréssel. Az 1:60-as szabályt alkalmazva milyen mágneses irányszöget kell felvennie ahhoz, hogy 20 NM megtétele után csatlakozzon a kurzushoz?",
        "answers": [
            {
                "text": "308°",
                "correct": false
            },
            {
                "text": "332°",
                "correct": false
            },
            {
                "text": "338°",
                "correct": false
            },
            {
                "text": "302°",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A repülőgép hossztengelye és a mágneses észak iránya közötti szög …",
        "answers": [
            {
                "text": "a tényleges géptengely-irányszög.",
                "correct": false
            },
            {
                "text": "a mágneses géptengely-irányszög.",
                "correct": true
            },
            {
                "text": "az iránytű géptengely-irányszög.",
                "correct": false
            },
            {
                "text": "a mágneses útirányszög.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy korábbi NOTAM-ot módosító NOTAM jelölése …",
        "answers": [
            {
                "text": "NOMAMN",
                "correct": false
            },
            {
                "text": "NOTAMR",
                "correct": true
            },
            {
                "text": "NOTAMC",
                "correct": false
            }
        ],
        "hint": "A NOTAM-ok (Notice to Airmen) különböző típusú értesítéseket tartalmazhatnak, amelyek között a legfontosabbak a következők:<br><br><br><br>FDC NOTAM: Az Amerikai Szövetségi Légügyi Hatóság (FAA) által kiadott értesítések, amelyek az ország egész területén érvényesek. Ezek általában olyan információkat tartalmaznak, mint a légi tér zárlatai, a katonai gyakorlatok és az átmeneti légi navigációs segédletek működési zavarai.<br><br>NOTAM-D: Az USA-beli katonai légi erők által kiadott értesítések, amelyek a repülőterek és a katonai légtér működésével kapcsolatos információkat tartalmaznak.<br><br>NOTAMN: Nemzeti fontosságú értesítések, amelyek a nemzetbiztonságra és a repülésbiztonságra vonatkozó fontos információkat tartalmazzák.<br><br>NOTAMR: Az átmeneti változásokkal, zárlatokkal vagy korlátozásokkal kapcsolatos értesítések, amelyek csak egy bizonyos időszakban érvényesek.<br><br>NOTAMC: A hosszú távú vagy állandó változásokkal kapcsolatos értesítések, amelyek hosszabb ideig érvényesek és általában az állandó repülőterek és légi navigációs segédletek működésével kapcsolatos információkat tartalmazzák.<br><br>SNOWTAM: A hóeltakarítással és síkosságmentesítéssel kapcsolatos értesítések, amelyek a téli időszakban fontosak lehetnek a repülőgépek biztonságos működése szempontjából.<br><br>ASHTAM: A vulkáni hamu elterjedésével kapcsolatos értesítések, amelyek akkor jelentek meg, amikor a vulkánkitörések vagy más geológiai események hatással lehetnek a repülés biztonságára.<br><br>Ezenkívül vannak egyéb speciális NOTAM-ok, amelyek egy adott ország vagy régió légiközlekedési hatóságai által adhatók ki a repülési biztonság és hatékonyság érdekében."
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Ha az útvonal-helyesbítést 2-szer akkora távolságra szeretnénk elvégezni, mint amekkora távolság alatt az oldaleltérés létrejött, akkor … vesszük a helyesbítés szögének.",
        "answers": [
            {
                "text": "az oldaleltérés szögének 2-szeresét",
                "correct": false
            },
            {
                "text": "az oldaleltérés szögét",
                "correct": false
            },
            {
                "text": "az oldaleltérés szögének 1/2-ét",
                "correct": true
            },
            {
                "text": "az oldaleltérés szögének 1/4-ét",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Az 1:500 000-es légiforgalmi térképen 8 cm hány tengeri mérföldnek felel meg?",
        "answers": [
            {
                "text": "14,8 NM",
                "correct": false
            },
            {
                "text": "22,6 NM",
                "correct": true
            },
            {
                "text": "40 NM",
                "correct": false
            },
            {
                "text": "74 NM",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Egy útvonalszakasz tényleges útirányszöge 050°. A deklináció értéke 4° és nyugati. A deviáció 1° keleti. Hány fok lesz az iránytűirányszög?",
        "answers": [
            {
                "text": "47°",
                "correct": false
            },
            {
                "text": "45 °",
                "correct": false
            },
            {
                "text": "55°",
                "correct": false
            },
            {
                "text": "53°",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A Merkátor vetület …",
        "answers": [
            {
                "text": "szögtartó hengervetület.",
                "correct": true
            },
            {
                "text": "szögtartó és távolságtartó hengervetület.",
                "correct": false
            },
            {
                "text": "szögtartó és távolságtartó kúpvetület.",
                "correct": false
            },
            {
                "text": "szögtartó kúpvetület.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A … köröket a kezdő meridiántól kiindulva … számozzuk keleti és nyugati irányban.",
        "answers": [
            {
                "text": "hosszúsági – 90°-ig",
                "correct": false
            },
            {
                "text": "szélességi – 180°-ig",
                "correct": false
            },
            {
                "text": "szélességi – 90°-ig",
                "correct": false
            },
            {
                "text": "hosszúsági – 180°-ig",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A Lambert-féle vetület …",
        "answers": [
            {
                "text": "szögtartó hengervetület.",
                "correct": false
            },
            {
                "text": "szögtartó és távolságtartó hengervetület.",
                "correct": false
            },
            {
                "text": "szögtartó kúpvetület.",
                "correct": true
            },
            {
                "text": "szögtartó és távolságtartó kúpvetület.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "A VOR-rendszer pontosságát befolyásolja a rádiódeviáció, a parti, a hegy- és az éjjeli hatás, valamint az időjárás.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Az RMI ADF mutatója 110° mágneses irányszöget mutat. A mágneses géptengelyirányszög 060°. Mennyi a QDR?",
        "answers": [
            {
                "text": "290°",
                "correct": true
            },
            {
                "text": "230°",
                "correct": false
            },
            {
                "text": "110°",
                "correct": false
            },
            {
                "text": "050°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "NAVIGÁCIÓ",
        "question": "Ökölszabályt alkalmazva NEL körülmények között 7500 láb magasságon 120 kt TAS sebesség mekkora CAS sebességnek felel meg?",
        "answers": [
            {
                "text": "104 kt",
                "correct": true
            },
            {
                "text": "138 kt",
                "correct": false
            },
            {
                "text": "98 kt",
                "correct": false
            },
            {
                "text": "116 kt",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Budapest FIR-ben ellenőrzött légtérben …",
        "answers": [
            {
                "text": "angol nyelven kell rádiókapcsolatot tartani.",
                "correct": false
            },
            {
                "text": "magyar nyelven kell rádiókapcsolatot tartani.",
                "correct": false
            },
            {
                "text": "elsősorban magyarul kell rádiókapcsolatot tartani, de az angol nyelv használata megengedett.",
                "correct": false
            },
            {
                "text": "elsősorban angol nyelven kell rádiókapcsolatot tartani, de a magyar nyelv használata megengedett.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "A földi és légi rádióállomások közti rádióforgalmazás …",
        "answers": [
            {
                "text": "kétoldalú rendszerben, duplex üzemben működik.",
                "correct": false
            },
            {
                "text": "egyoldalú rendszerben, duplex üzemben működik.",
                "correct": false
            },
            {
                "text": "kétoldalú rendszerben, szimplex üzemben működik.",
                "correct": true
            },
            {
                "text": "egyoldalú rendszerben, szimplex üzemben működik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Hogyan adjuk le a 5608 számot?",
        "answers": [
            {
                "text": "ÖTEZER-HATSZÁZNYOLC.",
                "correct": true
            },
            {
                "text": "ÖTÖSEZER-HATOSSZÁZNYOLCAS.",
                "correct": false
            },
            {
                "text": "ÖTEZER-HATOSSZÁZNYOLC.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Hogyan jelölik a nappal szolgálatot biztosító földi állomásokat?",
        "answers": [
            {
                "text": "HJ.",
                "correct": true
            },
            {
                "text": "HN.",
                "correct": false
            },
            {
                "text": "HX.",
                "correct": false
            },
            {
                "text": "HS.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Ellenőrzött légtérben útvonalon közlekedő repülőgépek számára milyen esetben nem kell helyzetjelentést adni?",
        "answers": [
            {
                "text": "Minden esetben kötelező helyzetjelentést adni.",
                "correct": false
            },
            {
                "text": "Soha nem kötelező helyzetjelentést adni.",
                "correct": false
            },
            {
                "text": "Ha az adott légtérben van radarszolgáltatás.",
                "correct": false
            },
            {
                "text": "Ha az irányító jelzi, hogy a radarazonosítás megtörtént.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mi a rövidítése az automatikus közelkörzeti tájékoztató szolgálatnak?",
        "answers": [
            {
                "text": "AFIS.",
                "correct": false
            },
            {
                "text": "ATIS.",
                "correct": true
            },
            {
                "text": "AFTN.",
                "correct": false
            },
            {
                "text": "AFIL.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Hogyan adjuk le a 4702 számot?",
        "answers": [
            {
                "text": "NÉGYEZER-HÉTSZÁZKETTES.",
                "correct": false
            },
            {
                "text": "NÉGYESEZER-HETESSZÁZKETTES.",
                "correct": false
            },
            {
                "text": "NÉGYESEZER-HETESSZÁZKETTŐ.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "A légiforgalmi rádióforgalmazásban magánjellegű beszélgetéseket …",
        "answers": [
            {
                "text": "tilos lefolytatni.",
                "correct": true
            },
            {
                "text": "nem ellenőrzött légtérben lefolytathatunk.",
                "correct": false
            },
            {
                "text": "ha vezetőállomás erre engedélyt ad, lefolytathatunk.",
                "correct": false
            },
            {
                "text": "ha a helyzet úgy kívánja röviden lefolytathatunk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mi a teendő, ha megszakad a rádiókapcsolat a CTR-ben a felszállás után?",
        "answers": [
            {
                "text": "A repülőgép-vezető hagyja el a CTR-t a lehető leggyorsabb módon.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető hagyja el a CTR-t a TWR által adott útvonalengedély szerint.",
                "correct": true
            },
            {
                "text": "A repülőgép-vezető a kijelölt várakozási légtérben várja meg a földi fényjeleket.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető a kijelölt várakozási légtérben várakozzon 5 percet, majd fényjelzések hiányában hagyja el a CTR-t a TWR által adott útvonalengedély szerint.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Milyen körülmények között rövidítheti hívójelét a repülőgép-vezető?",
        "answers": [
            {
                "text": "Csak nem ellenőrzött légtérben rövidíthet.",
                "correct": false
            },
            {
                "text": "Bármikor, mert így tömörebb a kommunikáció.",
                "correct": false
            },
            {
                "text": "Ha a vezetőállomás már rövidítette a hívójelet.",
                "correct": true
            },
            {
                "text": "Ha a rádiókapcsolatban lévő felek azonosítása már kétségtelenül megtörtént.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Az alábbiak közül mit nem kell visszaismételni?",
        "answers": [
            {
                "text": "A rádiófrekvenciákat.",
                "correct": false
            },
            {
                "text": "A magasságértékeket.",
                "correct": false
            },
            {
                "text": "A szélsebességet.",
                "correct": true
            },
            {
                "text": "A transzponderkódot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Egy adott rádiófrekvencián a tagállomások közötti közleményváltás …",
        "answers": [
            {
                "text": "nem ellenőrzött légtérben minden további nélkül lehetséges.",
                "correct": false
            },
            {
                "text": "minden további nélkül lehetséges.",
                "correct": false
            },
            {
                "text": "csak a vezetőállomás engedélyével lehetséges.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Rádiópróba esetén mit jelent az ÉRTHETŐSÉG 4-ES válaszközlemény?",
        "answers": [
            {
                "text": "Az adás szakadozottan érthető.",
                "correct": false
            },
            {
                "text": "Az adás érthető.",
                "correct": true
            },
            {
                "text": "Az adás nehezen érthető.",
                "correct": false
            },
            {
                "text": "Az adás tökéletesen érthető.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mit jelent a SQUAWK IDENT kifejezés?",
        "answers": [
            {
                "text": "A repülőgép-vezető állítsa át transzponderkódját.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető adja meg a lajstromjelét.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető nyomja meg az azonosító gombot a transzponderen.",
                "correct": true
            },
            {
                "text": "A repülőgép-vezető adja meg a transzponderkódját.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Ha a repülőgép valamely utasánál pl. szívroham gyanúja lép fel, akkor …",
        "answers": [
            {
                "text": "sürgősségi közleményt kell leadni a PAN PAN kifejezés háromszori ismétlésével kezdve, és a transzpondert nem kell átállítani, mert a sürgősségi helyzetnek nincs védett kódja.",
                "correct": true
            },
            {
                "text": "kényszerhelyzeti közleményt kell leadni a MAYDAY kifejezés háromszori ismétlésével kezdve, és a transzponderen a 7700-as kódot kell beállítani.",
                "correct": false
            },
            {
                "text": "kényszerhelyzeti közleményt kell leadni a PAN PAN kifejezés háromszori ismétlésével kezdve, és a transzponderen a 7500-as kódot kell beállítani",
                "correct": false
            },
            {
                "text": "sürgősségi közleményt kell leadni a MAYDAY kifejezés háromszori ismétlésével kezdve, és a transzponderen a 7700-as kódot kell beállítani.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mi a teendő, ha megszakad a rádiókapcsolat a CTR-ben a megközelítés során?",
        "answers": [
            {
                "text": "A repülőgép-vezető közeledjen az engedély szerint, és ha nem kapott leszállási engedélyt, a kijelölt várakozási légtérben várakozzon 5 percet és hajtsa végre a leszállást a használatos futópályára. Eközben figyelje az esetleges földi fény-jeleket.",
                "correct": true
            },
            {
                "text": "A repülőgép-vezető figyelje a földi fényjeleket, és aszerint járjon el.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető hagyja el a CTR-t a lehető leggyorsabb módon.",
                "correct": false
            },
            {
                "text": "A repülőgép-vezető közeledjen az engedély szerint, és ha nem kapott leszállási engedélyt, a kijelölt várakozási légtérben várakozzon és figyelje a földi fényjeleket.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Hogyan kell rövidítetni a HA-TUO hívójelet?",
        "answers": [
            {
                "text": "HOTEL-ALFA-TANGO-UNIFORM",
                "correct": false
            },
            {
                "text": "UNIFORM-OSCAR",
                "correct": false
            },
            {
                "text": "HOTEL-TANGO-UNIFORM",
                "correct": false
            },
            {
                "text": "HOTEL-UNIFORM-OSCAR",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Milyen kifejezés háromszori ismétlése előzi meg a kényszerhelyzeti közleményt?",
        "answers": [
            {
                "text": "BREAK BREAK.",
                "correct": false
            },
            {
                "text": "PAN PAN.",
                "correct": false
            },
            {
                "text": "MAYDAY.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Helyes beszédtechnikát alkalmazva …",
        "answers": [
            {
                "text": "beszédünk legyen erőteljes és gyors, hogy minél rövidebb ideig foglaljuk a csatornát.",
                "correct": false
            },
            {
                "text": "határozott és lassú a minél jobb érthetőség céljából.",
                "correct": false
            },
            {
                "text": "beszédünk hangerejét tartsuk állandó szinten, üteme egyenletes legyen, és legyen jól tagolt.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Hogyan kell betűzni a HA-EJF lajstromjelet?",
        "answers": [
            {
                "text": "HOTEL-APPLE-EASY-JOHNNY-FOX.",
                "correct": false
            },
            {
                "text": "HOTEL-ALPHA-ECHO-JULIETT-FOXTROT.",
                "correct": true
            },
            {
                "text": "HOTEL-ACE-ECHO-JOHNNY-FREDDIE.",
                "correct": false
            },
            {
                "text": "HOTEL-ALPHA-EASY-JULIETT-FOX.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mik a nemzetközi kényszerhelyzeti frekvenciák?",
        "answers": [
            {
                "text": "121,5 MHz és 243 MHz.",
                "correct": true
            },
            {
                "text": "136,00 MHz és 272 MHz.",
                "correct": false
            },
            {
                "text": "118,00 MHz és 236 MHz.",
                "correct": false
            },
            {
                "text": "125,1 MHz és 250,2 MHz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mit jelez a BREAK BREAK kifejezés?",
        "answers": [
            {
                "text": "Sürgősségi közlemény kezdetét.",
                "correct": false
            },
            {
                "text": "Két különböző állomás számára küldött üzenet közötti gyors elkülönítést.",
                "correct": true
            },
            {
                "text": "Nyugtázást.",
                "correct": false
            },
            {
                "text": "Kényszerhelyzeti közlemény kezdetét.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Mi az első teendő, ha megszakad a rádiókapcsolat?",
        "answers": [
            {
                "text": "Ki kell választani a legalkalmasabb repülőteret a leszállásra.",
                "correct": false
            },
            {
                "text": "Vak adással közölni kell a rádióhibát.",
                "correct": false
            },
            {
                "text": "Ellenőrizni kell a rádiót és meggyőződni arról, hogy valóban meghibásodott-e.",
                "correct": true
            },
            {
                "text": "Azonnal be kell állítani a 7600-as kódot a transzponderen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "RÁDIÓKOMMUNIKÁCIÓ",
        "question": "Hogyan kell végrehajtani a vak adást?",
        "answers": [
            {
                "text": "Az ÁLTALÁNOS HÍVÁS kifejezés használatával.",
                "correct": false
            },
            {
                "text": "A MINDEN ÁLLOMÁSNAK kifejezés használatával.",
                "correct": false
            },
            {
                "text": "A VAK ADÁS kifejezés használatával kétszer egymás után.",
                "correct": true
            },
            {
                "text": "PAN PAN közlemény háromszori ismétlésével kezdve.",
                "correct": false
            }
        ],
        "hint": ""
    },
/*Repüléselmélet.docx.*/
    {
        "subject": "MECHANIKA",
        "question": "Melyik egyenlőség igaz?",
        "answers": [
            {
                "text": "t ∙ s = v",
                "correct": false
            },
            {
                "text": "t = s / v",
                "correct": true
            },
            {
                "text": "s ∙ v = t",
                "correct": false
            },
            {
                "text": "s = v / t",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik képlet helyes (X légellenállás)?",
        "answers": [
            {
                "text": "X = Cx · ρ · v2 · A / 2",
                "correct": true
            },
            {
                "text": "X = Cx + ρv2 + A / 2",
                "correct": false
            },
            {
                "text": "X = Cx + ρv2 + A · 2",
                "correct": false
            },
            {
                "text": "X = Cx · ρ · v2 · A · 2",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A magasság növekedésével (állandó állásszögön) a repülőgép Y/X hányadosa …",
        "answers": [
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": true
            },
            {
                "text": "nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép képes lehet azonos emelkedési szöggel emelkedni két különböző sebességen is.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az össznyomás …",
        "answers": [
            {
                "text": "a statikus nyomás és a dinamikus nyomás összege.",
                "correct": true
            },
            {
                "text": "a statikus nyomás és a dinamikus nyomás különbsége.",
                "correct": false
            },
            {
                "text": "a statikus nyomás és a dinamikus nyomás szorzata.",
                "correct": false
            },
            {
                "text": "a statikus nyomás és a dinamikus nyomás hányadosa.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik képlet helyes (Y felhajtóerő)?",
        "answers": [
            {
                "text": "Y = Cy + ρv2 + A · 2",
                "correct": false
            },
            {
                "text": "Y = Cy · ½ · ρ · v2 · A",
                "correct": true
            },
            {
                "text": "Y = Cy + ρv2 + A / 2",
                "correct": false
            },
            {
                "text": "Y = Cy · ½ · ρ · v2 · 2A",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy megfelelő stabilitással rendelkező repülőgép súlypontja …",
        "answers": [
            {
                "text": "a semleges pont és a hátsó határhelyzet között van.",
                "correct": false
            },
            {
                "text": "a semleges pontban van.",
                "correct": false
            },
            {
                "text": "a semleges pont és a mellső határhelyzet között van.",
                "correct": true
            },
            {
                "text": "a mellső határhelyzet előtt van.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárnyvég felhajtásának célja …",
        "answers": [
            {
                "text": "a szárnykarcsúság növelése.",
                "correct": false
            },
            {
                "text": "az elliptikus felhajtóerő-eloszlás biztosítása.",
                "correct": false
            },
            {
                "text": "a keresztstabilitás növelése.",
                "correct": false
            },
            {
                "text": "az indukált ellenállás csökkentése.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A merev légcsavar profiljának állásszöge nő, ha …",
        "answers": [
            {
                "text": "a sebesség nő és a fordulatszám változatlan.",
                "correct": false
            },
            {
                "text": "a sebesség csökken és a fordulatszám változatlan.",
                "correct": true
            },
            {
                "text": "a sebesség változatlan és a fordulatszám csökken.",
                "correct": false
            },
            {
                "text": "A merev légcsavar profiljának állásszöge független a sebességtől és a fordulatszámtól.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A határréteg …",
        "answers": [
            {
                "text": "keletkezése a szárny alsó és felső oldala között fellépő nyomáskülönbség és -kiegyenlítődés eredménye.",
                "correct": false
            },
            {
                "text": "kialakulása turbulens áramlás következménye.",
                "correct": false
            },
            {
                "text": "a szárny mögötti leterelés miatt jön létre.",
                "correct": false
            },
            {
                "text": "olyan közegréteg, hol az egyes rétegek sebessége a közeg súrlódása következtében eltér a szabad áramlás sebességétől.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Faroknehéz nyomaték kitrimelése során …",
        "answers": [
            {
                "text": "a trimlap lefelé, a magassági kormánylap felfelé tér ki.",
                "correct": false
            },
            {
                "text": "a trimlap felfelé, a magassági kormánylap lefelé tér ki.",
                "correct": true
            },
            {
                "text": "a trimlap és a magassági kormánylap lefelé tér ki.",
                "correct": false
            },
            {
                "text": "a trimlap és a magassági kormánylap felfelé tér ki.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az átesés pillanatában …",
        "answers": [
            {
                "text": "a felhajtóerő és az ellenállás nő.",
                "correct": false
            },
            {
                "text": "a felhajtóerő csökken és az ellenállás nő.",
                "correct": true
            },
            {
                "text": "a felhajtóerő és az ellenállás csökken.",
                "correct": false
            },
            {
                "text": "a felhajtóerő nő és az ellenállás csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Merev légcsavar esetén a lapelemek állásszöge meghaladhatja a kritikus állászöget …",
        "answers": [
            {
                "text": "alacsony sebesség és nagy fordulatszám esetén.",
                "correct": true
            },
            {
                "text": "nagy sebesség és alacsony fordulatszám esetén.",
                "correct": false
            },
            {
                "text": "A lapelemek soha nem léphetik át a kritikus állásszöget.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A kabinból nézve jobbra forgó légcsavar esetén az állásszög csökkentésekor a precesszió hatására a repülőgép függőleges tengelye körül is elfordul …",
        "answers": [
            {
                "text": "jobbra.",
                "correct": false
            },
            {
                "text": "balra.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A felhajtóerő merőleges, a légellenállás pedig párhuzamos ….",
        "answers": [
            {
                "text": "a null felhajtóerő-tényező irányhoz képest.",
                "correct": false
            },
            {
                "text": "a profil húrjához képest.",
                "correct": false
            },
            {
                "text": "az áramló levegő irányához képest.",
                "correct": true
            },
            {
                "text": "a vízszinteshez képest.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Normál repülési helyzetekben az állásszög növekedésével a profilon keletkező nyomásközéppont ….",
        "answers": [
            {
                "text": "előre vándorol.",
                "correct": true
            },
            {
                "text": "hátra vándorol.",
                "correct": false
            },
            {
                "text": "nem mozdul el.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A légnyomás a levegő súlyából származik és a térben minden tetszőleges irányú felületre merőlegesen hat.",
                "correct": true
            },
            {
                "text": "A légnyomás a levegő súlyából származik és függőlegesen lefelé hat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A fékszárny kitérítésekor növekszik a maximális felhajtóerő-tényező, mert a szárny (profil) …",
        "answers": [
            {
                "text": "légellenállása nő.",
                "correct": false
            },
            {
                "text": "íveltsége nő.",
                "correct": true
            },
            {
                "text": "íveltsége csökken.",
                "correct": false
            },
            {
                "text": "állásszöge csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A folytonosság törvénye szerint az össznyomás a statikus és a dinamikus nyomás összegével egyenlő.",
                "correct": false
            },
            {
                "text": "A folytonosság törvénye azt mondja ki, hogy az áramcsőben állandósult áramlás van.",
                "correct": false
            },
            {
                "text": "A folytonosság törvénye szerint a statikus és a dinamikus nyomás összege az áramlás bármely pontjában állandó.",
                "correct": false
            },
            {
                "text": "A folytonosság törvénye szerint az áramlás sebessége fordítottan arányos az áramcső keresztmetszetének felületével.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Az m · v2 / 2 nem más, mint a test…",
        "answers": [
            {
                "text": "helyzeti energiája.",
                "correct": false
            },
            {
                "text": "mozgási energiája.",
                "correct": true
            },
            {
                "text": "helyzeti és mozgási energiájának összege.",
                "correct": false
            },
            {
                "text": "gyorsulása.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Az alaki ellenállás a profilellenállás és a súrlódási ellenállás összege.",
                "correct": false
            },
            {
                "text": "Egy test súrlódási ellenállását alaki ellenállásnak nevezzük.",
                "correct": false
            },
            {
                "text": "Egy test profilellenállását más néven nyomásellenállásnak nevezzük.",
                "correct": false
            },
            {
                "text": "A profilellenállás a nyomásellenállás és a súrlódási ellenállás összege.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Fékszárny használatakor …",
        "answers": [
            {
                "text": "a kritikus állásszög és a felhajtóerő-tényező nő.",
                "correct": false
            },
            {
                "text": "a kritikus állásszög és a felhajtóerő-tényező csökken.",
                "correct": false
            },
            {
                "text": "a kritikus állásszög nő és a felhajtóerő-tényező csökken.",
                "correct": false
            },
            {
                "text": "a kritikus állásszög csökken és a felhajtóerő-tényező nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A felhajtóerő-tényező …",
        "answers": [
            {
                "text": "a sebességgel négyzetes arányban nő.",
                "correct": false
            },
            {
                "text": "a kritikus állásszögön éri el minimumát.",
                "correct": false
            },
            {
                "text": "az állásszög növekedésével folyamatosan nő.",
                "correct": false
            },
            {
                "text": "szimmetrikus szelvényeknél 0° állásszögön zérus.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egyenes vonalú vízszintes repülésben a repülőgép összellenálása akkor (azon a sebességen) a legalacsonyabb, amikor …",
        "answers": [
            {
                "text": "az indukált ellenállás kétszer nagyobb a káros ellenállásnál.",
                "correct": false
            },
            {
                "text": "a káros ellenállás és az indukált ellenállás egyenlő.",
                "correct": true
            },
            {
                "text": "az indukált ellenállás minimális.",
                "correct": false
            },
            {
                "text": "a káros ellenállás minimális.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A centrifugális erő iránya a centripetális erővel megegyező.",
                "correct": false
            },
            {
                "text": "A centrifugális erő a forgási középpont felé mutat.",
                "correct": false
            },
            {
                "text": "A centrifugális erő iránya a centripetális erővel ellentétes.",
                "correct": true
            },
            {
                "text": "A centrifugális erő iránya a centripetális ellenerővel ellentétes.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "1 m/s = 3,6 km/h",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A legnagyobb motor fordulatszám esetén mikor legnagyobb a légcsavar vonóerő?",
        "answers": [
            {
                "text": "A repülőgép álló helyzetében.",
                "correct": true
            },
            {
                "text": "A legnagyobb elérhető vízszintes sebességen.",
                "correct": false
            },
            {
                "text": "Azon a sebességen, ahol a légcsavar hatásfoka a legjobb.",
                "correct": false
            },
            {
                "text": "Vopt sebesség esetén.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Newton III. törvényét …",
        "answers": [
            {
                "text": "a dinamika alaptételének nevezzük.",
                "correct": false
            },
            {
                "text": "a kölcsönhatás törvényének nevezzük.",
                "correct": true
            },
            {
                "text": "a tehetetlenség törvényének nevezzük.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha túl nagy a iránystabilitás az keresztstabilitáshoz viszonyítva, …",
        "answers": [
            {
                "text": "a repülőgép valamely kis zavarás hatására megdőlve süllyedni kezd, miközben a dőlési szög és a sebesség egyre nő, valamint a repülőgép hossztengelye egyre inkább a föld felé hajlik. Az ilyen mozgást holland orsónak nevezik.",
                "correct": false
            },
            {
                "text": "a repülőgép egyik irányú dőlése, majd megcsúszása után a másik irányba való dőlés és megcsúszás következik be egyre növekvő amplitúdóval. Az ilyen mozgást zuhanóspirálnak nevezik.",
                "correct": false
            },
            {
                "text": "a repülőgép valamely kis zavarás hatására megdőlve süllyedni kezd, miközben a dőlési szög és a sebesség egyre nő, valamint a repülőgép hossztengelye egyre inkább a föld felé hajlik. Az ilyen mozgást zuhanóspirálnak nevezik.",
                "correct": true
            },
            {
                "text": "a repülőgép egyik irányú dőlése, majd megcsúszása után a másik irányba való dőlés és megcsúszás következik be egyre növekvő amplitúdóval. Az ilyen mozgást holland orsónak nevezik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A hosszstabilitás a repülőgép kereszttengelye körüli stabilitása, melyet a vízszintes farokfelület hoz létre.",
                "correct": true
            },
            {
                "text": "Az iránystabilitás a repülőgép függőleges tengelye körüli stabilitása, melyet a szárny beállítási szöge hoz létre.",
                "correct": false
            },
            {
                "text": "A repülőgép hossztengelye körüli keresztstabilitását a szárny nyilazása hozza létre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A merev légcsavar profiljának állásszöge csökken, ha …",
        "answers": [
            {
                "text": "a sebesség nő és a fordulatszám változatlan.",
                "correct": true
            },
            {
                "text": "a sebesség változatlan és a fordulatszám nő.",
                "correct": false
            },
            {
                "text": "a sebesség csökken és a fordulatszám változatlan.",
                "correct": false
            },
            {
                "text": "A merev légcsavar profiljának állásszöge független a sebességtől és a fordulatszámtól.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A folytonossági törvény alapján, ha egy áramcső keresztmetszete nő, akkor az áramló közeg sebessége …",
        "answers": [
            {
                "text": "nő.",
                "correct": false
            },
            {
                "text": "csökken.",
                "correct": true
            },
            {
                "text": "Az áramcső keresztmetszete és az áramló közeg sebessége között nem a folytonossági törvény, hanem Bernoulli törvénye teremt kapcsolatot.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha az emelkedés w függőleges sebességét szeretnénk maximalizálni, akkor …",
        "answers": [
            {
                "text": "Vx sebességet választjuk.",
                "correct": false
            },
            {
                "text": "Vy sebességet választjuk.",
                "correct": true
            },
            {
                "text": "Vgazd sebességet választjuk.",
                "correct": false
            },
            {
                "text": "Vopt sebességet választjuk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "Az alábbiak közül a homoszférában melyik gáz van jelen a legkisebb térfogatszázalékban?",
        "answers": [
            {
                "text": "Oxigén.",
                "correct": false
            },
            {
                "text": "Argon.",
                "correct": false
            },
            {
                "text": "Neon.",
                "correct": true
            },
            {
                "text": "Nitrogén.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A káros ellenállás …",
        "answers": [
            {
                "text": "négyzetesen nő a sebességgel.",
                "correct": true
            },
            {
                "text": "lineárisan nő a sebességgel.",
                "correct": false
            },
            {
                "text": "lineárisan csökken a sebességgel.",
                "correct": false
            },
            {
                "text": "négyzetesen csökken a sebességgel.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az indukált állásszög … nyer értelmet, és … következménye.",
        "answers": [
            {
                "text": "kétdimenziós áramlásban – a határréteg visszaáramlásának",
                "correct": false
            },
            {
                "text": "véges terjedtségű szárny esetén – a szárny mögötti leterelés",
                "correct": true
            },
            {
                "text": "kétdimenziós áramlásban – nagy állásszögű megfúvás",
                "correct": false
            },
            {
                "text": "véges terjedtségű szárny esetén – az áramlás leválásának",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A légcsavarszárny profiljának állásszöge a profil húrja és a légcsavar forgássíkja közötti szög.",
                "correct": false
            },
            {
                "text": "A légcsavar fordulatszámát, és ezzel a légcsavarszárnyvég maximális sebességét azért kell korlátozni, hogy a légcsavarszárnyprofil átesését elkerüljük.",
                "correct": false
            },
            {
                "text": "A légcsavar beállítási szöge a légcsavarszárny profiljának húrja és a légcsavar tengelye közötti szög.",
                "correct": false
            },
            {
                "text": "A légcsavar mértani emelkedése az az elméleti távolság, melyet a levegőben a légcsavar egy fordulat alatt a haladási irányban megtenne (ha a levegőben mint szilárd testben mozogna).",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik mértékegység alkalmas a felületi terhelés kifejezésére?",
        "answers": [
            {
                "text": "N · m3",
                "correct": false
            },
            {
                "text": "kg · m/s2",
                "correct": false
            },
            {
                "text": "N · m2",
                "correct": true
            },
            {
                "text": "N · m",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Az energiamegmaradás törvénye kimondja, hogy …",
        "answers": [
            {
                "text": "a mozgás folyamán a helyzeti és mozgási energia összege állandó.",
                "correct": true
            },
            {
                "text": "a mozgás folyamán a helyzeti és mozgási energia szorzata állandó.",
                "correct": false
            },
            {
                "text": "minden test megtartja nyugalmi állapotát vagy egyenes vonalú, egyenletes mozgását, amíg egy külső erő mozgási állapotának megváltoztatására nem kényszeríti.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Minél nagyobb fékszárny-kitérítést használunk felszállásnál, annál rövidebb lesz a felszállási úthossz.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgép egy állásszögnövelő széllökés után a repülőgép-vezető beavatkozása nélkül egyensúlyi helyzete körül csökkenő amplitúdóval egyre kisebb lengéseket folytat, akkor a repülőgép stabilitása …",
        "answers": [
            {
                "text": "statikusan közömbös és dinamikusan stabil.",
                "correct": false
            },
            {
                "text": "statikusan és dinamikusan stabil.",
                "correct": true
            },
            {
                "text": "statikusan stabil és dinamikusan instabil.",
                "correct": false
            },
            {
                "text": "statikusan instabil és dinamikusan stabil.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A homoszférában a levegő összetétele a következő: …",
        "answers": [
            {
                "text": "nitrogén 78 térfogat %, oxigén 21 térfogat %, argon 0,1 térfogat %, egyéb gázok 0,9 térfogat%.",
                "correct": false
            },
            {
                "text": "nitrogén 0,9 térfogat %, oxigén 78 térfogat %, argon 21 térfogat %, egyéb gázok 0,1 térfogat%.",
                "correct": false
            },
            {
                "text": "oxigén 78 térfogat %, nitrogén 21 térfogat %, argon 0,9 térfogat %, egyéb gázok 0,1 térfogat%.",
                "correct": false
            },
            {
                "text": "nitrogén 78 térfogat %, oxigén 21 térfogat %, argon 0,9 térfogat %, egyéb gázok 0,1 térfogat%.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Azt a mozgást, amikor a repülőgép egyik irányú dőlése, majd megcsúszása után a másik irányba való dőlés és megcsúszás következik be, mindez periodikusan ismétlődve akár egyre növekvő amplitúdóval …",
        "answers": [
            {
                "text": "holland orsónak nevezik.",
                "correct": true
            },
            {
                "text": "zuhanóspirálnak nevezik.",
                "correct": false
            },
            {
                "text": "dugóhúzónak nevezik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha azt tapasztaljuk, hogy egy repülőgép kormányérzékenysége megnőtt, kormányereje csökkent és kisebb kormánymozdulatokkal is ve-zethető, akkor …",
        "answers": [
            {
                "text": "mellső súlyponthelyzetre következtethetünk.",
                "correct": false
            },
            {
                "text": "instabilitásra következtethetünk.",
                "correct": false
            },
            {
                "text": "semleges stabilitásra következtethetünk.",
                "correct": false
            },
            {
                "text": "hátsó súlyponthelyzetre következtethetünk.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Bernoulli törvénye szerint ahol az áramló közeg sebessége nő, ott a dinamikus nyomás csökken; valamint, ahol az áramlás sebes-sége csökken, ott a dinamikus nyomás nő.",
                "correct": false
            },
            {
                "text": "Bernoulli törvénye szerint az össznyomás a statikus és a dinamikus nyomás szorzata.",
                "correct": false
            },
            {
                "text": "Bernoulli törvénye szerint a statikus és a dinamikus nyomás összege az áramlás bármely pontjában állandó.",
                "correct": true
            },
            {
                "text": "Bernoulli törvénye szerint szűkebb keresztmetszetű áramcsőben az áramlás sebessége felgyorsul, tágabb keresztmetszeten lelas-sul.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárny v-állása …",
        "answers": [
            {
                "text": "az interferencia ellenállást csökkenti.",
                "correct": false
            },
            {
                "text": "a repülőgép hosszstabilitását hozza létre.",
                "correct": false
            },
            {
                "text": "a repülőgép iránystabilitását hozza létre.",
                "correct": false
            },
            {
                "text": "a repülőgép keresztstabilitását hozza létre.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgépet vízszintes repülésben egy adott állásszögre kitrimeltük és ehhez a trimhelyzethez képest nagyobb sebességgel szeretnénk repülni, akkor …",
        "answers": [
            {
                "text": "a magassági kormány nyomása szükséges a hossznyomatéki egyensúly létrehozásához.",
                "correct": true
            },
            {
                "text": "a magassági kormány húzása szükséges a hossznyomatéki egyensúly létrehozásához.",
                "correct": false
            },
            {
                "text": "nem szükséges kormány kitérítés a hossznyomatéki egyensúly létrehozásához.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Bernoulli törvénye alapján melyik állítás helyes?",
        "answers": [
            {
                "text": "Az össznyomás nő, ha a dinamikus nyomás nő.",
                "correct": false
            },
            {
                "text": "Az össznyomás csökken, ha a statikus nyomás csökken.",
                "correct": false
            },
            {
                "text": "Ha a statikus nyomás csökken, akkor a dinamikus nyomás is csökken.",
                "correct": false
            },
            {
                "text": "Ha a statikus nyomás csökken, akkor a dinamikus nyomás nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha az emelkedés szögét szeretnénk maximalizálni, akkor …",
        "answers": [
            {
                "text": "Vy sebességet választjuk.",
                "correct": false
            },
            {
                "text": "Vx sebességet választjuk.",
                "correct": true
            },
            {
                "text": "Vopt sebességet választjuk.",
                "correct": false
            },
            {
                "text": "Vgazd sebességet választjuk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Hogyan nevezzük az összellenállásnak azt az összetevőjét, mely a repülőgép különböző részeinek kedvezőtlen egymásra hatásakor ke-letkezik?",
        "answers": [
            {
                "text": "Káros ellenállás.",
                "correct": false
            },
            {
                "text": "Indukált ellenállás.",
                "correct": false
            },
            {
                "text": "Interferencia ellenállás.",
                "correct": true
            },
            {
                "text": "Súrlódási ellenállás.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép átesési sebességétől a maximális vízszintes sebességéig nézve egyre növekvő sebességgel (egyenes vonalú vízszintes repülésben) a repülőgép összellenállása …",
        "answers": [
            {
                "text": "kezdetben csökken, majd a Vopt opitmális sebesség elérése után folyamatosan nő.",
                "correct": true
            },
            {
                "text": "kezdetben nő, majd a Vopt optimális sebesség elérése után folyamatosan csökken.",
                "correct": false
            },
            {
                "text": "folyamatosan csökken.",
                "correct": false
            },
            {
                "text": "folyamatosan nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A felhajtóerő keletkezéskor …",
        "answers": [
            {
                "text": "a szárny felett az össznyomás nő, míg a szárny alatt a össznyomás csökken.",
                "correct": false
            },
            {
                "text": "a szárny felett az össznyomás csökken, míg a szárny alatt a össznyomás nő.",
                "correct": false
            },
            {
                "text": "a szárny felett a statikus nyomás nő, míg a szárny alatt a statikus nyomás csökken.",
                "correct": false
            },
            {
                "text": "a szárny felett a statikus nyomás csökken, míg a szárny alatt a statikus nyomás nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Az alábbiak közül melyik mértékegység használatos munka kifejezésére?",
        "answers": [
            {
                "text": "J · s",
                "correct": false
            },
            {
                "text": "W/s",
                "correct": false
            },
            {
                "text": "W · s",
                "correct": true
            },
            {
                "text": "W",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A sűrűség egységnyi térfogatú közeg súlya.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A homoszférában melyik gáz van jelen a legnagyobb térfogatszázalékban?",
        "answers": [
            {
                "text": "Nitrogén.",
                "correct": true
            },
            {
                "text": "Szén-dioxid.",
                "correct": false
            },
            {
                "text": "Oxigén.",
                "correct": false
            },
            {
                "text": "Hélium.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egyenes vonalú, egyenletes sebességű, vízszintes repülésben …",
        "answers": [
            {
                "text": "az eredő légerővel a súlyerő tart egyensúlyt.",
                "correct": false
            },
            {
                "text": "nagy állásszög esetén a vonóerő is támogatja a felhajtóerőt.",
                "correct": true
            },
            {
                "text": "a vonóerő nagyobb mint a felhajtóerő.",
                "correct": false
            },
            {
                "text": "y-irányú erőknek tekintjük a levegő relatív áramlásának irányával párhuzamosan keletkező erőket.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Orrsegédszárny használatakor …",
        "answers": [
            {
                "text": "kisebb állásszögön esik át a repülőgép és az átesési sebesség alacsonyabb lesz.",
                "correct": false
            },
            {
                "text": "kisebb állásszögön esik át a repülőgép és az átesési sebesség magasabb lesz.",
                "correct": false
            },
            {
                "text": "nagyobb állásszögön esik át a repülőgép és az átesési sebesség alacsonyabb lesz.",
                "correct": true
            },
            {
                "text": "nagyobb állásszögön esik át a repülőgép és az átesési sebesség magasabb lesz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a súlypont a semleges pont mögött van, és a repülőgépet egy zavaró hatás hossznyomatéki egyensúlyából kimozdítja, akkor …",
        "answers": [
            {
                "text": "egyensúlyi helyzete körül csökkenő amplitúdóval és lengésidővel lengő mozgásba kezd.",
                "correct": false
            },
            {
                "text": "repülőgép stabilizáló nyomatéka nagyobb lesz, mint az instabilizáló nyomatéka.",
                "correct": false
            },
            {
                "text": "repülőgép stabilizáló nyomatéka kisebb lesz, mint az instabilizáló nyomatéka.",
                "correct": true
            },
            {
                "text": "egyensúlyi helyzete körül közel állandó amplitúdóval és lengésidővel lengő mozgásba kezd.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az indukált ellenállás-tényező …",
        "answers": [
            {
                "text": "a felhajtóerő-tényezővel egyenesen arányos.",
                "correct": false
            },
            {
                "text": "független a felhajtóerő-tényező alakulásától.",
                "correct": false
            },
            {
                "text": "a felhajtóerő-tényezővel négyzetesen arányos.",
                "correct": true
            },
            {
                "text": "a felhajtóerő-tényező négyzetgyökével egyenesen arányos.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Azt a pörgettyűt, amely a fő tengelyén kívül még két kisegítő tengely körül képes elfordulásra, két szabadságfokú pörgettyűnek nevezzük.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A nagy íveltségű szárnyszelvény …",
        "answers": [
            {
                "text": "szimmetrikus profilú.",
                "correct": false
            },
            {
                "text": "főleg farokfelületeknél kerül felhasználásra.",
                "correct": false
            },
            {
                "text": "nagy légellenállást termel.",
                "correct": true
            },
            {
                "text": "nagy felhajtóerő-termelő képességű, ezért főleg nagy sebességű repülőgépeken kerül felhasználásra.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy repülőgép Y/X hányadosa 12, mekkora föld feletti távolságot képes megtenni álló motorral történő siklásban 3000 láb magasságról (szélcsendben és a NEL szerinti körülmények között)?",
        "answers": [
            {
                "text": "Kb. 11km-t.",
                "correct": true
            },
            {
                "text": "Kb. 10km-t.",
                "correct": false
            },
            {
                "text": "Kb. 9km-t.",
                "correct": false
            },
            {
                "text": "Kb. 6km-t.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az a szárnyprofil, melyen 0 állásszögön nem keletkezik felhajtóerő …",
        "answers": [
            {
                "text": "kis íveltségű.",
                "correct": false
            },
            {
                "text": "aszimmetrikus.",
                "correct": false
            },
            {
                "text": "nagy íveltségű.",
                "correct": false
            },
            {
                "text": "szimmetrikus.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Egy test munkavégző képessége …",
        "answers": [
            {
                "text": "egyenesen arányos a test sebességével.",
                "correct": false
            },
            {
                "text": "fordítottan arányos a test sebességével.",
                "correct": false
            },
            {
                "text": "négyzetesen arányos a test sebességével.",
                "correct": true
            },
            {
                "text": "fordítottan arányos a test tömegével.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárnyszelvény viszonylagos vastagságát …",
        "answers": [
            {
                "text": "más néven íveltségnek nevezzük.",
                "correct": false
            },
            {
                "text": "méterben adják meg.",
                "correct": false
            },
            {
                "text": "a húrhossz %-ában adják meg.",
                "correct": true
            },
            {
                "text": "a profil vastagságához viszonyítva adják meg.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Mi a leghatékonyabb állásszöghöz tartozó sebesség?",
        "answers": [
            {
                "text": "Vutazó",
                "correct": false
            },
            {
                "text": "Vmax",
                "correct": false
            },
            {
                "text": "Vopt",
                "correct": true
            },
            {
                "text": "Vgazd",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha túl nagy a keresztstabilitás az iránystabilitáshoz viszonyítva, …",
        "answers": [
            {
                "text": "a repülőgép egyik irányú dőlése, majd megcsúszása után a másik irányba való dőlés és megcsúszás következik be egyre növekvő amplitúdóval. Az ilyen mozgást holland orsónak nevezik.",
                "correct": true
            },
            {
                "text": "a repülőgép egyik irányú dőlése, majd megcsúszása után a másik irányba való dőlés és megcsúszás következik be egyre növekvő amplitúdóval. Az ilyen mozgást zuhanóspirálnak nevezik.",
                "correct": false
            },
            {
                "text": "a repülőgép valamely kis zavarás hatására megdőlve süllyedni kezd, miközben a dőlési szög és a sebesség egyre nő, valamint a repülőgép hossztengelye egyre inkább a föld felé hajlik. Az ilyen mozgást holland orsónak nevezik.",
                "correct": false
            },
            {
                "text": "a repülőgép valamely kis zavarás hatására megdőlve süllyedni kezd, miközben a dőlési szög és a sebesség egyre nő, valamint a repülőgép hossztengelye egyre inkább a föld felé hajlik. Az ilyen mozgást zuhanóspirálnak nevezik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "Jó közelítéssel a sűrűség 1%-os változását …",
        "answers": [
            {
                "text": "10°C hőmérséklet- vagy 2 hPa légnyomásváltozás okozza.",
                "correct": false
            },
            {
                "text": "2°C hőmérséklet- vagy 10 hPa légnyomásváltozás okozza.",
                "correct": true
            },
            {
                "text": "5°C hőmérséklet- vagy 1 hPa légnyomásváltozás okozza.",
                "correct": false
            },
            {
                "text": "1°C hőmérséklet- vagy 5 hPa légnyomásváltozás okozza.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az indukált ellenállás …",
        "answers": [
            {
                "text": "lineárisan csökken a sebességgel.",
                "correct": false
            },
            {
                "text": "négyzetesen nő a sebességgel.",
                "correct": false
            },
            {
                "text": "lineárisan nő a sebességgel.",
                "correct": false
            },
            {
                "text": "négyzetesen csökken a sebességgel.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Jó közelítéssel feltételezhetjük, hogy a repülőgép ellenállása egyenlőnek vehető a szárnyon keletkező ellenállással.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Minden mást változatlanul hagyva egy repülőgép felületi terhelésének növeléskor az átesési sebesség …",
        "answers": [
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A polárdiagram … között teremt kapcsolatot.",
        "answers": [
            {
                "text": "a felhajtóerő-tényező és az állásszög",
                "correct": false
            },
            {
                "text": "a felhajtóerő-tényező és az ellenállás-tényező",
                "correct": true
            },
            {
                "text": "az ellenállás-tényező és az állásszög",
                "correct": false
            },
            {
                "text": "az átesési sebesség és az állásszög",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Növekvő sebességgel az indukált ellenállás …, és a káros ellenállás …",
        "answers": [
            {
                "text": "csökken – nő.",
                "correct": true
            },
            {
                "text": "csökken – szintén csökken.",
                "correct": false
            },
            {
                "text": "nő – szintén nő.",
                "correct": false
            },
            {
                "text": "nő – csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Hogyan változik egy repülőgép jósági száma (Y/X hányados), a repülőgép súlyának növekedésekor?",
        "answers": [
            {
                "text": "A súly növekedésével az Y/X hányados romlik.",
                "correct": false
            },
            {
                "text": "A súly növekedésével az Y/X hányados változatlan marad.",
                "correct": true
            },
            {
                "text": "A súly növekedésével az Y/X hányados nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A kritikus állásszög …",
        "answers": [
            {
                "text": "nem változik a repülőgép súlyával.",
                "correct": true
            },
            {
                "text": "nő a súlypont hátra vándorlásával.",
                "correct": false
            },
            {
                "text": "nő a repülőgép súlyának növekedésével.",
                "correct": false
            },
            {
                "text": "csökken a súlypont előre vándorlásával.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A statikus nyomás …",
        "answers": [
            {
                "text": "az össznyomás irányában mérhető.",
                "correct": false
            },
            {
                "text": "az áramlás irányával párhuzamosan mérhető.",
                "correct": false
            },
            {
                "text": "az áramlás irányára merőlegesen mérhető.",
                "correct": true
            },
            {
                "text": "minden irányban mérhető.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Az alábbiak közül melyik mértékegység használatos teljesítmény kifejezésére?",
        "answers": [
            {
                "text": "W/s",
                "correct": false
            },
            {
                "text": "W · s",
                "correct": false
            },
            {
                "text": "J · s",
                "correct": false
            },
            {
                "text": "W",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az indukált ellenállás egyenes vonalú vízszintes repülésben …",
        "answers": [
            {
                "text": "a sebesség négyzetével egyenesen arányos.",
                "correct": false
            },
            {
                "text": "a sebességgel egyenesen arányos.",
                "correct": false
            },
            {
                "text": "a sebesség négyzetével fordítottan arányos.",
                "correct": true
            },
            {
                "text": "a sebességgel fordítottan arányos.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik egyenlőség igaz?",
        "answers": [
            {
                "text": "a = m/F",
                "correct": false
            },
            {
                "text": "a = F · m",
                "correct": false
            },
            {
                "text": "m = F / a",
                "correct": true
            },
            {
                "text": "m = F · a",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Amikor a szárny zavaró hatás során kialakuló instabilizáló nyomatéka nagyobbá válik a vízszintes farokfelület stabilizáló nyomatékánál, akkor a repülőgép egyensúlyi állapota …",
        "answers": [
            {
                "text": "közömbös.",
                "correct": false
            },
            {
                "text": "túlzottan stabil.",
                "correct": false
            },
            {
                "text": "stabil.",
                "correct": false
            },
            {
                "text": "instabil.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az alapjárattól eltérő teljesítménybeállítás esetén végrehajtott áteséskor az átesési sebesség …",
        "answers": [
            {
                "text": "alacsonyabb.",
                "correct": true
            },
            {
                "text": "ugyanakkora, mint ha a motor alapjáraton üzemelne.",
                "correct": false
            },
            {
                "text": "magasabb.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárnyszelvény állásszöge …",
        "answers": [
            {
                "text": "a profil alsó felülete és húrja által bezárt szög.",
                "correct": false
            },
            {
                "text": "a profil alsó felülete és a levegő áramlásának iránya által bezárt szög.",
                "correct": false
            },
            {
                "text": "a profil húrja és a vízszintes által bezárt szög.",
                "correct": false
            },
            {
                "text": "a profil húrja és a levegő áramlásának iránya által bezárt szög.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Hárompontos nekifutási helyzetben a légcsavar mely nyomatékainak hatását kell az oldalkormány lépésével kompenzálnunk?",
        "answers": [
            {
                "text": "A légcsavarszél hatását, a precessziót és a reakciónyomatékot.",
                "correct": false
            },
            {
                "text": "A légcsavarszél hatását és a precessziót.",
                "correct": false
            },
            {
                "text": "A légcsavarszél hatását és a reakciónyomatékot.",
                "correct": true
            },
            {
                "text": "A precessziót és a reakciónyomatékot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás hamis?",
        "answers": [
            {
                "text": "A trimlap kitérítésekor a kormánytartalék csökken.",
                "correct": false
            },
            {
                "text": "A trimlap kitérítésekor a kormányhatásosság nő.",
                "correct": true
            },
            {
                "text": "A trimlap kitérítésekor a repülőgép ellenállása nő.",
                "correct": false
            },
            {
                "text": "A trimlap kitérítésekor a magassági kormánylap is kitér.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Egy repülőgép dinamikus hosszstabilitásához feltétlenül szükséges, hogy a repülőgép statikusan hosszstabil legyen.",
                "correct": true
            },
            {
                "text": "Egy statikusan hosszstabil repülőgép dinamikusan is stabil tulajdonságokat mutat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy szimmetrikus profil felhajtóerő-tényezőjének változását (y-tengely) az állásszögváltozás (x-tengely) függvényében vizsgáljuk, akkor az így kapott görbe az y-tengelyt …",
        "answers": [
            {
                "text": "a negatív tartományban metszi.",
                "correct": false
            },
            {
                "text": "az origóban metszi.",
                "correct": true
            },
            {
                "text": "pozitív tartományban metszi.",
                "correct": false
            },
            {
                "text": "nem metszi.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy áramlásba helyezett test légellenállása függ …",
        "answers": [
            {
                "text": "az áramlás sebességétől.",
                "correct": true
            },
            {
                "text": "a test súlyától.",
                "correct": false
            },
            {
                "text": "a test tömegétől.",
                "correct": false
            },
            {
                "text": "a test súlypontjának helyzetétől.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A légellenállás párhuzamosan, a felhajtóerő merőlegesen keletkezik ….",
        "answers": [
            {
                "text": "az áramló levegő irányához képest.",
                "correct": true
            },
            {
                "text": "a profil húrjához képest.",
                "correct": false
            },
            {
                "text": "a null felhajtóerő-tényező irányhoz képest.",
                "correct": false
            },
            {
                "text": "a vízszinteshez képest.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgép hossznyomatékainak összege nulla, akkor …",
        "answers": [
            {
                "text": "a repülőgép-vezető nem alkalmazott kormánykitérítést.",
                "correct": false
            },
            {
                "text": "a repülőgép a tervezett utazósebességen repül.",
                "correct": false
            },
            {
                "text": "a repülőgép stabilitása semleges.",
                "correct": false
            },
            {
                "text": "a repülőgép trimhelyzetben van.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Vgazd-nál alacsonyabb sebességen történő vízszintes repülés esetén, ha az állásszöget növeljük és a beállított teljesítményt változatlanul hagyjuk, akkor …",
        "answers": [
            {
                "text": "a repülőgép emelkedésbe kezd.",
                "correct": false
            },
            {
                "text": "a repülőgép süllyedni kezd.",
                "correct": true
            },
            {
                "text": "a repülőgép gyorsulni fog.",
                "correct": false
            },
            {
                "text": "a repülési helyzet nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép súlyának növekedésével az átesési sebesség …",
        "answers": [
            {
                "text": "nem változik.",
                "correct": false
            },
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A bővülő jellegű áramlásban a statikus nyomás csökken és az áramlás sebessége növekszik.",
                "correct": false
            },
            {
                "text": "Egy áramlásba helyezett szilárd test és az áramló közeg között indukált ellenállás lép fel.",
                "correct": false
            },
            {
                "text": "Átváltási pontnak nevezzük azt a pontot, ahol az áramló közeg számára rendelkezésre álló tér diffúzorossá változik.",
                "correct": false
            },
            {
                "text": "Egy áramlásba helyezett szárnyszelvény orrpontjánál a statikus nyomás nagyobb, mint a végpontjánál.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Egy test súlya …",
        "answers": [
            {
                "text": "fordítottan arányos tömegével és egyenesen arányos a nehézségi gyorsulással.",
                "correct": false
            },
            {
                "text": "tömegével és a nehézségi gyorsulással arányos.",
                "correct": true
            },
            {
                "text": "egyenesen arányos tömegével és fordítottan arányos a nehézségi gyorsulással.",
                "correct": false
            },
            {
                "text": "fordítottan arányos tömegével és fordítottan arányos a nehézségi gyorsulással.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép polárgörbéjéről leolvashatjuk …",
        "answers": [
            {
                "text": "a légellenállás minimumát és a felhajtóerő maximumát.",
                "correct": false
            },
            {
                "text": "a felhajtóerő- és ellenállás-tényező arányának minimumát és a légellenállás minimumát.",
                "correct": false
            },
            {
                "text": "az ellenállás-tényező minimumát és a felhajtóerő maximumát.",
                "correct": false
            },
            {
                "text": "a felhajtóerő- és ellenállás-tényező arányának maximumát és a maximális felhajtóerő-tényezőt.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgép egy állásszögnövelő széllökés után a repülőgép-vezető beavatkozása nélkül egyensúlyi helyzete körül növekvő amplitúdóval, egyre nagyobb sebesség- és magasságingadozással lengéseket folytat, akkor a repülőgép stabilitása …",
        "answers": [
            {
                "text": "statikusan stabil és dinamikusan instabil.",
                "correct": true
            },
            {
                "text": "statikusan instabil és dinamikusan közömbös.",
                "correct": false
            },
            {
                "text": "statikusan instabil és dinamikusan stabil.",
                "correct": false
            },
            {
                "text": "statikusan stabil és dinamikusan közömbös.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Mi a következménye annak, ha a súlypont a hátsó határérték mögé kerül?",
        "answers": [
            {
                "text": "A kormánymozdulatok során a repülőgép szerkezeti túlterhelésének lehetősége nő, a kormányzás elfogadhatatlanul nagy kormányérzékenységgel jár.",
                "correct": true
            },
            {
                "text": "Némileg csökken a hosszstabilitás.",
                "correct": false
            },
            {
                "text": "Kedvezőbb dugóhúzó tulajdonságok.",
                "correct": false
            },
            {
                "text": "Túl nagy kormányerő szükséges a repülőgép kilebegtetéséhez.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy szárny karcsúsága λ=14,4. A fesztávolságot 0,9 méterrel növeljük, míg az A szárnyfelület változatlanul 10 m2 marad. Mekkora lesz így a szárny karcsúsága?",
        "answers": [
            {
                "text": "λ=16,64",
                "correct": true
            },
            {
                "text": "λ=15,3",
                "correct": false
            },
            {
                "text": "λ=17,1",
                "correct": false
            },
            {
                "text": "λ=16,87",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A vízgőz mennyisége a légkörben …",
        "answers": [
            {
                "text": "0,1 és 0,4 térfogat % között változik.",
                "correct": false
            },
            {
                "text": "0 és 4 térfogat % között változik.",
                "correct": true
            },
            {
                "text": "0,4 térfogat %-ban jelen.",
                "correct": false
            },
            {
                "text": "4 térfogat %-ban jelen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Míg minden más tényező változatlanul marad, a légnyomás növekedése esetén a repülőgép légellenállása …",
        "answers": [
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A NEL szerint a sűrűség a magassággal …",
        "answers": [
            {
                "text": "egyenesen arányos.",
                "correct": false
            },
            {
                "text": "az alsó rétegekben valamivel lassabban csökken, mint a nagyobb magasságokban.",
                "correct": false
            },
            {
                "text": "közel exponenciálisan csökken.",
                "correct": true
            },
            {
                "text": "Pontosan nem lehet megmondani, függ a hőmérséklettől is.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik fizikai mennyiségnek a mértékegysége a m/s2?",
        "answers": [
            {
                "text": "Sebesség",
                "correct": false
            },
            {
                "text": "Gyorsulás",
                "correct": true
            },
            {
                "text": "Erő",
                "correct": false
            },
            {
                "text": "Nyomás",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Állandósult siklásban …",
        "answers": [
            {
                "text": "a felhajtóerő egyenlő a súlyerővel.",
                "correct": false
            },
            {
                "text": "a felhajtóerő a súlyerő x-irányú komponensével tart egyensúlyt.",
                "correct": false
            },
            {
                "text": "a légellenállás a súlyerő x-irányú komponensével tart egyensúlyt.",
                "correct": true
            },
            {
                "text": "a tömegvonzás nehezíti a mozgást.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "1 mph = 1 tengeri mérföld/óra = 1, 609 km/h",
                "correct": false
            },
            {
                "text": "1 mph = 1 szárazföldi mérföld/óra = 1,852 km/h",
                "correct": false
            },
            {
                "text": "1 csomó = 1 tengeri mérföld/óra = 1,852 km/h",
                "correct": true
            },
            {
                "text": "1 csomó = 1 szárazföldi mérföld/óra = 1, 609 km/h",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A dinamikus nyomás képlete: …",
        "answers": [
            {
                "text": "2 + ρ + v2",
                "correct": false
            },
            {
                "text": "½ · ρ · v2",
                "correct": true
            },
            {
                "text": "ρ + 2v",
                "correct": false
            },
            {
                "text": "2 · ρ · v2",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "Mekkora a hőmérséklet 9000 méter magasságban a NEL adatai szerint.",
        "answers": [
            {
                "text": "-43,5°C.",
                "correct": true
            },
            {
                "text": "-37°C.",
                "correct": false
            },
            {
                "text": "-11°C.",
                "correct": false
            },
            {
                "text": "-4,5°C.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy alsószárnyas repülőgép szárnyelrendezéséből adódóan eleve kisebb keresztstabilitással rendelkezik, mint egy felsőszárnyas.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Vgazd-nál magasabb adott V1 sebességen történő vízszintes repülés esetén, ha a repülőgép valamilyen zavaró hatásra lelassul, akkor a repülőgép-vezető beavatkozása nélkül …",
        "answers": [
            {
                "text": "az így létrejövő teljesítményfelesleg visszagyorsítja a repülőgépet a V1 sebességre.",
                "correct": true
            },
            {
                "text": "a repülőgép tovább lassul és átesik.",
                "correct": false
            },
            {
                "text": "a repülőgép gyorsulni fog.",
                "correct": false
            },
            {
                "text": "a repülési helyzet nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Mely esetekben nő az átesési sebesség?",
        "answers": [
            {
                "text": "A repülősúly növekedése és a minimális teljesítménynél nagyobb teljesítmény-beállítással végrehajtott átesés esetén egyaránt nő az átesési sebesség.",
                "correct": false
            },
            {
                "text": "A szárnyprofil íveltségének növekedésével és a súlypont előrevándorlásával egyaránt nő az átesési sebesség.",
                "correct": false
            },
            {
                "text": "A súlypont hátravándorlásával és a repülősúly csökkenésével egyaránt nő az átesési sebesség.",
                "correct": false
            },
            {
                "text": "A szárnyprofil íveltségének csökkenésével és a repülősúly növekedésével egyaránt nő az átesési sebesség.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy repülőgép stabilitásának mértékét bármeddig növelhetjük, mert minél stabilabb egy repülőgép, vezetése annál biztonságosabb.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A pályahajlási szöget θ-val jelölve állandósult emelkedésben …",
        "answers": [
            {
                "text": "Y/G = cosθ",
                "correct": true
            },
            {
                "text": "Y = G sinθ",
                "correct": false
            },
            {
                "text": "Y = G + cosθ",
                "correct": false
            },
            {
                "text": "Fp = X + G cosθ",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárnyprofilon keletkező felhajtóerő kialakulása nagyobb részt a szárny …",
        "answers": [
            {
                "text": "alatt kialakuló nyomáscsökkenés eredménye.",
                "correct": false
            },
            {
                "text": "felett kialakuló nyomásnövekedés eredménye.",
                "correct": false
            },
            {
                "text": "alatt kialakuló nyomásnövekedés eredménye.",
                "correct": false
            },
            {
                "text": "felett kialakuló nyomáscsökkenés eredménye.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy repülőgép, melynek átesési sebessége 50 csomó, egyenes vonalú egyenletes sebességű vízszintes repülésben halad 115 csomós sebességgel. A maximális felhajtóerő-tényezőnek hány %-a ekkor a felhajtóerő-tényező?",
        "answers": [
            {
                "text": "19%",
                "correct": true
            },
            {
                "text": "230%",
                "correct": false
            },
            {
                "text": "43%",
                "correct": false
            },
            {
                "text": "65%",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Az ellenállás-tényező az állásszög növekedésével nő.",
                "correct": true
            },
            {
                "text": "A légellenállás a dinamikus nyomás négyzetével arányos.",
                "correct": false
            },
            {
                "text": "Az ellenállás-tényező a sebesség négyzetével arányos.",
                "correct": false
            },
            {
                "text": "A légellenállás az ellenállás-tényező, a dinamikus nyomás, a sebesség és a test jellemző felületének szorzata.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A Fowler-lap kitérítésekor a résen keresztül … jutó levegő … Venturi-hatás következtében megnöveli a levegő áramlási sebességét ezáltal késleltetve a határréteg leválását.",
        "answers": [
            {
                "text": "az ívelőlap felső felületére – diffúzoros",
                "correct": false
            },
            {
                "text": "a szárny teljes felső felületére – diffúzoros",
                "correct": false
            },
            {
                "text": "az ívelőlap felső felületére – konfúzoros",
                "correct": true
            },
            {
                "text": "a szárny teljes felső felületére – konfúzoros",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgép súlypontja a semleges pont előtt van, akkor …",
        "answers": [
            {
                "text": "hossznyomatékainak összege nulla.",
                "correct": false
            },
            {
                "text": "hossznyomatékainak összege lehet negatív, pozitív vagy nulla.",
                "correct": true
            },
            {
                "text": "hossznyomatékainak összege pozitív.",
                "correct": false
            },
            {
                "text": "hossznyomatékainak összege negatív.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárny karcsúsága …",
        "answers": [
            {
                "text": "változatlan fesztávolság esetén a szárnyfelület növelésével négyzetesen nő.",
                "correct": false
            },
            {
                "text": "változatlan fesztávolság esetén a szárnyfelülettel fordítottan arányos.",
                "correct": true
            },
            {
                "text": "annál nagyobb, minél nagyobb a fesztávolság.",
                "correct": false
            },
            {
                "text": "változatlan szárnyfelület mellett a fesztávolság növelésével egyenes arányban nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az orrsegédszárny kimozdulásakor a résen keresztül jutó levegő … Venturi-hatás következtében megnöveli a levegő áramlási sebességét … ezáltal késleltetve a határréteg leválását.",
        "answers": [
            {
                "text": "diffúzoros – a szárny felső felületén",
                "correct": false
            },
            {
                "text": "diffúzoros – az ívelőlap felső felületén",
                "correct": false
            },
            {
                "text": "konfúzoros – a szárny felső felületén",
                "correct": true
            },
            {
                "text": "konfúzoros – az ívelőlap felső felületén",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A kabinból nézve az óramutató irányával megegyező irányba forgó légcsavar esetén nagy állásszögű vízszintes repülés során milyen következménye van a légcsavar asszimmetrikus terhelésének?",
        "answers": [
            {
                "text": "Orsózónyomaték jobbra.",
                "correct": false
            },
            {
                "text": "Legyezőnyomaték jobbra.",
                "correct": false
            },
            {
                "text": "Orsózónyomaték balra.",
                "correct": false
            },
            {
                "text": "Legyezőnyomaték balra.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Utazósebességen történő vízszintes repülés esetén, ha a teljesítménybeállítást növeljük és az állásszöget változatlanul hagyjuk, akkor …",
        "answers": [
            {
                "text": "a repülési helyzet nem változik.",
                "correct": false
            },
            {
                "text": "a repülőgép gyorsulni fog.",
                "correct": false
            },
            {
                "text": "a repülőgép süllyedni kezd.",
                "correct": false
            },
            {
                "text": "a repülőgép emelkedésbe kezd.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A mozgásra késztetett test súlypontjában a gyorsulással megegyező irányú tehetetlenségi erő ébred, amely a tömeg és a gyorsulás szorzatával arányos.",
                "correct": false
            },
            {
                "text": "A mozgásra késztetett test súlypontjában a gyorsulással megegyező irányú tehetetlenségi erő ébred, amely a tömeg és a gyorsulás hányadosával arányos.",
                "correct": false
            },
            {
                "text": "A mozgásra késztetett test súlypontjában a gyorsulással ellentétes irányú tehetetlenségi erő ébred, amely a tömeg és a gyorsulás hányadosával arányos.",
                "correct": false
            },
            {
                "text": "A mozgásra késztetett test súlypontjában a gyorsulással ellentétes irányú tehetetlenségi erő ébred, amely a tömeg és a gyorsulás szorzatával arányos.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Nagy állásszögű repülés esetén …",
        "answers": [
            {
                "text": "a vonóerő hatásvonala (a kabinból nézve) jobbra forgó légcsavar esetén a légcsavar tengelyétől felfelé tolódik el.",
                "correct": false
            },
            {
                "text": "a vonóerő hatásvonala (a kabinból nézve) balra forgó légcsavar esetén a légcsavar tengelyétől jobbra tolódik el.",
                "correct": false
            },
            {
                "text": "a vonóerő hatásvonala (a kabinból nézve) jobbra forgó légcsavar esetén a légcsavar tengelyétől jobbra tolódik el.",
                "correct": true
            },
            {
                "text": "a vonóerő hatásvonala a légcsavar tengelyével egybeesik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Állandósult emelkedésben …",
        "answers": [
            {
                "text": "a légellenállás a súlyerő x-irányú komponensével tart egyensúlyt.",
                "correct": false
            },
            {
                "text": "a felhajtóerő a súlyerő x-irányú komponensével tart egyensúlyt.",
                "correct": false
            },
            {
                "text": "a felhajtóerő mindig nagyobb a súlyerőnél.",
                "correct": false
            },
            {
                "text": "a vonóerő a légellenállással és a súlyerő x-irányú komponensével tart egyensúlyt.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A kabinból nézve az óramutató irányával megegyező irányba forgó légcsavar esetén a nekifutás során milyen következménye van a légcsavar reakciónyomatékának egy orrkeres repülőgépen?",
        "answers": [
            {
                "text": "Orsózónyomaték balra, mely a bal kerék terhelését növeli.",
                "correct": true
            },
            {
                "text": "Orsózónyomaték jobbra, mely a jobb kerék terhelését növeli.",
                "correct": false
            },
            {
                "text": "Állásszögnövelő bólintónyomaték, mely tehermentesíti az orrkereket.",
                "correct": false
            },
            {
                "text": "Állásszögcsökkentő bólintónyomaték, mely az orrkerék terhelését növeli.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egyenes vonalú, egyenletes sebességű, vízszintes repülésben (konstans légsűrűség és súly esetén) …",
        "answers": [
            {
                "text": "az állásszög csökkenésekor a felhajtóerő változatlan marad, ha a felhajtóerő-tényező nem változik.",
                "correct": false
            },
            {
                "text": "a sebesség növekedésekor a felhajtóerő változatlan marad, ha a felhajtóerő-tényező növekszik.",
                "correct": false
            },
            {
                "text": "az állásszög növekedésekor a felhajtóerő változatlan marad, ha a sebességet növeljük.",
                "correct": false
            },
            {
                "text": "a sebesség csökkenésekor a felhajtóerő változatlan marad, ha az állásszöget növeljük.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A légcsavar precesszió-hatása során … érezhető.",
        "answers": [
            {
                "text": "bólintó és legyező mozgás",
                "correct": true
            },
            {
                "text": "motorrázás",
                "correct": false
            },
            {
                "text": "orsózó és legyező mozgás",
                "correct": false
            },
            {
                "text": "bólintó és orsózó mozgás",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Állandó fordulatszámú légcsavar esetén, helyes beállítást alkalmazva nagy sebességen a lapátok beállítási szöge nagy.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Nagy karcsúságú szárny esetén …",
        "answers": [
            {
                "text": "kisebb az indukált ellenállás és nagyobb a felhajtóerő-tényező.",
                "correct": true
            },
            {
                "text": "nagyobb az átesési sebesség és a kritikus állásszög.",
                "correct": false
            },
            {
                "text": "nagyobb az indukált ellenállás és kisebb a felhajtóerő-tényező.",
                "correct": false
            },
            {
                "text": "nagyobb a felhajtóerő és az ellenállás.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Ha a torlónyomásból kivonjuk az össznyomást, megkapjuk a statikus nyomást.",
                "correct": false
            },
            {
                "text": "Az össznyomás a statikus és a dinamikus nyomás különbsége.",
                "correct": false
            },
            {
                "text": "Az össznyomás és a torlónyomás különbsége a statikus nyomás.",
                "correct": true
            },
            {
                "text": "Az össznyomás a torlónyomás és a dinamikus nyomás összege.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy repülőgépen teljes kormánylap-kitérítéssel nem tudjuk létrehozni a maximális felhajtóerő-tényezőt.",
        "answers": [
            {
                "text": "Ekkor a repülőgép stabilitása túlságosan nagy.",
                "correct": true
            },
            {
                "text": "Ekkor a repülőgép instabil.",
                "correct": false
            },
            {
                "text": "Ekkor van a repülőgép súlypontja a tervezett súlyponthelyzetben.",
                "correct": false
            },
            {
                "text": "Ekkor a súlypont a semleges pontban van.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A súlypont hátravándorlásával az átesési sebesség … és a repülőgép … kormánymozdulatokkal vezethető.",
        "answers": [
            {
                "text": "csökken – kisebb",
                "correct": true
            },
            {
                "text": "nő – nagyobb",
                "correct": false
            },
            {
                "text": "csökken – nagyobb",
                "correct": false
            },
            {
                "text": "nő – kisebb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A kabinból nézve az óramutató irányával megegyező irányba forgó légcsavar esetén a magassági kormány húzásakor, azaz állásszög növelő manőver során milyen következménye van a légcsavar precesszió-hatásának?",
        "answers": [
            {
                "text": "Orsózónyomaték jobbra.",
                "correct": false
            },
            {
                "text": "Orsózónyomaték balra.",
                "correct": false
            },
            {
                "text": "Legyezőnyomaték jobbra.",
                "correct": true
            },
            {
                "text": "Legyezőnyomaték balra.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép statikus stabilitása akkor áll fenn, ha …",
        "answers": [
            {
                "text": "a szárnyfelület legalább 10-szer nagyobb, mint a vízszintes irányfelület.",
                "correct": false
            },
            {
                "text": "a súlypont a szárny belépőéle előtt van.",
                "correct": false
            },
            {
                "text": "a hossznyomatéki egyensúly megbomlásakor kisebb nyomaték keletkezik a vízszintes irányfelületen, mint a szárnyon.",
                "correct": false
            },
            {
                "text": "a súlypont a semleges pont előtt van.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A troposzférában a hőmérsékleti gradiens …",
        "answers": [
            {
                "text": "6,5°C/100 m.",
                "correct": false
            },
            {
                "text": "6,5°C/1000 m.",
                "correct": true
            },
            {
                "text": "6,5°C/10 km.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az indukált ellenállás-tényező …",
        "answers": [
            {
                "text": "arányos a sebesség négyzetével.",
                "correct": false
            },
            {
                "text": "egyenesen arányos a felhajtóerő-tényezővel.",
                "correct": false
            },
            {
                "text": "egyenesen arányos a sebességgel.",
                "correct": false
            },
            {
                "text": "arányos a felhajtóerő-tényező négyzetével.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy statikusan hosszstabil repülőgép …",
        "answers": [
            {
                "text": "miután egy külső zavaró hatás hossznyomatéki egyensúlyából kimozdítja, a repülőgép-vezető beavatkozása nélkül, önműködően az egyensúlyi helyzete felé mozdul.",
                "correct": true
            },
            {
                "text": "külső zavaró hatás következtében megbomlott hossznyomatéki egyensúlyi helyzetét a magassági kormány használata nélkül, néhány csillapodó lengés után visszanyeri.",
                "correct": false
            },
            {
                "text": "miután egy külső zavaró hatás hossznyomatéki egyensúlyából kimozdítja, az új helyzetében repül tovább.",
                "correct": false
            },
            {
                "text": "külső zavarás hatására megkezdett lengő mozgását közel állandó amplitúdóval és lengésidővel folytatja.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A NEL szerint a tengerszinten mért légnyomás …",
        "answers": [
            {
                "text": "1013,25 hPa, azaz 29,92 Hginch.",
                "correct": true
            },
            {
                "text": "1025,13 hPa, azaz 29,92 Hginch.",
                "correct": false
            },
            {
                "text": "1025,13 hPa, azaz 29,29 Hginch.",
                "correct": false
            },
            {
                "text": "1013,25 hPa, azaz 29,29 Hginch.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép Vopt sebességén tudjuk maximalizálni siklás esetén a levegőben tölthető időt és egyben a föld felett lerepülhető távolságot.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A sűrűség mértékegysége: … A fajsúly mértékegysége: …",
        "answers": [
            {
                "text": "N/m3 – kg/m3",
                "correct": false
            },
            {
                "text": "kg/m2 – N/m2",
                "correct": false
            },
            {
                "text": "kg/m3 – N/m3",
                "correct": true
            },
            {
                "text": "N/kg – kg/cm3",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A súlypont előrevándorlásával a magassági kormány érzékenysége … és a kormányerő …",
        "answers": [
            {
                "text": "csökken – csökken.",
                "correct": false
            },
            {
                "text": "nő – nő.",
                "correct": false
            },
            {
                "text": "csökken – nő.",
                "correct": true
            },
            {
                "text": "nő – csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Milyen kapcsolatban van a legkisebb siklószöget biztosító sebesség és az a sebesség, melyen a siklás során a legtöbb levegőben tölthető időt maximalizáljuk?",
        "answers": [
            {
                "text": "A két sebesség azonos.",
                "correct": false
            },
            {
                "text": "Ez a repülőgép típusától függ.",
                "correct": false
            },
            {
                "text": "A siklás során a legtöbb levegőben tölthető időt biztosító sebesség nagyobb.",
                "correct": false
            },
            {
                "text": "A legkisebb siklószöget biztosító sebesség nagyobb.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Mekkora az indukált és a káros ellenállás aránya annál sebességnél, melyen egyenes vonalú vízszintes repüléskor az összellenállás minimális?",
        "answers": [
            {
                "text": "1/2",
                "correct": false
            },
            {
                "text": "Ez az érték minden repülőgépen más és más.",
                "correct": false
            },
            {
                "text": "2/1",
                "correct": false
            },
            {
                "text": "1/1",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Nagy sebességű repülés esetén az indukált ellenállás jelentős.",
                "correct": false
            },
            {
                "text": "Nagy sebességű repülés esetén az alaki ellenállás elhanyagolhatóan kicsi.",
                "correct": false
            },
            {
                "text": "Nagy állásszögű repülésnél az indukált ellenállás akár 75-80%-a is lehet a légellenállásnak.",
                "correct": true
            },
            {
                "text": "Nagy állásszögű repülésnél az indukált ellenállás a légellenállás kb. 1%-át teszi ki.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy szimmetrikus profil felhajtóerő-tényezőjének változását (y-tengely) az állásszögváltozás (x-tengely) függvényében vizsgáljuk, akkor az így kapott görbe az x-tengelyt …",
        "answers": [
            {
                "text": "a negatív tartományban metszi.",
                "correct": false
            },
            {
                "text": "az origóban metszi.",
                "correct": true
            },
            {
                "text": "nem metszi.",
                "correct": false
            },
            {
                "text": "pozitív tartományban metszi.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A súlypont hátravándorlásával a kormányérzékenység …",
        "answers": [
            {
                "text": "nem változik.",
                "correct": false
            },
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárny legjobb Y/X hányadosa …",
        "answers": [
            {
                "text": "kisebb a repülőgép legjobb Y/X hányadosánál.",
                "correct": false
            },
            {
                "text": "nagyobb a repülőgép legjobb Y/X hányadosánál.",
                "correct": true
            },
            {
                "text": "lehet nagyobb is és kisebb is mint a repülőgép legjobb Y/X hányadosa.",
                "correct": false
            },
            {
                "text": "egyenlő a repülőgép legjobb Y/X hányadosával.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha az áramcsőben állandósult áramlás van és egy szakaszán az áramvonalak összetartanak, akkor ezen a részen a statikus nyomás … és a sebesség …",
        "answers": [
            {
                "text": "nő – pedig csökken.",
                "correct": false
            },
            {
                "text": "csökken – pedig nő.",
                "correct": true
            },
            {
                "text": "nő – is nő.",
                "correct": false
            },
            {
                "text": "csökken – is csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A centripetális erő nagysága egyenesen arányos a tömeggel, a kerületi sebesség négyzetével és fordítottan a sugárral, iránya pedig a forgási középpont felé mutat.",
                "correct": true
            },
            {
                "text": "A centripetális erő nagysága egyenesen arányos a tömeggel, a kerületi sebességgel és a sugárral, iránya pedig a forgási középpont felé mutat.",
                "correct": false
            },
            {
                "text": "A centripetális erő nagysága egyenesen arányos a tömeggel, fordítottan arányos a kerületi sebesség négyzetével és a sugárral, iránya pedig a forgási középpont felé mutat.",
                "correct": false
            },
            {
                "text": "A centripetális erő nagysága egyenesen arányos a tömeggel, a kerületi sebesség négyzetével és fordítottan a sugárral, iránya pedig sugár irányban kifelé mutat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A légerők nagysága …",
        "answers": [
            {
                "text": "egyenesen arányos a levegő sűrűségével és relatív áramlási sebességével.",
                "correct": false
            },
            {
                "text": "egyenesen arányos a levegő sűrűségével és négyzetesen a levegő relatív áramlási sebességével.",
                "correct": true
            },
            {
                "text": "fordítottan arányos a levegő sűrűségével és egyenesen arányos a levegő relatív áramlási sebességével.",
                "correct": false
            },
            {
                "text": "négyzetesen arányos a levegő sűrűségével és fordítottan arányos a levegő relatív áramlási sebességével.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A légcsavar elcsavarásának köszönhetően a szelvények beállítási szöge a légcsavarszárny végéhez közeledve …",
        "answers": [
            {
                "text": "nő.",
                "correct": false
            },
            {
                "text": "csökken.",
                "correct": true
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik ellenállás-összetevő nem nő a sebességgel?",
        "answers": [
            {
                "text": "A káros ellenállás.",
                "correct": false
            },
            {
                "text": "Az indukált ellenállás.",
                "correct": true
            },
            {
                "text": "Az alaki ellenállás.",
                "correct": false
            },
            {
                "text": "A profilellenállás.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik sebesség választásával tudunk a legmesszebbre siklani?",
        "answers": [
            {
                "text": "Vmax",
                "correct": false
            },
            {
                "text": "Vutazó",
                "correct": false
            },
            {
                "text": "Vopt",
                "correct": true
            },
            {
                "text": "Vgazd",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A szén-dioxid a légkörben átlagosan …",
        "answers": [
            {
                "text": "0,1 térfogat %-ban jelen.",
                "correct": false
            },
            {
                "text": "3 térfogat %-ban jelen.",
                "correct": false
            },
            {
                "text": "0,03 térfogat %-ban jelen.",
                "correct": true
            },
            {
                "text": "1 térfogat %-ban jelen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy ívelt profil felhajtóerő-tényezőjének változását (y-tengely) az állásszögváltozás (x-tengely) függvényében vizsgáljuk, akkor az így kapott görbe az x-tengelyt …",
        "answers": [
            {
                "text": "pozitív tartományban metszi.",
                "correct": false
            },
            {
                "text": "a negatív tartományban metszi.",
                "correct": true
            },
            {
                "text": "nem metszi.",
                "correct": false
            },
            {
                "text": "az origóban metszi.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A nyomásközéppont normál repülési helyzetekben a kritikus állásszög esetén mozdul a legelőbbre.",
                "correct": true
            },
            {
                "text": "A nyomásközéppont helyzete az állásszögtől független.",
                "correct": false
            },
            {
                "text": "A nyomásközéppont normál repülési helyzetekben az állásszög csökkenésével előrevándorol.",
                "correct": false
            },
            {
                "text": "Cy=0 esetén a nyomásközéppont a hátra tevődik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy szárny beállítási szöge 2°, és állásszöge 4° egyenletes sebességű vízszintes repülésben, akkor mekkora a repülőgép bólintási szöge?",
        "answers": [
            {
                "text": "6°",
                "correct": false
            },
            {
                "text": "4°",
                "correct": false
            },
            {
                "text": "2°",
                "correct": true
            },
            {
                "text": "0°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A hatótávolság maximális, ha a légellenállás minimális.",
                "correct": true
            },
            {
                "text": "A tüzelőanyag-fogyasztás minimális, ha a légellenállás minimális.",
                "correct": false
            },
            {
                "text": "A levegőben tölthető idő maximális, ha a légellenállás minimális.",
                "correct": false
            },
            {
                "text": "A szükséges teljesítmény minimális, ha a légellenállás minimális.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A szögsebesség a sugár és a kerületi sebesség hányadosa.",
                "correct": false
            },
            {
                "text": "A kerületi sebesség a sugár és a szögsebesség szorzata.",
                "correct": true
            },
            {
                "text": "A kerületi sebesség a sugár és a szögelfordulás szorzata.",
                "correct": false
            },
            {
                "text": "A szögsebesség a sugár és a szögelfordulás hányadosa.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Fékszárny használatakor a repülőgép emelkedőképessége …",
        "answers": [
            {
                "text": "romlik.",
                "correct": true
            },
            {
                "text": "javul.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárny beállítási szöge nem más, mint … által bezárt szög.",
        "answers": [
            {
                "text": "a hossztengely és a szárnyprofil húrja",
                "correct": true
            },
            {
                "text": "a szárnyprofil húrja és középvonala",
                "correct": false
            },
            {
                "text": "a hossztengely és az áramló levegő iránya",
                "correct": false
            },
            {
                "text": "a szárnyprofil húrja és az áramló levegő iránya",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az indukált ellenállás a repülősúly … és a sebesség …",
        "answers": [
            {
                "text": "csökkenésével nő – növekedésével is nő.",
                "correct": false
            },
            {
                "text": "növekedésével nő – növekedésével is nő.",
                "correct": false
            },
            {
                "text": "növekedésével csökken – csökkenésével is csökken.",
                "correct": false
            },
            {
                "text": "csökkenésével csökken – növekedésével is csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Haladó mozgást végző testre ható erő és az általa létesített gyorsulás egyenesen arányos, az arányossági tényező pedig a mozgatott test tömege.",
        "answers": [
            {
                "text": "Ez Newton I. törvénye.",
                "correct": false
            },
            {
                "text": "Ez Newton II. törvénye.",
                "correct": true
            },
            {
                "text": "Ez Newton III. törvénye.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép jósági száma (Y/X hányados) …",
        "answers": [
            {
                "text": "az állásszög növekedésével a leghatékonyabb állásszög eléréséig növekszik.",
                "correct": true
            },
            {
                "text": "4° állásszög esetén maximális.",
                "correct": false
            },
            {
                "text": "akkor maximális, ha a Vgazd sebességhez tartozó állásszögön repülünk.",
                "correct": false
            },
            {
                "text": "az állásszög növekedésével folyamatosan növekszik és a kritikus állásszögnél éri el maximumát.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "A szárnyon keletkező légerőket térben megoszló erőknek nevezzük.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy repülőgép gyakorlati csúcsmagasságának azt a magasságot nevezzük, ahol …",
        "answers": [
            {
                "text": "már nincs teljesítményfeleslege.",
                "correct": false
            },
            {
                "text": "az emelkedés w függőleges sebessége 10 láb/percre csökken.",
                "correct": false
            },
            {
                "text": "már nem képes emelkedésre.",
                "correct": false
            },
            {
                "text": "az emelkedés w függőleges sebessége 100 láb/percre csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "A gravitációs gyorsulás …",
        "answers": [
            {
                "text": "mértékegysége kg ∙ m/s2",
                "correct": false
            },
            {
                "text": "a testnek a gyorsító erővel szemben kifejtett ellenállása.",
                "correct": false
            },
            {
                "text": "az erő, mellyel a Föld vonzza a testet.",
                "correct": false
            },
            {
                "text": "a szabadon eső test gyorsulása.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "A kg · m/s2 melyik mértékegységnek felel meg?",
        "answers": [
            {
                "text": "Joule",
                "correct": false
            },
            {
                "text": "Watt",
                "correct": false
            },
            {
                "text": "Newton",
                "correct": true
            },
            {
                "text": "Pascal",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Az indukált ellenállás a szárnykarcsúság növekedésével nő.",
                "correct": false
            },
            {
                "text": "Az indukált ellenállás jelentős nagy sebességű repülőgépek esetén.",
                "correct": false
            },
            {
                "text": "Az indukált ellenállás független a felhajtóerő-tényezőtől.",
                "correct": false
            },
            {
                "text": "Az indukált ellenállás-tényező független a sebességtől.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép hossztengelye és a szárnyprofil húrja közötti szög …",
        "answers": [
            {
                "text": "az állásszög.",
                "correct": false
            },
            {
                "text": "a beállítási szög.",
                "correct": true
            },
            {
                "text": "a pályahajlási szög.",
                "correct": false
            },
            {
                "text": "a bólintási szög.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgépnek a szárny aszimmetrikus átesése során kialakuló stabil sebességű ferde törzshelyzetű orsózó, merülő mozgását …",
        "answers": [
            {
                "text": "zuhanóspirálnak nevezik.",
                "correct": false
            },
            {
                "text": "holland orsónak nevezik.",
                "correct": false
            },
            {
                "text": "dugóhúzónak nevezik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A szárnyprofil polárisa olyan görbe, mely …",
        "answers": [
            {
                "text": "a felhajtóerő- és ellenállás-tényező között teremt kapcsolatot.",
                "correct": true
            },
            {
                "text": "a felhajtóerő-tényező és az állásszög között teremt kapcsolatot.",
                "correct": false
            },
            {
                "text": "a felhajtóerő-tényező és az eredő kereszttengelyre vett nyomaték között teremt kapcsolatot.",
                "correct": false
            },
            {
                "text": "a szükséges illetve rendelkezésre álló teljesítmény és a vízszintes repülési sebesség között teremt kapcsolatot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy testet állandósult áramlásba helyezünk és az áramló levegő sűrűségét a negyedére csökkentjük, akkor a test légellenállása …",
        "answers": [
            {
                "text": "tizenhatodára csökken.",
                "correct": false
            },
            {
                "text": "negyedére csökken.",
                "correct": true
            },
            {
                "text": "felére csökken.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A NEL nem veszi figyelembe a levegő páratartalmát.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy szárny beállítási szöge 4,5°, és egyenletes sebességű emelkedésben állásszöge 8,5°, valamint a repülőgép bólintási szöge 7°, akkor mekkora a pályahajlási szög az emelkedés során?",
        "answers": [
            {
                "text": "11,5°",
                "correct": false
            },
            {
                "text": "3°",
                "correct": true
            },
            {
                "text": "8,5°",
                "correct": false
            },
            {
                "text": "4°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az állásszög nem más, mint … által bezárt szög.",
        "answers": [
            {
                "text": "a szárnyprofil húrja és az áramló levegő iránya",
                "correct": true
            },
            {
                "text": "a hossztengely és a szárnyprofil húrja",
                "correct": false
            },
            {
                "text": "a hossztengely és az áramló levegő iránya",
                "correct": false
            },
            {
                "text": "a szárnyprofil húrja és középvonala",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "Melyik egyenlőség igaz?",
        "answers": [
            {
                "text": "ρ ∙ V = m",
                "correct": true
            },
            {
                "text": "ρ = G / V",
                "correct": false
            },
            {
                "text": "ρ = V / G",
                "correct": false
            },
            {
                "text": "V ∙ m = ρ",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "A kitüntetett (egyensúlyi) erőrendszerek jellemzője, hogy …",
        "answers": [
            {
                "text": "hatásukra a nyugvó test továbbra is nyugalomban marad.",
                "correct": true
            },
            {
                "text": "azokat vonal menti erők alkotják.",
                "correct": false
            },
            {
                "text": "azokat felület menti erők alkotják.",
                "correct": false
            },
            {
                "text": "azokat felület menti és térben megoszló erők összessége alkotja.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A megközelítési sebességet tartva kitérített fékszárnnyal …",
        "answers": [
            {
                "text": "nő a kritikus állásszög.",
                "correct": false
            },
            {
                "text": "csökken a légellenállás.",
                "correct": false
            },
            {
                "text": "a repülőgép nagyobb horizonthelyzetben esik át.",
                "correct": false
            },
            {
                "text": "meredekebb siklószöget érhetünk el.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz egyenes vonalú vízszintes repüléskor arra a sebességre, melynél a légellenállás minimális?",
        "answers": [
            {
                "text": "Ezen a sebességen a káros ellenállás nagyobb, mint az indukált ellenállás.",
                "correct": false
            },
            {
                "text": "Az felhajtóerő és az ellenállás hányadosa minimális.",
                "correct": false
            },
            {
                "text": "Ezen a sebességen tudjuk biztosítani a legkisebb süllyedési szöget siklás esetén.",
                "correct": true
            },
            {
                "text": "Ezen a sebességen tudjuk maximalizálni a levegőben tölthető időt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A szárny elemi szelvényeinek húrhossza és a keresztten-gelyhez viszonyított pozíciója minden esetben azonos.",
                "correct": false
            },
            {
                "text": "A nyomásközéppont a normál repülési helyzeteknek meg-felelő állásszögek esetén az állásszög növekedésével az AC aerodinamikai középpont felé tart.",
                "correct": true
            },
            {
                "text": "A KAH a szárny belépőélétől számítva a húr 25%-ban található.",
                "correct": false
            },
            {
                "text": "Az aerodinamikailag egyenértékű szárny húrhossza az aerodinamikai tengely.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "… egyaránt az átesési sebesség növekedése irányába hatnak.",
        "answers": [
            {
                "text": "Alacsonyabb repülősúly, kisebb bedöntés a forduló során, kisebb fékszárnykitérítés",
                "correct": false
            },
            {
                "text": "Nagyobb terhelési többes a forduló során, mellső súlyponthelyzet, szándékos átesés során alacsonyabb teljesítménybeállítás alkalmazása",
                "correct": true
            },
            {
                "text": "Nagyobb repülősúly, nagyobb fékszárnykitérítés, mellső súlyponthelyzet",
                "correct": false
            },
            {
                "text": "Nagyobb bedöntés a forduló során, szándékos átesés során nagyobb teljesítménybeállítás alkalmazása, hátsó súlyponthelyzet",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik helyzetben fordulhat elő, hogy a repülőgépet a magassági kormány teljes kitérítése esetén sem tudjuk kilebegtetni?",
        "answers": [
            {
                "text": "Szélsőséges hátsó súlyponthelyzet esetén.",
                "correct": false
            },
            {
                "text": "Szélsőséges mellső súlyponthelyzet esetén.",
                "correct": true
            },
            {
                "text": "Akkor, ha a súlypont a semleges pont mögött van.",
                "correct": false
            },
            {
                "text": "Akkor, ha a súlypont a semleges pontban van.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A kabinból nézve az óramutató irányával megegyező irányba forgó légcsavar esetén a nekifutás kezdetén a felszállóteljesítmény ráadásakor milyen következménye van a légcsavar ferde megfúvásának?",
        "answers": [
            {
                "text": "Legyezőnyomaték balra.",
                "correct": true
            },
            {
                "text": "Legyezőnyomaték jobbra.",
                "correct": false
            },
            {
                "text": "Orsózónyomaték balra.",
                "correct": false
            },
            {
                "text": "Orsózónyomaték jobbra.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgép egy állásszögnövelő széllökés után a repülőgép-vezető beavatkozása nélkül egyensúlyi helyzete körül állandó amplitúdóval és lengésidővel lengéseket folytat, akkor a repülőgép stabilitása …",
        "answers": [
            {
                "text": "statikusan instabil és dinamikusan közömbös.",
                "correct": false
            },
            {
                "text": "statikusan stabil és dinamikusan instabil.",
                "correct": false
            },
            {
                "text": "statikusan instabil és dinamikusan stabil.",
                "correct": false
            },
            {
                "text": "statikusan stabil és dinamikusan közömbös.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A légcsavar hatásfoka …",
        "answers": [
            {
                "text": "a szükséges teljesítménynek és a motor effektív teljesítményének a hányadosa.",
                "correct": false
            },
            {
                "text": "a motor effektív teljesítményének és szükséges teljesítménynek a hányadosa.",
                "correct": false
            },
            {
                "text": "a rendelkezésre álló teljesítménynek és a motor effektív teljesítményének a hányadosa.",
                "correct": true
            },
            {
                "text": "a motor effektív teljesítményének és a rendelkezésre álló teljesítménynek a hányadosa.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A repülőgép súlypontvándorlásának …",
        "answers": [
            {
                "text": "hátsó határa a megengedhető minimális stabilitás.",
                "correct": true
            },
            {
                "text": "hátsó határa a kormányozhatóság leromlásának megengedhető határa.",
                "correct": false
            },
            {
                "text": "határa a semleges pont.",
                "correct": false
            },
            {
                "text": "mellső határa a semleges pont.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Mikor a legkisebb a légcsavar hasznos teljesítménye?",
        "answers": [
            {
                "text": "A legnagyobb elérhető vízszintes sebességen.",
                "correct": false
            },
            {
                "text": "Ha repülés közben minimálisra állítjuk a teljesítményt.",
                "correct": false
            },
            {
                "text": "Az átesési sebességen.",
                "correct": false
            },
            {
                "text": "A repülőgép álló helyzetében.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy ívelt profil felhajtóerő-tényezőjének változását (y-tengely) az állásszögváltozás (x-tengely) függvényében vizsgáljuk, akkor az így kapott görbe az y-tengelyt …",
        "answers": [
            {
                "text": "pozitív tartományban metszi.",
                "correct": true
            },
            {
                "text": "a negatív tartományban metszi.",
                "correct": false
            },
            {
                "text": "nem metszi.",
                "correct": false
            },
            {
                "text": "az origóban metszi.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Minden repülőgép esetében súlypontján (tömegközéppontján) …",
        "answers": [
            {
                "text": "átmegy a vonóerő, a felhajtóerő és a súlyerő irányvektora.",
                "correct": false
            },
            {
                "text": "átmegy a felhajtóerő, a légellenállás és a súlyerő irányvektora.",
                "correct": false
            },
            {
                "text": "átmegy a vonóerő, a felhajtóerő, a légellenállás és a súlyerő irányvektora.",
                "correct": false
            },
            {
                "text": "azt a pontot értjük, ahol összes tömegét egy pontban lévőnek tételezzük fel.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "A test tömegének, a nehézségi gyorsulásnak és a test emelési magasságának szorzataként megkapjuk a test …",
        "answers": [
            {
                "text": "helyzeti és mozgási energiájának összegét.",
                "correct": false
            },
            {
                "text": "helyzeti energiáját.",
                "correct": true
            },
            {
                "text": "mozgási energiáját.",
                "correct": false
            },
            {
                "text": "gyorsulását.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A légcsavarszárny pályairányú sebessége …",
        "answers": [
            {
                "text": "a lapelemek fogástengelytől mért távolságával fordított arányban növekszik.",
                "correct": false
            },
            {
                "text": "a lapelemek fogástengelytől mért távolságával egyenes arányban növekszik.",
                "correct": false
            },
            {
                "text": "minden lapelem esetében változatlan.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A száraz levegő sűrűsége nagyobb.",
                "correct": true
            },
            {
                "text": "A nedves levegő sűrűsége nagyobb.",
                "correct": false
            },
            {
                "text": "A levegő sűrűségét a páratartalom nem befolyásolja.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Az aerodinamikai centrum …",
        "answers": [
            {
                "text": "a szárny középvonalának 25 %-ában helyezkedik el.",
                "correct": false
            },
            {
                "text": "helyét úgy kapjuk meg, hogy a szárny tőhúrjához hozzáadjuk a szárnyvég húrhosszát, míg a szárnyvég húrjához a szárnytő húrhosszát, majd az így kapott pontokat egyetlen egyenessel összekötjük. Az AC ennek az egyenesnek és a középvonalnak a metszéspontja.",
                "correct": false
            },
            {
                "text": "a szárnytőben található profil húrjának mellső 1/4-ében helyezkedik el.",
                "correct": false
            },
            {
                "text": "jellemzője, hogy a felhajtóerő e pontra vett nyomatéka az állásszög függvényében nem változik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "Faroknehéz repülőgép trimelésekor a kormánylap felfelé tér ki.",
                "correct": false
            },
            {
                "text": "Fejnehéz repülőgép trimelésekor a trimlap lefelé tér ki.",
                "correct": true
            },
            {
                "text": "Fejnehéz repülőgép trimelése esetén a kormánylap lefelé tér ki.",
                "correct": false
            },
            {
                "text": "Faroknehéz repülőgép trimelése esetén a trimlap lefelé tér ki.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy statikusan stabil repülőgép hossznyomatéki egyensúlyában változás történik, például kormánykitérítés vagy széllökés hatására, akkor a vízszintes irányfelületen …",
        "answers": [
            {
                "text": "nem keletkezik nyomaték, így visszaáll a nyomatéki egyensúly.",
                "correct": false
            },
            {
                "text": "ugyanakkora nyomaték keletkezik, mint a szárnyon. Ez hozza létre a nyomatéki egyensúlyt.",
                "correct": false
            },
            {
                "text": "nagyobb nyomaték keletkezik, mint a szárnyon, mely a nyomatéki egyensúly visszaállításának irányába hat.",
                "correct": true
            },
            {
                "text": "kisebb nyomaték keletkezik, mint a szárnyon, mely a nyomatéki egyensúly visszaállításának irányába hat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Fékszárny használatakor …",
        "answers": [
            {
                "text": "kisebb állásszögön esik át a repülőgép és az átesési sebesség alacsonyabb lesz.",
                "correct": true
            },
            {
                "text": "nagyobb állásszögön esik át a repülőgép és az átesési sebesség magasabb lesz.",
                "correct": false
            },
            {
                "text": "nagyobb állásszögön esik át a repülőgép és az átesési sebesség alacsonyabb lesz.",
                "correct": false
            },
            {
                "text": "kisebb állásszögön esik át a repülőgép és az átesési sebesség magasabb lesz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egy testet állandósult áramlásba helyezünk és az áramló levegő sebessége a négyszeresére nő, akkor a test légellenállása …",
        "answers": [
            {
                "text": "tizenhatszorosára nő.",
                "correct": true
            },
            {
                "text": "nem változik.",
                "correct": false
            },
            {
                "text": "kétszeresére nő.",
                "correct": false
            },
            {
                "text": "négyszeresére nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Az alábbiak közül melyik mértékegység használatos nyomás kifejezésére?",
        "answers": [
            {
                "text": "N · m",
                "correct": false
            },
            {
                "text": "m/s2",
                "correct": false
            },
            {
                "text": "kg · m/s2",
                "correct": false
            },
            {
                "text": "N/m2",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Vgazd sebességen …",
        "answers": [
            {
                "text": "teszi meg a repülőgép a legnagyobb föld feletti távolságot siklásban.",
                "correct": false
            },
            {
                "text": "az időegységre jutó tüzelőanyag-fogyasztást minimalizáljuk.",
                "correct": true
            },
            {
                "text": "maximális a repülőgép hatótávolsága.",
                "correct": false
            },
            {
                "text": "a repülőgép Y/X hányadosa maximális.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Egy repülőgép sebessége egyenes vonalú vízszintes repülésben kétszeresére növekszik. A felhajtóerő-tényező ekkor …",
        "answers": [
            {
                "text": "a négyszeresére nő.",
                "correct": false
            },
            {
                "text": "a kétszeresére nő.",
                "correct": false
            },
            {
                "text": "a felére csökken.",
                "correct": false
            },
            {
                "text": "a negyedére csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha egyenes vonalú egyenletes sebességű vízszintes repülésben a repülőgép súlypontja a szárnyon kialakuló nyomásközéppont mögött van, akkor a vízszintes irányfelület …",
        "answers": [
            {
                "text": "terhelt, és a rajta keletkező légerő felfelé mutat.",
                "correct": true
            },
            {
                "text": "terheletlen.",
                "correct": false
            },
            {
                "text": "terhelt, és a rajta keletkező légerő lefelé mutat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "A forduló során …",
        "answers": [
            {
                "text": "a repülőgép kifelé csúszásakor az eredő erő a forduló középpontja felé mutat.",
                "correct": false
            },
            {
                "text": "csúszásmentes fordulóban a felhajtóerő, a centrifugális erő és a súlyerő eredője zérus.",
                "correct": true
            },
            {
                "text": "a felhajtóerő a súlyerővel tart egyensúlyt.",
                "correct": false
            },
            {
                "text": "a centripetális erőt a felhajtóerő függőleges komponense biztosítja.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Az erő …",
        "answers": [
            {
                "text": "nem mást, mint a gravitációs gyorsulás.",
                "correct": false
            },
            {
                "text": "a test tehetetlenségének mértéke.",
                "correct": false
            },
            {
                "text": "az a hatás, amely egy test mozgásállapotát irány vagy nagyság szerint, vagy a test alakját megváltoztatja.",
                "correct": true
            },
            {
                "text": "munkavégző képesség.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "LÉGKÖR",
        "question": "A NEL szerint mekkora a légnyomás 5500 m magasságban?",
        "answers": [
            {
                "text": "kb. 500 hPa.",
                "correct": true
            },
            {
                "text": "kb. 600 hPa.",
                "correct": false
            },
            {
                "text": "kb. 800 hPa.",
                "correct": false
            },
            {
                "text": "Pontosan nem lehet megmondani, függ a hőmérséklettől is.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Minden repülőgép esetében a rá ható erők … a repülőgép súlypontjában (tömegközéppontjában) támad.",
        "answers": [
            {
                "text": "mindegyike, a felhajtóerő, a légellenállás, a vonóerő és a súlyerő",
                "correct": false
            },
            {
                "text": "közül a felhajtóerő, a légellenállás és a súlyerő",
                "correct": false
            },
            {
                "text": "közül a súlyerő",
                "correct": true
            },
            {
                "text": "közül a felhajtóerő és a súlyerő",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Ha a repülőgép hossznyomatékainak összege negatív, akkor …",
        "answers": [
            {
                "text": "kereszttengelye körüli nyomatéka fejnehéz.",
                "correct": true
            },
            {
                "text": "kereszttengelye körüli nyomatéka faroknehéz.",
                "correct": false
            },
            {
                "text": "hossztengelye körüli nyomatéka faroknehéz.",
                "correct": false
            },
            {
                "text": "hossztengelye körüli nyomatéka fejnehéz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "MECHANIKA",
        "question": "Egy kétkarú emelő bal oldalának forgatónyomatéka 40 Nm, jobb oldalának forgatónyomatéka pedig -16 Nm. A forgásponttól mekkora távolságban kell működtetnünk az emelő jobb oldalán egy 4 N-os erőt ahhoz, hogy az emelő egyensúlyban legyen?",
        "answers": [
            {
                "text": "6 m-re.",
                "correct": true
            },
            {
                "text": "4 m-re.",
                "correct": false
            },
            {
                "text": "24 m-re.",
                "correct": false
            },
            {
                "text": "12 m-re.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "AERODINAMIKA",
        "question": "Melyik állítás helyes?",
        "answers": [
            {
                "text": "Az indukált állásszög a végtelen terjedtségűnek tekintett szárny esetében nyer értelmet.",
                "correct": false
            },
            {
                "text": "A véges terjedtségű szárny effektív állásszöge nem más, mint a geometriai és az indukált állásszög különbsége.",
                "correct": true
            },
            {
                "text": "A véges terjedtségű szárny indukált állásszöge az effektív állásszög és a geometriai állásszög összege.",
                "correct": false
            },
            {
                "text": "A véges terjedtségű szárny effektív állásszögének a geometriai állásszöget tekintjük.",
                "correct": false
            }
        ],
        "hint": ""
    },
/*Repülési gyakorlatok és eljárások.doc */
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "… a felhajtóerő a megnövekedett állásszög miatt nő meg ugrásszerűen.",
        "answers": [
            {
                "text": "Szemből támadó vízszintes széllökés esetén",
                "correct": false
            },
            {
                "text": "Hátulról támadó vízszintes széllökés esetén",
                "correct": false
            },
            {
                "text": "Intenzív feláramlásba belerepülve",
                "correct": true
            },
            {
                "text": "Intenzív leáramlásba belerepülve",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a fékszárny asszimmetrikus helyzetben beragad, …",
        "answers": [
            {
                "text": "a leszálláskor a lehető legjobban ki kell lebegtetni a repülőgépet, hogy minél alacsonyabb sebességen fogjon talajt.",
                "correct": false
            },
            {
                "text": "nem szabad kilebegtetni a repülőgépet, nagyobb sebességgel kell földet érni.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan kell helyesen beállítani a légcsavarszabályzó kart motorindításkor?",
        "answers": [
            {
                "text": "Köztes állásban.",
                "correct": false
            },
            {
                "text": "Teljesen előre tolt helyzetben (kis szögre állítv.",
                "correct": true
            },
            {
                "text": "Teljesen hátra húzott helyzetben (nagy szögre állítv.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Melyik állítás igaz az állandó fordulatszámú légcsavar üzemelésére?",
        "answers": [
            {
                "text": "A fordulatszám csökken a sebesség növekedésével.",
                "correct": false
            },
            {
                "text": "A légcsavarállító berendezés állandó sebességen tartja a repülőgépet.",
                "correct": false
            },
            {
                "text": "A motor szívótérnyomásának felhasználásával működő légcsavarállító berendezés tartja a kiválasztott fordulatszámot.",
                "correct": false
            },
            {
                "text": "A lapátok beállítási szöge a sebesség növekedésével növekszik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Amikor a repülőgép-vezető akaratlanul IMC-be kerül, és a műszerek segítségével kell kivezetnie a repülőgépet VMC körülmények közé, …",
        "answers": [
            {
                "text": "tilos a kabinból kitekintve vizuális referenciákat keresni a térbeli tájékozódáshoz, mert könnyen érzékcsalódás áldozata lehet.",
                "correct": true
            },
            {
                "text": "a kabinból kitekintve próbáljon vizuális referenciákat keresni a térbeli tájékozódáshoz. Ha ezt nem teszi, könnyen érzékcsalódás áldozata lehet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Melyik állítás helyes?",
        "answers": [
            {
                "text": "Minden repülőgép úgy van tervezve, hogy nem tudjon dugóhúzóba esni.",
                "correct": false
            },
            {
                "text": "Dugóhúzóban a repülőgép sebessége nem állandósul, folyamatosan növekszik.",
                "correct": false
            },
            {
                "text": "A dugóhúzó akkor következik be, amikor a repülőgépszárny átesése a szárnytőben következik be.",
                "correct": false
            },
            {
                "text": "A dugóhúzó megszüntetésénél a csűrőket semleges helyzetben kell tartani.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mikor kelt nagyobb légellenállást a légcsavar motorleállás esetén?",
        "answers": [
            {
                "text": "A szélkerékmódban forgó légcsavar esetén nagyobb ellenállás keletkezik, mint álló légcsavar esetén.",
                "correct": true
            },
            {
                "text": "A repülőgép légellenállását nem befolyásolja, hogy ilyenkor szélkerékmódba kerül-e a légcsavar vagy sem.",
                "correct": false
            },
            {
                "text": "A sebességétől függ, hogy az álló vagy a szélkerékmódban forgó légcsavar termel-e több ellenállást.",
                "correct": false
            },
            {
                "text": "Az álló légcsavar nagyobb légellenállást termel, mint amikor a levegő szélkerékmódban forgatja a légcsavart.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha csúcsra szegényítés után a keverékszabályzóval tovább szegényítünk, akkor …",
        "answers": [
            {
                "text": "a fordulatszám és a kipufugógáz-hőmérséklet növekedni fog.",
                "correct": false
            },
            {
                "text": "a fordulatszám növekedni fog és a kipufugógáz-hőmérséklet csökkenni fog.",
                "correct": false
            },
            {
                "text": "a fordulatszám csökkenni fog és a kipufugógáz-hőmérséklet növekedni fog",
                "correct": false
            },
            {
                "text": "a fordulatszám és a kipufugógáz-hőmérséklet csökkenni fog.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A vitorlaállásba állított légcsavar esetén …",
        "answers": [
            {
                "text": "a légcsavarlapátok légellenállása minimális lesz.",
                "correct": true
            },
            {
                "text": "a szélkerékhatás eredményeként pont akkora fordulatszám jön létre, hogy a motor olajozása biztosított legyen.",
                "correct": false
            },
            {
                "text": "a szélkerékhatás maximális.",
                "correct": false
            },
            {
                "text": "a szélkerékhatás egy optimális fordulatszámot hoz létre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A repülőgépszárny által keltett turbulencia annál erősebb és veszélyesebb a közelében közlekedő repülőgépekre, minél … a turbulenciát keltő repülőgép tömege és minél … halad.",
        "answers": [
            {
                "text": "kisebb – gyorsabban",
                "correct": false
            },
            {
                "text": "nagyobb – lassabban",
                "correct": true
            },
            {
                "text": "kisebb – lassabban",
                "correct": false
            },
            {
                "text": "nagyobb – gyorsabban",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Nagy állásszögű repülés során mikor kell számítani a p-faktor nyomatékra?",
        "answers": [
            {
                "text": "A kabinból nézve az óramutató járásával ellenkező irányba (balra) forgó légcsavar esetén.",
                "correct": false
            },
            {
                "text": "A kabinból nézve az óramutató járásával megegyező irányba (jobbra) forgó légcsavar esetén.",
                "correct": false
            },
            {
                "text": "Amikor a repülőgép mozgása sorána a légcsavar kitérül forgási síkjából.",
                "correct": false
            },
            {
                "text": "Jobbra és balra forgó légcsavar esetén egyaránt számítanunk kell erre a nyomatékra.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy repülőgép 30°-os bedöntésű szabályos vízszintes fordulót végez 95 csomós, majd 110 csomós sebességgel. Melyik állítás igaz?",
        "answers": [
            {
                "text": "A nagyobb sebesség esetén nagyobb lesz a terhelési többes.",
                "correct": false
            },
            {
                "text": "A felhajtóerő-tényező kisebb lesz alacsonyabb sebességen.",
                "correct": false
            },
            {
                "text": "A fordulósugár nagyobb lesz nagyobb sebességen.",
                "correct": true
            },
            {
                "text": "A felhajtóerő kisebb lesz alacsonyabb sebességen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hány százalékkal nő az átesési sebesség a 60°-os bedöntésű szabályos fordulóban?",
        "answers": [
            {
                "text": "19%-kal.",
                "correct": false
            },
            {
                "text": "32%-kal.",
                "correct": false
            },
            {
                "text": "51%-kal.",
                "correct": false
            },
            {
                "text": "41%-kal.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Balra csűréskor a repülőgép … irányú orsózó mozgást végez, mely egyben … irányú legyező mozgással párosul.",
        "answers": [
            {
                "text": "bal – bal",
                "correct": false
            },
            {
                "text": "jobb – bal",
                "correct": false
            },
            {
                "text": "jobb – jobb",
                "correct": false
            },
            {
                "text": "bal – jobb",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi a teendő, ha a felszállás előtti motorpróba során a kétkörös gyújtásról az egyik gyújtáskörre kapcsolva fordulatszámesést tapasztalunk?",
        "answers": [
            {
                "text": "Természetes következménye a fordulatszámesés annak, ha a gyújtást csak az egyik gyújtáskör biztosítja, amennyiben a fordulatszámesés a gyártó által előírt mértéket nem haladja meg.",
                "correct": true
            },
            {
                "text": "Ilyenkor a gyújtás kritikus meghibásodására kell gyanakodni és a felszállást el kell halasztani.",
                "correct": false
            },
            {
                "text": "Ez a gyújtógyertya enyhe szennyeződésének következménye, melyet rövid ideig magas fordulatszámon történő motorjáratással esetleg meg lehet szűntetni. Ilyenkor a légiüzemeltetési utasítás és a repülőgép üzembentartójának rendelkezése szerint kell eljárni.",
                "correct": false
            },
            {
                "text": "Kisebb-nagyobb fordulatszámesés esetén a felszállást minden további teendő nélkül végre lehet hajtani.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Vízre végrehajtott kényszerleszállás esetén a mentőmellényeket …",
        "answers": [
            {
                "text": "a repülőgép elhagyása után kell felfújni.",
                "correct": true
            },
            {
                "text": "a repülőgép elhagyása előtt kell felfújni.",
                "correct": false
            },
            {
                "text": "a kilebegtetéskor kell felfújni.",
                "correct": false
            },
            {
                "text": "a süllyedés során kell felfújni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az oldalkormány jobbra történő belépésekor a repülőgép … irányú legyező mozgást végez, mely egyben … irányú orsózó mozgással párosul.",
        "answers": [
            {
                "text": "bal – bal",
                "correct": false
            },
            {
                "text": "jobb – jobb",
                "correct": true
            },
            {
                "text": "bal – jobb",
                "correct": false
            },
            {
                "text": "jobb – bal",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy 45°-os bedöntésű szabályos forduló során mekkora lesz a felhajtóerő, ha a repülőgép súlya 730 kg? (g = 9,81 m/s2)",
        "answers": [
            {
                "text": "8235,5 N",
                "correct": false
            },
            {
                "text": "7161,3 N",
                "correct": false
            },
            {
                "text": "10097,4 N",
                "correct": true
            },
            {
                "text": "14322,6 N",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a sodronyköteles kormánymozgatásnál kötélszakadás miatt az egyik irányban megszűnik az erőátvitel, akkor …",
        "answers": [
            {
                "text": "mindkét irányban működésképtelen lesz a kormány.",
                "correct": false
            },
            {
                "text": "a hibátlan oldalon még működni fog a kormány.",
                "correct": true
            },
            {
                "text": "a repülőgép vezethetetlenné válik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Motortűz esetén, ha sikerült megszüntetni a tüzet azáltal, hogy megszakítottuk a tüzelőanyag áramlását, …",
        "answers": [
            {
                "text": "a motort megpróbálhatjuk újraindítani. Ha beindul, folytathatjuk a repülést.",
                "correct": false
            },
            {
                "text": "a motort megpróbálhatjuk újraindítani. Ha beindul, elővigyázatossági leszállást kell végrehajtani.",
                "correct": false
            },
            {
                "text": "a motort tilos újraindítani, kényszerleszállást kell végrehajtani.",
                "correct": true
            },
            {
                "text": "a motort megpróbálhatjuk újraindítani. Ha beindul, kitérőrepülőtérre le kell szállni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Vízreszállás esetén mikor kell felvenni a mentőmellényeket?",
        "answers": [
            {
                "text": "A víz felett vezető útvonal repülése során mindvégig viselni kell.",
                "correct": false
            },
            {
                "text": "A kényszerhelyzet megállapításakor.",
                "correct": true
            },
            {
                "text": "A vízreszállás és a repülőgép elhagyása után.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mire vonatkozik a VLO sebesség?",
        "answers": [
            {
                "text": "Maximális megengedett sebesség kibocsátott futóművel.",
                "correct": false
            },
            {
                "text": "Maximális megengedett sebesség a fékszárny működtetésekor.",
                "correct": false
            },
            {
                "text": "Maximális megengedett sebesség a futómű működtetésekor.",
                "correct": true
            },
            {
                "text": "Maximális megengedett sebesség kitérített fékszárnnyal.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A TAS növelésével a föld feletti sebesség mindig növekszik függetlenül a szélsebesség irányától és nagyságától.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy függőleges széllökés okozta állásszög-változás nagyobb repülési sebességen … , és … felhajtóerő-növekedést és túlterhelést hoz létre.",
        "answers": [
            {
                "text": "nagyobb – nagyobb",
                "correct": false
            },
            {
                "text": "kisebb – kisebb",
                "correct": false
            },
            {
                "text": "nagyobb – kisebb",
                "correct": false
            },
            {
                "text": "kisebb – nagyobb",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az alábbiak közül mikor a legnagyobb a széleltérítés szöge …",
        "answers": [
            {
                "text": "Szt = 15°",
                "correct": false
            },
            {
                "text": "Szt = 64°",
                "correct": false
            },
            {
                "text": "Szt = 89°",
                "correct": true
            },
            {
                "text": "Szt = 138°",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi a következménye annak, ha a motor üzemelése közben a porlasztófűtést bekapcsoljuk?",
        "answers": [
            {
                "text": "Fordulatszám- és motorteljesítmény-csökkenés.",
                "correct": true
            },
            {
                "text": "Motorrázás, egyenetlen motorjárás és motorteljesítmény-csökkenés.",
                "correct": false
            },
            {
                "text": "Hengerfej-hőmérséklet növekedése és motorteljesítmény-növekedés.",
                "correct": false
            },
            {
                "text": "A motor teljesítménye nem változik, de fordulatszám-csökkenést tapasztalunk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Annak érdekében, hogy felszállásnál elkerüljük egy nagyobb leszálló repülőgép örvénysorának maradványait,",
        "answers": [
            {
                "text": "a pálya végéről kezdjük a nekifutást, hogy minél hamarabb elemelkedjünk.",
                "correct": false
            },
            {
                "text": "az elemelkedést jóval a nagyobb repülőgép földet érési pontján túl tervezzük.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy repülőgép egyenes vonalú egyenletes sebességű vízszintes repülésben halad, ahol a felhajtóerő-tényező értéke Cy=1. 1 fokos állásszögváltozás 0,095-tel változtatja meg a felhajtóerő-tényezőt. A repülőgép függőleges feláramlásba repül, mely során az állásszög 6 fokkal változik. Mekkora lesz ekkor a terhelési többes?",
        "answers": [
            {
                "text": "1.43",
                "correct": false
            },
            {
                "text": "6",
                "correct": false
            },
            {
                "text": "-1.95",
                "correct": false
            },
            {
                "text": "1.57",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a motor nem jár, a szívótérnyomás-mérő a … mutatja. A motor beindítása után alapjáraton a műszer …",
        "answers": [
            {
                "text": "QNH-t – a külső légnyomás fölé emelkedik.",
                "correct": false
            },
            {
                "text": "QFE-t – a külső légnyomás fölé emelkedik.",
                "correct": false
            },
            {
                "text": "QNH-t – visszaesik a külső légnyomás alá.",
                "correct": false
            },
            {
                "text": "QFE-t – visszaesik a külső légnyomás alá.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A repülőgép tankolása során a statikus kisülés megakadályozásához …",
        "answers": [
            {
                "text": "a repülőgépet kell leföldelni.",
                "correct": false
            },
            {
                "text": "a töltőállomást kell leföldelni.",
                "correct": false
            },
            {
                "text": "a repülőgépet és a leföldelt töltőállomást össze kell földelni.",
                "correct": true
            },
            {
                "text": "a repülőgépet és a töltőállomást le kell földelni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Milyen műszerrel ellenőrizzük a motorteljesítményt állandó fordulatszámú légcsavarral felszerelt repülőgépen?",
        "answers": [
            {
                "text": "Tüzelőanyagnyomás-mérővel.",
                "correct": false
            },
            {
                "text": "Fordulatszámmérővel.",
                "correct": false
            },
            {
                "text": "Szívótérnyomás-mérővel.",
                "correct": true
            },
            {
                "text": "Hengerfej-hőmérővel.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Utazórepülésből a magassági kormány húzásával rövid emelkedést végzünk minden egyéb beavatkozás nélkül. Hogyan reagál a légcsavarállásszög-szabályzó?",
        "answers": [
            {
                "text": "Növeli a lapátok beállítási szögét és csökkenti a fordulatszámot.",
                "correct": false
            },
            {
                "text": "Csökkenti a lapátok beállítási szögét és növeli a fordulatszámot.",
                "correct": false
            },
            {
                "text": "Növeli a lapátok beállítási szögét és megtartja a fordulatszámot.",
                "correct": false
            },
            {
                "text": "Csökkenti a lapátok beállítási szögét és megtartja a fordulatszámot.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A légcsavarszárny profiljának beállítási szöge mindig kisebb mint az állásszöge.",
                "correct": false
            },
            {
                "text": "A légcsavarszárny profiljának beállítási szöge mindig azonos az állásszögével.",
                "correct": false
            },
            {
                "text": "A légcsavarszárny profiljának beállítási szöge azonos állásszögével, ha az effektív emelkedési szöge nulla.",
                "correct": true
            },
            {
                "text": "A légcsavarszárny profiljának beállítási szöge mindig nagyobb mint az állásszöge.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A viszkóz-aquaplanning …",
        "answers": [
            {
                "text": "blokkolással járó fékezéskor jön létre, és kialakulhat vékony vízrétegen is, amikor a súrlódás következtében a víz jelenléte ellenére is elegendő hő keletkezik ahhoz, hogy a gumi futófelülete felforrósodjon és nyúlóssá váljon.",
                "correct": false
            },
            {
                "text": "viszonylag nagy gurulósebességnél alakul ki olyan módon, hogy a sebesség növekedésével a feltorlódott víz nyomása eléri a repülőgép súlyát, amikor is a gumik felúsznak a vízfelületre.",
                "correct": false
            },
            {
                "text": "kialakulásához elég egy századmilliméter vastag vízréteg és egy finom felületű szilárd burkolatú pálya (például melyet a korábbi földet érések alkalmával letapadt gumiréteg tesz tükörsimává).",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Melyik az a sebességkorlátozás, melyet csak nyugodt időben léphetünk át?",
        "answers": [
            {
                "text": "Vno",
                "correct": true
            },
            {
                "text": "Vne",
                "correct": false
            },
            {
                "text": "Vfe",
                "correct": false
            },
            {
                "text": "Va",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A felszállásra használt pályairány 32-es. A szél 280°-ról fúj. Az iskolakör repülésénél … szélellentartást kell alkalmazni.",
        "answers": [
            {
                "text": "a rövidfalon és az alapfalon",
                "correct": false
            },
            {
                "text": "az alapfalon és a hosszúfalon",
                "correct": false
            },
            {
                "text": "felszálláskor, leszálláskor és a hosszúfalon",
                "correct": false
            },
            {
                "text": "mindvégig",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mikor kell C-módra kapcsolni az erre alkalmas transzpodert olyan repülőtéren, ahol nincs gurítóradar?",
        "answers": [
            {
                "text": "Motorindítás előtt.",
                "correct": false
            },
            {
                "text": "Motorindítás után.",
                "correct": false
            },
            {
                "text": "A pályára guruláskor.",
                "correct": true
            },
            {
                "text": "A nekifutás megkezdésekor.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Melyik állítás helyes?",
        "answers": [
            {
                "text": "Vízszintes repülésben és azonos sebességű fordulóban az állásszög nem különbözik.",
                "correct": false
            },
            {
                "text": "Vízszintes repülésben az állásszög nagyobb, mint azonos sebességű fordulóban.",
                "correct": false
            },
            {
                "text": "Vízszintes repülésben az állásszög kisebb, mint azonos sebességű fordulóban.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Farokkerekes repülőgép esetében a farokfutó elemelésekor …",
        "answers": [
            {
                "text": "a reakciónyomaték és a precesszió egy irányba, míg a ferde megfúvás okozta nyomaték ezekhez képest ellentétesen hat.",
                "correct": false
            },
            {
                "text": "mind a három légcsavar keltette nyomaték egy irányba hat.",
                "correct": true
            },
            {
                "text": "a precesszió és a ferde megfúvás okozta nyomaték egy irányba, míg a reakciónyomaték ezekhez képest ellentétesen hat.",
                "correct": false
            },
            {
                "text": "a reakció- és a ferde megfúvás okozta nyomaték egy irányba, míg a precesszió ezekhez képest ellentétesen hat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Emelkedés során szélnyírás következtében a hátszél hirtelen 6 csomóról tartósan 17 csomóra változik. Ha a repülőgép-vezető nem avatkozik be, akkor a repülőgép sebessége a szélnyírás hatására átmenetileg … fog, és miután az új helyzetben a repülőgép pályája stabilizálódik, az emelkedés szöge … lesz. A szélnyírás során fellépő terhelési többes ilyenkor … lesz.",
        "answers": [
            {
                "text": "növekedni – kisebb – n>1",
                "correct": false
            },
            {
                "text": "csökkenni – nagyobb – n<1",
                "correct": false
            },
            {
                "text": "csökkenni – kisebb – n<1",
                "correct": true
            },
            {
                "text": "növekedni – nagyobb – n>1",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi a teendő, ha a felszállás előtti motorpróba során az egyik gyújtáskörön enyhe motorrázást, egyenetlen motorjárást tapasztalunk?",
        "answers": [
            {
                "text": "Ha a légiüzemeltetési utasítás vagy a repülőgép üzemben tartója máshogy nem rendelkezik, a felszállást minden további teendő nélkül végre lehet hajtani.",
                "correct": false
            },
            {
                "text": "Ez a gyújtógyertya enyhe szennyeződése miatt is előfordulhat, melyet rövid ideig magas fordulatszámon történő motorjáratással esetleg meg lehet szűntetni. Ilyenkor a légiüzemeltetési utasítás és a repülőgép üzembentartójának rendelkezése szerint kell eljárni.",
                "correct": true
            },
            {
                "text": "Ilyenkor a gyújtás kritikus meghibásodására kell gyanakodni és a felszállást el kell halasztani.",
                "correct": false
            },
            {
                "text": "Természetes következménye a motorrázás annak, ha a gyújtást csak az egyik gyújtáskör biztosítja.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A szabályos forduló során a terhelési többes …, mint 1, és az átesési sebesség …, mint vízszintes repülés esetén.",
        "answers": [
            {
                "text": "nagyobb – kisebb",
                "correct": false
            },
            {
                "text": "kisebb – nagyobb",
                "correct": false
            },
            {
                "text": "kisebb – kisebb",
                "correct": false
            },
            {
                "text": "nagyobb – nagyobb",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan növelünk teljesítményt állandó fordulatszámú légcsavarral felszerelt repülőgépen?",
        "answers": [
            {
                "text": "Előre toljuk a fordulatszám-szabályzó kart.",
                "correct": false
            },
            {
                "text": "Egyszerre toljuk előre a szívótérnyomás kart és a fordulatszám-szabályzó kart.",
                "correct": false
            },
            {
                "text": "A fordulatszám növelése előtt növeljük a szívótérnyomás kart.",
                "correct": false
            },
            {
                "text": "A fordulatszám növelése után növeljük a szívótérnyomás kart.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Minél nagyobb fékszárny-beállítással lebegtetünk ki, annál kisebb állásszögön következik be az átesés.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": true
            },
            {
                "text": "Hamis.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy adott erejű vízszintes széllökés hatása annál kisebb, minél … a repülőgép sebessége és minél … a tömege.",
        "answers": [
            {
                "text": "nagyobb – nagyobb",
                "correct": true
            },
            {
                "text": "kisebb – kisebb",
                "correct": false
            },
            {
                "text": "nagyobb – kisebb",
                "correct": false
            },
            {
                "text": "kisebb – nagyobb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi az első teendő, ha repülés közben motortűz alakulna ki?",
        "answers": [
            {
                "text": "Süllyedésbe kell vinni a repülőgépet a kényszerleszálláshoz.",
                "correct": false
            },
            {
                "text": "Kényszerhelyzetet kell jelenteni rádión.",
                "correct": false
            },
            {
                "text": "A keverékszabályzóval és/vagy a tűzcsappal el kell venni a motortól a tüzelőanyagot, és süllyedésbe kell vinni a repülőgépet a kényszerleszálláshoz.",
                "correct": false
            },
            {
                "text": "Azt az eljárást kell követni, amit a gyártó által kiadott légiüzemeltetési utasítás előír.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha repülés közben motortűz alakul ki és sikerül azt megszüntetni …",
        "answers": [
            {
                "text": "meg kell próbálni fenntartani a vízszintes repülést.",
                "correct": false
            },
            {
                "text": "folytatni kell a megkezdett kényszerleszállást.",
                "correct": true
            },
            {
                "text": "meg kell kísérelni a motor újraindítását. Ha ez nem sikerül, folytatni kell a megkezdett kényszerleszállást.",
                "correct": false
            },
            {
                "text": "vészsüllyedést kell alkalmazni, hogy a tűz nehogy újra kialakuljon.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy repülőgép 45°-os bedöntésű szabályos vízszintes fordulót végez 90 csomós, majd 115 csomós sebességgel. Összehasonlítva a két repülési helyzetet, mi fog különbözni az alábbiak közül?",
        "answers": [
            {
                "text": "Csak az állásszög.",
                "correct": true
            },
            {
                "text": "Csak a terhelési többes.",
                "correct": false
            },
            {
                "text": "Csak az átesési sebesség.",
                "correct": false
            },
            {
                "text": "Az állásszög, a terhelési többes és az átesési sebesség.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi az első teendő, ha repülés közben azt tapasztaljuk, hogy a műszerfal mögül füst áramlik be kabinba?",
        "answers": [
            {
                "text": "Szellőztetni kell a kabint, hogy a mérgező gázok eltávozhassanak.",
                "correct": false
            },
            {
                "text": "Azonnal le kell állítani a gyújtást.",
                "correct": false
            },
            {
                "text": "Azonnal el kell zárni a tűzcsapot.",
                "correct": false
            },
            {
                "text": "A főkapcsolót, a kabinfűtést és a típustól függően az elektromos berendezések kapcsolóit kell lekapcsolni, mindezt olyan módon és sorrendben, ahogy azt a gyártó által kiadott légiüzemeltetési utasítás előírja.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy vízszintes bal forduló során az elfordulás- és csúszásjelző lapátja és a libella golyója is balra mozdul ki. A szabályos forduló vezetése érdekében …",
        "answers": [
            {
                "text": "csökkenteni kell a balra csűrést és jobbra lépni a pedált.",
                "correct": false
            },
            {
                "text": "növelni kell a bal bedöntést.",
                "correct": false
            },
            {
                "text": "balra kell lépni a pedált.",
                "correct": true
            },
            {
                "text": "a repülőgép-vezető nem tehet semmit. Ilyenkor a merev trim helytelen beállítására következtetünk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A normál bedöntésű forduló során a függőleges vezérsíkon keletkező légerő …",
        "answers": [
            {
                "text": "hatására a repülőgép emeli az orrát. Részben ez magyarázza a magassági kormány használatának szükségét.",
                "correct": false
            },
            {
                "text": "a repülőgép orrát a forduló ellen akarja fordítani. Részben ez magyarázza az oldalkormány kitérítésének szükségét.",
                "correct": true
            },
            {
                "text": "hatására a repülőgép leadja az orrát Részben ez magyarázza a magassági kormány használatának szükségét.",
                "correct": false
            },
            {
                "text": "a repülőgép orrát a forduló irányába akarja fordítani. Részben ez magyarázza az oldalkormány kitérítésének szükségét.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha repülés közben a motor leáll, az első legfontosabb teendő, hogy …",
        "answers": [
            {
                "text": "kényszerhelyzetet jelentsünk rádión.",
                "correct": false
            },
            {
                "text": "biztosítsuk a repülőgép legjobb siklásához tartozó sebességet.",
                "correct": true
            },
            {
                "text": "kényszerleszállásra alkalmas terepet keressünk.",
                "correct": false
            },
            {
                "text": "segítséget kérjünk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha szárnytűz vagy motortűz oltása érdekében vészsüllyedést alkalmazunk, …",
        "answers": [
            {
                "text": "a Vno sebességet nem léphetjük át.",
                "correct": false
            },
            {
                "text": "a Vne sebességet nem léphetjük át.",
                "correct": true
            },
            {
                "text": "a kényszerhelyzet miatt a Vne sebességet kivételesen átléphetjük.",
                "correct": false
            },
            {
                "text": "a Va sebességet nem léphetjük át",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A szemből támadó vízszintes széllökés esetén fellépő túlterhelés annál nagyobb, minél … a repülőgép önsebessége és minél … a széllökés.",
        "answers": [
            {
                "text": "kisebb – kisebb",
                "correct": false
            },
            {
                "text": "kisebb – nagyobb",
                "correct": true
            },
            {
                "text": "nagyobb – nagyobb",
                "correct": false
            },
            {
                "text": "nagyobb – kisebb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Milyen hatásai vannak a fékszárny behúzásának a kezdeti emelkedés során?",
        "answers": [
            {
                "text": "A repülőgép hirtelen megül, és ezt követően jobban fog emelkedni.",
                "correct": true
            },
            {
                "text": "A repülőgép hirtelen emelkedésbe kezd, és ezt követően jobban fog emelkedni.",
                "correct": false
            },
            {
                "text": "A repülőgép hirtelen emelkedésbe kezd, és ezt követően rosszabbul fog emelkedni.",
                "correct": false
            },
            {
                "text": "A repülőgép hirtelen megül, és ezt követően rosszabbul fog emelkedni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A felszállás során mely esetekben kritikus a szárny belépőélének jegesedése?",
        "answers": [
            {
                "text": "A felszállás teljes folyamatára kritikus hatással van a jegesedés.",
                "correct": true
            },
            {
                "text": "A kezdeti emelkedés során.",
                "correct": false
            },
            {
                "text": "Az orrfutó elemelésekor.",
                "correct": false
            },
            {
                "text": "A nekifutás során.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Adott fordulósugár esetén … sebességhez … bedöntés tartozik",
        "answers": [
            {
                "text": "nagyobb – kisebb",
                "correct": false
            },
            {
                "text": "nagyobb – nagyobb",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A magasság növekedésével egy adott bedöntésű fordulóhoz tartozó átesési sebesség IAS-ban …",
        "answers": [
            {
                "text": "nagyobb.",
                "correct": false
            },
            {
                "text": "kisebb.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ahhoz, hogy a tüzelőanyag hűtő hatása érvényesülhessen, a tökéleteshez képest mindig … keveréket kell használnunk.",
        "answers": [
            {
                "text": "szegényebb.",
                "correct": false
            },
            {
                "text": "dúsabb.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A szabályos vízszintes fordulóban a terhelési többes … szám és értéke a bedöntés szögével …",
        "answers": [
            {
                "text": "mindig 1-nél kisebb – csökken.",
                "correct": false
            },
            {
                "text": "mindig 1-nél nagyobb – nő.",
                "correct": true
            },
            {
                "text": "lehet 1-nél nagyobb vagy kisebb – nő.",
                "correct": false
            },
            {
                "text": "lehet 1-nél nagyobb vagy kisebb – csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan indítjuk be a repülőgép belsőégésű négyütemű dugattyús motorját?",
        "answers": [
            {
                "text": "Indítózás előtt a primer befecskendezőt a kar lassú, szakaszos meghúzásával teleszívjuk tüzelőanyaggal és a hengerbe pumpáljuk a teljes tüzelőanyagot. Majd a primer kar rögzítése után, kis gázzal megkezdjük az indítózást.",
                "correct": false
            },
            {
                "text": "Azt az eljárást követjük, amit a gyártó által kiadott légiüzemeltetési utasítás előír.",
                "correct": true
            },
            {
                "text": "A szivatót a motor hőmérsékletétől függően beállítjuk és kis gázzal megkezdjük az indítózást.",
                "correct": false
            },
            {
                "text": "Teleszívjuk a primer befecskendezőt és alapgázon az indítózás megkezdése után, indítózás közben nyomjuk be a hengerekbe a felszívott tüzelőanyagot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A nekifutás során mikor kell számítanunk a légcsavar pörgettyűnyomatékának hatására?",
        "answers": [
            {
                "text": "A gáz ráadásakor.",
                "correct": false
            },
            {
                "text": "A nekifutás alatt mindvégig.",
                "correct": false
            },
            {
                "text": "Az orrfutó elemelésekor.",
                "correct": true
            },
            {
                "text": "Amikor a nekifutás során a repülőgép már egy bizonyos sebességre szert tett.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Annak érdekében, hogy leszállásnál elkerüljük egy nagyobb felszálló repülőgép örvénysorának maradványait,",
        "answers": [
            {
                "text": "a földet érési pontot lehetőleg jóval a nagyobb repülőgép elemelkedési pontján túl tervezzük.",
                "correct": false
            },
            {
                "text": "a földet érési pontot lehetőleg jóval a nagyobb repülőgép elemelkedési pontja elé tervezzük.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A dinamikus aquaplanning …",
        "answers": [
            {
                "text": "kialakulásához elég egy századmilliméter vastag vízréteg és egy finom felületű szilárd burkolatú pálya (például melyet a korábbi földet érések alkalmával letapadt gumiréteg tesz tükörsimává).",
                "correct": false
            },
            {
                "text": "viszonylag nagy gurulósebességnél alakul ki olyan módon, hogy a sebesség növekedésével a feltorlódott víz nyomása eléri a repülőgép súlyát, amikor is a gumik felúsznak a vízfelületre.",
                "correct": true
            },
            {
                "text": "blokkolással járó fékezéskor jön létre, és kialakulhat vékony vízrétegen is, amikor a súrlódás következtében a víz jelenléte ellenére is elegendő hő keletkezik ahhoz, hogy a gumi futófelülete felforrósodjon és nyúlóssá váljon.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy repülőgép átesési sebessége 50 csomó. Mekkora lesz az átesési sebesség egy szabályos vízszintes fordulóban, ahol a terhelési többes n=2?",
        "answers": [
            {
                "text": "70,5 kt",
                "correct": true
            },
            {
                "text": "Ez csak akkor lehet megválaszolni, ha ismerjük a bedöntési szöget és a sebességet.",
                "correct": false
            },
            {
                "text": "80 kt",
                "correct": false
            },
            {
                "text": "59,5 kt",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy függőleges emelésbe belerepülve a repülőgép-vezető beavatkozásának köszönhetően a repülőgép tartja korábbi magasságát és levegőhöz viszonyított sebességét. Ilyenkor a repülőgép …",
        "answers": [
            {
                "text": "nagyobb állásszögön és nagyobb teljesítménybeállítással repül.",
                "correct": false
            },
            {
                "text": "kisebb állásszögön és kisebb teljesítménybeállítással repül.",
                "correct": true
            },
            {
                "text": "kisebb állásszögön és nagyobb teljesítménybeállítással repül.",
                "correct": false
            },
            {
                "text": "nagyobb állásszögön és kisebb teljesítménybeállítással repül.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Vízre, jeges, havas, puha vagy egyenetlen talajra (mezőre, legelőre, szántóföldre) végrehajtott kényszerleszállás mindig … futóművel történik.",
        "answers": [
            {
                "text": "kiengedett",
                "correct": false
            },
            {
                "text": "behúzott",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi az eljárási sorrend, amikor normál süllyedésből vízszintes repülésbe vezetjük a repülőgépet?",
        "answers": [
            {
                "text": "Először beállítjuk az utazó-horizonthelyzetet a magassági kormánnyal, kikapcsoljuk a porlasztófűtést, majd ráadjuk az utazóteljesítményt.",
                "correct": false
            },
            {
                "text": "Először kikapcsoljuk a porlasztófűtést, ráadjuk az utazóteljesítményt, majd beállítjuk az utazó-horizonthelyzetet a magassági kormánnyal.",
                "correct": true
            },
            {
                "text": "Először kikapcsoljuk a porlasztófűtést, beállítjuk az utazó-horizonthelyzetet a magassági kormánnyal, majd ráadjuk az utazóteljesítményt.",
                "correct": false
            },
            {
                "text": "Először beállítjuk az utazó-horizonthelyzetet a magassági kormánnyal, ráadjuk az utazóteljesítményt, majd kikapcsoljuk a porlasztófűtést.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Dinamikus aquaplaning esetén intenzív fékezést kell alkalmazni.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mekkora a túlterhelés egy szabályos 60°-os bedöntésű fordulóban?",
        "answers": [
            {
                "text": "n=2",
                "correct": true
            },
            {
                "text": "Ezt csak a sebesség ismeretében lehet megmondani.",
                "correct": false
            },
            {
                "text": "n=1,41",
                "correct": false
            },
            {
                "text": "Ezt csak a fordulósugár ismeretében lehet megmondani.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Melyik esetben csökken intenzívebben a szárny felhajtóerő-tényezője?",
        "answers": [
            {
                "text": "A szárny belépőélének lejegesedésekor.",
                "correct": true
            },
            {
                "text": "A szárny teljes felületét beborító zúzmarás jegesedéskor.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az alábbiak közül minőségileg melyik terep a legalkalmasabb a kényszerleszállásra?",
        "answers": [
            {
                "text": "Mezőgazdaságilag nem művelt mező (pl. legelő).",
                "correct": false
            },
            {
                "text": "Mezőgazdaságilag művelt felszántott terület.",
                "correct": false
            },
            {
                "text": "Mezőgazdaságilag művelt alacsony növényzetű terület.",
                "correct": true
            },
            {
                "text": "Mezőgazdaságilag művelt magasabb növényzetű terület.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Süllyedés során szélnyírás következtében a szembeszél hirtelen 20 csomóról tartósan 12 csomóra változik. Ha a repülőgép-vezető nem avatkozik be, akkor a repülőgép sebessége a szélnyírás hatására átmenetileg … fog, és miután az új helyzetben a repülőgép pályája stabilizálódik, a süllyedés szöge … lesz.",
        "answers": [
            {
                "text": "növekedni – kisebb",
                "correct": false
            },
            {
                "text": "csökkenni – nagyobb",
                "correct": false
            },
            {
                "text": "csökkenni – kisebb",
                "correct": true
            },
            {
                "text": "növekedni – nagyobb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az alábbiak közül melyik a legjobb terep kényszerleszállásra?",
        "answers": [
            {
                "text": "Megművelt mezőgazdasági terület alacsony növényzettel.",
                "correct": true
            },
            {
                "text": "Felszántott, barázdált mezőgazdasági terület.",
                "correct": false
            },
            {
                "text": "Autópálya.",
                "correct": false
            },
            {
                "text": "Tó nyugodt vízfelülettel.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi a legnagyobb veszélye a repülőgép beindításakor a hosszan tartó sikertelen indítózásnak?",
        "answers": [
            {
                "text": "Porlasztótűz.",
                "correct": true
            },
            {
                "text": "Az, hogy az indulást el kell halasztani és a repülőgép-vezető nem tudja teljesíteni a repülési feladatot.",
                "correct": false
            },
            {
                "text": "Az indítómotor túlterhelése.",
                "correct": false
            },
            {
                "text": "Az akkumulátor lemerülése.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A helyes keverékarány beállításában … van segítségünkre.",
        "answers": [
            {
                "text": "a szívótérnyomás-mérő",
                "correct": false
            },
            {
                "text": "a hengerfej-hőmérő",
                "correct": false
            },
            {
                "text": "a kipufogógáz-hőmérő",
                "correct": true
            },
            {
                "text": "az olajhőmérő",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Szembeszél esetén a repülőgép már alacsonyabb műszer szerinti sebességen elemelkedik, ezért a nekifutási úthossz rövidebb lesz.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan kell utazórepülésből normál emelkedésbe vezetni a repülőgépet?",
        "answers": [
            {
                "text": "Először gázadással beállítjuk az emelkedőteljesítményt, majd a magassági kormány húzásával beállítjuk az emelkedő-horizonthelyzetet, illetve sebességet.",
                "correct": true
            },
            {
                "text": "A magassági kormány húzásával beállítjuk az emelkedő-horizonthelyzetet és sebességet, gázadás nem szükséges.",
                "correct": false
            },
            {
                "text": "Gázadással beállítjuk az emelkedő teljesítményt, a magassági kormány húzása nem szükséges.",
                "correct": false
            },
            {
                "text": "Először a magassági kormány húzásával beállítjuk az emelkedő-horizonthelyzetet, illetve sebességet, majd gázadással az emelkedőteljesítményt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A repülőgép maximális teljesítményen emelkedik. Az emelkedésből vízszintes repülésbe vezetjük a repülőgépet minden egyéb beavatkozás nélkül. Hogyan reagál a légcsavarállásszög-szabályzó?",
        "answers": [
            {
                "text": "Csökkenti a lapátok beállítási szögét és megtartja a fordulatszámot.",
                "correct": false
            },
            {
                "text": "Növeli a lapátok beállítási szögét és megtartja a fordulatszámot.",
                "correct": true
            },
            {
                "text": "Növeli a lapátok beállítási szögét és csökkenti a fordulatszámot.",
                "correct": false
            },
            {
                "text": "Csökkenti a lapátok beállítási szögét és növeli a fordulatszámot.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A megközelítés során a süllyedés szögét úgy csökkenthetjük, hogy a teljesítménybeállítást … . Ekkor a magassági kormányt a kívánt mértékben … kell, hogy megtartsuk a választott süllyedősebességet.",
        "answers": [
            {
                "text": "növeljük – nyomni",
                "correct": false
            },
            {
                "text": "csökkentjük – húzni",
                "correct": false
            },
            {
                "text": "csökkentjük – nyomni",
                "correct": false
            },
            {
                "text": "növeljük – húzni",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mitől függ a helyes bedöntési szög az egylapátos standard fordulóban?",
        "answers": [
            {
                "text": "A szél sebességétől.",
                "correct": false
            },
            {
                "text": "A repülőgép súlyától.",
                "correct": false
            },
            {
                "text": "A sebességtől.",
                "correct": true
            },
            {
                "text": "A terhelési többestől.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Milyen hatásai vannak a fékszárny kitérítésének a süllyedéskor?",
        "answers": [
            {
                "text": "A repülőgép hirtelen emelkedésbe kezd, és ezt követően siklóteljesítménye romlik.",
                "correct": true
            },
            {
                "text": "A repülőgép hirtelen megül, és ezt követően siklóteljesítménye romlik.",
                "correct": false
            },
            {
                "text": "A repülőgép hirtelen emelkedésbe kezd, és ezt követően siklóteljesítménye javul.",
                "correct": false
            },
            {
                "text": "A repülőgép hirtelen megül, és ezt követően siklóteljesítménye javul.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan szabályozzuk a fordulatszámot állandó fordulatszámú légcsavarral felszerelt repülőgépen?",
        "answers": [
            {
                "text": "Nem szükséges szabályoznunk.",
                "correct": false
            },
            {
                "text": "A gázkarral.",
                "correct": false
            },
            {
                "text": "A légcsavarszabályzó karral.",
                "correct": true
            },
            {
                "text": "A szívótérnyomás karral.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mire vonatkozik a Vle sebesség?",
        "answers": [
            {
                "text": "Maximális megengedett sebesség kitérített fékszárnnyal.",
                "correct": false
            },
            {
                "text": "Maximális megengedett sebesség kibocsátott futóművel.",
                "correct": true
            },
            {
                "text": "Maximális megengedett sebesség a futómű működtetésekor.",
                "correct": false
            },
            {
                "text": "Maximális megengedett sebesség a fékszárny működtetésekor.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A besiklás során a szembeszél a pályahajlási szöget …",
        "answers": [
            {
                "text": "nem befolyásolja.",
                "correct": false
            },
            {
                "text": "növeli.",
                "correct": true
            },
            {
                "text": "csökkenti.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Normál felszállási eljárást tekintve",
        "answers": [
            {
                "text": "a nekifutás az orrkerekes repülőgép esetében először három, majd két ponton történik, a farokkerekes repülőgépet viszont az elemelkedésig három ponton kell tartani.",
                "correct": false
            },
            {
                "text": "a nekifutás mind az orrkerekes, mind a farokkerekes repülőgép esetében először három, majd két ponton történik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A gőz-aquaplanning …",
        "answers": [
            {
                "text": "blokkolással járó fékezéskor jön létre, és kialakulhat vékony vízrétegen is, amikor a súrlódás következtében a víz jelenléte ellenére is elegendő hő keletkezik ahhoz, hogy a gumi futófelülete felforrósodjon és nyúlóssá váljon.",
                "correct": true
            },
            {
                "text": "kialakulásához elég egy századmilliméter vastag vízréteg és egy finom felületű szilárd burkolatú pálya (például melyet a korábbi földet érések alkalmával letapadt gumiréteg tesz tükörsimává).",
                "correct": false
            },
            {
                "text": "viszonylag nagy gurulósebességnél alakul ki olyan módon, hogy a sebesség növekedésével a feltorlódott víz nyomása eléri a repülőgép súlyát, amikor is a gumik felúsznak a vízfelületre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a vízszintes forduló során a repülőgép emelkedne, akkor a bedöntést …",
        "answers": [
            {
                "text": "csökkenteni kell vagy a magassági kormányból kell kiengedni.",
                "correct": false
            },
            {
                "text": "csökkenteni kell vagy a magassági kormányt jobban kell húzni.",
                "correct": false
            },
            {
                "text": "növelni kell vagy a magassági kormányt jobban kell húzni.",
                "correct": false
            },
            {
                "text": "növelni kell vagy a magassági kormányból kell kiengedni.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a kilebegtetés megfelelő magasságban történik, de a földet érés pillanatában megszólal az átesésjelző, akkor a repülőgép-vezető hibát követett el.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A terhelési többes növekedésével a forduló során az átesési sebesség …",
        "answers": [
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Emelkedés során szélnyírás következtében a hátszél hirtelen 19 csomóról tartósan 10 csomóra változik. Ha a repülőgép-vezető nem avatkozik be, akkor a repülőgép sebessége a szélnyírás hatására átmenetileg … fog, és miután az új helyzetben a repülőgép pályája stabilizálódik, az emelkedés szöge … lesz.",
        "answers": [
            {
                "text": "növekedni – nagyobb",
                "correct": true
            },
            {
                "text": "csökkenni – kisebb",
                "correct": false
            },
            {
                "text": "növekedni – kisebb",
                "correct": false
            },
            {
                "text": "csökkenni – nagyobb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Süllyedés során szélnyírás következtében a szembeszél hirtelen 8 csomóról tartósan 15 csomóra változik. Ha a repülőgép-vezető nem avatkozik be, akkor a repülőgép sebessége a szélnyírás hatására átmenetileg … fog, és miután az új helyzetben a repülőgép pályája stabilizálódik, a süllyedés szöge … lesz.",
        "answers": [
            {
                "text": "növekedni – nagyobb",
                "correct": true
            },
            {
                "text": "növekedni – kisebb",
                "correct": false
            },
            {
                "text": "csökkenni – kisebb",
                "correct": false
            },
            {
                "text": "csökkenni – nagyobb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Nem ellenőrzött repülőtéren a szél 350°-ról fúj, sebessége 10 csomó. A választható pályairányok 09-es és 27-es. Melyik pályát választjuk a felszálláshoz?",
        "answers": [
            {
                "text": "A 09-est.",
                "correct": false
            },
            {
                "text": "Ilyen helyzetben nem hajtunk végre felszállást.",
                "correct": false
            },
            {
                "text": "A 27-est.",
                "correct": true
            },
            {
                "text": "Bármelyiket választhatjuk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy repülőgép egyenes vonalú egyenletes sebességű vízszintes repülésben halad, ahol a felhajtóerő-tényező értéke Cy=1. 1 fokos állásszögváltozás 0,095-tel változtatja meg a felhajtóerő-tényezőt. A repülőgép függőleges leáramlásba repül, mely során az állásszög 4 fokkal változik. Mekkora lesz ekkor a terhelési többes?",
        "answers": [
            {
                "text": "-1.38",
                "correct": false
            },
            {
                "text": "0.38",
                "correct": false
            },
            {
                "text": "0.62",
                "correct": true
            },
            {
                "text": "-1.62",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Milyen oltóberendezést használunk kabintűz oltására?",
        "answers": [
            {
                "text": "Szén-dioxiddal oltót.",
                "correct": false
            },
            {
                "text": "Halonnal oltót.",
                "correct": true
            },
            {
                "text": "Vízzel oltót.",
                "correct": false
            },
            {
                "text": "Porral oltót.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az alábbiak közül melyik a legfontosabb a motorleállás miatti terepre történő kényszerleszállás esetén a földet éréskor?",
        "answers": [
            {
                "text": "A fékszárny legyen teljesen kitérített helyzetben, hogy a talajfogás a lehető legalacsonyabb sebességen történjen.",
                "correct": false
            },
            {
                "text": "A futómű legyen kiengedett helyzetben.",
                "correct": false
            },
            {
                "text": "A tűzcsap legyen elzárva.",
                "correct": true
            },
            {
                "text": "A rádió legyen áram alatt a gyors segítséghívás érdekében.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mikor érvényesül a párnahatás?",
        "answers": [
            {
                "text": "Késő őszi és téli hideg időben.",
                "correct": false
            },
            {
                "text": "Amikor a fékszárny leszálló helyzetben van állítva.",
                "correct": false
            },
            {
                "text": "Amíg a repülőgép föld feletti magassága nem nagyobb fesztávolságának kb. felénél.",
                "correct": true
            },
            {
                "text": "Intenzív szélben.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az utazómagasságon teljesítménykeveréket állítottunk be. Ha a süllyedés előtt nem … , akkor bizonyos magasságra süllyedve a keverék …",
        "answers": [
            {
                "text": "szegényítünk – eldúsulhat.",
                "correct": false
            },
            {
                "text": "dúsítunk – túlszegényedhet.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Motorleállás esetén, …",
        "answers": [
            {
                "text": "a motort megpróbálhatjuk újraindítani. Ha beindul, folytathatjuk a repülést.",
                "correct": false
            },
            {
                "text": "a motort megpróbálhatjuk újraindítani. Ha beindul, meg kell próbálni elővigyázatosságból kitérő repülőtérre leszállni.",
                "correct": true
            },
            {
                "text": "a motort megpróbálhatjuk újraindítani. Ha beindul, elővigyázatosságból le kell szállni az első alkalmas terepre.",
                "correct": false
            },
            {
                "text": "a motort tilos újraindítani, kényszerleszállást kell végrehajtani.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mit jelent, ha a motor beindítása után alapjáraton a szívótérnyomás-mérő a külső légnyomásnak megfelelő értéket mutat?",
        "answers": [
            {
                "text": "A motor még hideg, be kell melegednie.",
                "correct": false
            },
            {
                "text": "Ez esetben a motor meghibásodására következtethetünk.",
                "correct": true
            },
            {
                "text": "A motor le van terhelve.",
                "correct": false
            },
            {
                "text": "Ez normál üzemi érték.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha szűkebb a forduló, mint amilyen sugár a sebességhez és a bedöntéshez tartozna a repülőgép … kezd csúszni.",
        "answers": [
            {
                "text": "befelé",
                "correct": false
            },
            {
                "text": "kifelé",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Normál leszállási eljárást tekintve",
        "answers": [
            {
                "text": "a talajfogás az orrkerekes repülőgép esetében két ponton történik, a farokkerekes repülőgéppel viszont három ponton kell földet érni.",
                "correct": true
            },
            {
                "text": "a talajfogás mind az orrkerekes, mind a farokkerekes repülőgép esetében két ponton történik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az indukált szárnyvégörvény-fonat annál erősebb és kiterjedtebb, minél … a repülőgép tömege és minél … az állásszöge.",
        "answers": [
            {
                "text": "kisebb – kisebb",
                "correct": false
            },
            {
                "text": "nagyobb – kisebb",
                "correct": false
            },
            {
                "text": "nagyobb – nagyobb",
                "correct": true
            },
            {
                "text": "kisebb – nagyobb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az állandó fordulatszámú légcsavarral felszerelt repülőgépen …",
        "answers": [
            {
                "text": "a fordulatszámot a motor szívótérnyomását szabályzó karral állítjuk.",
                "correct": false
            },
            {
                "text": "nem kell fordulatszámot szabályoznunk, mert a fordulatszám megtartásáról a légcsavarvezérlő gondoskodik.",
                "correct": false
            },
            {
                "text": "a fordulatszámot a légcsavarszabályzó karral állítjuk.",
                "correct": true
            },
            {
                "text": "a fordulatszámot a motor szívótérnyomásának szabályzásán keresztül a légcsavarszabályzó karral állítjuk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Felszálláskor az elemelkedés után milyen esetben kell gyorsítani a föld felett a repülőgépet?",
        "answers": [
            {
                "text": "Ha használtunk fékszárnyat a felszálláskor.",
                "correct": false
            },
            {
                "text": "Ha nem használtunk fékszárnyat a felszálláskor.",
                "correct": false
            },
            {
                "text": "Szeles, lökéses időben.",
                "correct": false
            },
            {
                "text": "Minden esetben.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A fékszárny kiengedésével a süllyedés szöge …",
        "answers": [
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A normál süllyedés során, ha a süllyedés mértékét csökkenteni szeretnénk, a teljesítményt … kell és a magassági kormány … vissza kell állítani a süllyedő sebességet.",
        "answers": [
            {
                "text": "csökkenteni – húzásával",
                "correct": false
            },
            {
                "text": "növelni – húzásával",
                "correct": true
            },
            {
                "text": "csökkenteni – nyomásával",
                "correct": false
            },
            {
                "text": "növelni – nyomásával",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mit jelent, ha a motor beindítása után alapjáraton a szívótérnyomás-mérő visszaesik a külső légnyomás alá?",
        "answers": [
            {
                "text": "Ez esetben a motor meghibásodására következtethetünk.",
                "correct": false
            },
            {
                "text": "A motor le van terhelve.",
                "correct": false
            },
            {
                "text": "Ez normál üzemi érték.",
                "correct": true
            },
            {
                "text": "A motor még hideg, be kell melegednie.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Adott sebesség esetén … bedöntéshez … fordulósugár tartozik",
        "answers": [
            {
                "text": "nagyobb – nagyobb",
                "correct": false
            },
            {
                "text": "nagyobb – kisebb",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Amikor emelkedőüzemből utazóüzemre váltunk …",
        "answers": [
            {
                "text": "a visszaszabályzás és a repülőgép vízszintes repülésbe vezetése között nem szükséges sorrendiséget tartani.",
                "correct": false
            },
            {
                "text": "először a magassági kormány nyomásával vízszintes repülésbe visszük a repülőgépet, majd visszaszabályozunk utazóteljesítményre.",
                "correct": true
            },
            {
                "text": "először visszaszabályozunk utazóteljesítményre, majd a magassági kormány nyomásával vízszintes repülésbe visszük a repülőgépet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mit tehetünk annak érdekében, hogy az előttünk leszálló nagytömegű repülőgép által keltett turbulenciát a leszállás során elkerüljük?",
        "answers": [
            {
                "text": "Nagy pályahajlási szöggel süllyedjünk, és úgy tervezzük a földet érés pontját, hogy a repülőgép a végbiztonsági sávban álljon meg.",
                "correct": false
            },
            {
                "text": "Minél nagyobb süllyedési szöget válasszunk, és úgy helyezkedjünk, hogy a pályaküszöbnél érünk földet.",
                "correct": false
            },
            {
                "text": "Kis pályahajlási szöggel süllyedjünk, és a földet érést a nagyobb repülőgép földet érési pontja és a küszöb közé tervezzük.",
                "correct": false
            },
            {
                "text": "Minél nagyobb süllyedési szöget válasszunk és a földet érést távolabb tervezzük a nagyobb repülőgép földet érési pontjától.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Adott bedöntés esetén … sebességhez … fordulósugár tartozik",
        "answers": [
            {
                "text": "nagyobb – nagyobb",
                "correct": true
            },
            {
                "text": "nagyobb – kisebb",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Tiszta oldalszélről beszélünk, ha …",
        "answers": [
            {
                "text": "a szélbeesési szög 90°.",
                "correct": false
            },
            {
                "text": "a széltámadási szög 90°.",
                "correct": true
            },
            {
                "text": "a szélellentartási szög 90°.",
                "correct": false
            },
            {
                "text": "a széleltérítési szög 90°.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy repülőgép 45°-os, majd 60°-os bedöntésű szabályos vízszintes fordulót végez 100 csomós sebességen. Összehasonlítva a két repülési helyzetet, mi fog különbözni az alábbiak közül?",
        "answers": [
            {
                "text": "Az állásszög, a terhelési többes és az átesési sebesség.",
                "correct": true
            },
            {
                "text": "Csak az átesési sebesség.",
                "correct": false
            },
            {
                "text": "Csak az állásszög.",
                "correct": false
            },
            {
                "text": "Csak a terhelési többes.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A légiüzemeltetési utasítás az átesési sebességet a repülőgép …",
        "answers": [
            {
                "text": "üressúlyára adja meg.",
                "correct": false
            },
            {
                "text": "maximális megengedett felszállósúlyára adja meg.",
                "correct": true
            },
            {
                "text": "üzemi súlyára adja meg.",
                "correct": false
            },
            {
                "text": "száraz üzemi súlyára adja meg.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a fékszárny kitérítésekor nem változtatunk az állásszögön, akkor a repülőgép …",
        "answers": [
            {
                "text": "bólintási szöge kisebb lesz.",
                "correct": false
            },
            {
                "text": "pályahajlási szöge nem változik.",
                "correct": false
            },
            {
                "text": "emelkedni kezd.",
                "correct": true
            },
            {
                "text": "süllyedni kezd.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Felszántott területre történő kényszerleszállásnál 20 csomónál kisebb szélsebesség mellett … kell leszállni",
        "answers": [
            {
                "text": "széllel szemben",
                "correct": false
            },
            {
                "text": "barázda mentén",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A normál süllyedés során, ha a süllyedés mértékét növelni szeretnénk, a teljesítményt … kell és a magassági kormány … vissza kell állítani a süllyedő sebességet.",
        "answers": [
            {
                "text": "növelni – húzásával",
                "correct": false
            },
            {
                "text": "csökkenteni – húzásával",
                "correct": false
            },
            {
                "text": "növelni – nyomásával",
                "correct": false
            },
            {
                "text": "csökkenteni – nyomásával",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A normál bedöntésű forduló során a vízszintes vezérsíkon keletkező légerő …",
        "answers": [
            {
                "text": "a repülőgép orrát a forduló irányába akarja fordítani. Részben ez magyarázza az oldalkormány kitérítésének szükségét a fordulóban.",
                "correct": false
            },
            {
                "text": "a repülőgép orrát a forduló ellen akarja fordítani. Részben ez magyarázza az oldalkormány kitérítésének szükségét a fordulóban.",
                "correct": false
            },
            {
                "text": "hatására a repülőgép emeli az orrát. Részben ez magyarázza a magassági kormány használatának szükségét a fordulóban.",
                "correct": false
            },
            {
                "text": "hatására a repülőgép leadja az orrát. Részben ez magyarázza a magassági kormány használatának szükségét a fordulóban.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a keverék el van dúsulva és szegényíteni kezdünk a keverékszabályzóval, …",
        "answers": [
            {
                "text": "a fordulatszám csökkenni fog és a kipufugógáz-hőmérséklet növekedni fog",
                "correct": false
            },
            {
                "text": "a fordulatszám és a kipufugógáz-hőmérséklet növekedni fog.",
                "correct": true
            },
            {
                "text": "a fordulatszám növekedni fog és a kipufugógáz-hőmérséklet csökkenni fog.",
                "correct": false
            },
            {
                "text": "a fordulatszám és a kipufugógáz-hőmérséklet csökkenni fog.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az alábbiak közül melyik esetben kell a legkisebb sugarú íven megtörni a siklószöget?",
        "answers": [
            {
                "text": "Szélcsendben és kis fékszárny esetén.",
                "correct": false
            },
            {
                "text": "Intenzív szembeszélben és nagy fékszárny esetén.",
                "correct": true
            },
            {
                "text": "Intenzív szembeszélben és kis fékszárny esetén.",
                "correct": false
            },
            {
                "text": "Szélcsendben és nagy fékszárny esetén.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Bal oldal-hátszélben történő guruláskor … , hogy stabilizáljuk a repülőgépet.",
        "answers": [
            {
                "text": "jobbra kell csűrni és a magassági kormányt nyomni kell",
                "correct": true
            },
            {
                "text": "balra kell csűrni és a magassági kormányt nyomni kell",
                "correct": false
            },
            {
                "text": "jobbra kell csűrni és a magassági kormányt húzni kell",
                "correct": false
            },
            {
                "text": "balra kell csűrni és a magassági kormányt húzni kell",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A farokkerekes repülőgép terepjáró képessége jobb, mint az orrkerekesé, viszont rosszabb az oldalirányú és az iránystabilitása stabilitása.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az átesési sebesség nő …",
        "answers": [
            {
                "text": "a repülőgép súlyának csökkenésével.",
                "correct": false
            },
            {
                "text": "a forduló során.",
                "correct": true
            },
            {
                "text": "a súlypont hátra vándorlásakor.",
                "correct": false
            },
            {
                "text": "a fékszárny használatakor.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A vízrefutás melyik típusa jön létre jellemzően a futópálya földet érési területén?",
        "answers": [
            {
                "text": "A dinamikus aquaplaning.",
                "correct": false
            },
            {
                "text": "A gőz aquaplaning.",
                "correct": false
            },
            {
                "text": "A viszkóz-aquaplaning.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Orrkerekes repülőgép esetében az orrfutó elemelésekor …",
        "answers": [
            {
                "text": "a precesszió, a reakció- és a ferde megfúvás okozta nyomaték egy irányba, míg a p-faktor ezekhez képest ellentétesen hat.",
                "correct": false
            },
            {
                "text": "a precesszió és a p-faktor egy irányba, míg a reakció- és a ferde megfúvás okozta nyomaték ezekhez képest ellentétesen hat.",
                "correct": false
            },
            {
                "text": "mind a négy a légcsavar keltette nyomaték egy irányba hat.",
                "correct": false
            },
            {
                "text": "a reakció-, a ferde megfúvás okozta nyomaték és a p-faktor egy irányba, míg a precesszió ezekhez képest ellentétesen hat.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A felszállás során mikor kell számítanunk a légcsavar reakciónyomatékának hatására?",
        "answers": [
            {
                "text": "Ez a nyomaték gázadáskor érezhető a legjobban, de mindvégig kifejti a hatását, míg a motor jár.",
                "correct": true
            },
            {
                "text": "Kis sebességen és nagy fordulatszámon érvényesül jobban, ahogy a repülőgép sebességet gyűjt hatása csökken.",
                "correct": false
            },
            {
                "text": "Ez a nyomaték csak nagy állásszögű vagy csúszással járó repülés során érezhető.",
                "correct": false
            },
            {
                "text": "Az orrfutó elemelésekor, illetve minden olyan helyzetben, amikor a légcsavart kitérítjük forgási síkjából.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A függőleges síkban történő görbe vonalú repülés során az átesési sebesség a túlterhelés növekedésével …",
        "answers": [
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A bedöntés függvényben a forduló során az átesési sebesség …",
        "answers": [
            {
                "text": "nő.",
                "correct": true
            },
            {
                "text": "csökken.",
                "correct": false
            },
            {
                "text": "nem változik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hány százalékkal nő az átesési sebesség a 45°-os bedöntésű szabályos fordulóban?",
        "answers": [
            {
                "text": "19%-kal.",
                "correct": true
            },
            {
                "text": "51%-kal.",
                "correct": false
            },
            {
                "text": "32%-kal.",
                "correct": false
            },
            {
                "text": "41%-kal.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan szabályozzuk vissza a teljesítményt állandó fordulatszámú légcsavarral felszerelt repülőgépen?",
        "answers": [
            {
                "text": "Visszaszabályozzuk a fordulatszám-szabályzó kart.",
                "correct": false
            },
            {
                "text": "A fordulatszám csökkentése előtt szabályozzuk vissza a szívótérnyomás kart.",
                "correct": true
            },
            {
                "text": "Egyszerre szabályozzuk vissza a szívótérnyomás kart és a fordulatszám-szabályzó kart.",
                "correct": false
            },
            {
                "text": "A fordulatszám csökkentése után szabályozzuk vissza a szívótérnyomás kart.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A repülőgép súlyának növekedésével egy adott bedöntésű fordulóhoz tartozó átesési sebesség …",
        "answers": [
            {
                "text": "nem változik.",
                "correct": false
            },
            {
                "text": "nő.",
                "correct": true
            },
            {
                "text": "csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Az állandó fordulatszámú légcsavar jobb teljesítményt nyújt, mint a merev légcsavar, mert …",
        "answers": [
            {
                "text": "nagyobb a maximális légcsavarhatásfoka.",
                "correct": false
            },
            {
                "text": "széles sebességtartományban üzemel hatékonyan.",
                "correct": true
            },
            {
                "text": "lapátjainak felülete nagyobb.",
                "correct": false
            },
            {
                "text": "nagyobb maximális vonóerőt képes létrehozni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha azt tapasztaljuk, hogy a főfutó az egyik oldalon defektes, akkor …",
        "answers": [
            {
                "text": "a pályának a defektes futómű felé eső oldalára elvégezni a kényszerleszállást.",
                "correct": false
            },
            {
                "text": "füves repülőtérre kell elvégezni a kényszerleszállást.",
                "correct": false
            },
            {
                "text": "a pályának a hibátlan futómű felé eső oldalára elvégezni a kényszerleszállást.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A felszállás során mikor kell számítanunk a légcsavar által keltett ferde megfúvás okozta nyomaték hatására?",
        "answers": [
            {
                "text": "Ez a nyomaték csak nagy állásszögű vagy csúszással járó repülés során érezhető.",
                "correct": false
            },
            {
                "text": "Ez a nyomaték gázadáskor érezhető a legjobban, de mindvégig kifejti a hatását, míg a motor jár.",
                "correct": false
            },
            {
                "text": "Az orrfutó elemelésekor, illetve minden olyan helyzetben, amikor a légcsavart kitérítjük forgási síkjából.",
                "correct": false
            },
            {
                "text": "Kis sebességen és nagy fordulatszámon érvényesül jobban, ahogy a repülőgép sebességet gyűjt, hatása csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Oldalszélben, adott széltámadási szög és szélsebesség esetén a széleltérítés annál nagyobb, minél nagyobb a repülőgép levegőhöz viszonyított sebessége.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egyenes vonalú 95 csomós sebességű vízszintes repülés során szélnyírás következtében a szembeszél hirtelen 6 csomóról 17 csomóra változik. Ha a repülőgép-vezető nem avatkozik be, akkor mekkora terhelési többest fog létrehozni a szélnyírás?",
        "answers": [
            {
                "text": "n = 1,24",
                "correct": true
            },
            {
                "text": "n = 0,8",
                "correct": false
            },
            {
                "text": "n = 0,9",
                "correct": false
            },
            {
                "text": "n = 1,12",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A függőleges síkban történő görbe vonalú repülés során annál nagyobb túlterhelés jön létre, …",
        "answers": [
            {
                "text": "minél kisebb sugarú köríven történik a mozgás és minél nagyobb sebességen.",
                "correct": true
            },
            {
                "text": "minél nagyobb sugarú köríven történik a mozgás, de a sebességtől nem függ.",
                "correct": false
            },
            {
                "text": "minél kisebb sugarú köríven történik a mozgás, de a sebességtől nem függ.",
                "correct": false
            },
            {
                "text": "minél nagyobb sugarú köríven történik a mozgás és minél kisebb sebességen.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A futómű behúzásakor a repülőgép sebessége … fog, és a hossznyomatéki egyensúlyban is változás állhat be … nyomaték formájában.",
        "answers": [
            {
                "text": "csökkenni – orrnehéz",
                "correct": false
            },
            {
                "text": "nőni – orrkönnyű",
                "correct": true
            },
            {
                "text": "csökkenni – orrkönnyű",
                "correct": false
            },
            {
                "text": "nőni – orrnehéz",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A teljesítménykeverék …",
        "answers": [
            {
                "text": "a csúcsra szegényített keverék.",
                "correct": false
            },
            {
                "text": "a csúcsra szegényített keveréknél dúsabb.",
                "correct": true
            },
            {
                "text": "a csúcsra szegényített keveréknél szegényebb.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Egy vízszintes jobb forduló során az elfordulás- és csúszásjelző lapátja jobbra mozdul ki, míg a libella golyója balra. A szabályos forduló vezetése érdekében …",
        "answers": [
            {
                "text": "a repülőgép-vezető nem tehet semmit. Ilyenkor az elfordulásjelző hibás működésére következtetünk.",
                "correct": false
            },
            {
                "text": "csökkenteni kell a jobbra csűrést.",
                "correct": false
            },
            {
                "text": "növelni kell a jobbra csűrést.",
                "correct": true
            },
            {
                "text": "jobb pedált kell lépni.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A súlypont és a főfutók helyzetéből adódóan … repülőgép hajlamosabb az elpattanásra.",
        "answers": [
            {
                "text": "a farokkerekes.",
                "correct": true
            },
            {
                "text": "az orrkerekes.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A magasság növekedésével a tüzelőanyag-levegő keverék …",
        "answers": [
            {
                "text": "a kisebb sűrűségű, szegényebb levegőben elszegényedik.",
                "correct": false
            },
            {
                "text": "a csökkenő sűrűség miatt eldúsúl.",
                "correct": true
            },
            {
                "text": "aránya mindig optimális lesz, ha felszálláskor a keverékszabályzó kart megfelelően beállítottuk.",
                "correct": false
            },
            {
                "text": "aránya mindig optimális lesz, mert a porlasztó feladata a helyes keverékarány biztosítása.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan állítjuk le a belsőégésű négy hengeres repülőgépmotort figyelembe véve a repülőgép légiüzemeltetési utasításában foglaltakat?",
        "answers": [
            {
                "text": "A gyújtáskapcsoló lekapcsolásával vagy a keverék teljes elszegényítésével, ha a porlasztó felépítéséből ez utóbbira van lehetőség.",
                "correct": true
            },
            {
                "text": "A gyújtáskapcsoló lekapcsolásával vagy a tűzcsap elzárásával, ha a tüzelőanyag-rendszer felépítéséből ez utóbbira van lehetőség.",
                "correct": false
            },
            {
                "text": "A főkapcsoló lekapcsolásával vagy a tűzcsap elzárásával, ha a tüzelőanyag-rendszer felépítéséből ez utóbbira van lehetőség.",
                "correct": false
            },
            {
                "text": "Minden esetben a gyújtáskapcsoló lekapcsolásával.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mikor kell felkapcsolni a villogót?",
        "answers": [
            {
                "text": "A pályára guruláskor.",
                "correct": false
            },
            {
                "text": "Motorindítás után.",
                "correct": false
            },
            {
                "text": "Motorindítás előtt.",
                "correct": true
            },
            {
                "text": "A nekifutás megkezdésekor.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Ha a felszállás közben a motor leáll, akkor …",
        "answers": [
            {
                "text": "ha van elegendő magasság, akkor 180°-os forduló után vissza kell szállni a pályára.",
                "correct": true
            },
            {
                "text": "a repülőgép-vezetőnek nincs más választása, az előtte elterülő terepen kell kényszerleszállást végrehajtani.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi az eljárási sorrend, amikor a repülőgépet utazórepülésből normál süllyedésbe vezetjük?",
        "answers": [
            {
                "text": "Először visszaszabályzunk süllyedőteljesítményre. A sebesség elkoptatása után a magassági kormány nyomásával beállítjuk a süllyedő-horizonthelyzetet, illetve sebességet. Ezután porlasztófűtést kapcsolunk.",
                "correct": false
            },
            {
                "text": "Először porlasztófűtést kapcsolunk, majd a magassági kormány nyomásával beállítjuk a süllyedő-horizonthelyzetet, ezután visszaszabályzunk süllyedőteljesítményre és elkoptatjuk a sebességet.",
                "correct": false
            },
            {
                "text": "Először porlasztófűtést kapcsolunk, majd visszaszabályzunk süllyedőteljesítményre. A sebesség elkoptatása után a magassági kormány nyomásával beállítjuk a süllyedő-horizonthelyzetet, illetve sebességet.",
                "correct": true
            },
            {
                "text": "Először a magassági kormány nyomásával beállítjuk a süllyedő-horizonthelyzetet, majd porlasztófűtést kapcsolunk. Ezután visszaszabályzunk süllyedőteljesítményre és elkoptatjuk a sebességet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Mi a teendő, ha a felszállás előtti motorpróba során a porlasztófűtés bekapcsolásakor fordulatszámesést tapasztalunk?",
        "answers": [
            {
                "text": "Kisebb-nagyobb fordulatszámesés esetén a felszállást minden további teendő nélkül végre lehet hajtani.",
                "correct": false
            },
            {
                "text": "Ez a gyújtógyertya enyhe szennyeződésének következménye, melyet rövid ideig magas fordulatszámon történő motorjáratással esetleg meg lehet szűntetni. Ilyenkor a légiüzemeltetési utasítás és a repülőgép üzembentartójának rendelkezése szerint kell eljárni.",
                "correct": false
            },
            {
                "text": "Természetes következménye a fordulatszámesés annak, ha a porlasztófűtést bekapcsoljuk, amennyiben a fordulatszámesés a gyártó által előírt mértéket nem haladja meg.",
                "correct": true
            },
            {
                "text": "Ilyenkor a porlasztó meghibásodására kell gyanakodni és a felszállást el kell halasztani.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "A repülőgép melyik emelkedősebessége magasabb?",
        "answers": [
            {
                "text": "A legnagyobb emelkedési szöget biztosító sebesség.",
                "correct": false
            },
            {
                "text": "A legnagyobb függőleges emelkedéshez tartozó sebesség.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSI GYAKORLATOK ÉS ELJÁRÁSOK",
        "question": "Hogyan ellenőrizzük a fordulatszámot állandó fordulatszámú légcsavarral felszerelt repülőgépen?",
        "answers": [
            {
                "text": "Fordulatszámmérővel.",
                "correct": true
            },
            {
                "text": "Hengerfej-hőmérővel.",
                "correct": false
            },
            {
                "text": "Tüzelőanyagnyomás-mérővel.",
                "correct": false
            },
            {
                "text": "Szívótérnyomás-mérővel.",
                "correct": false
            }
        ],
        "hint": ""
    },
/*Repüléstervezés*/
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Ha a súlypont a mellső határhelyzet előtt van, a kormányozhatóság jelentősen romlik, a repülőgép irányítása állandó repülőgép-vezetést igényel.",
        "answers": [
            {
                "text": "Igaz.",
                "correct": false
            },
            {
                "text": "Hamis.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép súlyának növekedésével …",
        "answers": [
            {
                "text": "a repülőgép legjobb emelkedési szöge és a legnagyobb emelkedésének mértéke egyaránt csökken.",
                "correct": true
            },
            {
                "text": "a repülőgép legjobb emelkedési szöge és a legnagyobb emelkedésének mértéke nem változik.",
                "correct": false
            },
            {
                "text": "a repülőgép legjobb emelkedési szöge csökken és a legnagyobb emelkedésének mértéke nő.",
                "correct": false
            },
            {
                "text": "a repülőgép legjobb emelkedési szöge nő és a legnagyobb emelkedésének mértéke csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A forgalmi teher magába foglalja …",
        "answers": [
            {
                "text": "Egyiket sem foglalja magába.",
                "correct": true
            },
            {
                "text": "a személyzet és csomagjaik súlyát.",
                "correct": false
            },
            {
                "text": "az étkeztetéshez szükséges és az utasok kényelmét szolgáló felszerelések súlyát, valamint az elmozdítható higiéniai felszerelések és a működésükhöz szükséges anyagok súlyát.",
                "correct": false
            },
            {
                "text": "a személyzet és csomagjaik súlyát, az étkeztetéshez szükséges és az utasok kényelmét szolgáló felszerelések súlyát, valamint az elmozdítható higiéniai felszerelések és a működésükhöz szükséges anyagok súlyát.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Ha a súlypontszámításnál meghatározott pont a burkológörbe felett helyezkedik el, akkor …",
        "answers": [
            {
                "text": "a repülőgép súlypontja átlépte a mellső határértéket.",
                "correct": false
            },
            {
                "text": "a repülőgép súlypontja átlépte a hátsó határértéket.",
                "correct": false
            },
            {
                "text": "a repülőgép felszállósúlya átlépte a megengedett maximális értéket.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Szembeszél esetén a repülőgép legjobb Y/X hányadosa … , és a siklóteljesítménye …",
        "answers": [
            {
                "text": "romlik – javul.",
                "correct": false
            },
            {
                "text": "romlik – romlik.",
                "correct": false
            },
            {
                "text": "nem változik – romlik.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Szembeszél esetén a siklószög … és a lerepülhető legnagyobb föld feletti távolság …",
        "answers": [
            {
                "text": "nem változik – csökken.",
                "correct": false
            },
            {
                "text": "kisebb lesz – nő.",
                "correct": false
            },
            {
                "text": "nagyobb lesz – csökken.",
                "correct": true
            },
            {
                "text": "nem változik – nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A végbiztonsági sávot (Stopway) azért hozták létre, hogy a leszállási úthossz elszámítása esetén azt a repülőgép-vezető a repülőgép kifékezésére igénybe vehesse.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik állítás hamis?",
        "answers": [
            {
                "text": "Az üzemanyag nélküli súly a repülőgép felhasználható tüzelőanyag nélküli súlya.",
                "correct": false
            },
            {
                "text": "Az üzemanyag nélküli súly a száraz üzemi súly és a hasznos teher összege.",
                "correct": true
            },
            {
                "text": "Az üzemanyag nélküli súly tartalmazhat bizonyos mennyiségű üzemanyagot.",
                "correct": false
            },
            {
                "text": "Az üzemanyag nélküli súly magába foglalja a személyzet és csomagjaik súlyát.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy … a leszállási úthosszt.",
        "answers": [
            {
                "text": "10%-os súlynövekedés kb. 10%-kal csökkenti.",
                "correct": false
            },
            {
                "text": "10%-os súlynövekedés kb. 10%-kal növeli.",
                "correct": true
            },
            {
                "text": "10%-os súlynövekedés kb. 5%-kal csökkenti.",
                "correct": false
            },
            {
                "text": "10%-os súlynövekedés kb. 5%-kal növeli.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Ha egy repülőgép tüzelőanyag-tartálya a súlypont mögött helyezkedik el, akkor a repülés során a tüzelőanyag fogyásával …",
        "answers": [
            {
                "text": "a súlypont hátra vándorol, mely faroknehéz nyomatékot kelt.",
                "correct": false
            },
            {
                "text": "a súlypont előre vándorol, mely fejnehéz nyomatékot kelt.",
                "correct": true
            },
            {
                "text": "a súlypont előre vándorol, mely faroknehéz nyomatékot kelt.",
                "correct": false
            },
            {
                "text": "a súlypont hátra vándorol, mely fejnehéz nyomatékot kelt.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Ha a súlypontszámításnál meghatározott pont a burkológörbe bal oldali szakaszán kívül kerül (a burkoló görbe és az y-tengely közé), akkor …",
        "answers": [
            {
                "text": "a repülőgép súlypontja átlépte a mellső határértéket.",
                "correct": true
            },
            {
                "text": "a repülőgép súlypontja átlépte a hátsó határértéket.",
                "correct": false
            },
            {
                "text": "a repülőgép felszállósúlya átlépte a megengedett maximális értéket.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy … súlynövekedés … növeli a felszállási úthosszt.",
        "answers": [
            {
                "text": "20%-os – 5%-kal",
                "correct": false
            },
            {
                "text": "10%-os – 20%-kal",
                "correct": true
            },
            {
                "text": "10%-os – 5%-kal",
                "correct": false
            },
            {
                "text": "5%-os – 20%-kal",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy 1000 láb magasság-növekedés vagy … hőmérséklet-növekedés … a felszállási úthosszt.",
        "answers": [
            {
                "text": "5°C – 20%-kal csökkenti",
                "correct": false
            },
            {
                "text": "10°C – 10%-kal növeli",
                "correct": true
            },
            {
                "text": "10°C – 5%-kal növeli",
                "correct": false
            },
            {
                "text": "5°C – 10%-kal csökkenti",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "12-es siklószám esetén álló motorral 4500 lábról a legjobb sikláshoz tartozó sebességet választva mekkora föld feletti távolságot tudunk megtenni a földet érésig szélcsendben.",
        "answers": [
            {
                "text": "kb. 37,5 km-t.",
                "correct": false
            },
            {
                "text": "kb. 16,5 km-t.",
                "correct": true
            },
            {
                "text": "kb. 14,4 km-t.",
                "correct": false
            },
            {
                "text": "kb. 15,7 km-t.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép súlyának növekedésével …",
        "answers": [
            {
                "text": "a szerkezet túlterhelésének határai tágabbak.",
                "correct": false
            },
            {
                "text": "a szerkezet túlterhelésének határai szűkebbek.",
                "correct": true
            },
            {
                "text": "a szerkezet túlterhelésének határai nem változnak.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A hatótávolság …",
        "answers": [
            {
                "text": "A hatótávolságra a szél nincs hatással.",
                "correct": false
            },
            {
                "text": "szembeszél esetén nő, hátszél esetén csökken.",
                "correct": false
            },
            {
                "text": "szembeszél esetén csökken, hátszél esetén nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép súlyának növekedésével a minimális légellenálláshoz tartozó …",
        "answers": [
            {
                "text": "Vopt sebesség nagyobb lesz.",
                "correct": true
            },
            {
                "text": "Vgazd sebesség kisebb lesz.",
                "correct": false
            },
            {
                "text": "Vgazd sebesség nagyobb lesz.",
                "correct": false
            },
            {
                "text": "Vopt sebesség kisebb lesz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép üzemanyag nélküli súlya …",
        "answers": [
            {
                "text": "alatt azt a súlyt értjük, mely semmilyen üzemanyagot nem foglal magába.",
                "correct": false
            },
            {
                "text": "tartalmazhat bizonyos mennyiségű üzemanyagot.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A legnagyobb emelkedési szög elérését biztosító sebességet … nevezzük, mely a legnagyobb … fog adódni.",
        "answers": [
            {
                "text": "Vy-nak – Fp – X teljesítmény-feleslegnél",
                "correct": false
            },
            {
                "text": "Vx-nek – Fp – X vonóerő-feleslegnél",
                "correct": true
            },
            {
                "text": "Vx-nek – Pr – Psz vonóerő-feleslegnél",
                "correct": false
            },
            {
                "text": "Vy-nak-nak – Pr – Psz teljesítmény-feleslegnél",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy 1000 láb magasság-növekedés vagy … hőmérséklet-növekedés … a leszállási úthosszt",
        "answers": [
            {
                "text": "5°C – 10%-kal csökkenti",
                "correct": false
            },
            {
                "text": "10°C – 5%-kal növeli",
                "correct": true
            },
            {
                "text": "10°C – 10%-kal növeli",
                "correct": false
            },
            {
                "text": "5°C – 20%-kal csökkenti.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép súlyának növekedésével …",
        "answers": [
            {
                "text": "Vx csökken, míg Vy nő.",
                "correct": false
            },
            {
                "text": "Vx nő, míg Vy csökken.",
                "correct": false
            },
            {
                "text": "Vx nő, míg Vy nem változik.",
                "correct": false
            },
            {
                "text": "Vx és Vy is nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Az emelkedés során a legnagyobb emelkedés mértéke …",
        "answers": [
            {
                "text": "A legnagyobb emelkedés mértékére a szél nincs hatással.",
                "correct": true
            },
            {
                "text": "szembeszél esetén csökken, hátszél esetén nő.",
                "correct": false
            },
            {
                "text": "szembeszél esetén nő, hátszél esetén csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A kb. 10 cm magas száraz füves felület … növeli, a kb. 10 cm magas nedves füves felület … növeli a leszállási úthosszt.",
        "answers": [
            {
                "text": "kb. 5%-kal – kb. 15%-kal",
                "correct": false
            },
            {
                "text": "kb. 10%-kal – kb. 20%-kal",
                "correct": false
            },
            {
                "text": "kb. 15%-kal – kb. 30%-kal",
                "correct": false
            },
            {
                "text": "kb. 20%-kal – kb. 30%-kal",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A legnagyobb varióhoz tartozó sebességet … nevezzük, mely a legnagyobb … fog adódni.",
        "answers": [
            {
                "text": "Vy-nak – Fp – X teljesítmény-feleslegnél",
                "correct": false
            },
            {
                "text": "Vy-nak-nak – Pr – Psz teljesítmény-feleslegnél",
                "correct": true
            },
            {
                "text": "Vx-nek – Fp – X vonóerő-feleslegnél",
                "correct": false
            },
            {
                "text": "Vx-nek – Pr – Psz vonóerő-feleslegnél",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "TODA – Clearway = …",
        "answers": [
            {
                "text": "ASDA",
                "correct": false
            },
            {
                "text": "LDA",
                "correct": false
            },
            {
                "text": "Stopway",
                "correct": false
            },
            {
                "text": "TORA",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik helyzetben nagyobb a szárny indukált ellenállása?",
        "answers": [
            {
                "text": "A súlyponthelyzetnek nincs erre hatása.",
                "correct": false
            },
            {
                "text": "Mellső és hátsó súlyponthelyzet esetén egyaránt.",
                "correct": false
            },
            {
                "text": "Hátsó súlyponthelyzet esetén.",
                "correct": false
            },
            {
                "text": "Mellső súlyponthelyzet esetén.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy a futópálya 1%-os lejtésével a leszállási úthossz …",
        "answers": [
            {
                "text": "5%-kal csökken.",
                "correct": false
            },
            {
                "text": "10%-kal csökken.",
                "correct": false
            },
            {
                "text": "5%-kal nő.",
                "correct": true
            },
            {
                "text": "10%-kal nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A nekifutási úthossz alatt …",
        "answers": [
            {
                "text": "a fékoldástól az 50 láb magasságra történő emelkedésig számított távolságot értjük.",
                "correct": false
            },
            {
                "text": "a fékoldástól az orrfutó elemeléséig számított távolságot értjük.",
                "correct": false
            },
            {
                "text": "a fékoldástól a repülőgép elemelkedéséig számított távolságot értjük.",
                "correct": true
            },
            {
                "text": "a fékoldástól az átesési sebesség 1,2-szeresénél nagyobb sebesség eléréséig megtett távolságot értjük.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy az átesési sebesség … megfelelő hátszél komponens esetén … a leszállási úthossz.",
        "answers": [
            {
                "text": "10%-nak – 20%-kal nő",
                "correct": true
            },
            {
                "text": "1%-nak – 5%-kal nő",
                "correct": false
            },
            {
                "text": "10%-nak – 20%-kal csökken",
                "correct": false
            },
            {
                "text": "1%-nak – 5%-kal csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik sebességet kell tartanunk, ha a legkisebb föld feletti távolság megtétele mellet szeretnénk biztosítani a legnagyobb emelkedést.",
        "answers": [
            {
                "text": "Vgazd sebességet.",
                "correct": false
            },
            {
                "text": "Vopt sebességet.",
                "correct": false
            },
            {
                "text": "Vy sebességet.",
                "correct": false
            },
            {
                "text": "Vx sebességet.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Ha Vgazd sebességet választjuk, akkor",
        "answers": [
            {
                "text": "a tüzelőanyag-fogyasztást maximalizáljuk.",
                "correct": false
            },
            {
                "text": "a repülőgép hatótávolságát maximalizáljuk.",
                "correct": false
            },
            {
                "text": "a minimális szükséges teljesítménnyel repülünk.",
                "correct": true
            },
            {
                "text": "a minimális légellenállással repülünk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik sebességet kell tartanunk, ha a legrövidebb idő alatt szeretnénk egy bizonyos magasságra emelkedni.",
        "answers": [
            {
                "text": "Vx sebességet.",
                "correct": false
            },
            {
                "text": "Vy sebességet.",
                "correct": true
            },
            {
                "text": "Vgazd sebességet.",
                "correct": false
            },
            {
                "text": "Vopt sebességet.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Növekvő magassággal Vx …",
        "answers": [
            {
                "text": "IAS szerint nő és TAS szerint csökken.",
                "correct": false
            },
            {
                "text": "IAS és TAS szerint is csökken.",
                "correct": false
            },
            {
                "text": "IAS szerint csökken és TAS szerint nő.",
                "correct": false
            },
            {
                "text": "IAS és TAS szerint is nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A kb. 10 cm magas száraz füves felület … növeli, a 10 cm magas nedves füves felület … növeli a felszállási úthosszt. A 10 cm-nél magasabb száraz füves felület … növeli a felszállási úthosszt.",
        "answers": [
            {
                "text": "kb. 25%-kal – kb. 30%-kal – kb. 30%-kal",
                "correct": false
            },
            {
                "text": "kb. 20%-kal – kb. 25%-kal – kb. 25%-kal.",
                "correct": true
            },
            {
                "text": "kb. 10%-kal – kb. 20%-kal – kb. 25%-kal",
                "correct": false
            },
            {
                "text": "kb. 10%-kal – kb. 20%-kal – kb. 20%-kal",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Az alábbiak közül jellemzően melyik helyzetben a legnagyobb a repülőgép szerkezeti túlterhelésének lehetősége?",
        "answers": [
            {
                "text": "Kisebb súly és hátsó súlypont esetén..",
                "correct": false
            },
            {
                "text": "Nagyobb súly és hátsó súlypont esetén.",
                "correct": true
            },
            {
                "text": "Kisebb súly és mellső súlypont esetén..",
                "correct": false
            },
            {
                "text": "Nagyobb súly és mellső súlypont esetén.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A belsőégésű Otto-motorral felszerelt repülőgép szükséges teljesítménye akkor minimális, ha a légellenállás minimális.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": true
            },
            {
                "text": "Igaz.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik állítás hamis?",
        "answers": [
            {
                "text": "A levegőben tölthető időt a minimális tüzelőanyag-fogyasztás esetén maximalizáljuk.",
                "correct": false
            },
            {
                "text": "A hatótávolságot a minimális teljesítmény esetén maximalizáljuk.",
                "correct": true
            },
            {
                "text": "A hatótávolság akkor a legnagyobb, ha a repülőgép a lehető legkisebb légellenállással repül.",
                "correct": false
            },
            {
                "text": "A hatótávolságot Vopt sebesség választásával maximalizáljuk.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Az üzemi súly …",
        "answers": [
            {
                "text": "az üzemanyag nélküli súly.",
                "correct": false
            },
            {
                "text": "a száraz üzemi súly és az üzemanyagok súlyának összege.",
                "correct": true
            },
            {
                "text": "a száraz üzemi súly, az üzemanyagok súlyának és a forgalmi teher összege.",
                "correct": false
            },
            {
                "text": "a száraz üzemi súly, az üzemanyagok súlyának és a hasznos teher összege.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A legtöbb levegőben tölthető idő és a hatótávolság …",
        "answers": [
            {
                "text": "mellső súlyponthelyzet esetén csökken.",
                "correct": false
            },
            {
                "text": "hátsó súlyponthelyzet esetén nő.",
                "correct": false
            },
            {
                "text": "A súlyponthelyzetnek nincs ezekre hatása.",
                "correct": false
            },
            {
                "text": "mellső és hátsó súlyponthelyzet esetén egyaránt csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Egy repülőgép tengerszintről 5500 feet-re 12 perc alatt képes felemelkedni. Mekkora átlagosan az emelkedés mértéke az emelkedés során?",
        "answers": [
            {
                "text": "kb. 460 feet/min.",
                "correct": true
            },
            {
                "text": "kb. 480 feet/min.",
                "correct": false
            },
            {
                "text": "kb. 660 feet/min.",
                "correct": false
            },
            {
                "text": "kb. 580 feet/min.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Egy futópálya hossza (TORA) 600 m, akadálymentes sáv nincs kijelölve. Az elemelkedéshez szükséges úthossz 389 m, az 50 láb magasság eléréséhez szükséges távolság pedig 761 m. Végrehajthatjuk-e a felszállást az adott körülmények alapján?",
        "answers": [
            {
                "text": "Igen.",
                "correct": false
            },
            {
                "text": "Nem.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Növekvő magassággal Vy …",
        "answers": [
            {
                "text": "IAS és TAS szerint is nő.",
                "correct": false
            },
            {
                "text": "IAS szerint nő és TAS szerint csökken.",
                "correct": false
            },
            {
                "text": "IAS és TAS szerint is csökken.",
                "correct": false
            },
            {
                "text": "IAS szerint csökken és TAS szerint nő.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Az orrkerekénél mért súly 90 font, mely mérési pont a viszonyítási síktól 40 inch-re van. A főfutók a viszonyítási síktól 95 inch-re vannak és a főfutóknál mért súly oldalanként 700 font. Milyen távolságra van a repülőgép súlypontja a viszonyítási síktól?",
        "answers": [
            {
                "text": "88,7 inch-re.",
                "correct": false
            },
            {
                "text": "90 inch-re.",
                "correct": false
            },
            {
                "text": "93, 2 inchre.",
                "correct": false
            },
            {
                "text": "91,6 inch-re.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "TORA + Stopway = …",
        "answers": [
            {
                "text": "Clearway",
                "correct": false
            },
            {
                "text": "TODA",
                "correct": false
            },
            {
                "text": "LDA",
                "correct": false
            },
            {
                "text": "ASDA",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép súlyának növekedésével a hatótávolság …, a legtöbb levegőben tölthető idő …, a repülőgép siklószáma …",
        "answers": [
            {
                "text": "csökken – csökken – nem változik.",
                "correct": true
            },
            {
                "text": "nő – nő – javul.",
                "correct": false
            },
            {
                "text": "csökken – nő – romlik.",
                "correct": false
            },
            {
                "text": "csökken – csökken – romlik.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A 10 cm-nél magasabb száraz füves felület … növeli, a 10 cm-nél magasabb nedves füves felület … is növelheti a leszállási úthosszt. Havas futópályafelület minimum … növeli a leszállási úthosszt.",
        "answers": [
            {
                "text": "kb. 25%-kal – 30%-kal – 40%-kal",
                "correct": false
            },
            {
                "text": "kb. 30%-kal – 40%-kal – 25%-kal",
                "correct": true
            },
            {
                "text": "kb. 10%-kal – 30%-kal – 20%-kal",
                "correct": false
            },
            {
                "text": "kb. 20%-kal – 30%-kal – 15%-kal",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik súlydefiníció foglalja magába a személyzet és csomagjaik súlyát?",
        "answers": [
            {
                "text": "A hasznos teher.",
                "correct": false
            },
            {
                "text": "Az üressúly.",
                "correct": false
            },
            {
                "text": "A száraz üzemi súly.",
                "correct": true
            },
            {
                "text": "A forgalmi teher.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Minél nagyobb fékszárnykitérítést alkalmazunk, a leszállási úthossz annál rövidebb lesz.",
        "answers": [
            {
                "text": "Hamis.",
                "correct": false
            },
            {
                "text": "Igaz.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A rendelkezésre álló leszállási úthossz = …",
        "answers": [
            {
                "text": "a TODA-val.",
                "correct": false
            },
            {
                "text": "LDA + Stopway.",
                "correct": false
            },
            {
                "text": "az LDA-val.",
                "correct": true
            },
            {
                "text": "TORA + Stopway.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Ha egy futópályán nincs megjelölve akadálymentes sáv (Clearway), akkor a repülőgépnek a kezdeti emelkedés során el kell érnie az 50 láb magasságot a futópálya …",
        "answers": [
            {
                "text": "TORA szakaszán.",
                "correct": true
            },
            {
                "text": "LDA szakaszán.",
                "correct": false
            },
            {
                "text": "ASDA szakszán.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Az emelkedés során az emelkedés szöge …",
        "answers": [
            {
                "text": "Az emelkedés szögére a szél nincs hatással.",
                "correct": false
            },
            {
                "text": "szembeszél esetén csökken, hátszél esetén az emelkedés szöge meredekebb lesz.",
                "correct": false
            },
            {
                "text": "szembeszél esetén meredekebb lesz, hátszél esetén az emelkedés szöge csökken.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Motorleállás esetén a földet érésig …",
        "answers": [
            {
                "text": "Vopt sebességet választva tudjuk megtenni a legnagyobb föld feletti távolságot. Ekkor a siklószög a lehető legnagyobb.",
                "correct": false
            },
            {
                "text": "Vgazd sebességet választva tudjuk megtenni a legnagyobb föld feletti távolságot. Ekkor a siklószög a lehető legkisebb.",
                "correct": false
            },
            {
                "text": "Vgazd sebességet választva tudjuk megtenni a legnagyobb föld feletti távolságot. Ekkor a siklószög a lehető legnagyobb.",
                "correct": false
            },
            {
                "text": "Vopt sebességet választva tudjuk megtenni a legnagyobb föld feletti távolságot. Ekkor a siklószög a lehető legkisebb.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A legtöbb levegőben tölthető idő …",
        "answers": [
            {
                "text": "szembeszél esetén csökken, hátszél esetén nő.",
                "correct": false
            },
            {
                "text": "szembeszél esetén nő, hátszél esetén csökken.",
                "correct": false
            },
            {
                "text": "A legtöbb levegőben tölthető időre a szél nincs hatással.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Megfelelő felszállási fékszárnybeállítás estén (a mechanizáció nélküli felszálláshoz képest) a nekifutási úthossz … , az 50 lábra történő kezdeti emelkedéshez … föld feletti távolság megtétele szükséges. A felszállási úthossz mindent egybevetve …",
        "answers": [
            {
                "text": "csökken – nagyobb – csökken.",
                "correct": true
            },
            {
                "text": "nő – nagyobb – nő.",
                "correct": false
            },
            {
                "text": "nő – kisebb – nem változik.",
                "correct": false
            },
            {
                "text": "csökken – kisebb – csökken.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A leszállási úthossz meghatározásánál a biztonságos számítás érdekében a szembeszél komponensnek … vesszük figyelembe, hátszél komponens esetén pedig … értékkel számolunk.",
        "answers": [
            {
                "text": "120%-át – 80%-os",
                "correct": false
            },
            {
                "text": "80%-át – 120%-os",
                "correct": false
            },
            {
                "text": "50%-át – 150%-os",
                "correct": true
            },
            {
                "text": "150%-át – 50%-os",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Általánosan elmondható, hogy a futópálya … emelkedésével a felszállási úthossz …",
        "answers": [
            {
                "text": "5%-os – 1%-kal nő.",
                "correct": false
            },
            {
                "text": "1%-os – 5%-kal nő.",
                "correct": true
            },
            {
                "text": "1%-os – 10%-kal nő.",
                "correct": false
            },
            {
                "text": "10%-os – 1%-kal nő.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Melyik állítás igaz?",
        "answers": [
            {
                "text": "A szerkezetileg megengedett maximális fel- és leszállósúly azonos érték.",
                "correct": false
            },
            {
                "text": "A szerkezetileg megengedett maximális gurulósúly lehet kisebb, mint a szerkezetileg megengedett maximális felszállósúly.",
                "correct": false
            },
            {
                "text": "A gurulósúly az az összsúly, mellyel a repülőgép a nekifutást megkezdi.",
                "correct": false
            },
            {
                "text": "Egy repülőgép üressúlya nem feltétlenül egyezik meg a gyártó által megadott üressúllyal.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Egy négyszemélyes repülőgép viszonyítási síkja a légcsavarkúp csúcsa. A repülőgép üressúlyának és a beletöltött olaj súlyának összege 1521,2 font, az ehhez tartozó nyomaték pedig 134855 font-inch. A beletöltött tüzelőanyag súlya 288 font, mely 95 inch erőkaron hat. Az első üléssor terhelése 330 font, mely 80,5 inch erőkaron hat. A második üléssor terhelése 150 font, 118,1 inch erőkarral. A megengedett maximális felszállósúly 2300 font, a súlypont mellső határhelyzete 82 inch, hátsó határhelyzete 93 inch a viszonyítási síktól. Végrehajthatjuk-e a felszállást az adott körülmények között? Milyen távolságra lesz a repülőgép súlypontja a viszonyítási síktól?",
        "answers": [
            {
                "text": "Nem. 93,6 inchre.",
                "correct": false
            },
            {
                "text": "Nem. 92,4 inchre.",
                "correct": false
            },
            {
                "text": "Igen. 90,2 inchre.",
                "correct": true
            },
            {
                "text": "Igen. 87,9 inchre.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "Hátszél esetén …",
        "answers": [
            {
                "text": "a repülőgép föld feletti sebessége nagyobb, mint a levegőhöz viszonyított sebessége, ezért (a szélcsendhez képest) hosszabb nekifutás után emelkedik el.",
                "correct": true
            },
            {
                "text": "a repülőgép föld feletti sebessége kisebb, mint a levegőhöz viszonyított sebessége, ezért (a szélcsendhez képest) rövidebb nekifutás után elemelkedik.",
                "correct": false
            },
            {
                "text": "a repülőgép föld feletti sebessége nagyobb, mint a levegőhöz viszonyított sebessége, ezért (a szélcsendhez képest) rövidebb nekifutás után elemelkedik.",
                "correct": false
            },
            {
                "text": "a repülőgép föld sebessége kisebb, mint a levegőhöz viszonyított sebessége, ezért (a szélcsendhez képest) hosszabb nekifutás után emelkedik el.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A száraz üzemi súly és a forgalmi teher összege …",
        "answers": [
            {
                "text": "az üzemanyag nélküli súly.",
                "correct": true
            },
            {
                "text": "megengedett maximális felszállósúly.",
                "correct": false
            },
            {
                "text": "a felszállósúly.",
                "correct": false
            },
            {
                "text": "az üzemi súly.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A felszállási úthossz meghatározásánál a biztonságos számítás érdekében a szembeszél komponensnek … vesszük figyelembe, hátszél komponens esetén pedig … értékkel számolunk.",
        "answers": [
            {
                "text": "80%-át – 120%-os",
                "correct": false
            },
            {
                "text": "150%-át – 50%-os",
                "correct": false
            },
            {
                "text": "50%-át – 150%-os",
                "correct": true
            },
            {
                "text": "120%-át – 80%-os",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A repülőgép üressúlya …",
        "answers": [
            {
                "text": "alatt azt a súlyt értjük, mely semmilyen üzemanyagot nem foglal magába .",
                "correct": false
            },
            {
                "text": "tartalmazhat bizonyos mennyiségű üzemanyagot.",
                "correct": true
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A súlypontszámítás során …",
        "answers": [
            {
                "text": "negatív nyomatéknak vesszük az óramutató járásával egyező irányú, és pozitív nyomatéknak vesszük az óramutató járásával ellentétes irányú nyomatékokat.",
                "correct": false
            },
            {
                "text": "pozitív nyomatéknak vesszük az óramutató járásával egyező irányú, és negatív nyomatéknak vesszük az óramutató járásával ellentétes irányú nyomatékokat.",
                "correct": false
            },
            {
                "text": "pozitív nyomatéknak vesszük a viszonyítási sík mögött, és negatív nyomatéknak vesszük a viszonyítási sík előtt keletkező nyomatékokat.",
                "correct": true
            },
            {
                "text": "negatív nyomatéknak vesszük a viszonyítási sík mögött, és pozitív nyomatéknak vesszük a viszonyítási sík előtt keletkező nyomatékokat.",
                "correct": false
            }
        ],
        "hint": ""
    },
    {
        "subject": "REPÜLÉSTERVEZÉS",
        "question": "A futópálya azon szakaszát, melyet megszakított felszállásnál a repülőgép kifékezésére használhatunk fel …",
        "answers": [
            {
                "text": "akadálymentes sávnak nevezünk.",
                "correct": false
            },
            {
                "text": "Stopway-nek nevezzük.",
                "correct": true
            },
            {
                "text": "Clearway-nek nevezzük.",
                "correct": false
            },
            {
                "text": "LDA-nak nevezzük.",
                "correct": false
            }
        ],
        "hint": ""
    },
/*Elsősegélynyújtásmeg.PDF*/
    {
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Az elsõsegély célja.....",
		answers: [
			{ text: "a kórházi ellátás elkerülése.", correct: false},
			{ text: "az élet megmentése, megakadályozni a további egészségkárosodást, a tanácsadás, illetve elõsegíteni a gyógyulást.", correct: true},
			{ text: "stabil oldalfekvõ helyzetbe állítás.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Az elsõsegélynyújtó feladatai.........",
		answers: [
			{ text: "tájékozódás, a helyszín biztosítása, segítség kérése, illetve saját testi épségének megóvása.", correct: true},
			{ text: "olyan beavatkozásokat tenni, mely végleges gyógyulást biztosít a sérült számára.", correct: false},
			{ text: "mindössze a mentõk értesítése, és a beteg stabil oldalfekvõ helyzetbe állítása.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan vizsgálja meg a beteget?",
		answers: [
			{ text: "Tapintással úgy, hogy erõs nyomás hatására hogyan reagál, kiabál-e.", correct: false},
			{ text: "Úgy, hogy vérnyomást, pulzust mérek, és kikérdezem állapotáról.", correct: false},
			{ text: "Meg kell állapítani, hogy eszméleténél van-e, lélegzik-e, illetve van-e tapintható pulzusa.", correct: true},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Eszméletlenséget hogyan ismer fel?",
		answers: [
			{ text: "Alvó állapothoz hasonló, hang- és fájdalomingerre nem reagál a sérült, a légutak elzáródhatnak a garat izmainak reflexes mûködésének megszûnése miatt.", correct: true},
			{ text: "Alvó állapothoz hasonló, fájdalomingerre nem reagál a sérült, de lélegzik.", correct: false},
			{ text: "A test teljes elvörösödése jelzi, hiszen a légzés leállt, így nincs oxigénellátás.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan helyezi el a jól légzõ eszméletlen beteget?",
		answers: [
			{ text: "Hanyatt, hogy biztosítsam továbbra is a biztos levegõellátást.", correct: false},
			{ text: "Stabil oldalfekvésben.", correct: true},
			{ text: "Nincs jelentõsége a testhelyzetnek, ugyanis a légzés a legfontosabb, ami fennáll.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Mi az akadálya a stabil oldalfekvõ helyzetbe hozásnak?",
		answers: [
			{ text: "Füst- és egyéb mérgezések.", correct: false},
			{ text: "Fejsérülés.", correct: false},
			{ text: "Gerincsérülés, mellkas, medence sérülés, has tompasérülés, illetve végtag törések.", correct: true},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Egy felnõtt normális pulzusszáma:",
		answers: [
			{ text: "60-80 / perc", correct: true},
			{ text: "14-16 / perc", correct: false},
			{ text: "80-90 / perc", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Egy felnõtt normális légzésszáma:",
		answers: [
			{ text: "14-16/perc", correct: true},
			{ text: "60-80/perc", correct: false},
			{ text: "80-90/perc", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Klinikai halál állapota a .....",
		answers: [
			{ text: "keringés és légzés leállása után minimum 5 percig áll fenn.", correct: false},
			{ text: "keringés és légzés leállása után 4 percig áll fenn.", correct: true},
			{ text: "keringés és légzés leállása után rögtön beáll.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "A biológiai halál állapota a ..........",
		answers: [
			{ text: "keringés és légzés leállása után 5 percig áll fenn.", correct: false},
			{ text: "keringés és légzés leállása után 4 percig áll fenn.", correct: false},
			{ text: "keringés és légzés leállása után 5 perctõl áll fenn.", correct: true},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Vérzéstípusok a következõk:",
		answers: [
			{ text: "Ütõeres, visszeres, illetve hajszáleres.", correct: true},
			{ text: "I, II, III fokú.", correct: false},
			{ text: "Belsõ, illetve külsõ vérzés.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Artériás és vénás vérzés ellátása:",
		answers: [
			{ text: "A nyomókötést átvérzés esetén cserélni kell.", correct: false},
			{ text: "Az artériás nyomáspont szorítása után nyomókötést kell alkalmazni, átvérzés esetén felülkötni.", correct: true},
			{ text: "El kell szorítani valamilyen módon egy eret úgy, hogy a vérzés csillapodjon, majd védõkötést alkalmazni, hogy a sebbe szennyezõdés ne kerüljön.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Lélegeztetéskor elõforduló hibák:",
		answers: [
			{ text: "Légúti akadály képzõdése, a gyomor felfújása, a tüdõ sérülése, illetve elégtelen oxigén ellátás lehetnek.", correct: true},
			{ text: "A saját légzési tempóval végezzük.", correct: false},
			{ text: "Nem stabil oldalfekvést alkalmazunk, és nem helyezzük kezünket a sérült mellkasára.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Sokk okai lehetnek:",
		answers: [
			{ text: "Érpálya tágulása, vérvesztés, illetve folyadékvesztés.", correct: true},
			{ text: "Túl magas vérnyomás, illetve mérgezés.", correct: false},
			{ text: "Ijedtség, túlzott alkohol-, illetve drogfogyasztás.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "A sokk tünetei:",
		answers: [
			{ text: "mozdulatlanság, légzés megszûnése.", correct: false},
			{ text: "bõrpír, szapora légzés.", correct: false},
			{ text: "sápadt, verítékes bõr, szapora pulzusszám, ájulásérzés.", correct: true},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Melyek a kipufogógáz-mérgezés tünetei, hogyan kell ellátni?",
		answers: [
			{ text: "A végtagok elgyengülnek, köhögési roham lép fel, menekülésre képtelen a beteg, piros a nyálkahártyája, és ugyanúgy kell ellátni, mint az eszméletlen sérültet, miután szabad levegõre vittük.", correct: true},
			{ text: "A nyálkahártya kifehéredése, kipirosodott bõr a tünet, ellátni úgy kell, hogy a füstös helyiségben hagyva a beteget fokozatosan, lassa szabad csak szellõztetni, hogy a friss levegõ nehogy sokkot okozzon.", correct: false},
			{ text: "Bevérzett szem, kiütéses bõr, szapora pulzusszám a tünetek, és a sérültet mozgatni tilos.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan kell az áramütést szenvedett sérültet ellátni?",
		answers: [
			{ text: "Ki kell szabadítani, majd az áramkört megszakítani. Szükség esetén újraéleszteni.", correct: false},
			{ text: "Nem szabad hozzányúlni, ki kell hívni a mentõket.", correct: false},
			{ text: "Elõször meg kell szakítani az áramkört, majd kiszabadítani a sérültet, ezután a légzés, vagy keringésleállás után újraéleszteni.", correct: true},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan kell a gerincsérültet ellátni?",
		answers: [
			{ text: "A sérültet stabil oldalfekvõ helyzetbe kell állítani, és lehetõleg minél kevesebbet mozgatni.", correct: false},
			{ text: "A sérültet mozgatni tilos, lehetõleg nem szabad magára hagyni, azonnali segítséget kell kérni.", correct: true},
			{ text: "A gerincet ki kell egyenesíteni, és hátonfekvõ helyzetbe kell állítani a sérültet mindaddig, míg a mentõ meg nem érkezik.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan látja el a szemsérült beteget?",
		answers: [
			{ text: "Steril fedõkötéssel, a sérült nem hagyható magára.", correct: true},
			{ text: "Desault kötéssel, utána magára kell hagyni.", correct: false},
			{ text: "Nem szabad mozgatni, a mentõt ki kell hívni.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan látja el a nyílttörést szenvedett beteget?",
		answers: [
			{ text: "Egy határozott mozdulattal helyre kell rántani a végtagot, majd fertõtleníteni, befáslizni, illetve a végtagot rögzíteni.", correct: false},
			{ text: "Nem szabad megmozdítani, csak fertõtleníteni.", correct: false},
			{ text: "A sebkörnyék fertõtlenítése után steril kötést kell alkalmazni, majd a végtagot rögzíteni.", correct: true},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan helyezi el a sápadt ájult beteget?",
		answers: [
			{ text: "Fektetve, a lábait magasba emelve.", correct: true},
			{ text: "Stabil oldalfekvõ helyzetben.", correct: false},
			{ text: "Hason fektetve, vagy félülõ helyzetben.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan távolítja el a légúti idegentesteket?",
		answers: [
			{ text: "A szájüregbõl a látható idegentestet kivesszük, a szájüreget kitöröljük, illetve a Heimlich-féle mûfogást alkalmazzuk.", correct: true},
			{ text: "Úgy, hogy a sérülttel vizet itatunk, majd azt kiköpetjük vele. Zsebkendõt alkalmazva a szájüreget kitisztítjuk.", correct: false},
			{ text: "A lehetõ leghamarabb egy légzõcsövet kell a beteg torkán letolni, majd kézzel a látható idegentestet eltávolítani.", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Hogyan kell ellátni a vállficamot?",
		answers: [
			{ text: "Nem szabad mozgatni.", correct: false},
			{ text: "Desault kötést kell alkalmazni.", correct: true},
			{ text: "Egy határozott mozdulattal helyre kell ugrasztani.", correct: false},
		]
	},
	{
		subject: "ELSŐSEGÉLYNYÚJTÁS",
		question: "Mi a teendõ gyógyszermérgezés esetén?",
		answers: [
			{ text: "Eszméleténél lévõ beteget langyos, sós vízzel hányatni kell.", correct: true},
			{ text: "Hányatni tilos, csak vizet szabad itatni a beteggel.", correct: false},
			{ text: "Szabad levegõre kell vinni a beteget, majd a mentõket értesíteni.", correct: false},
		]
	},
/*Légiüzemeltetés PDF */
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Egy gazdagabb keverék beállítást kell használni az emelkedési szakaszokban. Ez azt eredményezi, hogy ...",
		answers: [
			{ text: "kismértékben csökken a teljesítmény.", correct: false},
			{ text: "magasabb lesz a hatásfok.", correct: false},
			{ text: "alacsonyabb lesz a hengerfej hõmérséklete.", correct: true},
			{ text: "nagyobb lesz a nyomaték.", correct: false},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Milyen tulajdonságú környezeti levegõ esetén érhetõ el a legnagyobb hajtómû teljesítmény?",
		answers: [
			{ text: "magas nyomású, hideg és száraz levegõ", correct: true},
			{ text: "alacsony nyomású, meleg és páradús levegõ", correct: false},
			{ text: "magas nyomású, hideg és páradús levegõ", correct: false},
			{ text: "magas nyomású, meleg és száraz levegõ", correct: false},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Mi a feladata a kipufogó gáz hõmérsékletét mérõ mûszernek egy dugattyús motor esetén?",
		answers: [
			{ text: "Szabályozza a hengerfej hõmérsékletét.", correct: false},
			{ text: "A helyes keverék arány beállításában segíti a pilótát.", correct: true},
			{ text: "Szabályozza a porlasztóba bejutó levegõ áramot.", correct: false},
			{ text: "Szabályozza a tüzelõanyag hõmérsékletét.", correct: false},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Állandó gázkar és fordulatszám beállítással (a keverék arány állandó) történõ emelkedés közben ...",
		answers: [
			{ text: "a szívótér nyomás csökken.", correct: true},
			{ text: "a fordulatszám csökken.", correct: false},
			{ text: "a szívótér nyomás nõ.", correct: false},
			{ text: "a fordulatszám nõ.", correct: false},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Mi fog történni az állandó fordulatszámú légcsavar geometriai beállítási szögével, ha a szívótér nyomása megnövekszik?",
		answers: [
			{ text: "Változatlan marad.", correct: false},
			{ text: "Csökkenni fog azért, hogy a motor növekedni tudjon.", correct: false},
			{ text: "Nõni fog.", correct: true},
			{ text: "Nõni fog és azután egy rövid idõ elmúltával visszaáll az elõzõ értékre.", correct: false},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "A légcsavar utáni levegõáramlás (slipstream) hatása a legszembetûnõbb ...",
		answers: [
			{ text: "alacsony sebességek és kis teljesítmény beállítás esetén.", correct: false},
			{ text: "nagysebességek és nagy teljesítmény beállítás esetén.", correct: false},
			{ text: "nagysebességek és kis teljesítmény beállítás esetén.", correct: false},
			{ text: "alacsony sebességek és nagy teljesítmény beállítás esetén.", correct: true},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Aszimmetrikus terhelés (p-factor) lép fel ...",
		answers: [
			{ text: "a légcsavaron, ha a repülõgépnek nagy az állásszöge.", correct: true},
			{ text: "a légcsavaron, ha a légcsavar kiegyensúlyozatlan.", correct: false},
			{ text: "csak az óramutató járásával megegyezõ irányba forgó légcsavaron.", correct: false},
			{ text: "a légcsavaron, de csak akkor, ha az állandó fordulatszámú légcsavar-szerkezet törött.", correct: false},
		]
	},
	{
		subject: "LÉGIÜZEMELTETÉS",
		question: "Hogyan kerülhetjük el a motor túlterhelõdését, ha egy állandó sebességû légcsavarral ellátott motor teljesítményét változtatjuk?",
		answers: [
			{ text: "A szívótérnyomás növelése elõtt beállítjuk a fordulatszámot.", correct: false},
			{ text: "A szívótérnyomás növelése elõtt megnöveljük a fordulatszámot.", correct: true},
			{ text: "A szívótérnyomás növelése elõtt lecsökkentjük a fordulatszámot.", correct: false},
			{ text: "a fordulatszám növelése elõtt megnöveljük a szívótérnyomást.", correct: false},
		]
	},
/* Mechanika PDF */
	{
		subject: "MECHANIKA",
		question: "A következõk közül melyik a helyes.?",
		answers: [
			{ text: "Erõkar = Nyomaték / erõ", correct: true},
			{ text: "Erõkar = erõ / nyomaték", correct: false},
			{ text: "Nyomaték = erõ / erõkar", correct: false},
			{ text: "Erõkar = erõ x nyomaték", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "A tömegközéppont :",
		answers: [
			{ text: "Egy a hossztengely mentén elhelyezkedõ központ,egy vonatkoztatási vonalhoz viszonyítva.", correct: false},
			{ text: "A tolóerõ középpontja a hossztengely mentén , egy vonatkoztatási ponthoz viszonyítva.", correct: false},
			{ text: "Ahol a repülõgép összes tömegét egy pontban lévõnek tételezzük fel.", correct: true},
			{ text: "Egy semleges pont a hossztengely mentén , egy vonatkoztatási vonalhoz viszonyítva.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Egy test súlya",
		answers: [
			{ text: "a tömegének és a nehézségi gyorsulásnak a szorzata.", correct: true},
			{ text: "a tömegének és a nehézségi gyorsulásnak a különbsége.", correct: false},
			{ text: "a tömegének és a nehézségi gyorsulásnak a hányadosa.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Az erõ fizikai értelemben:",
		answers: [
			{ text: "a tehetetlenség mértéke.", correct: false},
			{ text: "az a mennyiség, amely arányos a forgástengelytõl való távolságtól.", correct: false},
			{ text: "az a hatás, mely egy test mozgásállapotát irány, vagy nagyság szerint megváltoztatja.", correct: true},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Az aerodinamikai erõk.........",
		answers: [
			{ text: "egyenesen arányosak a közeg sûrûségével, és négyzetesen a közeghez viszonyított relatív sebességgel.", correct: true},
			{ text: "egyenesen arányosak a közeg sûrûségével, és fordítottan a közeghez viszonyított relatív sebességgel.", correct: false},
			{ text: "fordítottan arányosak a közeg sûrûségével, és négyzetesen a közeghez viszonyított relatív sebességgel.", correct: false},
			{ text: "egyenesen arányosak a közeg sûrûségével, és a közeghez viszonyított relatív sebességgel.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Tehetetlenségi erõk.......",
		answers: [
			{ text: "a felület mentén megoszló erõk.", correct: false},
			{ text: "a gyorsulásból adódó erõk, melyek mindig a gyorsulással ellentétes értelmûek.", correct: true},
			{ text: "a centripetális és a gyorsító erõk.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Egyensúlyi erõrendszereknek nevezzük azokat az erõrendszereket, melyek",
		answers: [
			{ text: "hatására a nyugvó test továbbra is nyugvásban marad.", correct: true},
			{ text: "erõösszetevõi egy hatásvonalon vannak.", correct: false},
			{ text: "térfogat mentén oszlanak meg.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Egyenesvonalú egyenletes mozgás",
		answers: [
			{ text: "akkor van, ha az anyagi pont állandóan ugyanabban az irányban halad, és egyenló idõk alatt egyenló távolságokat tesz meg.", correct: true},
			{ text: "akkor van, ha az anyagi pont állandóan ugyanabban az irányban halad.", correct: false},
			{ text: "esetén igaz a következõ képlet: v=s*t, ahol v=sebesség, s=út, t=idõ.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "A helyzeti energia:",
		answers: [
			{ text: "a test helyi nullenergiája.", correct: false},
			{ text: "az erõ és a gyorsulás szorzata.", correct: false},
			{ text: "E=m*g*h, ahol m=tömeg, g=nehézségi gyorsulás, h= a test emelési magassága.", correct: true},
		]
	},
	{
		subject: "MECHANIKA",
		question: "A helyzeti energia:",
		answers: [
			{ text: "az erõ és a gyorsulás szorzata.", correct: false},
			{ text: "E=m*g*h, ahol m=tömeg, g=nehézségi gyorsulás, h= a test emelési magassága.", correct: true},
			{ text: "a test helyi nullenergiája.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "A mozgási energia",
		answers: [
			{ text: "négyzetesen arányos a sebességgel.", correct: true},
			{ text: "egyenesen arányos a sebességgel.", correct: false},
			{ text: "fordítottan arányos a sebességgel.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Newton I. szerint:",
		answers: [
			{ text: "F=m*a, ahol F=erõ, m=tömeg, a=gyorsulás.", correct: false},
			{ text: "minden test megtartja egyenesvonalú gyorsuló, vagy lassuló mozgását mindaddig, míg más testek hatásai mozgási állapotának megváltoztatására nem kényszerítik.", correct: false},
			{ text: "minden test megtartja egyenesvonalú egyenletes mozgását, vagy nyugalmi állapotát mindaddig, míg más testek hatásai mozgási állapotának megváltoztatására nem kényszerítik.", correct: true},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Newton II. törvénye szerint:",
		answers: [
			{ text: "F=m*a, ahol F=erõ, m=tömeg, a=gyorsulás.", correct: true},
			{ text: "minden test megtartja egyenesvonalú egyenletes mozgását, vagy nyugalmi állapotát mindaddig, míg más testek hatásai mozgási állapotának megváltoztatására nem kényszerítik.", correct: false},
			{ text: "a forgatónyomaték: M=F*k, ahol F=erõ, k=az erõ karja.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Newton III. törvénye szerint:",
		answers: [
			{ text: "F=m*a, ahol F=erõ, m=tömeg, a=gyorsulás.", correct: false},
			{ text: "minden test megtartja egyenesvonalú egyenletes mozgását, vagy nyugalmi állapotát mindaddig, míg más testek hatásai mozgási állapotának megváltoztatására nem kényszerítik.", correct: false},
			{ text: "ha egy testre egy másik test erõhatást gyakorol, akkor az erõvel egyidejûleg mindig fellép egy vele egyenlõ nagyságú, de ellenkezõ irányú erõ.", correct: true},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Melyik állítás igaz a forgatónyomatékról?",
		answers: [
			{ text: "Egyezményes megállapodás szerint mindig az óramutató járásával megegyezõ értelmû a pozitív.", correct: false},
			{ text: "Mértékegysége: Nm (newtonméter)", correct: true},
			{ text: "Az erõvel négyzetes összefüggésben van.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Egyenletes körmozgás esetén:",
		answers: [
			{ text: "azért nem beszélünk változó mozgásról, mert a kerületi sebesség nagysága állandó.", correct: false},
			{ text: "a fordulatszám megegyezik a periódusidõvel.", correct: false},
			{ text: "a szögelfordulás a szögsebesség és az idõ szorzata.", correct: true},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Egy golyót spárgán pörgetve a spárga elszakadása esetén:",
		answers: [
			{ text: "a golyó érintõirányban elrepül.", correct: true},
			{ text: "a golyó sugárirányban kifelé elrepül.", correct: false},
			{ text: "a golyó pályája a centrifugáliserõ-vektor és a kerületisebesség- vektor eredõje irányába esik.", correct: false},
		]
	},
	{
		subject: "MECHANIKA",
		question: "Ha egy anyagi pontra egyidejûleg több erõ is hat, ezek együttes hatása egyenértékû:",
		answers: [
			{ text: "vektori eredõjük hatásával.", correct: true},
			{ text: "skaláris szorzatukkal.", correct: false},
			{ text: "különbségükkel.", correct: false},
		]
	},
	{
		subject: "MOTORTAN",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "MŰSZERTAN",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "NAVIGÁCIÓ",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "RÁDIÓTÁVBESZÉLŐ KEZELŐI ISMERETEK",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "REPÜLÉSEGÉSZSÉGÜGYI ALAPISMERETEK",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "REPÜLÉSELMÉLET",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI ELJÁRÁSOK",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "REPÜLÉSI SZABÁLYOK",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "REPÜLÉSMETEOROLÓGIA",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "SZERKEZETTAN",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	{
		subject: "ÜZEMELTETÉSI ISMERETEK",
		question: "mmm",
		answers: [
			{ text: "mmm", correct: true},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
			{ text: "mmm", correct: false},
		]
	},
	
];











































