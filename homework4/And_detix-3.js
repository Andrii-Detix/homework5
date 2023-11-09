class Warrior{
    _experience = 100;
    _level = 1;
    _rank = "Pushover";
    _achievements = new Array();
    ranksArray = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]


    _statsUpgrade(newExperience){
        if(this._experience+newExperience>10000) this._experience=10000;
        else this._experience+=newExperience;
        this._levelUpgrade();
        this._rankUpgrade();
    }
    _levelUpgrade(){
        this._level = this._experience/100-this._experience/100%1;
    }
    _rankUpgrade(){
        let rankIndexInArray = this._level/10-this._level/10%1;
        this._rank = this.ranksArray[rankIndexInArray];
    }
    achievements(){
        return this._achievements;
    }
    level(){
        return this._level;
    }
    rank(){
        return this._rank;
    }
    experience(){
        return this._experience;
    }
    training([description, awardExperience, minLevel]){
        if(this._level>=minLevel){
            this._statsUpgrade(awardExperience);
            this._achievements.push(description);
            return description;
        }
        else return "Not strong enough";
    }
    battle(enemyLevel){
        if(enemyLevel>=1 && enemyLevel<=100){
            let levelDifference = this._findLevelDifference(enemyLevel);
            let rankDifference = this._findRankDifference(enemyLevel);
            if(rankDifference>=1 && levelDifference>=5) return "You've been defeated"
            else{
                let winningExperience = this._findWinningExperience(levelDifference);
                this._statsUpgrade(winningExperience);
                let winningFrase = this._chooseWinningFrase(levelDifference);
                return winningFrase;
            };
        }
        else return "Invalid level";
    }
    _findLevelDifference(enemyLevel){
        let difference = enemyLevel-this._level;
        return difference;
    }
    _findRankDifference(enemyLevel){
        let enemyRankIndex = enemyLevel/10-enemyLevel/10%1;
        let ourRankIndex = this.ranksArray.indexOf(this._rank);
        let difference = enemyRankIndex - ourRankIndex;
        return difference;
    }
    _findWinningExperience(levelDifference){
        if(levelDifference<=-2) levelDifference =-2;
        switch (levelDifference){
            case -2: return 0;
            case -1: return 5;
            case 0: return 10;
            default: return 20*(levelDifference**2);
        }
    }
    _chooseWinningFrase(levelDifference){
        if(levelDifference<=-2) return "Easy fight";
        else if(levelDifference === -1 || levelDifference ===0 ) return "A good fight";
        else return "An intense fight";
    }
}
