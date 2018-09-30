import React from 'react';


const initMap = (center) => {
    setTimeout(() => {
        const _map = document.getElementById("map");
        const latLng = { lat: 23.789939, lng: 90.376159 };
        const map = new window.google.maps.Map(_map, {
            center: latLng,
            zoom: 16
        });
        const marker = new window.google.maps.Marker({
            position: latLng,
            map: map
        });
        const infowindow = new window.google.maps.InfoWindow({
            content: '<div>East Shewrapa<br>Begum Rokeya Ave<br>Mirpur, Dhaka 1216<br>Bangladesh</div>'
          });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    }, 2000)
}

export const Contact = () => {
    return (
        <section>
            <h3 className="section-header">Contact</h3>
            <div className="section-content">
                <p>Email: shahidcse6@gmail.com</p>
                <p>Skype: shaaheed.bd</p>
            </div>
            <div id="map"></div>
            {initMap()}
        </section>
    );
}