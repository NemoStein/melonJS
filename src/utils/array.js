import {random as mathRandom, weightedRandom as mathWeightedRandom} from "./../math/math.js";

/**
 * a collection of array utility functions
 * @namespace utils.array
 */

/**
 * Remove the specified object from the given Array
 * @public
 * @memberof utils.array
 * @name remove
 * @param {Array} arr array from which to remove an object
 * @param {object} obj to be removed
 * @returns {Array} the modified Array
 * var arr = [ "foo", "bar", "baz" ];
 * // remove "foo" from the array
 * me.utils.array.remove(arr, "foo");
 */
export function remove(arr, obj) {
    var i = Array.prototype.indexOf.call(arr, obj);
    if (i !== -1) {
        Array.prototype.splice.call(arr, i, 1);
    }
    return arr;
};

/**
 * return a random array element
 * @public
 * @memberof utils.array
 * @name random
 * @param {Array} arr array to pick a element
 * @returns {any} random member of array
 * @example
 * // Select a random array element
 * var arr = [ "foo", "bar", "baz" ];
 * console.log(me.utils.array.random(arr));
 */
export function random(arr) {
    return arr[mathRandom(0, arr.length)];
};

/**
 * return a weighted random array element, favoring the earlier entries
 * @public
 * @memberof utils.array
 * @name weightedRandom
 * @param {Array} arr array to pick a element
 * @returns {any} random member of array
 */
export function weightedRandom(arr) {
    return arr[mathWeightedRandom(0, arr.length)];
};
