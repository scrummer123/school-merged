-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Gegenereerd op: 08 jun 2019 om 13:42
-- Serverversie: 10.1.38-MariaDB
-- PHP-versie: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `personeelsdag`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `personeel`
--

CREATE TABLE `personeel` (
  `Personeelsnummer` int(11) DEFAULT NULL,
  `Voorletters` varchar(8) CHARACTER SET utf8 DEFAULT NULL,
  `Tussenvoegsel` varchar(7) CHARACTER SET utf8 DEFAULT NULL,
  `Achternaam` varchar(11) CHARACTER SET utf8 DEFAULT NULL,
  `Email` varchar(26) CHARACTER SET utf8 DEFAULT NULL,
  `Voucher` varchar(4) CHARACTER SET utf8 DEFAULT NULL,
  `AUTOID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Gegevens worden geëxporteerd voor tabel `personeel`
--

INSERT INTO `personeel` (`Personeelsnummer`, `Voorletters`, `Tussenvoegsel`, `Achternaam`, `Email`, `Voucher`, `AUTOID`) VALUES
(2413, 'S.', NULL, 'Snijders', 's.snijders@hetanker.nl', 'V981', 1),
(1547, 'M.', NULL, 'Snijders', 'pluspunt2@hetanker.nl', 'V311', 2),
(2129, 'A.', NULL, 'Snippe', 'a.snippe@hetanker.nl', 'V342', 3),
(2742, 'G.H.J.', NULL, 'Snippe', 'i.snippe@hetanker.nl', 'V535', 4),
(2011, 'M.', 'van \'t', 'Spijker', 'm.vantspijker@hetanker.nl', 'V112', 5),
(1612, 'R.', NULL, 'Spin', 'r.spin@hetanker.nl', 'V378', 6),
(1075, 'H.', NULL, 'Sportel', 'h.sportel@hetanker.nl', 'V899', 7),
(1650, 'G.K.', NULL, 'Staarman', 'n.staarman@hetanker.nl', 'V532', 8),
(1403, 'R.G.W.', NULL, 'Steenwelle', 'r.steenwelle@hetanker.nl', 'V674', 9),
(1264, 'M.J.M.A.', NULL, 'Steffens', 'm.steffens@hetanker.nl', 'V993', 10),
(1964, 'B.', NULL, 'Sterk', 'foto@hetanker.nl', 'V154', 11),
(2092, 'M.', NULL, 'Stijntjes', 'm.stijntjes@hetanker.nl', 'V572', 12),
(2443, 'M.', NULL, 'Swart', 'm.swart@hetanker.nl', 'V671', 13),
(2261, 'H.M.', NULL, 'Tage', 'm.tage@hetanker.nl', 'V704', 14),
(2196, 'P.', NULL, 'Talen', 'p.talen@hetanker.nl', 'V622', 15),
(2772, 'M.', NULL, 'Tanate', 'm.tanate@hetanker.nl', 'V482', 16),
(2466, 'A.', NULL, 'Telman', 'a.telman@hetanker.nl', 'V276', 17),
(1197, 'L.T.M.', NULL, 'Telman', 'l.telman@hetanker.nl', 'V225', 18),
(1171, 'M.J.', NULL, 'Ter Meer', 'j.termeer@hetanker.nl', 'V393', 19),
(1752, 'E.', NULL, 'Vaartjes', 'e.vaartjes@hetanker.nl', 'V226', 20),
(2292, 'N.J.I.', 'van der', 'Valk', 'n.vandervalk@hetanker.nl', 'V605', 21),
(1066, 'R.', 'van der', 'Veen-Brons', 'r.vanderveen@hetanker.nl', 'V157', 22),
(1850, 'N.', NULL, 'Velthuis', 'n.velthuis@hetanker.nl', 'V259', 23),
(2782, 'E.', NULL, 'Veltman', 'e.veltman@hetanker.nl', 'V389', 24),
(1583, 'E.H.', NULL, 'Verhagen', 'e.verhagen@hetanker.nl', 'V660', 25),
(1137, 'E.', NULL, 'Vink', 'e.vink@hetanker.nl', 'V188', 26),
(2412, 'R.', NULL, 'Vinke', 'r.vinke@hetanker.nl', 'V173', 27),
(2752, 'T.C.', NULL, 'Visser', 'ta.visser@hetanker.nl', 'V631', 28),
(2306, 'B.', NULL, 'Vonkeman', 'b.vonkeman@hetanker.nl', 'V266', 29),
(2833, 'C.', NULL, 'Voort', 'c.voort@hetanker.nl', 'V998', 30),
(2602, 'W.', NULL, 'Voortman', 'a.voortman@hetanker.nl', 'V869', 31),
(1484, 'J.D.', NULL, 'Voortman', 'j.voortman@hetanker.nl', 'V915', 32),
(1829, 'J.', NULL, 'Voorveld', 'j.voorveld@hetanker.nl', 'V514', 33),
(1278, 'M.', NULL, 'Vos', 'm.vos@hetanker.nl', 'V170', 34),
(2736, 'M.A.', NULL, 'Vos', 'ma.vos@hetanker.nl', 'V407', 35),
(2695, 'W.', NULL, 'Vos', 'w.vos@hetanker.nl', 'V800', 36),
(1785, 'E.', 'de', 'Vries', 'e.devries@hetanker.nl', 'V253', 37),
(1483, 'J.D.', NULL, 'Salakory', 'j.salakory@hetanker.nl', 'V903', 38),
(2235, 'H.', NULL, 'Schonewille', 'h.schonewille@hetanker.nl', 'V612', 39),
(1767, 'O.', NULL, 'Sick', 'o.sick@hetanker.nl', 'V771', 40),
(2541, 'L.', NULL, 'Sierink', 'b.sierink@hetanker.nl', 'V542', 41),
(1989, 'G.', 'van der', 'Sleen', 'g.vandersleen@hetanker.nl', 'V989', 42),
(2680, 'G.', NULL, 'Snaak', 'g.snaak@hetanker.nl', 'V704', 43),
(1281, 'A.', NULL, 'Snellink', 'a.snellink@hetanker.nl', 'V286', 44),
(1847, 'G.', NULL, 'Otten', 'w.otten@hetanker.nl', 'V945', 45),
(2816, 'I.', NULL, 'Éz', 'i.oz@hetanker.nl', 'V616', 46),
(2666, 'H.', NULL, 'Pluimers', 'h.pluimers@hetanker.nl', 'V506', 47),
(1896, 'B.', NULL, 'Pluimers', 'b.pluimers@hetanker.nl', 'V588', 48),
(1187, 'J.', NULL, 'Podt', 'h.podt@hetanker.nl', 'V691', 49),
(1469, 'S.', NULL, 'Pol', 's.pol@hetanker.nl', 'V524', 50),
(2136, 'H.J.', NULL, 'Polman', 'h.polman@hetanker.nl', 'V637', 51),
(2353, 'N.', NULL, 'Poort', 'n.poort@hetanker.nl', 'V678', 52),
(2463, 'M.', NULL, 'Post', 'm.post@hetanker.nl', 'V285', 53),
(1815, 'H.H.M.', NULL, 'Post', 'ma.post@hetanker.nl', 'V245', 54),
(2794, 'O.H.P.', NULL, 'Postmus', 'o.postmus@hetanker.nl', 'V523', 55),
(2297, 'A.', NULL, 'Prins', 'a.prins@hetanker.nl', 'V433', 56),
(1868, 'S.A.', NULL, 'Prinsen', 's.prinsen@hetanker.nl', 'V683', 57),
(2939, 'P.', NULL, 'Rikhof', 'p.rikhof@hetanker.nl', 'V431', 58),
(2856, 'B.', NULL, 'Rikkerink', 'b.rikkerink@hetanker.nl', 'V152', 59),
(2977, 'S.', NULL, 'R_del', 's.rodel@hetanker.nl', 'V459', 60),
(1946, 'L.J.H.G.', NULL, 'Rodenstein', 'l.rodenstein@hetanker.nl', 'V907', 61),
(2647, 'H.', NULL, 'Rodijk', 'h.rodijk@hetanker.nl', 'V654', 62),
(2519, 'M.J.', NULL, 'Rodrigues', 'm.rodrigues@hetanker.nl', 'V341', 63),
(1720, 'Y.', NULL, 'Roelofs', 'y.roelofs@hetanker.nl', 'V722', 64),
(1681, 'D.', NULL, 'Roelofs', 'd.roelofs@hetanker.nl', 'V529', 65),
(1929, 'M.', NULL, 'Rotteveel', 'm.rotteveel@hetanker.nl', 'V896', 66),
(1728, 'A.', 'van', 'Rozen', 'a.vanrozen@hetanker.nl', 'V790', 67),
(1995, 'S.', NULL, 'Ruinemans', 's.ruinemans@hetanker.nl', 'V777', 68),
(1814, 'P.', 'de', 'Ruiter', 'p.deruiter@hetanker.nl', 'V396', 69),
(1756, 'J.', NULL, 'Runhaar', 'j.runhaar@hetanker.nl', 'V707', 70),
(1330, 'J.T.', NULL, 'Mulder', 'j.mulder@hetanker.nl', 'V153', 71),
(2098, 'M.P.', NULL, 'Mulder', 'm.mulder@hetanker.nl', 'V933', 72),
(1574, 'K.', NULL, 'Muller', 'k.muller@hetanker.nl', 'V586', 73),
(2272, 'K.G.H.', NULL, 'Muller', 'ka.muller@hetanker.nl', 'V959', 74),
(2123, 'L.', NULL, 'Nawijn', 'l.nawijn@hetanker.nl', 'V465', 75),
(2606, 'A.', NULL, 'Nazarian', 'a.nazarian@hetanker.nl', 'V657', 76),
(1020, 'T.', 'van', 'Nederpelt', 't.vannederpelt@hetanker.nl', 'V568', 77),
(2727, 'M.M.E.', NULL, 'Nicolet', 'm.nicolet@hetanker.nl', 'V403', 78),
(1881, 'H.W.', NULL, 'Nieboer', 'h.nieboer@hetanker.nl', 'V388', 79),
(1695, 'R.', NULL, 'Nieuhoff', 'r.nieuhoff@hetanker.nl', 'V118', 80),
(2345, 'J.', NULL, 'Nieuwerth', 'j.nieuwerth@hetanker.nl', 'V641', 81),
(1165, 'J.', NULL, 'Nieuwhof', 'j.nieuwhof@hetanker.nl', 'V757', 82),
(2329, 'L.M.', NULL, 'Nijenhuis', 'l.nijenhuis@hetanker.nl', 'V703', 83),
(2418, 'G.J.S.', NULL, 'Nijhof', 's.nijhof@hetanker.nl', 'V968', 84),
(2668, 'M.J.', NULL, 'Nijhoff', 'm.nijhoff@hetanker.nl', 'V934', 85),
(1347, 'T.', NULL, 'Nijkamp', 't.nijkamp@hetanker.nl', 'V697', 86),
(2474, 'I.', NULL, 'Nutzel', 'i.nutzel@hetanker.nl', 'V578', 88),
(1042, 'D.', NULL, 'Ocent', 'd.ocent@hetanker.nl', 'V187', 89),
(2566, 'J.G.', 'van', 'Oers', 'j.vanoers@hetanker.nl', 'V945', 90),
(2176, 'P.', 'de', 'Olde', 'p.deolde@hetanker.nl', 'V995', 91),
(2603, 'M.', NULL, 'Olthof', 'm.olthof@hetanker.nl', 'V278', 92),
(2954, 'E.H.', 'van', 'Oosten', 'e.vanoosten@hetanker.nl', 'V796', 93),
(1930, 'L.G.', NULL, 'Oosterom', 'l.oosterom@hetanker.nl', 'V167', 94),
(1164, 'M.G.M.', NULL, 'De Weegh', 'm.deweegh@hetanker.nl', 'V871', 95),
(2131, 'G.', NULL, 'Ornee', 'g.ornee@hetanker.nl', 'V218', 96),
(2592, 'J.', NULL, 'Lambers', 'ja.lambers@hetanker.nl', 'V556', 97),
(2830, 'A.', NULL, 'Lamberts', 'a.lamberts@hetanker.nl', 'V895', 98),
(2395, 'H.', NULL, 'Lamers', 'h.lamers@hetanker.nl', 'V908', 99),
(2990, 'A.', NULL, 'Lammers', 'a.lammers@hetanker.nl', 'V517', 100),
(2217, 'H.', NULL, 'Lammers', 'h.lammers@hetanker.nl', 'V562', 101),
(1633, 'H.', NULL, 'Langkamp', 'h.langkamp@hetanker.nl', 'V737', 103),
(2364, 'J.M.M.', NULL, 'Lansink', 'j.lansink@hetanker.nl', 'V881', 104),
(2273, 'R.', NULL, 'Lantink', 'r.lantink@hetanker.nl', 'V688', 105),
(2295, 'S.', NULL, 'Leemhuis', 's.leemhuis@hetanker.nl', 'V310', 106),
(1004, 'J.A.L.', 'van der', 'Leest', 's.vanderleest@hetanker.nl', 'V306', 107),
(1948, 'B.', NULL, 'Leferink', 'b.leferink@hetanker.nl', 'V771', 108),
(1636, 'M.', NULL, 'Leijten', 'm.leijten@hetanker.nl', 'V577', 109),
(2708, 'G.', NULL, 'Lemans', 'g.lemans@hetanker.nl', 'V548', 110),
(2860, 'C.', NULL, 'Lennips', 'c.lennips@hetanker.nl', 'V664', 111),
(1134, 'R.', NULL, 'Leppink', 'r.leppink@hetanker.nl', 'V324', 112),
(2377, 'S.', NULL, 'Lesterhuis', 's.lesterhuis@hetanker.nl', 'V556', 113),
(1981, 'W.', NULL, 'Letteboer', 'w.letteboer@hetanker.nl', 'V199', 114),
(1870, 'H.', 'van der', 'Liet', 'h.vanderliet@hetanker.nl', 'V970', 115),
(1193, 'J.', NULL, 'Ligtenberg', 'j.ligtenberg@hetanker.nl', 'V677', 116),
(2797, 'J.', NULL, 'Ligteringen', 'j.ligteringen@hetanker.nl', 'V519', 117),
(1035, 'M.', NULL, 'Loeve', 'm.loeve@hetanker.nl', 'V146', 118),
(2333, 'S.D.G.', NULL, 'Lohuis', 's.lohuis@hetanker.nl', 'V906', 119),
(2528, 'C.', NULL, 'Lohuis-Mos', 'c.lohuis@hetanker.nl', 'V522', 120),
(2621, 'A.', NULL, 'Lok', 'an.lok@hetanker.nl', 'V285', 121),
(1475, 'A.', NULL, 'Lok-Bruins', 'a.lok@hetanker.nl', 'V350', 122),
(2596, 'M.A.M.', NULL, 'L_wik', 'm.lowik@hetanker.nl', 'V692', 123),
(2026, 'T.R.A.', NULL, 'L_wik', 't.lowik@hetanker.nl', 'V338', 124),
(2669, 'H.J.H.', NULL, 'Lubbers', 'h.lubbers@hetanker.nl', 'V177', 125),
(1582, 'R.', NULL, 'Lucassen', 'r.lucassen@hetanker.nl', 'V975', 126),
(1992, 'N.', 'van der', 'Luijt', 'n.vanderluijt@hetanker.nl', 'V425', 127),
(2090, 'J.H.B.', NULL, 'Luttenberg', 'r.luttenberg@hetanker.nl', 'V703', 128),
(2875, 'T.', NULL, 'Maaswinkel', 't.maaswinkel@hetanker.nl', 'V295', 129),
(1711, 'M.', NULL, 'Maaswinkel', 'm.maaswinkel@hetanker.nl', 'V222', 130),
(2821, 'M.', 'van de', 'Maat', 'm.vandemaat@hetanker.nl', 'V687', 131),
(1554, 'R.', NULL, 'Mak', 'r.mak@hetanker.nl', 'V658', 132),
(1587, 'M.', NULL, 'Maris', 'm.maris@hetanker.nl', 'V946', 133),
(2683, 'A.', NULL, 'Maris', 'a.maris@hetanker.nl', 'V303', 134),
(2520, 'D.', NULL, 'Markvoort', 'd.markvoort@hetanker.nl', 'V851', 135),
(2500, 'L.', NULL, 'Marsman', 'l.marsman@hetanker.nl', 'V293', 136),
(2330, 'J.H.', NULL, 'Marsman', 'm.marsman@hetanker.nl', 'V625', 137),
(2358, 'M.J.', NULL, 'Marsman', 'ma.marsman@hetanker.nl', 'V631', 138),
(1555, 'M.W.', NULL, 'Masselink', 'm.masselink@hetanker.nl', 'V439', 139),
(1530, 'M.P.M.', 'van der', 'Meer', 'm.vandermeer@hetanker.nl', 'V246', 141),
(1648, 'B.', 'van der', 'Meer', 'b.vandermeer@hetanker.nl', 'V221', 142),
(2374, 'H.', NULL, 'Meijer', 'h.meijer@hetanker.nl', 'V806', 143),
(1461, 'K.J.', NULL, 'Meijer', 'k.meijer@hetanker.nl', 'V331', 144),
(2428, 'A.', NULL, 'Meijer', 'a.meijer@hetanker.nl', 'V986', 145),
(2242, 'M.', NULL, 'Meijerink', 'm.meijerink@hetanker.nl', 'V890', 146),
(2438, 'G.J.', NULL, 'Meijerink', 'g.meyerink@hetanker.nl', 'V738', 147),
(2858, 'F.', NULL, 'Mennega', 'f.mennega@hetanker.nl', 'V107', 148),
(1999, 'F.', NULL, 'Mensink', 'f.mensink@hetanker.nl', 'V547', 149),
(2800, 'D.', NULL, 'Mensink', 'd.mensink@hetanker.nl', 'V623', 150);

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `personeel`
--
ALTER TABLE `personeel`
  ADD PRIMARY KEY (`AUTOID`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `personeel`
--
ALTER TABLE `personeel`
  MODIFY `AUTOID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
