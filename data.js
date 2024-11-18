var APP_DATA = {
  "scenes": [
    {
      "id": "0-1",
      "name": "1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.8939600528461913,
        "pitch": 0.4882054071173041,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": -3.0469774677386248,
          "pitch": 0.5022867003957092,
          "rotation": 0,
          "target": "1-panorama4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-panorama4",
      "name": "Panorama4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.9846689174385972,
        "pitch": 0.23858592913229515,
        "fov": 1.3926760049349705
      },
      "linkHotspots": [
        {
          "yaw": 0.9869222611576021,
          "pitch": 0.1809143695783142,
          "rotation": 6.283185307179586,
          "target": "0-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
