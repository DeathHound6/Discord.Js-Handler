/**
 * A class containing Utility methods and data
 */
class Util {
    /**
     * Check if a function is a class constructor
     * @param {function} Function 
     * @param {Object} Class 
     * @returns {Boolean}
     */
    static isConstruct(Function, Class) {
        try {
            new (new Proxy(Function, { construct() { return Object.prototype; } }))();
            if (!Class) return true;
            return Function.prototype instanceof Class;
        } catch (err) {
            return false;
        }
    }
}

module.exports = Util;
