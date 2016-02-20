
function Star(game) {
	//console.log("star created");
	this.radiusMin = .2;
	this.radiusMax = 2;
	this.radius = (Math.random() * this.radiusMax) + this.radiusMin;
	this.type = "Star";
	this.xSpawn = Math.floor(game.surfaceWidth * Math.random());
	this.ySpawn = Math.floor(game.surfaceHeight * Math.random());
	//console.log(this.xSpawn + ", " + this.ySpawn);
    Entity.call(this, game, this.xSpawn, this.ySpawn);
};

Star.prototype = new Entity();
Star.prototype.constructor = Star;

Star.prototype.update = function () {
}

Star.prototype.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
};