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
  }
];
