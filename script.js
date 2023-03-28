// Kérdések + válaszok tárolása
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
		]
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
		]
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
		]
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

];

const selectedAnswers = []; 
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const topicEl = document.getElementById("topics");

let currentQuestionIndex = 0;
let score = 0;





topicEl.addEventListener("click", function(event) {
  const clickedTopic = event.target.textContent;
  const questionElements = document.querySelectorAll(".question");

  questionElements.forEach(function(questionElement) {
    if (questionElement.dataset.subject === clickedTopic) {
      questionElement.style.display = "block";
    } else {
      questionElement.style.display = "none";
    }
  });
});





//Kilistázzuk az összes témakört. 
function listTopics() {
  const topics = [];
  questions.forEach((q) => {
    if (!topics.includes(q.subject)) {
      topics.push(q.subject);
    }
  });
  topics.sort(); // Rendezzük a témaköröket névsorrendbe
  const topicEl = document.getElementById("topics");
  topics.forEach((t) => {
    const pEl = document.createElement("p"); // Létrehozunk egy új <p> elemet
    pEl.textContent = t; // Beállítjuk a szöveget
    pEl.addEventListener("click", function(event) {
      const clickedTopic = event.target.textContent;
      document.getElementById("div2").textContent = clickedTopic;
    });
    topicEl.appendChild(pEl); // Hozzáadjuk az elemet a "topics" id-jú elemhez
  });
  
}

// Berakjuk az álltalunk kiválasztott témakör kérdéseit a selectedQuestions tömbbe. 
const topicsElem = document.getElementById("topics");
let selectedQuestions = [];

topicsElem.addEventListener("click", function(event) {
  // Töröljük a korábbi kattintásokból származó kérdéseket és válaszokat
  selectedQuestions = [];

  const clickedTopic = event.target.textContent;

  questions.forEach(function(question) {
    if (question.subject === clickedTopic) {
      selectedQuestions.push(question);

    }

  });
  topicEl.style.display = "none"; // Rejtjük el a "topics" id-jú elemet
  deleteQuizStatusBoxes();
  createQuizStatusBoxes(selectedQuestions.length);
  startQuiz();
});






// Kezdeti állapot beállítása
function startQuiz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML= "Következő";
	showQuestion();
}

// Következő kérdés megjelenítése
const toggleSwitch = document.getElementById("toggleSwitch");

function showQuestion() {
  resetState();



  let currentQuestion = selectedQuestions[currentQuestionIndex];

  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  // Hints divbe való beszúrása
  const hintDiv = document.getElementById("hint");
  hintDiv.innerHTML = currentQuestion.hint;

 const hintIcon = document.createElement("i");
hintIcon.id = "hinticon";
hintIcon.classList.add("fas", "fa-question-circle", "fa-2x");
if (currentQuestion.hint) {
  hintIcon.style.display = "inline";
  hintIcon.onclick = showHint;
} else {
  hintIcon.style.display = "none";
}
questionElement.appendChild(hintIcon);

  currentQuestion.answers.forEach(answer => {
    if (toggleSwitch.checked && !answer.correct) {
      return;
    }
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  
  // Quiz status boxok színének frissítése
  quizStatusBoxes.forEach((box, index) => {
    box.classList.remove("current");
    if (index === currentQuestionIndex) {
      box.classList.add("current");
    }
  });
}

toggleSwitch.addEventListener("change", showQuestion);

function hint(){

};
// Választás letárolás és ellenőrzése
function selectAnswer(e) {
  const selectBtn = e.target;
  const answerIndex = Array.from(answerButtons.children).indexOf(selectBtn);
  selectedAnswers.push(answerIndex); // Letároljuk a kiválasztott válasz sorszámát.
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button, index) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
  updateQuizStatusBox(isCorrect);
}

// A függvény először kiválasztja az aktuális kérdéshez tartozó választ, majd kiszámolja annak sorszámát az összes válasz között, majd eltárolja azt a "selectedAnswers" tömbben az adott kérdéshez tartozóan, azaz a megadott "questionIndex" sorszámú indexen. A függvény akkor hívódik meg, amikor a felhasználó választ ad az adott kérdésre a "selectAnswer" függvényen keresztül. A "questionIndex" paramétert a "selectAnswer" függvényből kapjuk meg, amikor meghívjuk a "storeAnswer" függvényt.
function storeAnswer(questionIndex) {
  const selectBtn = answerButtons.querySelector('.selected');
  const answerIndex = Array.from(answerButtons.children).indexOf(selectBtn);
  selectedAnswers[questionIndex] = answerIndex;
}

// Az aktuális állapot visszaállítása
function resetState(){
	nextButton.style.display = "none";
	while(answerButtons.firstChild){
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

// Pontszámok megjelenítése
function showScore(){
	resetState();
	questionElement.innerHTML = `A pontszámod ${Math.floor((score / selectedQuestions.length) * 100)}%!`;
	nextButton.innerHTML = "Újrakezdés";
	nextButton.style.display = "block"

}

// Következő kérdés gomb megjelenítése és funkciója
function handleNextButton(){
	currentQuestionIndex++;
	if(currentQuestionIndex < selectedQuestions.length){
		showQuestion();
	}else{
		showScore();
	}
}

nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < selectedQuestions.length){
		handleNextButton()
	}else{
		removeCorrectClass();
		removeInCorrectClass();
		startQuiz();
	}
});


