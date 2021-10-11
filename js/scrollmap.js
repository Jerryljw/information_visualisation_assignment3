
mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlsdW9qaWF3ZWkiLCJhIjoiY2t0M3c4dHh0MGNvNTJ2czBxZzBucXFpdCJ9.8xcx_a2UWKPMKVgDaRxjGA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [144.965921, -37.835234],
    zoom: 11.61,
    bearing: 0,
    pitch: 25,
    interactive: false,
});

const chapters = {
    'city-circle-tram': {
        locations:{
            bearing: -10.82,
            center: [144.956221, -37.814378],
            zoom: 13.87,
            pitch: 47.51,
        },
        layer: {
            route: {
                "id":"jerryluojiawei.bhbyhqip",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.bhbyhqip"
                },
                "source-layer": "City_Circle_tram_route-3yiao0",
                "paint": {
                    'line-color':"#6A51A4",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
            },
            stops: {
                "id":"jerryluojiawei.bbm7j752",
                "type": "circle",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.bbm7j752"
                },

                "source-layer": "City_Circle_tram_stops-bwiu9r",
                "paint": {
                    'circle-color': "#6A51A4"
                }
            }
        }
    },
    'tram-track': {
        locations:{
            center: [144.962015, -37.818984],
            bearing: 35.55,
            zoom: 12.53,
            pitch: 31.52
        }
    },
    'metro-train-with-acc': {
        locations:{
            bearing: 0,
            center: [145.301037, -38.008581],
            zoom: 8.38,
            pitch: 0
        }
    },
    'bike-share-dock': {
        locations:{
            bearing: 0,
            center: [144.987105, -37.831600],
            zoom: 11.75,
            pitch: 0
        }
    },
    'taxi-ranks': {
        locations:{
            bearing: 0,
            center: [144.979107, -37.821317],
            zoom: 11.98,
            pitch: 0,
        }
    },
    'bicycle-routes': {
        locations:{
            bearing: 0,
            center: [144.963218, -37.812152],
            zoom: 11.75,
            pitch: 0,
        }
    },
};

let activeChapterName = 'city-circle-tram';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName].locations);

    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');

    activeChapterName = chapterName;
}
function setActiveMapElements(chapterName){

}
function deActiveMapElements(chapterName){
    
}

function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// On every scroll event, check which element is on screen
map.on("load", async function(){

    for (const chapterName in chapters) {
        if (isElementOnScreen(chapterName)) {
            if(chapterName=="city-circle-tram"){
                console.log("add tram");
                map.addLayer(chapters[chapterName].layer.route)
                map.addLayer(chapters[chapterName].layer.stops)
            }
        }
    }
})
window.onscroll = () => {
    for (const chapterName in chapters) {
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};
