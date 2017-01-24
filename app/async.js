exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
    async: function(value) {
        return new Promise(function(resolve, reject){
            resolve(value);
        })
    },

    manipulateRemoteData: function(url) {
        return new Promise(function(resolve, reject){
            $.ajax({
                url: url
            }).done(function(result){
                var ary = $.map(result.people, function(v, i, a){
                    return [v.name];
                });
                resolve(ary.sort());
            });

        });
    }
};
