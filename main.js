function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.startClassifier('https://teachablemachine.withgoogle.com/models/4CstUyz-k/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error)
    {
        console.error(error);

    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML='I can hear-'+results[0].label;
        document.getElementById("result_confidence").innerHTML='Acurracy-'+(results)
        
    }
}