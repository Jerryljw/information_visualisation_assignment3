
	mapboxgl.accessToken = 'pk.eyJ1IjoiamVycnlsdW9qaWF3ZWkiLCJhIjoiY2t0M3c4dHh0MGNvNTJ2czBxZzBucXFpdCJ9.8xcx_a2UWKPMKVgDaRxjGA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/jerryluojiawei/ckum85ixv8r5q18k6y1jn977a/draft',
        center: [144.965921, -37.835234],
        zoom: 11.61,
        bearing: 0,
        pitch: 25
    });
    map.scrollZoom.disable();

    const chapters = {
        'city-circle-tram': {
            bearing: -10.82,
            center: [144.956221, -37.814378],
            zoom: 13.87,
            pitch: 47.51
        },
        'tram-track': {
            center: [144.962015, -37.818984],
            bearing: 35.55,
            zoom: 12.53,
            pitch: 31.52
        },
        'metro-train-with-acc': {
            bearing: 0,
            center: [145.301037, -38.008581],
            zoom: 8.38,
            pitch: 0
        },
        'bike-share-dock': {
            bearing: 0,
            center: [144.987105, -37.831600],
            zoom: 11.75,
            pitch: 0
        },
        'taxi-ranks': {
            bearing: 0,
            center: [144.979107, -37.821317],
            zoom: 11.98,
            pitch: 0,
        },
        'bicycle-routes': {
            bearing: 0,
            center: [144.963218, -37.812152],
            zoom: 11.75,
            pitch: 0,
        },
    };

    let activeChapterName = 'bakecity-circle-tramr';
    function setActiveChapter(chapterName) {
        if (chapterName === activeChapterName) return;

        map.flyTo(chapters[chapterName]);

        document.getElementById(chapterName).classList.add('active');
        document.getElementById(activeChapterName).classList.remove('active');

        activeChapterName = chapterName;
    }

    function isElementOnScreen(id) {
        const element = document.getElementById(id);
        const bounds = element.getBoundingClientRect();
        return bounds.top < window.innerHeight && bounds.bottom > 0;
    }

    // On every scroll event, check which element is on screen
    window.onscroll = () => {
        for (const chapterName in chapters) {
            if (isElementOnScreen(chapterName)) {
                setActiveChapter(chapterName);
                break;
            }
        }
    };
