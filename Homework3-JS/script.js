function RecognizeType(someData) {
    let result = typeof someData;
    console.log(`The typeof is:` , result);
    return result
}
RecognizeType({ a:1 });
RecognizeType(2>1 && 7<8);
RecognizeType(5);
RecognizeType('nikola');
RecognizeType();

   