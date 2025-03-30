const documents = [
   //108 heures
   {
    keywords: "108 heures tableau simple suivi",
    link: "./documents/108_heures/tableau_108h_simple.xlsx",
    text: "Tableau simplifié de suivi des 108 heures (fichier xlsx)",
    icon: "✅"
},
{
    keywords: "108 heures tableau détail détaillé suivi",
    link: "./documents/108_heures/tableau-108-heures-detail.xlsx",
    text: "Tableau détaillé de suivi des 108 heures (prise en compte des temps partiels)(fichier xlsx)",
    icon: "✅"
},
{
    keywords: "108 heures répartition JO",
    link: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000034315959/",
    text: "Répartition des 1O8 heures (lien vers LégiFrance)",
    icon: "✅"
},

    //accidents scolaires 
    {
        keywords: "accident scolaire procédure 2024-2025",
        link: "./documents/accidents_scolaires/circulaire-2024-2025_MDP.pdf",
        text: "Procédure accident scolaire année 2024-2025",
        icon: "✅"
    },
    {
        keywords: "accident scolaire déclaration formulaire vierge 2024-2025",
        link: "./documents/accidents_scolaires/Annexe_1_accident_scol_declaration.pdf",
        text: "Formulaire de déclaration d'accident scolaire 2024-2025",
        icon: "✅"
    },
    {
        keywords: "accident scolaire autorisation parentale 2024-2025",
        link: "./documents/accidents_scolaires/autorisation_parentale.pdf",
        text: "Autorisation parentale de communiquer des informations pour une déclaration d'accident scolaire 2024-2025",
        icon: "✅"
    },
    {
        keywords: "incident scolaire déclaration vierge 2024-2025",
        link: "./documents/accidents_scolaires/Annexe_2_incident_degradation_materiel.pdf",
        text: "Formulaire pour une déclaration d'incident scolaire 2024-2025",
        icon: "✅"
    },
    {
        keywords: "incident scolaire bris de lunettes FAQ",
        link: "./documents/accidents_scolaires/bris_lunettes.pdf",
        text: "Bris de lunettes : que faire ?",
        icon: "✅"
    },

    //autorité parentale
    {
        keywords: "autorité parentale FAQ",
        link: "./documents/autorite_parentale/FAQ_autorite_parentale_2025.pdf",
        text: "FAQ sur l'autorité parentale suite à la visio 'RDV des directeurs'",
        icon: "✅"
    },
    {
        keywords: "autorité parentale éduscole guide",
        link: "./documents/autorite_parentale/autoriteparentale.pdf",
        text: "Brochure Eduscol 'L'exercice de l'autorité parentale'",
        icon: "✅"
    },
    {
        keywords: "autorité parentale",
        link: "./autorite_parentale.html",
        text: "Tout sur l'autorité parentale",
        icon: "🗂️"
    },
    //absentéisme
    {
        keywords: "absentéisme note assiduité scolaire",
        link: "./documents/absenteisme/note_IA_MDP.pdf",
        text: "Absentéisme : note du directeur académique",
        icon: "✅"
    },
    {
        keywords: "absentéisme imprimé déclaration assiduité scolaire",
        link: "./documents/absenteisme/imprime_absenteisme_2024-2025.doc",
        text: "Absentéisme : imprimé de défaut d'assiduité scolaire (2024-2025)",
        icon: "✅"
    },
    {
        keywords: "absentéisme fiche réflexe procédure prévention assiduité",
        link: "./documents/absenteisme/Etapes_procedure_absenteisme.pdf",
        text: "Absentéisme : que faire ? Procédure de prévention de l'absentéisme scolaire",
        icon: "✅"
    },
    
    //circonscritpion
    {
        keywords: "plaquette circonscription saran coordonnées",
        link: "./documents/circos/plaquette_saran_2024_2025MDP.pdf",
        text: "Circonscription Orléans-Saran : coordonnées de l'équipe de circonscription",
        icon: "✅"
    },



     //conseil d'école
    {
        keywords: "conseil d'école",
        link: "./conseil_ecole.html",
        text: "Conseil d'école",
        icon: "🗂️"
    },
    {
        keywords: "conseil école relecture compte-rendu note PV procès-verbal",
        link: "lecturePV.html",
        text: "Relecture PV du conseil d'école",
        icon: "✅"
    },
    {
        keywords: "conseil d'école préparer",
        link: "./documents/ordredujour.pdf",
        text: "Conseil d'école : exemples d'ordre du jour pour les 3 conseils de l'année",
        icon: "✅"
    },
    {
        keywords: "conseil d'école PV procès-verbal compte-rendu",
        link: "./documents/PVtype.pdf",
        text: "Conseil d'école : un procès-verbal type",
        icon: "✅"
    },
    {
        keywords: "conseil d'école règlement intérieur exemple",
        link: "./documents/conseil_decole/RI_CE_DSDEN45.docx",
        text: "Conseil d'école : exemple de règlement intérieur (format word)",
        icon: "✅"
    },

    //divers
    {
        keywords: "archive archivage",
        link: "./documents/archivage/tableau_archivageLoiret_ecoles.pdf",
        text: "Archivage : tableau récapitulatif pour l'archivage des documents",
        icon: "✅"
    },
    {
        keywords: "film annuel calendrier agenda",
        link: "./documents/calendrier/le-film-annuel-des-directeurs-d-ecole.pdf",
        text: "Calendrier annuel de la direction d'école",
        icon: "✅"
    },
    {
        keywords: "fait établissement guide",
        link: "./documents/fait_etablissement/faits_etablissement.pdf",
        text: "Guide du Fait établissement : de sa définition à sa déclaration via Arena",
        icon: "✅"
    },
    {
        keywords: "DSDEN organigramme",
        link: "./documents/DSDEN/organigramme-dsden-45_24_25_MDP.pdf",
        text: "Organigramme 2024-2025 de la DSDEN",
        icon: "✅"
    },
    {
        keywords: "fiche frais déplacement",
        link: "./documents/frais/frais_deplacement.pdf",
        text: "fiche de frais de déplacement",
        icon: "✅"
    },
    
    {
        keywords: "sécurité fiche",
        link: "./documents/securite/formulaire_fiche_securite.pdf",
        text: "Formulaire annuel fiche sécurité des écoles (formulaire pdf à remplir)",
        icon: "✅"
    },
    {
        keywords: "pilotage pédagogique rapport IGESR",
        link: "./documents/pilotage_pedagogique/Le_pilotage_pedagogique.pdf",
        text: "Le pilotage pédagogique des écoles par les directrices et directeurs d'école : synthèse du rapport de l'IGESR (août 2024)",
        icon: "✅"
    },

    //équipe éducative
    {
        keywords: "équipe éducative guide",
        link: "./equipe_educative.html",
        text: "Équipe éducative",
        icon: "🗂️"
    },
    {
        keywords: "équipe éducative compte-rendu PV procès-verbal",
        link: "./PV_equipe_educative.html",
        text: "Équipe éducative : le compte rendu",
        icon: "✅"
    },
    {
        keywords: "équipe éducative préparer",
        link: "./prepa_equipe_educative.html",
        text: "Équipe éducative : documents préparatoires",
        icon: "✅"
    },
    {
        keywords: "EBEP fiche accompagnement élèves",
        link: "./documents/equipe_educative/fiche_de_demande_d_accompagnement_premier_degre.pdf",
        text: "EBEP : fiche de demande d'accompagnement pour un EBEP",
        icon: "✅"
    },

    //GDDE
    {
        keywords: "GDDE compte-rendu",
        link: "./documents/GDDE/GDDE_compte-rendu_1_a_12.pdf",
        text: "GDDE : comptes-rendus des réunions du 06 octobre 2022 au 20 janvier 2025",
        icon: "✅"
    },

    //inclusion école inclusive
    {
        keywords: "enseignant referent référent secteur ASH inclusion",
        link: "./documents/inclusion/Secteurs_ENSEIGNANTS_REFERENTS_2024_2025_MDP.pdf",
        text: "Secteur des enseignants référents ASH (2024-2025)",
        icon: "✅"
    },

    
    //maladies contagieuses et éviction
    {
        keywords: "santé éviction scolaire maladies contagieuses gale Conjonctivite Coqueluche Diphtérie Grippe Hépatite Impétigo Pyodermites Streptocoque Scarlatine Angine Méningite Pédiculose Pieds-mains-bouche Rougeole Rubéole Oreillons Teigne Typhoïde Varicelle",
        link: "./documents/sante/evictions-scolaires-pour-maladies-contagieuses.pdf",
        text: "Liste des maladies pour savoir si éviction scolaire ou non (BO N° 8 du 22-02-1990)",
        icon: "✅"
    },
    {
        keywords: "Rougeole",
        text: "Rougeole : éviction scolaire de l'élève : pendant 5 jours à partir du début de l'éruption (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "coqueluche",
        text: "Coqueluche : éviction scolaire de l'élève : 3 à 5 jours après le début du traitement médical selon l’antibiotique prescrit. (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "diphtérie",
        text: "Diphtérie : éviction scolaire de l'élève : retour sur présentation d'un certificat médical (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "gale",
        text: "Gale : éviction scolaire de l'élève : jusqu'à 3 jours après le traitement local (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "hépatite A",
        text: "Hépatite A : éviction scolaire de l'élève : 10 jours après le début de l'ictère ou des signes cliniques (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "impétigo Pyodermites",
        text: "Impétigo (et autres Pyodermites) : éviction scolaire de l'élève si lésions non protégées ; pendant 72 heures après le début de l'antibiothérapie ; pas d'éviction scolaire si lésions protégées (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "streptocoque scarlatine",
        text: "Scarlatine : éviction scolaire de l'élève : jusqu'à 2 jours après le début de l'antibiothérapie (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "streptocoque angine",
        text: "Angine : éviction scolaire de l'élève : jusqu'à 2 jours après le début de l'antibiothérapie (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "méningite bactérienne",
        text: "Méningite bactérienne : éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "rubéole",
        text: "Rubéole : éviction scolaire de l'élève : jusqu'à guérison clinique (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "oreillons",
        text: "Oreillons : éviction scolaire de l'élève : jusqu'à guérison clinique (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "teigne",
        text: "Teigne : éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "typhoïde paratyphoïde",
        text: "Typhoïde et paratyphoïde : éviction scolaire de l'élève : retour sur certificat médical (BO N° 8 du 22-02-1990)",
        icon: "⛔️"
    },
    {
        keywords: "tuberculose",
        text: "Tuberculose : éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🔴"
    },
    {
        keywords: "varicelle",
        text: "Varicelle : pas d'éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },
    {
        keywords: "pieds-mains-bouche",
        text: "Pieds-mains-bouche : pas d'éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },
    {
        keywords: "pédiculose",
        text: "Pédiculose : pas d'éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },
    {
        keywords: "méningite virale",
        text: "Méningite virale : pas d'éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },
    {
        keywords: "grippe",
        text: "Grippe : pas d'éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },
    {
        keywords: "conjonctivite",
        text: "Conjonctivite : pas d'éviction scolaire de l'élève (BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },
    {
        keywords: "peste",
        text: "HUMOUR : Peste : pas d'éviction scolaire de l'élève : même si un élève ennuyeux peut parfois sembler être une peste dans la classe, il est essentiel de l’accepter. L’exclusion n’a jamais été une solution durable. La patience, l’écoute et l’inclusion sont les meilleurs remèdes. (absent du BO N° 8 du 22-02-1990)",
        icon: "🟢"
    },

    //onde
    {
        keywords: "onde changer changement niveau élève",
        link: "./documents/onde/changer_niveau_eleve_onde.pdf",
        text: "Changer le niveau d'un élève dans Onde",
        icon: "✅"
    },
    {
        keywords: "onde changer changement année scolaire",
        link: "./documents/onde/ONDE_changement_annee_2024.pdf",
        text: "Changement d'année scolaire dans Onde",
        icon: "✅"
    },
    {
        keywords: "onde PCS professions catégories socioprofessionnelles",
        link: "./documents/onde/tuto_PCS.pdf",
        text: "Renseigner les PCS dans Onde",
        icon: "✅"
    },
    {
        keywords: "onde doublon élections de parents",
        link: "./documents/onde/onde_supprimer_des_doublons_dans_la_liste_electorale.pdf",
        text: "Onde : supprimer les doublons dans la liste électorale",
        icon: "✅"
    },
    {
        keywords: "onde prévisions effectifs",
        link: "./documents/onde/prevision_effectifs.pdf",
        text: "Prévisions des effectifs dans Onde",
        icon: "✅"
    },
    {
        keywords: "onde passages",
        link: "./documents/onde/onde_les-passages.pdf",
        text: "Les Passages dans Onde",
        icon: "✅"
    },

//pédagogie pilotage programmes scolaires
{
    keywords: "programmes scolaires cycle2 français",
    link: "./documents/programmes_scolaires/programmes_francais_cycle2.pdf",
    text: "Programmes scolaires de français en Cycle 2",
    icon: "✅"
},
{
    keywords: "programmes scolaires cycle2 mathématiques",
    link: "./documents/programmes_scolaires/programmes_math_cycle2.pdf",
    text: "Programmes scolaires de mathématiques en Cycle 2",
    icon: "✅"
},
{
    keywords: "programmes scolaires cycle3 mathématiques",
    link: "./documents/programmes_scolaires/programmes_math_cycle3_2025.pdf",
    text: "Programmes scolaires de mathématiques en Cycle 3",
    icon: "✅"
},
{
    keywords: "programmes scolaires cycle3 français",
    link: "./documents/programmes_scolaires/programmes_francais_cycle3_2025.pdf",
    text: "Programmes scolaires de français en Cycle 3",
    icon: "✅"
},
{
    keywords: "programmes scolaires cycle3 EMS",
    link: "./documents/programmes_scolaires/programme_EMC.pdf",
    text: "Programmes scolaires d'EMC",
    icon: "✅"
},
{
    keywords: "programmes scolaires EVAR vie affective",
    link: "./documents/programmes_scolaires/programme-d-ducation-la-vie-affective-et-relationnelle-l-cole-l-mentaire-199597_0.pdf",
    text: "Programmes scolaires vie affective et relationnelle",
    icon: "✅"
},
{
    keywords: "programmes scolaires aide",
    link: "./documents/programmes_scolaires/aide_appropriation-nouveaux-programmes.pdf",
    text: "Nouveaux programmes 2025 : aide à l'appropriation (diaporama)",
    icon: "✅"
},
{
    keywords: "pilotage pédagogique rapport IGESR",
    link: "./documents/pilotage_pedagogique/rapport-pilotage-pedag_IGESR.pdf",
    text: "Rapport intégral IGESR (pdf) : le pilotage pédagogique des écoles de l'enseignement primaire par les directeurs: état des lieux et perspectives (août 2024)",
    icon: "✅"
},

// Pix Junior
{
    keywords: "pix junior mission fiche",
    link: "https://pix.fr/enseignement-primaire",
    text: "Pix au coeur de l'enseignement du numérique en primaire : présentation et explication",
    icon: "✅"
},

{
    keywords: "pix junior mission fiche traitement de texte",
    link: "./documents/pix_junior/Utiliser_traitement_de_texte.pdf",
    text: "Pix junior : fiche mission : utiliser un traitement de texte",
    icon: "✅"
},
{
    keywords: "pix junior mission fiche recherche sur internet",
    link: "./documents/pix_junior/Rechercher_internet.pdf",
    text: "Pix junior : fiche mission : recherche sur internet",
    icon: "✅"
},
{
    keywords: "pix junior mission fiche données personnelles protéger protection",
    link: "./documents/pix_junior/Proteger_donnees_personnelles.pdf",
    text: "Pix junior : fiche mission : protéger les données personnelles",
    icon: "✅"
},
{
    keywords: "pix junior mission fiche cyberharcèlement",
    link: "./documents/pix_junior/Lutter_cyberharcelement.pdf",
    text: "Pix junior : fiche mission : lutter contre le cyberharcèlement",
    icon: "✅"
},



//redoublement, maintien
{
    keywords: "redoublement maintien poursuite scolarité élève",
    link: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049286365",
    text: "Décret n° 2024-228 du 16 mars 2024 relatif à l'accompagnement pédagogique des élèves et au redoublement",
    icon: "✅"
},

// sécurité 
{
    keywords: "guide élève élèves perturbateur ",
    link: "./documents/securite/Guide_accompagnement_personnels_eleves_perturbateurs_MDP.pdf",
    text: "Guide d'accompagnement des personnels confrontés à des élèves à comportements perturbateurs provoquant des situations difficiles",
    icon: "✅"
},
{
    keywords: "fiche réflexe élève élèves perturbateur ",
    link: "./documents/securite/Fiche_reflexe_tableau_de_bord_MDP.pdf",
    text: "Fiche réflexe : actions pour accompagner un adjoint confronté à des élèves à comportements perturbateurs provoquant des situations difficiles",
    icon: "✅"
},
{
    keywords: "fiche sécurité école publique ",
    link: "./documents/securite/formulaire_fiche_securite.pdf",
    text: "Fiche sécurité école publique annuelle",
    icon: "✅"
},


//sigles et acronymes
    { keywords: "AED AE", text: "Assistant d'Éducation", icon: "👉🏻" },
    { keywords: "AA1D", text: "AA1D : Autorisation d'Absence du 1er Degré", icon: "👉🏻" },
    { keywords: "AESH", text: "AESH : Accompagnant des élèves en situation de handicap (apparu en 2014 en remplacement de AVS)", icon: "👉🏻" },
    { keywords: "ADAGE", text: "ADAGE : Application Dédiée À la Généralisation de l'Éducation artistique et culturelle", icon: "👉🏻" },
    { keywords: "ADATEEP", text: "ADATEEP : Association Départementale pour les Transports Éducatifs de l’Enseignement Public", icon: "👉🏻" },
    { keywords: "AFFELNET", text: "AFFELNET : AFFectation des Elèves par le NET", icon: "👉🏻" },
    { keywords: "AGS", text: "AGS : Ancienneté Générale de Service", icon: "👉🏻" },
    { keywords: "AP", text: "AP : Accompagnement personnalisé", icon: "👉🏻" },
    { keywords: "APC", text: "APC : Activités Pédagogiques Complémentaires", icon: "👉🏻" },
    { keywords: "APADHE", text: "APADHE : Accompagnement Pédagogique A Domicile à l'Hôpital ou à l'Ecole", icon: "👉🏻" },
    { keywords: "APQ", text: "APQ : Activité Physique Quotidienne", icon: "👉🏻" },
    { keywords: "ARENA", text: "ARENA : Accès aux Ressources de l'Éducation Nationale et Académiques", icon: "👉🏻" },
    { keywords: "AS UNSS", text: "AS : Association sportive - UNSS : Union nationale du sport scolaire", icon: "👉🏻" },
    { keywords: "ATSEM", text: "ATSEM : Agent territorial spécialisé des écoles maternelles, accompagne l’enseignant dans ses tâches", icon: "👉🏻" },
    { keywords: "BAOBAC", text: "BAOBAC : BAse d'OBservation des ACcidents scolaires et universitaires", icon: "👉🏻" },
    { keywords: "BO BOEN", text: "BO / BOEN : Bulletin Officiel de l’Éducation Nationale", icon: "👉🏻" },
    { keywords: "ASH", text: "ASH : Adaptation scolaire et Scolarisation des élèves Handicapés", icon: "👉🏻" },
    { keywords: "BI", text: "BI : Bonification Indiciaire", icon: "👉🏻" },
    { keywords: "BD", text: "BD : Brigade Départementale, enseignants remplaçants sur tout le département", icon: "👉🏻" },
    { keywords: "CA", text: "CA : Conseil d’administration", icon: "👉🏻" },
    { keywords: "CAFIPEMF", text: "CAFIPEMF : Certificat d'Aptitude aux Fonctions d'Instituteur ou de Professeur des Ecoles Maître Formateur", icon: "👉🏻" },
    { keywords: "CAPA CAPD", text: "CAPA : Commission Administrative Paritaire Académique - CAPD : Commission Administrative Paritaire Départementale", icon: "👉🏻" },
    { keywords: "CAPES", text: "CAPES : Certificat d’Aptitude au Professorat de l’Enseignement du second degré", icon: "👉🏻" },
    { keywords: "CCAS", text: "CCAS : Centre Communal d’Action Sociale", icon: "👉🏻" },
    { keywords: "citis", text: "citis : Congé pour invalidité temporaire imputable au service", icon: "👉🏻" },
    { keywords: "CDAPH", text: "CDAPH : Commission des droits et de l’autonomie des personnes en situation de handicap", icon: "👉🏻" },
    { keywords: "CDO", text: "CDO : Commission Départementale d'Orientation", icon: "👉🏻" },
    { keywords: "CDOEA", text: "CDOEA : Commission D'Orientation vers les Enseignements Adaptés du second degré", icon: "👉🏻" },
    { keywords: "CE", text: "CE : Chef d’Établissement", icon: "👉🏻" },
    { keywords: "CEDRE", text: "CEDRE : Cycle des Evaluations Disciplinaires Réalisées sur Echantillon", icon: "👉🏻" },
    { keywords: "CHS-CHSCT", text: "CHS : Comité d’Hygiène et de Sécurité - CHSCT : Comité d’Hygiène, de Sécurité et des Conditions de Travail", icon: "👉🏻" },
    { keywords: "CLAS", text: "CLAS : Contrats Locaux d'Accompagnement Scolaire", icon: "👉🏻" },
    { keywords: "CMP", text: "CMP : Centre Médico-Psychologique", icon: "👉🏻" },
    { keywords: "CMPP", text: "CMPP : Centre Médico-PsychoPédagogique", icon: "👉🏻" },
    { keywords: "CMS", text: "CMS : Centre Médico-Scolaire", icon: "👉🏻" },
    { keywords: "CNR", text: "CNR : Conseil National de la Refondation", icon: "👉🏻" },
    { keywords: "CPC", text: "CPC : Conseiller pédagogique de circonscription", icon: "👉🏻" },
    { keywords: "CPD", text: "CPD : Conseiller pédagogique départemental", icon: "👉🏻" },
    { keywords: "CRCN", text: "CRCN : Cadre de Référence des Compétences Numériques", link:"https://eduscol.education.fr/721/evaluer-developper-et-certifier-les-competences-numeriques", icon: "👉🏻" },
    { keywords: "CRPE", text: "CRPE : Concours de Recrutement de Professeurs des Ecoles", icon: "👉🏻" },
    { keywords: "CSSCT", text: "CSSCT : Commission Santé Sécurité et Conditions de Travail (remplace le CHSCT)", icon: "👉🏻" },
    { keywords: "DASEN", text: "DASEN : Directeur académique des services de l’Éducation Nationale" , icon: "👉🏻" },
    { keywords: "DAASEN ADASEN", text: "DAASEN : Directeur Académique Adjoint des Services de l’Éducation Nationale - ADASEN : Adjoint au Directeur Académique des Services de l'Éducation Nationale", icon: "👉🏻"  },
    { keywords: "DAR", text: "DAR :Dispositif d'Auto-Régulation", icon: "👉🏻"  },
    { keywords: "DARES", text: "DARES : Direction de l’animation de la recherche, des études et des statistiques", icon: "👉🏻"  },
    { keywords: "DDEN", text: "DDEN : Délégué Départemental de l'Education Nationale", icon: "👉🏻"  },
    { keywords: "DEA", text: "DEA : Directeur d’École d’Application", icon: "👉🏻"  },
    { keywords: "DGESCO", text: "DGESCO : Direction Générale de l’Enseignement SCOlaire", icon: "👉🏻"  },
    { keywords: "DHG", text: "DHG : Dotation horaire globale", icon: "👉🏻"  },
    { keywords: "DEPP", text: "DEPP : Direction de l’Évaluation, de la Prospective et de la Performance", icon: "👉🏻"  },
    { keywords: "Diapre", text: "Diapre : Données Individuelles Anonymes du PREmier degré", icon: "👉🏻"  },
    { keywords: "DITEP", text: "DITEP : Dispositif intégré des Instituts Thérapeutiques, Éducatifs et Pédagogiques", icon: "👉🏻"  },
    { keywords: "DIVEL", text: "DIVEL : DIVision des ÉLeves", icon: "👉🏻"  },
    { keywords: "DRANE", text: "DRANE : Délégation de Région Académique au Numérique Educatif", icon: "👉🏻"  },
    { keywords: "DSDEN", text: "DSDEN : Direction des Services Départementaux de l’Éducation Nationale (dirigée par un DASEN)", icon: "👉🏻"  },
    { keywords: "DUERP", text: "DUERP : Document Unique d'Évaluation des Risques Professionnels", icon: "👉🏻"  },
    { keywords: "PAM", text: "PAM : Pâte à modeler", icon: "👉🏻"  },
    { keywords: "Éclair", text: "Éclair : Écoles, Collèges, Lycées pour l’Ambition, l’Innovation et la Réussite" , icon: "👉🏻" },
    { keywords: "E3D", text: "E3D : École en Démarche de Développement Durable", icon: "👉🏻"  },
    { keywords: "EANA", text: "EANA : Élève Allophone Nouvellement Arrivé", icon: "👉🏻"  },
    { keywords: "ECECA", text: "ECECA : Élections aux Conseils d’École et aux Conseils d’Administration", icon: "👉🏻"  },
    { keywords: "EE", text: "EE : Équipe Éducative", icon: "👉🏻"  },
    { keywords: "EGPA", text: "EGPA : Enseignements Généraux et Professionnels Adaptés dans le second degré", icon: "👉🏻"  },
    { keywords: "EMAS", text: "EMAS : Equipe Mobile Académique de Sécurité", icon: "👉🏻"  },
    { keywords: "EMC", text: "EMC : Enseignement Moral et Civique", icon: "👉🏻"  },
    { keywords: "EMI", text: "EMI : Éducation aux Médias et à l'Information", icon: "👉🏻"  },
    { keywords: "EMICEA", text: "EMICEA : Equipe Mobile d’Intervention et de Crise en faveur des Enfants et des Adolescents", icon: "👉🏻"  },
    { keywords: "EMILE", text: "EMILE : Enseignement des Matières par l'Intégration d'une Langue Étrangère", icon: "👉🏻"  },
    { keywords: "EMR", text: "EMR : Équipe Mobile Ressource", icon: "👉🏻"  },
    { keywords: "ENT", text: "ENT : Environnement numérique de travail", icon: "👉🏻"  },
    { keywords: "EP", text: "EP : Éducation Prioritaire", icon: "👉🏻"  },
    { keywords: "EPI", text: "EPI : Enseignement Pratique Interdisciplinaire", icon: "👉🏻"  },
    { keywords: "EPLE", text: "EPLE : Établissement Public Local d’Enseignement", icon: "👉🏻"  },
    { keywords: "ESPE", text: "ESPE : École Supérieure du Professorat et de l’Éducation (remplacée par les INSPE en 2019)", icon: "👉🏻"  },
    { keywords: "ERESH", text: "ERSEH : Enseignant Référent pour les Élèves en Situation de Handicap", icon: "👉🏻"  },
    { keywords: "ERUN", text: "ERUN : Enseignant Référent pour les Usages du Numérique", icon: "👉🏻"  },
    { keywords: "ESMS", text: "ESMS : Établissement et Services Médico-Sociaux", icon: "👉🏻"  },
    { keywords: "ESS", text: "ESS : Équipe de Suivi de Scolarisation", icon: "👉🏻"  },
    { keywords: "ETP", text: "ETP : Equivalent Temps Plein", icon: "👉🏻"  },
    { keywords: "EREA", text: "EREA : Établissement Régional d’Enseignement Adapté", icon: "👉🏻"  },
    { keywords: "EVAR EVARS", text: "EVAR : Éducation à la Vie Affective et Relationnelle (école) - EVARS : Éducation à la Vie Affective et Relationnelle, et à la Sexualité (collège)", icon: "👉🏻"  },
    { keywords: "FCPE", text: "FCPE : Fédération des Conseils de Parents d’Élèves", icon: "👉🏻"  },
    { keywords: "FIJAISV", text: "FIJAISV : FIchier Judiciaire Automatisé des auteurs d'Infractions Sexuelles ou Violentes", icon: "👉🏻"  },
    { keywords: "FOAD", text: "FOAD : Formation Ouverte et/ou À Distance", icon: "👉🏻"  },
    { keywords: "GDDE", text: "GDDE : Groupe Départemental des Directeurs d'École", icon: "👉🏻" },
    { keywords: "GEVASCO", text: "GEVASCO : Guide d’EVAluation des besoins de compensation en matière de SCOlarisation", icon: "👉🏻"  },
    { keywords: "HSA HSE", text: "Heure Supplémentaire Annuelle / effective", icon: "👉🏻"  },
    { keywords: "HPI", text: "HPI : Haut Potentiel Intellectuel", link: "https://www.psychologue.net/articles/haut-potentiel-intellectuel-hpi-11-signes-pour-le-detecter", icon: "👉🏻"  },
    { keywords: "IA-IPR", text: "IA-IPR : Inspecteur d’Académie – Inspecteur Pédagogique Régional", icon: "👉🏻"  },
    { keywords: "IEN", text: "IEN : Inspecteur de l’Éducation Nationale (en charge d’une circonscription du premier degré)", icon: "👉🏻"  },
    { keywords: "IME", text: "IME : Institut Médico-Éducatif", icon: "👉🏻"  },
    { keywords: "IMP", text: "IMP : Indemnité pour Mission Particulière (apparue en 2015)", icon: "👉🏻"  },
    { keywords: "INE", text: "INE : Identifiant National Elève", icon: "👉🏻"  },
    { keywords: "INSPÉ inspe", text: "INSPE : Institut National Supérieur du Professorat et de l’Éducation (anciennement ESPE et IUFM)", icon: "👉🏻"  },
    { keywords: "IO", text: "IO : Instructions officielles", icon: "👉🏻"  },
    { keywords: "IPS", text: "IPS : Indice de Position Sociale", icon: "👉🏻"  },
    { keywords: "ISAE", text: "ISAE : Indemnité de Suivi et d’Accompagnement des Élèves", icon: "👉🏻"  },
    { keywords: "ISSR", text: "ISSR : Indemnité de Sujétion Spéciale de Remplacement", icon: "👉🏻"  },
    { keywords: "ITEP", text: "ITEP : Institut Thérapeutique Educatif et Pédagogique", icon: "👉🏻"  },
    { keywords: "LADE", text: "LADE: Liste d’Aptitude aux fonctions de Directeur d’Ecole", icon: "👉🏻"  },
    { keywords: "LPI", text: "LPI : Livret de Parcours Inclusif", link: "https://eduscol.education.fr/2506/le-livret-de-parcours-inclusif-lpi",icon: "👉🏻"  },
    { keywords: "LSU", text: "LSU : Livret Scolaire Unique", icon: "👉🏻"  },
    { keywords: "MDA MDPH", text: "MDA : Maison De l'Autonomie - MDPH : Maison Départementale des Personnes en situation de Handicap", icon: "👉🏻"  },
    { keywords: "MAT", text: "MAT : Maître d’accueil temporaire", icon: "👉🏻"  },
    { keywords: "MPP", text: "MPP : Méthode de la Préoccupation Partagée", icon: "👉🏻"  },
    { keywords: "maître E", text: "apporte une aide à dominante pédagogique aux élèves en difficulté", icon: "👉🏻"  },
    { keywords: "maître G", text: "apporte une aide à dominante rééducative aux élèves en difficulté", icon: "👉🏻"  },
    { keywords: "NUMEN", text: "NUMEN : NUMéro Éducation Nationale (numéro unique attribué à chaque personnel du MEN)", icon: "👉🏻"  },
    { keywords: "NAP", text: "NAP : Nouvelles activités périscolaires", icon: "👉🏻"  },
    { keywords: "NAH", text: "NAH : Non Aux Harcèlement", icon: "👉🏻"  },
    { keywords: "NBI", text: "NBI : Nouvelle Bonification Indiciaire", icon: "👉🏻"  },
    { keywords: "NEFLE", text: "NEFLE : Notre École, Faisons-La Ensemble", icon: "👉🏻"  },
    { keywords: "ONDE", text: "ONDE : Outil Numérique pour la Direction d'Ecole", icon: "👉🏻"  },
    { keywords: "PCS", text: "PCS : Profession et Catégories Socioprofessionnelles", icon: "👉🏻"  },
    { keywords: "PAF", text: "PAF : Plan Académique de Formation", icon: "👉🏻"  },
    { keywords: "PAI", text: "PAI : Projet d’Accueil Individualisé", icon: "👉🏻"  },
    { keywords: "PAP", text: "PAP : Plan d’Accompagnement Personnalisé", icon: "👉🏻"  },
    { keywords: "PEAC", text: "PEAC : Parcours d’Éducation Artistique et Culturelle", icon: "👉🏻"  },
    { keywords: "PDEI", text: "PDEI : Pôle Départemental de l'Ecole Inclusive", icon: "👉🏻"  },
    { keywords: "PEDT", text: "PEDT : Projet EDucatif Territorial", icon: "👉🏻"  },
    { keywords: "PE", text: "PE : Professeur des Écoles", icon: "👉🏻"  },
    { keywords: "PEMF", text: "PEMF : Professeur des écoles Maître formateur", icon: "👉🏻"  },
    { keywords: "phare", text: "pHARe : Prévenir le Harcèlement et Agir avec Respect à l’École", icon: "👉🏻"  },
    { keywords: "PISA", text: "PISA : Program for International Student Assessment", icon: "👉🏻"  },
    { keywords: "PP", text: "PP : Professeur principal", icon: "👉🏻"  },
    { keywords: "PMI", text: "PMI : Protection Maternelle Infantile", icon: "👉🏻"  },
    { keywords: "PPMS", text: "Plan Particulier de Mise en Sûreté", icon: "👉🏻"  },
    { keywords: "PDMQC", text: "PDMQC : Plus de maître que de classes", icon: "👉🏻"  },
    { keywords: "PPRE", text: "PPRE : Programme personnalisé de réussite éducative", icon: "👉🏻"  },
    { keywords: "PRIM'OT", text: "PRIM'OT : Primaire Orléans-Tours : ENT du département", icon: "👉🏻"  },
    { keywords: "PPS", text: "PPS : Projet personnalisé de scolarisation (dispositif relevant de la MDPH)", icon: "👉🏻"  },
    { keywords: "Psy-EN", text: "Psychologue de l’Éducation Nationale", icon: "👉🏻"  },
    { keywords: "RAFP", text: "RAFP : Retraite Additionnelle de la Fonction Publique", icon: "👉🏻"  },
    { keywords: "RAR", text: "RAR : Réseaux ambition réussite", icon: "👉🏻"  },
    { keywords: "RASED", text: "RASED : Réseau d’Aides Spécialisées pour les Élèves en Difficulté", icon: "👉🏻"  },
    { keywords: "REAAP", text: "REAAP (Réseaux d'Écoute, d'Appuie et d'Accompagnement des parents)", icon: "👉🏻"  },
    { keywords: "RECT", text: "RECT : Réseaux Egalité des Chances et Territoires", icon: "👉🏻"  },
    { keywords: "REP", text: "REP : Réseaux d'Éducation Prioritaire", icon: "👉🏻"  },
    { keywords: "REP+", text: "REP+ : Réseau d’éducation prioritaire renforcé", icon: "👉🏻"  },
    { keywords: "RGPD", text: "RGPD : Règlement Général sur la Protection des Données", icon: "👉🏻"  },
    { keywords: "RPE", text: "RPE : Représentant de Parents d'Élèves", icon: "👉🏻"  },
    { keywords: "RPI", text: "RPI : Regroupement Pédagogique Intercommunal" , icon: "👉🏻" },
    { keywords: "RRS", text: "RRS : Réseaux de Réussite Scolaire", icon: "👉🏻"  },
    { keywords: "RSST", text: "RSST : Registre de Santé et Sécurité au Travail", icon: "👉🏻"  },
    { keywords: "SAPAD", text: "SAPAD : Services d'Assistance Pédagogique À Domicile", icon: "👉🏻"  },
    { keywords: "SCEREN", text: "SCEREN : Service Culture, Editions, Ressources pour l'Education Nationale (exCNDP)", icon: "👉🏻"  },
    { keywords: "SIAM", text: "SIAM : Système d'Information et d'Aide pour les Mutations", icon: "👉🏻"  },
    { keywords: "SFT", text: "SFT : Supplément Familial de Traitement", icon: "👉🏻"  },
    { keywords: "SSFE", text: "Service Social en Faveur des Elèves", icon: "👉🏻"  },
    { keywords: "SEGPA", text: "SEGPA : Sections d’enseignement général et professionnel adapté", icon: "👉🏻"  },
    { keywords: "SESSAD", text: "SESSAD : Service d’Éducation Spéciale et de Soins À Domicile", icon: "👉🏻"  },
    { keywords: "SIES", text: "SIES : (Sous-direction) des systèmes d’information et des études statistiques", icon: "👉🏻"  },
    { keywords: "SIRIS", text: "SIRIS : Syndicat Intercommunal de Regroupement d'Intérêt Scolaire", icon: "👉🏻"  },
    { keywords: "TICE", text: "TICE : Technologies d'Information et de Communication pour l'Enseignement", icon: "👉🏻"  },
    { keywords: "TBI", text: "TBI : Technologies d'Information et de Communication pour l'Enseignement", icon: "👉🏻"  },
    { keywords: "TNI", text: "TNI : Tableau numérique interactif", icon: "👉🏻"  },
    { keywords: "TDEP", text: "TDEP : Titulaire Départemental", icon: "👉🏻"  },
    { keywords: "TOP", text: "Trouble Oppositionnel avec Provocation", link: "https://www.psychologue.net/articles/quest-ce-que-le-trouble-oppositionnel-avec-provocation-7-symptomes-permettant-de-lidentifier", icon: "👉🏻"  },
    { keywords: "UEE", text: "UEE : Unité d'Enseignement Externalisée", link: "https://ecole-inclusive.sd.ac-dijon.fr/2023/01/02/lunite-denseignement-externalisee-uee-de-quoi-parlons-nous/" },
    { keywords: "VPI", text: "VPI : VideoProjecteur Interactif", icon: "👉🏻"  },
    { keywords: "TND", text: "TND : Trouble du Neuro Développement", icon: "👉🏻"  },
    { keywords: "TSA", text: "TSA : Trouble du Spectre de l'Autisme", icon: "👉🏻"  },
    { keywords: "TSLA", text: "TSLA : Troubles Spécifiques du Langage et des Apprentissages", icon: "👉🏻"  },
    { keywords: "TR TRS", text: "TR : Titulaire de Remplacement - TRS : Titulaire de Remplacement de Secteur", icon: "👉🏻"  },
    { keywords: "UAI RNE", text: "UAI RNE : Unité Administrative Immatriculée dans le Répertoire National des Établissements", icon: "👉🏻"  },
    { keywords: "UEEA", text: "UEEA : Unités d’Enseignement Elémentaire Autisme ", icon: "👉🏻"  },
    { keywords: "ULIS", text: "ULIS : Unité Localisée pour l’Inclusion Scolaire", icon: "👉🏻"  },
    { keywords: "UPE2A UPEAA", text: "UPE2A UPEAA : Unité Pédagogique pour Élèves Allophones Arrivants", icon: "👉🏻"  },
    { keywords: "USEP", text: "USEP : Union Sportive de l'Enseignement du Premier Degré", icon: "👉🏻"  },
    { keywords: "UNSS", text: "UNSS : Union nationale du sport scolaire", icon: "👉🏻"  },
    { keywords: "WISC", text: "WISC : Wechsler Intelligence Scale for Children = échelle d'intelligence de Wechsler pour enfants.", icon: "👉🏻"  },
    { keywords: "ZIL", text: "ZIL : Zone d’Intervention Localisée (enseignants remplaçants sur une circonscription)", icon: "👉🏻"  },
    { keywords: "TDA TDAH", text: "TDA : Troubles De l'Attention - TDAH : Trouble De l'Attention avec Hyperactivité", icon: "👉🏻"  },
    { keywords: "EBEP", text: "EBEP : Élèves à Besoins Éducatifs Particuliers", icon: "👉🏻"  },

//sorties scolaires
{
    keywords: "sortie scolaire taux encadrement",
    link: "./documents/sortie_scolaire/synthese_taux_encadrement_08-2024.pdf",
    text: "Sortie scolaire : taux d'encadrement (août 2024)",
    icon: "✅"
},
{
    keywords: "sortie scolaire formulaire autorisation",
    link: "./documents/sortie_scolaire/formulaire_sortie_sans_nuitee.pdf",
    text: "Sortie scolaire : formulaire de demande d'autorisation de sortie scolaire sans nuitée",
    icon: "✅"
},

//poursuite de la scolarité
{
    keywords: "poursuite de la scolarité",
    link: "./poursuite_scolarite.html",
    text: "Poursuite de la scolarité",
    icon: "🗂️"
}
];

// Exporte les données si utilisé avec un module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = documents;
}