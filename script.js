var hasil = [];
var arraySatu = [2,-1,19,15,6,5];
var arrayDua = [30,3,17,10,12,-6];
var minimal;

function proses(satu=[],dua=[],a,b)
{
if(b<arraySatu.length){
    if(satu[a]>dua[b]){
        if(a==0&&b==0){
            minimal=satu[a] - dua[b];
            hasil[0] = satu[a];
            hasil[1] = dua[b];
        }else{
            if(satu[a]-dua[b]<minimal){
                minimal = satu[a]-dua[b];
                hasil[0] = satu[a];
                hasil[1] = dua[b];
            }
        }
    }else{
        if(a==0&&b==0){
            minimal = dua[b] - satu[a];
            hasil[0] = satu[a];
            hasil[1] = dua[b];
        }else{
            if(dua[b]-satu[a]<minimal){
                minimal = dua[b]-satu[a];
                hasil[0] = satu[a];
                hasil[1] = dua[b];
            }
        }
    }
    return proses(arraySatu,arrayDua,a,b+1);
}else{
    if(a==arrayDua.length){
        return document.getElementById('output').innerHTML = `[${hasil[0]}, ${hasil[1]}] Dengan Selisih ${minimal}`;
    }else{
        return proses(arraySatu,arrayDua,a+1,0);
    }
}
}

    proses(arraySatu,arrayDua,0,0);
