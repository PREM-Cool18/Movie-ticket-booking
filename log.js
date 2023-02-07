function valiname(uname,num)
{
    var patt=/^[A-za-Z]+$ /;
    var len=uname.value.length;
    if(len>num&&!uname.value.match(patt))
    {
        alert("fname should be alphabets and should not exceed 30");
        return false;
    }
    else{
     return true;
    }
}