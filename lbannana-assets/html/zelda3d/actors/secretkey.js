/**
 * @fileoverview  Provide the SecretKey class.
 * @author scott@scottlininger.com (Scott Lininger)
 */


/**
 * Constructor for the SecretKey class, which appears after all
 * enemies in a room have been killed.
 * @constructor
 * @extends {ace.BaseClass}
 */
ace.SecretKey = function(game, room) {
  ace.base(this, game, room);
  this.name = 'key';
  this.isEnemy = false;
  this.hasAppeared = false;
};
ace.inherits(ace.SecretKey, ace.Enemy);


/**
 * What to do every frame.
 * @param {ace.Runner} The game Runner.
 */
ace.SecretKey.prototype.onTick = function(game) {
  if (!this.hasAppeared && game.allEnemiesAreDead()) {
    this.hitPoints = ace.HITPOINTS_DEAD;
    this.hasAppeared = true;
    game.playSound('key');
  }
  
  if (this.hasAppeared) {
    this.standardDeathCheck(game);
  }
};


/**
 * What to do when touched by the avatar.
 * @param {ace.Game} The game.
 */
ace.SecretKey.prototype.onTouchAvatar = function(game) {
	if (this.hasAppeared) {
		this.standardOnTouchAvatar(game);
	}
};

/**
 * You can't hit the thing, ever.
 * @param {number} damage The damage to apply.
 * @return {boolean} Whether the damage was "applied" by the enemy.
 *     Some enemies don't get hurt in certain states.
 */
ace.SecretKey.prototype.takeDamage = function(damage) {
  return false;
};