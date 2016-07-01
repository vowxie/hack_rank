/*begin
Description:

Take an array and take every other element out of that array. Always keep the first element and start removing with the next element.

Example:

myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];
None of the arrays will be empty, so you don't have to worry about that!
*/

function removeEveryOther(arr){
  //your code here
  var x=2
  for(let i=1;i<=arr.length;i++){
  if(i%x==0){
    arr.splice(i-1,1)
      x=x+1
  }
  }
   return arr 
}