
fetch('https://retos-tecnicos-backend.lizzie136.now.sh/bands')
.then(response => response.json())
.then(responseJson => {
    
    const wordsIgnored=[]
        const regex = /The\b|An\b|A\b/m;
        responseJson.forEach(band => {
            if (regex.test(band)==true){
                const newPositionToSort = band.split(' ')[1];
                wordsIgnored.push(`${newPositionToSort} ${band}`)        
            }else{
                const positionToSort = band.split(' ')[0];
                wordsIgnored.push(`${positionToSort} ${band}`) 
            }
            return wordsIgnored.sort()
        });
        
        const newregex = /\w+,?\s/;
        const printList = document.getElementById('print');
            wordsIgnored.forEach(bandSorted => {
            printList.insertAdjacentHTML('beforeend', `
            <li class='band-list'>${bandSorted.replace(newregex ,'')}<li>`);
        });
        
    })
    .catch(err => (err))