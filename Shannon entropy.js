s = WScript.StdIn.Readline();

countChar = s.length;
var isIn = {};
alphabet = new Array();
var n = 0;
for (var i = 0; i < countChar; i++)
{
    var char = s.charAt(i);
    if (!isIn[char])
    {
        alphabet.push(s.charAt(i));
        isIn[char] = true;
        n++;
    }
}
sum=0;
k=0;
for (var i = 0; i < n; i++)
{
    var f=0;
    f = s.split(alphabet[i]).length - 1;
    p = f/countChar;
    sum += p * (Math.log(p)/Math.log(n));
    if (k==alphabet.length) break;
    k++;
}
WScript.echo(-sum);