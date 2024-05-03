import Typography from '@mui/material/Typography';
import CareerList from '@views/career/careerHistory/careerList/CareerList';

export const listItem = {
    0:
        [
            {
                primary: 'Technicien menuisier agenceur',
                secondary: 'Baccalauréat Profésionnel'
            },
            {
                primary: 'Développeur web et web mobile',
                secondary: 'Titre de niveau 5 (BTS/DUT)'
            },
            {
                primary: 'Concepteur développeur d\'application',
                secondary: 'Titre de niveau 6'
            },
            {
                primary: 'Manager de projet web digital',
                secondary: 'Titre de Niveau 7'
            }
        ],

    1:
        [
            {
                primary: 'BreizhPet56',
                secondary: 'Baccalauréat Profésionnel'
            },
            {
                primary: 'SAIL.cloud',
                secondary: 'Titre de niveau 5 (BTS/DUT)'
            },
            {
                primary: 'Surlo',
                secondary: 'Titre de niveau 6'
            },
        ]
};

export const steps = [
    {
        label: 'Mes études',
        description: [

            {
                excerpt:
                    <Typography sx={{ margin: '8px 0' }}>
                        J'ai débuté mes études avec un Bac professionnel menuisier agenceur.
                        N'ayant pas la passion du métier, je me suis tourné vers une association, la mission locale,
                        pour m'orienter vers une nouvelle voie. Influencé par mes idées liées à l'informatique et à la technologie,
                        j'ai été orienté vers une Prestation d'Orientation Professionnelle.
                        Celle-ci m'a permis d'asseoir ma position sur les métiers de l'informatique,
                        par le biais d'un approfondissement du secteur lors de plusieurs stages.
                    </Typography>
            },

            {
                excerpt:
                    <Typography sx={{ margin: '8px 0' }}>
                        Ainsi, cela m'a permis d'être éligible à ma première formation orientée sur le développement web & web mobile.
                        Cette initiation, condensée sur neuf mois à l'AFPA de Brest,
                        équivalente à un BTS, m'a permis d'acquérir mes premières compétences de développeur web,
                        et d'aiguiser mon sens de l'entreprenariat en démarchant une petite entreprise pour mon stage de fin d'année.
                        Ma proposition était simple, leur offrir une visibilité sur le web en créant leur site vitrine,
                        en échange de trois mois au sein de leur entreprise.
                    </Typography>
            },

            {
                excerpt:
                    <Typography sx={{ margin: '8px 0' }}>
                        Après l'obtention de mon diplôme, j'ai voulu suivre une formation plus poussée sur la conception d'applications.
                        Le COVID se propageant, cette formation a été annulée et a retardé mon apprentissage d'une année.
                        Cependant, cela m'a permis d'être plus ambitieux et d'intégrer une première année de licence au Brest Open Campus,
                        pour ensuite enchaîner sur un Master Manager de projet web digital en deux ans.
                    </Typography>
            }
        ],
        list: <CareerList />
    },
    {
        label: 'Mon alternance',
        description: [
            { excerpt: 'An ad group contains one or more ads which target a shared set of keywords.' }
        ],
        list: <CareerList />
    },
    {
        label: 'À vous de jouez',
        description: [
            {
                excerpt: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
            }
        ],
        list: <CareerList />
    },
];