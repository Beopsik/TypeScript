declare function setupMap(config: MapConfig): void;

interface MapConfig {
    lng: number;
    lat: number;
    tileSize: 8 | 16 | 32;
}

setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });