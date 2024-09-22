import { validateIp, createPlacemark, getAdress } from "./helpers";

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('button');

const ipInfo = document.querySelector('#ip');
const locationInfo = document.querySelector('#location');
const timezoneInfo = document.querySelector('#timezone');
const ispInfo = document.querySelector('#isp');

btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIp(ipInput.value)) {
        getAdress(ipInput.value).then(setInfo);
    }
}

function handleKey(event) {
    if (event.key === 'Enter') {
        getData();
    }
}

let yandexMap;

function setInfo(mapData) {
    console.log(mapData);
    const lat = mapData.latitude;
    const lng = mapData.longitude;

    ipInfo.innerText = mapData.ip_address;
    locationInfo.innerText = mapData.country + ' ' + mapData.region;
    timezoneInfo.innerText = mapData.timezone.gmt_offset;
    ispInfo.innerText = mapData.connection.isp_name;

    yandexMap.setCenter([lat, lng]);
    createPlacemark(yandexMap, lat, lng);
}

function createMap() {
    let geolocation = ymaps.geolocation;
    yandexMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10,
        controls: [],
    });

    geolocation
        .get({
            provider: 'browser',
            mapStateAutoApply: true,
        })
        .then(function (result) {
            result.geoObjects.options.set('preset', 'islands#blueCircleIcon');
            yandexMap.geoObjects.add(result.geoObjects);
        });
}

// Map creation
ymaps.ready(createMap);
