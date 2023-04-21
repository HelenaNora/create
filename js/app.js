
$(document).ready(function(){
    // Start Nav
    $(window).scroll(function(){
        let getscrolltop=$(this).scrollTop();
        // console.log(getscrolltop);
        if(getscrolltop>=80){
            $('.navs').addClass('menu');
        }else{
            $('.navs').removeClass('menu');
        }
    })
    // End Nav
    // Start Right Side Bar
    $('.buttons').click(function(){
        // $(".navbuttons").css("display","block");
        $(".navbuttons").show();
    });
    $('.btn-closes').click(function(){
        $(".navbuttons").hide();
    });
    // End Right Side Bar
    // Start Bunner Section
    const language=["Web Apps","WordPress","Mobile Apps"];
    const gettextani=document.querySelector('.textanis');
    // console.log(texts[1]);
    function* generator(){
        var idx=0;
        while(true){
            yield idx++;
            if(idx>2){
                idx=0
            }
        }
    }
    function showwords(word){
    //    console.log(word);
        let x=0;
        gettextani.innerHTML='';
        let showintval=setInterval(function(){
            if(x>=word.length){
                clearInterval(showintval);
                deletewords();
            }else{
                gettextani.innerHTML +=word[x];
                x++;
            }
        },250);
    }
    function deletewords(){
        let  getword=gettextani.innerHTML;
        // console.log(getword);

        let getlastidx=getword.length-1;
        // console.log(getlastidx);

        let delintval=setInterval(function(){
            if(getlastidx>=0){
                gettextani.innerHTML=gettextani.innerHTML.substring(0,gettextani.innerHTML.length-1);
                getlastidx--;
            }else{
                showwords(language[gen.next().value])
                clearInterval(delintval);
            }
        },250)
    }
    let gen=generator();
    showwords(language[gen.next().value]);
    
    // End Bunner Section

});
//Start footer Section
let footeryears=document.getElementById('year');

const year=new Date();
years=year.getUTCFullYear();
// console.log(years);
footeryears.textContent=years;
// End footer Section