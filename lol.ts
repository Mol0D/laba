class Population {
    private populationCount: number = 77;
    private geneLength: number = 19;
    private crossChance: number = 0.77;
    private mutationChance: number = 0.0007;
    private tournamentWinners: Array<number> = [];
    public populationBinary: Array<any> = [];
    public populationDecimal: Array<any> = [];
    public res: string = '';

    private static randHandler (min: number = 0, max: number = 10):number {
        return Math.floor(min + Math.random() * (max + 1 - min))
    };

    private f (i: number): number {
        return Math.pow(this.populationDecimal[i][0],2) + 1.1 * Math.pow(this.populationDecimal[i][1],2)
    }

    public createPopulation(): void {
        for (let i = 0; i <= this.populationCount; i++) {
            let chBinary: Array<any> = [];
            let chDecimal: Array<any> = [];
            for (let g = 0; g < 2; g++) {
                let item: number | string = Population.randHandler();

                chDecimal.push(item);

                item = parseInt(String(item)).toString(2);

                let substr: string = '';
                for (let l = 0; l <= this.geneLength - item.length - 1; l++) {
                    substr += '0';
                }

                chBinary.push(substr + item);
            }


            this.populationBinary.push(chBinary);
            this.populationDecimal.push(chDecimal);
        }
    };

    public tournament(): void {
        const players: Array<any> = [];
        const n: number = 4;

        for (let i =0; i < n; i++) {
            players.push(Population.randHandler(0, 76));
        }

        for (let i = 0; i < players.length; i+=2) {
            this.f(i) < this.f(i + 1) ?
                this.tournamentWinners.push(players[i])
                : this.tournamentWinners.push(players[i + 1]);
        }
    };

    public crossCh (): void {
        if (Math.random() > this.crossChance) {
            const help = this.populationBinary[this.tournamentWinners[0]][1];

            this.populationBinary[this.tournamentWinners[0]][1] = this.populationBinary[this.tournamentWinners[1]][1];

            this.populationBinary[this.tournamentWinners[1]][1] = help;


        }
    }

    public crossMutation (): void {
        if (Math.random() > 0) {

        } else {

        }
    }
}

const laba = new Population();

laba.createPopulation();
console.log(laba.populationBinary, 'Початкова популяція');
laba.tournament();
laba.crossCh();
console.log(laba.populationBinary, 'Кінцева популяція');

