function MudarModalidade(){
    var select = document.getElementById("Modalidades");
    var opcaoTexto = select.options[select.selectedIndex].text;

    document.getElementById("modalidade").innerHTML = opcaoTexto
    document.getElementById("horario_inicio").value = "" 
    document.getElementById("nickname").value = "" 
    document.getElementById("nickaluno").value = "" 
    document.getElementById("printscreen1").value = "" 
    document.getElementById("printscreen2").value = ""
    document.getElementById("nick_infratores").value = "" 

    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0, l = inputs.length; i < l; i++){
        inputs[i].checked = false;
    }

    if(opcaoTexto=="Curso Operacional Tático"){
        document.getElementById("COT").style.display ="block"
        document.getElementById("RDouRR").style.display ="none"
        document.getElementById("RFQouRDI").style.display ="none"
       
    }
    if(opcaoTexto=="Ronda de Divulgação"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="block"
        document.getElementById("RFQouRDI").style.display ="none"

    }
    if(opcaoTexto=="Ronda de Recrutamento"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="block"
        document.getElementById("RFQouRDI").style.display ="none"

    }
    if(opcaoTexto=="Ronda de Fechar Quartos"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="none"
        document.getElementById("RFQouRDI").style.display ="block"

    }
    if(opcaoTexto=="Ronda de Denunciar Infrator"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="none"
        document.getElementById("RFQouRDI").style.display ="block"

    }
}

function SubForm(){
    var select = document.getElementById("Modalidades");
    var opcaoTexto = select.options[select.selectedIndex].text;

    if(opcaoTexto == "Ronda de Recrutamento" || opcaoTexto == "Ronda de Divulgação"){
        document.getElementById("nick").innerHTML = nickname
        var printscreen = document.getElementById("printscreen1").value

    } else if (opcaoTexto == "Ronda de Fechar Quartos" || opcaoTexto == "Ronda de Denunciar Infrator"){
        document.getElementById("nick").innerHTML = nickname
        var printscreen = document.getElementById("printscreen2").value
    } else if (opcaoTexto == "Curso Operacional Tático"){
        var printscreen = ""
    }
    

    var nickname = document.getElementById("nickname").value
    var infratores = document.getElementById("nick_infratores").value
    var inicio = document.getElementById("horario_inicio").value
    var aluno = document.getElementById("nickaluno").value
    
    if (document.getElementById('Aprovado').checked) {
        document.getElementById("resultado_cot").innerHTML = "Aprovado"
    } else if (document.getElementById('Reprovado').checked){
        document.getElementById("resultado_cot").innerHTML = "Reprovado"
    }

    document.getElementById("nick").innerHTML = nickname
    document.getElementById("nick_aluno").innerHTML = aluno
    document.getElementById("print").innerHTML = printscreen
    document.getElementById("infrator").innerHTML = infratores
    document.getElementById("hora_inicio").innerHTML = inicio



    $.ajax({
        url:"https://api.apispreadsheets.com/data/VzOCYvmp64PCLPIC/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}