/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

   let sObj = {};
   let tObj = {};

   for (var i = 0; i < s.length; i++) {
     let charS = s[i], charT = t[i];

     if((sObj[charS] && sObj[charS] !== charT) || (tObj[charT] && tObj[charT] !== charS))
        return false;
      sObj[charS] = charT;
      tObj[charT] = charS;
   }
   return true;
};
