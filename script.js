
let txt ='';
$('button').on('click', (event) => {
   try {
     if (event.target.innerText == '=') {
       txt = $('.display-input').val();
       txt = String(eval(txt));
       $('.display-input').val(txt);
     } else if (event.target.innerText == 'C') {
       txt = '';
       $('.display-input').val(txt);
     }
     else if ($(event.target).closest('button').attr('value') == 'del') {
       txt = txt.substring(0, txt.length-1);
       $('.display-input').val(txt);
     }
     else {
       txt += event.target.innerText;
       $('.display-input').val(txt);
     }
   } catch (error) {
      $('.display-input').val('o_O');
   }
 });
 
