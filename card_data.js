// Schema: CardData { [ [cardImg], cardText, newMapLayerBoolean, [layerName, mapZoom, [mapXY]], mapCustomEffectNumber ] }
// mapCustomEffects are specific map actions, like dropping pins meant for only a single card's display page
var cardData = {
    
    '1':[['images/carrey_crop.png'],"This 1800 Map of India was <a href='https://collections.leventhalmap.org/search/commonwealth:3f462z73w' target='_blank'>published in Philadelphia, PA</a> by Matthew Carey as part of a “General Atlas” during a century when cartography was beginning to establish itself as an important tool for political and societal influence in America.", 0, ["layer_1", 0, [-550,525]], "none"],
    
    '2':[['images/stat_atlas_cover.png'],"Data was being exhibited and displayed in new ways. Susan Schulten writes '<i>forms</i> of communication were playing an <a href='https://press.uchicago.edu/ucp/books/book/chicago/M/bo13141427.html' target='_blank'>increasingly important role in decision making.'</a> There began an 'enduring view of maps as scientific documents, self-evident forms of communication that were independent of interpretation'", 0, ["layer_1", 0, [-550,525]], "none"],
    
    '3':[['images/globe_hand_crop.png'],"We will briefly explore the potential for British and European bias within this map of India and consider the idea that as geographer Jeremy Crampton states, <a href='https://www.nhbs.com/introducing-human-geographies-book' target='_blank'>“Maps frame the narrative.. [and] All maps are political interventions.”</a>", 0, ["layer_1", 0, [-550,525]], "none"],

    '4': [['images/globe_hand_crop.png'],"“An Accurate MAP of HINDOSTAN OR INDIA, from the best AUTHORITIES” was originally released as part of a 1796 textbook “A New Geographical, Historical, and Commercial Grammar;” by historian William Guthrie of London. Carey reproduced the maps as part of his “Carey's American edition of Guthrie's Geography Improved.”", 0, ["layer_1", 1, [-710,755]], "none"],
    
    '5': [['images/globe_hand_crop.png', 'images/guthrie_book_cover.png'],"So, who are “the best AUTHORITIES”? Based on the maps recognition that this is an American Edition of Guthrie’s Geography, published in London, we can interpret that the 'authorities' are of British origin.", 1, 0, "none"],
    
    '6': [['images/EIC_coat_of_arms.png', 'images/company_rule_govt_house.jpg'],"When Guthrie's map 'Hindostan or India' was produced much of India was in a period of “Company Rule” by the British East India Company. At the time Britain was not interested in formally ruling over India and instead wielded control by using the EIC to establish its own government, backed by the British military.", 1, 0, "none"],
    
    '7': [['images/EIC_coat_of_arms.png', 'images/India1765and1805b.jpg'],"In the late eighteenth and into the nineteenth century the territorial boundaries of the East India Company were changing but tended to be along the coasts and Indian Perimeter.", 1, 0, "none"],
    
    '8': [['images/EIC_coat_of_arms.png', 'images/India1837to1857.jpg'],"Continuing into the mid 19th century we can see rapid growth and territorial expansion into central India.", 1, ["layer_4", 4, [60,75]], "none"],
    
    '9': [['images/carrey_crop.png'],"In America there was little threat of international copyright infringement and Carey <a href='https://oshermaps.org/exhibitions/map-commentaries/maine-us-version-best-selling-european-historical-atlas-ca1800' target='_blank'>freely reproduced these British maps.</a>", 0, ["layer_1", 0, [-475,615]], "none"],
    
    '10': [['images/british_pos.png'],"Here we observe 'British Pos' signfiying a broad range of land with a dotted perimeter as a British possesion. This was a transitory time of political and colonial turn-over.", 0, ["layer_1", 2, [-380,720]], "none"],
    
    '11': [['images/little_known_to.png'],"The information that makes it back to English Geographers is likely to be more influenced by British explorers rather than locals who may know the land and it's history more intimately. In fact, the map repeatedly points out areas that are 'Little known to Europeans'", 0, ["layer_1", 2, [-450,570]], "none"],
    
    '12': [['images/little_known_to2.png'],"Again we see an area little known to Europeans. There are many admissions of ignorance within the map itself. The borders are nearly all dotted lines, typically signifiying an estimated boundary, perhaps even a <i>lack</i> of authority.", 0, ["layer_1", 2, [-310,370]], "none"],
    
     '13': [['images/globe_hand_crop.png'],"There are many aspects of this map that reveal potential bias and a European point of view. Directed by British political institutions, the East India Company colonized parts of India and influenced the availability of information to geographers abroad. ", 0, ["layer_1", 0, [-475,615]], "none"],
    
    '14': [['images/globe_hand_crop.png'],"The 'best authorities' that the map proclaims to have been involved are perhaps only the best available, but not the best possible.", 0, ["layer_1", 1, [-710,755]], "none"],
     
}

// '13': [['images/EIC_coat_of_arms.png', 'images/India_2020_map.png'],"India in 2020 still has disputed borders. ", 1, ["layer_5", 3, [50,50]], "none"]