// 初始化地图，设置中心坐标和缩放等级
var map = L.map('map').setView([31.2, 121.5], 12); // 这里示例为上海市区

// 加载免费底图（OpenStreetMap）
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 添加标记点，设置经纬度
var marker = L.marker([31.2304, 121.4737]).addTo(map); // 上海市中心

// 为标记点绑定弹窗
marker.bindPopup("<b>上海市中心</b><br>这是一个示例兴趣点。").openPopup();

var poiList = [
    {name: "外滩", coords: [31.2410, 121.4900]},
    {name: "东方明珠", coords: [31.2397, 121.4998]},
    {name: "南京路步行街", coords: [31.2333, 121.4750]}
];

poiList.forEach(function(poi){
    L.marker(poi.coords).addTo(map)
        .bindPopup("<b>" + poi.name + "</b>");
});