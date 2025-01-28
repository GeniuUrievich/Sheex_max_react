import React, { useEffect } from "react";
const YMap = () => {
    useEffect(() => {
        // Загрузка API Яндекс.Карт
        const script = document.createElement("script");
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        script.type = "text/javascript";
        script.onload = () => {
          window.ymaps.ready(initMap);
        };
        document.head.appendChild(script);
    
        const initMap = () => {
          const map = new window.ymaps.Map("map", {
            center: [55.751244, 37.618423],
            zoom: 10, 
          });
    
          const placemark = new window.ymaps.Placemark(
            [55.751244, 37.618423], 
            {
              hintContent: "Москва", 
              balloonContent: "Столица России", 
            },
            {
              preset: "islands#icon",
              iconColor: "#ff0000",
            }
          );
    
          map.geoObjects.add(placemark);
        };
    
        return () => {
          const mapContainer = document.getElementById("map");
          if (mapContainer) {
            mapContainer.innerHTML = "";
          }
        };
      }, []);
    
      return (
        <div>
          
          <div
            id="map"
            style={{
              width: "680px",
              height: "500px",
            }}
          ></div>
        </div>
      );
}

export default YMap