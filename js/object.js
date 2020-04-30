var city1 = {
    name: "Wuhan",
    population: 10220000,
    GetName: function(){console.log(this.name)},
    exportStr: function(){console.log(this.name,this.population)}
};

var city2 = {
    name: "London",
    population: 8908081,
    GetName: function(){console.log(this.name)},
    exportStr: function(){console.log(this.name,this.population)}
};

city1.test="dgdg";