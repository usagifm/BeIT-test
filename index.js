import express from 'express';
// const fetch = require('node-fetch')
import fetch  from 'node-fetch';
const app = express()
const port = 3000

const options = {
	method: 'GET'
};

app.get('/',  async function (req, res)  {

    const url = `http://ecocim-backend-theone.beit.co.id/api/ManualConfig/TestBEIT`;
        const result = await fetch(url, options);
        var json = await result.json();
        var name = json.listNama
        var grade = json.listNilai
    

        const dictionary = new Map([
            [1, 'awal 1'],
            [2, 'awal 2'],
            [3, 'awal 3'],
            [4, 'awal 4'],
            [5, 'awal 5'],
            [6, 'awal 6'],
            [7, 'awal 7'],
            [8, 'awal 8'],
            [9, 'awal 9'],
            // [4, 'awal 4'],
        ]);
        

        // for (var i = 0; i < name.length; i++ ){
        //     console.log(name[i])
        // }

        var kelas = []


        for (var j = 0; j < grade.length; j++ ){
            // var batas = 0 
            // for (batas; batas < 5; batas++){
                
            
            // }
            console.log(grade[j])
        }

        const mapNonRepeated = new Map();


        await grade.forEach((number) => {

            // stores dictionary key
            const dictionaryKey = dictionary.get(number[0]);
            
            // checks if key exists in your final map
            const keyExists = mapNonRepeated.has(dictionaryKey);
            console.log(`on ${number} : ${keyExists}`)
            // if key exists in map add one to it
            if (keyExists){
                let value = mapNonRepeated.get(dictionaryKey);
                console.log("On Number, Value :", value)
                mapNonRepeated.set(dictionaryKey, value = value + 1);
                return;
            }
         
            // otherwise set it to 1
            mapNonRepeated.set(dictionaryKey, 1);
         });

         console.log("map : ", mapNonRepeated)


        res.send(mapNonRepeated)



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})