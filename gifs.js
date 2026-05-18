// GIF-URLs für die Auflösung. Alle URLs verifiziert (echter Content, kein
// 239321-Byte-Platzhalter), und manuell auf passende Stimmung sortiert.
// Titel hinter jedem URL aus Giphy übernommen, damit du auf einen Blick
// siehst, was drin ist.
//
// Wenn du eigene GIFs ergänzen willst:
//   1. ID aus Giphy-URL extrahieren (https://giphy.com/gifs/<slug>-<ID>)
//   2. Mit `curl -s -o /dev/null -w "%{size_download}\n" https://media.giphy.com/media/<ID>/giphy.gif` testen
//   3. Liefert genau 239321 Bytes? → Platzhalter, nicht nehmen.

module.exports = {
  CORRECT_GIFS: [
    "https://media.giphy.com/media/26u4lOMA8JKSnL9Uk/giphy.gif",        // My Work Is Done
    "https://media.giphy.com/media/Zw3oBUuOlDJ3W/giphy.gif",            // Happy Hour Drinking
    "https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif",        // Blow Your Mind Wow
    "https://media.giphy.com/media/11sBLVxNs7v6WA/giphy.gif",           // Happy So Excited
    "https://media.giphy.com/media/JltOMwYmi0VrO/giphy.gif",            // Happy Brad Pitt
    "https://media.giphy.com/media/3o7TKMt1VVNkHV2PaE/giphy.gif",       // Animation Smile
    "https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif",            // Happy Lets Go
    "https://media.giphy.com/media/aLdiZJmmx4OVW/giphy.gif",            // Well Done Reaction
    "https://media.giphy.com/media/UO5elnTqo4vSg/giphy.gif",            // So Excited
    "https://media.giphy.com/media/3oEjHV0z8S7WM4MwnK/giphy.gif",       // Give Me Five
    "https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif",       // Happy Fresh Prince
    "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",       // Tom Hanks Hello
    "https://media.giphy.com/media/zaqclXyLz3Uoo/giphy.gif",            // Happy Stephen Colbert
    "https://media.giphy.com/media/2vA33ikUb0Qz6/giphy.gif",            // Ben Stiller Success
    "https://media.giphy.com/media/ItFyA7q8G14gJrvwQ3/giphy.gif",       // Family Guy – Peter Dancing
    "https://media.giphy.com/media/7eAvzJ0SBBzHy/giphy.gif",            // Family Guy – Excited Stewie
    "https://media.giphy.com/media/BFWDNv8fyMuSQ/giphy.gif",            // Simpsons – Homer Dancing
    "https://media.giphy.com/media/NV0eJfb73OB1K/giphy.gif",            // Simpsons – Homer Donuts
    "https://media.giphy.com/media/Z6m2HqMOpSaxW/giphy.gif",            // South Park – Smile
    "https://media.giphy.com/media/PEo7YHB7DqKGVQ6jBM/giphy.gif",       // The Boys – Mind Blown
    "https://media.giphy.com/media/G9BfAVaTTx4B3WIENf/giphy.gif",       // The Boys – Smirk
    // Neue Runde (Stand 2026)
    "https://media.giphy.com/media/BlVnrxJgTGsUw/giphy.gif",            // Seinfeld – Happy George Costanza
    "https://media.giphy.com/media/bgy65QnUWxTlR0j2yz/giphy.gif",       // We Did It Win
    "https://media.giphy.com/media/26u4exk4zsAqPcq08/giphy.gif",        // Winner Celebrate
    "https://media.giphy.com/media/Fk4QoZvIUTZIzzkoDV/giphy.gif",       // Proud Shiba Inu
    "https://media.giphy.com/media/6jAWtVoTfNuivl3MWd/giphy.gif",       // Excited Well Done
    "https://media.giphy.com/media/3rgXBxX4myufzT6N2w/giphy.gif",       // Happy Jonah Hill
    "https://media.giphy.com/media/DfLwM9kttDFEQ/giphy.gif",            // Leo DiCaprio Cheers (Great Gatsby)
    "https://media.giphy.com/media/29wik0hT7Ck9jppi6D/giphy.gif",       // Clink Clink
    "https://media.giphy.com/media/M1Ge89HJxugRfkH1jt/giphy.gif",       // Happy Hour Drinking
    "https://media.giphy.com/media/79mW5NqDZUb62Rcr6U/giphy.gif",       // Cheers Shots
    "https://media.giphy.com/media/14SHMhEv54pNvO8eHF/giphy.gif",       // Brooklyn 99 – Jake Peralta Noice
    "https://media.giphy.com/media/6HripTJu3HLXqiaJ1a/giphy.gif",       // Season 3 Yes
    "https://media.giphy.com/media/AbvhAEK8rdex6DqWBD/giphy.gif",       // Parks And Rec – Happy
    "https://media.giphy.com/media/3og0IwaJPBTQ9PVIeA/giphy.gif",       // Parks And Rec – Lol
    "https://media.giphy.com/media/4apcfHxnRfwjK/giphy.gif",            // SNL Dancing
    "https://media.giphy.com/media/4ebGXcUszdrJNDoVk4/giphy.gif",       // Cheers Toast To That
    "https://media.giphy.com/media/KEVNWkmWm6dm8/giphy.gif"             // Winner Success
  ],
  WRONG_GIFS: [
    "https://media.giphy.com/media/14ut8PhnIwzros/giphy.gif",           // Scared Horror
    "https://media.giphy.com/media/QMHoU66sBXqqLqYvGO/giphy.gif",       // This Is Fine
    "https://media.giphy.com/media/3o7btT1T9qpQZWhNlK/giphy.gif",       // Danny DeVito No
    "https://media.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif",       // Mr Bean Waiting
    "https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif",            // Tired Good Night
    "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif",            // Sad Baby
    "https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif",            // Cat Remember
    "https://media.giphy.com/media/3o7TKr3nzbh5WgCFxe/giphy.gif",       // Loser
    "https://media.giphy.com/media/3o6Zt6ML6BklcajjsA/giphy.gif",       // Out Of Order Cat
    "https://media.giphy.com/media/c2YyNySJ1CbFC/giphy.gif",            // 404 Not Found
    "https://media.giphy.com/media/d2lcHJTG5Tscg/giphy.gif",            // Sad Anthony Anderson
    "https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif",            // Simpsons – Scared Homer
    "https://media.giphy.com/media/zcCGBRQshGdt6/giphy.gif",            // Office Space Frust
    "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",        // To Do List Nothing
    "https://media.giphy.com/media/112o4nufJ2Nbtm/giphy.gif",           // Family Guy – Die
    "https://media.giphy.com/media/13w5HmyiuaZ224/giphy.gif",           // Family Guy – Pain
    "https://media.giphy.com/media/MJd3uGnPA0sh6VZMge/giphy.gif",       // Family Guy – Angry
    "https://media.giphy.com/media/2GjTdNHnmk2IM/giphy.gif",            // Family Guy – Help
    "https://media.giphy.com/media/10YNI9aU5LQR68/giphy.gif",           // Family Guy – What?
    "https://media.giphy.com/media/11gLPQrDVwLMHK/giphy.gif",           // Family Guy – Sad
    "https://media.giphy.com/media/D12CsrRNv7gL6/giphy.gif",            // Family Guy – Rocking
    "https://media.giphy.com/media/Fe5alnNHxFzWXtnMk3/giphy.gif",       // The Boys – Homelander
    "https://media.giphy.com/media/HxJpUTPYXUZ9jLw2LP/giphy.gif",       // The Boys – Sad Homelander
    "https://media.giphy.com/media/WlpLTCGng7YicxlwXe/giphy.gif",       // The Boys – Bored
    "https://media.giphy.com/media/Kzb1zdtLHcKti/giphy.gif",            // South Park – Sad Panda
    "https://media.giphy.com/media/RnXMhIFPrb4YM/giphy.gif",            // Simpsons – Homer Falls
    "https://media.giphy.com/media/8WdsK61D9YOOc/giphy.gif",            // Simpsons – Homer „D'oh!"
    // Neue Runde (Stand 2026)
    "https://media.giphy.com/media/4gMn34gHqIag8F4XXn/giphy.gif",       // Sassy Oh No
    "https://media.giphy.com/media/CslvoHDJ38mIS7w8b4/giphy.gif",       // Regular Season Wtf
    "https://media.giphy.com/media/3oKIPoKCsFsujMJBvO/giphy.gif",       // Sad Oh No
    "https://media.giphy.com/media/5bo7UYW69cYQZA4tOF/giphy.gif",       // Sad Over It
    "https://media.giphy.com/media/1n8fVIBLjArR2hL7Kk/giphy.gif",       // Duck Disappointment
    "https://media.giphy.com/media/5YGicYIAI2PN52GzcT/giphy.gif",       // Disappointed Oh No
    "https://media.giphy.com/media/69rOKW0lSeWSxYiS2O/giphy.gif",       // Wtf Is Going On
    "https://media.giphy.com/media/FRRK3vMJ4no52/giphy.gif",            // What Wtf
    "https://media.giphy.com/media/3o72EWnnDx16JluD6M/giphy.gif",       // The Struggle No
    "https://media.giphy.com/media/14aUO0Mf7dWDXW/giphy.gif",           // Oh No Reaction
    "https://media.giphy.com/media/4cuyucPeVWbNS/giphy.gif",            // The Office – That Sucks
    "https://media.giphy.com/media/3Z1p1NR2jW8CVNngkt/giphy.gif",       // Schitt's Creek – No
    "https://media.giphy.com/media/1ykhXVZskuM6cpBMlG/giphy.gif",       // Schitt's Creek – Ew
    "https://media.giphy.com/media/1T96TRBBGYThC/giphy.gif",            // The Office – No
    "https://media.giphy.com/media/LF8plQNlgYwnK/giphy.gif",            // Friends – Chandler What
    "https://media.giphy.com/media/11PMIEfajGXhGE/giphy.gif",           // The Office – Kill Me Now (Steve Carell)
    "https://media.giphy.com/media/6rAb8qljsWvANx6ij2/giphy.gif"        // Parks And Rec – Angry Donna
  ]
};
