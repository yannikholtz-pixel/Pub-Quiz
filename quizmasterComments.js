// Sprüche des virtuellen Quizmasters. Erscheinen bei jeder ~30%
// der Auflösungen als Sprechblase.
//
// Platzhalter:
//   {team}   → ein zufällig ausgewähltes Team aus dem Raum
//   {leader} → das aktuell führende Team (nur, wenn 2+ Teams)
//   {loser}  → das aktuell letzte Team (nur, wenn 2+ Teams)
//
// Grammatik-Hinweis:
// Teamnamen können Singular („Bobby") oder Plural („Trinkbrüder") sein.
// Damit der Text in beiden Fällen grammatikalisch sauber ist, steht der
// Platzhalter NIE als alleiniges Subjekt mit konjugiertem Verb. Stattdessen:
//   – „Team {team}" als Subjekt (immer Singular: „Team Bobby denkt"
//     ebenso wie „Team Trinkbrüder denkt")
//   – im Objekt: „an {team}", „auf {team}", „bei {team}" — funktioniert ohne Verb-Anpassung
//   – keine direkten Anreden mit „du" oder „ihr" gegen einen Platzhalter
//
// Wer eigene Sprüche ergänzt, sollte eine dieser Formen einhalten.

module.exports = {
  generic: [
    "Schwer, oder? Aber nicht für die, die zugehört haben.",
    "Diese Frage trennt die Wachen von den Verkaterten.",
    "Pub-Wissen wird komplett überschätzt.",
    "Mein Goldfisch hätte das auch hingekriegt.",
    "War das Wissen oder pures Glück?",
    "Trinkt einen, denkt nach – ihr habt's nötig.",
    "Wer das nicht wusste – schämt euch leise.",
    "Zwischenfrage: ist hier irgendwer nüchtern?",
    "Ich hoffe, ihr lernt schneller als ihr trinkt.",
    "Mal ehrlich: wer von euch hat hier geraten?",
    "Das war kein Wissen, das war Reflex.",
    "Ich war kurz aufm Klo. Macht weiter, ohne mich zu vermissen.",
    "Hartes Brot. Aber das gehört zum Pub-Quiz dazu.",
    "Wenn Wissen Bier wäre, wärt ihr alle nüchtern.",
    "Geheimtipp: einfach mal die richtige Antwort klicken.",
    "Eure Eltern wären stolz. Wenn sie davon wüssten.",
    "Kollektives Versagen ist auch eine Form von Teamgeist.",
    "Ich glaube, mein Bildschirm trinkt heimlich mit.",
    "Frage zu leicht? Dachte ich mir.",
    "Diese Antwort spaltet seit Generationen die Bierzelte.",
    "Pause für die Schwiegermütter. Jetzt geht's los."
  ],
  team: [
    "Team {team} denkt hart nach. Beeindruckend.",
    "Team {team} hat das fast richtig hingekriegt.",
    "Glückwunsch an {team} – immerhin noch dabei.",
    "Team {team} braucht offensichtlich mehr Bier.",
    "Ein Hauch von Hirn würde Team {team} jetzt nicht schaden.",
    "Ich wette einen Schnaps auf {team}. Und verliere.",
    "Falls Team {team} zuhört: Hallo. Falls nicht: schade.",
    "Team {team} und das Quiz – eine Hassliebe.",
    "Heute übertrifft sich Team {team} selbst. Im negativen Sinn.",
    "Mein Beileid an {team}. Aus Gründen.",
    "Team {team} klickt mal wieder mutig auf die falsche Antwort.",
    "Schade um {team}. Hatte Hoffnungen für euch."
  ],
  leader: [
    "Team {leader} führt. Vermutlich nur Glück.",
    "Team {leader} hat anscheinend gegoogelt.",
    "Spitzenplatz für Team {leader}. Wer hätte das gedacht.",
    "Team {leader} – vorne weg. Bis zur nächsten Frage.",
    "Setzt eure Hoffnung auf {leader}. Oder eben nicht.",
    "Bewundernde Blicke an {leader}. Naja, eher mitleidige.",
    "Team {leader} regiert das Quiz. Vorerst."
  ],
  loser: [
    "Team {loser} kämpft tapfer. Vergeblich, aber tapfer.",
    "Team {loser} bleibt hinten. Tradition.",
    "Soll ich {loser} kurz die Antworten zuflüstern?",
    "Bei Team {loser} ist das Bier wichtiger als die Punkte.",
    "Team {loser} hat sicher Spaß. Nur halt keine Punkte.",
    "Zur Erinnerung an {loser}: das Quiz ist noch nicht vorbei.",
    "Team {loser} sammelt Erfahrungen. Schmerzhafte."
  ]
};
