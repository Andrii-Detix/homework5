class VigenèreCipher{
    _key;
    _alphabet;
    constructor(key, alphabet) {
        this._key = key;
        this._alphabet = alphabet;
    }
    encode(message){
        let encodeMessage = "";
        for (let i = 0; i<message.length;i++){
            let messageCharIndex = this._findMessageCharIndex(message[i]);
            if(messageCharIndex === -1) encodeMessage+=message[i];
            else{
                let keyCharIndex = this._findKeyCharIndex(i);
                let newCharIndex = this._newEncodeIndex(messageCharIndex, keyCharIndex);
                encodeMessage+=this._alphabet[newCharIndex];
            }
        }
        return encodeMessage;
    }
    decode(message){
        let decodeMessage = "";
        for (let i = 0; i<message.length;i++){
            let messageCharIndex = this._findMessageCharIndex(message[i]);
            if(messageCharIndex === -1) decodeMessage+=message[i];
            else{
                let keyCharIndex = this._findKeyCharIndex(i);
                let newCharIndex = this._newDecodeIndex(messageCharIndex, keyCharIndex);
                decodeMessage+=this._alphabet[newCharIndex];
            }
        }
        return decodeMessage;
    }
    _findMessageCharIndex(char){
            return this._alphabet.indexOf(char);
    }
    _findKeyCharIndex(temporaryPosition){
        temporaryPosition = temporaryPosition%this._key.length;

        return this._alphabet.indexOf(this._key[temporaryPosition]);
    }
    _newEncodeIndex(messageCharIndex, keyCharIndex){
        let newCharIndex = messageCharIndex+keyCharIndex;
        if(newCharIndex<this._alphabet.length) return newCharIndex;
        else{
            newCharIndex = newCharIndex - this._alphabet.length;
            return newCharIndex;
        }
    }
    _newDecodeIndex(messageCharIndex, keyCharIndex){
        let newCharIndex = messageCharIndex-keyCharIndex;
        if(newCharIndex>=0) return newCharIndex;
        else{
            newCharIndex = this._alphabet.length+newCharIndex;
            return newCharIndex;
        }
    }
}
