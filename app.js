// 3GASDRIVE DGT CAT 2026 - 380 PREGUNTES DGT 2026
const VERSION = "v8.7-CAT";


// COMBO DOPAMINA
const EMOJIS_ACIERTO = ['🚀','💎','👑','🔥','💯','⚡','🏆','🦄','🤑','✅','💪','😎','🎯','💥','🌟','🎉'];
const EMOJIS_FALLO = ['❌','💀','😭','⛔','💔','😵','🤦','🚫','💩','🤡','💥','😤'];

// 300 PREGUNTES TEST DGT
const PREGUNTES = {
  general: [
    {q:"Quina és la velocitat màxima en zona urbana?", emoji:"🚗", a:["30 km/h","50 km/h","60 km/h"],ok:1},
    {q:"Què indica una llum groga intermitent?", emoji:"🟡", a:["Aturada total","Precaució","Accelera"],ok:1},
    {q:"Distància de seguretat en sec:", emoji:"📏", a:["1 segon","2 segons","3 segons"],ok:1},
    {q:"Es pot avançar en línia contínua?", emoji:"🚫", a:["Sí","No, mai","Només motos"],ok:1},
    {q:"Taxa d'alcohol general:", emoji:"🍺", a:["0.5 g/l","0.3 g/l","0.8 g/l"],ok:0},
    {q:"Prioritat a la rotonda:", emoji:"🔄", a:["El que entra","El que circula dins","El més ràpid"],ok:1},
    {q:"Llums de creuament obligatòries:", emoji:"💡", a:["Sempre","Nit/túnels","Només pluja"],ok:1},
    {q:"Mòbil al volant?", emoji:"📱", a:["Permès mans lliures","Prohibit sempre","Només missatges"],ok:0},
    {q:"Distància mínima per avançar un ciclista:", emoji:"🚲", a:["1 metre","1.5 metres","2 metres"],ok:1},
    {q:"Quan usar el clàxon a ciutat?", emoji:"📢", a:["Saludar","Evitar accident","Mai"],ok:1},
    {q:"Què significa una senyal quadrada blava?", emoji:"🟦", a:["Prohibició","Obligació","Informació"],ok:2},
    {q:"Quan és obligatori usar l'armilla reflectant?", emoji:"🦺", a:["Sempre","En baixar del vehicle a via interurbana","Només de nit"],ok:1},
    {q:"Quina distància s'ha de mantenir a via interurbana?", emoji:"🚗", a:["1 segon","2 segons","3 segons"],ok:1},
    {q:"Es pot estacionar en un pas de vianants?", emoji:"🚷", a:["Sí","No, mai","Només 2 minuts"],ok:1},
    {q:"Què fer davant un vehicle d'emergència amb sirena?", emoji:"🚨", a:["Accelera","Facilitar el pas","Ignorar"],ok:1},
    {q:"Quan s'ha d'usar l'enllumenat de posició?", emoji:"💡", a:["De dia","Entre el capvespre i la sortida del sol","Només amb pluja"],ok:1},
    {q:"Quins documents són obligatoris portar?", emoji:"📄", a:["DNI","Permís de conduir, ITV, Assegurança","Llibre de manteniment"],ok:1},
    {q:"Es pot avançar per la dreta?", emoji:"↪️", a:["Mai","Sí, en certes condicions","Només a autovia"],ok:1},
    {q:"Què indica una línia discontínua?", emoji:"➖", a:["Prohibit avançar","Es pot avançar","Canvi de carril obligatori"],ok:1},
    {q:"Què fer si et quedes sense frens?", emoji:"🛑", a:["Accelera","Reduir marxes i usar fre motor","Apagar el motor"],ok:1},
    {q:"Quan es considera conducció temerària?", emoji:"⚠️", a:["Anar a 50 km/h","Conduir sota efectes d'alcohol/drogues","Usar intermitent"],ok:1},
    {q:"Què significa una senyal triangular amb vora vermella?", emoji:"⚠️", a:["Obligació","Perill","Informació"],ok:1},
    {q:"Es pot usar el mòbil amb el vehicle aturat a un semàfor?", emoji:"📱", a:["Sí","No, està prohibit","Només per missatges"],ok:1},
    {q:"Què fer davant un cedeix el pas?", emoji:"🔺", a:["Aturar sempre","Cedir el pas si ve un altre vehicle","Accelera"],ok:1},
    {q:"Quan és obligatori l'ús de casc?", emoji:"🪖", a:["En moto i ciclomotor","Només en moto","Mai"],ok:0},
    {q:"Què indica una senyal de STOP?", emoji:"🛑", a:["Reduir velocitat","Aturada obligatòria","Cedir el pas"],ok:1},
    {q:"Es pot conduir amb 0.4 g/l d'alcohol sent novell?", emoji:"🍺", a:["Sí","No","Només de dia"],ok:1},
    {q:"Què fer si t'enlluerna un altre vehicle?", emoji:"💡", a:["Mirar al davant","Desviar la vista a la dreta","Accelera"],ok:1},
    {q:"Quan s'ha d'usar el cinturó?", emoji:"🔒", a:["Només a carretera","Sempre que el vehicle el tingui","Només el conductor"],ok:1},
    {q:"Què significa una senyal circular amb fons blanc i vora vermella?", emoji:"🚫", a:["Informació","Prohibició","Obligació"],ok:1},
    {q:"Es pot avançar en un pas a nivell sense barreres?", emoji:"🚂", a:["Sí","No","Només si hi ha visibilitat"],ok:1},
    {q:"Què fer davant un embús?", emoji:"🚗", a:["Tocar el clàxon","Mantenir la calma i distància","Canviar de carril constantment"],ok:1},
    {q:"Quan s'ha d'usar l'enllumenat de carretera?", emoji:"💡", a:["Sempre","Quan no enlluerni altres","Només a ciutat"],ok:1},
    {q:"Què és l'angle mort?", emoji:"👁️", a:["Zona visible pels miralls","Zona no visible pels miralls","Zona davantera del vehicle"],ok:1},
    {q:"Es pot estacionar en doble fila?", emoji:"🚗", a:["Sí, 5 minuts","No","Només amb emergència"],ok:1},
    {q:"Què fer si patina el vehicle?", emoji:"🧊", a:["Frenar fort","Girar el volant al costat contrari","Accelera"],ok:1},
    {q:"Quan es considera velocitat inadequada?", emoji:"⚡", a:["Anar per sota del límit","Anar a velocitat que no permeti controlar el vehicle","Anar a 80 a autovia"],ok:1},
    {q:"Què indica una senyal de prohibit girar a l'esquerra?", emoji:"↩️", a:["Pots girar a la dreta","No pots girar a l'esquerra","Gir obligatori"],ok:1},
    {q:"Es pot portar un nen de 5 anys davant?", emoji:"👶", a:["Sí","No, ha d'anar darrere amb SRI","Només si mesura més de 1.50m"],ok:1},
    {q:"Què fer davant un vianant en pas de zebra?", emoji:"🚶", a:["Accelera","Cedir el pas","Tocar el clàxon"],ok:1},
    {q:"Quan s'ha d'usar el fre motor?", emoji:"⚙️", a:["En baixades prolongades","Només a ciutat","Mai"],ok:0},
    {q:"Què significa una senyal de fi de prohibició?", emoji:"🚫", a:["Comença la prohibició","Acaba la prohibició","Prohibició permanent"],ok:1},
    {q:"Es pot conduir amb auriculars?", emoji:"🎧", a:["Sí","No","Només un posat"],ok:1},
    {q:"Què fer si et quedes sense combustible?", emoji:"⛽", a:["Aturar a la vorera i senyalitzar","Seguir fins la gasolinera","Aturar al carril"],ok:0},
    {q:"Quan és obligatori encendre les llums antiboira del darrere?", emoji:"🌫️", a:["Sempre","Quan la visibilitat sigui inferior a 50m","Només de nit"],ok:1},
    {q:"Què indica una línia blanca contínua a la vora?", emoji:"⬜", a:["Es pot avançar","Delimita la vorera","Prohibeix estacionar"],ok:1},
    {q:"Es pot avançar en corba sense visibilitat?", emoji:"↪️", a:["Sí","No","Només a bicicletes"],ok:1},
    {q:"Què fer davant un semàfor en groc?", emoji:"🟡", a:["Accelera","Aturar-se si es pot fer amb seguretat","Ignorar"],ok:1},
    {q:"Quan s'ha de comprovar la pressió dels pneumàtics?", emoji:"🛞", a:["Un cop l'any","Periòdicament, en fred","Només si vibra el volant"],ok:1},
    {q:"Què significa una senyal de sentit obligatori?", emoji:"➡️", a:["Prohibició","Obligació de seguir aquesta direcció","Informació"],ok:1},
    {q:"Es pot usar la vorera per avançar?", emoji:"🛣️", a:["Sí","No, està prohibit","Només a autovia"],ok:1},
    {q:"Què fer si et falla la direcció?", emoji:"🛠️", a:["Deixar anar el volant","Subjectar fort i frenar suaument","Accelera"],ok:1},
    {q:"Quan s'ha d'usar l'intermitent?", emoji:"↗️", a:["Mai","Abans de maniobrar","Només de nit"],ok:1},
    {q:"Què indica una senyal de prohibit aturar i estacionar?", emoji:"🚫", a:["Es pot aturar","No es pot aturar ni estacionar","Només es pot estacionar"],ok:1},
    {q:"Es pot conduir amb xancletes?", emoji:"🩴", a:["Sí","No, redueix el control","Només a l'estiu"],ok:1},
    {q:"Què fer davant un animal a la calçada?", emoji:"🦌", a:["Accelera","Frenar i esquivar amb cura","Tocar el clàxon fort"],ok:1},
    {q:"Quan s'ha d'usar el fre de mà?", emoji:"🅿️", a:["En marxa","En estacionar","Només a pendents"],ok:1},
    {q:"Què significa una senyal de velocitat mínima?", emoji:"50", a:["No pots anar més lent","No pots anar més ràpid","Velocitat recomanada"],ok:0},
    {q:"Es pot avançar un vehicle que gira a l'esquerra?", emoji:"↩️", a:["Sí, per la dreta","No","Només a ciutat"],ok:0},
    {q:"Què fer si et sents somnolent conduint?", emoji:"😴", a:["Pujar la música","Aturar a descansar","Obrir la finestra"],ok:1},
    {q:"Quan s'ha d'usar l'enllumenat antiboira davanter?", emoji:"🌫️", a:["Sempre","Amb boira, pluja intensa o neu","Només de nit"],ok:1},
    {q:"Què indica una senyal de prohibit avançar?", emoji:"🚗", a:["Es pot avançar","No es pot avançar","Només camions"],ok:1},
    {q:"Es pot estacionar en una parada de bus?", emoji:"🚌", a:["Sí, 2 minuts","No","Només si no hi ha bus"],ok:1},
    {q:"Què fer davant un encreuament sense senyalitzar?", emoji:"❌", a:["Té preferència el de la dreta","Té preferència el de l'esquerra","Accelera"],ok:0},
    {q:"Quan s'ha de revisar el nivell d'oli?", emoji:"🛢️", a:["Cada 6 mesos","Periòdicament","Només si s'encén el testimoni"],ok:1},
    {q:"Què significa una senyal de direcció prohibida?", emoji:"🚫", a:["Pots entrar","No pots entrar","Només residents"],ok:1},
    {q:"Es pot conduir descalç?", emoji:"🦶", a:["Sí","No, està prohibit","Només a ciutat"],ok:1},
    {q:"Què fer davant un semàfor en verd intermitent?", emoji:"🟢", a:["Accelera","Preparar-se pel canvi a groc","Aturar"],ok:1},
    {q:"Quan s'ha d'usar el clàxon a carretera?", emoji:"📢", a:["Per saludar","Per evitar un perill","Mai"],ok:1},
    {q:"Què indica una senyal de prohibit circular a camions?", emoji:"🚚", a:["Prohibit camions","Obligatori camions","Només camions"],ok:0},
    {q:"Es pot avançar en un pas de vianants?", emoji:"🚶", a:["Sí","No","Només si no hi ha vianants"],ok:1},
    {q:"Què fer si rebenta un pneumàtic?", emoji:"💥", a:["Frenar brusc","Subjectar el volant i frenar suaument","Accelera"],ok:1},
    {q:"Quan es considera conducció sota els efectes de l'alcohol?", emoji:"🍺", a:["Des de 0.0 g/l","Superar el límit legal","Només si hi ha accident"],ok:1},
    {q:"Què significa una senyal de cedeix el pas?", emoji:"🔺", a:["Aturada obligatòria","Cedir el pas","Velocitat reduïda"],ok:1},
    {q:"Es pot portar càrrega que sobresurti per darrere?", emoji:"📦", a:["No","Sí, senyalitzada correctament","Només 1 metre"],ok:1},
    {q:"Què fer davant una intersecció amb semàfor apagat?", emoji:"🚦", a:["Passar ràpid","Comportar-se com intersecció sense senyalitzar","Esperar"],ok:1},
    {q:"Quan s'ha d'usar el retrovisor?", emoji:"🪞", a:["Només en aparcar","Abans i durant les maniobres","Mai"],ok:1},
    {q:"Què indica una senyal de prohibit circular a bicicletes?", emoji:"🚲", a:["Prohibit bicicletes","Obligatori bicicletes","Carril bici"],ok:0}
  ],
  senyals: [
    {q:"Senyal de STOP octogonal:", emoji:"🛑", a:["Cedeix el pas","Aturada obligatòria","Precaució"],ok:1},
    {q:"Triangle invertit és:", emoji:"🔺", a:["STOP","Cedeix el pas","No entrar"],ok:1},
    {q:"Cercle vermell amb línia:", emoji:"🚫", a:["Obligació","Prohibició","Fi prohibició"],ok:1},
    {q:"Senyal blau quadrat:", emoji:"🅿️", a:["Prohibició","Informació","Perill"],ok:1},
    {q:"Rombe groc:", emoji:"⚠️", a:["Perill","Informació","Obligació"],ok:0},
    {q:"Senyal de prohibit girar a la dreta:", emoji:"↪️", a:["Pots girar a l'esquerra","No pots girar a la dreta","Gir obligatori"],ok:1},
    {q:"Senyal de velocitat màxima 50:", emoji:"50", a:["Velocitat mínima","Velocitat màxima","Velocitat recomanada"],ok:1},
    {q:"Senyal de cedeix el pas:", emoji:"🔺", a:["Aturada obligatòria","Cedir el pas","Velocitat reduïda"],ok:1},
    {q:"Senyal de direcció obligatòria dreta:", emoji:"➡️", a:["Prohibició","Obligació","Informació"],ok:1},
    {q:"Senyal de prohibit avançar:", emoji:"🚗", a:["Es pot avançar","No es pot avançar","Només camions"],ok:1},
    {q:"Senyal de fi de prohibició:", emoji:"🚫", a:["Comença la prohibició","Acaba la prohibició","Prohibició permanent"],ok:1},
    {q:"Senyal de perill obres:", emoji:"🚧", a:["Zona d'obres","Prohibit passar","Desviament obligatori"],ok:0},
    {q:"Senyal de pas de vianants:", emoji:"🚶", a:["Prohibit vianants","Pas de vianants","Zona escolar"],ok:1},
    {q:"Senyal de prohibit estacionar:", emoji:"🚫", a:["Es pot aturar","No es pot estacionar","Només càrrega i descàrrega"],ok:1},
    {q:"Senyal d'autopista:", emoji:"🛣️", a:["Carretera convencional","Autopista","Via urbana"],ok:1},
    {q:"Senyal de corba perillosa a la dreta:", emoji:"↩️", a:["Corba a l'esquerra","Corba perillosa a la dreta","Canvi de sentit"],ok:1},
    {q:"Senyal de prohibit circular a motos:", emoji:"🏍️", a:["Prohibit motos","Obligatori motos","Carril moto"],ok:0},
    {q:"Senyal de túnel:", emoji:"🚇", a:["Pont","Túnel","Pas inferior"],ok:1},
    {q:"Senyal de prohibit circular a vianants:", emoji:"🚶", a:["Prohibit vianants","Pas de vianants","Zona peatonal"],ok:0},
    {q:"Senyal d'hospital:", emoji:"🏥", a:["Farmàcia","Hospital","Gasolinera"],ok:1},
    {q:"Senyal de prohibit circular a camions:", emoji:"🚚", a:["Prohibit camions","Obligatori camions","Només camions"],ok:0},
    {q:"Senyal d'intersecció amb prioritat:", emoji:"🔶", a:["Cedeix el pas","Tens prioritat","STOP"],ok:1},
    {q:"Senyal de prohibit circular a vehicles de motor:", emoji:"🚗", a:["Prohibit vehicles a motor","Només elèctrics","Només motos"],ok:0},
    {q:"Senyal de gasolinera:", emoji:"⛽", a:["Restaurant","Gasolinera","Taller"],ok:1},
    {q:"Senyal de pendent pronunciada:", emoji:"📉", a:["Pujada","Baixada","Pendent pronunciada"],ok:2},
    {q:"Senyal de prohibit circular a bicicletes:", emoji:"🚲", a:["Prohibit bicicletes","Obligatori bicicletes","Carril bici"],ok:0},
    {q:"Senyal de zona 30:", emoji:"30", a:["Velocitat màxima 30","Velocitat mínima 30","Zona escolar"],ok:0},
    {q:"Senyal de prohibit circular a vehicles pesants:", emoji:"🚛", a:["Prohibit pesants","Obligatori pesants","Només lleugers"],ok:0},
    {q:"Senyal d'estretament de calçada:", emoji:"⬜", a:["Calçada ampla","Estretament","Ampliació"],ok:1},
    {q:"Senyal de prohibit circular a vehicles de tracció animal:", emoji:"🐴", a:["Prohibit tracció animal","Obligatori","Només vianants"],ok:0},
    {q:"Senyal d'aeroport:", emoji:"✈️", a:["Port","Aeroport","Estació"],ok:1},
    {q:"Senyal de prohibit circular a ciclomotors:", emoji:"🛵", a:["Prohibit ciclomotors","Obligatori ciclomotors","Carril ciclomotor"],ok:0},
    {q:"Senyal de gual:", emoji:"〰️", a:["Clot","Gual","Resalt"],ok:2},
    {q:"Senyal de prohibit circular a vehicles lents:", emoji:"🐢", a:["Prohibit lents","Obligatori lents","Només ràpids"],ok:0},
    {q:"Senyal de càmping:", emoji:"⛺", a:["Hotel","Càmping","Àrea de descans"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies perilloses:", emoji:"☠️", a:["Prohibit mercaderies perilloses","Obligatori","Només líquids"],ok:0},
    {q:"Senyal de cruïlla de tramvia:", emoji:"🚊", a:["Cruïlla de tren","Cruïlla de tramvia","Parada de bus"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb remolc:", emoji:"🚛", a:["Prohibit amb remolc","Obligatori remolc","Només camions"],ok:0},
    {q:"Senyal d'àrea de descans:", emoji:"🅿️", a:["Pàrquing","Àrea de descans","Estacionament prohibit"],ok:1},
    {q:"Senyal de prohibit circular a vehicles de més de 3.5t:", emoji:"3.5t", a:["Prohibit més de 3.5t","Obligatori més de 3.5t","Només lleugers"],ok:0},
    {q:"Senyal de cruïlla d'animals domèstics:", emoji:"🐄", a:["Animals salvatges","Animals domèstics","Granja"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb amplada superior a 2m:", emoji:"2m", a:["Prohibit més de 2m ample","Obligatori més de 2m","Només estrets"],ok:0},
    {q:"Senyal de cruïlla d'animals salvatges:", emoji:"🦌", a:["Animals domèstics","Animals salvatges","Granja"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb longitud superior a 10m:", emoji:"10m", a:["Prohibit més de 10m llarg","Obligatori més de 10m","Només curts"],ok:0},
    {q:"Senyal de port:", emoji:"🚢", a:["Aeroport","Port","Estació"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb alçada superior a 4m:", emoji:"4m", a:["Prohibit més de 4m alt","Obligatori més de 4m","Només baixos"],ok:0},
    {q:"Senyal de zona residencial:", emoji:"🏘️", a:["Zona industrial","Zona residencial","Zona comercial"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb pes superior a 10t:", emoji:"10t", a:["Prohibit més de 10t","Obligatori més de 10t","Només lleugers"],ok:0},
    {q:"Senyal de cruïlla de vianants amb nens:", emoji:"👶", a:["Zona escolar","Cruïlla de vianants","Parc"],ok:0},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies inflamables:", emoji:"🔥", a:["Prohibit inflamables","Obligatori inflamables","Només líquids"],ok:0},
    {q:"Senyal d'estació de tren:", emoji:"🚆", a:["Autobús","Tren","Metro"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies contaminants:", emoji:"☢️", a:["Prohibit contaminants","Obligatori contaminants","Només reciclatge"],ok:0},
    {q:"Senyal de parada d'autobús:", emoji:"🚌", a:["Parada de taxi","Parada d'autobús","Estació"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies corrosives:", emoji:"🧪", a:["Prohibit corrosives","Obligatori corrosives","Només sòlids"],ok:0},
    {q:"Senyal de pàrquing:", emoji:"🅿️", a:["Prohibit aparcar","Pàrquing","Zona de càrrega"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies radioactives:", emoji:"☢️", a:["Prohibit radioactives","Obligatori radioactives","Només orgàniques"],ok:0},
    {q:"Senyal de parada de taxi:", emoji:"🚕", a:["Parada de bus","Parada de taxi","Pàrquing"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies explosives:", emoji:"💣", a:["Prohibit explosives","Obligatori explosives","Només gasos"],ok:0},
    {q:"Senyal de zona de càrrega i descàrrega:", emoji:"📦", a:["Prohibit carregar","Zona de càrrega i descàrrega","Pàrquing"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies tòxiques:", emoji:"☠️", a:["Prohibit tòxiques","Obligatori tòxiques","Només aliments"],ok:0},
    {q:"Senyal de carril bici:", emoji:"🚲", a:["Prohibit bicicletes","Carril bici","Zona peatonal"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies perilloses per l'aigua:", emoji:"💧", a:["Prohibit perilloses per aigua","Obligatori","Només sòlids"],ok:0},
    {q:"Senyal de zona peatonal:", emoji:"🚶", a:["Zona de cotxes","Zona peatonal","Carril bici"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies oxidants:", emoji:"🧪", a:["Prohibit oxidants","Obligatori oxidants","Només líquids"],ok:0},
    {q:"Senyal d'àrea de servei:", emoji:"🛠️", a:["Gasolinera","Àrea de servei","Taller"],ok:1},
    {q:"Senyal de prohibit circular a vehicles amb mercaderies infeccioses:", emoji:"🦠", a:["Prohibit infeccioses","Obligatori infeccioses","Només aliments"],ok:0}
  ],
  normes: [
    {q:"Taxa d'alcohol novells:", emoji:"🍺", a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:2},
    {q:"Cinturó obligatori:", emoji:"🔒", a:["Només davant","Només conductor","Tothom"],ok:2},
    {q:"Edat mínima carnet B:", emoji:"🪪", a:["16 anys","17 anys","18 anys"],ok:2},
    {q:"Límit autovia turismes:", emoji:"🛣️", a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {q:"Límit ciutat genèric:", emoji:"🏙️", a:["30 km/h","50 km/h","40 km/h"],ok:1},
    {q:"Taxa d'alcohol professionals:", emoji:"🍺", a:["0.5 g/l","0.3 g/l","0.0 g/l"],ok:1},
    {q:"SRI obligatori fins:", emoji:"👶", a:["135 cm","150 cm","18 anys"],ok:0},
    {q:"Límit convencional fora de poblat:", emoji:"🛣️", a:["90 km/h","100 km/h","110 km/h"],ok:0},
    {q:"Distància mínima a ciutat:", emoji:"📏", a:["1 segon","2 segons","3 segons"],ok:0},
    {q:"Límit motocicletes autovia:", emoji:"🏍️", a:["100 km/h","120 km/h","130 km/h"],ok:1},
    {q:"Prohibit avançar a:", emoji:"🚫", a:["Recta","Corba sense visibilitat","Carril bus"],ok:1},
    {q:"Límit ciclomotors:", emoji:"🛵", a:["45 km/h","60 km/h","80 km/h"],ok:0},
    {q:"Obligatori portar:", emoji:"📄", a:["Passaport","Permís, ITV, Assegurança","Contracte de compra"],ok:1},
    {q:"Límit zona residencial:", emoji:"🏘️", a:["20 km/h","30 km/h","50 km/h"],ok:0},
    {q:"Prohibit estacionar a:", emoji:"🚫", a:["Pàrquing","Pas de vianants","Vorera"],ok:1},
    {q:"Límit camions autovia:", emoji:"🚚", a:["80 km/h","90 km/h","100 km/h"],ok:1},
    {q:"Obligatori casc a:", emoji:"🪖", a:["Cotxe","Moto","Bicicleta"],ok:1},
    {q:"Límit zona escolar:", emoji:"🚸", a:["20 km/h","30 km/h","40 km/h"],ok:0},
    {q:"Prohibit usar:", emoji:"📱", a:["GPS","Mòbil sense mans lliures","Ràdio"],ok:1},
    {q:"Límit camions convencional:", emoji:"🚚", a:["70 km/h","80 km/h","90 km/h"],ok:1},
    {q:"Obligatori armilla a:", emoji:"🦺", a:["Ciutat","Via interurbana","Garage"],ok:1},
    {q:"Límit autobusos autovia:", emoji:"🚌", a:["90 km/h","100 km/h","120 km/h"],ok:1},
    {q:"Prohibit avançar a:", emoji:"🚗", a:["Bicletes","Vehicles d'emergència","A pas de vianants"],ok:2},
    {q:"Límit motocicletes convencional:", emoji:"🏍️", a:["80 km/h","90 km/h","100 km/h"],ok:1},
    {q:"Obligatori llums a:", emoji:"💡", a:["Dia","Nit i túnels","Garage"],ok:1},
    {q:"Límit zona 30:", emoji:"30", a:["30 km/h","40 km/h","50 km/h"],ok:0},
    {q:"Prohibit estacionar a menys de:", emoji:"🚫", a:["3m","5m","10m"],ok:1},
    {q:"Límit autobusos convencional:", emoji:"🚌", a:["80 km/h","90 km/h","100 km/h"],ok:1},
    {q:"Obligatori SRI fins:", emoji:"👶", a:["12 anys","135 cm","18 anys"],ok:1},
    {q:"Límit camions carretera:", emoji:"🚚", a:["70 km/h","80 km/h","90 km/h"],ok:1},
    {q:"Prohibit circular per:", emoji:"🚫", a:["Vorera","Carril bus","Carril dret"],ok:1},
    {q:"Límit ciclomotors via urbana:", emoji:"🛵", a:["30 km/h","45 km/h","50 km/h"],ok:1},
    {q:"Obligatori portar a moto:", emoji:"🪖", a:["Armilla","Casc","Guants"],ok:1},
    {q:"Límit zona 20:", emoji:"20", a:["20 km/h","30 km/h","40 km/h"],ok:0},
    {q:"Prohibit aturar a:", emoji:"🚫", a:["Pàrquing","Parada de bus","Vorera"],ok:1},
    {q:"Límit remolcs autovia:", emoji:"🚛", a:["80 km/h","90 km/h","100 km/h"],ok:1},
    {q:"Obligatori intermitent a:", emoji:"↗️", a:["Mai","Abans de maniobrar","Només de nit"],ok:1},
    {q:"Límit remolcs convencional:", emoji:"🚛", a:["70 km/h","80 km/h","90 km/h"],ok:1},
    {q:"Prohibit circular amb:", emoji:"🍺", a:["Aigua","Alcohol superior al límit","Cafè"],ok:1},
    {q:"Límit ciclomotors carretera:", emoji:"🛵", a:["45 km/h","60 km/h","80 km/h"],ok:1},
    {q:"Obligatori portar documentació de:", emoji:"📄", a:["Vehicle","Vehicle i conductor","Només vehicle"],ok:1},
    {q:"Límit zona peatonal:", emoji:"🚶", a:["10 km/h","20 km/h","30 km/h"],ok:0},
    {q:"Prohibit avançar a:", emoji:"⛔", a:["Recta","Pas a nivell sense barreres","Carril bus"],ok:1}, 
    {q:"Límit tractors:", emoji:"🚜", a:["40 km/h","45 km/h","60 km/h"],ok:1},
    {q:"Obligatori portar triangles a:", emoji:"⚠️", a:["Ciutat","Via interurbana","Garage"],ok:1},
    {q:"Límit zona 10:", emoji:"10", a:["10 km/h","20 km/h","30 km/h"],ok:0},
    {q:"Prohibit estacionar a:", emoji:"🚫", a:["Pàrquing","Gual","Vorera"],ok:1},
    {q:"Límit vehicles especials:", emoji:"🚜", a:["40 km/h","45 km/h","60 km/h"],ok:1},
    {q:"Obligatori portar extintor a:", emoji:"🧯", a:["Turismes","Vehicles de transport","Motos"],ok:1},
    {q:"Límit zona 40:", emoji:"40", a:["40 km/h","50 km/h","60 km/h"],ok:0},
    {q:"Prohibit circular per carril bus:", emoji:"🚌", a:["Sí, sempre","No, només bus i taxi","Només motos"],ok:1}
  ],
mecanica: [
    {q:"Presión baja causa:", emoji:"🛞", a:["Mayor consumo","Menor adherencia","Ambas"],ok:2},
    {q:"Líquido de frenos bajo:", emoji:"🛢️", a:["Desgaste pastillas","Fuga","Ambas pueden ser"],ok:2},
    {q:"Testigo aceite rojo:", emoji:"🛢️", a:["Revisar nivel","Para el motor YA","Cambiar aceite"],ok:1},
    {q:"Batería descargada:", emoji:"🔋", a:["Empujar","Pinzas","Ambas"],ok:2},
    {q:"Neumático liso:", emoji:"🛞", a:["Multa","Accidente","Ambas"],ok:2},
    {q:"¿Para qué sirve el refrigerante?", emoji:"❄️", a:["Lubricar","Enfriar el motor","Limpiar"],ok:1},
    {q:"¿Cuándo cambiar el aceite del motor?", emoji:"🛢️", a:["Cada 100.000 km","Según el fabricante","Nunca"],ok:1},
    {q:"¿Qué indica el testigo de batería?", emoji:"🔋", a:["Batería baja","Alternador no carga","Todo correcto"],ok:1},
    {q:"¿Qué hacer si se enciende el testigo de temperatura?", emoji:"🌡️", a:["Acelerar","Parar el motor y dejar enfriar","Poner aire acondicionado"],ok:1},
    {q:"¿Qué función tienen las pastillas de freno?", emoji:"🛑", a:["Sujetar el volante","Frenar el vehículo","Amortiguar"],ok:1},
    {q:"¿Qué es el líquido de dirección?", emoji:"🛠️", a:["Combustible","Lubricante hidráulico","Refrigerante"],ok:1},
    {q:"¿Cuándo se debe revisar la batería?", emoji:"🔋", a:["Cada 5 años","Periódicamente","Nunca"],ok:1},
    {q:"¿Qué pasa si el filtro de aire está sucio?", emoji:"💨", a:["Consumo menor","Pérdida de potencia","Más velocidad"],ok:1},
    {q:"¿Qué presión deben tener los neumáticos?", emoji:"🛞", a:["La que diga el fabricante","Máxima siempre","Mínima siempre"],ok:0},
    {q:"¿Qué indica humo blanco por el escape?", emoji:"💨", a:["Combustión perfecta","Entrada de agua al motor","Poca gasolina"],ok:1},
    {q:"¿Qué es el alternador?", emoji:"⚡", a:["Batería","Genera electricidad con el motor","Motor de arranque"],ok:1},
    {q:"¿Cuándo cambiar las escobillas del parabrisas?", emoji:"🌧️", a:["Cada año","Cuando no limpian bien","Nunca"],ok:1},
    {q:"¿Qué hace el termostato?", emoji:"🌡️", a:["Regula la temperatura del motor","Mide la velocidad","Enciende las luces"],ok:0},
    {q:"¿Qué pasa si llevas los neumáticos desinflados?", emoji:"🛞", a:["Menos consumo","Más riesgo de reventón","Más adherencia"],ok:1},
    {q:"¿Qué es el líquido de transmisión?", emoji:"⚙️", a:["Combustible","Lubricante para la caja de cambios","Refrigerante"],ok:1},
    {q:"¿Qué indica humo negro por el escape?", emoji:"💨", a:["Combustión incompleta","Agua en el motor","Todo bien"],ok:0},
    {q:"¿Cuándo revisar los amortiguadores?", emoji:"🔧", a:["Nunca","Cada 20.000 km o si rebota","Cada semana"],ok:1},
    {q:"¿Qué hace la bomba de agua?", emoji:"💧", a:["Bombea combustible","Hace circular el refrigerante","Infla los neumáticos"],ok:1},
    {q:"¿Qué pasa si el nivel de líquido de frenos es bajo?", emoji:"🛢️", a:["Frena mejor","Puede fallar el freno","No pasa nada"],ok:1},
    {q:"¿Qué es la correa de distribución?", emoji:"⚙️", a:["Cable eléctrico","Sincroniza cigüeñal y árboles de levas","Tubo de escape"],ok:1},
    {q:"¿Cuándo cambiar el líquido de frenos?", emoji:"🛢️", a:["Cada 2 años","Nunca","Cada 100.000 km"],ok:0},
    {q:"¿Qué indica un ruido metálico al frenar?", emoji:"🔩", a:["Todo bien","Pastillas gastadas","Neumático bajo"],ok:1},
    {q:"¿Qué hace el catalizador?", emoji:"🚗", a:["Aumenta potencia","Reduce emisiones contaminantes","Consume aceite"],ok:1},
    {q:"¿Qué pasa si el motor se sobrecalienta?", emoji:"🔥", a:["Va más rápido","Se puede gripar","Consume menos"],ok:1},
    {q:"¿Qué es el embrague?", emoji:"🦶", a:["Pedal de freno","Sistema que conecta/desconecta motor y caja","Acelerador"],ok:1},
    {q:"¿Cuándo revisar el líquido de dirección?", emoji:"🛠️", a:["Nunca","Periódicamente","Solo si hace ruido"],ok:1},
    {q:"¿Qué indica un neumático desgastado por el centro?", emoji:"🛞", a:["Presión baja","Presión alta","Alineación mal"],ok:1},
    {q:"¿Qué hace el motor de arranque?", emoji:"⚡", a:["Carga la batería","Pone en marcha el motor","Enciende las luces"],ok:1},
    {q:"¿Qué pasa si llevas el aceite sucio?", emoji:"🛢️", a:["Mejor lubricación","Desgaste del motor","Menos consumo"],ok:1},
    {q:"¿Qué es el diferencial?", emoji:"⚙️", a:["Frena las ruedas","Permite girar ruedas a distinta velocidad","Mide la velocidad"],ok:1},
    {q:"¿Cuándo cambiar el filtro de combustible?", emoji:"⛽", a:["Nunca","Según mantenimiento","Cada semana"],ok:1},
    {q:"¿Qué indica un neumático desgastado por fuera?", emoji:"🛞", a:["Presión alta","Alineación incorrecta","Todo bien"],ok:1},
    {q:"¿Qué hace la bomba de combustible?", emoji:"⛽", a:["Enfría el motor","Envía combustible al motor","Limpia el aceite"],ok:1},
    {q:"¿Qué pasa si el líquido refrigerante es bajo?", emoji:"❄️", a:["Riesgo de sobrecalentamiento","Mejor rendimiento","Menos consumo"],ok:0},
    {q:"¿Qué es la caja de cambios?", emoji:"⚙️", a:["Depósito de combustible","Transmite potencia a las ruedas","Batería"],ok:1},
    {q:"¿Cuándo revisar las luces del vehículo?", emoji:"💡", a:["Nunca","Periódicamente","Solo en la ITV"],ok:1},
    {q:"¿Qué indica humo azul por el escape?", emoji:"💨", a:["Consumo de aceite","Combustión perfecta","Poca gasolina"],ok:0},
    {q:"¿Qué hace el silenciador?", emoji:"🔇", a:["Aumenta potencia","Reduce ruido de escape","Enfría el motor"],ok:1},
    {q:"¿Qué pasa si el freno de mano no funciona?", emoji:"🅿️", a:["No pasa nada","Riesgo al aparcar","Frena mejor"],ok:1},
    {q:"¿Qué es el cigüeñal?", emoji:"⚙️", a:["Batería","Transforma movimiento lineal en rotatorio","Depósito de aceite"],ok:1},
    {q:"¿Cuándo cambiar el líquido de dirección?", emoji:"🛠️", a:["Nunca","Según mantenimiento","Cada mes"],ok:1},
    {q:"¿Qué indica vibración en el volante?", emoji:"🔧", a:["Todo bien","Desequilibrio ruedas o alineación","Motor roto"],ok:1},
    {q:"¿Qué hace la sonda lambda?", emoji:"💨", a:["Mide oxígeno en el escape","Enciende las luces","Mide velocidad"],ok:0},
    {q:"¿Qué pasa si llevas el filtro de habitáculo sucio?", emoji:"🌬️", a:["Mejor aire","Mala ventilación y olores","Más potencia"],ok:1},
    {q:"¿Qué es el árbol de levas?", emoji:"⚙️", a:["Batería","Controla apertura de válvulas","Depósito de combustible"],ok:1},
    {q:"¿Cuándo revisar el sistema de escape?", emoji:"🔧", a:["Nunca","Si hace ruido o fugas","Solo en la ITV"],ok:1},
    {q:"¿Qué indica un neumático desgastado por dentro?", emoji:"🛞", a:["Presión alta","Alineación incorrecta","Presión baja"],ok:1},
    {q:"¿Qué hace el inyector?", emoji:"⛽", a:["Filtra el aire","Pulveriza combustible en la cámara","Enfría el motor"],ok:1},
    {q:"¿Qué pasa si el radiador está obstruido?", emoji:"❄️", a:["Mejor refrigeración","Riesgo de sobrecalentamiento","Menos consumo"],ok:1},
    {q:"¿Qué es la transmisión?", emoji:"⚙️", a:["Depósito de aceite","Sistema que lleva potencia a las ruedas","Batería"],ok:1},
    {q:"¿Cuándo cambiar el líquido de transmisión?", emoji:"⚙️", a:["Nunca","Según fabricante","Cada semana"],ok:1},
    {q:"¿Qué indica un ruido al girar el volante?", emoji:"🔩", a:["Todo bien","Problema en dirección o suspensión","Neumático bajo"],ok:1},
    {q:"¿Qué hace la sonda lambda?", emoji:"💨", a:["Mide oxígeno para ajustar mezcla","Enciende el motor","Mide velocidad"],ok:0},
    {q:"¿Qué pasa si el ventilador no funciona?", emoji:"🌬️", a:["Mejor refrigeración","Riesgo de sobrecalentamiento","Menos consumo"],ok:1},
    {q:"¿Qué es el volante de inercia?", emoji:"⚙️", a:["Batería","Regula giro del motor","Depósito de combustible"],ok:1},
    {q:"¿Cuándo revisar el nivel de líquido de frenos?", emoji:"🛢️", a:["Nunca","Periódicamente","Solo si falla"],ok:1},
    {q:"¿Qué indica desgaste irregular de los neumáticos?", emoji:"🛞", a:["Todo bien","Problema de alineación o suspensión","Presión correcta"],ok:1},
    {q:"¿Qué hace la válvula EGR?", emoji:"💨", a:["Reduce emisiones recirculando gases","Aumenta potencia","Enfría el motor"],ok:0},
    {q:"¿Qué pasa si el tubo de escape está roto?", emoji:"🔧", a:["Más silencio","Más ruido y emisiones","Mejor rendimiento"],ok:1},
    {q:"¿Qué es el convertidor de par?", emoji:"⚙️", a:["Batería","Transmite potencia en automáticos","Depósito de combustible"],ok:1},
    {q:"¿Cuándo cambiar las bujías de encendido?", emoji:"⚡", a:["Nunca","Según mantenimiento","Cada semana"],ok:1},
    {q:"¿Qué indica olor a quemado dentro del coche?", emoji:"🔥", a:["Todo bien","Sobrecalentamiento o freno pegado","Aire limpio"],ok:1},
    {q:"¿Qué hace el sensor MAP?", emoji:"🌡️", a:["Mide presión de admisión","Mide velocidad","Enciende las luces"],ok:0},
    {q:"¿Qué pasa si falta líquido de dirección?", emoji:"🛠️", a:["Dirección más suave","Dirección dura y riesgo de daño","No pasa nada"],ok:1},
    {q:"¿Qué es el turbo?", emoji:"💨", a:["Frena el motor","Aumenta potencia con gases de escape","Enfría el aceite"],ok:1},
    {q:"¿Cuándo revisar el sistema de refrigeración?", emoji:"❄️", a:["Nunca","Antes de viajes largos","Solo en verano"],ok:1},
    {q:"¿Qué indica un neumático con burbujas?", emoji:"🛞", a:["Todo bien","Peligro de reventón","Más adherencia"],ok:1},
    {q:"¿Qué hace el sensor de cigüeñal?", emoji:"⚙️", a:["Mide posición del cigüeñal","Mide velocidad","Enciende las luces"],ok:0},
    {q:"¿Qué pasa si el filtro de gasoil está sucio?", emoji:"⛽", a:["Mejor rendimiento","Arranque difícil y pérdida potencia","Menos consumo"],ok:1}
  ]
};

// 80 CASOS REALS
const SITUACIONS = {
  clima: [
    {q:"Pluja intensa: què fas?", emoji:"🌧️", a:["Accelero per sortir","Redueixo velocitat i augmento distància","Freno en sec"],ok:1},
    {q:"Boira espessa:", emoji:"🌫️", a:["Llums llargues","Antiboira + curtes","Sense llums"],ok:1},
    {q:"Gel a la calçada:", emoji:"🧊", a:["Freno fort","Marxes llargues sense frenar brusc","Accelero"],ok:1},
    {q:"Bassals grans:", emoji:"💧", a:["Accelera","Evita i redueix velocitat","Frena fort"],ok:1},
    {q:"Vent lateral fort:", emoji:"💨", a:["Subjecta el volant ferm","Deixa anar el volant","Accelera"],ok:0},
    {q:"Aquaplaning a l'autovia:", emoji:"🌊", a:["Freno fort","Aixeco el peu de l'accelerador i subjecto ferm","Giro el volant bruscament"],ok:1},
    {q:"Neu a la carretera:", emoji:"❄️", a:["Pneumàtics normals i velocitat alta","Cadenes i velocitat moderada","Sense cadenes i ràpid"],ok:1},
    {q:"Calor extrema, motor s'escalfa:", emoji:"🔥", a:["Accelero per ventilar","Aturo en lloc segur i deixo refredar","Poso aire condicionat al màxim"],ok:1},
    {q:"Sol de cara a l'alba:", emoji:"☀️", a:["Accelero","Redueixo velocitat i uso visera/gafes","Tanco els ulls un moment"],ok:1},
    {q:"Paviment moll després de pluja:", emoji:"💦", a:["Mantinc velocitat","Redueixo velocitat, risc de lliscar","Accelero per assecar"],ok:1},
    {q:"Encreuament inundat:", emoji:"🌊", a:["Passo ràpid","Evito passar, busco ruta alternativa","Accelero i espero"],ok:1},
    {q:"Boira a la nit:", emoji:"🌫️", a:["Llums llargues","Llums curtes + antiboira davantera","Sense llums"],ok:1},
    {q:"Pedra solta a la corba:", emoji:"🪨", a:["Freno i giro brusc","Aixeco el peu i giro suau","Accelero per passar"],ok:1},
    {q:"Vent fort en pont:", emoji:"🌉", a:["Mantinc velocitat","Redueixo velocitat i subjecto ferm","Canvio de carril ràpid"],ok:1},
    {q:"Calabruix sobtat:", emoji:"🧊", a:["Aturo sota un arbre","Redueixo velocitat i augmento distància","Accelero per sortir-ne"],ok:1},
    {q:"Fang a la calçada rural:", emoji:"🟤", a:["Accelero","Redueixo velocitat i evito moviments bruscos","Freno a fons"],ok:1},
    {q:"Gel negre a l'ombra:", emoji:"🧊", a:["Freno fort","Conduïm suau sense moviments bruscos","Accelero"],ok:1},
    {q:"Pluja i oli a la carretera:", emoji:"🛢️", a:["Mantinc velocitat","Extrema precaució, distància major","Accelero"],ok:1},
    {q:"Enlluernament per sol baix:", emoji:"🌅", a:["Redueixo velocitat i uso visera","Accelero per passar-ho ràpid","Tanco un ull"],ok:0},
    {q:"Tempesta amb llamps:", emoji:"⚡", a:["Aturo sota arbre alt","Busco refugi segur dins el cotxe","Seguim normal"],ok:1},
    {q:"Neu fosa amb tolls:", emoji:"💧", a:["Accelero","Evito tolls i redueixo velocitat","Freno fort"],ok:1},
    {q:"Vent de tempesta:", emoji:"🌪️", a:["Mantinc velocitat","Redueixo velocitat i alerta a objectes","Canvio de carril ràpid"],ok:1},
    {q:"Calçada amb fulles mullades:", emoji:"🍂", a:["Accelero","Conducció suau, distància major","Freno a fons"],ok:1},
    {q:"Boira bancs de boira:", emoji:"🌫️", a:["Accelero per sortir","Redueixo velocitat i ús llums curtes","Apago llums"],ok:1},
    {q:"Gel a ponts i viaductes:", emoji:"🌉", a:["Accelero","Extrema precaució, no freno brusc","Freno fort"],ok:1},
    {q:"Pluja torrencial a la nit:", emoji:"🌧️", a:["Mantinc ritme","Redueixo velocitat, llums i distància","Apago llums"],ok:1},
    {q:"Sorra a la carretera:", emoji:"🏜️", a:["Accelero","Redueixo i evito frenades brusques","Freno fort"],ok:1},
    {q:"Calor, pneumàtic calent:", emoji:"🔥", a:["Seguim","Aturo i comprovo pressió","Accelero"],ok:1},
    {q:"Boira + fum d'incendi:", emoji:"🔥", a:["Accelero","Redueixo, llums curtes i finestra tancada","Apago motor"],ok:1},
    {q:"Encreuament amb aigua corrent:", emoji:"💦", a:["Passo ràpid","No passo, risc d'arrossegament","Accelero"],ok:1},
    {q:"Gel a l'entrada de túnel:", emoji:"🧊", a:["Freno brusc","Conducció suau i distància","Accelero"],ok:1},
    {q:"Pluja + vent fort:", emoji:"💨", a:["Mantinc velocitat","Redueixo velocitat i subjecto volant","Accelero"],ok:1},
    {q:"Neu lleugera, calçada humida:", emoji:"❄️", a:["Velocitat normal","Velocitat reduïda i distància","Accelero"],ok:1},
    {q:"Fum dens a la carretera:", emoji:"💨", a:["Accelero per sortir","Redueixo, llums curtes i finestre tancada","Apago llums"],ok:1},
    {q:"Bassal gran a la corba:", emoji:"💧", a:["Accelero","Redueixo abans i evito frenar a la corba","Freno dins la corba"],ok:1},
    {q:"Vent lateral en camió:", emoji:"🚛", a:["Mantinc velocitat","Augmento distància i subjecto ferm","Canvio de carril ràpid"],ok:1},
    {q:"Gel a sortida de túnel:", emoji:"🧊", a:["Accelero","Conducció suau, alerta","Freno fort"],ok:1},
    {q:"Pluja amb sorra a la via:", emoji:"🏖️", a:["Mantinc velocitat","Redueixo i evito moviments bruscos","Accelero"],ok:1},
    {q:"Boira densa a muntanya:", emoji:"⛰️", a:["Accelero","Velocitat molt reduïda, llums curtes","Apago llums"],ok:1},
    {q:"Calor, asfalt tou:", emoji:"☀️", a:["Accelero","Conducció suau, evito girs bruscos","Freno fort"],ok:1},
    {q:"Enlluernament per fars alts:", emoji:"💡", a:["Accelero","Redueixo velocitat i miro a la dreta","Tanco els ulls"],ok:1},
    {q:"Pluja amb fulles a la calçada:", emoji:"🍃", a:["Mantinc ritme","Redueixo velocitat i distància","Freno fort"],ok:1},
    {q:"Vent fort en avançament:", emoji:"💨", a:["Accelero ràpid","Mantinc trajectòria i subjecto ferm","Giro brusc"],ok:1},
    {q:"Neu amb fang:", emoji:"❄️", a:["Accelero","Velocitat reduïda i tracció suau","Freno brusc"],ok:1},
    {q:"Tempesta de pols:", emoji:"🌪️", a:["Seguim normal","Redueixo, llums i distància","Accelero"],ok:1},
    {q:"Calçada amb oli:", emoji:"🛢️", a:["Mantinc velocitat","Extrema precaució, no freno brusc","Accelero"],ok:1},
    {q:"Boira + pluja:", emoji:"🌧️", a:["Accelero","Redueixo, llums curtes i distància","Apago llums"],ok:1},
    {q:"Gel a ombra de pont:", emoji:"🌉", a:["Freno fort","Conducció suau sense accelerar","Accelero"],ok:1},
    {q:"Pluja i neumàtic desgastat:", emoji:"🛞", a:["Mantinc velocitat","Redueixo velocitat, risc aquaplaning","Accelero"],ok:1},
    {q:"Vent en túnel:", emoji:"🚇", a:["Mantinc velocitat","Redueixo i alerta a corrents","Accelero"],ok:1},
    {q:"Neu acumulada a vorera:", emoji:"❄️", a:["Accelero","Evito i redueixo velocitat","Freno brusc"],ok:1},
    {q:"Pluja amb fang a la corba:", emoji:"🟤", a:["Accelero","Redueixo abans de la corba","Freno dins la corba"],ok:1},
    {q:"Boira + calor:", emoji:"🌫️", a:["Accelero","Redueixo i ús aire condicionat per desemboirar","Apago llums"],ok:1},
    {q:"Gel a rotonda:", emoji:"🔄", a:["Accelero per sortir","Conducció suau i velocitat baixa","Freno brusc"],ok:1},
    {q:"Pluja intensa + nit:", emoji:"🌧️", a:["Mantinc velocitat","Redueixo velocitat i augmento visibilitat","Apago llums"],ok:1},
    {q:"Vent fort amb remolc:", emoji:"🚛", a:["Accelero","Redueixo velocitat i subjecto ferm","Giro brusc"],ok:1},
    {q:"Neu amb pendent pronunciat:", emoji:"⛰️", a:["Accelero","Marxa curta, sense frenar brusc","Freno fort"],ok:1},
    {q:"Pluja i xapes metàl·liques a l'obra:", emoji:"🔧", a:["Mantinc velocitat","Evito i redueixo velocitat","Accelero"],ok:1},
    {q:"Boira a l'alba:", emoji:"🌅", a:["Accelero","Redueixo, llums curtes i precaució","Apago llums"],ok:1},
    {q:"Gel a sortida de peatge:", emoji:"🧊", a:["Accelero","Conducció suau i distància","Freno fort"],ok:1},
    {q:"Pluja amb sorra fina:", emoji:"🏜️", a:["Mantinc velocitat","Redueixo i evito frenades","Accelero"],ok:1},
    {q:"Vent lateral en moto:", emoji:"🏍️", a:["Mantinc velocitat","Redueixo i subjecto ferm","Accelero"],ok:1},
    {q:"Neu amb pluja:", emoji:"🌧️", a:["Accelero","Velocitat molt reduïda i distància","Freno fort"],ok:1},
    {q:"Pluja i pintura fresca a la via:", emoji:"🎨", a:["Mantinc velocitat","Evito i redueixo velocitat","Accelero"],ok:1},
    {q:"Boira en zona industrial:", emoji:"🏭", a:["Accelero","Redueixo velocitat i alerta a camions","Apago llums"],ok:1},
    {q:"Gel a aparcament descobert:", emoji:"🧊", a:["Accelero","Conducció suau i sense accelerar brusc","Freno fort"],ok:1},
    {q:"Pluja amb fulles seques:", emoji:"🍂", a:["Mantinc velocitat","Redueixo velocitat i distància","Freno fort"],ok:1},
    {q:"Vent en descens pronunciat:", emoji:"📉", a:["Accelero","Redueixo marxa i freno motor","Accelero més"],ok:1},
    {q:"Neu amb gel sota:", emoji:"🧊", a:["Accelero","Velocitat molt baixa i tracció suau","Freno brusc"],ok:1},
    {q:"Pluja i bassals a l'entrada de rotonda:", emoji:"🔄", a:["Accelero","Redueixo abans d'entrar","Freno dins"],ok:1},
    {q:"Boira amb animals a la via:", emoji:"🦌", a:["Accelero","Redueixo velocitat i alerta màxima","Apago llums"],ok:1},
    {q:"Gel a sortida d'aparcament:", emoji:"🅿️", a:["Accelero","Conducció suau i sense girs bruscos","Freno fort"],ok:1},
    {q:"Pluja amb sorra a la corba:", emoji:"🏖️", a:["Accelero","Redueixo abans i traçada ampla","Freno dins"],ok:1},
    {q:"Vent fort en avançament de camió:", emoji:"🚛", a:["Accelero ràpid","Mantinc trajectòria i distància","Giro brusc"],ok:1},
    {q:"Neu amb sal a la calçada:", emoji:"🧂", a:["Accelero","Conducció normal, alerta a esquitxades","Freno fort"],ok:1},
    {q:"Pluja amb fang i pedres:", emoji:"🪨", a:["Mantinc velocitat","Redueixo i evito moviments bruscos","Accelero"],ok:1},
    {q:"Boira en zona escolar:", emoji:"🚸", a:["Accelero","Velocitat molt reduïda i atenció màxima","Apago llums"],ok:1},
    {q:"Gel a sortida de glorieta:", emoji:"🔄", a:["Accelero","Conducció suau i velocitat baixa","Freno fort"],ok:1},
    {q:"Pluja amb oli i aigua:", emoji:"🛢️", a:["Mantinc velocitat","Extrema precaució i distància","Accelero"],ok:1},
    {q:"Vent fort en zona costanera:", emoji:"🌊", a:["Mantinc velocitat","Redueixo i subjecto ferm","Accelero"],ok:1},
    {q:"Neu amb fang a la pujada:", emoji:"⛰️", a:["Accelero","Marxa curta i tracció constant","Freno fort"],ok:1},
    {q:"Pluja i xapa metàl·lica relliscosa:", emoji:"🔩", a:["Mantinc velocitat","Evito i redueixo velocitat","Accelero"],ok:1},
    {q:"Boira + fum de xemeneia:", emoji:"🚬", a:["Accelero","Redueixo, llums curtes i finestra tancada","Apago llums"],ok:1},
    {q:"Gel a entrada de garatge:", emoji:"🏠", a:["Accelero","Conducció suau i distància","Freno fort"],ok:1},
    {q:"Pluja amb fulles humides a la corba:", emoji:"🍃", a:["Accelero","Redueixo abans de la corba","Freno dins"],ok:1},
    {q:"Vent fort en zona oberta:", emoji:"🌾", a:["Mantinc velocitat","Redueixo velocitat i alerta","Accelero"],ok:1}
  ]
};

const COCHES = [
  {id:'c1',nom:'SEAT Ibiza',emoji:'🚗',precio:200,cv:90},
  {id:'c2',nom:'VW Golf GTI',emoji:'🛻',precio:800,cv:220},
  {id:'c3',nom:'BMW M3',emoji:'🚘',precio:1500,cv:420},
  {id:'c4',nom:'Tesla Model S',emoji:'⚡',precio:2000,cv:670},
  {id:'c5',nom:'Porsche 911',emoji:'🛡',precio:2500,cv:450},
  {id:'c6',nom:'Bugatti Chiron',emoji:'⚔',precio:5000,cv:1500},
  {id:'c7',nom:'Yamaha R1',emoji:'🏍️',precio:2200,cv:200},
  {id:'c8',nom:'Ducati Panigale',emoji:'🏍️',precio:2800,cv:220},
  {id:'c9',nom:'Audi RS6',emoji:'➿',precio:3200,cv:600},
  {id:'c10',nom:'Nissan GTR',emoji:'🏁',precio:3500,cv:565},
  {id:'c11',nom:'McLaren 720S',emoji:'🏎',precio:4200,cv:720}
];

const ACCESORIS = [
  {id:'a1',nom:'Turbo',emoji:'💨',precio:300,hp:50},
  {id:'a2',nom:'Pneumàtics Racing',emoji:'🛞',precio:200,hp:30},
  {id:'a3',nom:'Aleró',emoji:'🔰',precio:400,hp:40},
  {id:'a4',nom:'Nitro',emoji:'💥',precio:600,hp:80}
];

const EMOJI_TIENDA = [
  {id:'e1',emoji:'🦄',nom:'Unicorn',precio:1000},
  {id:'e2',emoji:'👑',nom:'Corona',precio:800},
  {id:'e3',emoji:'💎',nom:'Diamant',precio:1200},
  {id:'e4',emoji:'🚀',nom:'Coet',precio:600},
  {id:'e5',emoji:'🔥',nom:'Foc',precio:500},
  {id:'e6',emoji:'⚡',nom:'Llamp',precio:700}
];

// 30 CONSELLS ROTATIUS
const TIPS = [
  {emoji:'🧠',txt:'Regla dels 2 segons: mantén distància amb el de davant'},
  {emoji:'👀',txt:'Mira 12 segons endavant, no només el cotxe de davant'},
  {emoji:'🛑',txt:'A STOP compte fins a 3 abans d\'arrencar'},
  {emoji:'💡',txt:'Llums de creuament de dia = et veuen 3x millor'},
  {emoji:'📱',txt:'Mòbil = 23x més risc. Mode avió al conduir'},
  {emoji:'🛞',txt:'Pressió baixa = +10% consum i risc de rebentada'},
  {emoji:'🌧️',txt:'Pluja: augmenta distància x2 i redueix velocitat 20%'},
  {emoji:'😴',txt:'Cansat = mateix risc que alcohol. Para cada 2h'},
  {emoji:'🚸',txt:'A zona escolar redueix a 20 km/h sempre'},
  {emoji:'🔄',txt:'Glorieta: carril dret per sortir, esquerre per seguir'},
  {emoji:'🚨',txt:'Ambulància amb sirena: enganxa\'t a la dreta i para'},
  {emoji:'🌙',txt:'Nit: augmenta distància, els fars enganyen'},
  {emoji:'🧥',txt:'Armilla reflectant obligatòria fora del cotxe a carretera'},
  {emoji:'🍼',txt:'Nens <135cm sempre darrere amb cadira homologada'},
  {emoji:'🚲',txt:'Avança ciclista deixant 1.5m mínim lateral'},
  {emoji:'❄️',txt:'Gel negre no es veu. Si brilla la carretera, precaució'},
  {emoji:'🚧',txt:'Obres: respecta senyals grogues, són prioritàries'},
  {emoji:'🅿️',txt:'No aparquis a menys de 5m d\'un pas de vianants'},
  {emoji:'💨',txt:'Vent lateral: subjecta volant amb les dues mans'},
  {emoji:'🔋',txt:'Cotxe elèctric: regenera frenant, estalvia pastilles'},
  {emoji:'🎧',txt:'Auriculars prohibits. No sents ambulàncies ni clàxon'},
  {emoji:'🥃',txt:'Alcohol 0.0 si ets novell o professional. No hi ha excusa'},
  {emoji:'🌫️',txt:'Boira: antiboira del darrere només si visibilitat <50m'},
  {emoji:'🛣️',txt:'Autovia: carril dret és per circular, no avançar'},
  {emoji:'🚦',txt:'Groc: només passa si no pots parar segur'},
  {emoji:'👶',txt:'Airbag + cadira darrere en sentit contrari a la marxa'},
  {emoji:'🛠️',txt:'Revisa oli, aigua i pressió cada 15 dies'},
  {emoji:'📍',txt:'GPS: programa\'l abans de sortir, no conduint'},
  {emoji:'🔥',txt:'Incendi: no obris capó, usa extintor per escletxes'},
  {emoji:'💪',txt:'Cinturó sempre. 9 de 10 vides salvades són per això'}
];

let tipsData = [];
let tipActual = 0;

let estat = {
  coins: parseInt(localStorage.getItem('gd_coins')) || 0,
  coches: JSON.parse(localStorage.getItem('gd_coches')) || ['c1'],
  accesorios: JSON.parse(localStorage.getItem('gd_accesorios')) || [],
  emojis: JSON.parse(localStorage.getItem('gd_emojis')) || [],
  test: {
    general: {idx:0,aciertos:0,racha:0,puntuacion:0},
    senyals: {idx:0,aciertos:0,racha:0,puntuacion:0},
    normes: {idx:0,aciertos:0,racha:0,puntuacion:0},
    mecanica: {idx:0,aciertos:0,racha:0,puntuacion:0}
  },
  examen: {
    activa: false,
    preguntes: [],
    index: 0,
    aciertos: 0,
    timer: null,
    temps: 1800
  },
  sit: {
    clima: {idx:0,aciertos:0,puntuacion:0}
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  console.log("GasDrive V8.4 CA carregat");
  actualizarCoins();
  carregarPregunta('general');
  carregarPregunta('senyals');
  carregarPregunta('normes');
  carregarPregunta('mecanica');
  carregarSituacio('clima');
  actualizarMensajeMotivacional();
}

function guardar() {
  localStorage.setItem('gd_coins', estat.coins);
  localStorage.setItem('gd_coches', JSON.stringify(estat.coches));
  localStorage.setItem('gd_accesorios', JSON.stringify(estat.accesorios));
  localStorage.setItem('gd_emojis', JSON.stringify(estat.emojis));
}

function actualizarCoins() {
  const el = document.getElementById('coins');
  if(el) el.textContent = `💰 ${estat.coins}`;
}

function cambiarTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-' + tab).classList.add('active');
  event.target.closest('.tab-btn').classList.add('active');
  if(tab === 'garage') carregarGarage();
  if(tab === 'tienda') carregarTienda();
  if(tab === 'tips') carregarTips();
  if(tab === 'test') carregarPregunta('general');
  if(tab === 'situacions') carregarSituacio('clima');
}

function cambiarSubTab(tab, subtab) {
  const contenedor = document.getElementById('tab-' + tab);
  contenedor.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
  contenedor.querySelectorAll('.sub-content').forEach(c => c.classList.remove('active'));
  event.target.classList.add('active');
  document.getElementById(`${tab === 'test'? 'test' : 'sit'}-${subtab}`).classList.add('active');
  if(tab === 'test') carregarPregunta(subtab);
  if(tab === 'sit') carregarSituacio(subtab);
}

function mostrarEmoji(acierto, elemento) {
  const lista = acierto? EMOJIS_ACIERTO : EMOJIS_FALLO;
  const emoji = lista[Math.floor(Math.random() * lista.length)];
  const span = document.createElement('span');
  span.textContent = emoji;
  span.style.cssText = 'position:absolute;right:12px;top:50%;transform:translateY(-50%);font-size:32px;animation:bounceIn 0.4s;pointer-events:none;z-index:999;';
  elemento.style.position = 'relative';
  elemento.appendChild(span);
  setTimeout(() => span.remove(), 600);
  if(navigator.vibrate) navigator.vibrate(acierto? [30,20,30] : 100);
}

function carregarPregunta(cat) {
  const s = estat.test[cat];
  const preguntes = PREGUNTAS[cat];
  if(!preguntes || preguntes.length === 0) return;
  const p = preguntes[s.idx % preguntes.length];

  const emoji = p.emoji || '📝';
  document.getElementById(`test-${cat}-pregunta`).innerHTML = `${emoji} ${p.q}`;

  document.getElementById(`test-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`test-${cat}-racha`).textContent = s.racha;
  document.getElementById(`test-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`test-${cat}-progress`).style.width = `${((s.idx % preguntes.length)/preguntes.length)*100}%`;

  const cont = document.getElementById(`test-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`test-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-test-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { respondreTest(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreTest(cat, idx, el) {
  const s = estat.test[cat];
  const preguntes = PREGUNTAS[cat];
  const p = preguntes[s.idx % preguntes.length];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#test-${cat}-opciones.opcion`).forEach(o => o.classList.add('bloqueada'));
  const correcte = idx === p.ok;

  if(correcte) {
    el.classList.add('correcta');
    s.aciertos++;
    s.racha++;
    s.puntuacion += 10 + (s.racha * 2);
    estat.coins += 5;
    document.getElementById(`test-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`test-${cat}-feedback`).textContent = `✅ CORRECTE! +${10+(s.racha*2)} pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#test-${cat}-opciones.opcion`)[p.ok].classList.add('correcta');
    document.getElementById(`test-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`test-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
    s.racha = 0;
  }
  document.getElementById(`btn-sig-test-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function seguentTest(cat) {
  estat.test[cat].idx++;
  carregarPregunta(cat);
}

function carregarSituacio(cat) {
  const s = estat.sit[cat];
  const casos = SITUACIONS[cat];
  if(!casos || casos.length === 0) return;
  const p = casos[s.idx % casos.length];

  const emoji = p.emoji || '🚦';
  document.getElementById(`sit-${cat}-pregunta`).innerHTML = `${emoji} ${p.q}`;

  document.getElementById(`sit-${cat}-aciertos`).textContent = s.aciertos;
  document.getElementById(`sit-${cat}-score`).textContent = s.puntuacion;
  document.getElementById(`sit-${cat}-progress`).style.width = `${((s.idx % casos.length)/casos.length)*100}%`;

  const cont = document.getElementById(`sit-${cat}-opciones`);
  cont.innerHTML = '';
  document.getElementById(`sit-${cat}-feedback`).textContent = '';
  document.getElementById(`btn-sig-sit-${cat}`).disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { respondreSituacio(cat, i, this); };
    cont.appendChild(div);
  });
}

function respondreSituacio(cat, idx, el) {
  const s = estat.sit[cat];
  const casos = SITUACIONS[cat];
  const p = casos[s.idx % casos.length];
  if(el.classList.contains('bloqueada')) return;

  document.querySelectorAll(`#sit-${cat}-opciones.opcion`).forEach(o => o.classList.add('bloqueada'));
  const correcte = idx === p.ok;

  if(correcte) {
    el.classList.add('correcta');
    s.aciertos++;
    s.puntuacion += 15;
    estat.coins += 10;
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback acierto';
    document.getElementById(`sit-${cat}-feedback`).textContent = `✅ CORRECTE! +15 pts`;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll(`#sit-${cat}-opciones.opcion`)[p.ok].classList.add('correcta');
    document.getElementById(`sit-${cat}-feedback`).className = 'feedback fallo';
    document.getElementById(`sit-${cat}-feedback`).textContent = '❌ FALLO';
    mostrarEmoji(false, el);
  }
  document.getElementById(`btn-sig-sit-${cat}`).disabled = false;
  actualizarCoins();
  guardar();
}

function seguentSituacio(cat) {
  estat.sit[cat].idx++;
  carregarSituacio(cat);
}

function iniciarExamen() {
  const totes = [
 ...PREGUNTAS.general,
 ...PREGUNTAS.senyals,
 ...PREGUNTAS.normes,
 ...PREGUNTAS.mecanica,
 ...SITUACIONS.clima
  ];
  if(totes.length < 30) {
    alert('Falten preguntes. Necessites 30 mínim.');
    return;
  }
  estat.examen.preguntes = totes.sort(() => 0.5 - Math.random()).slice(0, 30);
  estat.examen.activa = true;
  estat.examen.index = 0;
  estat.examen.aciertos = 0;
  document.getElementById('btn-iniciar-examen').style.display = 'none';
  document.getElementById('btn-sig-examen').style.display = 'block';
  iniciarTimerExamen();
  carregarPreguntaExamen();
}

function iniciarTimerExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.temps = 1800;
  estat.examen.timer = setInterval(() => {
    estat.examen.temps--;
    const min = Math.floor(estat.examen.temps / 60);
    const seg = estat.examen.temps % 60;
    document.getElementById('examen-timer').textContent =
      `${min.toString().padStart(2,'0')}:${seg.toString().padStart(2,'0')}`;
    if(estat.examen.temps <= 0) finalitzarExamen();
  }, 1000);
}

function carregarPreguntaExamen() {
  if(estat.examen.index >= 30) return finalitzarExamen();
  const p = estat.examen.preguntes[estat.examen.index];

  const emoji = p.emoji || '📝';
  document.getElementById('examen-num').textContent = estat.examen.index + 1;
  document.getElementById('examen-aciertos').textContent = estat.examen.aciertos;
  document.getElementById('examen-progress').style.width = `${(estat.examen.index/30)*100}%`;
  document.getElementById('examen-pregunta').innerHTML = `${emoji} ${p.q}`;

  const cont = document.getElementById('examen-opciones');
  cont.innerHTML = '';
  document.getElementById('btn-sig-examen').disabled = true;

  p.a.forEach((txt, i) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = txt;
    div.onclick = function() { respondreExamen(i, this); };
    cont.appendChild(div);
  });
}

function respondreExamen(idx, el) {
  if(el.classList.contains('bloqueada')) return;
  const p = estat.examen.preguntes[estat.examen.index];
  document.querySelectorAll('#examen-opciones.opcion').forEach(o => o.classList.add('bloqueada'));
  const correcte = idx === p.ok;
  if(correcte) {
    el.classList.add('correcta');
    estat.examen.aciertos++;
    estat.coins += 20;
    mostrarEmoji(true, el);
  } else {
    el.classList.add('incorrecta');
    document.querySelectorAll('#examen-opciones.opcion')[p.ok].classList.add('correcta');
    mostrarEmoji(false, el);
  }
  document.getElementById('btn-sig-examen').disabled = false;
  document.getElementById('examen-aciertos').textContent = estat.examen.aciertos;
  actualizarCoins();
  guardar();
}

function seguentPreguntaExamen() {
  estat.examen.index++;
  if(estat.examen.index >= 30) {
    finalitzarExamen();
  } else {
    carregarPreguntaExamen();
  }
}

function finalitzarExamen() {
  clearInterval(estat.examen.timer);
  estat.examen.activa = false;
  const nota = estat.examen.aciertos;
  const aprovat = nota >= 27;
  const res = document.getElementById('examen-resultat');
  res.style.display = 'block';
  if(aprovat) {
    res.innerHTML = `
      <h2 style="color:#2ecc71">✅ APROVAT!</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Has guanyat +${nota*20} coins</p>
      <button class="btn" onclick="reiniciarExamen()">Fer un altre examen</button>
    `;
    estat.coins += nota * 20;
  } else {
    res.innerHTML = `
      <h2 style="color:#e74c3c">❌ SUSPÈS</h2>
      <p style="font-size:24px">${nota}/30</p>
      <p>Necessites 27 encerts mínim</p>
      <button class="btn" onclick="reiniciarExamen()">Tornar a provar</button>
    `;
  }
  actualizarCoins();
  guardar();
}

function reiniciarExamen() {
  document.getElementById('examen-resultat').style.display = 'none';
  document.getElementById('btn-iniciar-examen').style.display = 'block';
  document.getElementById('btn-sig-examen').style.display = 'none';
  document.getElementById('examen-pregunta').textContent = "Prem Iniciar Examen";
  document.getElementById('examen-opciones').innerHTML = '';
  document.getElementById('examen-num').textContent = '0';
  document.getElementById('examen-aciertos').textContent = '0';
  document.getElementById('examen-progress').style.width = '0%';
  document.getElementById('examen-timer').textContent = '30:00';
}

function carregarGarage() {
  const cont = document.getElementById('garage-lista');
  cont.innerHTML = '';
  let hpTotal = 90;
  estat.accesorios.forEach(id => {
    const acc = ACCESORIS.find(a => a.id === id);
    if(acc) hpTotal += acc.hp;
  });
  document.getElementById('garage-score').textContent = `🏎️ ${hpTotal} CV`;
  COCHES.forEach(coche => {
    const desbloquejat = estat.coches.includes(coche.id);
    const div = document.createElement('div');
    div.className = 'garage-car' + (desbloquejat? '' : ' locked');
    div.innerHTML = `
      <div style="font-size:40px">${coche.emoji}</div>
      <div>${coche.nom}</div>
      <div style="color:#667eea">${coche.cv} CV</div>
      ${!desbloquejat? `<button class="btn-buy" onclick="comprarCoche('${coche.id}')">Comprar ${coche.preu}💰</button>` : '<div style="color:#2ecc71">✓ Propietari</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarCoche(id) {
  const coche = COCHES.find(c => c.id === id);
  if(!coche) return;
  if(estat.coins < coche.preu) {
    alert('No tens suficients coins');
    return;
  }
  estat.coins -= coche.preu;
  estat.coches.push(id);
  guardar();
  actualizarCoins();
  carregarGarage();
}

function carregarTienda() {
  const cont = document.getElementById('emoji-tienda');
  cont.innerHTML = '';
  ACCESORIS.forEach(acc => {
    const comprat = estat.accesorios.includes(acc.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${acc.emoji}</div>
      <div>${acc.nom}</div>
      <div style="color:#667eea">+${acc.hp} CV</div>
      ${!comprat? `<button class="btn-buy" onclick="comprarAccesorio('${acc.id}')">Comprar ${acc.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}
    `;
    cont.appendChild(div);
  });
  EMOJI_TIENDA.forEach(emoji => {
    const comprat = estat.emojis.includes(emoji.id);
    const div = document.createElement('div');
    div.className = 'emoji-item' + (comprat? ' locked' : '');
    div.innerHTML = `
      <div style="font-size:40px">${emoji.emoji}</div>
      <div>${emoji.nom}</div>
      <div style="color:#667eea">Cosmètic</div>
      ${!comprat? `<button class="btn-buy" onclick="comprarEmoji('${emoji.id}')">Comprar ${emoji.preu}💰</button>` : '<div style="color:#2ecc71">✓ Comprat</div>'}
    `;
    cont.appendChild(div);
  });
}

function comprarAccesorio(id) {
  const acc = ACCESORIS.find(a => a.id === id);
  if(!acc) return;
  if(estat.coins < acc.preu) {
    alert('No tens suficients coins');
    return;
  }
  estat.coins -= acc.preu;
  estat.accesorios.push(id);
  guardar();
  actualizarCoins();
  carregarTienda();
}

function comprarEmoji(id) {
  const emoji = EMOJI_TIENDA.find(e => e.id === id);
  if(!emoji) return;
  if(estat.coins < emoji.preu) {
    alert('No tens suficients coins');
    return;
  }
  estat.coins -= emoji.preu;
  estat.emojis.push(id);
  guardar();
  actualizarCoins();
  carregarTienda();
}

function carregarTips() {
  tipsData = TIPS;
  tipActual = 0;
  mostrarTip();
}

function mostrarTip() {
  if (tipsData.length === 0) return;
  const tip = tipsData[tipActual];
  document.getElementById('tip-content').innerHTML = `
    <div class="tip-emoji">${tip.emoji}</div>
    <div class="tip-text">${tip.txt}</div>
  `;
  document.getElementById('tip-counter').textContent = `${tipActual + 1} / ${tipsData.length}`;
}

function seguentTip() {
  tipActual = (tipActual + 1) % tipsData.length;
  mostrarTip();
}

function anteriorTip() {
  tipActual = (tipActual - 1 + tipsData.length) % tipsData.length;
  mostrarTip();
}

function actualizarMensajeMotivacional() {
  const missatges = [
    "Vas per bon camí 💪",
    "Cada fallo et fa més fort 🔥",
    "L'examen DGT és teu 🚗",
    "No paris ara 💎",
    "Concentra't i aprovaràs 👑"
  ];
  const msg = missatges[Math.floor(Math.random() * missatges.length)];
  const el = document.getElementById('motivacio');
  if(el) el.textContent = msg;
}

// REGISTRE SERVICE WORKER
if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
   .then(reg => console.log('SW registrat'))
   .catch(err => console.log('SW error:', err));
  });
     }
