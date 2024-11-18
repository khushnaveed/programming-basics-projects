# Ternärer Operator

## Aufgabe 1

Erstelle eine Variable `isMarried` und weise ihr einen `boolean` Wert zu

Erstelle eine weitere Variable `message`, die einen der folgenden Strings enthalten sollte, abhängig vom Wert des Booleans:

- wenn `isMarried` `true` ist, sollte `message` gleich sein mit: John ist glücklich verheiratet
- wenn `isMarried` `false` ist, sollte `message` gleich sein mit: John ist nicht verheiratet

Verwende den ternären Operator, um den korrekten String dynamisch zuzuweisen

## Aufgabe 2
 
Du verwaltest einen E-Commerce und hast gerade ein neues Rabattsystem eingeführt.

Du möchtest nun eine Nachricht anzeigen, die den Kunden den genutzten Rabatt und den Betrag, den sie nach Nutzung des Rabatts zahlen müssen, mitteilt.

Falls der Rabatt größer ist als der zu zahlende Preis, sollte die Nachricht 0€ zu zahlen anzeigen.

```plaintext
Zum Beispiel:

Mit einem zu zahlenden Betrag von 100€ und einem Rabatt von 30€, wäre die Ausgabemeldung:

Mit einem Rabatt von 30€ musst du 70€ zahlen. 

---

Mit einem zu zahlenden Betrag von 20€ und einem Rabatt von 30€, wäre die Ausgabemeldung:

Mit einem Rabatt von 30€ musst du 0€ zahlen. 
```

Erstelle 2 Variablen, `discount` und `cartTotal`, und weise ihnen 2 numerische Werte deiner Wahl zu

Erstelle eine weitere Variable `amountToPay`.

- diese Variable sollte gleich 0 sein, wenn `discount` größer ist als `cartTotal`
- ansonsten sollte sie gleich der Differenz zwischen `cartTotal` und `discount` sein

## Aufgabe 3

Du möchtest eine unterschiedliche Begrüßungsnachricht für Benutzer anzeigen, die einen Benutzernamen haben und für Benutzer, die keinen haben.

- Wenn der Benutzername leer ist, gib "Hallo, lieber Gast!" in die Konsole aus
- ansonsten, angenommen mit einem Benutzernamen gleich "Unicorn123", gib aus 
 "Willkommen zurück, Unicorn123!"

Erstelle eine Variable für den Benutzernamen und eine für die Willkommensnachricht.

Verwende den ternären Operator, um die richtige Nachricht zuzuweisen

## Aufgabe 4

Je nach Wettervorhersage möchtest du einen Vorschlag für eine Aktivität anzeigen.

- wenn es regnet, zeige die Nachricht "Bleib zu Hause."
- wenn es nicht regnet, zeige die Nachricht "Geh raus!"

Erstelle einen Boolean, um zu überprüfen, ob es regnet oder nicht.

Erstelle eine weitere Variable für den Vorschlag und weise ihr den richtigen String zu
abhängig vom Wert des Booleans, den du gerade erstellt hast

Verwende den ternären Operator und gib die Nachricht in die Konsole aus
