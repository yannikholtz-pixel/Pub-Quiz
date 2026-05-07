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
  },
  {
    text: "Wer hat das Periodensystem der Elemente entwickelt?",
    options: ["Albert Einstein", "Marie Curie", "Dmitri Mendelejew", "Walter White"],
    correct: 2,
    explanation: "Dmitri Mendelejew, 1869. Walter White hat's nur benutzt."
  },
  {
    text: "Wie heißt der berühmte Detektiv von Arthur Conan Doyle?",
    options: ["Hercule Poirot", "Sherlock Holmes", "Philip Marlowe", "Derrick"],
    correct: 1,
    explanation: "Sherlock Holmes – wohnt in der Baker Street 221B."
  },
  {
    text: "In welcher Stadt steht der Big Ben?",
    options: ["Edinburgh", "Manchester", "London", "Da, wo der Tee herkommt"],
    correct: 2,
    explanation: "London – am Palace of Westminster. Streng genommen ist „Big Ben“ aber nur die Glocke."
  },
  {
    text: "Welches ist das einzige Säugetier, das aktiv fliegen kann?",
    options: ["Fliegendes Eichhörnchen", "Fledermaus", "Kolibri (kein Säugetier!)", "Mein Hund, wenn ich rufe"],
    correct: 1,
    explanation: "Die Fledermaus. Eichhörnchen segeln nur."
  },
  {
    text: "Wie viele Kontinente gibt es (klassische deutsche Zählung)?",
    options: ["5", "7", "9", "Kommt drauf an, wer's malt"],
    correct: 1,
    explanation: "Sieben: Afrika, Antarktis, Asien, Australien, Europa, Nordamerika, Südamerika."
  },
  {
    text: "Welcher berühmte Komponist wurde im Lauf seines Lebens taub?",
    options: ["Mozart", "Beethoven", "Bach", "Helene Fischer (während ihrer Konzerte)"],
    correct: 1,
    explanation: "Beethoven. Komponiert hat er trotzdem weiter – Respekt."
  },
  {
    text: "Welches Land hat aktuell die meisten Einwohner?",
    options: ["China", "Indien", "USA", "WhatsApp-Familiengruppe"],
    correct: 1,
    explanation: "Indien hat 2023 China überholt – über 1,4 Milliarden."
  },
  {
    text: "Wer schrieb die Erzählung „Die Verwandlung“ (mit dem Käfer)?",
    options: ["Thomas Mann", "Franz Kafka", "Hermann Hesse", "Mein Biolehrer"],
    correct: 1,
    explanation: "Franz Kafka, 1915. Gregor Samsa wacht als Käfer auf – kafkaesk halt."
  },
  {
    text: "Welcher Fluss fließt durch Wien?",
    options: ["Donau", "Rhein", "Inn", "Kaffeefluss"],
    correct: 0,
    explanation: "Die Donau. „Wiener Donauwalzer“ kommt nicht von ungefähr."
  },
  {
    text: "In welchem Jahr begann der Erste Weltkrieg?",
    options: ["1912", "1914", "1918", "Vor langer, langer Zeit"],
    correct: 1,
    explanation: "1914 – ausgelöst durch das Attentat von Sarajevo."
  },
  {
    text: "Wie heißt das größte Korallenriff der Welt?",
    options: ["Maldiven-Riff", "Great Barrier Reef", "Bahamas-Riff", "Nemo-Riff"],
    correct: 1,
    explanation: "Great Barrier Reef vor Australien – über 2300 km lang."
  },
  {
    text: "Welches chemische Element hat die Ordnungszahl 1?",
    options: ["Helium", "Wasserstoff", "Sauerstoff", "Aluminium (klingt am leichtesten)"],
    correct: 1,
    explanation: "Wasserstoff (H) – das leichteste und häufigste Element im Universum."
  },
  {
    text: "Wie groß ist Pi auf zwei Nachkommastellen?",
    options: ["3,12", "3,14", "3,16", "Zu groß für meine Mathenoten damals"],
    correct: 1,
    explanation: "3,14… und dann ungefähr ewig weiter."
  },
  {
    text: "In welchem Land wurde Schach erfunden?",
    options: ["China", "Persien", "Indien", "Hogwarts"],
    correct: 2,
    explanation: "Indien – das Vorgängerspiel hieß „Chaturanga“."
  },
  {
    text: "Wer hat die Allgemeine Relativitätstheorie entwickelt?",
    options: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Sheldon Cooper"],
    correct: 1,
    explanation: "Albert Einstein, 1915. Newton wäre stolz – und etwas überrascht."
  },
  {
    text: "Welcher Vogel ist der Nationalvogel der USA?",
    options: ["Truthahn", "Weißkopfseeadler", "Adler im Allgemeinen", "Twitter (R.I.P.)"],
    correct: 1,
    explanation: "Der Weißkopfseeadler – seit 1782 offizielles Wappentier."
  },
  {
    text: "Wer war Deutschlands erste Bundeskanzlerin?",
    options: ["Petra Kelly", "Angela Merkel", "Annalena Baerbock", "Heidi Klum"],
    correct: 1,
    explanation: "Angela Merkel, 2005–2021. 16 Jahre lang."
  },
  {
    text: "Welche Sprache hat weltweit die meisten Muttersprachler?",
    options: ["Englisch", "Spanisch", "Mandarin (Chinesisch)", "Bayerisch"],
    correct: 2,
    explanation: "Mandarin – über 900 Mio. Muttersprachler."
  },
  {
    text: "Welcher US-Präsident hatte den Spitznamen „Ike“?",
    options: ["Truman", "Eisenhower", "Kennedy", "Trump (kennt jemand „Ike“ Trump?)"],
    correct: 1,
    explanation: "Dwight D. Eisenhower – 34. US-Präsident."
  },
  {
    text: "Was bedeutet die Abkürzung „GIF“?",
    options: ["Graphics Interchange Format", "General Image File", "Giphy Internet Funny", "Gif (sprich „Dschiff“ oder „Giff“?)"],
    correct: 0,
    explanation: "Graphics Interchange Format – seit 1987 im Einsatz."
  },
  {
    text: "Wer schrieb den dystopischen Roman „1984“?",
    options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Mein Geschichtslehrer"],
    correct: 1,
    explanation: "George Orwell, veröffentlicht 1949. Big Brother is watching."
  },
  {
    text: "In welchem Land liegt Machu Picchu?",
    options: ["Mexiko", "Peru", "Bolivien", "Auf einem Berg, irgendwo"],
    correct: 1,
    explanation: "Peru – die berühmte Inka-Stadt liegt auf 2430 m Höhe."
  },
  {
    text: "Welcher Planet hat die meisten bekannten Monde?",
    options: ["Jupiter", "Saturn", "Neptun", "Donald (so viele Anhänger…)"],
    correct: 1,
    explanation: "Saturn hat seit 2023 mit über 140 bekannten Monden Jupiter überholt."
  },
  {
    text: "Welcher See ist der tiefste der Welt?",
    options: ["Bodensee", "Baikalsee", "Toter See", "Pool im Hotel All-Inclusive"],
    correct: 1,
    explanation: "Baikalsee in Sibirien – über 1600 m tief."
  },
  {
    text: "Wer war Bundestrainer beim deutschen WM-Sieg 2014?",
    options: ["Jürgen Klinsmann", "Jogi Löw", "Hansi Flick", "Lothar Matthäus (der hätte's gewollt)"],
    correct: 1,
    explanation: "Joachim „Jogi“ Löw – das Mario-Götze-Tor in der Verlängerung gegen Argentinien."
  },
  {
    text: "Wer schrieb den Roman „Der Steppenwolf“?",
    options: ["Thomas Mann", "Hermann Hesse", "Heinrich Böll", "Karl May"],
    correct: 1,
    explanation: "Hermann Hesse, 1927. Hat auch die Band benannt."
  },
  {
    text: "Welche Hauptstadt liegt am höchsten über dem Meeresspiegel?",
    options: ["Mexiko-Stadt", "Quito (Ecuador)", "La Paz (Bolivien)", "Davos (oben am Berg halt)"],
    correct: 2,
    explanation: "La Paz – auf etwa 3640 m Höhe."
  },
  {
    text: "Wie viele Sinne hat der Mensch klassisch?",
    options: ["3", "5", "7", "Alle bis auf den gesunden Menschenverstand"],
    correct: 1,
    explanation: "Klassisch fünf: Sehen, Hören, Riechen, Schmecken, Tasten."
  },
  {
    text: "Welches Tier galt im alten Ägypten als heilig?",
    options: ["Hund", "Katze", "Falke", "Krokodil – wenn man Pech hatte"],
    correct: 1,
    explanation: "Die Katze – verehrt als Verkörperung der Göttin Bastet."
  },
  {
    text: "In welchem Jahr ging das World Wide Web öffentlich online?",
    options: ["1985", "1991", "1995", "Letztes Jahrhundert, mehr weiß ich nicht"],
    correct: 1,
    explanation: "1991 – Tim Berners-Lee am CERN."
  },
  {
    text: "Wer ist der griechische Gott des Meeres?",
    options: ["Zeus", "Poseidon", "Hades", "Aquaman (anderer Verein)"],
    correct: 1,
    explanation: "Poseidon. Sein römisches Pendant heißt Neptun."
  },
  {
    text: "Welcher Promi heißt mit bürgerlichem Namen Stefani Germanotta?",
    options: ["Lady Gaga", "Madonna", "Britney Spears", "Helene Fischer"],
    correct: 0,
    explanation: "Lady Gaga – Stefani Joanne Angelina Germanotta."
  },
  {
    text: "Wie heißt der erste Buchstabe des griechischen Alphabets?",
    options: ["Alpha", "Beta", "Omega", "A wie immer"],
    correct: 0,
    explanation: "Alpha. Omega ist der letzte – „das A und das O“."
  },
  {
    text: "Was ist die kleinste Primzahl?",
    options: ["0", "1", "2", "Negative Zahlen, weil minus minus plus"],
    correct: 2,
    explanation: "2 – und übrigens auch die einzige gerade Primzahl."
  },
  {
    text: "Welcher Sport ist mit der „Tour de France“ verbunden?",
    options: ["Marathon", "Schwimmen", "Radsport", "Croissant-Wettessen"],
    correct: 2,
    explanation: "Radsport – das wichtigste Etappenrennen der Welt."
  },
  {
    text: "Wer schrieb die „Harry Potter“-Romane?",
    options: ["Stephen King", "J.K. Rowling", "Cornelia Funke", "Voldemort"],
    correct: 1,
    explanation: "J.K. Rowling – die ersten Manuskripte wurden von vielen Verlagen abgelehnt."
  },
  {
    text: "Was steht im Mittelpunkt des Berliner Pariser Platzes?",
    options: ["Brandenburger Tor", "Reichstag", "Fernsehturm", "Eine Currywurstbude"],
    correct: 0,
    explanation: "Das Brandenburger Tor – seit 1791 das Wahrzeichen Berlins."
  },
  {
    text: "Welche Tierart hat das größte Gehirn (absolut)?",
    options: ["Elefant", "Pottwal", "Mensch", "Mein Goldfisch (laut ihm)"],
    correct: 1,
    explanation: "Der Pottwal – sein Hirn wiegt bis zu 9 kg."
  },
  {
    text: "Wie heißt die Hauptstadt von Norwegen?",
    options: ["Stockholm", "Oslo", "Helsinki", "Wo Olaf wohnt"],
    correct: 1,
    explanation: "Oslo. Stockholm ist Schweden, Helsinki Finnland."
  },
  {
    text: "Wie viele Spielfelder hat ein Schachbrett insgesamt?",
    options: ["48", "56", "64", "Mehr, als ich Geduld habe"],
    correct: 2,
    explanation: "8 × 8 = 64 Felder, abwechselnd hell und dunkel."
  },

  // === SAUFEN ===
  {
    text: "Wie viel Alkohol enthält ein typisches deutsches Pils ungefähr?",
    options: ["3,5 %", "4,8 %", "6,5 %", "Genug, sage ich mal"],
    correct: 1,
    explanation: "Ein klassisches Pils liegt bei rund 4,8 % Volumenprozent."
  },
  {
    text: "Aus welcher Pflanze wird Tequila hergestellt?",
    options: ["Kaktus", "Agave", "Aloe Vera", "Aus dem, was der Mexikaner findet"],
    correct: 1,
    explanation: "Aus der blauen Agave – Tequila darf sich nur nennen, was aus dieser Region stammt."
  },
  {
    text: "Welche vier Zutaten erlaubt das deutsche Reinheitsgebot?",
    options: ["Wasser, Hopfen, Malz, Hefe", "Wasser, Gerste, Zucker, Hefe", "Wasser, Wein, Honig, Hopfen", "Was die Bayern grad zur Hand hatten"],
    correct: 0,
    explanation: "Wasser, Hopfen, Malz und Hefe – seit 1516 (Hefe wurde später ergänzt)."
  },
  {
    text: "Welches Land trinkt pro Kopf am meisten Bier?",
    options: ["Deutschland", "Belgien", "Tschechien", "Bayern (gilt nicht als eigenes Land, schade)"],
    correct: 2,
    explanation: "Tschechien – über 130 Liter pro Kopf und Jahr. Trinken sich die Konkurrenz ins Aus."
  },
  {
    text: "Welcher Cocktail enthält Rum, Limette, Minze, Zucker und Soda?",
    options: ["Mai Tai", "Cuba Libre", "Mojito", "Caipirinha"],
    correct: 2,
    explanation: "Mojito – kubanischer Klassiker. Caipirinha hat keine Minze und keinen Soda."
  },
  {
    text: "Welche Spirituose ist Hauptzutat eines klassischen Martini?",
    options: ["Wodka", "Gin", "Rum", "Korn (Norddeutsch)"],
    correct: 1,
    explanation: "Gin + Wermut. Wodka-Martini ist eine Variante – James Bond lässt grüßen."
  },
  {
    text: "Wie heißt James Bonds berühmtester Drink?",
    options: ["Mojito", "Old Fashioned", "Wodka Martini, geschüttelt nicht gerührt", "Holsten Pilsener"],
    correct: 2,
    explanation: "„Shaken, not stirred“ – obwohl Barkeeper sagen, dass das den Geschmack ruiniert."
  },
  {
    text: "Was ist „Met“?",
    options: ["Apfelwein", "Honigwein", "Bierschnaps", "Eine Wikinger-Frisur"],
    correct: 1,
    explanation: "Honigwein – schon die Wikinger und Germanen wussten, was sie taten."
  },
  {
    text: "Welcher griechische Gott steht für Wein und Rausch?",
    options: ["Apollo", "Hephaistos", "Dionysos", "Zeus' bester Kumpel"],
    correct: 2,
    explanation: "Dionysos – sein römisches Pendant heißt Bacchus. Beide sehr beliebt."
  },
  {
    text: "Wie viel Volumenprozent hat ein klassischer deutscher Korn?",
    options: ["20 %", "32 %", "45 %", "So viel, dass man danach laut singt"],
    correct: 1,
    explanation: "Korn liegt bei 32 %, Doppelkorn bei 38 %."
  },

  // === Ü18 ===
  {
    text: "Wie nennt man die Wissenschaft des Küssens?",
    options: ["Oskulologie", "Philematologie", "Kissomanie", "Schmusekunde, 5 ECTS"],
    correct: 1,
    explanation: "Philematologie – aus dem Griechischen „philema“ (Kuss)."
  },
  {
    text: "Welches Lebensmittel galt im alten Rom als das Aphrodisiakum schlechthin?",
    options: ["Spargel", "Schokolade", "Austern", "Currywurst-Pommes-Schranke"],
    correct: 2,
    explanation: "Austern – schon Casanova schwor angeblich darauf."
  },
  {
    text: "In welchem Jahr wurde die Antibabypille in Deutschland zugelassen?",
    options: ["1955", "1961", "1972", "1985"],
    correct: 1,
    explanation: "1961 – damals nur für verheiratete Frauen mit Kindern, nebenbei bemerkt."
  },
  {
    text: "Wie heißt die meistgenutzte Dating-App weltweit?",
    options: ["Bumble", "Tinder", "Hinge", "Mutters WhatsApp-Liste"],
    correct: 1,
    explanation: "Tinder – über 75 Millionen aktive Nutzer monatlich."
  },
  {
    text: "An welchem Datum wird in China der „Singletag“ gefeiert?",
    options: ["14.02.", "08.03.", "11.11.", "Jeder Sonntagabend"],
    correct: 2,
    explanation: "11.11. – die vier Einsen stehen für „allein“. Mittlerweile auch der größte Online-Shopping-Tag der Welt."
  },
  {
    text: "Welche Frucht galt im alten China als Symbol der Fruchtbarkeit?",
    options: ["Apfel", "Granatapfel", "Pfirsich", "Kiwi"],
    correct: 1,
    explanation: "Der Granatapfel – wegen der vielen Samen darin."
  },
  {
    text: "Ab welchem Alter darf man in Deutschland ohne Genehmigung heiraten?",
    options: ["16", "17", "18", "Wenn die Eltern aufgeben"],
    correct: 2,
    explanation: "18 – seit 2017 keine Ausnahmen mehr für Minderjährige."
  },

  // === SCHERZFRAGEN ===
  {
    text: "Welche Monate haben 28 Tage?",
    options: ["Nur der Februar", "Februar und Schaltjahre", "Alle Monate", "Kommt drauf an, wer fragt"],
    correct: 2,
    explanation: "Alle Monate haben mindestens 28 Tage. Reingelegt!"
  },
  {
    text: "Ein Bauer hat 17 Schafe. Alle bis auf 9 sterben. Wie viele bleiben übrig?",
    options: ["8", "9", "17", "Tut mir leid für die Schafe"],
    correct: 1,
    explanation: "9 – „alle bis auf 9 sterben“ heißt: 9 überleben."
  },
  {
    text: "Was wird nass, während es trocknet?",
    options: ["Eine Wäscheleine", "Ein Handtuch", "Die Sonne", "Logik"],
    correct: 1,
    explanation: "Ein Handtuch – es saugt das Wasser auf, während es trocknet."
  },
  {
    text: "Was hat einen Kopf und einen Schwanz, ist meist rund und hat keine Beine?",
    options: ["Eine Münze", "Ein Hund ohne Beine", "Eine Schlange", "Mein Bruder nach 5 Bier"],
    correct: 0,
    explanation: "Eine Münze – Kopf und Zahl heißen auf Englisch „heads and tails“."
  },
  {
    text: "Du läufst beim Marathon und überholst die zweite Person. Auf welchem Platz bist du?",
    options: ["1.", "2.", "3.", "Schon eingelaufen, Hauptsache"],
    correct: 1,
    explanation: "Auf Platz 2 – du übernimmst den Platz der überholten Person, nicht den der ersten."
  },
  {
    text: "Was geht ums Haus herum, ohne sich zu bewegen?",
    options: ["Der Wind", "Der Garten", "Der Zaun", "Mein Streit mit der Nachbarin"],
    correct: 2,
    explanation: "Der Zaun – steht da und geht gedanklich trotzdem komplett ums Haus."
  },
  {
    text: "Sieben Brüder haben jeweils eine Schwester. Wie viele Geschwister sind es insgesamt?",
    options: ["7", "8", "14", "Genug, um WG zu gründen"],
    correct: 1,
    explanation: "8 – alle Brüder teilen sich dieselbe eine Schwester."
  },
  {
    text: "Welches Wort wird im Duden falsch geschrieben?",
    options: ["„Falsch“", "„Quietschen“", "Keines", "Alle, die ich nachschlage"],
    correct: 2,
    explanation: "Keines! Der Duden ist die Referenz – nichts darin ist falsch geschrieben."
  },

  // === VERWALTUNG ===
  {
    text: "Wofür steht die Abkürzung „BAföG“?",
    options: [
      "Bayerisches Förderungsgesetz",
      "Bundesausbildungsförderungsgesetz",
      "Bundesamt für Förderung Ostdeutscher Gemeinden",
      "Bringt-Anstrengung-Frust-Ohne-Geld"
    ],
    correct: 1,
    explanation: "Bundesausbildungsförderungsgesetz – seit 1971 in Kraft."
  },
  {
    text: "Wie lange ist ein deutscher Personalausweis maximal gültig?",
    options: ["5 Jahre", "6 Jahre", "10 Jahre", "Bis er sich auflöst"],
    correct: 2,
    explanation: "10 Jahre für Erwachsene, 6 Jahre für Personen unter 24."
  },
  {
    text: "Wie viele Steuerklassen gibt es in Deutschland?",
    options: ["4", "5", "6", "Eine zu viel"],
    correct: 2,
    explanation: "Sechs Steuerklassen (I bis VI) – die meisten kennen nur ihre eigene."
  },
  {
    text: "Wofür steht „DIN“ in „DIN A4“?",
    options: [
      "Deutsches Institut für Normung",
      "Druck-Industrie-Norm",
      "Druckbar In Normalformat",
      "Deutschland Ist Normiert"
    ],
    correct: 0,
    explanation: "Deutsches Institut für Normung – legt seit 1917 deutsche Standards fest."
  },
  {
    text: "Welches Format hat ein DIN-A4-Blatt?",
    options: ["20 × 30 cm", "21 × 29,7 cm", "22 × 28 cm", "Größer als mein Drucker akzeptiert"],
    correct: 1,
    explanation: "21,0 × 29,7 cm – die Quadratwurzel aus 2 macht's möglich."
  },
  {
    text: "Wofür steht die Abkürzung „GEMA“?",
    options: [
      "Gesellschaft für musikalische Aufführungs- und mechanische Vervielfältigungsrechte",
      "Gemeinschaft Europäischer Musik-Anstalten",
      "Gegen-Echte-Musik-Affinität",
      "Gehe-Endlich-Musik-Aussuchen"
    ],
    correct: 0,
    explanation: "Stimmt – der mit Abstand sperrigste Vereinsname Deutschlands."
  },
  {
    text: "In welcher Stadt sitzt das Bundesverfassungsgericht?",
    options: ["Berlin", "Karlsruhe", "München", "Wo es am ruhigsten ist"],
    correct: 1,
    explanation: "Karlsruhe – das „Hüter der Verfassung“ ist seit 1951 dort."
  },
  {
    text: "Bis wann muss man (ohne Steuerberater) seine Steuererklärung normalerweise abgeben?",
    options: ["31. Mai", "31. Juli", "31. Oktober", "Erste Mahnung = Erinnerung"],
    correct: 1,
    explanation: "Seit 2019: 31. Juli des Folgejahres. Mit Steuerberater: deutlich später."
  },

  // === SCHÄTZFRAGEN ===
  {
    text: "Wie groß ist der Mond ungefähr im Durchmesser?",
    options: ["1.000 km", "3.500 km", "7.000 km", "So groß, wie ich ihn sehe"],
    correct: 1,
    explanation: "Etwa 3.474 km – ungefähr ein Viertel des Erddurchmessers."
  },
  {
    text: "Wie hoch ist der Eiffelturm (mit Antenne)?",
    options: ["220 m", "330 m", "440 m", "Höher als meine Karriere"],
    correct: 1,
    explanation: "330 m – ohne Antenne wären's 300 m. War 1889 das höchste Gebäude der Welt."
  },
  {
    text: "Wie viele Bäume gibt es geschätzt auf der Erde?",
    options: ["~100 Milliarden", "~1 Billion", "~3 Billionen", "Genug für deine ganzen Notizen"],
    correct: 2,
    explanation: "Etwa 3 Billionen – laut einer Yale-Studie von 2015."
  },
  {
    text: "Wie schnell ist eine Brieftaube ungefähr unterwegs?",
    options: ["30 km/h", "60 km/h", "90 km/h", "So schnell wie die Deutsche Post"],
    correct: 2,
    explanation: "Bis zu 90-100 km/h. Pakete trotzdem deutlich schneller als manche Lieferdienste."
  },
  {
    text: "Wie viele Liter Bier wurden 2023 auf dem Oktoberfest ausgeschenkt?",
    options: ["~2 Mio.", "~7 Mio.", "~15 Mio.", "Bis nichts mehr ging"],
    correct: 1,
    explanation: "Rund 7 Millionen Liter – beeindruckend, oder?"
  },
  {
    text: "Wie viele Wörter spricht ein Mensch durchschnittlich pro Tag?",
    options: ["~3.000", "~16.000", "~50.000", "Bei meiner Frau: das Doppelte"],
    correct: 1,
    explanation: "Ungefähr 16.000 Wörter – Männer und Frauen ähnlich, anders als der Mythos behauptet."
  },
  {
    text: "Wie viele Sterne hat unsere Milchstraße schätzungsweise?",
    options: ["~1 Million", "~100 Millionen", "100-400 Milliarden", "Mehr, als du nachzählen willst"],
    correct: 2,
    explanation: "Zwischen 100 und 400 Milliarden Sterne – plus mindestens genauso viele Planeten."
  },

  // === POP-KULTUR ===
  {
    text: "In welchem Disney-Film gibt es den singenden Schneemann „Olaf“?",
    options: ["König der Löwen", "Die Eiskönigin", "Toy Story", "Bayrische Almlieder"],
    correct: 1,
    explanation: "„Die Eiskönigin – völlig unverfroren“ (2013). Olaf liebt warme Umarmungen."
  },
  {
    text: "Wer singt den Megahit „Atemlos durch die Nacht“?",
    options: ["Andrea Berg", "Helene Fischer", "Vanessa Mai", "Mein Vater im Auto"],
    correct: 1,
    explanation: "Helene Fischer – seit 2013 Standard auf jeder Hochzeitsfeier."
  },
  {
    text: "Wer schrieb und sang den Hit „Bad Guy“ (2019)?",
    options: ["Adele", "Billie Eilish", "Dua Lipa", "Mein Ex"],
    correct: 1,
    explanation: "Billie Eilish – damals 17 Jahre alt, 7-fache Grammy-Gewinnerin."
  },
  {
    text: "Welche zwei Roboter sind die berühmtesten aus „Star Wars“?",
    options: ["WALL-E und EVE", "R2-D2 und C-3PO", "Bender und HAL", "Saugroboter und Mähroboter"],
    correct: 1,
    explanation: "R2-D2 und C-3PO – seit Episode IV (1977) Dauergäste der Saga."
  },
  {
    text: "In welcher Sprache wurde der Welthit „Macarena“ ursprünglich gesungen?",
    options: ["Englisch", "Spanisch", "Italienisch", "Sächsisch (im Tanztempo)"],
    correct: 1,
    explanation: "Spanisch – Los del Río, 1993. Tanzfläche-Killer bis heute."
  },

  // === SAUFEN II ===
  {
    text: "Welche Spirituose ist die Basis eines Caipirinha?",
    options: ["Rum", "Cachaça", "Wodka", "Brennspiritus aus Opas Keller"],
    correct: 1,
    explanation: "Cachaça – brasilianischer Zuckerrohrschnaps. Macht den Drink erst echt."
  },
  {
    text: "Welche Farbe hat ein klassisches Pils?",
    options: ["Tiefschwarz", "Goldgelb", "Bernstein", "Pink (Glitzer-Edition)"],
    correct: 1,
    explanation: "Goldgelb mit feiner weißer Schaumkrone."
  },
  {
    text: "Wie heißt das größte deutsche Weinanbaugebiet?",
    options: ["Mosel", "Pfalz", "Rheinhessen", "Bayern (klar, was sonst?)"],
    correct: 2,
    explanation: "Rheinhessen mit über 26.000 Hektar Rebfläche."
  },
  {
    text: "Was bedeutet „Halbe“ in der bayerischen Bier-Sprache?",
    options: ["0,3 L Bier", "0,5 L Bier", "0,33 L Bier", "Halbe Stunde Pause"],
    correct: 1,
    explanation: "Eine „Halbe“ ist ein halber Liter – im Bayerischen die Standardgröße."
  },
  {
    text: "Was gehört in einen klassischen Aperol Spritz?",
    options: [
      "Aperol, Prosecco, Soda",
      "Aperol, Tonic Water, Eis",
      "Aperol, Bier, Limette",
      "Aperol, was halt da ist"
    ],
    correct: 0,
    explanation: "3 Teile Prosecco, 2 Teile Aperol, 1 Spritzer Soda. Italienische Sommer-Pflicht."
  },
  {
    text: "Aus welchem Getreide wird Whisky traditionell gebrannt?",
    options: ["Reis", "Weizen", "Gerste (oder Mais, Roggen)", "Hopfen"],
    correct: 2,
    explanation: "Meist Gerste (Single Malt) oder Mais (Bourbon). Hopfen geht ins Bier."
  },
  {
    text: "Welcher italienische Schnaps schmeckt deutlich nach Anis?",
    options: ["Grappa", "Sambuca", "Limoncello", "Espressotränen"],
    correct: 1,
    explanation: "Sambuca – wird traditionell mit drei Kaffeebohnen serviert."
  },
  {
    text: "Was kommt in einen klassischen Margarita?",
    options: [
      "Tequila, Limette, Triple Sec",
      "Tequila, Cola, Eis",
      "Tequila, Apfelsaft, Salz",
      "Tequila, Mut, mehr Tequila"
    ],
    correct: 0,
    explanation: "Tequila + Limettensaft + Triple Sec/Cointreau, klassisch mit Salzrand am Glas."
  },

  // === Ü18 II ===
  {
    text: "Wie heißt der berühmte amerikanische Sex-Therapeut „Dr. Ruth“ mit Nachnamen?",
    options: ["Goldberg", "Westheimer", "Stern", "Kennedy"],
    correct: 1,
    explanation: "Ruth Westheimer – wurde 96 Jahre alt und blieb bis zuletzt aktiv."
  },
  {
    text: "In welchem Land wurde das Kamasutra geschrieben?",
    options: ["China", "Indien", "Japan", "Im Hinterzimmer eines Buchladens"],
    correct: 1,
    explanation: "Indien, ca. 250–300 n. Chr. Übrigens nicht nur ein Sex-Buch, sondern eine Lebensphilosophie."
  },
  {
    text: "Welcher US-Präsident hatte die berüchtigte Affäre mit Praktikantin Monica Lewinsky?",
    options: ["John F. Kennedy", "Bill Clinton", "Donald Trump", "Ronald Reagan"],
    correct: 1,
    explanation: "Bill Clinton, 1995–96. Führte 1998 fast zum Impeachment."
  },
  {
    text: "Was symbolisiert der Pfirsich (🍑) im Internet-Slang?",
    options: ["Eine Frucht (literal)", "Ein Hintern", "Ein Cocktail", "Ein bayerisches Frühstück"],
    correct: 1,
    explanation: "Der Hintern. Ja, wirklich. Pass auf, was du Mama schickst."
  },
  {
    text: "Welcher Tag ist der Internationale Frauentag?",
    options: ["1. Januar", "8. März", "1. Mai", "Wenn Mama es sagt"],
    correct: 1,
    explanation: "8. März – seit 1911 ein internationaler Aktionstag, in Berlin sogar Feiertag."
  },
  {
    text: "Welche Pflanze wurde im Volksmund auch „Liebesapfel“ genannt?",
    options: ["Granatapfel", "Tomate", "Aprikose", "Kürbis"],
    correct: 1,
    explanation: "Tomate – das französische „pomme d’amour“ klingt einfach romantischer."
  },
  {
    text: "In welchem Land schenken am Valentinstag traditionell die Frauen den Männern Schokolade?",
    options: ["USA", "Frankreich", "Japan", "Nirgendwo, das gibt’s nicht"],
    correct: 2,
    explanation: "Japan! Männer revanchieren sich am „White Day“ einen Monat später."
  },
  {
    text: "Wofür steht das „T“ in „LGBTQ+“?",
    options: ["Tradition", "Transgender", "Tolerant", "Tanzbar"],
    correct: 1,
    explanation: "Transgender. Q steht für Queer, das + für alle weiteren Identitäten."
  },

  // === SCHERZFRAGEN II ===
  {
    text: "Wie viele Eier kann man in einen leeren Korb tun?",
    options: [
      "Beliebig viele",
      "Nur eines – dann ist der Korb nicht mehr leer",
      "Genau 12",
      "Bis er platzt"
    ],
    correct: 1,
    explanation: "Klassiker: Sobald ein Ei drin ist, ist der Korb nicht mehr leer."
  },
  {
    text: "Was passiert mit einem grünen Stein, wenn man ihn ins Rote Meer wirft?",
    options: ["Er wird rot", "Er wird nass", "Er sinkt steingrün", "Er verschwindet"],
    correct: 1,
    explanation: "Er wird nass. Jede andere Antwort denkt zu viel."
  },
  {
    text: "Wann kann man 31 Tage am Stück nichts essen?",
    options: [
      "Niemals – das überlebt keiner",
      "Wenn man nachts isst",
      "Wenn man fastet",
      "Frag den Arzt"
    ],
    correct: 1,
    explanation: "Wenn man nachts isst, isst man am Tag nichts – 31 Tage lang."
  },
  {
    text: "Welche zwei deutschen Wochentage beginnen mit „D“?",
    options: [
      "Dienstag und Donnerstag",
      "Donnerstag und Dezember",
      "Dienstag und Mittwoch",
      "Donnerstag, sonst keiner"
    ],
    correct: 0,
    explanation: "Dienstag und Donnerstag. Dezember ist ein Monat, kein Wochentag."
  },
  {
    text: "Worauf kannst du jeden Tag treten, ohne dass es dir wehtut?",
    options: ["Auf den Boden", "Auf deinen Schatten", "Auf die Bremse", "Auf einen Lego-Stein (autsch!)"],
    correct: 1,
    explanation: "Auf deinen eigenen Schatten – der spürt nichts."
  },
  {
    text: "Welches Instrument hat genau 88 Tasten?",
    options: ["Akkordeon", "Klavier", "Cembalo", "Mein Wecker (88 Snooze-Knöpfe)"],
    correct: 1,
    explanation: "Klavier – 52 weiße + 36 schwarze Tasten."
  },
  {
    text: "Was ist immer vor dir, kannst du aber nie sehen?",
    options: ["Deine Nase", "Die Zukunft", "Ein Geist", "Dein Reflex"],
    correct: 1,
    explanation: "Die Zukunft – egal, wie schnell du läufst, du kommst nie an."
  },
  {
    text: "Welche Frage kann man niemals wahrheitsgemäß mit „Ja“ beantworten?",
    options: [
      "„Bist du wach?“",
      "„Schläfst du?“",
      "„Lebst du?“",
      "„Hast du Hunger?“"
    ],
    correct: 1,
    explanation: "„Schläfst du?“ – wenn du schläfst, kannst du nicht antworten."
  },

  // === VERWALTUNG II ===
  {
    text: "Was war der „Pfennig“ in Deutschland?",
    options: [
      "Die deutsche Cent-Münze",
      "1/100 der Deutschen Mark – heute abgeschafft",
      "Eine Schreibweise für Pennig",
      "Restgeld auf dem Boden"
    ],
    correct: 1,
    explanation: "1/100 Mark – seit 2002 mit der Euro-Einführung Geschichte."
  },
  {
    text: "In welcher Stadt sitzt der Deutsche Bundestag?",
    options: ["Bonn", "Berlin", "Frankfurt", "Wo das WLAN am besten ist"],
    correct: 1,
    explanation: "Berlin, im Reichstagsgebäude – seit dem Umzug 1999."
  },
  {
    text: "Wofür steht „BAG“ im deutschen Rechtssystem?",
    options: [
      "Bundesarbeitsgericht",
      "Bundesausgleichsgericht",
      "Bürgerliches Arbeitsgericht",
      "Bayrisches Allgemeingericht"
    ],
    correct: 0,
    explanation: "Bundesarbeitsgericht – sitzt in Erfurt, höchste Instanz im Arbeitsrecht."
  },
  {
    text: "Wie viele Stimmen hat ein Wähler bei der Bundestagswahl?",
    options: ["1", "2", "3", "Egal, es wird eh kompliziert"],
    correct: 1,
    explanation: "Zwei: Erststimme für den Wahlkreis-Kandidaten, Zweitstimme für die Partei."
  },
  {
    text: "Wer trifft sich offiziell im Bundesrat?",
    options: [
      "Bundeskanzler und Minister",
      "Vertreter der Bundesländer",
      "Bundespräsident und Beamte",
      "Pensionierte Abgeordnete"
    ],
    correct: 1,
    explanation: "Vertreter der Bundesländer – jedes Land hat zwischen 3 und 6 Stimmen."
  },
  {
    text: "Was bedeutet „Ehrenamt“ im deutschen Recht?",
    options: [
      "Bezahlter Job mit Bonus",
      "Unbezahlte Tätigkeit für die Gesellschaft",
      "Ein Adelstitel",
      "Was man am Wochenende vergisst"
    ],
    correct: 1,
    explanation: "Unbezahlte Tätigkeit – aber durchaus mit Ehrenpflichten und teils Aufwandsentschädigung."
  },
  {
    text: "In welcher Stadt sitzt das Statistische Bundesamt?",
    options: ["Berlin", "Wiesbaden", "Frankfurt", "Wo am wenigsten Statistik verbreitet wird"],
    correct: 1,
    explanation: "Wiesbaden – der „Destatis“-Hauptsitz."
  },
  {
    text: "Wofür steht „SEPA“ bei deutschen Bank-Überweisungen?",
    options: [
      "Single Euro Payments Area",
      "System Europäischer Privater Abrechnung",
      "Sicherer Europäischer Pfennig-Austausch",
      "Schnell-Eingehende-Pleite-Anweisung"
    ],
    correct: 0,
    explanation: "Single Euro Payments Area – einheitlicher europäischer Zahlungsraum seit 2014."
  },

  // === SCHÄTZFRAGEN II ===
  {
    text: "Wie viele Schritte macht ein Deutscher durchschnittlich pro Tag?",
    options: ["~3.000", "~7.500", "~15.000", "Bis die Beine müde sind"],
    correct: 1,
    explanation: "Etwa 7.000–8.000 Schritte – die berühmten 10.000 sind eher Marketing."
  },
  {
    text: "Wie viel Wasser sollte ein Erwachsener pro Tag trinken (laut DGE)?",
    options: ["0,5 L", "1,5 L", "5 L", "Nur Bier, Mama"],
    correct: 1,
    explanation: "Etwa 1,5 Liter aus Getränken plus Wasser über Nahrung."
  },
  {
    text: "Wie viele Tassen Kaffee trinkt ein Deutscher durchschnittlich pro Tag?",
    options: ["1", "3", "7", "Nicht genug"],
    correct: 1,
    explanation: "Etwa 3 Tassen täglich – Deutschland ist Kaffee-Weltmeister Nr. 5."
  },
  {
    text: "Wie viel Müll produziert ein Deutscher ungefähr pro Jahr?",
    options: ["~150 kg", "~400 kg", "~620 kg", "So viel wie sein Online-Shopping-Verlauf"],
    correct: 2,
    explanation: "Rund 620 kg Siedlungsabfälle pro Kopf pro Jahr."
  },
  {
    text: "Wie viele Rinder leben ungefähr in Deutschland?",
    options: ["~1 Million", "~5 Millionen", "~11 Millionen", "Eine pro Bayern"],
    correct: 2,
    explanation: "Rund 11 Millionen Rinder in deutschen Ställen und auf Weiden."
  },
  {
    text: "Wie viel CO₂ stößt ein Deutscher durchschnittlich pro Jahr aus?",
    options: ["~1 t", "~5 t", "~11 t", "Klimaaktivisten weinen"],
    correct: 2,
    explanation: "Rund 11 Tonnen pro Person und Jahr – weit über dem 1,5-Grad-Ziel."
  },
  {
    text: "Wie viele Sprachen werden weltweit gesprochen?",
    options: ["~500", "~2.500", "~7.000", "Eine pro WG-Konflikt"],
    correct: 2,
    explanation: "Etwa 7.000, davon allerdings die Hälfte vom Aussterben bedroht."
  },
  {
    text: "Wie hoch fliegt die Internationale Raumstation (ISS) ungefähr?",
    options: ["~50 km", "~400 km", "~10.000 km", "So hoch, dass kein WLAN reicht"],
    correct: 1,
    explanation: "Rund 400 km – sie umkreist die Erde alle 90 Minuten."
  },

  // === SPORT ===
  {
    text: "Welcher Tennisspieler hält den Rekord für die meisten Grand-Slam-Titel (Männer)?",
    options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Boris Becker (zu Hause)"],
    correct: 2,
    explanation: "Novak Djokovic – mit 24 Grand-Slam-Titeln vorn."
  },
  {
    text: "Wie viele Spieler einer Eishockey-Mannschaft stehen gleichzeitig auf dem Eis?",
    options: ["5", "6", "7", "So viele, wie ich grad zähle"],
    correct: 1,
    explanation: "Sechs: 5 Feldspieler + 1 Torhüter."
  },
  {
    text: "Wie viele Runden hat ein Profi-Boxkampf maximal?",
    options: ["8", "10", "12", "Bis einer am Boden liegt"],
    correct: 2,
    explanation: "Zwölf Runden à drei Minuten."
  },
  {
    text: "Wie viele Spieler einer Volleyball-Mannschaft stehen gleichzeitig auf dem Feld?",
    options: ["5", "6", "7", "Anders als bei Beachvolleyball"],
    correct: 1,
    explanation: "Sechs auf dem Feld. Beachvolleyball nur zwei."
  },
  {
    text: "Wie heißt Tischtennis im internationalen Sportkontext?",
    options: ["Ping-Pong", "Mini Tennis", "Table Tennis", "Klatschsport"],
    correct: 2,
    explanation: "Table Tennis – Ping-Pong ist der umgangssprachliche Begriff."
  },

  // === GEOGRAPHIE II ===
  {
    text: "Welcher Kontinent ist der kleinste?",
    options: ["Antarktis", "Europa", "Australien (mit Ozeanien)", "Asien"],
    correct: 2,
    explanation: "Australien (Ozeanien) – rund 8,6 Mio. km². Antarktis ist 14 Mio. km²."
  },
  {
    text: "Welcher Fluss ist innerhalb Deutschlands der längste?",
    options: ["Donau", "Elbe", "Rhein", "Müggelteich"],
    correct: 2,
    explanation: "Der Rhein – ca. 865 km auf deutschem Boden. Donau ist insgesamt länger, fließt aber nur 647 km durch DE."
  },
  {
    text: "Wie heißt die größte Insel der Welt (außer Australien als Kontinent)?",
    options: ["Madagaskar", "Sumatra", "Grönland", "Sylt (gefühlt)"],
    correct: 2,
    explanation: "Grönland – über 2,1 Millionen km², zu Dänemark gehörig."
  },
  {
    text: "An welchem Meer liegt die deutsche Insel Sylt?",
    options: ["Ostsee", "Mittelmeer", "Nordsee", "Sahnehering-Meer"],
    correct: 2,
    explanation: "An der Nordsee, ganz oben in Schleswig-Holstein."
  },
  {
    text: "Welcher Gebirgszug bildet die traditionelle Grenze zwischen Europa und Asien?",
    options: ["Alpen", "Ural", "Himalaya", "Erzgebirge"],
    correct: 1,
    explanation: "Der Ural – verläuft Nord-Süd durch Russland."
  },

  // === WISSENSCHAFT & GESCHICHTE ===
  {
    text: "Welcher Wissenschaftler entdeckte die Schwerkraft (laut der berühmten Apfel-Anekdote)?",
    options: ["Isaac Newton", "Johannes Kepler", "Galileo Galilei", "Darwin (anderes Fach)"],
    correct: 0,
    explanation: "Isaac Newton – die Apfel-Geschichte ist allerdings teils Legende."
  },
  {
    text: "In welchem Jahr sank die Titanic?",
    options: ["1898", "1912", "1925", "Letzten Sommer (im Kino schon wieder)"],
    correct: 1,
    explanation: "15. April 1912 – Kollision mit einem Eisberg im Nordatlantik."
  },
  {
    text: "Wer war der zweite Bundeskanzler der BRD (nach Adenauer)?",
    options: ["Willy Brandt", "Ludwig Erhard", "Kurt Georg Kiesinger", "Helmut Kohl"],
    correct: 1,
    explanation: "Ludwig Erhard, 1963–1966. Vater des „Wirtschaftswunders“."
  },
  {
    text: "In welcher Tonart steht Beethovens „Für Elise“?",
    options: ["C-Dur", "a-Moll", "Es-Dur", "Mein Klavierlehrer wusste es"],
    correct: 1,
    explanation: "a-Moll – das ikonische Eingangsmotiv beginnt mit E–Dis–E."
  },
  {
    text: "Wie heißt die größte Pyramide in Ägypten?",
    options: ["Cheops-Pyramide", "Mykerinos-Pyramide", "Tutanchamun-Pyramide", "Die mit dem schönsten Dach"],
    correct: 0,
    explanation: "Cheops-Pyramide in Gizeh – einziges noch erhaltenes Weltwunder der Antike."
  },

  // === GEOGRAPHIE III ===
  {
    text: "Wie heißt die Hauptstadt Schwedens?",
    options: ["Oslo", "Stockholm", "Helsinki", "Wo Ikea wohnt"],
    correct: 1,
    explanation: "Stockholm – verteilt auf 14 Inseln rund um den Mälaren."
  },
  {
    text: "Wie heißt der höchste Berg Afrikas?",
    options: ["Kilimandscharo", "Mount Kenya", "Mount Meru", "Mein Wäscheberg im Schlafzimmer"],
    correct: 0,
    explanation: "Kilimandscharo in Tansania – 5.895 m."
  },
  {
    text: "Welche Hauptstadt liegt fast genau auf dem Äquator (Breitengrad 0)?",
    options: ["Quito", "Nairobi", "Singapur", "Kinshasa"],
    correct: 0,
    explanation: "Quito (Ecuador) liegt nur wenige Kilometer südlich des Äquators."
  },
  {
    text: "Welcher Fluss bildet einen großen Teil der Grenze zwischen Deutschland und Polen?",
    options: ["Rhein", "Oder", "Elbe", "Donau"],
    correct: 1,
    explanation: "Oder (zusammen mit der Neiße) – die sogenannte Oder-Neiße-Linie."
  },
  {
    text: "Welcher See ist der größte zusammenhängende See in Afrika?",
    options: ["Tanganjikasee", "Viktoriasee", "Malawisee", "Tschadsee"],
    correct: 1,
    explanation: "Viktoriasee – über 68.000 km² groß, drei Länder grenzen daran."
  },
  {
    text: "Welches Land hat die längste Küstenlinie der Welt?",
    options: ["Russland", "Kanada", "Australien", "Wo das Bier-Strand-Bild herkommt"],
    correct: 1,
    explanation: "Kanada – über 200.000 km Küstenlinie."
  },
  {
    text: "Wie heißt die Hauptstadt Argentiniens?",
    options: ["Santiago", "Buenos Aires", "Lima", "Bogotá"],
    correct: 1,
    explanation: "Buenos Aires – „gute Lüfte“, am Río de la Plata."
  },
  {
    text: "Welcher große Fluss durchquert Ägypten von Süden nach Norden?",
    options: ["Tigris", "Euphrat", "Nil", "Rio Grande"],
    correct: 2,
    explanation: "Der Nil – mit 6.650 km gilt er als längster Fluss der Erde."
  },
  {
    text: "Welches Land deckt die meisten Zeitzonen ab?",
    options: ["Russland", "Frankreich (mit Überseegebieten)", "USA", "China"],
    correct: 1,
    explanation: "Frankreich – mit seinen Überseegebieten 12 Zeitzonen."
  },
  {
    text: "Welche US-Stadt heißt im Volksmund „Big Apple“?",
    options: ["Chicago", "New York City", "Boston", "Los Angeles"],
    correct: 1,
    explanation: "New York City – der Spitzname stammt aus dem Pferderennsport der 1920er."
  },
  {
    text: "Welche Großstadt liegt teils in Europa, teils in Asien?",
    options: ["Moskau", "Istanbul", "Athen", "Berlin (gefühlt)"],
    correct: 1,
    explanation: "Istanbul – der Bosporus trennt die beiden Stadtteile."
  },
  {
    text: "Wie viele Bundesstaaten hat die USA?",
    options: ["48", "49", "50", "52"],
    correct: 2,
    explanation: "50 – seit 1959 mit Alaska und Hawaii."
  },
  {
    text: "In welchem deutschen Bundesland liegt der Schwarzwald?",
    options: ["Bayern", "Baden-Württemberg", "Hessen", "Da, wo der Schinken herkommt"],
    correct: 1,
    explanation: "Baden-Württemberg – im Südwesten Deutschlands."
  },
  {
    text: "Zu welchem Land gehören die Kanarischen Inseln?",
    options: ["Portugal", "Spanien", "Marokko", "Frankreich"],
    correct: 1,
    explanation: "Spanien – obwohl näher an Afrika als am spanischen Festland."
  },
  {
    text: "Welcher europäische Staat ist der flächenmäßig kleinste?",
    options: ["Monaco", "Liechtenstein", "San Marino", "Vatikanstadt"],
    correct: 3,
    explanation: "Vatikanstadt – nur 0,44 km² und ca. 800 Einwohner."
  },

  // === GESCHICHTE II ===
  {
    text: "In welchem Jahr wurde das Deutsche Reich gegründet?",
    options: ["1815", "1848", "1871", "1918"],
    correct: 2,
    explanation: "1871 – Reichsproklamation in Versailles, Bismarck als Reichskanzler."
  },
  {
    text: "Wer war der erste römische Kaiser?",
    options: ["Julius Cäsar", "Augustus", "Nero", "Caligula"],
    correct: 1,
    explanation: "Augustus (27 v. Chr. – 14 n. Chr.). Cäsar war Diktator, kein Kaiser."
  },
  {
    text: "In welchem Jahr endete der Zweite Weltkrieg in Europa?",
    options: ["1944", "1945", "1946", "1950"],
    correct: 1,
    explanation: "8. Mai 1945 – Tag der bedingungslosen Kapitulation der Wehrmacht."
  },
  {
    text: "Wer war der bekannte Bauherr von Schloss Neuschwanstein?",
    options: ["Friedrich der Große", "Ludwig II. von Bayern", "Wilhelm II.", "Karneval-König Helau IV."],
    correct: 1,
    explanation: "Ludwig II. – der „Märchenkönig“, geriet finanziell ins Trudeln dabei."
  },
  {
    text: "Für welches europäische Land segelte Christoph Kolumbus, als er 1492 Amerika erreichte?",
    options: ["Portugal", "Spanien", "England", "Frankreich"],
    correct: 1,
    explanation: "Spanien – im Auftrag von Königin Isabella und König Ferdinand."
  },
  {
    text: "Was war Napoleon Bonaparte historisch?",
    options: ["Französischer Kaiser", "Italienischer Maler", "Spanischer Entdecker", "Erfinder der Croissants"],
    correct: 0,
    explanation: "Französischer Kaiser von 1804 bis 1814/15."
  },
  {
    text: "In welcher US-Stadt wurde John F. Kennedy 1963 ermordet?",
    options: ["Washington D.C.", "New York", "Dallas", "Chicago"],
    correct: 2,
    explanation: "Dallas, Texas – am 22. November 1963."
  },
  {
    text: "In welchem Jahr begann die Französische Revolution?",
    options: ["1776", "1789", "1812", "Vor langer, langer Zeit"],
    correct: 1,
    explanation: "1789 – Sturm auf die Bastille am 14. Juli."
  },
  {
    text: "Welche Schlacht 1815 besiegelte Napoleons endgültige Niederlage?",
    options: ["Trafalgar", "Borodino", "Waterloo", "Austerlitz"],
    correct: 2,
    explanation: "Waterloo – das Wort wurde danach Synonym für eine schwere Niederlage."
  },
  {
    text: "Wer schrieb das „Kommunistische Manifest“ (1848)?",
    options: ["Karl Marx und Friedrich Engels", "Lenin", "Stalin und Trotzki", "Der Geschichtslehrer von nebenan"],
    correct: 0,
    explanation: "Marx und Engels gemeinsam – „Ein Gespenst geht um in Europa…“"
  },
  {
    text: "In welchem Jahr zerfiel die Sowjetunion?",
    options: ["1985", "1989", "1991", "1995"],
    correct: 2,
    explanation: "1991 – Ende eines Imperiums nach knapp 70 Jahren."
  },
  {
    text: "Welcher Vertrag beendete den Ersten Weltkrieg offiziell?",
    options: ["Vertrag von Versailles", "Vertrag von Trianon", "Vertrag von Brest-Litowsk", "Vertrag von Maastricht"],
    correct: 0,
    explanation: "Versailles, 1919 – mit harten Bedingungen für das Deutsche Reich."
  },
  {
    text: "Welcher antike griechische Philosoph wurde 399 v. Chr. zum Tode verurteilt?",
    options: ["Sokrates", "Platon", "Aristoteles", "Pythagoras"],
    correct: 0,
    explanation: "Sokrates – wegen „Verderbung der Jugend“ und „Asebie“. Trank den Schierlingsbecher."
  },
  {
    text: "Wer war der erste Mensch im Weltall?",
    options: ["Neil Armstrong", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
    correct: 1,
    explanation: "Yuri Gagarin (UdSSR), 12. April 1961 – einmal um die Erde."
  },
  {
    text: "In welchem Jahr wurde John Lennon erschossen?",
    options: ["1975", "1980", "1985", "Vor langer Zeit, mehr weiß ich nicht"],
    correct: 1,
    explanation: "8. Dezember 1980 – vor seinem Apartment in New York."
  },

  // === WISSENSCHAFT II ===
  {
    text: "Wie heißt der Prozess, bei dem Pflanzen Sonnenlicht in Energie umwandeln?",
    options: ["Atmung", "Photosynthese", "Verdauung", "Transpiration"],
    correct: 1,
    explanation: "Photosynthese – CO₂ + Wasser + Licht → Zucker + Sauerstoff."
  },
  {
    text: "Welches Element ist mit Abstand am häufigsten in der Erdkruste?",
    options: ["Sauerstoff", "Silicium", "Aluminium", "Die Energie meiner Schwiegermutter"],
    correct: 0,
    explanation: "Sauerstoff – chemisch gebunden in Silikaten, etwa 46 % der Erdkruste."
  },
  {
    text: "Was ist die SI-Einheit für elektrische Spannung?",
    options: ["Watt", "Ampere", "Volt", "Ohm"],
    correct: 2,
    explanation: "Volt – benannt nach Alessandro Volta."
  },
  {
    text: "Was misst ein Seismograph?",
    options: ["Wind", "Erdbeben", "Niederschlag", "Temperatur"],
    correct: 1,
    explanation: "Erdbeben bzw. Erschütterungen der Erdoberfläche."
  },
  {
    text: "Wer formulierte die Theorie der natürlichen Selektion (Evolution)?",
    options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Marie Curie"],
    correct: 0,
    explanation: "Darwin – „On the Origin of Species“, 1859."
  },
  {
    text: "Welches Gas atmen Menschen aus der Luft ein, das wir zum Leben brauchen?",
    options: ["Stickstoff", "Sauerstoff", "Kohlendioxid", "Espresso-Dampf"],
    correct: 1,
    explanation: "Sauerstoff – ca. 21 % der Luft."
  },
  {
    text: "Welcher Wissenschaftler entdeckte 1928 die antibiotische Wirkung des Penicillins?",
    options: ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Joseph Lister"],
    correct: 1,
    explanation: "Alexander Fleming – Schimmelpilz auf einer vergessenen Petrischale."
  },
  {
    text: "Welches Computer-Betriebssystem hat einen Pinguin als Maskottchen?",
    options: ["Windows", "macOS", "Linux", "Tinder"],
    correct: 2,
    explanation: "Linux – der Pinguin heißt Tux."
  },
  {
    text: "Wie viele Knochen hat eine Hand des erwachsenen Menschen?",
    options: ["24", "27", "30", "33"],
    correct: 1,
    explanation: "27 – Handwurzel, Mittelhand und Finger zusammen."
  },
  {
    text: "Wie viele Bit hat 1 Byte?",
    options: ["4", "8", "16", "Mehr, als ich brauche"],
    correct: 1,
    explanation: "8 Bit – seit Jahrzehnten Standard."
  },
  {
    text: "Welcher deutsche Erfinder gilt als Pionier des modernen Computers?",
    options: ["Konrad Zuse", "Werner von Siemens", "Wernher von Braun", "Heinrich Hertz"],
    correct: 0,
    explanation: "Konrad Zuse – baute 1941 mit der Z3 den ersten funktionsfähigen programmgesteuerten Rechner."
  },
  {
    text: "Welches ist das schnellste Landtier der Welt?",
    options: ["Löwe", "Antilope", "Gepard", "Pferd"],
    correct: 2,
    explanation: "Gepard – Spitzengeschwindigkeit über 110 km/h, allerdings nur kurz."
  },
  {
    text: "Welcher ist der größte Knochen im menschlichen Körper?",
    options: ["Schienbein", "Oberschenkelknochen", "Beckenknochen", "Wirbel"],
    correct: 1,
    explanation: "Femur (Oberschenkelknochen) – durchschnittlich rund ein Viertel der Körpergröße."
  },
  {
    text: "Wofür steht die Abkürzung „LASER“?",
    options: [
      "Light Amplification by Stimulated Emission of Radiation",
      "Liquid Active Sound Emission Reflector",
      "Long-Acting Single Energy Reactor",
      "Lass-Andere-Sich-Erst-Räuspern"
    ],
    correct: 0,
    explanation: "Stimmt – „verstärktes Licht durch angeregte Strahlungsemission“."
  },
  {
    text: "Was bezeichnet die „Halbwertszeit“?",
    options: [
      "Die Zeit, in der die Hälfte einer radioaktiven Substanz zerfällt",
      "Die halbe Lebenserwartung",
      "Halb so lang wie die Vollwertszeit",
      "Pause halbe Halbe (mit Bier)"
    ],
    correct: 0,
    explanation: "Klassisch in der Physik: Zeit, bis die Hälfte einer Probe radioaktiv zerfallen ist."
  },

  // === POP-KULTUR II ===
  {
    text: "Welche Sängerin trägt den Beinamen „Queen of Pop“?",
    options: ["Madonna", "Beyoncé", "Lady Gaga", "Meine Mama, anscheinend"],
    correct: 0,
    explanation: "Madonna – seit den 80ern fest in der Pop-Geschichte verankert."
  },
  {
    text: "Aus welcher Filmreihe stammt das Zitat „May the Force be with you“?",
    options: ["Star Trek", "Star Wars", "Marvel", "Lord of the Rings"],
    correct: 1,
    explanation: "Star Wars – ein Standardabschiedsspruch der Jedi."
  },
  {
    text: "Welcher Schauspieler verkörperte Harry Potter in den Filmen?",
    options: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Robert Pattinson"],
    correct: 0,
    explanation: "Daniel Radcliffe – von 2001 bis 2011 in allen acht Filmen."
  },
  {
    text: "Welche Band veröffentlichte 1969 das Album „Abbey Road“?",
    options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "The Who"],
    correct: 1,
    explanation: "The Beatles – das Cover wurde zur Pop-Ikone."
  },
  {
    text: "Wie heißt der Sänger der Band U2?",
    options: ["Bono", "The Edge", "Sting", "Mick Jagger"],
    correct: 0,
    explanation: "Bono (Paul Hewson) – seit 1976 Frontmann."
  },
  {
    text: "In welchem Videospiel-Universum sind „Mario“ und „Luigi“ Hauptfiguren?",
    options: ["Sonic", "Super Mario", "Pac-Man", "An der Aldi-Kasse"],
    correct: 1,
    explanation: "Super Mario – seit 1985 Nintendo-Maskottchen."
  },
  {
    text: "Welche Comic-Heldin trägt das „Lasso der Wahrheit“?",
    options: ["Wonder Woman", "Catwoman", "Black Widow", "Supergirl"],
    correct: 0,
    explanation: "Wonder Woman – jeder, der ans Lasso gebunden ist, muss die Wahrheit sagen."
  },
  {
    text: "Welcher Marvel-Held ist Tony Stark?",
    options: ["Captain America", "Iron Man", "Thor", "Hulk"],
    correct: 1,
    explanation: "Iron Man – Milliardär mit Selbstbau-Anzug."
  },
  {
    text: "Welcher Film gewann 2020 den Oscar als bester Film?",
    options: ["Joker", "Parasite", "1917", "Once Upon a Time in Hollywood"],
    correct: 1,
    explanation: "Parasite – erster nicht-englischsprachiger Film mit dem Hauptpreis."
  },
  {
    text: "Wer komponierte „Eine kleine Nachtmusik“?",
    options: ["Bach", "Beethoven", "Mozart", "Haydn"],
    correct: 2,
    explanation: "Mozart – komponiert 1787, eines seiner bekanntesten Werke."
  },
  {
    text: "Welche Band veröffentlichte den Welthit „Bohemian Rhapsody“?",
    options: ["Queen", "The Beatles", "Pink Floyd", "Mein Auto-CD-Player auf Repeat"],
    correct: 0,
    explanation: "Queen – 1975, geschrieben von Freddie Mercury."
  },
  {
    text: "Welcher Schauspieler spielte James Bond in den meisten offiziellen Filmen?",
    options: ["Sean Connery", "Roger Moore", "Daniel Craig", "Pierce Brosnan"],
    correct: 1,
    explanation: "Roger Moore – mit sieben Bond-Filmen Rekordhalter."
  },
  {
    text: "Wer komponierte die Oper „Die Zauberflöte“?",
    options: ["Mozart", "Wagner", "Beethoven", "Bach"],
    correct: 0,
    explanation: "Mozart – uraufgeführt 1791, kurz vor seinem Tod."
  },
  {
    text: "Wer lieh Homer Simpson über Jahre die deutsche Synchronstimme?",
    options: ["Norbert Gastell", "Christoph Maria Herbst", "Hape Kerkeling", "Onkel Klaus aus Wuppertal"],
    correct: 0,
    explanation: "Norbert Gastell – sprach Homer von 1991 bis zu seinem Tod 2015."
  },
  {
    text: "Welcher Disney-Film war 1937 der erste abendfüllende Zeichentrickfilm?",
    options: ["Schneewittchen und die sieben Zwerge", "Pinocchio", "Bambi", "König der Löwen"],
    correct: 0,
    explanation: "Schneewittchen – ein gewagtes Experiment, das Disney den Weg ebnete."
  },

  // === SPORT II ===
  {
    text: "In welcher Sportart wurde Roger Federer Weltklasse?",
    options: ["Golf", "Tennis", "Boxen", "Schwimmen"],
    correct: 1,
    explanation: "Tennis – 20 Grand-Slam-Titel."
  },
  {
    text: "Wie viele Spieler einer Mannschaft stehen beim Basketball gleichzeitig auf dem Feld?",
    options: ["4", "5", "6", "7"],
    correct: 1,
    explanation: "Fünf pro Team."
  },
  {
    text: "Wo findet die Fußball-Weltmeisterschaft 2026 statt?",
    options: ["Saudi-Arabien", "USA, Mexiko und Kanada", "Frankreich", "Auf dem Bolzplatz nebenan"],
    correct: 1,
    explanation: "USA, Mexiko und Kanada gemeinsam – erste WM mit drei Gastgebern."
  },
  {
    text: "Wer gewann die Fußball-Weltmeisterschaft 2022 in Katar?",
    options: ["Frankreich", "Argentinien", "Brasilien", "Deutschland (im Geist)"],
    correct: 1,
    explanation: "Argentinien – im Finale gegen Frankreich (im Elfmeterschießen)."
  },
  {
    text: "In welchem Sport gibt es den Begriff „Birdie“ für ein Schlagergebnis?",
    options: ["Golf", "Tennis", "Cricket", "Basketball"],
    correct: 0,
    explanation: "Golf – ein Schlag unter Par."
  },
  {
    text: "Welche Punktzahl folgt im Tennis nach „30“?",
    options: ["35", "40", "45", "50"],
    correct: 1,
    explanation: "40 – die seltsame Tennis-Zählung: 0, 15, 30, 40, Spiel."
  },
  {
    text: "Welche Sportart wird auf einer Eisbahn mit Steinen und Besen gespielt?",
    options: ["Eisstockschießen", "Curling", "Bobfahren", "Synchronschwimmen auf Eis"],
    correct: 1,
    explanation: "Curling – die „schreiende Kunst auf Eis“."
  },
  {
    text: "Welcher deutsche Radprofi gewann 1997 die Tour de France?",
    options: ["Erik Zabel", "Jan Ullrich", "André Greipel", "Bernhard Eisel"],
    correct: 1,
    explanation: "Jan Ullrich – bisher einziger Deutscher mit Tour-Sieg."
  },
  {
    text: "Wie viele Punkte zählt ein Touchdown im American Football?",
    options: ["3", "6", "7", "Genug, dass man jubelt"],
    correct: 1,
    explanation: "6 Punkte – plus 1 oder 2 Punkte bei Extra Point oder Conversion."
  },
  {
    text: "In welcher Disziplin hält Usain Bolt den 100-m- und 200-m-Weltrekord?",
    options: ["100 Meter", "400 Meter", "Marathon", "Hochsprung"],
    correct: 0,
    explanation: "100 m – 9,58 s (2009 in Berlin)."
  },

  // === KULTUR & LITERATUR II ===
  {
    text: "Welcher deutsche Autor schrieb den Roman „Buddenbrooks“?",
    options: ["Hermann Hesse", "Thomas Mann", "Heinrich Mann", "Franz Kafka"],
    correct: 1,
    explanation: "Thomas Mann – sein Debüt von 1901, Nobelpreis 1929."
  },
  {
    text: "Wer schrieb die Kinderbücher „Die kleine Hexe“ und „Räuber Hotzenplotz“?",
    options: ["Erich Kästner", "Otfried Preußler", "Astrid Lindgren", "Cornelia Funke"],
    correct: 1,
    explanation: "Otfried Preußler – auch „Krabat“ stammt von ihm."
  },
  {
    text: "Welchem griechischen Dichter werden „Ilias“ und „Odyssee“ zugeschrieben?",
    options: ["Sophokles", "Homer", "Aischylos", "Verfasser unbekannt – Homer ist Mythos"],
    correct: 1,
    explanation: "Homer – ob er real existierte, ist allerdings Forschungsstreit."
  },
  {
    text: "In welcher Religion ist die „Tora“ heilige Schrift?",
    options: ["Christentum", "Judentum", "Islam", "Hinduismus"],
    correct: 1,
    explanation: "Judentum – die Tora umfasst die fünf Bücher Mose."
  },
  {
    text: "Wie heißt das heilige Buch der Muslime?",
    options: ["Bibel", "Koran", "Tora", "Telefonbuch des Propheten"],
    correct: 1,
    explanation: "Der Koran – auf Arabisch „Lesung“ oder „Vortrag“."
  },
  {
    text: "Welche Religionen kennen den Begriff „Karma“ als zentrales Konzept?",
    options: ["Christentum", "Hinduismus und Buddhismus", "Islam", "Pure Yoga-Studios"],
    correct: 1,
    explanation: "Hinduismus und Buddhismus – das Prinzip von Ursache und Wirkung im Leben."
  },
  {
    text: "Wer schrieb das Lustspiel „Der zerbrochene Krug“?",
    options: ["Heinrich von Kleist", "Friedrich Schiller", "Theodor Fontane", "Thomas Mann"],
    correct: 0,
    explanation: "Heinrich von Kleist – uraufgeführt 1808."
  },
  {
    text: "In welcher deutschen Stadt steht das Festspielhaus, in dem Wagner-Opern aufgeführt werden?",
    options: ["Bayreuth", "München", "Wien (nein, Österreich)", "Berlin"],
    correct: 0,
    explanation: "Bayreuth – die berühmten Bayreuther Festspiele finden dort jährlich statt."
  },
  {
    text: "Wer schrieb die Novelle „Der kleine Prinz“?",
    options: ["Antoine de Saint-Exupéry", "Albert Camus", "Jean-Paul Sartre", "Victor Hugo"],
    correct: 0,
    explanation: "Antoine de Saint-Exupéry – 1943, eines der meistübersetzten Bücher der Welt."
  },
  {
    text: "Wer schrieb das Drama „Die Räuber“ (1781)?",
    options: ["Goethe", "Schiller", "Lessing", "Heine"],
    correct: 1,
    explanation: "Friedrich Schiller – mit nur 21 Jahren."
  },

  // === NATUR & TIERE II ===
  {
    text: "Welches ist das größte heute lebende Tier der Erde?",
    options: ["Afrikanischer Elefant", "Blauwal", "Anaconda", "Mein Onkel nach 5 Bier"],
    correct: 1,
    explanation: "Blauwal – bis zu 30 m lang und 180 t schwer."
  },
  {
    text: "Welches Insekt produziert Honig?",
    options: ["Wespe", "Honigbiene", "Hummel", "Hornisse"],
    correct: 1,
    explanation: "Honigbiene – ein einziges Volk schafft jährlich bis zu 30 kg."
  },
  {
    text: "Welche Pflanze gilt traditionell als erster Frühlingsbote in Mitteleuropa?",
    options: ["Krokus", "Schneeglöckchen", "Gänseblümchen", "Tulpe"],
    correct: 1,
    explanation: "Schneeglöckchen – schiebt sich oft schon im Februar durch den Schnee."
  },
  {
    text: "An welchem Baum wachsen Eicheln?",
    options: ["Buche", "Birke", "Eiche", "Kastanie"],
    correct: 2,
    explanation: "An der Eiche – wichtige Nahrung für Eichhörnchen, Eichelhäher und Co."
  },
  {
    text: "Wie nennt man die Verwandlung der Kaulquappe zum Frosch?",
    options: ["Mutation", "Metamorphose", "Photosynthese", "Wachstumsschub"],
    correct: 1,
    explanation: "Metamorphose – der vollständige Umbau des Körpers."
  },
  {
    text: "Wie nennt man Tiere, die sich ausschließlich pflanzlich ernähren?",
    options: ["Karnivoren", "Herbivoren", "Omnivoren", "Veganer im Tierreich"],
    correct: 1,
    explanation: "Herbivoren – von lateinisch „herba“ (Pflanze)."
  },
  {
    text: "Wie viele Beine hat ein Hummer (inklusive Scheren)?",
    options: ["6", "8", "10", "Genug, um auf den Tisch zu kommen"],
    correct: 2,
    explanation: "10 – acht zum Laufen, zwei mit Scheren."
  },
  {
    text: "Welches ist das größte landlebende Säugetier?",
    options: ["Nilpferd", "Afrikanischer Elefant", "Giraffe", "Bär"],
    correct: 1,
    explanation: "Afrikanischer Elefant – Bullen wiegen bis zu 6 Tonnen."
  },
  {
    text: "Wie heißt die Wissenschaft, die sich mit Vögeln beschäftigt?",
    options: ["Ornithologie", "Botanik", "Zoologie", "Herpetologie"],
    correct: 0,
    explanation: "Ornithologie – griechisch „ornis“ heißt Vogel."
  },
  {
    text: "Welcher Mineralstoff ist Hauptbestandteil von Knochen und Zähnen?",
    options: ["Eisen", "Calcium", "Magnesium", "Natrium"],
    correct: 1,
    explanation: "Calcium – als Calciumphosphat im Knochen eingebaut."
  },

  // === ESSEN & TRINKEN ===
  {
    text: "Welches Kraut ist Hauptzutat eines klassischen Pesto Genovese?",
    options: ["Basilikum", "Petersilie", "Spinat", "Rucola"],
    correct: 0,
    explanation: "Basilikum – plus Pinienkerne, Knoblauch, Parmesan, Olivenöl, Salz."
  },
  {
    text: "Aus welcher Pflanze wird das Gewürz Safran gewonnen?",
    options: ["Kurkuma-Wurzel", "Safran-Krokus (Narben der Blüte)", "Paprika", "Goldsplitter"],
    correct: 1,
    explanation: "Aus den Narben der Safran-Krokus-Blüte – deshalb so teuer."
  },
  {
    text: "Welcher italienische Käse wird mit Edelschimmel veredelt?",
    options: ["Brie", "Camembert", "Gorgonzola", "Cheddar"],
    correct: 2,
    explanation: "Gorgonzola – aus der Lombardei und dem Piemont."
  },
  {
    text: "Welche traditionelle deutsche Spezialität enthält Sauerkraut, Würste und Speck?",
    options: ["Sauerbraten", "Schlachtplatte", "Königsberger Klopse", "Currywurst"],
    correct: 1,
    explanation: "Schlachtplatte – Klassiker mit Kasseler, Eisbein, Bratwurst, Sauerkraut."
  },
  {
    text: "Aus welchem Land stammen die kleinen Häppchen „Tapas“?",
    options: ["Italien", "Spanien", "Portugal", "Aldi-Premium-Buffet"],
    correct: 1,
    explanation: "Spanien – ursprünglich kleine Beilagen, die das Glas „abdeckten“."
  },
  {
    text: "Welche italienische Nudelsorte sieht aus wie kleine Schmetterlinge?",
    options: ["Penne", "Farfalle", "Spaghetti", "Lasagne-Reste"],
    correct: 1,
    explanation: "Farfalle – heißt auf Italienisch tatsächlich „Schmetterlinge“."
  },
  {
    text: "Welche Frucht ist Hauptbestandteil von Marzipan?",
    options: ["Walnuss", "Mandel", "Haselnuss", "Kokos"],
    correct: 1,
    explanation: "Mandel – plus Zucker und ein Schuss Rosenwasser."
  },
  {
    text: "Wie wird der griechische Käse Feta traditionell gereift?",
    options: ["In Salzlake", "An der Luft", "In Holzfässern mit Wein", "Am offenen Feuer"],
    correct: 0,
    explanation: "In Salzlake – das ist auch namensrechtlich entscheidend."
  },
  {
    text: "Wofür ist die Stadt Nürnberg kulinarisch besonders berühmt?",
    options: ["Lebkuchen und Bratwürste", "Marzipan", "Sauerkraut", "Eintopf"],
    correct: 0,
    explanation: "Lebkuchen seit dem Mittelalter, Nürnberger Rostbratwürste seit Jahrhunderten."
  },
  {
    text: "Was ist die Tomate aus botanischer Sicht?",
    options: ["Ein Gemüse", "Eine Frucht (Beere)", "Eine Wurzel", "Mein Gesicht im Hochsommer"],
    correct: 1,
    explanation: "Botanisch eine Beerenfrucht – im Alltag aber ein Gemüse."
  }
];
