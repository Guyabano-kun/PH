/* Shared Boracay beach map catalogue. Keep weather.html and boracay.html in sync through this file. */
window.PH_BEACH_MAP = {
  "version": "1.0.0",
  "last_updated": "2026-11-28",
  "scope": "One shared map catalogue for weather.html and boracay.html. The list is the 10 individual core beaches plus one aggregated Boracay Newcoast Beaches entry.",
  "beaches": [
    {
      "id": "white",
      "name": "White Beach",
      "nameRu": "Белый пляж",
      "lat": 11.9581389,
      "lon": 121.9260278,
      "pointType": "DENR Boat Station 2 monitoring reference point",
      "pointNoteRu": "Маркер привязан к координате DENR Boat Station 2, а не к геодезическому центру White Beach.",
      "pointNoteEn": "Marker uses the DENR Boat Station 2 monitoring coordinate, not a surveyed White Beach centroid.",
      "coast": "West coast",
      "coastRu": "Западное побережье",
      "amihan": "sheltered",
      "habagat": "exposed",
      "ru": "White Beach — протяжённый западный берег, разделённый на Stations 1–3. Условия и загрузка пляжа различаются по участкам; точка карты относится к Boat Station 2.",
      "en": "White Beach is the long western shoreline divided into Stations 1–3. Conditions and activity vary by section; the map point refers to Boat Station 2.",
      "sourceIds": [
        "SRC-002",
        "SRC-008",
        "SRC-021"
      ]
    },
    {
      "id": "bulabog",
      "name": "Bulabog Beach",
      "nameRu": "Пляж Булабог",
      "lat": 11.9692679,
      "lon": 121.9273114,
      "pointType": "BeachAtlas reference point cross-checked against DENR-EMB station",
      "pointNoteRu": "Справочная точка BeachAtlas; примерно в 34 м от DENR-EMB Ralph’s Place. Не геодезический центроид.",
      "pointNoteEn": "BeachAtlas reference point; approximately 34 m from the DENR-EMB Ralph’s Place station. Not a surveyed centroid.",
      "coast": "East coast",
      "coastRu": "Восточное побережье",
      "amihan": "exposed",
      "habagat": "sheltered",
      "ru": "Восточное побережье и основная зона кайт- и виндсёрфинга. Ветер и состояние воды зависят от сезона и текущих условий.",
      "en": "East-coast beach and the island’s main kite- and windsurfing area. Wind and water conditions vary by season and day.",
      "sourceIds": [
        "SRC-001",
        "SRC-052"
      ]
    },
    {
      "id": "puka",
      "name": "Puka Shell Beach",
      "nameRu": "Пляж Пука",
      "lat": 11.996611,
      "lon": 121.915254,
      "pointType": "Legacy / secondary beach reference point",
      "pointNoteRu": "Справочная точка вдоль пляжа; не геодезический центр. OSM beach feature и мониторинговая станция находятся в других точках.",
      "pointNoteEn": "Reference point along the beach, not a surveyed centroid. The OSM beach feature and monitoring station are separate points.",
      "coast": "North coast",
      "coastRu": "Северное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Пляж на северной оконечности острова. Участки с камнями, перепады глубины и локальные течения требуют осторожности; не считать весь берег одинаково пригодным для снорклинга.",
      "en": "Beach at the northern end of the island. Rocky edges, depth changes and local currents require caution; do not assume the entire shore is suitable for snorkelling.",
      "sourceIds": [
        "SRC-001",
        "SRC-021",
        "SRC-053"
      ]
    },
    {
      "id": "diniwid",
      "name": "Diniwid Beach",
      "nameRu": "Пляж Динивид",
      "lat": 11.9763,
      "lon": 121.91167,
      "pointType": "OSM beach feature reference point",
      "pointNoteRu": "Справочная точка объекта natural=beach; не геодезический центр пляжа.",
      "pointNoteEn": "Reference point for the natural=beach feature; not a surveyed beach centroid.",
      "coast": "Northwest coast",
      "coastRu": "Северо-западное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Небольшая бухта севернее White Beach и Station 1. Условия меняются по приливу и локальной волне; отдельные участки берега каменистые.",
      "en": "Small cove north of White Beach and Station 1. Conditions vary with tide and local surf; some shoreline sections are rocky.",
      "sourceIds": [
        "SRC-001",
        "SRC-021"
      ]
    },
    {
      "id": "punta",
      "name": "Punta Bunga Beach",
      "nameRu": "Пляж Пунта-Бунга",
      "lat": 11.98417,
      "lon": 121.90751,
      "pointType": "OSM natural=beach feature reference point",
      "pointNoteRu": "Справочная точка объекта OSM; не геодезический центр и не подтверждённый общественный вход.",
      "pointNoteEn": "OSM feature reference point; not a surveyed centroid or confirmed public entrance.",
      "coast": "Northwest coast",
      "coastRu": "Северо-западное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Пляж северо-западного побережья в районе крупных курортов. Не предполагайте свободный проход: фактический доступ нужно уточнять у соответствующего объекта размещения.",
      "en": "Northwest-coast beach in the resort area. Do not assume unrestricted walk-in access; confirm arrangements with the relevant property.",
      "sourceIds": [
        "SRC-001",
        "SRC-013"
      ]
    },
    {
      "id": "balinghai",
      "name": "Balinghai Beach",
      "nameRu": "Пляж Балингхай",
      "lat": 11.98124,
      "lon": 121.90849,
      "pointType": "OSM natural=beach feature reference point",
      "pointNoteRu": "Справочная точка объекта OSM; не геодезический центр и не подтверждённый общественный вход.",
      "pointNoteEn": "OSM feature reference point; not a surveyed centroid or confirmed public entrance.",
      "coast": "Northwest coast",
      "coastRu": "Северо-западное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Небольшая бухта северо-западного побережья. Сведения о практическом доступе противоречивы; условия входа и возможную плату проверяйте заранее.",
      "en": "Small cove on the northwest coast. Reports about practical access conflict; verify entry arrangements and any fee in advance.",
      "sourceIds": [
        "SRC-001",
        "SRC-011"
      ]
    },
    {
      "id": "banyugan",
      "name": "Banyugan Beach",
      "nameRu": "Пляж Баньюган",
      "lat": 11.98725,
      "lon": 121.90611,
      "pointType": "OSM natural=beach feature reference point",
      "pointNoteRu": "Справочная точка объекта OSM; пляж связан с Shangri-La Boracay. Публичный вход не подтверждён.",
      "pointNoteEn": "OSM feature reference point; the beach is associated with Shangri-La Boracay. Public walk-in access is unconfirmed.",
      "coast": "Northwest coast",
      "coastRu": "Северо-западное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Небольшой пляж у Shangri-La Boracay. Не считать наличие пляжа подтверждением свободного доступа для посетителей, не проживающих на курорте.",
      "en": "Small beach by Shangri-La Boracay. The existence of the beach does not establish public access for non-guests.",
      "sourceIds": [
        "SRC-001",
        "SRC-012"
      ]
    },
    {
      "id": "ilig",
      "name": "Ilig-Iligan Beach",
      "nameRu": "Пляж Илиг-Илиган",
      "lat": 11.9931549,
      "lon": 121.9253557,
      "pointType": "BeachAtlas reference point cross-checked with DENR and OSM",
      "pointNoteRu": "Справочная точка BeachAtlas: около 30 м от DENR-EMB Station 15 и 132 м от OSM beach feature. Не геодезический центр.",
      "pointNoteEn": "BeachAtlas reference point: about 30 m from DENR-EMB Station 15 and 132 m from the OSM beach feature. Not a surveyed centroid.",
      "coast": "Northeast coast",
      "coastRu": "Северо-восточное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Пляж на северо-востоке острова. Не объединять его координату с Boracay Newcoast: это отдельная справочная точка Ilig-Iligan.",
      "en": "Beach on the northeast coast. Do not conflate its coordinates with Boracay Newcoast; this is a separate Ilig-Iligan reference point.",
      "sourceIds": [
        "SRC-001",
        "SRC-053",
        "SRC-102"
      ]
    },
    {
      "id": "newcoast",
      "name": "Boracay Newcoast Beaches · Coves 1–3",
      "nameRu": "Пляжи Boracay Newcoast · бухты 1–3",
      "lat": 11.98328,
      "lon": 121.92583,
      "pointType": "OSM tourism=attraction reference point (Newcoast Beach; associated with Cove 2 POI)",
      "pointNoteRu": "Маркер — справочная точка OSM tourism=attraction «Newcoast Beach», близкая к Mapbox POI Cove 2. Это не центроид и не граница объединённой береговой линии; Cove 1 и Cove 3 отдельно не размечаются.",
      "pointNoteEn": "Marker is the OSM tourism=attraction reference for “Newcoast Beach”, close to the Mapbox Cove 2 POI. It is not a centroid or boundary of the grouped shoreline; Cove 1 and Cove 3 are not mapped separately.",
      "coast": "East / northeast coast",
      "coastRu": "Восточное / северо-восточное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "В Boracay Newcoast фактически три отдельные бухты: Cove 1 (Lapus-Lapus), Cove 2 (Boracay Newcoast Beach) и Cove 3 (Savoy Beach). На карте они объединены в один объект из-за сходных общих прибрежных условий; различаются инфраструктура и характер использования. Маркер — ориентир в районе Cove 2, а не центр всех трёх бухт.",
      "en": "Boracay Newcoast has three distinct coves: Cove 1 (Lapus-Lapus), Cove 2 (Boracay Newcoast Beach) and Cove 3 (Savoy Beach). They are grouped as one map entry because their broad coastal conditions are similar, while facilities and intended use differ. The pin is a locator near Cove 2, not a centre of all three coves.",
      "sourceIds": [
        "SRC-088",
        "SRC-091",
        "SRC-093",
        "SRC-102",
        "SRC-103",
        "SRC-104",
        "SRC-105"
      ]
    },
    {
      "id": "tulubhan",
      "name": "Tulubhan Beach",
      "nameRu": "Пляж Тулубхан",
      "lat": 11.95457,
      "lon": 121.93784,
      "pointType": "OSM natural=beach feature reference point",
      "pointNoteRu": "Справочная точка пляжного объекта OSM; DENR Tulubhan Pier station — отдельный объект рядом.",
      "pointNoteEn": "OSM beach-feature reference point; the DENR Tulubhan Pier station is a separate nearby object.",
      "coast": "Southeast coast",
      "coastRu": "Юго-восточное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Небольшой пляж у Manoc-Manoc на юго-востоке острова. Учитывайте лодочное движение и локальные условия у берега.",
      "en": "Small beach near Manoc-Manoc on the southeast side of the island. Account for boat traffic and local nearshore conditions.",
      "sourceIds": [
        "SRC-001",
        "SRC-021"
      ]
    },
    {
      "id": "tambisaan",
      "name": "Tambisaan Beach",
      "nameRu": "Пляж Тамбисаан",
      "lat": 11.94952,
      "lon": 121.9474,
      "pointType": "OSM natural=beach feature reference point",
      "pointNoteRu": "Точка относится к пляжному объекту OSM; Tambisaan Jetty Port и DENR monitoring station — отдельные объекты.",
      "pointNoteEn": "Point refers to the OSM beach feature; Tambisaan Jetty Port and the DENR monitoring station are separate objects.",
      "coast": "Southeast coast",
      "coastRu": "Юго-восточное побережье",
      "amihan": "variable",
      "habagat": "variable",
      "ru": "Пляж на юго-восточном побережье, рядом с портовой инфраструктурой. Для снорклинга нужны подходящие прилив и спокойное море; не путать пляж с причалом.",
      "en": "Beach on the southeast coast near port facilities. Snorkelling requires suitable tide and calm water; do not confuse the beach with the jetty.",
      "sourceIds": [
        "SRC-001",
        "SRC-021",
        "SRC-118"
      ]
    }
  ]
};
