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
    ('blanc', 20, 1, 11),
    ('rouge', 20, 2, 11),
    ('vert', 10, 5, 11),
    ('bleu', 5, 10, 11),
    ('noir', 2, 20, 11),

    ('blanc', 15, 1, 12),
    ('rouge', 15, 2, 12),
    ('vert', 10, 5, 12),
    ('bleu', 5, 10, 12),
    ('noir', 2, 20, 12),

    ('blanc', 10, 1, 13),
    ('rouge', 10, 2, 13),
    ('vert', 10, 5, 13),
    ('bleu', 5, 10, 13),
    ('noir', 2, 20, 13),

    ('blanc', 10, 1, 14),
    ('rouge', 10, 2, 14),
    ('vert', 10, 5, 14),
    ('bleu', 5, 10, 14),
    ('noir', 2, 20, 14),

    ('blanc', 10, 1, 15),
    ('rouge', 10, 2, 15),
    ('vert', 10, 5, 15),
    ('bleu', 5, 10, 15),
    ('noir', 2, 20, 15),

    ('blanc', 10, 1, 16),
    ('rouge', 10, 2, 16),
    ('vert', 10, 5, 16),
    ('bleu', 5, 10, 16),
    ('noir', 2, 20, 16),

    ('blanc', 10, 1, 17),
    ('rouge', 10, 2, 17),
    ('vert', 10, 5, 17),
    ('bleu', 5, 10, 17),
    ('noir', 2, 20, 17),

    ('blanc', 10, 1, 18),
    ('rouge', 10, 2, 18),
    ('vert', 10, 5, 18),
    ('bleu', 5, 10, 18),
    ('noir', 2, 20, 18),

    ('blanc', 10, 1, 19),
    ('rouge', 10, 2, 19),
    ('vert', 10, 5, 19),
    ('bleu', 5, 10, 19),
    ('noir', 2, 20, 19),

    ('blanc', 10, 1, 20),
    ('rouge', 10, 2, 20),
    ('vert', 10, 5, 20),
    ('bleu', 5, 10, 20),
    ('noir', 2, 20, 20)
;