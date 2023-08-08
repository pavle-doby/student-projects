insert into sgc.folder values
(0,'folder1','Opis 1','','1','tag','rus','',0);
insert into sgc.folder values
(0,'folder2','Opis 2','','2','tag','rus','',0);
insert into sgc.folder values
(0,'folder3','Opis 3','','3','tag','rus','',0);
insert into sgc.folder values
(0,'folder4','Opis 4','','4','tag','rus','',0);
insert into sgc.folder values
(0,'folder5','Opis 5','','5','tag','rus','',0);





insert into sgc.kartica values
('def1','pojam1','','1',0,0,0,'1','');
insert into sgc.kartica values
('def2','pojam2','','2',0,0,0,'1','');
insert into sgc.kartica values
('def3','pojam3','','3',0,0,0,'1','');
insert into sgc.kartica values
('def4','pojam4','','4',0,0,0,'1','');
insert into sgc.kartica values
('def5','pojam5','','5',0,0,0,'1','');




insert into sgc.korisnik values
('','rus',0,'pavle','marinkovic','student','','nesto@gmail','');

insert into sgc.korisnik values
('','mavina',0,'marko','nikolic','it','','nesto@gmail','');

insert into sgc.korisnik values
('','idiot',0,'andrija','antanaskovic','it','','nesto@gmail','');

insert into sgc.korisnik values
('','cvetko',0,'cvetko','cvetkovic','nije skoluvao','','nesto@gmail','');

insert into sgc.poseduje values
('1','rus');
insert into sgc.poseduje values
('2','rus');
insert into sgc.poseduje values
('3','rus');
insert into sgc.poseduje values
('4','rus');
insert into sgc.poseduje values
('5','rus');


UPDATE sgc.folder
SET id_korisnik = 'rus', id_igra6 = ''
WHERE tag = 'tag'
and not id_folder = '';