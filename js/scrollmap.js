
mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlsdW9qaWF3ZWkiLCJhIjoiY2t0M3c4dHh0MGNvNTJ2czBxZzBucXFpdCJ9.8xcx_a2UWKPMKVgDaRxjGA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    bearing: 0.00,
    center: [144.952990, -37.821039],
    zoom: 12.12,
    pitch: 0.00,
    interactive: false,
});

const chapters = {
    'startpageSection': {
        locations: {
            bearing: 0.00,
            center: [144.952990, -37.821039],
            zoom: 12.12,
            pitch: 0.00,
        },
        layers: {
        },
        setting: {
            'chartid': 'start-page',
            'chart': 'show',
        }
    },
    'city-circle-tram': {
        locations: {
            bearing: -10.82,
            center: [144.966221, -37.814378],
            zoom: 13.87,
            pitch: 47.51,
        },
        layers: {
            'route': {
                "id": "city-circle-tram-route",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.bhbyhqip"
                },
                "source-layer": "City_Circle_tram_route-3yiao0",
                "paint": {
                    'line-color': "#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
            },
            'stops': {
                "id": "city-circle-tram-stops",
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
        },
        setting: {
            'chartid': 'circle-chart',
            'chart': 'hide',
        }
    },
    // 'city-circle-chart': {
    //     locations: {
    //         bearing: -10.82,
    //         center: [144.966221, -37.814378],
    //         zoom: 13.87,
    //         pitch: 47.51,
    //     },
    //     layers: {
    //         'route': {
    //             "id": "city-circle-tram-route1",
    //             "type": "line",
    //             "source": {
    //                 "type": "vector",
    //                 "url": "mapbox://jerryluojiawei.bhbyhqip"
    //             },
    //             "source-layer": "City_Circle_tram_route-3yiao0",
    //             "paint": {
    //                 'line-color': "#99CCCC",
    //                 'line-width': 2,
    //             },
    //             'layout': {
    //                 'line-join': 'round',
    //                 'line-cap': 'round'
    //             },
    //         },
    //         'stops': {
    //             "id": "city-circle-tram-stops1",
    //             "type": "circle",
    //             "source": {
    //                 "type": "vector",
    //                 "url": "mapbox://jerryluojiawei.bbm7j752"
    //             },

    //             "source-layer": "City_Circle_tram_stops-bwiu9r",
    //             "paint": {
    //                 'circle-color': "#336699"
    //             }
    //         },
    //     },
    //     setting: {
    //         'chartid': 'circle-chart',
    //         'chart': 'show',
    //     }
    // },
    'tram-24hours': {
        locations: {
            center: [144.962015, -37.818984],
            bearing: 35.55,
            zoom: 13.53,
            pitch: 31.52
        },
        layers: {
            'tracks': {
                "id": "tram-24hours-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9973anzf"
                },

                "source-layer": "Tram_tracks-71l9ar",
                "paint": {
                    'line-color': "#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
            },
            'stops': {
                "id": "tram-24hours-stops",
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
        },
        setting: {
            'chartid': 'tram-chart',
            'chart': 'hide',
        }
    },
    'tram-24hours-chart': {
        locations: {
            center: [144.962015, -37.818984],
            bearing: 35.55,
            zoom: 13.53,
            pitch: 31.52
        },
        layers: {
            'tracks': {
                "id": "tram-24hours-track1",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9973anzf"
                },

                "source-layer": "Tram_tracks-71l9ar",
                "paint": {
                    'line-color': "#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
            },
            'stops': {
                "id": "tram-24hours-stops1",
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
        },
        setting: {
            'chartid': 'tram-combine-chart-div',
            'chart': 'show',
        }
    },
    'bus-week': {
        locations: {
            bearing: 0,
            center: [144.952990, -37.821039],
            zoom: 12.12,
            pitch: 0
        }, layers: {
            'stops': {
                "id": "bus-week-stops",
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
            // 'heatMap': {
            //     'id': 'bus-heat',
            //     'type': 'heatmap',
            //     'source': {
            //         'type': 'geojson',
            //         'data': 'https://raw.githubusercontent.com/ivandon15/NewYork-Data/main/stop.geojson'
            //     },
            //     'maxzoom': 15,
            //     'paint': {

            //         // Increase the heatmap color weight weight by zoom level
            //         // heatmap-intensity is a multiplier on top of heatmap-weight
            //         'heatmap-intensity': [
            //             'interpolate',
            //             ['linear'],
            //             ['zoom'],
            //             0,
            //             1,
            //             15,
            //             3
            //         ],
            //         // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
            //         // Begin color ramp at 0-stop with a 0-transparancy color
            //         // to create a blur-like effect.
            //         'heatmap-color': [
            //             'interpolate',
            //             ['linear'],
            //             ['heatmap-density'],
            //             0,
            //             'rgba(33,102,172,0)',
            //             0.2,
            //             'rgb(103,169,207)',
            //             0.4,
            //             'rgb(209,229,240)',
            //             0.6,
            //             'rgb(253,219,199)',
            //             0.8,
            //             'rgb(239,138,98)',
            //             1,
            //             'rgb(178,24,43)'
            //         ],
            //         // Adjust the heatmap radius by zoom level
            //         'heatmap-radius': [
            //             'interpolate',
            //             ['linear'],
            //             ['zoom'],
            //             0,
            //             2,
            //             9,
            //             20
            //         ],
            //         // Transition from heatmap to circle layer by zoom level
            //         'heatmap-opacity': [
            //             'interpolate',
            //             ['linear'],
            //             ['zoom'],
            //             7,
            //             1,
            //             15,
            //             0
            //         ]
            //     }
            // },
        },
        setting: {
            'chartid': 'bus-week-chart',
            'chart': 'hide',
        }
    },
    'bus-week-chart': {
        locations: {
            bearing: 0.00,
            center: [144.952990, -37.821039],
            zoom: 12.12,
            pitch: 0.00,
        },
        layers: {
        },
        setting: {
            'chartid': 'bus-departures',
            'chart': 'show',
        }
    },
    'bus-day': {
        locations: {
            bearing: 0,
            center: [144.954435, -37.812391],
            zoom: 13.17,
            pitch: 38.50
        }, layers: {

            'tracks': {
                "id": "bus-day-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.9973anzf"
                },

                "source-layer": "Tram_tracks-71l9ar",
                "paint": {
                    'line-color': "#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
            },
            'stops': {
                "id": "bus-day-stops",
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
        },
        setting: {
            'chartid': 'bus-phw',
            'chart': 'show',
        }
    },
    'bus-day-chart': {
        locations: {
            bearing: 0.00,
            center: [144.952990, -37.821039],
            zoom: 12.12,
            pitch: 0.00,
        },
        layers: {
        },
        setting: {
            'chartid': 'bus-spw',
            'chart': 'show',
        }
    },
    'bike-trends': {
        locations: {
            bearing: 0,
            center: [144.943218, -37.812152],
            zoom: 11.75,
            pitch: 0,
        }, layers: {
            'tracks': {
                "id": "bike-trends-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.cawqtvzn"
                },

                "source-layer": "Bicycle_routes_including_info-dplwcs",
                "paint": {
                    'line-color': "#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
            },
        },
        setting: {
            'chartid': 'bike-combine-chart-div',
            'chart': 'show',
        }
    },
    'bike-ranks': {
        locations: {
            bearing: 0,
            center: [144.943218, -37.812152],
            zoom: 11.75,
            pitch: 0,
        }, layers: {
            'tracks': {
                "id": "bike-ranks-tracks",
                "type": "line",
                "source": {
                    "type": "vector",
                    "url": "mapbox://jerryluojiawei.cawqtvzn"
                },

                "source-layer": "Bicycle_routes_including_info-dplwcs",
                "paint": {
                    'line-color': "#99CCCC",
                    'line-width': 2,
                },
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
            },
            'stops': {
                "id": "bike-ranks-stops",
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
        },
        setting: {
            'chartid': 'bike-pie-chart-div',
            'chart': 'show',
        }
    }
};

function showChart(chartid) {
    let x = document.getElementById(chartid);
    x.style.display = "block"

}
function hideChart(chartid) {
    let x = document.getElementById(chartid);
    x.style.display = "none"
}

function setCharts(chapterName, nextChapterName) {
    let chart_setting = chapters[chapterName].setting;
    let next_chart_setting = chapters[nextChapterName].setting;
    if (chart_setting.chart === 'show') {
        hideChart(chart_setting.chartid);
    }

    if (next_chart_setting.chart === 'show') {
        showChart(next_chart_setting.chartid);
    }
}


// first active element
let activeChapterName = 'startpageSection';
// set active elements
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName].locations);

    document.getElementById(chapterName).classList.add('active');
    document.getElementById(activeChapterName).classList.remove('active');

    // set the last chapter inactive
    for (const l in chapters[activeChapterName].layers) {
        const deActiveLayerId = chapters[activeChapterName].layers[l].id;
        map.setLayoutProperty(deActiveLayerId, 'visibility', 'none');
    }
    setCharts(activeChapterName, chapterName)
    // set current chapter active(visible)
    activeChapterName = chapterName;
    for (const l in chapters[activeChapterName].layers) {
        const ActiveLayerId = chapters[activeChapterName].layers[l].id;
        map.setLayoutProperty(ActiveLayerId, 'visibility', 'visible');
    }
}
// add active map element
function addActiveMapElements(chapterName) {
    for (const l in chapters[chapterName].layers) {
        map.addLayer(chapters[chapterName].layers[l]);
    }
    //console.log(document.getElementsByClassName("active")[0].attributes.id.value);
}
// add non-active map element
function addDeActiveMapElements(chapterName) {
    for (const l in chapters[chapterName].layers) {
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
function isElementActive(name) {
    return name === document.getElementsByClassName("active")[0].attributes.id.value
}
// On every scroll event, check which element is on screen
map.on("load", async function () {
    // add layers and inactive layer 
    for (const chapterName in chapters) {
        if (isElementActive(chapterName)) {
            for (const l in chapters[chapterName].layers) {
                map.addLayer(chapters[chapterName].layers[l]);
            }
        }
        else {
            for (const l in chapters[chapterName].layers) {
                map.addLayer(chapters[chapterName].layers[l]);
                map.setLayoutProperty(chapters[chapterName].layers[l].id, 'visibility', 'none');
            }
        }
    }

    // setup onscroll actions
    window.onscroll = () => {
        for (const chapterName in chapters) {
            if (isElementOnScreen(chapterName)) {
                //console.log(chapterName);
                setActiveChapter(chapterName);
                break;
            }
        }
    };
});

