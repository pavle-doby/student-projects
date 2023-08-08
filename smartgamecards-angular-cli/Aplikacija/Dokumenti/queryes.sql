select * from kartica where(id_folder7='1'); --vrati kartice na osnovu id foldera

select * from folder inner join poseduje on poseduje.id_folder0 = folder.id_folder where(poseduje.id_korisnik1 = '1'); -- vrati foldere na osnovu id korisnika

select * from folder where(tag = 'tag'); --vrati foldere na osnovu taga

update kartica
set pojam = 'xaxa', definicija = 'xaxa'   
where (kartica.id_kartica = '5');      --update kartice na osnovu id

update folder
set ime ='newName'
where (id_folder = '5');      --update foldera na osnovu id

update korisnik
set ime ='newName', prezime = 'nPRezime'
where (id_korisnik = '3');       --update korisnik na osnovu id

delete from kartica 
where (id_kartica = '3');  --brisanje kartice na osnovu id

delete from poseduje
where (poseduje.id_folder0 = '2');
delete from kartica
where (kartica.id_folder7 ='2');
delete from folder
where (id_folder = '2'); 
--brisanje foldera
--ove tri naredbe idu zajedno, da bi se izvrsilo brisanje foldera mora prvo da se obrisu veze sa korisnicima koji ih poseduju iz tabele POSEDUJE pa onda i sve kartice koje imaju taj id

delete from poseduje
where (poseduje.id_korisnik1 = '1');
delete from korisnik
where (id_korisnik = '1');
--brisanje korisnika
--ovde isto mora prvo da se obrisu veze u POSEDUJE sa folderima koje brisani korisnik poseduje, pa tek onda sam korisnik

--svuda su pod '' random brojevi to ce se vec definise u kodu
