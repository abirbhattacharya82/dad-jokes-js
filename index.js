function main()
{
    var data=require('./db/jokes.json');
    var n=data.length;
    var i=Math.floor(Math.random()*n);
    return data[i].joke;
}
module.exports=main;