const express = require('express')
const app = express()
const port = 3000

const CRs = [
{mnemo: "CHAL", name:"Banque Chalus",	number:"764"},
{mnemo: "CAAP", name:"CAM Alpes Provence",	number:"813"},
{mnemo: "CAALV", name:"CAM Alsace Vosges",	number:"872"},
{mnemo: "CAATL", name:"CAM Atlantique Vendée",	number:"847"},
{mnemo: "CABP", name:"CAM Brie Picardie",	number:"887"},
{mnemo: "CACB", name:"CAM Champagne-Bourgogne", 	number:"810"},
{mnemo: "CACP", name:"CAM Charente Périgord",	number:"824"},
{mnemo: "CACM", name:"CAM Charente-Maritime Deux-Sèvres",	number:"817"},
{mnemo: "CAAQ", name:"CAM d'Aquitaine",	number:"833"},
{mnemo: "CACF", name:"CAM de Centre France",	number:"868"},
{mnemo: "CACL", name:"CAM de Centre Loire",	number:"848"},
{mnemo: "CACE", name:"CAM de Centre-Est",	number:"878"},
{mnemo: "CAFC", name:"CAM de Franche-Comté",	number:"825"},
{mnemo: "CAGU", name:"CAM de Guadeloupe",	number:"900"},
{mnemo: "CACR", name:"CAM de la Corse",	number:"820"},
{mnemo: "CAMA", name:"CAM de la Martinique et de la Guyane",	number:"902"},
{mnemo: "CARU", name:"CAM de la Réunion",	number:"903"},
{mnemo: "CATP", name:"CAM de la Touraine et du Poitou",	number:"894"},
{mnemo: "CAAM", name:"CAM de l'Anjou et du Maine",	number:"879"},
{mnemo: "CALHL", name:"CAM de Loire Haute-Loire", 	number:"845"},
{mnemo: "CALO", name:"CAM de Lorraine",	number:"861"},
{mnemo: "CANF", name:"CAM de Nord De France",	number:"867"},
{mnemo: "CANO", name:"CAM de Normandie",	number:"866"},
{mnemo: "CANS", name:"CAM de Normandie Seine",	number:"883"},
{mnemo: "CADIF", name:"CAM de Paris et d'Ile de France",	number:"882"},
{mnemo: "CAPCA", name:"CAM de Provence Côtes d'Azur",	number:"891"},
{mnemo: "CACDA", name:"CAM des Côtes d'Armor",	number:"822"},
{mnemo: "CADS", name:"CAM des Savoie",	number:"881"},
{mnemo: "CAIV", name:"CAM d'Ille et Vilaine",	number:"836"},
{mnemo: "CACO", name:"CAM du Centre Ouest",	number:"895"},
{mnemo: "CAFI", name:"CAM du Finistère",	number:"829"},
{mnemo: "CALG", name:"CAM du Languedoc",	number:"835"},
{mnemo: "CAMH", name:"CAM du Morbihan",	number:"860"},
{mnemo: "CANE", name:"CAM du Nord Est",	number:"802"},
{mnemo: "CAMP", name:"CAM Nord Midi-Pyrénées",	number:"812"},
{mnemo: "CAPG", name:"CAM Pyrénées Gascogne",	number:"869"},
{mnemo: "CASM", name:"CAM Sud Méditerranée",	number:"871"},
{mnemo: "CASRA", name:"CAM Sud Rhône-Alpes",	number:"839"},
{mnemo: "CATO", name:"CAM Toulouse31",	number:"831"},
{mnemo: "CAVF", name:"CAM Val De France",	number:"844"}
]



app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {CRs: CRs})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})