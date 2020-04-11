import Header from '../components/Header';
import About from '../components/About';

function AboutPage({ allPlants }) {
    return (
        <div>
            <Header></Header>
            <About plants={allPlants} />
        </div>
    );
}

export async function getStaticProps() {
    const allPlants = [
        {
            name: 'Cabbage',
            description:
                'Cabbage (comprising several cultivars of Brassica oleracea) is a leafy green, red (purple), or white (pale green) biennial plant grown as an annual vegetable crop for its dense-leaved heads. It is descended from the wild cabbage (B. oleracea var. oleracea), and belongs to the "cole crops" or brassicas, meaning it is closely related to broccoli and cauliflower (var. botrytis); Brussels sprouts (var. gemmifera); and Savoy cabbage (var. sabauda).',
            image: '/Cabbage.jpeg',
            source: 'https://en.wikipedia.org/wiki/Cabbage',
            plantNumber: 1,
        },
        {
            name: 'Kale',
            description:
                'Kale (/keɪl/), or leaf cabbage, belongs to a group of cabbage (Brassica oleracea) cultivars grown for their edible leaves, although some are used as ornamentals. Kale plants have green or purple leaves, and the central leaves do not form a head (as with headed cabbage). Kales are considered to be closer to wild cabbage than most of the many domesticated forms of Brassica oleracea.',
            image: '/Kale.jpg',
            source: 'https://en.wikipedia.org/wiki/Kale',
            plantNumber: 2,
        },
        {
            name: 'Mint',
            description:
                'Mentha (also known as mint, from Greek μίνθα míntha, Linear B mi-ta) is a genus of plants in the family Lamiaceae (mint family).[4] The exact distinction between species is unclear; it is estimated that 13 to 24 species exist. Hybridization occurs naturally where some species range overlap. Many hybrids and cultivars are known.',
            image: 'Mint.jpg',
            source: 'https://en.wikipedia.org/wiki/Mentha',
            plantNumber: 3,
        },
        {
            name: 'Rosemary',
            description:
                'Salvia rosmarinus, commonly known as rosemary, is a woody, perennial herb with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region. Until 2017, it was known by the scientific name Rosmarinus officinalis, now a synonym.',
            image: 'Rosemary.jpg',
            source: 'https://en.wikipedia.org/wiki/Rosemary',
            plantNumber: 4,
        },
        {
            name: 'Thyme',
            description:
                'Thyme (/taɪm/) is any member of the genus Thymus of aromatic perennial evergreen herbs in the mint family Lamiaceae. Thymes are relatives of the oregano genus Origanum. They have culinary, medicinal, and ornamental uses, and the species most commonly cultivated and used for culinary purposes is Thymus vulgaris.',
            image: 'Thyme.jpg',
            source: 'https://en.wikipedia.org/wiki/Thyme',
            plantNumber: 5,
        },
        {
            name: 'Parsley',
            description:
                'Parsley or garden parsley (Petroselinum crispum) is a species of flowering plant in the family Apiaceae that is native to the central Mediterranean region (Cyprus, southern Italy, Greece, Portugal, Spain, Malta, Morocco, Algeria, and Tunisia), but has naturalized elsewhere in Europe, and is widely cultivated as a herb, and a vegetable.',
            image: 'Parsley.jpg',
            source: 'https://en.wikipedia.org/wiki/Parsley',
            plantNumber: 6,
        },
        {
            name: 'Tulip',
            description:
                'Tulips (Tulipa) form a genus of spring-blooming perennial herbaceous bulbiferous geophytes (having bulbs as storage organs). The flowers are usually large, showy and brightly colored, generally red, pink, yellow, or white (usually in warm colors).',
            image: '/Tulip.jpg',
            source: 'https://en.wikipedia.org/wiki/Tulip',
            plantNumber: 7,
        },
        {
            name: 'Pansies',
            description:
                'The garden pansy is a type of large-flowered hybrid plant cultivated as a garden flower. It is derived by hybridization from several species in the section Melanium ("the pansies") of the genus Viola, particularly Viola tricolor, a wildflower of Europe and western Asia known as heartsease. Some of these hybrids are referred to as Viola × wittrockiana Gams ex Nauenb. & Buttler. For simplicity, the older name Viola tricolor var. hortensis is often used.',
            image: 'Pansy.jpg',
            source: 'https://en.wikipedia.org/wiki/Pansy',
            plantNumber: 8,
        },
        {
            name: 'Dahlia',
            description:
                'Dahlia (UK: /ˈdeɪliə/ or US: /ˈdeɪljə, ˈdɑːl-, ˈdæljə/)[3] is a genus of bushy, tuberous, herbaceous perennial plants native to Mexico and Central America. A member of the Asteraceae (formerly Compositae) family of dicotyledonous plants, its garden relatives thus include the sunflower, daisy, chrysanthemum, and zinnia. ',
            image: '/Dahlia.jpg',
            source: 'https://en.wikipedia.org/wiki/Dahlia',
            plantNumber: 9,
        },
    ];

    return {
        props: {
            allPlants,
        },
    };
}

export default AboutPage;
