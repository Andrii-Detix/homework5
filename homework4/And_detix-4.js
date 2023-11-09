class PaginationHelper{
    _collection;
    _itemsPerPage;
    _collectionLength;
    _pages;
    constructor(collection, itemsPerPage) {
        this._collection = collection;
        this._itemsPerPage = itemsPerPage;
        this._collectionLength = collection.length;
        this._pages = this.pageCount();
    }
    itemCount(){
        return this._collectionLength;
    }
    pageCount(){
        let pages = this._collectionLength/this._itemsPerPage;
        if(pages%1===0) return pages;
        else return Math.floor(pages) +1;
    }
    pageItemCount(pageIndex){
        if(pageIndex<0 || pageIndex>=this._pages) return -1;
        else if(pageIndex===this._pages-1) {
            return this._collectionLength === this._itemsPerPage*(pageIndex+1) ? this._itemsPerPage : this._collectionLength%this._itemsPerPage;
        }
        else return this._itemsPerPage;
    }
    pageIndex(itemIndex){
        if(itemIndex>=0 && itemIndex<this._collectionLength){
            let pages = (itemIndex+1)/this._itemsPerPage;
            if(pages%1===0) return pages-1;
            else return Math.floor(pages);
        }
        else return -1;

    }


}