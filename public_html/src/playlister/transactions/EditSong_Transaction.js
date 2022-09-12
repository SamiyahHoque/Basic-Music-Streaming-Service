import jsTPS_Transaction from "../../common/jsTPS.js"

export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initOldName, initOldArtist, initOldId, initNewName, initNewArtist, initNewId, initLocation) {
        super();
        this.model = initModel;
        
        this.oldName = initOldName;
        this.oldArtist = initOldArtist;
        this.oldId = initOldId;

        this.newName = initNewName;
        this.newArtist = initNewArtist;
        this.newId = initNewId;
        
        this.location = initLocation;
    }

    doTransaction() {
        this.model.editSong(this.newName, this.newArtist, this.newId, this.location);
    }
    
    undoTransaction() {
        this.model.editSong(this.oldName, this.oldArtist, this.oldId, this.location);
    }
}