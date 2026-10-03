// =========================================================================
// INVENTAIRE DES GISEMENTS ET SITES MINÉRALOGIQUES (FRANCE)
// type : "gemme" | "metal" | "mineral" | "fossile"
// "⚠ Position à vérifier" = coordonnées non confirmées par une source :
// à contrôler (Mindat, InfoTerre/BRGM) avant tout déplacement.
// Beaucoup de sites sont fermés, privés ou protégés : renseignez-vous avant d'y aller.
// =========================================================================

const REPERTOIRE_GISEMENTS = [
    // ---------------- AUVERGNE-RHÔNE-ALPES ----------------
    {
        nom: "Mine du Beix (Fluorite Bleue)",
        lat: 45.73, lng: 2.55, type: "mineral",
        details: "Puy-de-Dôme, Saint-Germain-près-Herment (position commune, vérifiée). Fluorite bleue mondialement connue. Mine fermée depuis les années 1970-80 : accès et terrain à vérifier."
    },
    {
        nom: "Gisement d'Améthyste des Vernets",
        lat: 45.4744, lng: 3.4475, type: "gemme",
        details: "⚠ Position à vérifier. Puy-de-Dôme (Vernets-Chaméane). Filon de quartz violet (améthyste)."
    },
    {
        nom: "Mine de Buxières-les-Mines (Fluorite & Quartz)",
        lat: 46.4632, lng: 2.9612, type: "mineral",
        details: "⚠ Position à vérifier. Allier. Fluorite jaune et violette avec micro-cristaux de quartz."
    },
    {
        nom: "Lantignié - Filon du Verdy (Fluorite & Wulfénite)",
        lat: 46.1601, lng: 4.6225, type: "mineral",
        details: "⚠ Position à vérifier. Rhône. Barytine, wulfénite en micro-cristaux, fluorite violette."
    },
    {
        nom: "Glacier de Talèfre (Quartz Enfumé & Fluorite Rose)",
        lat: 45.9185, lng: 6.9942, type: "mineral",
        details: "⚠ Position à vérifier. Haute-Savoie (Mont-Blanc). Haute montagne, accès difficile. Prélèvement réglementé : se renseigner."
    },
    {
        nom: "Mines de plomb argentifère de Pontgibaud",
        lat: 45.83, lng: 2.87, type: "metal",
        details: "⚠ Position approx. (commune). Puy-de-Dôme. Ancien district de plomb argentifère, parmi les plus importants de France au XIXe siècle."
    },

    // ---------------- NOUVELLE-AQUITAINE ----------------
    {
        nom: "Carrières de Frontenac (Calcaire & Fossiles)",
        lat: 44.7381, lng: -0.1622, type: "fossile",
        details: "⚠ Position à vérifier. Gironde. Calcaire à astéries, fossiles marins. Carrières souvent privées/actives."
    },
    {
        nom: "Cestas - Affleurements du Burdigalien",
        lat: 44.7441, lng: -0.6812, type: "fossile",
        details: "⚠ Position à vérifier. Gironde. Fossiles marins du Miocène (gastéropodes, bivalves)."
    },
    {
        nom: "Lignites d'Hostens",
        lat: 44.4915, lng: -0.6392, type: "fossile",
        details: "⚠ Position à vérifier. Gironde. Ancienne exploitation de lignite réhabilitée. Présence d'ambre non confirmée."
    },
    {
        nom: "Pegmatites de Chanteloube (Tourmaline & Béryl)",
        lat: 45.9984, lng: 1.4114, type: "mineral",
        details: "⚠ Position à vérifier. Haute-Vienne. Pegmatites : tourmaline noire, grenats, apatite. Accès à vérifier."
    },

    // ---------------- SUD & PYRÉNÉES ----------------
    {
        nom: "Mine de Fontsante (Fluorite & Célestine)",
        lat: 43.4485, lng: 6.8122, type: "mineral",
        details: "⚠ Position à vérifier (la localisation exacte dans le Var est incertaine). Fluorite verte et jaune."
    },
    {
        nom: "Estaing (Grenats Almandins)",
        lat: 42.9324, lng: -0.1784, type: "mineral",
        details: "⚠ Position et minéral à vérifier. Hautes-Pyrénées. Zone proche du Parc National des Pyrénées."
    },
    {
        nom: "Mine de Trimouns (Talc & Terres rares)",
        lat: 42.7981, lng: 1.7824, type: "mineral",
        details: "⚠ Position à vérifier. Ariège. Carrière de talc EN ACTIVITÉ : accès interdit au public."
    },
    {
        nom: "Vallée d'Arrens (65) - Quartz légèrement fumé",
        lat: 42.97, lng: -0.21, type: "mineral",
        details: "⚠ Zone approx. Quartz incolore légèrement fumé sur granodiorite. Parc national proche."
    },
    {
        nom: "Massif du Néouvielle (65)",
        lat: 42.80, lng: 0.10, type: "mineral",
        details: "Axinite, préhnite, quartz, épidote. RÉSERVE NATURELLE : prélèvement INTERDIT."
    },
    {
        nom: "Mines d'Argelès-Gazost (65)",
        lat: 43.00, lng: -0.09, type: "metal",
        details: "⚠ Zone approx. Anciennes mines réputées pour leurs cristaux. Haldes dangereuses."
    },
    {
        nom: "Mines de Pierrefitte-Nestalas (65)",
        lat: 42.96, lng: -0.07, type: "metal",
        details: "⚠ Zone approx. Anciennes mines. Prudence, accès parfois interdit."
    },
    {
        nom: "Mines de manganèse de Vielle-Aure (65)",
        lat: 42.79, lng: 0.33, type: "metal",
        details: "⚠ Zone approx. Ancienne exploitation de manganèse (Coustou), vallée d'Aure."
    },

    // ---------------- BRETAGNE, NORD, EST ----------------
    {
        nom: "Plumelin - Landes de Locminé (Staurotides)",
        lat: 47.8612, lng: -2.8841, type: "mineral",
        details: "⚠ Position à vérifier. Morbihan. 'Croix de Bretagne' (macles de staurotide). Champs privés."
    },
    {
        nom: "Mines de Huelgoat-Poullaouen (Plomb argentifère)",
        lat: 48.36, lng: -3.74, type: "metal",
        details: "⚠ Zone approx. Finistère. Anciens grands districts de plomb argentifère."
    },
    {
        nom: "Sainte-Marie-aux-Mines (Argent & Cobalt)",
        lat: 48.2472, lng: 7.1841, type: "metal",
        details: "⚠ Position à vérifier. Haut-Rhin (Vosges). Ancien district minier : micro-minéraux, minerais d'argent."
    }
];
