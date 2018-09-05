var app = new Vue({
  el: '#project',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameOn: false,
    turns: [],
  },
  methods: {
    startNewGame: function() {
      console.log('I started a new game started.');
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.gameOn = true;
      this.turns = [];
    },
    attack: function() {
      console.log('Attack.');

      this.playerAttack(2, 10);

      if (this.evaluateResult()) {
        return;
      }

      this.monsterAttack(4, 12);

      this.evaluateResult();
    },
    specialAttack: function() {
      console.log('Special attack.');

      this.playerAttack(10, 20);

      if (this.evaluateResult()) {
        return;
      }

      this.monsterAttack(8, 16);

      this.evaluateResult();
    },
    heal: function() {
      console.log('Heal.');

      if(this.playerHealth <= 100) {
        this.playerHeal(4, 12);
        if(this.playerHealth >= 100) {
          this.playerHealth = 100;
        }
      } else {
        this.playerHealth = 100;
      }

      this.monsterAttack(4, 12);

      this.evaluateResult();

    },
    surrender: function() {
      console.log('Surrend.');
      this.gameOn = false;
    },
    playerHeal: function(min, max) {
      var playerCure = this.rollDices(min, max);
      this.playerHealth += playerCure;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals itself for ' + playerCure + '.'
      });
      console.log('Player: ' + playerCure + '.');
    },
    playerAttack: function(min, max) {
      var playerDamage = this.rollDices(min, max);
      this.monsterHealth -= playerDamage;
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits monster for ' + playerDamage + '.'
      });
      console.log('Player: ' + playerDamage + '.');
    },
    monsterAttack: function(min, max) {
      var monsterDamage = this.rollDices(min, max);
      this.playerHealth -= monsterDamage;
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits player for ' + monsterDamage + '.'
      });
      console.log('Monster: ' + monsterDamage + '.');
    },
    rollDices: function(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    evaluateResult: function() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! Wanna play again?')) {
          this.startNewGame();
        } else {
          this.gameOn = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! Wanna play again?')) {
          this.startNewGame();
        } else {
          this.gameOn = false;
        }
        return true;
      }
      return false;
    }
  }
});
