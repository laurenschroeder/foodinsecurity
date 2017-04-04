d3_queue.queue()
    .defer(d3.json, "Boundaries_nohare.geojson")
    .defer(d3.csv, "total_food_riv.csv")
    .await(draw);
