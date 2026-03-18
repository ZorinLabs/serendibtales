// Key kingdoms, capitals, and forts throughout Sri Lankan history
export const forts = [
    // ── ANCIENT CAPITALS ──────────────────────────────────────────────
    {
        id: 'cap-tambapanni', title: 'Tambapanni – First Capital',
        startYear: -543, endYear: -377, type: 'capital', era: 'Ancient',
        lat: 8.033, lng: 79.833,
        description: 'The first recorded capital of Sri Lanka, established by Prince Vijaya at Tambapanni on the northwest coast.',
        partiesInvolved: 'Kingdom of Vijaya',
        outcome: 'First Sinhalese capital; foundation of Sri Lankan civilisation',
        sources: ['Mahavamsa, Ch.6']
    },
    {
        id: 'cap-anuradhapura', title: 'Anuradhapura – Ancient Capital',
        startYear: -377, endYear: 1017, type: 'capital', era: 'Ancient',
        lat: 8.3114, lng: 80.4037,
        description: 'The greatest ancient capital of Sri Lanka, seat of Sinhala kings for over 1,300 years. Home to the Sri Maha Bodhi, Ruwanwelisaya, and Jetavanaramaya — the tallest ancient structure in the world at the time.',
        partiesInvolved: 'Anuradhapura Kingdom',
        outcome: 'Centre of Buddhist civilisation; advanced hydraulic irrigation; political heart of ancient Sri Lanka',
        sources: ['Mahavamsa', 'Culavamsa']
    },
    {
        id: 'cap-polonnaruwa', title: 'Polonnaruwa – Medieval Capital',
        startYear: 1056, endYear: 1312, type: 'capital', era: 'Medieval',
        lat: 7.9403, lng: 81.0188,
        description: 'Second great capital of Sri Lanka. Under Parakramabahu the Great it reached its zenith — featuring the famous Gal Vihara rock carvings, vast reservoirs, and the Parakrama Samudra sea of Parakrama.',
        partiesInvolved: 'Polonnaruwa Kingdom',
        outcome: 'Golden age of medieval Lankan civilisation; great Buddhist monuments; sophisticated water management',
        sources: ['Culavamsa']
    },
    {
        id: 'cap-dambadeniya', title: 'Dambadeniya – Transitional Capital',
        startYear: 1232, endYear: 1272, type: 'capital', era: 'Medieval',
        lat: 7.4714, lng: 80.1078,
        description: 'Transitional capital established after the abandonment of Polonnaruwa following the invasion of Kalinga Magha. The sacred Tooth Relic was housed here.',
        partiesInvolved: 'Dambadeniya Kingdom',
        outcome: 'Refuge capital; Tooth Relic preserved; Sinhala resistance maintained',
        sources: ['Culavamsa']
    },
    {
        id: 'cap-kotte', title: 'Sri Jayawardenepura Kotte – Kingdom of Kotte',
        startYear: 1412, endYear: 1565, type: 'capital', era: 'Medieval',
        lat: 6.8908, lng: 79.9023,
        description: 'The last great Sinhalese lowland kingdom before European colonisation. Under Parakramabahu VI it achieved the last full unification of the island.',
        partiesInvolved: 'Kingdom of Kotte',
        outcome: 'Last unification of island c.1450; final Sinhalese lowland capital; fell to Portuguese influence',
        sources: ['Rajavaliya']
    },
    {
        id: 'cap-kandy', title: 'Kandy – Last Independent Kingdom',
        startYear: 1469, endYear: 1815, type: 'capital', era: 'Portuguese',
        lat: 7.2906, lng: 80.6337,
        description: 'The last independent kingdom of Sri Lanka, nestled in the central highlands. It resisted Portuguese, Dutch, and British conquest for over 300 years using the mountainous terrain as a natural fortress. Contains the sacred Temple of the Tooth Relic.',
        partiesInvolved: 'Kingdom of Kandy',
        outcome: 'Survived 300 years of European colonial pressure; fell to British 1815; Kandyan Convention ended independence',
        sources: ['Historical records of Ceylon']
    },
    {
        id: 'cap-jaffna', title: 'Jaffna – Tamil Kingdom Capital',
        startYear: 1215, endYear: 1619, type: 'capital', era: 'Medieval',
        lat: 9.6615, lng: 80.0255,
        description: 'Capital of the Tamil Jaffna Kingdom, which dominated the northern peninsula for four centuries. A major centre of Tamil culture, Shaivite Hinduism, and trade with South India.',
        partiesInvolved: 'Jaffna Kingdom (Arya Chakravarti dynasty)',
        outcome: 'Dominant Tamil political entity in Sri Lanka for 400 years; conquered by Portuguese 1619',
        sources: ['Culavamsa', 'Rajavaliya', 'Portuguese colonial records']
    },
    // ── FORTS ──────────────────────────────────────────────────────────
    {
        id: 'fort-colombo-port', title: 'Colombo Fort – Portuguese/Dutch/British Fortress',
        startYear: 1518, endYear: 1948, type: 'fort', era: 'Portuguese',
        lat: 6.9388, lng: 79.8453,
        description: 'The central fort and seat of colonial power in Sri Lanka for over 400 years. First built by the Portuguese in 1518, expanded by the Dutch, and finally garrisoned by the British until independence.',
        partiesInvolved: 'Portuguese / Dutch VOC / British East India Company',
        outcome: 'Colonial administrative centre; commercial hub; heart of Colombo city',
        sources: ['Portuguese Colonial Records', 'Dutch VOC Records', 'British Colonial Records']
    },
    {
        id: 'fort-galle', title: 'Galle Fort – Dutch Fortification',
        startYear: 1663, endYear: 1948, type: 'fort', era: 'Dutch',
        lat: 6.0297, lng: 80.2167,
        description: 'The best-preserved colonial sea fort in Asia. Built by the Dutch VOC in 1663 over a Portuguese structure, Galle Fort is a UNESCO World Heritage Site featuring 36 hectares of streets, churches, mosques, and colonial buildings within its ramparts.',
        partiesInvolved: 'Dutch VOC; Portuguese; British',
        outcome: 'UNESCO World Heritage Site; major colonial naval base; perfectly preserved historic town',
        sources: ['Dutch VOC Records', 'UNESCO World Heritage List']
    },
    {
        id: 'fort-jaffna', title: 'Jaffna Fort – Portuguese Fortress',
        startYear: 1618, endYear: 1948, type: 'fort', era: 'Portuguese',
        lat: 9.6551, lng: 80.0080,
        description: 'The largest and most important fort in northern Sri Lanka. Built by the Portuguese in 1618, expanded by the Dutch, and used by the British. The fort saw action during the civil war when the LTTE besieged it in 1990.',
        partiesInvolved: 'Portuguese / Dutch VOC / British / Sri Lanka Army',
        outcome: 'Key strategic fortress controlling the Jaffna Peninsula for over 400 years',
        sources: ['Portuguese Colonial Records', 'Sri Lanka Military Records']
    },
    {
        id: 'fort-trincomalee', title: 'Fort Frederick – Trincomalee',
        startYear: 1623, endYear: 1948, type: 'fort', era: 'Portuguese',
        lat: 8.5766, lng: 81.2342,
        description: 'Fort built at the strategic harbour of Trincomalee — one of the finest natural harbours in the world. Fought over by the Portuguese, Dutch, British, and French, it was a key prize in the Indian Ocean imperial rivalries.',
        partiesInvolved: 'Portuguese / Dutch / British / French',
        outcome: 'Strategic control of Trincomalee harbour; repeatedly changed hands among European powers',
        sources: ['Dutch VOC Records', 'British Colonial Records']
    },
    {
        id: 'fort-batticaloa', title: 'Batticaloa Fort – Dutch Fort',
        startYear: 1628, endYear: 1948, type: 'fort', era: 'Dutch',
        lat: 7.7107, lng: 81.6924,
        description: 'Dutch fort on the eastern coast of Sri Lanka, built to control the eastern maritime trade routes and the sandy Batticaloa lagoon area.',
        partiesInvolved: 'Dutch VOC / British',
        outcome: 'Control of eastern coast; Dutch colonial administration hub for the east',
        sources: ['Dutch VOC Records']
    },
    {
        id: 'fort-mannar', title: 'Mannar Fort – Portuguese Fortress',
        startYear: 1560, endYear: 1800, type: 'fort', era: 'Portuguese',
        lat: 8.9744, lng: 79.8858,
        description: 'Star-shaped Portuguese fort at Mannar, controlling the Gulf of Mannar and the pearl fishery — one of the most valuable economic assets of colonial Ceylon.',
        partiesInvolved: 'Portuguese / Dutch VOC',
        outcome: 'Control of Gulf of Mannar pearl fishery; key strategic point between Sri Lanka and India',
        sources: ['Portuguese Colonial Records', 'Dutch VOC Records']
    },
    {
        id: 'fort-matara', title: 'Matara Fort – Dutch Fortification',
        startYear: 1763, endYear: 1948, type: 'fort', era: 'Dutch',
        lat: 5.9446, lng: 80.5373,
        description: 'Star fort built by the Dutch at Matara in the southern coast, protecting the southern maritime trade routes.',
        partiesInvolved: 'Dutch VOC / British',
        outcome: 'Southern coast control; Dutch colonial administrative post',
        sources: ['Dutch VOC Records']
    },
    {
        id: 'fort-sitawaka', title: 'Sitawaka Kingdom – Anti-Portuguese Stronghold',
        startYear: 1521, endYear: 1594, type: 'capital', era: 'Portuguese',
        lat: 6.8000, lng: 80.1700,
        description: 'The Kingdom of Sitawaka, centred near Avissawella, was the most powerful opponent of the Portuguese in Sri Lanka. Under Mayadunne and then Rajasinghe I, it nearly expelled the Portuguese from the entire island.',
        partiesInvolved: 'Sitawaka Kingdom; Mayadunne; Rajasinghe I',
        outcome: 'Greatest resistance to Portuguese colonialism; isolated Portuguese to Colombo alone; expired after Rajasinghe I died',
        sources: ['Rajavaliya', 'Portuguese Colonial Records']
    },
];
