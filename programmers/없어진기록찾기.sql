-- 코드를 입력하세요
SELECT a.ANIMAL_ID, a.NAME
FROM ANIMAL_OUTS as a
LEFT JOIN ANIMAL_INS as b
ON a.ANIMAL_ID = b.ANIMAL_ID
WHERE b.ANIMAL_ID is NULL
