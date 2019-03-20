$(document).ready(function(){

    var playBtn = document.querySelector('#playButton');
    playBtn.addEventListener('click',function(){
        location.reload();
    });

   function play(){ 
        let answer = prompt('How many side do you want [max is 64]?');

        if(answer>64 || answer<1){
            alert("Please choose 1-64 only");
            location.reload();
        }else{
            var gridWidth = Math.round(800 / answer);
            console.log(gridWidth);

            var container = document.querySelector('.container');
            console.log(container);
            container.style.display = 'flex';
            container.style.flexWrap = 'wrap';
            container.style.width = '850px';
            container.style.height = '850px';
            container.style.textAlign = 'center';
            //container.style.gridTemplateColumns = 'auto auto auto';
            //container.style.backgroundColor = 'black';
            //container.style.gridGap = '10px 10px'
            var gridNo =0;
            for (var a=0;a<answer;a++){
                for(var b=0;b<answer;b++){
                    gridNo++;
                    const content = document.createElement('div');
                    content.style.backgroundColor = '#f2f2f2';
                    //content.style.display='grid';
                    content.style.width =  gridWidth + 'px';
                    content.style.height = gridWidth + 'px';
                    content.value="0";
                    content.style.border = '0.1px solid black'
                    //content.textContent= gridNo;
                    content.addEventListener('mouseover',changeBackgroundColor);
                    container.appendChild(content);
                }
            }
        }

        function changeBackgroundColor(e){
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";

            var valueNode= e.target.value;
            console.log(valueNode);

            if(valueNode==10)
            {
                e.target.style.backgroundColor ='black';
            }else{
                e.target.style.backgroundColor=bgColor; 
                e.target.value++;
            }
        }
    }

    play()
});

