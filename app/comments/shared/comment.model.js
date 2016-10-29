"use strict";
var Comment = (function () {
    function Comment(data) {
        if (data === void 0) { data = {}; }
        this.email = data.email || '';
        this.message = data.message || '';
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.model.js.map