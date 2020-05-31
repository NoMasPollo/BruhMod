const sentinelDrone = new JavaAdapter(UnitType, {}, "sentinel-shield-drone",  prov(() => new JavaAdapter(FlyingUnit, {
	getPowerCellRegion(){
        return Core.atlas.find("BruhMod-sentinel-shield-drone-cell");
    },
	update(){
		this.super$update();
		try{ // Put in a "try"; Strafe around enemies
			this.nearestfoe = Units.closestTarget(this.getTeam(), this.x, this.y, 250);
			if (this.nearestfoe != null){
				vel = Vec2(this.x, this.y);
				if (this.nearestfoe.dst(this) < 200){
					this.velocity().add(Mathf.random(-3,3), Mathf.random(-3,3));
				}
				this.avoidOthers();	
			}
		}
		catch(error){
			this.nearestfoe = null
			//print(error);
		}
	},
})));
