// Fragenpool fürs Pub-Quiz.
// Format: { text, options[], correct (Index 0-basiert), explanation }
// Pro Spiel werden QUESTIONS_PER_GAME (siehe server.js) zufällig daraus gezogen.

module.exports = [
  {
    text: "Wie viele Herzen hat ein Oktopus?",
    options: ["1, ist doch ein Tier wie jedes andere", "3", "8 – eines pro Arm", "Keins. Oktopusse vergeben Herzen an niemanden."],
    correct: 1,
    explanation: "Drei Herzen: zwei für die Kiemen, eines für den Rest."
  },
  {
    text: "Was ist schwerer: 1 kg Federn oder 1 kg Blei?",
    options: ["Blei – ist halt Blei", "Federn – die wiegen schwer auf dem Gewissen", "Beides gleich schwer", "Hängt vom Wetter ab"],
    correct: 2,
    explanation: "Ein Kilo bleibt ein Kilo. Aber zugegeben: ein Sack Federn sieht imposanter aus."
  },
  {
    text: "In welchem Jahr fand die deutsche Wiedervereinigung statt?",
    options: ["1989", "1990", "1991", "Letzten Dienstag"],
    correct: 1,
    explanation: "3. Oktober 1990 – Tag der Deutschen Einheit."
  },
  {
    text: "Wie viele Streifen hat eine durchschnittliche Banane?",
    options: ["Bananen haben keine Streifen", "47", "Genau 9, das ist Bananen-Standard", "So viele wie ein Zebra Bananen hat"],
    correct: 0,
    explanation: "Bananen haben keine Streifen. Glückwunsch, falls du nicht in die Falle getappt bist."
  },
  {
    text: "Welches Tier kann seine Zunge nicht herausstrecken?",
    options: ["Giraffe", "Frosch", "Krokodil", "Schwiegermutter"],
    correct: 2,
    explanation: "Krokodile haben ihre Zunge am Mundboden festgewachsen – Schluss mit Frechheiten."
  },
  {
    text: "Was bedeutet die Abkürzung „WLAN“?",
    options: ["Wahnsinnig Langsames Anti-Netzwerk", "Wireless Local Area Network", "Wo Lebt Andis Nachbar", "Wenn Lädt Alles Nicht"],
    correct: 1,
    explanation: "Wireless Local Area Network. Manchmal stimmt aber auch die letzte Antwort."
  },
  {
    text: "Wie heißt die Hauptstadt von Australien?",
    options: ["Sydney", "Melbourne", "Canberra", "Da, wo die Kängurus gerade sind"],
    correct: 2,
    explanation: "Canberra. Sydney ist nur der berühmtere Bruder."
  },
  {
    text: "Wie viele Zwerge begleiten Schneewittchen?",
    options: ["5", "7", "9", "Kommt auf den Tarifvertrag an"],
    correct: 1,
    explanation: "Sieben. Hatschi, Schlafmütz, Brummbär und Co."
  },
  {
    text: "Welche Farbe hat ein Schimmel (das Pferd, nicht das auf dem Brot)?",
    options: ["Schwarz", "Braun", "Weiß", "Grünlich, wenn er lange im Stall stand"],
    correct: 2,
    explanation: "Schimmel sind weiße Pferde. Auf altem Brot allerdings…"
  },
  {
    text: "Wie viele Augen hat eine Biene?",
    options: ["2, klar", "4", "5", "Alle, die sie braucht, um deinen Kuchen zu finden"],
    correct: 2,
    explanation: "Fünf: zwei große Komplexaugen plus drei Punktaugen oben."
  },
  {
    text: "Welches Tier hat den höchsten Blutdruck?",
    options: ["Maus", "Giraffe", "Elefant", "Mein Chef, wenn der Drucker streikt"],
    correct: 1,
    explanation: "Die Giraffe – sonst käme das Blut nicht den langen Hals hoch."
  },
  {
    text: "Wie viele Knochen hat ein Neugeborenes ungefähr?",
    options: ["206 wie Erwachsene", "Etwa 300", "Nur 50", "Kommt drauf an, wer zählt"],
    correct: 1,
    explanation: "Rund 300 – die wachsen mit der Zeit zu 206 zusammen."
  },
  {
    text: "In welchem Land wurde die Pizza erfunden?",
    options: ["Italien", "Griechenland", "China", "Bei Lieferando"],
    correct: 0,
    explanation: "Italien, genauer gesagt Neapel."
  },
  {
    text: "Wer schrieb „Faust“?",
    options: ["Goethe", "Schiller", "Shakespeare", "Der eine Typ aus deinem Deutsch-LK"],
    correct: 0,
    explanation: "Johann Wolfgang von Goethe – sein Lebenswerk."
  },
  {
    text: "Wie viele Spieler stehen pro Team beim Fußball auf dem Platz?",
    options: ["9", "10", "11", "Bei Bayern: so viele, wie sie sich leisten können"],
    correct: 2,
    explanation: "Elf Freunde sollt ihr sein."
  },
  {
    text: "Wie heißt der größte Ozean der Welt?",
    options: ["Atlantik", "Indischer Ozean", "Pazifik", "Pool meiner Schwiegermutter"],
    correct: 2,
    explanation: "Der Pazifik – größer als alle Landmassen zusammen."
  },
  {
    text: "In welchem Jahr fiel die Berliner Mauer?",
    options: ["1987", "1989", "1990", "Letztes Wochenende, beim Abriss"],
    correct: 1,
    explanation: "9. November 1989. Der Rest ist Geschichte."
  },
  {
    text: "Was ist die Hauptstadt von Brasilien?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Wo der Karneval ist, halt"],
    correct: 2,
    explanation: "Brasília – wurde extra dafür auf der grünen Wiese gebaut."
  },
  {
    text: "Wer ist auf der amerikanischen 1-Dollar-Note abgebildet?",
    options: ["Abraham Lincoln", "George Washington", "Benjamin Franklin", "Donald Trump (in seiner Vorstellung)"],
    correct: 1,
    explanation: "George Washington, der erste US-Präsident."
  },
  {
    text: "Welcher Planet ist der heißeste in unserem Sonnensystem?",
    options: ["Merkur (näher an der Sonne, oder?)", "Venus", "Mars", "Da, wo Sommer in Spanien ist"],
    correct: 1,
    explanation: "Venus – der Treibhauseffekt drückt sie auf ~465 °C."
  },
  {
    text: "Was ist das Lieblingsessen von Bugs Bunny?",
    options: ["Apfel", "Karotte", "Salat", "WLAN-Kabel"],
    correct: 1,
    explanation: "„What's up, Doc?“ – Karotten, immer Karotten."
  },
  {
    text: "Wie viele Farben hat ein Regenbogen klassischerweise?",
    options: ["5", "7", "9", "Kommt drauf an, ob du ’ne Brille brauchst"],
    correct: 1,
    explanation: "Sieben: Rot, Orange, Gelb, Grün, Blau, Indigo, Violett."
  },
  {
    text: "Wer war der erste Mensch auf dem Mond?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Stanley Kubrick (laut Internet)"],
    correct: 1,
    explanation: "Neil Armstrong, 21. Juli 1969. „One small step for man…“"
  },
  {
    text: "Was ist das chemische Symbol für Gold?",
    options: ["Go", "Au", "Gd", "€€€"],
    correct: 1,
    explanation: "Au – vom lateinischen „aurum“."
  },
  {
    text: "Wie viele Saiten hat eine klassische Gitarre?",
    options: ["4", "6", "8", "So viele, wie noch nicht gerissen sind"],
    correct: 1,
    explanation: "Sechs Saiten – E, A, D, G, H, E."
  },
  {
    text: "Welches Land trinkt pro Kopf den meisten Kaffee?",
    options: ["Italien", "Deutschland", "Finnland", "Pendler in der S-Bahn"],
    correct: 2,
    explanation: "Finnland – über 12 kg pro Kopf und Jahr."
  },
  {
    text: "Wer schrieb „Der Herr der Ringe“?",
    options: ["C.S. Lewis", "J.R.R. Tolkien", "George R.R. Martin", "Peter Jackson, beim Filmemachen halt nebenbei"],
    correct: 1,
    explanation: "J.R.R. Tolkien. Erschienen 1954/55."
  },
  {
    text: "Wie viele Beine hat ein Tausendfüßler tatsächlich?",
    options: ["Genau 1000", "750", "Je nach Art 30 bis ~1300", "Mehr als deine Beziehung"],
    correct: 2,
    explanation: "Selten 1000. Die meisten Arten haben 30 bis ein paar Hundert."
  },
  {
    text: "Welches deutsche Bundesland ist flächenmäßig am größten?",
    options: ["Bayern", "Niedersachsen", "Brandenburg", "NRW (gefühlt zumindest)"],
    correct: 0,
    explanation: "Bayern – über 70.000 km²."
  },
  {
    text: "Was bedeutet „ASAP“?",
    options: ["As Sweet As Possible", "As Soon As Possible", "Always Send A Photo", "„Mach mal langsam“"],
    correct: 1,
    explanation: "As Soon As Possible – so schnell wie möglich."
  },
  {
    text: "Welches Land hat die meisten Inseln der Welt?",
    options: ["Indonesien", "Japan", "Schweden", "Aldi (so viele Filialen wirken auch wie Inseln)"],
    correct: 2,
    explanation: "Schweden – über 220.000 Inseln, viele winzig klein."
  },
  {
    text: "Wie viele Zähne hat ein erwachsener Mensch normalerweise?",
    options: ["28", "32", "36", "Genug, um über Quizfragen zu fluchen"],
    correct: 1,
    explanation: "32 inklusive der vier Weisheitszähne."
  },
  {
    text: "Welches Tier schläft am längsten am Tag?",
    options: ["Faultier", "Koala", "Katze", "Mein Mitbewohner am Wochenende"],
    correct: 1,
    explanation: "Koalas pennen bis zu 22 Stunden täglich."
  },
  {
    text: "Was bedeutet „Backpfeifengesicht“?",
    options: ["Ein Gesicht, das musikalisch ist", "Ein Gesicht, das eine Ohrfeige verdient", "Ein Bäckergesicht", "Wenn jemand ein Croissant isst"],
    correct: 1,
    explanation: "Genau das. Eines der besseren deutschen Schimpfwörter."
  },
  {
    text: "Wie heißt die Hauptstadt von Kanada?",
    options: ["Toronto", "Vancouver", "Ottawa", "Da, wo die Mounties sind"],
    correct: 2,
    explanation: "Ottawa. Toronto ist nur der größere Star."
  },
  {
    text: "Wie viele Olympische Ringe gibt es?",
    options: ["4", "5", "6", "So viele, wie ich Trainings ausgelassen habe"],
    correct: 1,
    explanation: "Fünf – einer pro Kontinent (außer Antarktis)."
  },
  {
    text: "Welche dieser „Früchte“ ist botanisch eine Beere?",
    options: ["Erdbeere", "Banane", "Apfel", "Beerenmäßig: alles, womit man werfen kann"],
    correct: 1,
    explanation: "Banane! Die Erdbeere ist übrigens eine Sammelnussfrucht."
  },
  {
    text: "Was ist die offizielle Sprache in Brasilien?",
    options: ["Spanisch", "Portugiesisch", "Brasilianisch", "Samba"],
    correct: 1,
    explanation: "Portugiesisch – Erbe der Kolonialzeit."
  },
  {
    text: "Wie heißt der höchste Berg der Welt?",
    options: ["K2", "Mount Everest", "Mont Blanc", "Der Wäscheberg im Schlafzimmer"],
    correct: 1,
    explanation: "Mount Everest, 8849 m über dem Meeresspiegel."
  },
  {
    text: "Welches Tier ziert das deutsche Bundeswappen?",
    options: ["Falke", "Adler", "Pinguin", "Spatz, der gut PR gemacht hat"],
    correct: 1,
    explanation: "Der Bundesadler. Ist quasi Beamtentier."
  },
  {
    text: "Welches Tier kann am höchsten springen (relativ zur Körpergröße)?",
    options: ["Floh", "Känguru", "Frosch", "Mein Hund, wenn die Kekse rascheln"],
    correct: 0,
    explanation: "Der Floh – über 100-fache Körperlänge. Respekt."
  },
  {
    text: "Wer schrieb „Romeo und Julia“?",
    options: ["Goethe", "Shakespeare", "Schiller", "Der Songwriter der Boygroup"],
    correct: 1,
    explanation: "William Shakespeare, geschrieben um 1595."
  },
  {
    text: "Was ist das beliebteste Haustier in Deutschland?",
    options: ["Hund", "Katze", "Hamster", "Schwiegermutter (von wegen „beliebt“)"],
    correct: 1,
    explanation: "Katze – über 15 Millionen leben in deutschen Haushalten."
  },
  {
    text: "In welcher Beziehung stehen Tick, Trick und Track zu Donald Duck?",
    options: ["Söhne", "Brüder", "Neffen", "Konkurrenten beim Schwimmwettbewerb"],
    correct: 2,
    explanation: "Neffen – Söhne von Donalds Schwester Della."
  },
  {
    text: "Wie viele Bundesländer hat Deutschland?",
    options: ["14", "16", "18", "So viele, wie auf dem Verkehrsschild Platz haben"],
    correct: 1,
    explanation: "Sechzehn – seit 1990 mit den fünf neuen Ländern."
  },
  {
    text: "Wer war der erste Bundeskanzler der BRD?",
    options: ["Willy Brandt", "Helmut Schmidt", "Konrad Adenauer", "Ein Typ mit Hut"],
    correct: 2,
    explanation: "Konrad Adenauer, ab 1949."
  },
  {
    text: "Welches Tier hat die größten Eier (im Verhältnis zur Körpergröße)?",
    options: ["Strauß", "Kiwi (der Vogel)", "Adler", "Mein Geldbeutel am Monatsende"],
    correct: 1,
    explanation: "Der Kiwi – das Ei kann bis zu 25 % des Körpergewichts ausmachen. Aua."
  },
  {
    text: "Wie heißt die Währung in Japan?",
    options: ["Yuan", "Yen", "Won", "Sushi-Coin"],
    correct: 1,
    explanation: "Yen. Yuan ist China, Won ist Korea."
  },
  {
    text: "Was ist der schnellste Vogel der Welt?",
    options: ["Adler", "Wanderfalke", "Kolibri", "Twitter (war mal schnell)"],
    correct: 1,
    explanation: "Wanderfalke – im Sturzflug bis zu 390 km/h."
  },
  {
    text: "Welche Stadt wird „die ewige Stadt“ genannt?",
    options: ["Athen", "Rom", "Jerusalem", "Wuppertal"],
    correct: 1,
    explanation: "Rom – seit der Antike der Spitzname."
  },
  {
    text: "Wie viele Halswirbel hat eine Giraffe?",
    options: ["7 (gleich wie der Mensch!)", "14", "24", "Einer pro Höhenmeter"],
    correct: 0,
    explanation: "Tatsächlich nur 7, wie wir – sie sind nur deutlich länger."
  },
  {
    text: "Wie viele Räder hat ein Einrad?",
    options: ["Eins", "Zwei", "Drei", "Hängt vom Fahrkönnen ab"],
    correct: 0,
    explanation: "Eins. Du wirst es nicht glauben."
  },
  {
    text: "Wer steckt hinter dem Künstlernamen „Loriot“?",
    options: ["Vicco von Bülow", "Heinz Erhardt", "Otto Waalkes", "Ein Mops mit Hut"],
    correct: 0,
    explanation: "Vicco von Bülow – Loriot ist französisch für Pirol, das Wappentier der Bülows."
  },
  {
    text: "Welcher Fluss fließt durch Berlin?",
    options: ["Spree", "Elbe", "Oder", "Der von Trockenmauern"],
    correct: 0,
    explanation: "Die Spree – mündet bei Spandau in die Havel."
  },
  {
    text: "Wer malte die Mona Lisa?",
    options: ["Michelangelo", "Leonardo da Vinci", "Raffael", "Mein Bruder mit 4"],
    correct: 1,
    explanation: "Leonardo da Vinci – hängt heute im Louvre."
  },
  {
    text: "In welchem Jahrhundert lebte Mozart?",
    options: ["17. Jh.", "18. Jh.", "19. Jh.", "Im selben wie meine Großeltern (gefühlt)"],
    correct: 1,
    explanation: "1756–1791 – also 18. Jahrhundert."
  },
  {
    text: "Welches Tier kann am besten Farben unterscheiden?",
    options: ["Hund", "Adler", "Fangschreckenkrebs", "Elefant – wenn er Lust hat"],
    correct: 2,
    explanation: "Der Fangschreckenkrebs – mit bis zu 16 Farbrezeptoren (Mensch: 3)."
  },
  {
    text: "Welches deutsche Wort gilt im Duden als das längste?",
    options: ["Donaudampfschifffahrtsgesellschaft", "Kraftfahrzeughaftpflichtversicherung", "Aufmerksamkeitsdefizithyperaktivitätssyndrom", "„Frau“"],
    correct: 1,
    explanation: "Kraftfahrzeughaftpflichtversicherung – 36 Buchstaben, offiziell im Duden."
  },
  {
    text: "Was bedeutet „OMG“ ausgeschrieben?",
    options: ["Oh mein Gott", "Ohne mein Glück", "Oh mein Gerd", "Onkel Manfreds Geheimrezept"],
    correct: 0,
    explanation: "Oh my God – aus dem Englischen ins Deutsche übernommen."
  },
  {
    text: "Welcher Wochentag hat im Deutschen die meisten Buchstaben?",
    options: ["Dienstag", "Mittwoch", "Donnerstag", "Freitag, gefühlt am längsten"],
    correct: 2,
    explanation: "Donnerstag – 10 Buchstaben."
  }
];
