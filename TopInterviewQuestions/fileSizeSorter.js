/// <summary>
/// Sort a list of File Size strings by the value they represent
/// </summary>
/// <remarks>
/// We'd like this method like to sort a given list of strings that represent file sizes (eg. "23.5 kB")
/// 
/// File sizes may come with decimals or without, will have whitespace seperating the number and unit
/// and will use the following units (In Descending order):
///     - TB  (TeraByte) - 1024^4 - 1,099,511,627,776 Bytes
///     - GB  (GigaByte) - 1024^3 - 1,073,741,824     Bytes
///     - MB  (MegaByte) - 1024^2 - 1,048,576         Bytes
///     - kB  (KiloByte) - 1024   - 1,024             Bytes
///     - B   (Byte)     - 1      - 1                 Bytes
/// 
/// See Unit Tests for more details.
/// </remarks>
/// <param name="fileSizes">An enumerable of strings containing a value that represents a filesize as described above.</param>
/// <param name="descending">A boolean determining if the results should be in descending order.</param>
/// <returns>
/// An enumerable of strings (same values provided) sorted by the file-sizes that they represent.
/// </returns>

/* Pseudocode
- Check if input array is empty
  - If empty -> return empty list statement
  - If not empty -> Sort using a comparator 
      (-> separate a & b into values and units 
       -> convert both a & b to bytes using corresponding multiplier and 
       -> compare values)
  - If descending boolean is true -> return sorted array
  - If descending boolean is false -> return sorted array reversed.
 */


  function sort(fileSizes, descending) {
    //throw new Error("Test not finished");
    let sortedFiles = [];
    if (!fileSizes.length) return "Enter a List to be Sorted";
    else {
        sortedFiles = sortSizes(fileSizes);
      }      
      if (descending === true ) return sortedFiles.reverse();
      if (descending === false) return sortedFiles;
    }    
  

//////////////////////////////////////////////
//Helper Functions and variables

// global comparator and multiplier array
const multipliers = {
  B: 10 ** 0,
  kB: 10 ** 3,
  MB: 10 ** 6,
  GB: 10 ** 9,
  TB: 10 ** 12,
}

//Custom Sorter
function sortSizes(arr){
  // sort using comparator with multipliers
  arr.sort((a, b) => {
  const regex = /\s+/;
  const [valueA, unitA] = a.trim().split(regex) 
  const [valueB, unitB] = b.trim().split(regex)
  const A = Number(valueA) * multipliers[unitA]
  const B = Number(valueB) * multipliers[unitB]
  return  A - B;
})
return arr;
}


console.log(sort(["5.1 GB","19934563 B","224 kB","0.55 GB","0.04 kB","0.02 TB","2.4 MB",], false)); // ["0.04 kB","224 kB","2.4 MB","19934563 B","0.55 GB","5.1 GB","0.02 TB",]
console.log(sort(["5.1 GB","19934563 B","224 kB","0.55 GB","0.04 kB","0.02 TB","2.4 MB",], true)); //["0.02 TB","5.1 GB","0.55 GB","19934563 B","2.4 MB","224 kB","0.04 kB"]
console.log(sort([], true)); //"Enter an List to be Sorted"
console.log(sort(["5.1   GB ","19934563 B"," 224 kB","  0.55 GB ","0.04 kB ","0.02  TB","2.4\tMB",], false));  //["0.04 kB "," 224 kB","2.4\tMB","19934563 B","  0.55 GB ","5.1   GB ","0.02  TB",]

module.exports = sort;