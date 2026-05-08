// Sprüche des virtuellen Quizmasters. Erscheinen bei jeder ~30%
// der Auflösungen als Sprechblase.
//
// Aufbau:
//   – Pools sind nach Spielsituation gruppiert.
//   – „Spezifische" Pools (hotStreak, streakBroken, sabotageSurvived,
//     sabotageFailed, bigLead, tightRace, drink) feuern, wenn die
//     entsprechende Situation eintritt – z.B. greift „streakBroken" nur,
//     wenn ein Team eine 3+er-Serie gerade verloren hat.
//   – Wenn nichts Spezifisches passiert, fällt der Server auf
//     generic / team / leader / loser zurück.
//
// Platzhalter:
//   {team} → wird mit dem für die Situation passenden Team ersetzt.
//   Generic-Pool: keine Platzhalter.
//
// Grammatik-Hinweis:
// Teamnamen können Singular oder Plural sein – deshalb steht {team} immer
// hinter „Team " oder im Objekt, niemals direkt als Subjekt mit konjugiertem
// Verb. So funktioniert "Team Bobby denkt nach" wie "Team Trinkbrüder denkt nach".

module.exports = {
  // Allgemeine Sprüche, kein Bezug auf Teams
  generic: [
    "Schwer, oder? Aber nicht für die, die zugehört haben.",
    "Diese Frage trennt die Wachen von den Verkaterten.",
    "Pub-Wissen wird komplett überschätzt.",
    "Mein Goldfisch hätte das auch hingekriegt.",
    "War das Wissen oder pures Glück?",
    "Trinkt einen, denkt nach – ihr habt's nötig.",
    "Wer das nicht wusste – schämt euch leise.",
    "Zwischenfrage: ist hier irgendwer nüchtern?",
    "Mal ehrlich: wer von euch hat hier geraten?",
    "Hartes Brot. Aber das gehört zum Pub-Quiz dazu.",
    "Wenn Wissen Bier wäre, wärt ihr alle nüchtern.",
    "Eure Eltern wären stolz. Wenn sie davon wüssten.",
    "Kollektives Versagen ist auch eine Form von Teamgeist.",
    "Frage zu leicht? Dachte ich mir.",
    "Diese Antwort spaltet seit Generationen die Bierzelte."
  ],

  // Zufälliges Team, neutral
  team: [
    "Team {team} denkt hart nach. Beeindruckend.",
    "Team {team} hat das fast richtig hingekriegt.",
    "Glückwunsch an {team} – immerhin noch dabei.",
    "Team {team} braucht offensichtlich mehr Bier.",
    "Ein Hauch von Hirn würde Team {team} jetzt nicht schaden.",
    "Falls Team {team} zuhört: Hallo. Falls nicht: schade.",
    "Team {team} und das Quiz – eine Hassliebe."
  ],

  // Team führt aktuell (mit normalem Vorsprung)
  leader: [
    "Team {team} führt. Vermutlich nur Glück.",
    "Team {team} hat anscheinend gegoogelt.",
    "Spitzenplatz für Team {team}. Wer hätte das gedacht.",
    "Team {team} – vorne weg. Bis zur nächsten Frage.",
    "Bewundernde Blicke an {team}. Naja, eher mitleidige.",
    "Team {team} regiert das Quiz. Vorerst."
  ],

  // Team auf letztem Platz
  loser: [
    "Team {team} kämpft tapfer. Vergeblich, aber tapfer.",
    "Team {team} bleibt hinten. Tradition.",
    "Soll ich {team} kurz die Antworten zuflüstern?",
    "Bei Team {team} ist das Bier wichtiger als die Punkte.",
    "Team {team} sammelt Erfahrungen. Schmerzhafte."
  ],

  // === Situationsspezifische Pools ===

  // Team hat 3+ richtige in Folge — heiße Phase
  hotStreak: [
    "Team {team} läuft heiß. Wer stoppt das?",
    "Achtung – Team {team} ist im Tunnel.",
    "Team {team} kann's heute nicht falsch machen.",
    "Drei in Folge: Team {team} hat einen Lauf.",
    "Team {team} hat den Sabotage-Knopf praktisch schon im Visier."
  ],

  // Team hatte 3+ Streak und ist gerade gestolpert
  streakBroken: [
    "Die heiße Phase von Team {team} ist vorbei. Schade drum.",
    "Team {team} kommt von der Wolke runter.",
    "Tja, alles hat ein Ende. Auch Team {team}s Serie.",
    "Team {team} ist zurück auf dem Boden der Tatsachen.",
    "Team {team} hat den Schluck wahrscheinlich schon verdient – die Serie ist weg."
  ],

  // Team hat eine Sabotage-Frage richtig beantwortet
  sabotageSurvived: [
    "Team {team} hat die Sabotage überlebt. Respekt.",
    "Sabotage war wohl nicht hart genug für Team {team}.",
    "Team {team} grinst nur müde über die Sabotage.",
    "Wer Team {team} sabotiert hat: schlechte Wahl. Sehr schlechte."
  ],

  // Team hat eine Sabotage-Frage falsch beantwortet
  sabotageFailed: [
    "Sabotage erfolgreich – Team {team} stolpert.",
    "Team {team} hatte keine Chance gegen die Falle.",
    "Wer auch immer Team {team} sabotiert hat: Mission erfüllt.",
    "Team {team} bedankt sich gleich beim Saboteur. Mit der Faust."
  ],

  // Team hat großen Vorsprung (>= 300 Pkt vor Platz 2)
  bigLead: [
    "Team {team} fährt einen Sieg ab. Sieht fast beleidigend aus.",
    "Team {team} ist gefühlt nicht mehr einzuholen.",
    "Team {team} schaut von oben auf den Rest – mit Sektglas.",
    "Bei dem Vorsprung könnte Team {team} eigentlich aufhören. Will aber nicht.",
    "Team {team} ist heute auf einem anderen Planeten unterwegs."
  ],

  // Punktedifferenz Platz 1 zu Platz 2 unter 100
  tightRace: [
    "Es wird eng oben! Spannender geht's kaum.",
    "Punktzahlen so eng wie meine Hose nach Weihnachten.",
    "Da müssen alle ran – sonst entscheidet die Pinte.",
    "Kopf-an-Kopf da vorne. Unterhaltung pur."
  ],

  // Team hat gerade einen Strafschluck kassiert
  drink: [
    "Team {team} trinkt brav. Man tut, was man kann.",
    "Schluck-Statistik aktuell: Team {team} ganz vorne dabei.",
    "Ein bisschen Bier hat noch keinem geschadet, Team {team}.",
    "Team {team} mit Strafe. Das Pub-Quiz funktioniert wie gewünscht."
  ]
};
