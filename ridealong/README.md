Kratak opis:
Aplikacija podržava dva osnovna režima rada, QuickRide i Carpool.

U QuickRide režimu korisnik bira polaznu tačku i odredište za svoju QuickRide,
te se dve lokacije respektivno prikazuju na mapi. Klikom na dugme za kreiranje 
vožnje, ona se dodaje u Neo4j bazu,a i iz nje se povlače QuickRide vožnje koje 
su u blizini polazne tačke korisnika(na manje od 1km) i one se prikazuju na mapi.

Klikom na dugme Refresh vrši se osvežavanje prikaza mape i vožnji na njoj,ukoliko 
je od poslednje refresha bilo promena. Ukoliko se podaci nalaze u kešu za koji je 
korišćena Redis baza podataka oni se povlače odatle. Ako podataka nema u kešu,oni 
se povlače iz Neo4j baze i smeštaju se u Redis keš.

Klikom na dugme za brisanje vožnje,ona se briše iz baze i keša,i osvežava se prikaz mapa.
Svaki korisnik ima svoj chatbox, te klikom na marker korisnika na mapi možete ući u njegov
chatbox i razmenjivati poruke.

U gornjem desnom uglu prozora nalaze se trenutni aktivni chatbox-ovi sa poslednjim porukama
iz njih, i klikom se prelazi na odgovarajući chatbox,te se dogovore oko podele taksi prevoza.
Chatbox i slanje poruka realizovani su korišćenjem Socketa i Redisa za skladištenje poruka.

U Carpool režimu korisnik ima mogućnost da kreira medjugradsku vožnju sa odgovarajućim 
parametrima na koju se drugi korisnici mogu priključiti, slanjem zahteva odnosno notifikacije 
za priključivanje vožnji. Kada korisnik koji je kreirao vožnju primi notifikaciju za 
pridruživanje on može da izabere da li će je prihvatiti ili ne, i o tome obaveštava korisnika 
koji je zahtevao priključivanje.
Pretraga Carpool vožnji vraća vožnju sa zadatom početnom i odredišnom tačkom.

Pored ova dva režima aplikacija podržava i takozvani Social deo gde korisnik može prikazati 
listu svih korisnika sa kojima je delio vožnju te ih oceniti ili dodati za prijatelja.
Korisniku je takodje omogućeno da pretražuje zajedničke prijatelje sa svojim prijateljima.

Uz kod su priloženi i upiti za kreiranje tri korisnika u Neo4j bazi radi testiranja, i 
odgovarajući početni deo Redis baze, dok će se ostali delovi i podaci u bazama kreirati 
kako korisnik koristi aplikaciju.

Upiti su dati u fajlu Upiti.txt, ukoliko fajl dump.rdb nije ucitan ispravno potrebno je signup-ovati 
tri usera radi testiranja.  