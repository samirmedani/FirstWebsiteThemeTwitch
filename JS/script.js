const persons = [
  {name:'polo',age:37},
  {name:'skybat',age:05},
  {name:'dana',age:17},
  {name:'Pyrow',age:18}
];


const searchInput = document.getElementById('test');

searchInput.addEventListener('keyup', function(){
  const input = searchInput.value;
  

  const result = persons.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));

  let suggestion = '';

  if(input !=''){
  result.forEach(resultItem =>
      suggestion +=`
        <div class="suggestion">${resultItem.name}</div>
      `
    
    )
  }

  document.getElementById('suggestions').innerHTML = suggestion;

})
