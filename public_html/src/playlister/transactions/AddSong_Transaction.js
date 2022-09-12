import jsTPS_Transaction from "../../common/jsTPS.js"

export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initName, initArtist, initId, initLocation) {
        super();
        this.model = initModel;
        
        this.name = initName;
        this.artist = initArtist;
        this.id = initId;
        
        this.location = initLocation;
    }

    doTransaction() {
        this.model.addNewSong(this.name, this.artist, this.id, this.location);
    }
    
    undoTransaction() {
        this.model.removeSong(this.location);
    }
}