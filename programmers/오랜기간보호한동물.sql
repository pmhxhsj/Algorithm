SELECT a.NAME, a.DATETiME
FROM ANIMAL_INS as a
LEFT JOIN ANIMAL_OUTS as b 
ON a.ANIMAL_ID = b.ANIMAL_ID
WHERE b.ANIMAL_ID IS NULL
ORDER BY a.DATETIME
LIMIT 3