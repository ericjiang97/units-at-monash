 import Fuse from "fuse.js";
 
 export default class FuzzySearch{
    static search(searchTarget, data, numberOfResults, searchKeys, distance) {
        if(searchTarget !== null || searchTarget !== "") {
            var options = {
                include: ["score"],
                shouldSort: true,
                threshold: 0.4,
                location: 0,
                distance: distance,
                findAllMatches: true,
                maxPatternLength: 128,
                minMatchCharLength: 1,
                keys: searchKeys
            };

            const fuse = new Fuse(data, options);
            //apply filter if filterArray is populated
            var results = fuse.search(searchTarget);

            const finalResults = results.slice(0, numberOfResults);
            return finalResults;
        }
        return [];
    }
 }