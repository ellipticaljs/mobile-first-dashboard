
/*
 * =============================================================
 * dust helpers
 * =============================================================
 *
 */

//umd pattern

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        //commonjs
        module.exports = factory(require('dustjs'), require('dustjs-helpers'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['dustjs','dustjs-helpers','moment'], factory);
    } else {
        // Browser globals (root is window)
        root.returnExports = factory(root.dust,root.dust.helpers,root.moment);
    }
}(this, function (dust,helpers,moment) {


    dust.helpers.formatDate=function(chunk, context, bodies, params){
        var value = dust.helpers.tap(params.value, chunk, context);
        var format=params.format || 'MM-DD-YYYY';
        if(value){
            value=moment(value).format(format);
        }else{
            value='';
        }
        return chunk.write(value);
    };

    dust.helpers.inline=dust.helpers.inline || {};

    dust.helpers.inline.formatDate=function(val,format){
        format=format || 'MM-DD-YYYY';
        return (val) ? moment(val).format(format) : '';
    };


    return dust;
}));

