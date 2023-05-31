/*
    vider les tables
*/
DELETE FROM Jetons;
delete from Compositions;

INSERT INTO Compositions (title, gameType, playerCount, gameLength)
VALUES
    ('le 1ere', 'holdEm', 3, 'longue'),
    ('Composition 2', 'holdEm', 4, 'longue'),
    ('Composition 3', 'fermé', 5, 'courte'),
    ('Composition 4', 'holdEm', 6, 'courte'),
    ('Composition 5', 'fermé', 3, 'longue'),
    ('Composition 6', 'holdEm', 7, 'courte'),
    ('Composition 7', 'fermé', 4, 'longue'),
    ('Composition 8', 'holdEm', 5, 'courte'),
    ('Composition 9', 'fermé', 6, 'longue'),
    ('Composition 10', 'holdEm', 7, 'courte');

INSERT INTO Jetons (color, count, value, compositionId)
VALUES
    ('blanc', 20, 1, 1),
    ('rouge', 20, 2, 1),
    ('vert', 10, 5, 1),
    ('bleu', 5, 10, 1),
    ('noir', 2, 20, 1),

    ('blanc', 15, 1, 2),
    ('rouge', 15, 2, 2),
    ('vert', 10, 5, 2),
    ('bleu', 5, 10, 2),
    ('noir', 2, 20, 2),

    ('blanc', 10, 1, 3),
    ('rouge', 10, 2, 3),
    ('vert', 10, 5, 3),
    ('bleu', 5, 10, 3),
    ('noir', 2, 20, 3),

    ('blanc', 10, 1, 4),
    ('rouge', 10, 2, 4),
    ('vert', 10, 5, 4),
    ('bleu', 5, 10, 4),
    ('noir', 2, 20, 4),

    ('blanc', 10, 1, 5),
    ('rouge', 10, 2, 5),
    ('vert', 10, 5, 5),
    ('bleu', 5, 10, 5),
    ('noir', 2, 20, 5),

    ('blanc', 10, 1, 6),
    ('rouge', 10, 2, 6),
    ('vert', 10, 5, 6),
    ('bleu', 5, 10, 6),
    ('noir', 2, 20, 6),

    ('blanc', 10, 1, 7),
    ('rouge', 10, 2, 7),
    ('vert', 10, 5, 7),
    ('bleu', 5, 10, 7),
    ('noir', 2, 20, 7),

    ('blanc', 10, 1, 8),
    ('rouge', 10, 2, 8),
    ('vert', 10, 5, 8),
    ('bleu', 5, 10, 8),
    ('noir', 2, 20, 8),

    ('blanc', 10, 1, 9),
    ('rouge', 10, 2, 9),
    ('vert', 10, 5, 9),
    ('bleu', 5, 10, 9),
    ('noir', 2, 20, 9),

    ('blanc', 10, 1, 10),
    ('rouge', 10, 2, 10),
    ('vert', 10, 5, 10),
    ('bleu', 5, 10, 10),
    ('noir', 2, 20, 10)
;