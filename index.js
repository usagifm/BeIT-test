import express from 'express';
// const fetch = require('node-fetch')
import fetch from 'node-fetch';
const app = express()
const port = 3000

const options = {
    method: 'GET'
};

var months = [ "Empty","January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];


app.get('/', async function (req, res) {
    const url = `http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT`;
    const result = await fetch(url, options);
    var json = await result.json();
    var name = json.listNama
    var grade = json.listNilai
    var deadThisMonth = []
    var marriedBy2023 = []


    // Jaga jaga jika ada nilai dibawah 50
    var kelas = {
        "Kelas 10": {
            count_siswa: 0,
            siswa: [],
            value: 1
        },
        "Kelas 20": {
            count_siswa: 0,
            siswa: [],
            value: 2
        },
        "Kelas 30": {
            count_siswa: 0,
            siswa: [],
            value: 3
        },
        "Kelas 40": {
            count_siswa: 0,
            siswa: [],
            value: 4
        },
        "Kelas 50": {
            count_siswa: 0,
            siswa: [],
            value: 5
        },
        "Kelas 60": {
            count_siswa: 0,
            siswa: [],
            value: 6
        },
        "Kelas 70": {
            count_siswa: 0,
            siswa: [],
            value: 7
        },
        "Kelas 80": {
            count_siswa: 0,
            siswa: [],
            value: 8
        },
        "Kelas 90": {
            count_siswa: 0,
            siswa: [],
            value: 9
        },
        "Kelas Khusus": {
            count_siswa: 0,
            siswa: [],
            value: 0
        }

    }


    function assignTo(number,index) {

        switch (number) {
            case 1:
                kelas['Kelas 10'].count_siswa =   kelas['Kelas 10'].count_siswa + 1
                kelas['Kelas 10'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 2:
                kelas['Kelas 20'].count_siswa =   kelas['Kelas 20'].count_siswa + 1
                kelas['Kelas 20'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 3:
                kelas['Kelas 30'].count_siswa =   kelas['Kelas 30'].count_siswa + 1
                kelas['Kelas 30'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 4:
                kelas['Kelas 40'].count_siswa =   kelas['Kelas 40'].count_siswa + 1
                kelas['Kelas 40'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 5:
                kelas['Kelas 50'].count_siswa =   kelas['Kelas 50'].count_siswa + 1
                kelas['Kelas 50'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 6:
                kelas['Kelas 60'].count_siswa =   kelas['Kelas 60'].count_siswa + 1
                kelas['Kelas 60'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 7:
                kelas['Kelas 70'].count_siswa =   kelas['Kelas 70'].count_siswa + 1
                kelas['Kelas 70'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                break;
            case 8:
                kelas['Kelas 80'].count_siswa =   kelas['Kelas 80'].count_siswa + 1
                kelas['Kelas 80'].siswa.push({"nama ": name[index], "nilai": grade[index]})
                break;
            case 9:
                kelas['Kelas 90'].count_siswa =   kelas['Kelas 10'].count_siswa + 1
                kelas['Kelas 90'].siswa.push({"nama ": name[index], "nilai": grade[index]})
                break;
            case 0:
                    kelas['Kelas Khusus'].count_siswa =   kelas['Kelas Khusus'].count_siswa + 1
                    kelas['Kelas Khusus'].siswa.push({"nama ": name[index], "nilai ": grade[index]})
                    break;
            default:
        }


    }


    const isPrime = num => {
        for(let i = 2, s = Math.sqrt(num); i <= s; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }
    

    for (var j = 0; j < grade.length; j++ ){

        var checkPrime = isPrime(grade[j])
        
        var date =  new Date()
        const numString2 = String(grade[j]).charAt(1);

        // Tidak akan masuk, karena bulan 12 lebih dari satu digit
        if(checkPrime && Number(numString2) == date.getMonth()+1){
            deadThisMonth.push({"name": name[j], nilai: grade[j]})
        }

        if(name[j].includes("C")){
            if(name[j].includes("O")){
                assignTo(0,j)

                if(grade[j] % 7 == 0){
                    marriedBy2023.push({"name": name[j],"nilai": grade[j]})
                }
            }
        }else {
            const numString1 = String(grade[j]).charAt(0);
            assignTo(Number(numString1),j)    

        }

    }


        // clean up 
        if(kelas['Kelas 10'].count_siswa == 0){
            delete kelas['Kelas 10']
        }
        if(kelas['Kelas 20'].count_siswa == 0){
            delete kelas['Kelas 20']
        }
        if(kelas['Kelas 30'].count_siswa == 0){
            delete kelas['Kelas 30']
        }
        if(kelas['Kelas 40'].count_siswa == 0){
            delete kelas['Kelas 40']
        }
        if(kelas['Kelas 50'].count_siswa == 0){
            delete kelas['Kelas 50']
        }
        if(kelas['Kelas 60'].count_siswa == 0){
            delete kelas['Kelas 60']
        }
        if(kelas['Kelas 70'].count_siswa == 0){
            delete kelas['Kelas 70']
        }
        if(kelas['Kelas 80'].count_siswa == 0){
            delete kelas['Kelas 80']
        }
        if(kelas['Kelas 90'].count_siswa == 0){
            delete kelas['Kelas 90']
        }


    kelas['dead_by_this_month'] = {
        'current_month': months[date.getMonth()+1],
        'dead_list': deadThisMonth
    };
    kelas['married_by_2023'] = marriedBy2023;
    res.send(kelas)



})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})