//declaring variables
var score,activePlayer,CountryList,newWord,previousWord,winningScore;
var c,i,j,k;

var done=[];

i= 0;
c= 0;
k= 0; 
score= [0,0];
activePlayer= 0;
//beginning letter
previousWord = 'A';
//initialising winning score
winningScore =50;
CountryList= ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Austrian Empire","Azerbaijan","Bahamas",'Bangladesh','Barbados','Bavaria','Belarus','Belgium','Belize','Benin','Bolivia','Bosnia and Herzegovina','Botswana','Brazil','Brunei','Brunswick and Luneburg','Bulgaria','Burkina Faso','Burma','Burundi','Cabo Verde','Cambodia','Cameroon','Canada','Cayman Islands','Chad','Chile','China','Colombia','Comoros','Congo Free State','Costa Rica','Cote d’Ivoire','Croatia','Cuba','Cyprus','Czechia','Czechoslovakia','Democratic Republic of the Congo','Denmark','Djibouti','Dominica','Dominican Republic','Duchy of Parma','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Eswatini','Ethiopia','Fiji','Finland','France','Gabon','Gambia','Georgia','Germany','Ghana','Grand Duchy of Tuscany','Greece','Grenada','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Hanover','Hanseatic Republics','Hawaii','Hesse','Holy See','Honduras','Hungary',"Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Yugoslavia","Kiribati","Korea","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Lew Chew","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",'Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Mauritania','Mauritius','Mecklenburg-Schwerin','Mecklenburg-Strelitz','Mexico','Micronesia','Moldova','Monaco','Mongolia','Montenegro','Morocco','Mozambique','Namibia','Nassau','Nauru','Nepal','Netherlands','New Zealand','Nicaragua','Niger','Nigeria','North German Confederation','North German Union','North Macedonia','Norway','Oldenburg','Oman','Orange Free State','Pakistan','Palau','Panama','Papal States','Papua New Guinea','Paraguay','Peru','Philippines','Piedmont-Sardinia','Poland','Portugal','Qatar','Republic of Genoa','South Korea','Republic of the Congo','Romania','Russia','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Schaumburg-Lippe','Senegal','Serbia','Seychelles','Sierra Leone','Singapore','Slovakia','Slovenia','Solomon Islands','Somalia','South Africa','South Sudan','Spain','Sri Lanka','Sudan','Suriname','Sweden','Switzerland','Syria','Tajikistan','Tanzania','Texas','Thailand','Timor-Leste','Togo','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Tuvalu','Two Sicilies','Uganda','Ukraine','Union of Soviet Socialist Republics','United Arab Emirates','United Kingdom','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Wurttemberg','Yemen','Zambia','Zimbabwe'];

//to check entered country exist and unique
function check()
{
  //to check the last letter of prv and first letter of entered country
    newWord = document.getElementById('enter').value;
    
    if(newWord[0] === previousWord[previousWord.length-1]||previousWord==='')
    {
  //to check if entered country exists
    for (i = 0 ; i < 250; i++ )
    { 
        c = 0;
        if(((newWord.localeCompare(CountryList[i])) === 0)&&(!done.includes(newWord))) 
        {
             done[k++] = i;  
             score[activePlayer]+=5;
             done.unshift(newWord);
             document.getElementById('score-'+activePlayer).textContent = score[activePlayer]; 
             previousWord = newWord.toLocaleUpperCase();
             document.getElementById('enter').value = previousWord[previousWord.length-1];
             document.querySelector('.alert').textContent = '';  
             c =1;
             win ();
             activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
             break;    
        }
    }
    }
        
    if(c === 0)
    document.querySelector('.alert').textContent = 'Wrong Input or Country already Done !!!'; 

  document.querySelector('.active').textContent = 'PLAYER '+ eval('activePlayer+1')+ ': ';   

}

//to check if current player wins
function win() {
    if  (score[activePlayer]===winningScore)
    {   document.querySelector('.displayWin').textContent ='PLAYER '+eval('activePlayer+1')+ ' WINS';
        document.querySelector('.hit').disabled=true;
        document.querySelector('.pass').disabled=true;
    }
}

//to pass on to opponent
function changePlayer() {
    score[activePlayer]-=2;
    document.getElementById('score-'+activePlayer).textContent = score[activePlayer];
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.active').textContent = 'PLAYER '+ eval('activePlayer+1')+ ': ';   
    document.getElementById('enter').value = previousWord[previousWord.length-1];
    document.querySelector('.alert').textContent = '';
}

//to start new game
function newGame () {
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.displayWin').textContent = '';
    document.getElementById('enter').value = '' ;
    document.querySelector('.alert').textContent = '';
    document.querySelector('.hit').disabled=false;
    document.querySelector('.pass').disabled=false;
    done.splice(0,done.length);
    score = [0,0];
    activePlayer = 0;
}

document.querySelector('.active').textContent = 'PLAYER '+ eval('activePlayer+1') +': ';   
document.querySelector('.hit').addEventListener('click', check );
document.querySelector('.pass').addEventListener('click', changePlayer);
document.querySelector('.new').addEventListener('click', newGame );