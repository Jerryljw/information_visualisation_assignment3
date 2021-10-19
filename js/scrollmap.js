
mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlsdW9qaWF3ZWkiLCJhIjoiY2t0M3c4dHh0MGNvNTJ2czBxZzBucXFpdCJ9.8xcx_a2UWKPMKVgDaRxjGA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    bearing: -10.82,
    center: [144.956221, -37.814378],
    zoom: 13.87,
    pitch: 47.51,
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
        layers: {
            'route': {
                "id":"city-circle-tram-route",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.bhbyhqip"
                },
                "source-layer": "City_Circle_tram_route-3yiao0",
                "paint": {
                    'line-color':"#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
            },
            'stops': {
                "id":"city-circle-tram-stops",
                "type": "circle",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.bbm7j752"
                },

                "source-layer": "City_Circle_tram_stops-bwiu9r",
                "paint": {
                    'circle-color': "#336699"
                }
            },
        }
    },
    'tram-24hours': {
        locations:{
            center: [144.962015, -37.818984],
            bearing: 35.55,
            zoom: 13.53,
            pitch: 31.52
        },
        layers: {
            
            'tracks':{
                "id":"tram-24hours-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9973anzf"
                },

                "source-layer": "Tram_tracks-71l9ar",
                "paint": {
                    'line-color':"#99CCCC",
                    'line-width': 1,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
            },
            'stops': {
                "id":"tram-24hours-stops",
                "type": "circle",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.bbm7j752"
                },

                "source-layer": "City_Circle_tram_stops-bwiu9r",
                "paint": {
                    'circle-color': "#336699"
                }
            },
        }
    },
    'bus-week': {
        locations:{
            bearing: 0,
            center: [144.954435, -37.812391],
            zoom: 13.17,
            pitch: 38.50
        },layers: {
            'stops': {
                "id":"bus-week-stops",
                "type": "circle",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9a3elxg9"
                },

                "source-layer": "Bus_stops-56p3vi",
                "paint": {
                    'circle-color': "#336699"
                }
            },
        }
    },
    'bus-day': {
        locations:{
            bearing: 0,
            center: [144.954435, -37.812391],
            zoom: 13.17,
            pitch: 38.50
        },layers: {
            
            'tracks':{
                "id":"bus-day-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9973anzf"
                },

                "source-layer": "Tram_tracks-71l9ar",
                "paint": {
                    'line-color':"#99CCCC",
                    'line-width': 1,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
            },
            'stops': {
                "id":"bus-day-stops",
                "type": "circle",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9a3elxg9"
                },

                "source-layer": "Bus_stops-56p3vi",
                "paint": {
                    'circle-color': "#336699"
                }
            },
        }
    },
    'bike-trends': {
        locations:{
            bearing: 0,
            center: [144.979107, -37.821317],
            zoom: 11.98,
            pitch: 0,
        },layers: {
            'tracks':{
                "id":"bike-trends-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.cawqtvzn"
                },

                "source-layer": "Bicycle_routes_including_info-dplwcs",
                "paint": {
                    'line-color':"#99CCCC",
                    'line-width': 1,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
            },
        }
    },
    'bike-ranks': {
        locations:{
            bearing: 0,
            center: [144.963218, -37.812152],
            zoom: 11.75,
            pitch: 0,
        },layers: {
            'tracks':{
                "id":"bike-ranks-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.cawqtvzn"
                },

                "source-layer": "Bicycle_routes_including_info-dplwcs",
                "paint": {
                    'line-color':"#99CCCC",
                    'line-width': 1,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                    },
            },
            'stops': {
                "id":"bike-ranks-stops",
                "type": "circle",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.blpda6yl"
                },

                "source-layer": "Bike_Share_Dock_Locations-aqe7lo",
                "paint": {
                    'circle-color': "#336699"
                }
            },
        }
    },
};

// first active element
let activeChapterName = 'city-circle-tram';
// set active elements
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName].locations);

    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');
    
    for(const l in chapters[activeChapterName].layers){
        const deActiveLayerId = chapters[activeChapterName].layers[l].id;
        map.setLayoutProperty(deActiveLayerId, 'visibility', 'none');
    }
    activeChapterName = chapterName;
    for(const l in chapters[activeChapterName].layers){
        const ActiveLayerId = chapters[activeChapterName].layers[l].id;
        map.setLayoutProperty(ActiveLayerId, 'visibility', 'visible');
    }
}
// add active map element
function addActiveMapElements(chapterName){
    for(const l in chapters[chapterName].layers) {
        map.addLayer(chapters[chapterName].layers[l]);
    }
    console.log(document.getElementsByClassName("active")[0].attributes.id.value);
}
// add non-active map element
function addDeActiveMapElements(chapterName){
    for(const l in chapters[chapterName].layers) {
        map.addLayer(chapters[chapterName].layers[l]);
        map.setLayoutProperty(chapters[chapterName].layers[l].id, 'visibility', 'none');
    }
}
// check on screen element
function isElementOnScreen(id) {
    const element = document.getElementById(id);
    const bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
// check active element
function isElementActive(name){
    return name === document.getElementsByClassName("active")[0].attributes.id.value
}
// On every scroll event, check which element is on screen
map.on("load", async function(){
    // add layers and inactive layer 
    for (const chapterName in chapters) {
        if (isElementActive(chapterName)) {
            for(const l in chapters[chapterName].layers) {
                map.addLayer(chapters[chapterName].layers[l]);
            }
        }
        else{
            for(const l in chapters[chapterName].layers) {
                map.addLayer(chapters[chapterName].layers[l]);
                map.setLayoutProperty(chapters[chapterName].layers[l].id, 'visibility', 'none');
            }
        }
    }

    // setup onscroll actions
    window.onscroll = () => {
        for (const chapterName in chapters) {
            if (isElementOnScreen(chapterName)) {
                console.log(chapterName);
                setActiveChapter(chapterName);
                break;
            }
        }
    };
})