// Fenti pontok a kérdéseket szimbolizálva
const quizStatus = document.getElementById("quiz-status");
const quizStatusBoxes = [];

function deleteQuizStatusBoxes(num){
    // Töröljük a már meglévő quiz-status-box elemeket
    while (quizStatus.firstChild) {
        quizStatus.removeChild(quizStatus.firstChild);
    }
   }

function createQuizStatusBoxes(num){
    for(let i = 0; i < num; i++){
        const box = document.createElement("div");
        box.classList.add("quiz-status-box");
        box.setAttribute("data-question-no", i + 1); // hozzáadja a sorszámot a data-question-no attribútumhoz
        box.addEventListener("click", function(){
            const questionNo = this.getAttribute("data-question-no"); // lekéri a data-question-no attribútum értékét
            displayQuestion(questionNo); // a displayQuestion függvénnyel megjelenítjük a kérdést a megfelelő sorszámú quizstatusboxra kattintva
        });
        quizStatus.appendChild(box);
        quizStatusBoxes.push(box);
    }
    quizStatusBoxes.forEach(box => {
  box.addEventListener("click", showQuestionOnQuizStatusBox);

});
}

function displayQuestion(questionNo) {
    // itt a kérdés megjelenítése történik a megadott sorszám alapján
    nextButton.innerHTML = "Újrakezdés";
	nextButton.style.display = "block"
}

function updateQuizStatusBox(isCorrect){

    const box = quizStatusBoxes[currentQuestionIndex];
    box.classList.add(isCorrect ? "correct" : "incorrect");
    
}



function showQuestionOnQuizStatusBox(e) {
  const clickedBox = e.target;
  const clickedQuestionNo = parseInt(clickedBox.getAttribute("data-question-no")) - 1;

  if (clickedQuestionNo !== currentQuestionIndex) {
    currentQuestionIndex = clickedQuestionNo;
    showQuestion();
  }

  // Ha a válasz a quiz status boxban van megjelenítve, akkor ezt is frissíteni kell
  if (selectedAnswers[currentQuestionIndex]) {
    const selectedAnswerIndex = selectedQuestions[currentQuestionIndex].answers.findIndex(answer => answer.text === selectedAnswers[currentQuestionIndex]);
    const selectedAnswerButton = answerButtons.children[selectedAnswerIndex];
    selectedAnswerButton.classList.add(selectedAnswerButton.dataset.correct ? "correct" : "incorrect");
  }
}


// Az X ikonra kattintás eseménykezelője
		document.getElementById('restart-icon').addEventListener('click', function() {
			// Az alkalmazás újraindítása
			location.reload();
		});

// Felugró ablak megjelenítése
		

function removeCorrectClass() {
  const correctEls = document.querySelectorAll(".correct");
  correctEls.forEach((el) => {
    el.classList.remove("correct");
  });
}
function removeInCorrectClass() {
  const correctEls = document.querySelectorAll(".incorrect");
  correctEls.forEach((el) => {
    el.classList.remove("incorrect");
  });
}


function restartQuiz() {
  // Töröljük az álltalalam adott válaszokat
  selectedAnswers.length = 0;

  // Rejtjük az összes kérdést és válaszlehetőséget
  const questionElements = document.querySelectorAll(".question");
  questionElements.forEach(questionElement => {
    questionElement.style.display = "none";
  });

  // Visszaállítjuk a "topics" és a "next" gombokat
  topicEl.style.display = "block";
  nextButton.style.display = "none";

  // Töröljük a quiz status boxokat
  const quizStatusContainer = document.getElementById("quiz-status-container");
  quizStatusContainer.innerHTML = "";

  // Visszaállítjuk a kezdő értékeket
  currentQuestionIndex = 0;
  score = 0;
}

const hintPopup = document.getElementById('hint-popup');
const overlay = document.getElementById('overlay');

function showHint() {
			document.getElementById("hint-popup").style.display = "block";
			overlay.classList.add('show');
		}

function closeHint() {
			document.getElementById("hint-popup").style.display = "none";
			overlay.classList.remove('show');
		}
listTopics();



















