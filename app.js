const PRONOUN= ['the','our'];
const ADJETIVE = ['great', 'big' ];
const NOUN = ['justdoit', 'reckless', 'racoon'];
const EXTENSION =['it','ess','de']

window.onload = () =>{
    let result = generator();
    console.log(result);
    
}


function generator() {
    let domain = []
    for (let i in PRONOUN) {
        // let pronombre = PRONOUN[i]
        // console.log({pronombre})
        for (let j in ADJETIVE) {
            // let adjetivo = ADJETIVE[j];
            // console.log({adjetivo})
            for (let k in NOUN) {
                // let sujeto = NOUN[k]
                // console.log({sujeto})
                for (const l in EXTENSION) {
                    let semejanteAlaExt = NOUN[k].slice(-EXTENSION[l].length);
                    console.log(semejanteAlaExt);
                        if ( semejanteAlaExt == EXTENSION[l]) {
                            domain.push(PRONOUN[i].concat(ADJETIVE[j],(NOUN[k].slice(0,-EXTENSION[l].length)),'.',EXTENSION[l]));
                        }else if(semejanteAlaExt !== EXTENSION[l]){
                            domain.push(PRONOUN[i].concat(ADJETIVE[j],NOUN[k],'.',EXTENSION[l])); 
                        }
                    }
                }
            }
        }
    return domain    
}
