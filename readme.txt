TWS Semestrální projekt

Dostupné na:
* http://stuwrk.nti.tul.cz/~radek.mocek/sp/     (podporuje .htaccess, nepodporuje geolokaci)
* https://radekmocek.github.io/TWS-Semestral/   (nepodporuje .htaccess, podporuje geolokaci)

Rozšiřující úkoly:

1. HTML5 média:

* HTML Audio je použito na podstránce "Příchutě"
* HTML Video je použito na podstránce "Osobnosti"
* Figure obaluje všechny audio a picture elementy, ke kterým je přidáno figcaption

3. Alternativní barevné schéma a rozložení CSS:

* V navbaru úplně vpravo je přepínač mezi světlým a sépiovým pozadím; nastavení přežije refresh

4. Pokročilé funkce CSS:

* Stránka je optimalizovaná pro tiskový výstup; viz. CSS úplně dole (@media print)

5. Rozšířené vlastnosti z CSS3:

* Přepínač z bodu 3 využívá transformace

7. Využití vloženého SVG v HTML nebo CSS:

* Ikonka v navbaru je svg obrázek, nic extra :)

8. Konfigurace serveru pomocí .htaccess:

* "Zabezpečená" stránka na adrese http://stuwrk.nti.tul.cz/~radek.mocek/sp/private/private.html
  * username: TWS
  * heslo: passwd

* Přesměrování překlepů
  * iondex.html -> index.html
  * pepole.html -> people.html
  * sunfenres.html -> subgenres.htm
  * contant.html -> contact.html

* Chybové stránky 401, 403, 404
  * Např. http://stuwrk.nti.tul.cz/~radek.mocek/sp/error/ hodí 403, jelikož není povoleno čtení obsahu složek
  * Problém nastane, pokud je některá z chybových stránek vyhozena z jiné hloubky, než je jedna podsložka:
    Chybové stránky se totiž nachází v podsložce ./error/ a na styly apod. odkazují jako "../style.css",
    tedy např. http://stuwrk.nti.tul.cz/~radek.mocek/sp/jaj.html správně hodí 404, ale stránka není nastylovaná,
    protože apač hledá styl o složku výše, než se skutečně nachází (??)

9. Klientský JavaScript:

* Přepínání CSS (bod 3), uložení zvoleného téma do localStorage – ./theme.js

* Využití geolokace na podstránce "Kontakt" – ./geo.js (na stuwrku nejde)
  * Firefox a Chrome dávají stejnou vzdálenost, Edge má potřebu vynikat a liší se zhruba o 5 km

* Na podstránce "Kontakt" je políčko pro vyplnění e-mailu validováno během psaní:
  Vedle políčka je křížek/fajfka a tlačítko Odeslat je disabled dokud není e-mail v pořádku – ./form.js

* Obrázek uvnitř formuláře se mění podle zvolené spokojenosti na slideru – ./form.js
