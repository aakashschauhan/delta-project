
const map = new maplibregl.Map({
  container: 'map',
  style: "https://api.maptiler.com/maps/basic-v2/style.json?key=IQN6UqcY5KwbsO6R4izI",
  center: coords,
  zoom: 9
});

map.on('load', () => {

  const popup = new maplibregl.Popup({
    offset: 25,
    closeButton: true,
    className: 'custom-popup' 
  }).setHTML(`
    <h4><b>${listingData.title}</b></h4>
    <p>Exact location will be provided after booking.</p>
  `);

  
  const marker = new maplibregl.Marker({
    color: "#FF0000",
    draggable: false,
    scale: 1.2 
  })
    .setLngLat(coords)
    .setPopup(popup)
    .addTo(map);

  
  marker.getElement().addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (marker.getPopup().isOpen()) {
      marker.getPopup().remove();
    } else {
      marker.togglePopup();
    }
  });

  map.on('click', () => {
    if (marker.getPopup().isOpen()) {
      marker.togglePopup();
    }
  });
});


