CREATE TABLE `sgc`.`FOLDER`(
ocena         integer,
ime         varchar(100),
opis         varchar(100),
slika         varchar(100),
id_folder         varchar(100),
tag         varchar(100),
id_igra6         varchar(100),
id_korisnik varchar(100),
ukupan_br_poena         integer
);

ALTER TABLE `sgc`.`FOLDER` ADD PRIMARY KEY(id_folder);


CREATE TABLE `sgc`.`KORISNIK`(
slika         varchar(100),
id_korisnik         varchar(100),
ocena         integer,
ime         varchar(100),
prezime         varchar(100),
zanimanje         varchar(100),
id_planer6         varchar(100),
email7         varchar(100),
id_igra8         varchar(100)
);

ALTER TABLE sgc.KORISNIK ADD PRIMARY KEY(id_korisnik);

CREATE TABLE `sgc`.`TEST`(
datum         date,
odrađenost         integer,
id_test         varchar(100),
id_korisnik3         varchar(100),
id_igra4         varchar(100),
osvojen_br_poena         integer
);

ALTER TABLE sgc.TEST ADD PRIMARY KEY(id_test);

ALTER TABLE sgc.TEST ADD CONSTRAINT id_korisnik3_FK FOREIGN KEY(id_korisnik3) REFERENCES sgc.KORISNIK(id_korisnik);

CREATE TABLE `sgc`.`VERIFIKACIJA`(
username         varchar(100),
password         varchar(100),
email         varchar(100)
);

ALTER TABLE sgc.VERIFIKACIJA ADD PRIMARY KEY(email);

CREATE TABLE `sgc`.`IGRA`(
id_igra         varchar(100),
datum         date
);

ALTER TABLE sgc.IGRA ADD PRIMARY KEY(id_igra);

CREATE TABLE `sgc`.`KARTICA`(
definicija         varchar(100),
pojam         varchar(100),
slika         varchar(100),
id_kartica         varchar(100),
naučena         integer,
težina         int,
posećenost         int,
id_folder7         varchar(100),
id_test8         varchar(100)
);

ALTER TABLE sgc.KARTICA ADD PRIMARY KEY(id_kartica);

ALTER TABLE sgc.KARTICA ADD CONSTRAINT id_folder7_FK FOREIGN KEY(id_folder7) REFERENCES sgc.FOLDER(id_folder);

CREATE TABLE `sgc`.`PLANER`(
id_planer         varchar(100)
);

ALTER TABLE sgc.PLANER ADD PRIMARY KEY(id_planer);

CREATE TABLE `sgc`.`DAN`(
datum         date,
id_dan         varchar(100),
opis         varchar(100),
vreme         varchar(100),
id_planer4         varchar(100)
);

ALTER TABLE sgc.DAN ADD PRIMARY KEY(id_dan);

ALTER TABLE sgc.DAN ADD CONSTRAINT id_planer4_FK FOREIGN KEY(id_planer4) REFERENCES sgc.PLANER(id_planer);

CREATE TABLE `sgc`.`POSEDUJE`(
id_folder0         varchar(100),
id_korisnik1         varchar(100)
);

ALTER TABLE sgc.POSEDUJE ADD PRIMARY KEY(id_folder0 , id_korisnik1);

ALTER TABLE sgc.POSEDUJE ADD CONSTRAINT id_folder0_FK FOREIGN KEY(id_folder0) REFERENCES sgc.FOLDER(id_folder);

ALTER TABLE sgc.POSEDUJE ADD CONSTRAINT id_korisnik1_FK FOREIGN KEY(id_korisnik1) REFERENCES sgc.KORISNIK(id_korisnik);

CREATE TABLE `sgc`.`tagovi`(
tagovi         varchar(100),
id_kartica         varchar(100)
);

ALTER TABLE sgc.tagovi ADD PRIMARY KEY(tagovi , id_kartica);



