// GIF-URLs für die Auflösung. Werden nach Antwort zufällig gezogen.
// Alle URLs hier wurden per HTTP-GET geprüft und liefern echten Content
// (keine Giphy-„nicht-gefunden"-Platzhalter, alle unter 4 MB für schnelles Laden).
//
// Tipp: Wenn du eigene GIFs ergänzen willst, am besten erst per
// `curl -s -o /dev/null -w "%{size_download}\n" <url>` prüfen.
// Liefert Giphy genau 239321 Bytes, ist das der „Removed"-Platzhalter.

module.exports = {
  CORRECT_GIFS: [
    "https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif",
    "https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif",
    "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
    "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",
    "https://media.giphy.com/media/Zw3oBUuOlDJ3W/giphy.gif",
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",
    "https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif",
    "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",
    "https://media.giphy.com/media/c2YyNySJ1CbFC/giphy.gif",
    "https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif",
    "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",
    "https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif",
    "https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif",
    "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",
    "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif",
    "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    "https://media.giphy.com/media/zcCGBRQshGdt6/giphy.gif",
    "https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif",
    "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif"
  ],
  WRONG_GIFS: [
    "https://media.giphy.com/media/l4FGuhL4U2WyjdkaY/giphy.gif",
    "https://media.giphy.com/media/14ut8PhnIwzros/giphy.gif",
    "https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif",
    "https://media.giphy.com/media/3og0IO5z8Rd30ktV6g/giphy.gif",
    "https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif",
    "https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif",
    "https://media.giphy.com/media/3oz8xLd9DJq2l2VFtu/giphy.gif",
    "https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif",
    "https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif",
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
    "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",
    "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",
    "https://media.giphy.com/media/zaqclXyLz3Uoo/giphy.gif",
    "https://media.giphy.com/media/2vA33ikUb0Qz6/giphy.gif"
  ]
};
