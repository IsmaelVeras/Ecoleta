// importar a dependência do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o objeto que irá fazer operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

// utilizar  o objetvo de banco de dados, para nosas operações
// db.serialize( () => {
        
// // com comandos sql eu vou:

//     // 1 - criar uma tabela 
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     // 2 - inserir dados na tabela
//     const query = ` 
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     ` 
    
//     const values = [
//         "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAABtlBMVEX////m5uYBrlSZmZkCzm/vGjYAfMT9wA8MjU0CuFMOgUYArlUErFIzJQjp6ekDzFGoqKi5ubkArFfv6e0zHQAopmItHAAAs1YBsUkBsE+6ujHOST3yEjS7WT0AmI8Besfmvh0mYSsss2L5ADMBeMz9vAAAc8ExMTFERkUAyGIAqUUAaL1NTkzb5/LK4fD0+Ps6OzoDxmh/r9ooKCj0ipT71NfX19cAAAB6e3qPkJBnaGgDu1/Gx8VjntInVCTtACL+9uD90Wf9xigAmUbD5MztABX+57YUFBQAnkjc8uV1y5fr9/C24shBvHPtACb3tLiqyub9zFPsAAA9kMz/35yY1q/+++/+2ov+89n91HPxT2FFqGxzoISQmpRbW1skHiJet4N4wJeZzq0pNw4oPBI1DgAwLA0haTM0FwArSx5fw4mt6b8AyDod0F7E788AsT2y1cA0mmIAhDVhrIJ3tpXvM0bwcXuMud37ykD1naH85Kz6293yXmv83ZPwfYb97MKw0OWDqZH4r7VPmmwhZD4oFCIjVTk5WEU8ak9kj3ZPRU16in+my7MAFwgdABQaOycAPRoAJRB+p+exAAAQ1ElEQVR4nO2ciVcbxx3HB6kGm1WIjUyWTWgV065QZUDmMocCEhKXjLksIXHYgHEcxyRtHRMQlyxikrRN3DT5jzujlbQzuzOzsyu/vr7X+WKMgOE3Pz77O2ZmJQCQkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpL6X9XMXgdNTxe9Gtyn2tt76NVe5n07aPd4ofXZ7Y+s+mAqnfY4R0f6zhc2ex89a00/9WbvVfr15x/ZPXzp2UGbMgutzz+g6PazhT1PBvcWPv+SZvB5azrjxd5i+jrdwS/S254ctKsjTZsA6ssXC6882JtJv6AigE6n014c3E5/wbA3tbDvxaBNTxembrMgXF9wH2yx9HWWvdsvFzxkw/7CHaaDHiPLoky69fltlrwE2176GdPe8xfpGbf2UCYwDX6Q7nDtoKmZqjrSU1B3aJqaetm6sF4d58Q7Ux0HC+xLhj1ocCrdUZtY0MFMx8IdtoNTrQtPBR20e6zc+LOh31E1UFU8fqNT07Qo1AOuwfWokME4NKgZBn1cpxe7Na4906BatRc9cIdgMTBAmIOuqarq8ymKzxcIwPfKP/g5/Ar6GlJ0nYegk/AvXjFo/FzAkGmw8gF+PcqrNe0DVoNVB5WawYCvroqHisNVsurgBmbfZ5irO1czjD2ufCfKvnCLUczhuPHr+iz2rAZ9gSW2gw/sDirmr0uXEnVTax5iVy0eYFu1TsI02I1dNWFznMia8eZgQLyL4VdtwAUCjZVxT7GrpoozYEbWog93kHPpLdI4kWVRN1ZnXHgMg42+4J+54YkpVDfdwQMsrFRxBA41C2MM1jXVlBuPYbBlgDXcFuFV82wPljFb+EIHo94N2h2066uvv/6wAcGfthj8S2MGP/z6K9LeXxszBw06MnjYeaNBWQzGGzTXacmvmUYd/Jszg6i74LKp3WKwu0F71hoz06iDUUcGr643KovBbxq1Z9mazrxu0N5rZwaNTvG+Gbx+919nMHP4TWsjOvzWYvDbw4bsfXNoiYPM4VVjDh46MkC7G2y9HXApWrJFA+01g4ri1iDlPOFhtL7BcG+PuwnBpojja3vFjaiLmu4AtlkIuLKn0BY1M4SD7uz5NBEEIEMycCXqNucA34S6WibCIk7Z5ixGVc8Oslae3ClcrMahNNr2dD3qacdUETV0NXy74M5eQPAQIYAxcLe8p6/HieRy5zI9dLt9nh2kXiSKlgLWKRT2tpzcslB36ERy1cZzUhYXNXQbSC7Gro4/RdXjdqZIBrTNLjV/VZZu4Lsg+m6cSK4ag06mNNOe8DEKZQrl0xaWPm7HGVANBnw2BuonXdfo6vo9BkGjHrXTkquzmaXQH0wIilhrpE7RLsYgQK+63bbkEmVA3+/PeGbg84khgPmLxa5RCUQZ0KsunlwuGVBDdzGKBZbqioFYa7Tkr2qPA53JgFF18eRyxYAVuj57cokxEG2NZP+N2xjohbkzBoMo/e4ekVyu4oCxqsOTyxUDTewsDZDN0Ti1JRhsAJBiMKBX3YxnBqzzRCy5XDEQbY0APLBNQTAogw0WA/o5MJG/CpPBkY0B66CaSC6cQWhyEGkyHGIwEL7DYM9fUQYMg4qthmEMupYTCfjJ7MpIwsaAEbp4clULjMEg3GcM6MsyGAjfYLBPYcmF8jSdAavqLtny12SwvLUyMnI8u3wM7LnACl1KctUY9IeQmH1BFAHZHG0MUgCclXUaA2bVtSdXncHyGwCCAKzMguNlOwNG6BKdy0cyCK9CFZubs2EKA/F7LET+WhnoZwCUyykqA9aGBE8ukkHXETg/mk2sgOEqApIBK3Tx5mhhcDeGBsTCl8WwjQHzRhhtCsUyBWSgn6wh6Sk0YLqso/awoRMMGK2Rllw1BvC3P4KPHp2DBKUvMA888OSiMgDZSXAZtjEQbo3kFJWNHooD41snJfR/Ia/rSQCSFgasqpthMpg9P380Ozv76LSCwsqAGbr25mhlMJjtv1wNWRiIt0Yyf9VqHKQqYbB2kkMDcpDBdKEwbWHACl08uSxxUB9DyQX2qs6eXFYGk3fDd21xwHl2gPMU7Z/qm8a3zioMzow4yJP1gH33QrEWmCqDRNAcs9VlY8AMXTy56Az64IfVsJWBi2eQ4RuzykIRMpjGGczl9dwGLAk5ggF7Q4Inl4Ix6Bqu6/TIxoAduvbksjKoKGthwH6CBG0KlZzCZDBXY1BZLwPdZMB++gEluWq5sHw+YujcngsKO3TtyUVlMBkiGYi3RsoUNgbJVLIllWrJp3QzDjhVF08ugsFsfciFvSZyQteHBZYwA9HDREPtlvylMDA+xRlwqu6MNX/NvlAbQtkzce4F2JqjEAMXrZGcgsbgjMqAvSHJsBjA9YGhIGV9wHtOFpZcwgzctEb7FDYGeRoDTtW1Jle9HgxXB4zYGfBWdXhyVY66hBi4eprmPnbdVAqDHI0B7zYWdupBMOi6qA5YWbYz4IQu3hxVYQZuEBD5W2eQRzJ6YymfyhegiJrIO6tbYjC4dq06YNjOgBe6RHKZDJpDzWFslLUvuGKAb8ziPmOtXELKrZ3hDPA44J7VPdDI5KozqDWGWlvAGfBCF0uuuFkP0K88aIpcH/Ce80mT5rMy0OeSSC2byY2NjbkNvYw+K2NrJG7VJfIXZ5AYMQbU2gLOgLeqUywFxjxLC5ki18ruWqMtfyt7Zx2J/IDvF7hVF08ugsHy2yDSecLOgHub3JpcAueJgk9OrOuAwoAukwEvdPGVp0rUg+VZpIQ9Dvihi3UuYQYuXxqxTk5hMICXHQUAetONTwkG3A2JJX8FzpX5obuPJZcoA5evYMB7T43B9MaZXijp5ZazE3SQlCqXyHMkrkEsuUQZcEPXmlwiDNwhsE6BGOhgei6Vh5ulcj6Xz53oa0l0hGIy4FddPLmEGLCe/FxVxj0DN7tGJLw5Vhm0gFRhM5/cBGUwDSHoZcgCq4nMw0RDlvw1GKAz9S74XyIBHyYSiWU8DhxC11JgIINQOByGyyS4REAP4Dv6QqjOwG1rhM2RmAL1Rr2QLxdypVy5ZQOGwJpeSpZLGAOHqoslV41B19H5RVfXxfnx7MjK7PnFyPn5m2WcAf/AQyELTGdzaDIW68tmY8XwZSy2mo3FYvALsWKoxsBtayR6D1yHoXVirqBPn51slkqFUm56U18rlVKls5TJgF91LbFrMIArI7hpGnkUBFvgDRipnK/WGTiE7kHAxgBM9vUXQexuX98kKILiYDMoroJwjQErt24ytY1NEUAMynP5TQDfYDDkN3J5PZefK4Cztfo6UXvCNgb1RFNpDBIJMAyWg+fn4BicdoFjjEEH197NPXPlOVBjEAPFWBFk++GDQRCL3YUfL+sMtO+odoCfqasAPgVkMFdO5pI6aElu6uXSZlLPJXMtZ/lSnYH6hG0Micpg5XQYBMGb4CliAOMArwfbfHuHGlFgKgwGs1n4a6/29002w0gYzIJBLA40uoMcBo+1OMngLJlf28iX9fKmPleYzsPtc3Izn9+sM2jnu+zHjmXUGoORkZG3b5dP3668gaUB3XLD6oF6yLf3nRYnGTRn+5vDg6vwX7EYDmUv+/sn+7OTl/WaqNHtcBiQU1Rqot5SyKX0wklLIVVIpQot8J9unid2ODDoIPK30hdgKzg+Pt46vnZ8tNx1fK1y67XOQHvMt/dEI1YwqDfCrlAsNoeK8AN8yw6GssVQuM6AcZE4DMj8NfYLyfwGaAH5FFgDmzqY28DXB6pD6PqvzNiFRba2PgAgeAoL4mliq7ZzrDNwyC0/tq2rrQ9Csb4+0AxgSYRvsCLG+kPm+oDhIIeBH7ulpxgMTsC0DgoAzFUYbAJwgq8THUIXJhdeYOoMRoa3IINhxMByz9XBHp5cVQawIjQ3w2oIVkEWTIaLAGBrJO3KPQMsdlWDQQoUWmBnKAHIoJDSkxv4fsEpdC3JZTJ4W2GwDBmQ60Sn+uLfxh00GGQBLIqoLyIGzWHjJkuNAcNBHoNtGwN0xxl2hs0cZADA5kaZYOAUulhy4QyGZxEDAE5B9RylxsCpvliSq5IL4X4A+ptB9hIygBxiq9g5kvadewZY74nX9o0nazAaGHtnJ5fx5DIZXMBV0cW1ra2LI/SOxQErdE09xh2snSdms+jkhPYcDNZF4jHAmmM8UDs/0Fts+lgRC11/N56/6ifVyK+8d3UZ7zgDp9wiksvcMyECIfMxtmdimOExeILnr/MZimPowuQawBn8kaVPEAOFFbq4g3hydf6JKYNBtwcGfmIK3ktDkMu+K0cGhyaDykkSU4pQfYHJhTvo05jiLzu5DNqJKRzkHLr+xwE8f52kONrDk0vAQVbv5jLoIPqv0xSOoYsnlwADVuhiwjqXgIOsi8Rl4G4K59Alk8tJTstOvy25PDrIZXCI1zAnCYSuX3HBgBm6mLDmKMCAZYXLAOs9zlMIhC6eXM4MnOuLu+Ri9m4uA1dTCIQunlzODARyC2sMzg4yezeXAZa/jlOIhC4eu84vGBRh4KJzsbe1fAbd4lOIhK6r5HJedvrx5HJ2kHmR+Ay2XUwhcNnG3SSX87ITak88udi9m8Ng4t7QlW9AdAp1p6d3nE9gZ2jHbAyOf8/nm57IBB/AWGTXhYPaBMtBNoPxSGT3e1W4Obb/cK+X7/NEb88PC8IFRn2x2+sAFTr4o7iDylBP745bBr2Rob+rcdEpOoQYXDeTy4nBPxwZQAcjpoNOfyGoY/eeJwa9qmANU9SrXQEGu1f16+ZUYLQJIQbtooGlbntk8FO3IjaFoj0WYvBPsyg6MGifGBJg8JPZGJwYHHplYC5qHGqY9rMQg5/NFYdT6Aow6IUO+gQDS3s8xGRwi6WbkcjQxNP6deNPoWi3EAOmMaSx3p75m+Z9Un5yBfbGYC7c5BqM9A71fivooE+7hRhQ7YA2lu4jBu/M68adwdf92fy93jGmMaRxyODWUn0bxo9dbX98tzfyGc9eE3Rw55Wog8p9yGCCagg0MVRhsPsvVSzf1NbRIcSAZQ0ZhAyGRlvNKstNBvW3+SHEgGMQMdgd9Qku466PVhjQ7PAZDP2SNhchKmcO9cddIQa7/1bFlt/pX4ZEGAz9ct10kFOyFPX7Xa8MRn/F7umx51DTo2JxMD/62vSZEwnar6NCcTA0+ht2R5ADYWHUaxz0whU5/opXVijAzcK4CIPdcf8TFXthYlyhG9T2/P4dEQYRv/8Q/3sVKuMP2EThbsYjg7FYW9sB/orSARrqgPYq2NY0L8Bg/n5bMBPAnrRLxxo9CMISOi/AYCfWFnxAOugL2P50SyAKHWyDa2VPDODPBPd9US0+YN4ujRNdLaBFD5rgsPtCDOAvFWw6iGoq0yC0F9gPouFCDJCD7xSeg5oWXcpAg00NMIBOv9tb6mZpab0ygTgDaDCzfsC2d/CuKdjkhkFTW9urBxwHn84EKx42wgA+DvJkjHHBAFLgqjpcmIGYgx4YoClGx7k+kJrviXCHt/kjQ6Pi5tr8o5F797kjIpF5LnXL8J6eCH04m0HbrYkx4QnQ8J1xhyHjO7dcMG0bm+APb/tsYkLcHBy+M0ZnyokDtBx1M4fj8Pdt8H3Z4zD4v5FkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAZJkIBkgSQaSAdJ/AJVEf+/vOUWQAAAAAElFTkSuQmCC",
//         "Cicle Bin Go",
//         "Guilherme Gemballa, Jardmin América",
//         "N° 33",
//         "Santa Catarina",
//         "Rio do sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)

//     // 3 - consultar os dados da tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Aqui estão os seus registros: ")
//         console.log(rows)
//     })

    // 4 - Deletar um dado da tabela
//     db.run("DELETE FROM places  WHERE id= ?", [19], function(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Registro deletado com sucesso!")
//     })
    
// })