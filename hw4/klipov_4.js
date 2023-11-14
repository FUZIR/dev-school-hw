class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        if(this.collection.length){
            return Math.ceil(this.collection.length/this.itemsPerPage);
        }
        return 0;
    }
    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex >= this.pageCount()) {
            return -1;
        } else if (pageIndex === this.pageCount() - 1) {
            return this.collection.length % this.itemsPerPage || this.itemsPerPage;
        }
        else {
            return this.itemsPerPage;
        }
    }
    pageIndex(itemIndex) {
        if (itemIndex < 0 || itemIndex >= this.itemCount()) {
            return -1; // Invalid item index
        }
        return Math.floor(itemIndex / this.itemsPerPage);
    }
}

const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
const helper = new PaginationHelper(collection, 10);
console.log(helper.pageIndex(-1));
