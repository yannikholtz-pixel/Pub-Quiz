// Sprüche des virtuellen Quizmasters. Erscheinen bei jeder ~25–30%
// der Auflösungen als Sprechblase.
//
// Platzhalter:
//   {team}   → ein zufällig ausgewähltes Team aus dem Raum
//   {leader} → das aktuell führende Team (nur, wenn 2+ Teams)
//   {loser}  → das aktuell letzte Team (nur, wenn 2+ Teams)
//
// In den Listen unten: wer keinen Platzhalter hat, gilt als „generic"
// und passt immer.

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
    "{team}, du atmest noch? Sicher?",
    "{team}, das war fast schlau.",
    "{team} denkt hart nach. Beeindruckend.",
    "Glückwunsch, {team}, du existierst weiterhin.",
    "{team}, ein Hauch von Hirn wäre jetzt nicht schlecht.",
    "Ich glaube, {team} braucht eine Pause. Oder mehr Bier.",
    "{team}, falls dir noch jemand zuhört — los.",
    "{team}, hör mal auf, deinen Sitznachbarn anzuschauen.",
    "{team} hat heute den Tag seines Lebens. Behauptet niemand.",
    "Ich wette einen Schnaps auf {team}. Und verliere.",
    "{team}, das hier ist nicht „Wer wird Millionär?". Du musst nicht raten."
  ],
  leader: [
    "{leader} führt. Vermutlich nur Glück.",
    "{leader} hat anscheinend gegoogelt.",
    "Setzt eure Hoffnung auf {leader}. Oder auch nicht.",
    "{leader}, jetzt mal nicht abheben.",
    "{leader} an der Spitze. Wer hätte das gedacht.",
    "Bewundernde Blicke an {leader}. Naja, mitleidige.",
    "{leader} regiert. Bis zur nächsten falschen Antwort."
  ],
  loser: [
    "{loser}, du gibst doch hoffentlich nicht auf?",
    "{loser}, ein bisschen Stolz, bitte.",
    "Zur Erinnerung an {loser}: es ist noch nicht vorbei.",
    "{loser}, soll ich dir die Antworten flüstern?",
    "{loser} kämpft tapfer. Vergeblich, aber tapfer.",
    "Setzt jetzt nicht alles auf {loser}. Es ist hoffnungslos.",
    "{loser}, das letzte Quiz lief auch nicht gut, oder?"
  ]
};
