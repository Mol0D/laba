"use strict";
var Population = /** @class */ (function () {
    function Population() {
        this.populationCount = 77;
        this.geneLength = 19;
        this.crossChance = 0.77;
        this.mutationChance = 0.0007;
        this.tournamentWinners = [];
        this.populationBinary = [];
        this.populationDecimal = [];
        this.res = '';
    }
    Population.randHandler = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 10; }
        return Math.floor(min + Math.random() * (max + 1 - min));
    };
    ;
    Population.prototype.f = function (i) {
        return Math.pow(this.populationDecimal[i][0], 2) + 1.1 * Math.pow(this.populationDecimal[i][1], 2);
    };
    Population.prototype.createPopulation = function () {
        for (var i = 0; i <= this.populationCount; i++) {
            var chBinary = [];
            var chDecimal = [];
            for (var g = 0; g < 2; g++) {
                var item = Population.randHandler();
                chDecimal.push(item);
                item = parseInt(String(item)).toString(2);
                var substr = '';
                for (var l = 0; l <= this.geneLength - item.length - 1; l++) {
                    substr += '0';
                }
                chBinary.push(substr + item);
            }
            this.populationBinary.push(chBinary);
            this.populationDecimal.push(chDecimal);
        }
    };
    ;
    Population.prototype.tournament = function () {
        var players = [];
        var n = 4;
        for (var i = 0; i < n; i++) {
            players.push(Population.randHandler(0, 76));
        }
        for (var i = 0; i < players.length; i += 2) {
            this.f(i) < this.f(i + 1) ?
                this.tournamentWinners.push(players[i])
                : this.tournamentWinners.push(players[i + 1]);
        }
    };
    ;
    Population.prototype.crossCh = function () {
        if (Math.random() > this.crossChance) {
            var help = this.populationBinary[this.tournamentWinners[0]][1];
            this.populationBinary[this.tournamentWinners[0]][1] = this.populationBinary[this.tournamentWinners[1]][1];
            this.populationBinary[this.tournamentWinners[1]][1] = help;
        }
    };
    Population.prototype.crossMutation = function () {
        if (Math.random() > 0) {
        }
        else {
        }
    };
    return Population;
}());
var laba = new Population();
laba.createPopulation();
console.log(laba.populationBinary, 'Початкова популяція');
laba.tournament();
laba.crossCh();
console.log(laba.populationBinary, 'Кінцева популяція');
