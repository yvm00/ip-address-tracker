export function createPlacemark(myMap, lat, lng) {
    myMap.geoObjects.add(new ymaps.Placemark([lat, lng], {
            balloonContent: '',
            iconCaption: ''
        }, {
            preset: 'islands#redCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}
