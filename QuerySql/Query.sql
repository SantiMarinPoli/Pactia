CREATE TABLE People(
	guiid varchar(50) Primary Key,
	dni varchar(10) not null UNIQUE,
	name varchar(100) not null,
	lastname varchar (200) not null,
)

DECLARE @myid uniqueidentifier = NEWID();  
--SELECT CONVERT(CHAR(255), @myid) AS 'char'; 

INSERT INTO People Values(@myid, '1017258736','Santiago','Cortes Marin')

SELECT * FROM People