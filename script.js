// Sample data for city facilities with locations (latitude, longitude)
const facilities = {
    police: [
        { name: "Central municipality", address: "123 Main St", contact: "555-1234", officer: "Officer John Doe", lat: 40.712776, lng: -74.005974 },
        { name: "West Side municipality", address: "456 West Ave", contact: "555-5678", officer: "Officer Jane Smith", lat: 40.732776, lng: -74.015974 }
    ],
    municipalitys: [
        { name: "City municipality", address: "789 Health Blvd", contact: "555-9876", facility: "24/7 Emergency", lat: 40.722776, lng: -74.003974 },
        { name: "West End Clinic", address: "1012 West End St", contact: "555-6543", facility: "General Health Services", lat: 40.712576, lng: -74.045974 }
    ],
    firefighters: [
        { name: "Downtown Fire Station", address: "150 Fire Rd", contact: "555-3214", service: "Fire and Rescue", lat: 40.715776, lng: -74.001974 }
    ],
    municipality: [
        { name: "City Hall", address: "300 City Center", contact: "555-0001", service: "Waste Management", lat: 40.710776, lng: -74.009974 }
    ],
    court: [
        { name: "City Court", address: "400 Justice Lane", contact: "555-1111", service: "Civil and Criminal", lat: 40.710076, lng: -74.002974 }
    ]
};

// Initialize Google Maps for each section
function initMap() {
    for (let facility in facilities) {
        const mapElement = document.getElementById(`${facility}-map`);
        if (mapElement) {
            const map = new google.maps.Map(mapElement, {
                zoom: 13,
                center: { lat: facilities[facility][0].lat, lng: facilities[facility][0].lng }
            });

            facilities[facility].forEach(item => {
                const marker = new google.maps.Marker({
                    position: { lat: item.lat, lng: item.lng },
                    map: map,
                    title: item.name
                });
            });
        }
    }
}

// Populate facility sections dynamically
function populateFacilities() {
    for (let facility in facilities) {
        const facilityList = document.getElementById(`${facility}-list`);
        facilities[facility].forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${item.name}</strong> - ${item.address} - Contact: ${item.contact} - ${item.officer || item.facility || item.service}`;
            facilityList.appendChild(listItem);
        });
    }
}

document.addEventListener("DOMContentLoaded", populateFacilities);