INSERT INTO Compositions (title, gameType, playerCount, gameLength)
VALUES
    ('Composition 1', 'holdEm', 5, 'courte'),
    ('Composition 2', 'fermé', 7, 'longue'),
    ('Composition 3', 'holdEm', 6, 'courte'),
    ('Composition 4', 'fermé', 4, 'longue'),
    ('Composition 5', 'holdEm', 8, 'courte'),
    ('Composition 6', 'fermé', 3, 'longue'),
    ('Composition 7', 'holdEm', 5, 'courte'),
    ('Composition 8', 'fermé', 7, 'longue'),
    ('Composition 9', 'holdEm', 6, 'courte'),
    ('Composition 10', 'fermé', 4, 'longue');

INSERT INTO Jetons (color, count, value, compositionId)
VALUES
    ('noir', 10, 100, 1),
    ('bleu', 20, 50, 1),
    ('vert', 30, 20, 2),
    ('gris', 40, 10, 2),
    ('orange', 50, 5, 3),
    ('violet', 60, 2, 3),
    ('rouge', 70, 1, 4),
    ('jaune', 80, 0.5, 4),
    ('blanc', 90, 0.25, 5),
    ('noir', 100, 100, 5),
    ('bleu', 110, 50, 6),
    ('vert', 120, 20, 6),
    ('gris', 130, 10, 7),
    ('orange', 140, 5, 7),
    ('violet', 150, 2, 8),
    ('rouge', 160, 1, 8),
    ('jaune', 170, 0.5, 9),
    ('blanc', 180, 0.25, 9),
    ('noir', 190, 100, 10),
    ('bleu', 200, 50, 10);